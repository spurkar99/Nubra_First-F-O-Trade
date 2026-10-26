(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory();
  else root.FTFeeConfig=factory();
}(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  // All values below are invented. Explicit zero rates are demo assumptions, not missing real costs.
  var categories=['brokerage','statutory','exchange','gst','stamp'];
  function flatRows(){return categories.map(function(category){return {
    id:category,category:category,name:category==='brokerage'?'Invented fixed demo charge':category+' (synthetic zero)',
    fixedPaise:category==='brokerage'?2500:0,ratePpm:0,
    base:category==='gst'?'COMPONENTS':'PREMIUM',basisCategories:category==='gst'?['brokerage','exchange']:[],
    minPaise:0,capPaise:null,condition:'ALWAYS',rounding:'HALF_UP',roundToPaise:1
  };});}
  var DEMO={id:'synthetic-adapter-v1',version:1,schemaVersion:2,
    name:'Synthetic demo fees (not Nubra\'s charges)',synthetic:true,verified:false,bounded:true,
    effectiveDate:'Synthetic only',events:{ENTRY:flatRows(),EXIT:flatRows(),SETTLEMENT:flatRows()}};
  // Fill every field and provide explicit rules per side. This incomplete record cannot be activated.
  var NUBRA={id:'nubra-unverified',version:1,schemaVersion:2,synthetic:false,verified:false,bounded:false,
    name:'[FILL: Nubra plan / tariff name]',effectiveDate:'[FILL: effective date]',
    source:'[FILL: pricing URL and captured date]',verification:'[FILL: independent calculation / reviewer]',
    events:{ENTRY:'[FILL: BUY brokerage, statutory, exchange, GST, stamp rows]',
      EXIT:'[FILL: SELL-to-close rows; bases, rates, caps and rounding]',
      SETTLEMENT:'[FILL: expiry/exercise rows including ITM and zero-payoff treatment]'}};
  return {ACTIVE:'DEMO',DEMO:DEMO,NUBRA:NUBRA,categories:categories};
}));
