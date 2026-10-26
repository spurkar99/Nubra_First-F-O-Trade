(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./engine.js'),require('./fees.js'),require('./fixtures.js'));
  else root.FTSimulator=factory(root.FTEngine,root.FTFees,root.FTFixtures);
}(typeof globalThis!=='undefined'?globalThis:this,function(E,Fees,F){
  'use strict';
  var ACTIVE=['PENDING','PARTIAL','TRIGGER_WAIT'];
  function Simulation(options){this.initialPaise=options&&options.initialPaise!=null?options.initialPaise:2500000;this.reset();}
  Simulation.prototype.reset=function(){
    this.clock=F.CLOCK;this.cashPaise=this.initialPaise;this.contracts={};this.quotes={};
    F.contracts.forEach(function(c){this.contracts[c.id]=F.clone(c);this.quotes[c.id]=F.quote(c.id);},this);
    this.fees=F.activeFees();this.rules=F.clone(E.RULES);this.orders=[];this.positions={};this.idempotency={};
    this.draft=null;this.reviewRecord=null;this.user={firstOptions:true,lossBudgetPaise:null,holdingPeriod:'UNSURE'};
    this.seq=0;this.events=[];this.lastResult=null;return this;
  };
  Simulation.prototype.event=function(text){this.events.unshift({time:this.clock,text:text});this.events=this.events.slice(0,30);};
  Simulation.prototype.active=function(o){return ACTIVE.includes(o.status);};
  Simulation.prototype.reservedPaise=function(){
    return this.orders.reduce(function(sum,o){return sum+(this.active(o)&&o.intent==='OPEN'?
      o.remainingUnits*o.limitPaise+Fees.charge(o.feeProfile,'ENTRY',{premiumPaise:o.fillPremiumPaise+o.remainingUnits*o.limitPaise,intrinsicPaise:0})-o.chargedFeePaise:0);}.bind(this),0);
  };
  Simulation.prototype.availablePaise=function(){return this.cashPaise-this.reservedPaise();};
  Simulation.prototype.closingReserved=function(id){return this.orders.reduce(function(s,o){return s+(o.contractId===id&&o.intent==='CLOSE'&&this.active(o)?o.remainingUnits:0);}.bind(this),0);};
  Simulation.prototype.openUnits=function(id){return this.positions[id]?this.positions[id].units:0;};
  Simulation.prototype.setDraft=function(o){this.draft=F.clone(o);return this.draft;};
  Simulation.prototype.signature=function(){
    var d=this.draft,c=d&&this.contracts[d.contractId],q=d&&this.quotes[d.contractId];
    return JSON.stringify({draft:d,contract:c,quote:q,fees:this.fees,rules:this.rules,user:this.user,
      available:this.availablePaise(),units:d?this.openUnits(d.contractId):0,closing:d?this.closingReserved(d.contractId):0,clock:this.clock});
  };
  Simulation.prototype.check=function(){
    var d=this.draft,c=d&&this.contracts[d.contractId],q=d&&this.quotes[d.contractId];
    var result=E.preflight(c,d,q,this.fees,{availablePaise:this.availablePaise(),lossBudgetPaise:this.user.lossBudgetPaise},this.clock);
    if(d&&d.intent==='OPEN'&&this.user.lossBudgetInvalid){result.errors.push({code:'BUDGET_INPUT',message:'Enter a valid non-negative rupee budget with at most two decimals, or choose not sure.'});result.ok=false;}
    if(d&&d.intent==='CLOSE'&&result.analysis&&result.analysis.units>this.openUnits(d.contractId)-this.closingReserved(d.contractId)){
      result.errors.push({code:'CLOSE_QTY',message:'Exit quantity exceeds the unreserved long position. This close cannot open a short.'});result.ok=false;
    }
    return result;
  };
  Simulation.prototype.review=function(){
    var check=this.check();
    this.reviewRecord={signature:this.signature(),result:check,id:'R'+(++this.seq)};
    return check;
  };
  Simulation.prototype.reviewChanged=function(){return !!this.reviewRecord&&this.reviewRecord.signature!==this.signature();};
  Simulation.prototype.submit=function(key){
    if(key&&this.idempotency[key])return {ok:true,order:this.idempotency[key],duplicate:true};
    if(!key)return {ok:false,code:'KEY',message:'An idempotency key is required.'};
    if(!this.reviewRecord)return {ok:false,code:'REVIEW',message:'Review the order before submitting.'};
    if(this.reviewChanged())return {ok:false,code:'REVIEW_CHANGED',message:'Order data changed after review. Recalculate and review again.'};
    var check=this.check();if(!check.ok)return {ok:false,code:check.errors[0].code,message:check.errors[0].message};
    var o=F.clone(this.draft);o.id='SIM-'+String(++this.seq).padStart(4,'0');o.units=check.analysis.units;o.remainingUnits=o.units;
    o.filledUnits=0;o.fillPremiumPaise=0;o.averageFillPaise=null;o.feeCharged=false;o.chargedFeePaise=0;
    o.feeProfile=F.clone(this.fees);o.status=o.type==='SL_LIMIT'?'TRIGGER_WAIT':'PENDING';
    o.createdAt=this.clock;o.reason='';o.events=['Submitted: no fill assumed'];
    this.orders.push(o);this.idempotency[key]=o;this.event(o.id+' submitted; '+o.units+' units pending.');
    return {ok:true,order:o};
  };
  Simulation.prototype.order=function(id){return this.orders.find(function(o){return o.id===id;});};
  Simulation.prototype.quoteChange=function(id,patch){
    var q=this.quotes[id]||{contractId:id,version:0};Object.keys(patch).forEach(function(k){q[k]=patch[k];});q.version=(q.version||0)+1;this.quotes[id]=q;
  };
  Simulation.prototype.fill=function(id,kind){
    var o=this.order(id);if(!o||!this.active(o))return {ok:false,code:'STATE',message:'Only an active order can fill.'};
    var c=this.contracts[o.contractId],q=this.quotes[o.contractId];
    var errs=E.contractErrors(c,this.clock).concat(E.quoteErrors(q,this.clock,c.id));
    if(errs.length)return {ok:false,code:errs[0].code,message:errs[0].message};
    if(o.status==='TRIGGER_WAIT'){
      if(!E.nonnegative(q.ltpPaise)||q.ltpPaise>o.triggerPaise)return {ok:false,code:'NOT_TRIGGERED',message:'The stop trigger has not been reached. Position remains open.'};
      o.status='PENDING';o.events.push('Stop activated; limit still needs a matching bid.');
    }
    var isBuy=o.intent==='OPEN',price=isBuy?q.askPaise:q.bidPaise;
    if((isBuy&&price>o.limitPaise)||(!isBuy&&price<o.limitPaise))return {ok:false,code:'NOT_MARKETABLE',message:'No matching price at the limit. Order remains pending; any position remains open.'};
    var remLots=o.remainingUnits/c.lotSize;
    if(kind==='partial'&&remLots<2)return {ok:false,code:'ONE_LOT',message:'A 50% partial fill needs at least two remaining lots. This prototype never fills fractional lots.'};
    var desired=kind==='partial'?Math.floor(remLots/2)*c.lotSize:o.remainingUnits;
    var depth=isBuy?q.askUnits:q.bidUnits,units=Math.min(desired,Math.floor(depth/c.lotSize)*c.lotSize);
    if(units<=0)return {ok:false,code:'DEPTH',message:'Not enough quoted depth for one whole lot. Order stays pending.'};
    var cumulativePremium=o.fillPremiumPaise+units*price;
    var fee=Fees.charge(o.feeProfile,isBuy?'ENTRY':'EXIT',{premiumPaise:cumulativePremium,intrinsicPaise:0})-o.chargedFeePaise;
    if(isBuy){
      this.cashPaise-=units*price+fee;
      var p=this.positions[c.id];
      if(!p)p=this.positions[c.id]={contractId:c.id,units:0,costBasisPaise:0,entryFeesRemainingPaise:0,realisedPaise:0,status:'OPEN',feeProfile:F.clone(o.feeProfile)};
      p.units+=units;p.costBasisPaise+=units*price;p.entryFeesRemainingPaise+=fee;p.status='OPEN';
      q.askUnits-=units;
    }else{
      var position=this.positions[c.id];
      if(!position||units>position.units)return {ok:false,code:'CLOSE_QTY',message:'Closing units exceed the position. No short position was created.'};
      var basis=units===position.units?position.costBasisPaise:Math.round(position.costBasisPaise*units/position.units);
      var entryFee=units===position.units?position.entryFeesRemainingPaise:Math.round(position.entryFeesRemainingPaise*units/position.units);
      var net=units*price-basis-entryFee-fee;
      position.realisedPaise+=net;position.costBasisPaise-=basis;position.entryFeesRemainingPaise-=entryFee;position.units-=units;
      position.status=position.units?'OPEN':'CLOSED';this.cashPaise+=units*price-fee;q.bidUnits-=units;
      o.realisedPaise=(o.realisedPaise||0)+net;
    }
    o.feeCharged=true;o.chargedFeePaise+=fee;o.fillPremiumPaise+=units*price;o.filledUnits+=units;o.remainingUnits-=units;
    o.averageFillPaise=o.fillPremiumPaise/o.filledUnits;o.status=o.remainingUnits?'PARTIAL':'FILLED';
    o.events.push(units+' units filled at '+E.money(price)+'.');
    this.event(o.id+': '+units+' units filled at '+E.money(price)+'; '+o.remainingUnits+' remain.');
    this.lastResult={orderId:o.id,units:units,pricePaise:price};return {ok:true,order:o,units:units,pricePaise:price};
  };
  Simulation.prototype.cancel=function(id){
    var o=this.order(id);if(!o||!this.active(o))return {ok:false,code:'STATE',message:'This order has no active remainder to cancel.'};
    o.events.push('Cancellation requested.');o.status='CANCELLED';o.reason='Unfilled remainder cancelled in simulation.';
    o.cancelledUnits=o.remainingUnits;o.remainingUnits=0;o.events.push('Remainder cancelled; existing fills retained.');
    this.event(o.id+' remainder cancelled. Filled positions remain open.');return {ok:true,order:o};
  };
  Simulation.prototype.reject=function(id){
    var o=this.order(id);if(!o||!this.active(o))return {ok:false,code:'STATE',message:'Only an active remainder can be rejected.'};
    o.rejectedUnits=o.remainingUnits;o.remainingUnits=0;o.status='REJECTED';o.reason='Evaluator-triggered rejection of remaining units.';
    o.events.push(o.reason);this.event(o.id+' remainder rejected; any fills remain.');return {ok:true,order:o};
  };
  Simulation.prototype.settle=function(settlementPaise){
    if(!E.nonnegative(settlementPaise)||settlementPaise>E.RULES.maxPricePaise)return {ok:false,code:'SETTLEMENT',message:'Enter a valid non-negative settlement level.'};
    if(this.clock>=F.EXPIRY)return {ok:false,code:'SETTLED',message:'The expiry event has already been processed. Reset to start a new simulation.'};
    if(Object.keys(this.positions).some(function(id){var p=this.positions[id];return p.units>0&&!Fees.valid(p.feeProfile);},this))return {ok:false,code:'FEES',message:'Settlement fees are unavailable.'};
    this.clock=F.EXPIRY;
    this.orders.forEach(function(o){if(this.active(o)){o.expiredUnits=o.remainingUnits;o.remainingUnits=0;o.status='EXPIRED';o.events.push('DAY remainder expired without a fill.');}},this);
    var settled=[];
    Object.keys(this.positions).forEach(function(id){
      var p=this.positions[id];if(!p.units)return;var c=this.contracts[id];
      var intrinsic=c.optionType==='CE'?Math.max(settlementPaise-c.strikePaise,0):Math.max(c.strikePaise-settlementPaise,0);
      var proceeds=intrinsic*p.units,fee=Fees.charge(p.feeProfile,'SETTLEMENT',{premiumPaise:proceeds,intrinsicPaise:proceeds});
      var net=proceeds-p.costBasisPaise-p.entryFeesRemainingPaise-fee;
      this.cashPaise+=proceeds-fee;p.realisedPaise+=net;p.settlementPaise=settlementPaise;p.settlementNetPaise=net;
      p.settledUnits=p.units;p.units=0;p.costBasisPaise=0;p.entryFeesRemainingPaise=0;p.status='SETTLED';settled.push(id);
    },this);
    this.event('Synthetic expiry processed at '+E.level(settlementPaise)+'. Pending orders expired.');return {ok:true,settled:settled};
  };
  Simulation.prototype.applyScenario=function(name,id){
    id=id||(this.draft&&this.draft.contractId)||'A';
    var fresh=F.quote(id);if(!fresh)return;
    fresh.version=(this.quotes[id]?this.quotes[id].version:0)+1;fresh.asOfMs=this.clock;
    this.quotes[id]=fresh;this.fees=F.activeFees();
    if(name==='stale')this.quotes[id].asOfMs=this.clock-31000;
    if(name==='wide'){this.quotes[id].bidPaise=Math.floor(fresh.askPaise*.8/5)*5;}
    if(name==='no-bid'){this.quotes[id].bidPaise=null;this.quotes[id].bidUnits=0;}
    if(name==='missing-fees')this.fees=null;
    if(name==='stop-gap'){
      var closing=this.orders.slice().reverse().find(function(o){return o.contractId===id&&o.intent==='CLOSE'&&o.type==='SL_LIMIT'&&this.active(o);},this);
      if(closing){var price=Math.max(5,closing.limitPaise-100);this.quoteChange(id,{bidPaise:price,askPaise:price+5,ltpPaise:price});}
    }
    if(name==='changed'){
      if(this.draft&&!this.reviewRecord)this.review();
      this.quoteChange(id,{askPaise:fresh.askPaise+5,ltpPaise:fresh.askPaise+5});
    }
    this.event('Evaluator scenario: '+name+' (synthetic).');
  };
  return {Simulation:Simulation,ACTIVE:ACTIVE};
}));
