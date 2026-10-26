(function(root){
  'use strict';
  if(typeof document==='undefined')return;
  var E=root.FTEngine,F=root.FTFixtures,X=root.FTExplain,S=root.FTSimulator;
  var sim=new S.Simulation(),state={view:'chain',contractId:null,orderId:null,mode:'review',exit:false,submitKey:null};
  var app=document.getElementById('app'),toastTimer;
  var names=['Watchlist','Market Watch','Option Chain','Strategies','Scalper','Portfolio','Orders','Investment','AI','Cloud','Terminal','Alerts'];
  var paths=[
    'M6 3h12v18l-6-4-6 4Z','M5 3v18M3 7h4v7H3ZM12 2v20M10 5h4v11h-4ZM19 5v16M17 10h4v7h-4Z',
    'M9 8H7a4 4 0 0 0 0 8h4M15 8h2a4 4 0 0 1 0 8h-4M8 12h8','M3 16h6l3-11 3 14 3-7h3',
    'M14 2 4 14h7l-1 8 10-13h-7Z','M3 7h18v14H3ZM5 7V3h14v4M9 12h6',
    'M5 3h14v18H5ZM8 8h8M8 12h8M8 16h5','M3 9h18L12 3ZM5 12v7M10 12v7M15 12v7M20 12v7M3 22h18',
    'M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z','M5 18a5 5 0 0 1-1-10 7 7 0 0 1 13-2 6 6 0 0 1 1 12Z',
    'M3 3h7v7H3ZM14 3h7v7h-7ZM3 14h7v7H3ZM14 14h7v7h-7Z','M4 18h16l-2-3V9a6 6 0 0 0-12 0v6ZM9 21h6'
  ];
  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function money(v){return E.money(v);}function level(v){return E.level(v);}
  function signed(v){return(v>0?'Profit +':v<0?'Loss −':'Break-even ')+money(Math.abs(v));}
  function tone(v){return v>0?'positive':v<0?'negative':'neutral';}
  function date(ms){if(!Number.isSafeInteger(ms))return 'Unavailable';return new Date(ms).toLocaleString('en-GB',{timeZone:'Asia/Kolkata',day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit',hour12:false})+' IST';}
  function notify(text){var n=document.getElementById('toast');n.textContent=text;n.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(function(){n.hidden=true;},6500);}
  function message(text){document.getElementById('evaluator-result').textContent=text;notify(text);}
  function c(){return sim.contracts[state.contractId];}
  function q(){return sim.quotes[state.contractId];}
  function errors(check){return check.errors.length?'<div class="error-box" role="alert"><strong>Review needs attention</strong><ul>'+check.errors.map(function(e){return '<li data-error="'+esc(e.code)+'">'+esc(e.message)+'</li>';}).join('')+'</ul></div>':'';}
  function feeNote(){if(!root.FTFees.valid(sim.fees))return '<p class="fee-note">Fee profile unavailable. Costs are not assumed to be zero; submission is blocked until the synthetic fee profile is restored.</p>';return '<p class="fee-note">'+esc(sim.fees.name)+'. '+
    '₹25 per entry order; ₹25 per exit order or settlement. One complete path costs ₹50, regardless of lots. These are invented fees, not a broker tariff. More separate exit orders add fees.</p>';}
  function head(title,description,back){return '<div class="page-head"><div><div class="eyebrow">FIRST OPTIONS ORDER / '+(state.mode==='baseline'?'BASELINE':'REVIEW')+'</div><h1>'+title+'</h1><p class="subhead">'+description+'</p></div><div class="head-actions">'+(back?'<button class="text-button" data-action="chain">← Option chain</button>':'<span class="tag">SIMULATED ACCOUNT</span>')+'</div></div>';}
  function nav(){
    document.getElementById('sidebar').innerHTML=names.map(function(n,i){var active=(state.view==='orders'&&n==='Orders')||(['position','portfolio'].includes(state.view)&&n==='Portfolio')||(!['orders','position','portfolio'].includes(state.view)&&n==='Option Chain');
      return '<button class="nav-button '+(active?'active':'')+'" data-nav="'+esc(n)+'" aria-label="'+esc(n)+'" '+(active?'aria-current="page"':'')+'><svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+paths[i]+'"/></svg><span class="nav-name">'+n+'</span></button>';}).join('');
  }
  function chain(){
    var rows=[{strike:2260000,call:'A',put:'B'},{strike:2270000,call:'C',put:null}];
    return head('Option chain','Select the contract you have chosen. This prototype does not choose a contract or position size for you.',false)+
      '<div class="chain-toolbar"><strong>DEMO INDEX <span class="mono">22,608.20</span></strong><label><span class="offscreen">Option chain view</span><select id="buyer-view"><option>Option Buyer</option></select></label><span class="small">Lot size <b>65 units</b></span><span class="quote-state">Synthetic · '+date(sim.clock)+'</span></div>'+
      '<div class="table-scroll"><table class="chain-table"><caption class="offscreen">Synthetic option chain. Bid, ask and units are invented. Choose a call or put premium to open its ticket.</caption><thead><tr class="group"><th colspan="4">CALLS</th><th class="strike">27 Oct 26 · Synthetic expiry</th><th colspan="4">PUTS</th></tr><tr><th>Open interest</th><th>Bid / ask</th><th>Volume</th><th>Premium · select</th><th class="strike">Strike</th><th>Premium · select</th><th>Volume</th><th>Bid / ask</th><th>Open interest</th></tr></thead><tbody>'+
      rows.map(function(r){var cq=sim.quotes[r.call],pq=r.put&&sim.quotes[r.put];return '<tr><td class="call-tint">'+(r.call==='A'?'87,100':'64,500')+'</td><td class="call-tint">'+(cq.bidPaise==null?'No bid':level(cq.bidPaise))+' / '+level(cq.askPaise)+'</td><td class="call-tint">'+(r.call==='A'?'20,800':'12,350')+'</td><td class="call-tint"><button class="select-contract" data-contract="'+r.call+'" aria-label="Open synthetic '+level(r.strike)+' call">'+level(cq.askPaise)+'</button><span class="depth-label">Synthetic · '+(cq.bidPaise==null?'no bid':'ask')+'</span></td><td class="strike">'+level(r.strike)+'</td><td class="put-tint">'+(pq?'<button class="select-contract" data-contract="'+r.put+'" aria-label="Open synthetic '+level(r.strike)+' put">'+level(pq.askPaise)+'</button><span class="depth-label">Synthetic · ask</span>':'—')+'</td><td class="put-tint">'+(pq?'40,090':'—')+'</td><td class="put-tint">'+(pq?level(pq.bidPaise)+' / '+level(pq.askPaise):'—')+'</td><td class="put-tint">'+(pq?'16,000':'—')+'</td></tr>';}).join('')+
      '</tbody></table><div class="ticker-line">DEMO INDEX · 22,608.20 · Synthetic snapshot, not a market forecast</div></div>'+
      '<div class="chain-footer"><span>Premiums are per unit. Orders use whole lots.</span><span>SIM exchange · frozen simulation clock · no real market data</span></div>'+
      '<div class="chain-bottom"><section class="panel empty-line"><div><h2>Your selected order, explained</h2><p class="small">Review the amount committed, what can be lost, expiry outcomes, and how an exit works. You can edit or back out.</p></div><div class="large-icon" aria-hidden="true">≡</div></section>'+
      '<section class="panel"><div class="info-row"><h2>Simulated account</h2><span class="tag">NO REAL FUNDS</span></div><div class="money-line"><span>Available</span><strong class="money">'+money(sim.availablePaise())+'</strong></div><div class="money-line"><span>Reserved for pending purchases</span><strong class="money">'+money(sim.reservedPaise())+'</strong></div><div class="actions"><button data-action="orders">Orders</button><button data-action="portfolio">Portfolio</button></div></section></div>'+
      '<p class="testing-note">Separate arithmetic and screenshot-derived regression fixtures are in Evaluator controls. They are not recommendations or a contemporaneous quote chain.</p>';
  }
  function openTicket(id,exit){
    state.contractId=id;state.exit=!!exit;state.view=exit?'exit-ticket':'ticket';state.submitKey=null;
    var o=F.order(id,1);if(exit){o.intent='CLOSE';o.side='SELL';o.limitPaise=sim.quotes[id]&&sim.quotes[id].bidPaise;var units=sim.openUnits(id)-sim.closingReserved(id);o.lots=Math.max(1,Math.floor(units/sim.contracts[id].lotSize));}
    sim.setDraft(o);sim.reviewRecord=null;render(true);
  }
  function budgetInput(){return '<div class="form-section"><label for="loss-budget">Optional loss budget for this trade (₹)</label><input class="budget-value" id="loss-budget" inputmode="decimal" placeholder="Not sure / not entered" value="'+(sim.user.lossBudgetInvalid?esc(sim.user.lossBudgetRaw):sim.user.lossBudgetPaise==null?'':esc(sim.user.lossBudgetPaise/100))+'"><label class="check-label"><input id="not-sure" type="checkbox" '+(sim.user.lossBudgetPaise==null&&!sim.user.lossBudgetInvalid?'checked':'')+'> Not sure</label><p class="helper">Your own comparison amount, not a guarantee or a position-size suggestion.</p></div>';}
  function ticket(){
    var ct=c(),qu=q(),o=sim.draft,check=sim.check(),a=check.analysis,exit=state.exit;
    var position=sim.positions[state.contractId],label=X.contract(ct);
    return head(exit?'Exit the position':'Your chosen contract',exit?'Selling closes an existing long. A pending exit does not remove your exposure.':'Enter your order details, then review the consequences before simulated submission.',true)+
      '<div class="ticket-layout"><section class="panel"><div class="ticket-label">Proposed ticket (not Nubra\'s actual order ticket)</div><div class="contract-heading"><h2>'+esc(label)+'</h2><span class="tag">SYNTHETIC</span></div><p class="small">Expiry '+date(ct.expiryMs)+' · '+esc(ct.settlement)+' settlement · SIM</p>'+
      '<div class="quote-grid"><div><small>Bid / unit</small><strong class="money">'+money(qu&&qu.bidPaise)+'</strong></div><div><small>Ask / unit</small><strong class="money">'+money(qu&&qu.askPaise)+'</strong></div><div><small>Tick / unit</small><strong class="money">'+money(ct.tickPaise)+'</strong></div></div>'+
      '<div class="field-row"><label>Number of lots<input id="lots" type="number" min="1" max="100" step="1" value="'+esc(o.lots)+'"></label><label>Limit premium / unit (₹)<input id="limit-price" inputmode="decimal" value="'+(o.limitPaise==null?'':esc(o.limitPaise/100))+'"></label></div><p class="helper">'+(E.positive(ct.lotSize)?esc(o.lots)+' lots × '+esc(ct.lotSize)+' units = '+esc(o.lots*ct.lotSize)+' units. ':'Quantity is unavailable until lot-size metadata is restored. ')+(exit?'Unreserved long units: '+Math.max(0,(position?position.units:0)-sim.closingReserved(ct.id))+'.':'Price shown is an editable synthetic ask, not a price instruction.')+'</p>'+
      (exit?'<div class="field-row"><label>Exit order type<select id="exit-type"><option value="LIMIT" '+(o.type==='LIMIT'?'selected':'')+'>Limit</option><option value="SL_LIMIT" '+(o.type==='SL_LIMIT'?'selected':'')+'>Stop-limit</option></select></label>'+(o.type==='SL_LIMIT'?'<label>Trigger premium / unit (₹)<input id="trigger-price" inputmode="decimal" value="'+(o.triggerPaise==null?'':esc(o.triggerPaise/100))+'"></label>':'')+'</div>':'')+
      '<div class="cost-chip">'+(exit?'SELL TO CLOSE':'BUY TO OPEN')+' · LIMIT'+(o.type==='SL_LIMIT'?' WITH TRIGGER':'')+' · DAY · Simulated carry</div>'+
      (!exit?budgetInput():'<p class="helper">If your stop triggers, its sell limit still needs a matching bid. It may remain unfilled.</p>')+
      (a&&!exit?'<div class="form-section"><div class="money-line"><span>Premium at your limit</span><strong class="money">'+money(a.premiumPaise)+'</strong></div><div class="money-line"><span>Entry fee (one order)</span><strong class="money">'+money(a.entryFeePaise)+'</strong></div><div class="money-line total"><span>Entry funds at limit</span><strong class="money">'+money(a.entryFundsPaise)+'</strong></div><div class="money-line"><span>Available simulated funds</span><strong class="money">'+money(sim.availablePaise())+'</strong></div></div>':'')+
      errors(check)+'<div class="actions"><button data-action="chain" class="text-button">Back out</button><button data-action="review" id="review-order" class="primary">Review order</button></div>'+feeNote()+'</section>'+
      '<aside class="facts-stack"><section class="panel"><div class="note-icon" aria-hidden="true">↳</div><h2>Review, then decide</h2><p class="small">The next step explains this order. It does not judge whether the trade is right for you. You remain free to change the order or leave.</p><ul class="fact-list"><li>No real order is sent.</li><li>Limit prices control execution price, not whether an order fills.</li><li>Orders and positions are separate: a submitted order can remain unfilled.</li></ul></section><section class="panel"><h3>Question about choosing?</h3><p class="small">'+esc(X.answer('which strike should I buy?'))+'</p></section></aside></div>';
  }
  function review(){
    var ct=c(),o=sim.draft,check=sim.check(),a=check.analysis,changed=sim.reviewChanged(),exit=state.exit;
    var intro=head(exit?'Review your exit':'Review your first options order',exit?'Confirm the closing quantity and what happens if this exit does not fill.':'A review of the order you chose. These are consequences, not a forecast or recommendation.',true);
    var change=changed?'<div class="changed-box" role="alert"><strong>Data changed after review.</strong> Previous figures are no longer acknowledged. Recalculate before submitting. <button data-action="recalculate" class="secondary">Recalculate review</button></div>':'';
    if(!a)return intro+'<div class="review-wrap">'+change+errors(check)+'<div class="actions"><button data-action="edit">Edit order</button><button data-action="chain">Back out</button></div>'+feeNote()+'</div>';
    if(exit)return intro+exitReview(ct,o,a,check,changed,change);
    var facts=X.facts(ct,o,a);
    var buttons='<div class="actions"><button data-action="edit" class="text-button">Edit order</button><button data-action="chain" class="text-button">Back out</button><button data-action="submit" id="place-order" class="primary" '+(!check.ok||changed?'disabled':'')+'>Place simulated order</button></div>';
    if(state.mode==='baseline')return intro+'<div class="baseline-wrap"><div class="baseline-label">Constructed baseline, not Nubra\'s ticket</div><section class="panel"><h2>'+esc(facts.identity)+'</h2><p class="small">'+esc(facts.quantity)+' · '+date(ct.expiryMs)+'</p><div class="money-line"><span>Limit per unit</span><strong>'+money(o.limitPaise)+'</strong></div><div class="money-line"><span>Premium</span><strong>'+money(a.premiumPaise)+'</strong></div><div class="money-line"><span>Entry fee</span><strong>'+money(a.entryFeePaise)+'</strong></div><div class="money-line total"><span>Total entry funds</span><strong>'+money(a.entryFundsPaise)+'</strong></div>'+change+errors(check)+buttons+feeNote()+'</section></div>';
    var be=a.thresholdPaise;
    var lossLevel=ct.optionType==='CE'?Math.max(ct.strikePaise-10000,0):ct.strikePaise+10000;
    var profitLevel=be==null?null:ct.optionType==='CE'?be+10000:Math.max(be-10000,0);
    var scenarios=[{name:'Loss example',settle:lossLevel},{name:'Near breakeven',settle:be},{name:'Profit example',settle:a.canProfitAtExpiry?profitLevel:null}];
    return intro+'<div class="review-wrap"><div class="review-header"><div><h2>'+esc(facts.identity)+'</h2><p>'+esc(facts.quantity)+' · Expiry '+date(ct.expiryMs)+'</p></div><span class="tag">YOUR SELECTED ORDER</span></div>'+change+
      '<div class="review-layout"><div class="review-column"><section class="panel"><div class="metric-label">Entry funds at your limit</div><div class="metric-value money">'+money(a.entryFundsPaise)+'</div><div class="money-line"><span>Premium commitment</span><strong>'+money(a.premiumPaise)+'</strong></div><div class="money-line"><span>Entry charges</span><strong>'+money(a.entryFeePaise)+'</strong></div><p class="small">'+esc(facts.entry)+'</p></section>'+
      '<section class="panel"><h2>What must happen at expiry?</h2><div class="metric-value mono">'+(a.breakEvenPaise==null?'No feasible breakeven':'≈ '+level(a.breakEvenPaise))+'</div><p class="small">'+esc(facts.expiry)+'</p><span class="cost-chip">Breakeven at expiry · entry + settlement costs included</span><div class="scenario-cards">'+scenarios.map(function(s){var v=s.settle==null?null:E.expiry(ct,o.limitPaise,a.units,s.settle,sim.fees);return '<article class="scenario-card"><h3>'+s.name+'</h3><strong class="'+(v==null?'neutral':tone(v))+'">'+(v==null?'Not feasible':signed(v))+'</strong><small>'+(s.settle==null?'No feasible profitable level':'If index settles at '+level(s.settle))+'</small></article>';}).join('')+'</div><p class="helper">Illustrative settlement levels, not predicted outcomes. Rounded breakeven may leave a few paise of profit or loss. The fixed ₹50 path cost is included in each example.</p></section>'+
      '<section class="panel"><h3>Before expiry is different</h3><p class="small">'+esc(facts.before)+'</p></section></div>'+
      '<aside class="review-column"><section class="panel"><h2>What can be lost?</h2><div class="metric-label">Gross premium at risk</div><div class="metric-value money">'+money(a.grossMaxLossPaise)+'</div><p class="small">'+esc(facts.exposure)+'</p><div class="form-section"><h3>Including stated single-exit costs</h3><p class="small">'+esc(facts.boundary)+'</p></div></section><section class="panel"><h2>How you can exit</h2><p class="small">'+esc(facts.exit)+'</p><p class="small">'+esc(facts.cancel)+'</p></section><section class="panel slim"><h3>Your loss budget</h3><p class="small">'+(sim.user.lossBudgetPaise==null?'Not sure / not entered. No position-size suggestion is made.':money(sim.user.lossBudgetPaise)+' entered by you. This is not a loss guarantee.')+'</p></section></aside></div>'+errors(check)+
      '<div class="review-actions"><span class="small">You can edit or decide not to trade.</span>'+buttons+'</div>'+feeNote()+'</div>';
  }
  function exitReview(ct,o,a,check,changed,change){
    var p=sim.positions[ct.id],basis=p&&p.units?Math.round(p.costBasisPaise*a.units/p.units):0;
    var entryFee=p&&p.units?Math.round(p.entryFeesRemainingPaise*a.units/p.units):0;
    var proceeds=a.units*o.limitPaise,estimate=proceeds-basis-entryFee-(sim.fees?sim.fees.exitPaise:0);
    return '<div class="baseline-wrap"><section class="panel"><h2>Sell to close · '+esc(X.contract(ct))+'</h2><p class="small">Synthetic · '+o.lots+' lots × '+ct.lotSize+' = '+a.units+' units. This is a closing sale, not a new short position.</p>'+change+
      '<div class="money-line"><span>Sell limit per unit</span><strong>'+money(o.limitPaise)+'</strong></div><div class="money-line"><span>Proceeds at this limit, before exit fee</span><strong>'+money(proceeds)+'</strong></div><div class="money-line"><span>Exit fee (one order)</span><strong>'+money(sim.fees&&sim.fees.exitPaise)+'</strong></div><div class="money-line total"><span>Indicative realised result if fully filled at limit</span><strong class="'+tone(estimate)+'">'+signed(estimate)+'</strong></div>'+
      (o.type==='SL_LIMIT'?'<div class="changed-box">Stop trigger '+money(o.triggerPaise)+'; sell limit '+money(o.limitPaise)+'. Triggering does not guarantee a fill or cap the loss.</div>':'')+
      '<p class="small">The result includes the allocated purchase premium, allocated entry fee and this exit fee. A pending exit leaves your position open. An execution at a different price changes the result.</p>'+errors(check)+
      '<div class="actions"><button data-action="edit">Edit order</button><button data-action="portfolio">Back out</button><button class="sell" data-action="submit" id="place-order" '+(!check.ok||changed?'disabled':'')+'>Place simulated exit</button></div>'+feeNote()+'</section></div>';
  }
  function status(){
    var o=sim.order(state.orderId);if(!o)return empty('No order selected','Open an order from Orders.');
    var ct=sim.contracts[o.contractId],close=o.intent==='CLOSE';
    var remains=sim.openUnits(ct.id),pending=sim.active(o);
    var description=o.status==='FILLED'?(close?(remains?'Filled closing quantity. Some position units remain.':'The position is closed.'):o.filledUnits+' units are now a position.'):
      o.status==='PARTIAL'?'Some units are filled. The remainder is still pending.':o.status==='CANCELLED'?'Only the unfilled remainder was cancelled. Any filled position remains.':
      o.status==='REJECTED'?'The remaining units were rejected. Any existing fills remain.':o.status==='EXPIRED'?'The DAY remainder expired without filling.':o.status==='TRIGGER_WAIT'?'Waiting for the stop trigger. The position remains open.':'Submitted is not filled. The order is pending; a match is not guaranteed.';
    return head(close?'Exit result':'Order status',description,true)+'<div class="review-wrap"><section class="panel"><div class="status-heading"><span class="status-icon" aria-hidden="true">≡</span><div><h2>'+esc(o.id)+' · '+esc(X.contract(ct))+'</h2><span class="status-badge">'+o.status.replace('_',' ')+'</span> <span class="small">Synthetic · '+(close?'SELL TO CLOSE':'BUY TO OPEN')+'</span></div></div>'+
      '<div class="status-grid"><div><small>Ordered units</small><strong class="mono">'+o.units+'</strong></div><div><small>Filled units</small><strong class="mono">'+o.filledUnits+'</strong></div><div><small>Remaining pending units</small><strong class="mono">'+o.remainingUnits+'</strong></div><div><small>Actual average fill / unit</small><strong class="money">'+(o.averageFillPaise==null?'Not filled':money(o.averageFillPaise))+'</strong></div></div>'+
      '<div class="money-line"><span>Fee charged on this order</span><strong>'+money(o.chargedFeePaise)+'</strong></div><div class="money-line"><span>Long position units now</span><strong>'+remains+'</strong></div><div class="money-line"><span>Funds reserved across pending purchases</span><strong>'+money(sim.reservedPaise())+'</strong></div>'+
      (close&&o.filledUnits?'<div class="money-line total"><span>Net realised result from this exit</span><strong class="'+tone(o.realisedPaise||0)+'">'+signed(o.realisedPaise||0)+'</strong></div>':'')+
      '<div class="actions">'+(pending?'<button data-action="cancel" data-id="'+o.id+'">Cancel unfilled remainder</button>':'')+'<button data-action="orders">All orders</button><button class="primary" data-action="portfolio">View positions</button></div><p class="helper">Use Evaluator controls to attempt fills, reject a remainder, or leave it pending. Matching rules still apply.</p><h3 class="form-section">Order events</h3><ol class="history">'+o.events.map(function(e){return '<li>'+esc(e)+'</li>';}).join('')+'</ol>'+feeNote()+'</section></div>';
  }
  function empty(title,body){return head(title,body,true)+'<section class="panel empty"><h2>'+title+'</h2><p>'+body+'</p><button data-action="chain">Option chain</button></section>';}
  function orders(){
    if(!sim.orders.length)return empty('Orders','No simulated orders have been submitted.');
    return head('Orders','Orders can be pending, partly filled, cancelled, rejected, expired, or filled.',true)+'<section class="panel table-panel"><table class="list-table"><thead><tr><th>Order</th><th>Contract · Synthetic</th><th>Intent</th><th>Filled / ordered</th><th>Status</th><th>Action</th></tr></thead><tbody>'+sim.orders.slice().reverse().map(function(o){return '<tr><td>'+o.id+'</td><td>'+esc(X.contract(sim.contracts[o.contractId]))+'</td><td>'+o.side+' TO '+o.intent+'</td><td>'+o.filledUnits+' / '+o.units+'</td><td>'+o.status+'</td><td><button data-status="'+o.id+'">View</button></td></tr>';}).join('')+'</tbody></table></section>'+feeNote();
  }
  function portfolio(){
    var ids=Object.keys(sim.positions);if(!ids.length)return empty('Portfolio','No position exists until an opening order fills.');
    return head('Portfolio','Filled positions and realised results. Cancelling a pending exit does not close a position.',true)+
      '<div class="chain-bottom">'+ids.map(function(id){var p=sim.positions[id],ct=sim.contracts[id];return '<section class="panel"><div class="info-row"><h2>'+esc(X.contract(ct))+'</h2><span class="tag">'+p.status+'</span></div><p class="small">Synthetic · Expiry '+date(ct.expiryMs)+'</p><div class="money-line"><span>Open units</span><strong>'+p.units+'</strong></div><div class="money-line"><span>Purchase premium still held</span><strong>'+money(p.costBasisPaise)+'</strong></div><div class="money-line"><span>Pending closing units</span><strong>'+sim.closingReserved(id)+'</strong></div><div class="money-line"><span>Net realised result</span><strong class="'+tone(p.realisedPaise)+'">'+signed(p.realisedPaise)+'</strong></div><div class="actions"><button data-position="'+id+'">Position details</button><button class="sell" data-exit="'+id+'" '+(p.units-sim.closingReserved(id)<=0?'disabled':'')+'>Exit position</button></div></section>';}).join('')+'</div>';
  }
  function position(){
    var ct=c(),p=sim.positions[state.contractId],qu=q();if(!p)return empty('No position','Only filled units create a position.');
    var indicative=p.units&&qu&&E.positive(qu.bidPaise)&&FeesAvailable()?p.units*qu.bidPaise-p.costBasisPaise-p.entryFeesRemainingPaise-sim.fees.exitPaise:null;
    return head('Position details','Review the filled position. Exit orders need an executable matching price.',true)+'<div class="ticket-layout"><section class="panel"><h2>'+esc(X.contract(ct))+'</h2><p class="small">Synthetic · '+p.status+' · Expiry '+date(ct.expiryMs)+'</p><div class="money-line"><span>Open units</span><strong>'+p.units+'</strong></div><div class="money-line"><span>Average purchase premium / unit</span><strong>'+money(p.units?p.costBasisPaise/p.units:0)+'</strong></div><div class="money-line"><span>Gross premium at risk still held</span><strong>'+money(p.costBasisPaise)+'</strong></div><div class="money-line"><span>Unallocated entry costs</span><strong>'+money(p.entryFeesRemainingPaise)+'</strong></div><div class="money-line"><span>Pending exit units</span><strong>'+sim.closingReserved(ct.id)+'</strong></div><div class="money-line"><span>Net realised result so far</span><strong class="'+tone(p.realisedPaise)+'">'+signed(p.realisedPaise)+'</strong></div>'+
      (p.units?'<div class="money-line total"><span>Indicative net result if closed at current bid</span><strong class="'+(indicative==null?'neutral':tone(indicative))+'">'+(indicative==null?'Unavailable':signed(indicative))+'</strong></div><p class="small">This includes allocated entry and one exit fee, assumes all open units fill at this bid, and is not an executable promise.</p>':'<p class="small">No units remain open.'+(p.status==='SETTLED'?' Synthetic settlement processed at '+level(p.settlementPaise)+'.':'')+'</p>')+
      '<div class="actions"><button data-action="portfolio">Portfolio</button><button class="sell" data-exit="'+ct.id+'" '+(p.units-sim.closingReserved(ct.id)<=0?'disabled':'')+'>Exit position</button></div>'+feeNote()+'</section><aside class="panel"><h2>Exit versus cancel</h2><p class="small">Selling the same contract closes the units you hold only when it fills. Cancelling a pending order releases its unfilled remainder; it does not undo an existing position.</p><p class="small">A stop-limit can trigger and remain unfilled after a price gap. Full premium loss remains possible.</p></aside></div>';
  }
  function FeesAvailable(){return root.FTFees.valid(sim.fees);}
  function controls(){
    var select=document.getElementById('active-order'),prev=select.value;
    select.innerHTML=sim.orders.length?sim.orders.slice().reverse().map(function(o){return '<option value="'+o.id+'">'+o.id+' · '+o.status+' · '+o.remainingUnits+' pending</option>';}).join(''):'<option value="">No submitted orders</option>';
    if(state.orderId&&sim.order(state.orderId))select.value=state.orderId;else if(prev&&sim.order(prev))select.value=prev;
    document.getElementById('clock-label').textContent=date(sim.clock);
    document.getElementById('review-mode').setAttribute('aria-pressed',state.mode==='review');
    document.getElementById('baseline-mode').setAttribute('aria-pressed',state.mode==='baseline');
  }
  function render(focus){
    nav();app.innerHTML=state.view==='chain'?chain():['ticket','exit-ticket'].includes(state.view)?ticket():state.view==='review'?review():state.view==='status'?status():state.view==='orders'?orders():state.view==='position'?position():portfolio();
    controls();if(focus){document.getElementById('main').focus({preventScroll:true});window.scrollTo(0,0);}
  }
  function readDraft(){
    var o=F.clone(sim.draft);if(!o)return;
    var lots=document.getElementById('lots'),price=document.getElementById('limit-price'),trigger=document.getElementById('trigger-price'),type=document.getElementById('exit-type'),budget=document.getElementById('loss-budget');
    if(lots)o.lots=Number(lots.value);if(price)o.limitPaise=E.parsePaise(price.value);if(type)o.type=type.value;
    if(trigger)o.triggerPaise=E.parsePaise(trigger.value);
    if(budget){sim.user.lossBudgetRaw=budget.value;sim.user.lossBudgetPaise=budget.value.trim()===''?null:E.parsePaise(budget.value);sim.user.lossBudgetInvalid=budget.value.trim()!==''&&sim.user.lossBudgetPaise==null;}
    sim.setDraft(o);
  }
  document.addEventListener('click',function(event){
    var b=event.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.mode){location.hash='?mode='+b.dataset.mode;return;}
    if(b.dataset.nav){var name=b.dataset.nav;if(name==='Option Chain'){state.view='chain';state.exit=false;render(true);}else if(name==='Orders'){state.view='orders';render(true);}else if(name==='Portfolio'){state.view='portfolio';render(true);}else notify('Not part of this prototype');return;}
    if(b.dataset.contract){openTicket(b.dataset.contract,false);return;}
    if(b.dataset.exit){openTicket(b.dataset.exit,true);return;}
    if(b.dataset.position){state.contractId=b.dataset.position;state.view='position';render(true);return;}
    if(b.dataset.status){state.orderId=b.dataset.status;state.view='status';render(true);return;}
    var action=b.dataset.action;
    if(action==='chain'){state.view='chain';state.exit=false;render(true);}
    if(action==='orders'||action==='portfolio'){state.view=action;render(true);}
    if(action==='review'){readDraft();sim.review();state.view='review';state.submitKey=sim.reviewRecord.id;render(true);}
    if(action==='edit'){state.view=state.exit?'exit-ticket':'ticket';render(true);}
    if(action==='recalculate'){sim.review();state.submitKey=sim.reviewRecord.id;render();notify('Review recalculated using the current synthetic inputs.');}
    if(action==='submit'){var r=sim.submit(state.submitKey);if(r.ok){state.orderId=r.order.id;state.view='status';render(true);}else{notify(r.message);render();}}
    if(action==='cancel'){var cancel=sim.cancel(b.dataset.id);notify(cancel.ok?'Unfilled remainder cancelled. Existing fills remain.':cancel.message);render();}
  });
  app.addEventListener('change',function(event){
    if(event.target.id==='not-sure'){sim.user.lossBudgetPaise=event.target.checked?null:0;sim.user.lossBudgetInvalid=false;render();return;}
    if(['lots','limit-price','loss-budget','exit-type','trigger-price'].includes(event.target.id)){
      var activeId=event.target.id;readDraft();render();var again=document.getElementById(activeId);if(again)again.focus();
    }
  });
  document.getElementById('apply-scenario').addEventListener('click',function(){
    var name=document.getElementById('scenario').value;if(!state.contractId)openTicket('A',false);
    var id=state.contractId;
    if(name==='normal'){sim.contracts[id]=F.contract(id);}
    sim.applyScenario(name,id);
    if(name==='missing-data'){sim.contracts[id].lotSize=null;}
    if(name==='expired'){sim.contracts[id].expiryMs=sim.clock-1;}
    if(name==='changed'&&state.view!=='review'){state.view='review';state.submitKey=sim.reviewRecord?sim.reviewRecord.id:null;}
    render();message('Applied '+document.getElementById('scenario').selectedOptions[0].text+'. Synthetic inputs changed; previous reviews may be invalid.');
  });
  document.getElementById('load-fixture').addEventListener('click',function(){var id=document.getElementById('fixture').value;if(id)openTicket(id,false);else message('Choose a test fixture.');});
  function activeId(){return document.getElementById('active-order').value;}
  document.getElementById('fill-now').addEventListener('click',function(){var r=sim.fill(activeId(),'full');render();message(r.ok?'Filled '+r.units+' units at '+money(r.pricePaise)+'.':r.message);});
  document.getElementById('partial-fill').addEventListener('click',function(){var r=sim.fill(activeId(),'partial');render();message(r.ok?'Filled '+r.units+' units; any remainder stays pending.':r.message);});
  document.getElementById('reject-order').addEventListener('click',function(){var r=sim.reject(activeId());render();message(r.ok?'Remaining units rejected; existing fills remain.':r.message);});
  document.getElementById('stay-pending').addEventListener('click',function(){var o=sim.order(activeId());message(o&&sim.active(o)?'No fill event sent. Order remains '+o.status+'.':'There is no active order to leave pending.');});
  document.getElementById('settle').addEventListener('click',function(){var s=E.parsePaise(document.getElementById('settlement-level').value),r=sim.settle(s);state.view='portfolio';render();message(r.ok?'Expiry processed at '+level(s)+'. Pending remainders expired.':r.message);});
  document.getElementById('reset').addEventListener('click',function(){sim.reset();state.view='chain';state.contractId=null;state.orderId=null;state.exit=false;state.submitKey=null;document.getElementById('scenario').value='normal';document.getElementById('fixture').value='';render(true);message('Simulation reset. Orders, positions, reservations and scenarios cleared.');});
  document.getElementById('open-sell').addEventListener('click',function(){if(!state.contractId)openTicket('A',false);var o=F.order(state.contractId,1);o.side='SELL';o.intent='OPEN';sim.setDraft(o);state.exit=false;sim.review();state.view='review';render(true);message('Opening Sell is outside this prototype; no order was sent.');});
  function mode(){var m=location.hash.match(/[?&]mode=(baseline|review)/);if(m)state.mode=m[1];render();}
  window.addEventListener('hashchange',mode);mode();
  // Expose a read-only diagnostic entry point for sandbox UI checks; no network or account data.
  root.FTUI={snapshot:function(){return F.clone({view:state.view,mode:state.mode,cashPaise:sim.cashPaise,reservedPaise:sim.reservedPaise(),orders:sim.orders,positions:sim.positions});}};
}(typeof globalThis!=='undefined'?globalThis:this));
