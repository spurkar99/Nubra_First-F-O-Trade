(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.FTFees = factory();
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var DEMO = { id: 'synthetic-fixed-v1', version: 1,
    name: "Synthetic demo fees (not Nubra's charges)",
    entryPaise: 2500, exitPaise: 2500, settlementPaise: 2500,
    per: 'ORDER', bounded: true, synthetic: true };
  function valid(p) {
    return !!p && !!p.id && p.version != null && p.per === 'ORDER' &&
      ['entryPaise', 'exitPaise', 'settlementPaise'].every(function (k) {
        return Number.isSafeInteger(p[k]) && p[k] >= 0;
      });
  }
  function charge(p, event) {
    if (!valid(p)) throw new Error('Missing or invalid fee profile. Costs cannot be calculated.');
    var key = { ENTRY: 'entryPaise', EXIT: 'exitPaise', SETTLEMENT: 'settlementPaise' }[event];
    if (!key) throw new Error('Unknown fee event.');
    return p[key];
  }
  return { DEMO: DEMO, valid: valid, charge: charge,
    path: function (p, kind) { return charge(p, 'ENTRY') + charge(p, kind); } };
}));
