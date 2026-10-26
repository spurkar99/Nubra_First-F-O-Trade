(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./engine.js'));
  else root.FTExplain=factory(root.FTEngine);
}(typeof globalThis!=='undefined'?globalThis:this,function(E){
  'use strict';
  function contract(c){return c.underlying+' · '+E.level(c.strikePaise)+' '+c.optionType;}
  function facts(c,o,a){
    return {
      identity:contract(c)+' · Synthetic',
      quantity:o.lots+' lot'+(o.lots===1?'':'s')+' × '+c.lotSize+' units = '+a.units+' units',
      entry:'At your limit, '+E.money(a.premiumPaise)+' in premium plus '+E.money(a.entryFeePaise)+' entry fees commits '+E.money(a.entryFundsPaise)+'. A limit controls price; it does not ensure a fill.',
      exposure:'The full '+E.money(a.grossMaxLossPaise)+' premium can be lost. Costs are additional.',
      boundary:a.maxLossIncludingCostsPaise==null?'An all-in maximum loss is unavailable.':
        E.money(a.maxLossIncludingCostsPaise)+' including this profile’s costs for one entry and one exit or settlement. Separate additional exit orders add fees.',
      expiry:a.breakEvenPaise==null?'No feasible breakeven at expiry at a non-negative settlement level under these costs.':
        'At expiry, '+c.underlying+' must settle '+(c.optionType==='CE'?'above ':'below ')+'approximately '+E.level(a.breakEvenPaise)+' for a net profit under the stated costs.'+(a.canProfitAtExpiry?'':' No non-negative settlement level produces a net profit.'),
      before:'Before expiry, profit or loss depends on the option’s exit premium, time remaining, and volatility. A move in the underlying’s expected direction does not ensure a profit.',
      exit:'To exit, sell the option you hold. An exit limit may remain unfilled. A stop-limit can trigger without filling; the loss is not guaranteed to stop at your intended amount.',
      cancel:'Cancelling an unfilled order releases its reservation. Cancelling the remainder of a partially filled order leaves the filled position open.'
    };
  }
  function answer(question){
    return /strike|which|recommend|buy|pick|suggest|suitab|forecast/i.test(question)?
      'This tool reviews the order you chose. It does not choose a strike, contract, price, or position size, or forecast returns.':
      'This tool explains the selected order’s outlay, exposure, expiry outcomes, and exit mechanics using synthetic data.';
  }
  return {facts:facts,contract:contract,answer:answer};
}));
