(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./fees.js'));
  else root.FTFixtures = factory(root.FTFees);
}(typeof globalThis !== 'undefined' ? globalThis : this, function (Fees) {
  'use strict';
  var CLOCK = Date.parse('2026-10-26T13:00:00+05:30');
  var EXPIRY = Date.parse('2026-10-27T15:30:00+05:30');
  var contracts = [
    { id:'A', underlying:'DEMO INDEX', assetType:'INDEX', optionType:'CE', strikePaise:2260000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Normal call' },
    { id:'B', underlying:'DEMO INDEX', assetType:'INDEX', optionType:'PE', strikePaise:2260000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Normal put' },
    { id:'C', underlying:'DEMO INDEX', assetType:'INDEX', optionType:'CE', strikePaise:2270000, lotSize:65, tickPaise:5, settlement:'CASH', role:'No-bid example' },
    { id:'D', underlying:'DEMO BANK', assetType:'STOCK', optionType:'PE', strikePaise:76000, lotSize:650, tickPaise:5, settlement:'PHYSICAL', role:'Restricted stock option' },
    { id:'REG-C', underlying:'REGRESSION INDEX', assetType:'INDEX', optionType:'CE', strikePaise:2260000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Inferred-price regression: call' },
    { id:'REG-P', underlying:'REGRESSION INDEX', assetType:'INDEX', optionType:'PE', strikePaise:2260000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Inferred-price regression: put' },
    { id:'GOLD-C', underlying:'ARITHMETIC INDEX', assetType:'INDEX', optionType:'CE', strikePaise:2000000, lotSize:50, tickPaise:5, settlement:'CASH', role:'K 20,000 arithmetic: call' },
    { id:'GOLD-P', underlying:'ARITHMETIC INDEX', assetType:'INDEX', optionType:'PE', strikePaise:2000000, lotSize:50, tickPaise:5, settlement:'CASH', role:'K 20,000 arithmetic: put' }
  ].map(function(c) { c.expiryMs=EXPIRY; c.version=1; c.synthetic=true; c.exchange='SIM'; return c; });
  function quote(id) {
    var pairs = { A:[10000,10020], B:[9180,9200], C:[null,5000], D:[7100,7160],
      'REG-C':[15025,15045], 'REG-P':[7875,7895], 'GOLD-C':[9980,10000], 'GOLD-P':[9980,10000] };
    var p=pairs[id]; if(!p) return null;
    return {contractId:id, spotPaise:id==='D'?68800:id.indexOf('GOLD')===0?2000000:2260820,
      bidPaise:p[0], askPaise:p[1], bidUnits:p[0]===null?0:1300, askUnits:1300,
      ltpPaise:p[1], asOfMs:CLOCK, version:1, source:'SYNTHETIC', synthetic:true};
  }
  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  return { CLOCK:CLOCK, EXPIRY:EXPIRY, contracts:contracts, clone:clone,
    contract:function(id) { var c=contracts.find(function(c){return c.id===id;});return c?clone(c):null; },
    quote:quote, fees:function(){return clone(Fees.DEMO);},
    order:function(id, lots) {return {contractId:id,lots:lots||1,side:'BUY',intent:'OPEN',type:'LIMIT',
      limitPaise:quote(id).askPaise,validity:'DAY',product:'SIM_CARRY',triggerPaise:null};} };
}));
