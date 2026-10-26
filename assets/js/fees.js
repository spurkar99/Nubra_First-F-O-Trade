(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./fee-config.js'));
  else root.FTFees=factory(root.FTFeeConfig);
}(typeof globalThis!=='undefined'?globalThis:this,function(Config){
  'use strict';
  // Named, unchanged flat-fee regression. Existing fixtures deliberately keep this representation.
  var LEGACY_FLAT={id:'synthetic-fixed-v1',version:1,name:"Synthetic demo fees (not Nubra's charges)",
    entryPaise:2500,exitPaise:2500,settlementPaise:2500,per:'ORDER',bounded:true,synthetic:true};
  var EVENTS=['ENTRY','EXIT','SETTLEMENT'];
  function integer(n){return Number.isSafeInteger(n)&&n>=0;}
  function clone(x){return JSON.parse(JSON.stringify(x));}
  function structured(p){return !!p&&p.schemaVersion===2;}
  function valid(p){
    if(!p||!p.id||p.version==null)return false;
    if(!structured(p))return p.per==='ORDER'&&['entryPaise','exitPaise','settlementPaise'].every(function(k){return integer(p[k]);});
    if(!p.synthetic&&!p.verified)return false;
    if(!p.events)return false;
    return EVENTS.every(function(event){
      var rows=p.events[event],ids={};if(!Array.isArray(rows)||!rows.length)return false;
      if(!Config.categories.every(function(cat){return rows.some(function(r){return r.category===cat;});}))return false;
      return rows.every(function(r){
        if(!r.id||ids[r.id])return false;ids[r.id]=true;
        return Config.categories.includes(r.category)&&integer(r.fixedPaise)&&integer(r.ratePpm)&&r.ratePpm<=1000000&&
          ['PREMIUM','INTRINSIC','COMPONENTS'].includes(r.base)&&
          (r.base!=='COMPONENTS'||(r.category==='gst'&&Array.isArray(r.basisCategories)&&r.basisCategories.length>0&&r.basisCategories.every(function(cat){return Config.categories.includes(cat)&&cat!=='gst';})))&&
          (r.category!=='gst'||r.base==='COMPONENTS')&&
          integer(r.minPaise)&&(r.capPaise===null||(integer(r.capPaise)&&r.capPaise>=r.minPaise))&&
          ['ALWAYS','ITM'].includes(r.condition)&&['HALF_UP','CEIL','FLOOR'].includes(r.rounding)&&integer(r.roundToPaise)&&r.roundToPaise>0;
      });
    });
  }
  function roundRatio(numerator,denominator,method,step){
    var d=BigInt(denominator)*BigInt(step),n=BigInt(numerator),q=n/d,r=n%d;
    if(method==='CEIL'&&r>0n)q++;if(method==='HALF_UP'&&r*2n>=d)q++;
    var out=Number(q*BigInt(step));if(!Number.isSafeInteger(out))throw new Error('Fee exceeds integer bounds.');return out;
  }
  function quote(p,event,ctx){
    if(!valid(p)||!EVENTS.includes(event))throw new Error('Missing or invalid fee profile/event. Costs cannot be calculated.');
    if(!structured(p)){var flat=p[{ENTRY:'entryPaise',EXIT:'exitPaise',SETTLEMENT:'settlementPaise'}[event]];return {totalPaise:flat,items:[{id:'flat-regression',category:'aggregate',amountPaise:flat}],synthetic:!!p.synthetic};}
    ctx=ctx||{};if(!integer(ctx.premiumPaise)||!integer(ctx.intrinsicPaise))throw new Error('Fee bases are missing or invalid.');
    var items=[],sums={};
    p.events[event].slice().sort(function(a,b){return (a.category==='gst')-(b.category==='gst');}).forEach(function(r){
      var base=r.base==='PREMIUM'?ctx.premiumPaise:r.base==='INTRINSIC'?ctx.intrinsicPaise:r.basisCategories.reduce(function(s,k){return s+(sums[k]||0);},0);
      if(!integer(base))throw new Error('Fee base exceeds integer bounds.');
      var value=0;
      if(r.condition==='ALWAYS'||ctx.intrinsicPaise>0){
        value=roundRatio(BigInt(r.fixedPaise)*1000000n+BigInt(base)*BigInt(r.ratePpm),1000000,r.rounding,r.roundToPaise);
        value=Math.max(r.minPaise,value);if(r.capPaise!==null)value=Math.min(r.capPaise,value);
      }
      sums[r.category]=(sums[r.category]||0)+value;if(!integer(sums[r.category]))throw new Error('Fee component exceeds integer bounds.');items.push({id:r.id,category:r.category,name:r.name||r.id,basePaise:base,amountPaise:value});
    });
    var total=items.reduce(function(s,r){return s+r.amountPaise;},0);if(!integer(total))throw new Error('Fee total exceeds integer bounds.');
    return {totalPaise:total,items:items,synthetic:!!p.synthetic};
  }
  function charge(p,event,ctx){return quote(p,event,ctx).totalPaise;}
  function path(p,event,entryCtx,endCtx){return charge(p,'ENTRY',entryCtx)+charge(p,event,endCtx);}
  function active(){var p=Config[Config.ACTIVE];return valid(p)?clone(p):null;}
  function flatPath(p){return !structured(p)||EVENTS.every(function(e){return p.events[e].every(function(r){return r.ratePpm===0&&r.condition==='ALWAYS';});});}
  // A conservative proof condition for a single path: entry depends only on entry premium;
  // closing/settlement fee can grow by <1 rupee per rupee of payoff. Discontinuous ITM fees fail closed.
  function supportsBound(p){
    if(!valid(p)||!p.bounded)return false;if(!structured(p))return true;
    if(!flatPath(p))return false;
    if(p.events.ENTRY.some(function(r){return r.base==='INTRINSIC'||r.condition!=='ALWAYS';}))return false;
    return ['EXIT','SETTLEMENT'].every(function(e){
      var rows=p.events[e];if(rows.some(function(r){return r.condition!=='ALWAYS';}))return false;
      var slope=rows.filter(function(r){return r.category!=='gst';}).reduce(function(s,r){return s+r.ratePpm;},0);
      var gst=rows.filter(function(r){return r.category==='gst';}).reduce(function(s,r){return s+r.ratePpm;},0);
      return slope*(1+gst/1000000)<1000000;
    });
  }
  function monotoneSettlement(p,units){
    if(!valid(p))return false;if(!structured(p))return true;
    if(p.events.ENTRY.some(function(r){return r.base==='INTRINSIC'||r.condition!=='ALWAYS';}))return false;
    var rows=p.events.SETTLEMENT;if(rows.some(function(r){return r.condition!=='ALWAYS';}))return false;
    var deltas={},total=0;
    rows.filter(function(r){return r.category!=='gst';}).forEach(function(r){
      var delta=r.ratePpm?Math.ceil(units*r.ratePpm/1000000)+r.roundToPaise:0;
      deltas[r.category]=(deltas[r.category]||0)+delta;total+=delta;
    });
    rows.filter(function(r){return r.category==='gst';}).forEach(function(r){
      var base=r.basisCategories.reduce(function(s,k){return s+(deltas[k]||0);},0);
      total+=r.ratePpm?Math.ceil(base*r.ratePpm/1000000)+r.roundToPaise:0;
    });
    return total<units;
  }
  function label(p){return p&&p.synthetic?'estimate - synthetic fee profile':'estimate - configured fee profile';}
  return {DEMO:LEGACY_FLAT,LEGACY_FLAT:LEGACY_FLAT,CONFIG:Config,structured:structured,valid:valid,quote:quote,charge:charge,path:path,
    active:active,flatPath:flatPath,supportsBound:supportsBound,monotoneSettlement:monotoneSettlement,label:label};
}));
