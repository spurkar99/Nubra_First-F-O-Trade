(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./engine.js'));
  else root.FTExplain=factory(root.FTEngine);
}(typeof globalThis!=='undefined'?globalThis:this,function(E){
  'use strict';
  function contract(c){return c.underlying+' · '+E.level(c.strikePaise)+' '+c.optionType;}
  function facts(c,o,a){
    var unavailable=a.breakEvenStatus==='UNSUPPORTED_FEES'||a.breakEvenStatus==='OUTSIDE_RANGE';
    return {
      identity:contract(c)+' · Synthetic',
      quantity:o.lots+' lot'+(o.lots===1?'':'s')+' × '+c.lotSize+' units = '+a.units+' units',
      entry:'Your entry outlay at the limit is '+E.money(a.entryFundsPaise)+': '+E.money(a.premiumPaise)+' premium + '+E.money(a.entryFeePaise)+' entry fees. '+a.feeLabel+'. Only filled units are bought; a limit may stay unfilled.',
      exposure:'Max loss of premium: the full '+E.money(a.grossMaxLossPaise)+' can be lost. Costs are additional.',
      boundary:a.maxLossIncludingCostsPaise==null?'An all-in maximum loss is unavailable for this fee model. The full premium remains at risk; exit and settlement costs depend on the path.':
        E.money(a.maxLossIncludingCostsPaise)+' including this profile’s costs for one entry and one exit or settlement; '+a.feeLabel+'. Separate additional exit orders add fees.',
      expiry:a.breakEvenPaise==null?(unavailable?'Breakeven at expiry is unavailable: this fee model or the numerical search range does not support a verified threshold.':'No feasible breakeven at expiry at a non-negative settlement level under these costs.'):
        'Breakeven at expiry: approximately '+E.level(a.breakEvenPaise)+'. For net profit, '+c.underlying+' must settle '+(c.optionType==='CE'?'above ':'below ')+'that level under the stated entry and settlement fees; '+a.feeLabel+'.'+(a.canProfitAtExpiry?'':' No non-negative settlement level produces a net profit.'),
      before:'Before expiry, profit or loss depends on the option’s exit premium, time remaining, and volatility. A move in the underlying’s expected direction does not ensure a profit.',
      exit:'To exit, sell the same option units you hold. A pending exit leaves the position open. A limit can remain unfilled; a stop-limit can trigger without filling and does not cap the loss at your intended amount.',
      cancel:'Cancelling an unfilled order releases its reservation. Cancelling the remainder of a partially filled order leaves the filled position open.'
    };
  }
  var STATES={PENDING:'Submitted is not filled. The order is pending; a matching execution may not occur.',
    PARTIAL:'Some units are filled. The remainder is still pending.',CANCELLED:'Only the unfilled remainder was cancelled. Any filled position remains.',
    REJECTED:'The remaining units were rejected. Any existing fills remain.',EXPIRED:'The DAY remainder expired without filling.',
    TRIGGER_WAIT:'Waiting for the stop trigger. The position remains open.',FILLED:'The recorded units have executed at their actual fill price.',
    OPEN:'The filled option units remain open until a closing sale fills or settlement occurs.',CLOSED:'No units remain open in this position.',
    SETTLED:'Synthetic cash settlement is complete. No units remain open.'};
  function stateInfo(state){return STATES[state]||'No supported order state is available.';}
  function blocked(){return {entry:'Entry outlay unavailable until the missing or invalid data is resolved.',
    exposure:'Max loss including costs is unavailable; missing charges are not treated as zero.',
    expiry:'Breakeven at expiry is unavailable. No profit condition is inferred.',
    exit:'To exit an existing position, a closing sale must fill. This blocked review sends no order.'};}
  function answer(question){
    return /strike|which|recommend|buy|pick|suggest|suitab|forecast/i.test(question)?
      'This tool reviews the order you chose. It does not choose a strike, contract, price, or position size, or forecast returns.':
      'This tool explains the selected order’s outlay, exposure, expiry outcomes, and exit mechanics using synthetic data.';
  }
  return {facts:facts,contract:contract,answer:answer,stateInfo:stateInfo,states:STATES,blocked:blocked};
}));
