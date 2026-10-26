(function(root,factory){
  if(typeof module==='object'&&module.exports){
    var suite=factory(require('../assets/js/engine.js'),require('../assets/js/fees.js'),require('../assets/js/fixtures.js'),require('../assets/js/simulator.js'),require('../assets/js/explain.js'));
    module.exports=suite;
    if(require.main===module){var results=suite.run();results.forEach(function(r){console.log((r.pass?'PASSED':'FAILED')+' | '+r.area+' | '+r.name+(r.detail?' | '+r.detail:''));});var failed=results.filter(function(r){return !r.pass;}).length;console.log('\n'+(results.length-failed)+' PASSED / '+failed+' FAILED / 0 NOT RUN');if(failed)process.exitCode=1;}
  }else root.FTTests=factory(root.FTEngine,root.FTFees,root.FTFixtures,root.FTSimulator,root.FTExplain);
}(typeof globalThis!=='undefined'?globalThis:this,function(E,Fees,F,S,X){
  'use strict';
  function equal(a,b){if(a!==b)throw new Error('Expected '+JSON.stringify(b)+'; received '+JSON.stringify(a));}
  function ok(v,msg){if(!v)throw new Error(msg||'Expected truthy value.');}
  function approx(a,b,tolerance){if(Math.abs(a-b)>(tolerance||1e-7))throw new Error('Expected approximately '+b+'; received '+a);}
  function throws(fn){var did=false;try{fn();}catch(e){did=true;}ok(did,'Expected an exception.');}
  function setup(id,lots){var s=new S.Simulation();s.setDraft(F.order(id||'GOLD-C',lots||1));return s;}
  function submit(s,key){var r=s.review();ok(r.ok,JSON.stringify(r.errors));var placed=s.submit(key||'test-key');ok(placed.ok,placed.message);return placed.order;}
  function open(s,id,lots,key){s.setDraft(F.order(id||'GOLD-C',lots||1));var o=submit(s,key);ok(s.fill(o.id,'full').ok);return o;}
  function closing(s,id,lots,type){var o=F.order(id,lots||1);o.side='SELL';o.intent='CLOSE';o.limitPaise=s.quotes[id].bidPaise;o.type=type||'LIMIT';s.setDraft(o);return o;}
  function has(check,code){return check.errors.some(function(e){return e.code===code;});}
  function run(){var results=[];
    function test(area,name,fn){try{fn();results.push({area:area,name:name,pass:true,detail:''});}catch(err){results.push({area:area,name:name,pass:false,detail:err.message});}}
    var gc=F.contract('GOLD-C'),gp=F.contract('GOLD-P'),fc=F.order('GOLD-C',1),fp=F.order('GOLD-P',1),fees=F.fees();
    var a=E.analyse(gc,fc,fees),p=E.analyse(gp,fp,fees);
    test('Fees','Named synthetic profile and 25/25/25 order charges',function(){equal(fees.name,"Synthetic demo fees (not Nubra's charges)");equal(fees.entryPaise,2500);equal(fees.exitPaise,2500);equal(fees.settlementPaise,2500);equal(fees.per,'ORDER');});
    test('Fees','Entry + exit path is ₹50',function(){equal(Fees.path(fees,'EXIT'),5000);});
    test('Fees','Entry + settlement path is ₹50',function(){equal(Fees.path(fees,'SETTLEMENT'),5000);});
    test('Golden','Arithmetic call premium is ₹5,000',function(){equal(a.premiumPaise,500000);equal(a.units,50);});
    test('Golden','Entry funds are ₹5,025, not ₹5,050',function(){equal(a.entryFundsPaise,502500);equal(a.entryFeePaise,2500);});
    test('Golden','Gross loss ₹5,000; stated bounded loss ₹5,050',function(){equal(a.grossMaxLossPaise,500000);equal(a.maxLossIncludingCostsPaise,505000);});
    test('Golden','Arithmetic call gross breakeven 20,100',function(){equal(a.grossBreakEvenPaise,2010000);});
    test('Golden','Arithmetic call net expiry breakeven 20,101',function(){equal(a.breakEvenPaise,2010100);});
    test('Golden','Arithmetic put net expiry breakeven 19,899',function(){equal(p.breakEvenPaise,1989900);});
    test('Golden','Call at 20,100 loses ₹50',function(){equal(E.expiry(gc,10000,50,2010000,fees),-5000);});
    test('Golden','Call at 20,200 earns ₹4,950',function(){equal(E.expiry(gc,10000,50,2020000,fees),495000);});
    test('Golden','Call at strike loses ₹5,050',function(){equal(E.expiry(gc,10000,50,2000000,fees),-505000);});
    test('Golden','Call below strike loses ₹5,050',function(){equal(E.expiry(gc,10000,50,1900000,fees),-505000);});
    test('Golden','Call at net breakeven earns exactly zero',function(){equal(E.expiry(gc,10000,50,2010100,fees),0);});
    test('Golden','Put at 19,900 loses ₹50',function(){equal(E.expiry(gp,10000,50,1990000,fees),-5000);});
    test('Golden','Put at 19,800 earns ₹4,950',function(){equal(E.expiry(gp,10000,50,1980000,fees),495000);});
    test('Golden','Put at/above strike loses ₹5,050',function(){equal(E.expiry(gp,10000,50,2000000,fees),-505000);equal(E.expiry(gp,10000,50,2100000,fees),-505000);});
    test('Golden','Put at net breakeven earns zero',function(){equal(E.expiry(gp,10000,50,1989900,fees),0);});
    test('Golden','Arithmetic long-put maximum gain finite',function(){equal(p.grossMaxProfitPaise,99500000);equal(p.netMaxProfitPaise,99495000);equal(E.expiry(gp,10000,50,0,fees),99495000);});
    test('Golden','Call maximum profit is unbounded, represented by null not a fake number',function(){equal(a.grossMaxProfitPaise,null);});
    test('Golden','Two lots: fixed fee does not double',function(){var x=E.analyse(gc,F.order('GOLD-C',2),fees);equal(x.units,100);equal(x.premiumPaise,1000000);equal(x.entryFundsPaise,1002500);equal(x.maxLossIncludingCostsPaise,1005000);equal(x.breakEvenPaise,2010050);equal(x.expiryPathFeePaise,5000);});
    test('Golden','Two-lot put breakeven and zero-payoff loss',function(){var x=E.analyse(gp,F.order('GOLD-P',2),fees);equal(x.breakEvenPaise,1989950);equal(E.expiry(gp,10000,100,2000000,fees),-1005000);});
    var rc=F.contract('REG-C'),rp=F.contract('REG-P'),ac=E.analyse(rc,F.order('REG-C',1),fees),ap=E.analyse(rp,F.order('REG-P',1),fees);
    test('Regression','22,600 CE × 65 premium = ₹9,779.25',function(){equal(ac.premiumPaise,977925);});
    test('Regression','22,600 PE × 65 premium = ₹5,131.75',function(){equal(ap.premiumPaise,513175);});
    test('Regression','CE premium-only breakeven 22,750.45',function(){equal(ac.grossBreakEvenPaise,2275045);});
    test('Regression','PE premium-only breakeven 22,521.05',function(){equal(ap.grossBreakEvenPaise,2252105);});
    test('Regression','CE ₹50 cost-adjusted root and rounded threshold',function(){approx(ac.breakEvenPaise,2275121.923076923);equal(ac.thresholdPaise,2275122);equal(E.expiry(rc,15045,65,ac.thresholdPaise,fees),5);});
    test('Regression','PE ₹50 cost-adjusted root and rounded threshold',function(){approx(ap.breakEvenPaise,2252028.076923077);equal(ap.thresholdPaise,2252028);equal(E.expiry(rp,7895,65,ap.thresholdPaise,fees),5);});
    test('Regression','CE at 22,400 / 22,600 loses ₹9,829.25 including costs',function(){equal(E.expiry(rc,15045,65,2240000,fees),-982925);equal(E.expiry(rc,15045,65,2260000,fees),-982925);});
    test('Regression','CE at 22,800 earns ₹3,170.75 including costs',function(){equal(E.expiry(rc,15045,65,2280000,fees),317075);});
    test('Regression','PE at 22,400 earns ₹7,818.25 including costs',function(){equal(E.expiry(rp,7895,65,2240000,fees),781825);});
    test('Regression','PE at 22,600 / 22,800 loses ₹5,181.75 including costs',function(){equal(E.expiry(rp,7895,65,2260000,fees),-518175);equal(E.expiry(rp,7895,65,2280000,fees),-518175);});
    test('Regression','PE maximum gross profit is ₹14,63,868.25, finite',function(){equal(ap.grossMaxProfitPaise,146386825);equal(ap.netMaxProfitPaise,146381825);});
    test('Regression','Regression entry totals separate from full loss',function(){equal(ac.entryFundsPaise,980425);equal(ap.entryFundsPaise,515675);equal(ac.maxLossIncludingCostsPaise,982925);equal(ap.maxLossIncludingCostsPaise,518175);});
    test('Fees','Missing fees throw; never treated as zero',function(){throws(function(){E.analyse(gc,fc,null);});throws(function(){Fees.charge(null,'ENTRY');});});
    test('Fees','Partially missing fee record rejected',function(){var bad=F.fees();delete bad.exitPaise;equal(Fees.valid(bad),false);});
    test('Fees','Unbounded profile does not claim an all-in maximum',function(){var f=F.fees();f.bounded=false;equal(E.analyse(gc,fc,f).maxLossIncludingCostsPaise,null);});
    test('Math','Put with negative implied breakeven reports no feasible root',function(){var c=F.clone(gp);c.strikePaise=5000;var x=E.analyse(c,fp,fees);equal(x.breakEvenPaise,null);equal(x.canProfitAtExpiry,false);});
    test('Math','Put breaking even only at zero cannot produce a profit',function(){var c=F.clone(gp);c.strikePaise=10100;var x=E.analyse(c,fp,fees);equal(x.breakEvenPaise,0);equal(x.canProfitAtExpiry,false);});
    test('Math','Price parsing exact paise; no silent fractional-paise rounding',function(){equal(E.parsePaise('150.45'),15045);equal(E.parsePaise('0'),0);equal(E.parsePaise('1.005'),null);equal(E.parsePaise('-1'),null);equal(E.parsePaise('NaN'),null);});
    test('Math','Before-expiry realised P&L uses option exit price',function(){equal(E.realised(10000,12000,50,fees),95000);equal(E.realised(10000,9000,50,fees),-55000);});
    test('Math','Money format includes Indian grouping and two decimal places',function(){ok(E.money(146386825).includes('14,63,868.25'));equal(E.money(null),'Unavailable');});
    test('Scope','Naked opening sale rejected before submission',function(){var s=setup();s.draft.side='SELL';ok(has(s.review(),'OPEN_SELL'));equal(s.submit('naked').ok,false);equal(s.orders.length,0);});
    test('Scope','Stock option blocked before funding or payoff assumptions',function(){var s=setup('D');ok(has(s.review(),'UNSUPPORTED'));equal(s.submit('stock').ok,false);});
    test('Scope','Futures are unsupported',function(){var s=setup();s.contracts['GOLD-C'].assetType='FUTURE';ok(has(s.review(),'UNSUPPORTED'));});
    test('Validation','Fractional lots invalid',function(){var s=setup();s.draft.lots=1.5;ok(has(s.review(),'QUANTITY'));});
    test('Validation','Zero / negative lots invalid',function(){[0,-1].forEach(function(n){var s=setup();s.draft.lots=n;ok(has(s.review(),'QUANTITY'));});});
    test('Validation','Invalid tick is rejected, not rounded',function(){var s=setup();s.draft.limitPaise=10001;ok(has(s.review(),'PRICE'));equal(s.draft.limitPaise,10001);});
    test('Validation','Negative / absent price invalid',function(){[-1,null,0].forEach(function(n){var s=setup();s.draft.limitPaise=n;ok(has(s.review(),'PRICE'));});});
    test('Validation','Missing contract metadata blocks review',function(){var s=setup();delete s.contracts['GOLD-C'].lotSize;ok(has(s.review(),'METADATA'));});
    test('Validation','Expired contract blocks review',function(){var s=setup();s.contracts['GOLD-C'].expiryMs=s.clock;ok(has(s.review(),'EXPIRED'));});
    test('Validation','Unknown quote / mismatched contract blocks review',function(){var s=setup();s.quotes['GOLD-C'].contractId='A';ok(has(s.review(),'QUOTE'));});
    test('Validation','Missing fees block review and submit',function(){var s=setup();s.fees=null;ok(has(s.review(),'FEES'));equal(s.submit('nofees').ok,false);});
    test('Risk','Budget below one-lot total exposure blocks order',function(){var s=setup();s.user.lossBudgetPaise=500000;ok(has(s.review(),'BUDGET'));equal(s.submit('budget').ok,false);equal(s.draft.contractId,'GOLD-C');equal(s.draft.lots,1);});
    test('Risk','Equal explicit budget accepted; not sure is supported',function(){var s=setup();s.user.lossBudgetPaise=505000;equal(s.review().ok,true);s.user.lossBudgetPaise=null;equal(s.review().ok,true);});
    test('Risk','Invalid budget entry cannot silently become not sure',function(){var s=setup();s.user.lossBudgetInvalid=true;s.user.lossBudgetRaw='-10';s.user.lossBudgetPaise=null;ok(has(s.review(),'BUDGET_INPUT'));equal(s.submit('invalidbudget').ok,false);});
    test('Risk','Insufficient funds blocks even when premium alone fits',function(){var s=setup();s.cashPaise=500000;ok(has(s.review(),'FUNDS'));equal(s.submit('lowcash').ok,false);});
    test('Risk','Stale >30s blocks; exactly 30s accepted',function(){var s=setup();s.quotes['GOLD-C'].asOfMs=s.clock-30000;equal(s.review().ok,true);s.quotes['GOLD-C'].asOfMs=s.clock-30001;ok(has(s.review(),'STALE'));});
    test('Risk','Future-dated quote is not accepted as fresh',function(){var s=setup();s.quotes['GOLD-C'].asOfMs=s.clock+1;ok(has(s.review(),'STALE'));});
    test('Risk','Spread >5% of midpoint blocks',function(){var s=setup();s.quotes['GOLD-C'].bidPaise=8000;ok(has(s.review(),'SPREAD'));});
    test('Risk','No bid blocks; no executable exit assumed',function(){var s=setup('C');ok(has(s.review(),'NO_BID'));equal(s.submit('illiquid').ok,false);});
    test('Risk','Crossed quote rejected',function(){var s=setup();s.quotes['GOLD-C'].bidPaise=10100;ok(has(s.review(),'CROSSED'));});
    ['quantity','price','quote','fees','budget','contract','rules'].forEach(function(field){test('Review','Changed '+field+' invalidates acknowledged review',function(){var s=setup();ok(s.review().ok);if(field==='quantity')s.draft.lots=2;if(field==='price')s.draft.limitPaise+=5;if(field==='quote')s.quoteChange('GOLD-C',{askPaise:10005});if(field==='fees')s.fees.version++;if(field==='budget')s.user.lossBudgetPaise=600000;if(field==='contract')s.contracts['GOLD-C'].version++;if(field==='rules')s.rules.version++;equal(s.submit('changed-'+field).code,'REVIEW_CHANGED');equal(s.orders.length,0);});});
    test('Review','Recalculation enables changed order',function(){var s=setup();s.review();s.draft.lots=2;s.review();equal(s.submit('updated').ok,true);});
    test('Review','Submission without a review fails',function(){var s=setup();equal(s.submit('unreviewed').code,'REVIEW');});
    test('Review','User can back out without an order, fee, or reservation',function(){var s=setup();s.review();equal(s.orders.length,0);equal(s.reservedPaise(),0);equal(s.cashPaise,s.initialPaise);});
    test('Orders','Idempotent submission creates one order and one reservation',function(){var s=setup(),o=submit(s,'same');var again=s.submit('same');equal(again.order.id,o.id);equal(again.duplicate,true);equal(s.orders.length,1);equal(s.reservedPaise(),502500);});
    test('Orders','Pending submission has no position or debited cash',function(){var s=setup();var o=submit(s);equal(o.status,'PENDING');equal(s.openUnits('GOLD-C'),0);equal(s.cashPaise,s.initialPaise);equal(s.availablePaise(),s.initialPaise-502500);});
    test('Orders','Limit below ask stays pending',function(){var s=setup();s.draft.limitPaise=9900;var o=submit(s);equal(s.fill(o.id,'full').code,'NOT_MARKETABLE');equal(o.status,'PENDING');equal(s.openUnits('GOLD-C'),0);});
    test('Orders','Fill uses actual ask, not limit or LTP',function(){var s=setup();s.draft.limitPaise=10100;s.quotes['GOLD-C'].ltpPaise=10500;var o=submit(s);var r=s.fill(o.id,'full');ok(r.ok);equal(r.pricePaise,10000);equal(o.averageFillPaise,10000);equal(s.positions['GOLD-C'].costBasisPaise,500000);equal(s.cashPaise,s.initialPaise-502500);equal(s.reservedPaise(),0);});
    test('Orders','Repeat fill does not debit again',function(){var s=setup(),o=submit(s);s.fill(o.id,'full');var cash=s.cashPaise;equal(s.fill(o.id,'full').ok,false);equal(s.cashPaise,cash);});
    test('Orders','Partial two-lot fill charges entry once and reserves remainder',function(){var s=setup('GOLD-C',2),o=submit(s);var r=s.fill(o.id,'partial');ok(r.ok);equal(o.filledUnits,50);equal(o.remainingUnits,50);equal(o.status,'PARTIAL');equal(o.chargedFeePaise,2500);equal(s.reservedPaise(),500000);s.fill(o.id,'full');equal(o.chargedFeePaise,2500);equal(s.cashPaise,s.initialPaise-1002500);});
    test('Orders','Single-lot 50% fill never creates fractional-lot position',function(){var s=setup(),o=submit(s);equal(s.fill(o.id,'partial').code,'ONE_LOT');equal(s.openUnits('GOLD-C'),0);});
    test('Orders','Cancellation after partial fill retains position and charged fee',function(){var s=setup('GOLD-C',2),o=submit(s);s.fill(o.id,'partial');ok(s.cancel(o.id).ok);equal(o.status,'CANCELLED');equal(o.cancelledUnits,50);equal(s.openUnits('GOLD-C'),50);equal(s.reservedPaise(),0);equal(s.cashPaise,s.initialPaise-502500);ok(o.events.includes('Cancellation requested.'));});
    test('Orders','Cancelling wholly unfilled order releases all funds without fees',function(){var s=setup(),o=submit(s);s.cancel(o.id);equal(s.availablePaise(),s.initialPaise);equal(o.chargedFeePaise,0);});
    test('Orders','Rejected remainder releases reservation but preserves partial fill',function(){var s=setup('GOLD-C',2),o=submit(s);s.fill(o.id,'partial');ok(s.reject(o.id).ok);equal(o.status,'REJECTED');equal(s.openUnits('GOLD-C'),50);equal(s.reservedPaise(),0);});
    test('Orders','Multiple purchase reservations prevent overspending',function(){var s=setup();s.cashPaise=800000;submit(s,'one');s.setDraft(F.order('GOLD-P',1));ok(has(s.review(),'FUNDS'));});
    test('Orders','Fill is blocked if quote becomes stale after submission',function(){var s=setup(),o=submit(s);s.quotes['GOLD-C'].asOfMs=s.clock-31000;equal(s.fill(o.id,'full').code,'STALE');equal(s.openUnits('GOLD-C'),0);});
    test('Orders','Quoted depth limits fills to whole lots',function(){var s=setup('GOLD-C',2);s.quotes['GOLD-C'].askUnits=50;var o=submit(s);ok(s.fill(o.id,'full').ok);equal(o.filledUnits,50);equal(o.status,'PARTIAL');equal(s.quotes['GOLD-C'].askUnits,0);});
    test('Exit','Sell-to-close accepted and fully closes long without opening short',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1);var o=submit(s,'exit');ok(s.fill(o.id,'full').ok);equal(s.openUnits('GOLD-C'),0);equal(o.status,'FILLED');equal(s.positions['GOLD-C'].realisedPaise,-6000);equal(s.cashPaise,s.initialPaise-6000);});
    test('Exit','Sell-to-close without a position rejected',function(){var s=setup();closing(s,'GOLD-C',1);ok(has(s.review(),'CLOSE_QTY'));equal(s.submit('invalidexit').ok,false);});
    test('Exit','Exit above long quantity cannot create a short',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',2);ok(has(s.review(),'CLOSE_QTY'));equal(s.submit('oversell').ok,false);equal(s.openUnits('GOLD-C'),50);});
    test('Exit','Concurrent exits reserve units; duplicate close rejected',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1);submit(s,'exit1');s.setDraft(F.clone(s.draft));ok(has(s.review(),'CLOSE_QTY'));});
    test('Exit','Cancelled exit releases closing units but keeps position',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1);var o=submit(s,'exit');s.cancel(o.id);equal(s.openUnits('GOLD-C'),50);equal(s.closingReserved('GOLD-C'),0);});
    test('Exit','Exit limit above bid remains pending with position open',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1);s.draft.limitPaise=10100;var o=submit(s,'exit');equal(s.fill(o.id,'full').code,'NOT_MARKETABLE');equal(s.openUnits('GOLD-C'),50);});
    test('Exit','Stop-limit triggers without filling after a gap',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1,'SL_LIMIT');s.draft.triggerPaise=9500;s.draft.limitPaise=9400;var o=submit(s,'stop');equal(o.status,'TRIGGER_WAIT');s.quoteChange('GOLD-C',{ltpPaise:9000,bidPaise:9000,askPaise:9020});equal(s.fill(o.id,'full').code,'NOT_MARKETABLE');equal(o.status,'PENDING');equal(s.openUnits('GOLD-C'),50);});
    test('Exit','Stop does not trigger prematurely',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1,'SL_LIMIT');s.draft.triggerPaise=9500;s.draft.limitPaise=9400;var o=submit(s,'stop');equal(s.fill(o.id,'full').code,'NOT_TRIGGERED');equal(o.status,'TRIGGER_WAIT');});
    test('Exit','Stop-gap evaluator scenario reproduces an activated unfilled exit',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1,'SL_LIMIT');s.draft.triggerPaise=9500;s.draft.limitPaise=9400;var o=submit(s,'stop');s.applyScenario('stop-gap','GOLD-C');equal(s.fill(o.id,'full').code,'NOT_MARKETABLE');equal(o.status,'PENDING');equal(s.openUnits('GOLD-C'),50);});
    test('Exit','Sell-stop trigger below limit rejected',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1,'SL_LIMIT');s.draft.triggerPaise=9000;s.draft.limitPaise=9500;ok(has(s.review(),'STOP'));});
    test('Exit','Partial closing fills allocate basis and fee without duplication',function(){var s=setup();open(s,'GOLD-C',2,'entry');closing(s,'GOLD-C',2);var o=submit(s,'exit');s.fill(o.id,'partial');equal(s.openUnits('GOLD-C'),50);s.fill(o.id,'full');equal(o.chargedFeePaise,2500);equal(s.openUnits('GOLD-C'),0);equal(s.positions['GOLD-C'].realisedPaise,-7000);equal(s.cashPaise,s.initialPaise-7000);});
    test('Exit','No-bid quote does not invent a sale price',function(){var s=setup();open(s,'GOLD-C',1,'entry');s.quoteChange('GOLD-C',{bidPaise:null,bidUnits:0});closing(s,'GOLD-C',1);ok(has(s.review(),'NO_BID'));equal(s.openUnits('GOLD-C'),50);});
    test('Expiry','Expiry cancels pending DAY remainder and releases reservation',function(){var s=setup(),o=submit(s);ok(s.settle(2000000).ok);equal(o.status,'EXPIRED');equal(s.reservedPaise(),0);equal(s.cashPaise,s.initialPaise);ok(has(s.check(),'EXPIRED'));});
    test('Expiry','Call settlement reconciles with golden profit and account cash',function(){var s=setup();open(s,'GOLD-C',1,'entry');ok(s.settle(2020000).ok);equal(s.positions['GOLD-C'].realisedPaise,495000);equal(s.positions['GOLD-C'].status,'SETTLED');equal(s.cashPaise,s.initialPaise+495000);equal(s.openUnits('GOLD-C'),0);});
    test('Expiry','Worthless settlement still charges invented settlement fee',function(){var s=setup();open(s,'GOLD-C',1,'entry');s.settle(2000000);equal(s.positions['GOLD-C'].realisedPaise,-505000);equal(s.cashPaise,s.initialPaise-505000);});
    test('Expiry','Put settlement reconciles with golden profit',function(){var s=setup('GOLD-P');open(s,'GOLD-P',1,'entry');s.settle(1980000);equal(s.positions['GOLD-P'].realisedPaise,495000);});
    test('Expiry','Negative settlement / repeat settlement rejected',function(){var s=setup();equal(s.settle(-1).ok,false);s.settle(2000000);equal(s.settle(2000000).ok,false);});
    test('Scenarios','Scenario picker applies stale/wide/no-bid/missing fees',function(){var s=setup('A');[['stale','STALE'],['wide','SPREAD'],['no-bid','NO_BID'],['missing-fees','FEES']].forEach(function(x){s.applyScenario(x[0],'A');ok(has(s.review(),x[1]));});});
    test('Scenarios','Changed-data scenario invalidates an existing review',function(){var s=setup('A');s.review();s.applyScenario('changed','A');equal(s.reviewChanged(),true);equal(s.submit('changed').code,'REVIEW_CHANGED');});
    test('Scenarios','Reset clears orders, positions, reservations, fee errors and clock',function(){var s=setup();open(s,'GOLD-C',1,'entry');s.fees=null;s.settle(2000000);s.reset();equal(s.orders.length,0);equal(Object.keys(s.positions).length,0);equal(s.reservedPaise(),0);equal(s.clock,F.CLOCK);ok(Fees.valid(s.fees));equal(s.cashPaise,s.initialPaise);equal(s.reviewRecord,null);});
    test('Copy','Which strike response does not pick a contract',function(){var text=X.answer('Which strike should I buy?');ok(text.includes('reviews the order you chose'));ok(text.includes('does not choose'));ok(!/22,600|22600|buy the|choose the/i.test(text));});
    test('Copy','Templates contain no reassurance, urgency or celebration',function(){[gc,gp,F.contract('A'),F.contract('B')].forEach(function(c){var order=F.order(c.id,1),analysis=E.analyse(c,order,fees);var text=Object.values(X.facts(c,order,analysis)).join(' ');ok(!/\bsafe\b|\bsuitable\b|good choice|hurry|congratulations|guaranteed profit|trade again/i.test(text));ok(text.toLowerCase().includes('at expiry'));ok(text.includes('Costs are additional'));});});
    test('Copy','Before-expiry explanation permits loss despite favourable direction',function(){var text=X.facts(gc,fc,a).before;ok(text.includes('does not ensure a profit'));ok(text.includes('volatility'));});
    test('Copy','No feasible breakeven is stated rather than fabricated',function(){var c=F.clone(gp);c.strikePaise=5000;var text=X.facts(c,fp,E.analyse(c,fp,fees)).expiry;ok(text.includes('No feasible breakeven'));});
    test('Ledger','3,600 seeded purchase/fill/cancel/exit steps reconcile cash, basis and fees',function(){
      var seed=213;function rnd(n){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n;}
      for(var run=0;run<40;run++){
        var s=new S.Simulation(),key=0;
        for(var i=0;i<90;i++){
          var id=rnd(2)?'A':'B',action=rnd(6),active=s.orders.filter(function(o){return s.active(o);});
          if(action<2){s.setDraft(F.order(id,1+rnd(3)));if(s.review().ok)s.submit('k'+(++key));}
          else if(action===2&&active.length)s.fill(active[rnd(active.length)].id,rnd(2)?'full':'partial');
          else if(action===3&&active.length)s.cancel(active[rnd(active.length)].id);
          else if(action===4&&s.openUnits(id)>s.closingReserved(id)){var o=F.order(id,1);o.intent='CLOSE';o.side='SELL';o.limitPaise=s.quotes[id].bidPaise;s.setDraft(o);if(s.review().ok)s.submit('k'+(++key));}
          else if(action===5)s.quoteChange(id,{askUnits:1300,bidUnits:1300});
          var ps=Object.values(s.positions),lhs=s.cashPaise+ps.reduce(function(sum,p){return sum+p.costBasisPaise+p.entryFeesRemainingPaise;},0),rhs=s.initialPaise+ps.reduce(function(sum,p){return sum+p.realisedPaise;},0);
          equal(lhs,rhs);ok(!ps.some(function(p){return p.units<0;}));ok(s.reservedPaise()>=0);ok(s.availablePaise()>=0);
        }
      }
    });
    return results;
  }
  return {run:run};
}));
