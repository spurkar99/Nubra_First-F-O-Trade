(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./fees.js'));
  else root.FTEngine = factory(root.FTFees);
}(typeof globalThis !== 'undefined' ? globalThis : this, function (Fees) {
  'use strict';
  var RULES={version:1, staleMs:30000, maxSpreadPercent:5, maxLots:100, maxPricePaise:1000000000};
  function positive(n){return Number.isSafeInteger(n)&&n>0;}
  function nonnegative(n){return Number.isSafeInteger(n)&&n>=0;}
  function error(code,message){return {code:code,message:message};}
  function money(p){return typeof p==='number'&&Number.isFinite(p)?'₹'+(p/100).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2}):'Unavailable';}
  function level(p){return typeof p==='number'&&Number.isFinite(p)?(p/100).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2}):'Unavailable';}
  function parsePaise(s){
    s=String(s).trim(); if(!/^\d+(\.\d{1,2})?$/.test(s))return null;
    var parts=s.split('.'), p=Number(parts[0])*100+Number(((parts[1]||'')+'00').slice(0,2));
    return nonnegative(p)&&p<=RULES.maxPricePaise?p:null;
  }
  function contractErrors(c,now){
    var e=[];
    if(!c||!c.id||!positive(c.lotSize)||!positive(c.tickPaise)||!positive(c.strikePaise)||
      !positive(c.expiryMs)||!['CE','PE'].includes(c.optionType)||c.version==null){return [error('METADATA','Contract metadata is missing or invalid.')];}
    if(c.assetType!=='INDEX'||c.settlement!=='CASH')e.push(error('UNSUPPORTED','Only cash-settled index option purchases are supported. Stock options and futures are outside this prototype.'));
    if(now>=c.expiryMs)e.push(error('EXPIRED','This contract has expired in the simulation.'));
    return e;
  }
  function quoteErrors(q,now,contractId){
    if(!q||q.contractId!==contractId||!nonnegative(q.asOfMs)||q.version==null)return [error('QUOTE','Quote metadata is unavailable or for another contract.')];
    var e=[];
    if(now-q.asOfMs>RULES.staleMs||q.asOfMs>now)e.push(error('STALE','Quote is stale or dated ahead of the simulation clock. Refresh and review again.'));
    if(!positive(q.askPaise)||!positive(q.askUnits)||!positive(q.bidPaise)||!positive(q.bidUnits))e.push(error('NO_BID','A two-sided executable quote is unavailable. An exit price cannot be assumed.'));
    else if(q.askPaise<q.bidPaise)e.push(error('CROSSED','Quote has an invalid crossed spread.'));
    else if((q.askPaise-q.bidPaise)*200>(q.askPaise+q.bidPaise)*RULES.maxSpreadPercent)e.push(error('SPREAD','Bid/ask spread exceeds the prototype threshold. Review is blocked.'));
    return e;
  }
  function orderErrors(c,o){
    var e=[]; if(!o||!c)return [error('ORDER','Select a contract and enter an order.')];
    if(o.contractId!==c.id)e.push(error('CONTRACT','Order and selected contract differ.'));
    if(!positive(o.lots)||o.lots>RULES.maxLots)e.push(error('QUANTITY','Lots must be a whole number from 1 to 100 (prototype limit).'));
    if(!positive(o.limitPaise)||o.limitPaise>RULES.maxPricePaise||o.limitPaise%c.tickPaise!==0)e.push(error('PRICE','Enter a positive limit price that matches the contract tick.'));
    if(!((o.intent==='OPEN'&&o.side==='BUY')||(o.intent==='CLOSE'&&o.side==='SELL')))e.push(error('OPEN_SELL','Opening option sales are outside this prototype. Selling to close an existing long is supported.'));
    if(!['LIMIT','SL_LIMIT'].includes(o.type)||o.validity!=='DAY'||o.product!=='SIM_CARRY')e.push(error('ORDER_TYPE','Only DAY limit orders and closing stop-limit orders are supported.'));
    if(o.type==='SL_LIMIT'&&(o.intent!=='CLOSE'||!positive(o.triggerPaise)||o.triggerPaise%c.tickPaise!==0||o.limitPaise>o.triggerPaise))e.push(error('STOP','A closing sell stop needs a positive, tick-valid trigger at or above its limit.'));
    return e;
  }
  function intrinsic(c,s){return c.optionType==='CE'?Math.max(s-c.strikePaise,0):Math.max(c.strikePaise-s,0);}
  function feeContext(p,q,intrinsicPerUnit){return {premiumPaise:p*q,intrinsicPaise:(intrinsicPerUnit||0)*q};}
  function expiry(c,p,q,s,fees){
    if(!nonnegative(s)||!positive(p)||!positive(q))throw new Error('Invalid expiry calculation input.');
    var payoff=intrinsic(c,s)*q,premium=p*q;
    if(!Number.isSafeInteger(payoff)||!Number.isSafeInteger(premium))throw new Error('Calculation exceeds integer bounds.');
    return payoff-premium-Fees.path(fees,'SETTLEMENT',feeContext(p,q,0),{premiumPaise:payoff,intrinsicPaise:payoff});
  }
  function breakEven(c,p,q,fees){
    var zero={premiumPaise:0,intrinsicPaise:0},entry=feeContext(p,q,0);
    if(Fees.flatPath(fees)){
      var cost=Fees.path(fees,'SETTLEMENT',entry,zero);
      var numerator=c.optionType==='CE'?(c.strikePaise+p)*q+cost:(c.strikePaise-p)*q-cost;
      var root=(c.optionType==='CE'||numerator>=0)?numerator/q:null;
      return {root:root,numerator:numerator,denominator:q,status:root===null?'NO_FEASIBLE':'SOLVED',
        threshold:root===null?null:(c.optionType==='CE'?Math.ceil(root):Math.floor(root)),
        canProfit:c.optionType==='CE'||numerator>0};
    }
    if(!Fees.monotoneSettlement(fees,q))return {root:null,status:'UNSUPPORTED_FEES',canProfit:null,threshold:null};
    var call=c.optionType==='CE',lo=call?c.strikePaise:0,hi=call?RULES.maxPricePaise:c.strikePaise;
    var lower=expiry(c,p,q,lo,fees),upper=expiry(c,p,q,hi,fees);
    if((call&&upper<0)||(!call&&lower<0))return {root:null,status:call?'OUTSIDE_RANGE':'NO_FEASIBLE',canProfit:false,threshold:null};
    while(lo<hi){var mid=call?Math.floor((lo+hi)/2):Math.ceil((lo+hi)/2);var net=expiry(c,p,q,mid,fees);
      if(call){if(net>=0)hi=mid;else lo=mid+1;}else{if(net>=0)lo=mid;else hi=mid-1;}}
    return {root:lo,threshold:lo,status:'SOLVED_GRID',numerator:null,denominator:null,
      canProfit:call?upper>0:lower>0,residualPaise:expiry(c,p,q,lo,fees)};
  }
  function analyse(c,o,fees){
    if(!Fees.valid(fees))throw new Error('Fees unavailable; costs are not zero.');
    var errs=orderErrors(c,o);if(errs.length)throw new Error(errs[0].message);
    var q=o.lots*c.lotSize,p=o.limitPaise,premium=q*p;
    if(!Number.isSafeInteger(premium)||!Number.isSafeInteger(c.strikePaise*q))throw new Error('Calculation exceeds integer bounds.');
    var entryCtx=feeContext(p,q,0),zero={premiumPaise:0,intrinsicPaise:0};
    var entryFee=Fees.charge(fees,'ENTRY',entryCtx),be=breakEven(c,p,q,fees);
    if(!nonnegative(premium+entryFee))throw new Error('Entry funds exceed integer bounds.');
    var bePayoff=be.root==null?0:intrinsic(c,be.threshold)*q;
    var path=Fees.path(fees,'SETTLEMENT',entryCtx,{premiumPaise:bePayoff,intrinsicPaise:bePayoff});
    var atZero=Fees.path(fees,'SETTLEMENT',entryCtx,zero),exitZero=Fees.path(fees,'EXIT',entryCtx,zero);
    var maxTotal=Fees.supportsBound(fees)?premium+Math.max(exitZero,atZero):null;
    return {units:q,premiumPaise:premium,entryFeePaise:entryFee,entryFundsPaise:premium+entryFee,
      feeLabel:Fees.label(fees),feeProfileId:fees.id,entryBreakdown:Fees.quote(fees,'ENTRY',entryCtx).items,
      expiryPathFeePaise:path,zeroPayoffPathFeePaise:atZero,exitPathFeePaise:Fees.path(fees,'EXIT',entryCtx,entryCtx),grossMaxLossPaise:premium,
      maxLossIncludingCostsPaise:maxTotal,grossBreakEvenPaise:c.optionType==='CE'?c.strikePaise+p:c.strikePaise-p,
      breakEvenPaise:be.root,breakEvenStatus:be.status,breakEvenResidualPaise:be.residualPaise||0,
      breakEvenNumerator:be.numerator,breakEvenDenominator:be.denominator,thresholdPaise:be.threshold,
      canProfitAtExpiry:be.canProfit,grossMaxProfitPaise:c.optionType==='PE'?q*(c.strikePaise-p):null,
      netMaxProfitPaise:c.optionType==='PE'?expiry(c,p,q,0,fees):null};
  }
  function preflight(c,o,q,fees,context,now){
    var e=contractErrors(c,now);e=e.concat(orderErrors(c,o));
    if(c)e=e.concat(quoteErrors(q,now,c.id));
    if(!Fees.valid(fees))e.push(error('FEES','Fees are missing. A cost-aware review cannot be completed.'));
    if(e.length)return {ok:false,errors:e,analysis:null};
    var a;try{a=analyse(c,o,fees);}catch(err){return {ok:false,errors:[error('CALC',err.message)],analysis:null};}
    if(o.intent==='OPEN'&&['UNSUPPORTED_FEES','OUTSIDE_RANGE'].includes(a.breakEvenStatus))e.push(error('FEES_MODEL','Cost-aware breakeven cannot be verified for this fee model or search range. Submission is blocked.'));
    if(o.intent==='OPEN'){
      if(!context||!nonnegative(context.availablePaise)||a.entryFundsPaise>context.availablePaise)e.push(error('FUNDS','Available simulated funds do not cover entry funds at the limit.'));
      if(context&&context.lossBudgetPaise!=null){
        if(!nonnegative(context.lossBudgetPaise))e.push(error('BUDGET_INPUT','Enter a non-negative rupee budget or choose not sure.'));
        else if(a.maxLossIncludingCostsPaise==null)e.push(error('BUDGET_UNKNOWN','A bounded cost comparison is unavailable.'));
        else if(a.maxLossIncludingCostsPaise>context.lossBudgetPaise)e.push(error('BUDGET','Exposure including the stated single-exit costs exceeds your entered loss budget. Edit, explicitly change your budget, or back out.'));
      }
    }
    return {ok:e.length===0,errors:e,analysis:a};
  }
  function realised(p,e,q,fees){
    if(!positive(p)||!nonnegative(e)||!positive(q))throw new Error('Invalid realised P&L inputs.');
    return q*(e-p)-Fees.path(fees,'EXIT',feeContext(p,q,0),feeContext(e,q,0));
  }
  return {RULES:RULES,money:money,level:level,parsePaise:parsePaise,positive:positive,nonnegative:nonnegative,
    contractErrors:contractErrors,quoteErrors:quoteErrors,orderErrors:orderErrors,analyse:analyse,
    preflight:preflight,expiry:expiry,realised:realised,intrinsic:intrinsic,feeContext:feeContext};
}));
