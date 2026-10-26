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
  function expiry(c,p,q,s,fees){
    if(!nonnegative(s)||!positive(p)||!positive(q))throw new Error('Invalid expiry calculation input.');
    var intrinsic=c.optionType==='CE'?Math.max(s-c.strikePaise,0):Math.max(c.strikePaise-s,0);
    return q*(intrinsic-p)-Fees.path(fees,'SETTLEMENT');
  }
  function analyse(c,o,fees){
    if(!Fees.valid(fees))throw new Error('Fees unavailable; costs are not zero.');
    var errs=orderErrors(c,o);if(errs.length)throw new Error(errs[0].message);
    var q=o.lots*c.lotSize,p=o.limitPaise,premium=q*p;
    if(!Number.isSafeInteger(premium)||!Number.isSafeInteger(c.strikePaise*q))throw new Error('Calculation exceeds integer bounds.');
    var path=Fees.path(fees,'SETTLEMENT');
    var numerator=c.optionType==='CE'?(c.strikePaise+p)*q+path:(c.strikePaise-p)*q-path;
    var feasible=c.optionType==='CE'||numerator>=0;
    var raw=feasible?numerator/q:null;
    var maxTotal=fees.bounded?premium+Math.max(Fees.path(fees,'EXIT'),path):null;
    return {units:q,premiumPaise:premium,entryFeePaise:Fees.charge(fees,'ENTRY'),entryFundsPaise:premium+fees.entryPaise,
      expiryPathFeePaise:path,exitPathFeePaise:Fees.path(fees,'EXIT'),grossMaxLossPaise:premium,
      maxLossIncludingCostsPaise:maxTotal,grossBreakEvenPaise:c.optionType==='CE'?c.strikePaise+p:c.strikePaise-p,
      breakEvenPaise:raw,breakEvenNumerator:numerator,breakEvenDenominator:q,
      thresholdPaise:feasible?(c.optionType==='CE'?Math.ceil(raw):Math.floor(raw)):null,
      canProfitAtExpiry:c.optionType==='CE'||numerator>0,
      grossMaxProfitPaise:c.optionType==='PE'?q*(c.strikePaise-p):null,
      netMaxProfitPaise:c.optionType==='PE'?q*(c.strikePaise-p)-path:null};
  }
  function preflight(c,o,q,fees,context,now){
    var e=contractErrors(c,now);e=e.concat(orderErrors(c,o));
    if(c)e=e.concat(quoteErrors(q,now,c.id));
    if(!Fees.valid(fees))e.push(error('FEES','Fees are missing. A cost-aware review cannot be completed.'));
    if(e.length)return {ok:false,errors:e,analysis:null};
    var a;try{a=analyse(c,o,fees);}catch(err){return {ok:false,errors:[error('CALC',err.message)],analysis:null};}
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
    return q*(e-p)-Fees.path(fees,'EXIT');
  }
  return {RULES:RULES,money:money,level:level,parsePaise:parsePaise,positive:positive,nonnegative:nonnegative,
    contractErrors:contractErrors,quoteErrors:quoteErrors,orderErrors:orderErrors,analyse:analyse,
    preflight:preflight,expiry:expiry,realised:realised};
}));
