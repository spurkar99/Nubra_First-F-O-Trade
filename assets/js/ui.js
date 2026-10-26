(function(root){
  'use strict';
  if(typeof document==='undefined')return;
  var E=root.FTEngine,F=root.FTFixtures,X=root.FTExplain,S=root.FTSimulator,G=root.FTGuide;
  var sim=new S.Simulation(),state={view:'home',contractId:null,orderId:null,mode:'review',exit:false,submitKey:null,
    riskAcknowledged:false,guidance:null,chainView:'buyer',modal:null};
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
  function metric(key,label){var t=G.get(key);return '<button type="button" class="metric-link" data-metric="'+key+'" aria-label="Explain '+esc(t?t.title:key)+'">'+(label?esc(label)+' ':'')+'<span class="metric-question" aria-hidden="true">?</span></button>';}
  function context(){return {contract:c(),order:sim.draft,quote:q(),analysis:sim.draft?sim.check().analysis:null};}
  var returnFocus=null;
  function showDialog(kind,title,body,actions){
    var dialog=document.getElementById('experience-dialog');
    if(!dialog.open)returnFocus=document.activeElement;
    state.modal=kind;
    document.getElementById('dialog-content').innerHTML='<div class="dialog-head"><span class="eyebrow">'+(kind==='risk'?'F&O / RISK DISCLOSURE':'FIRST ORDER / CONTEXT')+'</span><button class="dialog-close" data-action="close-dialog" aria-label="Close dialog">×</button></div><h2 id="dialog-title" tabindex="-1">'+esc(title)+'</h2>'+body+(actions?'<div class="dialog-actions">'+actions+'</div>':'');
    if(!dialog.open){if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');}
    document.getElementById('dialog-title').focus();
  }
  function closeDialog(){var d=document.getElementById('experience-dialog');if(typeof d.close==='function')d.close();else d.removeAttribute('open');state.modal=null;if(returnFocus&&document.contains(returnFocus))returnFocus.focus();}
  function showRisk(){
    showDialog('risk',G.risk.title,'<div class="disclosure-quote"><ul>'+G.risk.bullets.map(function(b){return '<li>'+esc(b)+'</li>';}).join('')+'</ul></div><div class="historical-note"><strong>Historical population data · '+G.risk.period+'</strong><p>'+esc(G.risk.context)+'</p><small>'+esc(G.risk.source)+'</small></div>',
      '<button class="text-button" data-action="close-dialog">Back to workspace</button><button class="disclosure-ack" data-action="ack-risk">I understand</button>');
  }
  function showInvite(){
    if(state.mode==='baseline'){
      showDialog('invite','Constructed baseline mode','<p class="dialog-lead">This evaluation view uses a plain constructed order summary without the contextual guidance layer. It is not Nubra’s actual ticket.</p><p class="small">Continue with the baseline, or explicitly switch to the guided review experience.</p>',
        '<button class="text-button" data-action="choose-unguided">Continue with baseline</button><button class="primary" data-action="switch-guided">Switch to guided review</button>');return;
    }
    showDialog('invite','A little context for your first order?',
      '<p class="dialog-lead">Keep the trading tools. Add a short explanation of what the numbers mean, what your chosen order commits, and how you can exit.</p><div class="invite-points"><div><span>01</span><strong>Know what you are buying</strong><p>Read the contract and quantities in plain language.</p></div><div><span>02</span><strong>See the consequences</strong><p>Separate the full loss exposure from your intended exit.</p></div><div><span>03</span><strong>Decide for yourself</strong><p>Review, edit, or back out. No contract recommendations.</p></div></div><p class="small">Optional. You can switch guidance off at any time. This is context for your order, not a course or a judgement about whether to trade.</p>',
      '<button class="text-button" data-action="choose-unguided">Continue without guidance</button><button class="primary" data-action="choose-guided">Use guided view</button>');
  }
  function enterFno(){
    if(!state.riskAcknowledged){showRisk();return;}
    if(state.guidance===null){showInvite();return;}
    state.view='chain';state.exit=false;render(true);
  }
  function showMetric(key){
    var term=G.get(key,context());if(!term)return;
    showDialog('metric',term.title,'<p class="dialog-lead">'+esc(term.definition)+'</p>'+(term.example?'<div class="selected-example"><span>IN YOUR SELECTED ORDER</span><p>'+esc(term.example)+'</p></div>':'')+'<div class="meaning-caution"><strong>Keep in mind</strong><p>'+esc(term.caution)+'</p></div>',
      '<button class="text-button" data-action="glossary">All metrics</button><button class="primary" data-action="close-dialog">Back to my screen</button>');
  }
  function showSidebar(name){
    var item=G.sidebar[name];if(!item)return;
    showDialog('sidebar',name,'<div class="sidebar-explainer"><h3>'+esc(item[0])+'</h3><p class="dialog-lead">'+esc(item[1])+'</p><div class="meaning-caution"><strong>For this first order</strong><p>'+esc(item[2])+'</p></div></div>'+(name==='Market Watch'?'<div class="mini-market"><span>DEMO INDEX <b>22,608.20</b></span><span>DEMO BANK <b>688.00</b></span><small>Frozen synthetic reference levels, not live quotes.</small></div>':'')+(name==='AI'?'<label class="term-search-label">Ask about a term<input id="term-question" placeholder="For example: what is a premium?"></label><button class="secondary" data-action="answer-term">Explain this term</button><div id="term-answer" class="inline-answer" aria-live="polite">Offline explanations only. No trade selection or forecasts.</div>':''),
      '<button class="text-button" data-action="close-dialog">Back to my screen</button><button class="secondary" data-action="glossary">Look up a metric</button>');
  }
  function glossaryRows(query){return G.search(query).map(function(k){var term=G.get(k);return '<button class="glossary-row" data-metric="'+k+'"><span><strong>'+esc(term.title)+'</strong><small>'+esc(term.definition)+'</small></span><span aria-hidden="true">↗</span></button>';}).join('')||'<p class="small">No matching metric. Try “premium”, “margin”, “expiry” or “stop”. This helper does not select a trade.</p>';}
  function showGlossary(){showDialog('glossary','Every number, explained','<p class="small">Look up the terms shown in the flow. Advanced terms are explained, but numerical Greeks and probability of profit are not calculated here.</p><label class="term-search-label">Search metrics<input id="metric-search" type="search" placeholder="Search premium, strike, breakeven…"></label><div id="glossary-results" class="glossary-results">'+glossaryRows('')+'</div>','<button class="text-button" data-action="close-dialog">Back to my screen</button>');}
  function showGuidance(){
    if(!state.riskAcknowledged){enterFno();return;}
    if(state.guidance!==true){showInvite();return;}
    showDialog('guidance','Guidance is on','<p class="dialog-lead">Brief explanations appear beside the chain, your ticket and your review. The question-mark controls explain individual metrics without changing the order.</p><p class="small">Orders tracks what is pending or filled. Portfolio tracks what you actually hold and can close.</p>',
      '<button class="text-button" data-action="guidance-off">Turn guidance off</button><button class="primary" data-action="close-dialog">Keep guidance on</button>');
  }
  function home(){
    return '<div class="home-wrap"><div class="home-eyebrow">ORDER CLARITY <span>v2.0</span></div><h1>Your first order.<br><span>With its consequences in view.</span></h1><p class="home-lead">A trading workspace with an optional layer of context for your first options order. You choose the contract. The review makes the commitment, exposure and exit mechanics explicit.</p><div class="home-action"><button class="primary large-button" data-action="enter-fno">Open F&amp;O <span aria-hidden="true">→</span></button><span>Index option purchases · Synthetic data only</span></div><div class="home-preview"><div class="home-preview-top"><span>YOUR WORKSPACE</span><span>NO REAL ORDERS</span></div><div class="home-preview-row"><div><span>01</span><h2>Option Chain</h2><p>Find the contract you have already chosen.</p></div><div><span>02</span><h2>Orders</h2><p>See what is pending, partly filled or complete.</p></div><div><span>03</span><h2>Portfolio</h2><p>See what you hold and how a closing order works.</p></div></div></div><p class="home-footnote">This concept does not pick contracts, forecast returns, or decide whether a trade is appropriate. All prices, balances and orders are fictional. You can leave the flow at any time.</p></div>';
  }
  function coach(screen){
    if(!state.guidance||state.mode==='baseline')return '';
    var title,body;
    if(screen==='chain'){title='You only need a few things here';body='The middle column is the strike. Calls are on the left; puts on the right. Confirm the expiry and open the contract you have chosen. OI and volume describe activity, not what you should trade.';}
    else if(screen==='ticket'){title='What this order actually means';body=G.describeOrder(c(),sim.draft,sim.check().analysis);}
    else if(screen==='review'){title='Four things to take away';body='Know the entry outlay, full loss exposure, profit conditions at expiry, and how an exit works. Understanding these consequences does not mean the trade will succeed.';}
    else {title='An order is not the same as a position';body='Orders shows pending and filled instructions. Portfolio contains the units actually held. A closing sale removes exposure only when it fills.';}
    return '<aside class="guide-coach"><div class="coach-symbol" aria-hidden="true">i</div><div><div class="eyebrow">OPTIONAL GUIDANCE</div><h2>'+title+'</h2><p>'+esc(body)+'</p><div class="coach-links">'+metric('premium','Premium')+metric('expiry','Expiry')+metric('maxLoss','Loss exposure')+'<button data-action="risk-context" class="metric-link">What do the loss figures mean? <span aria-hidden="true">↗</span></button></div></div><button class="coach-dismiss" data-action="guidance-off" aria-label="Turn off optional guidance">×</button></aside>';
  }
  function injectMetrics(){
    var map=[[/^open interest/i,'oi'],[/^volume/i,'volume'],[/^strike$/i,'strike'],[/^bid\s*\/\s*ask/i,'spread'],[/^bid\s*\//i,'bid'],[/^ask\s*\//i,'ask'],[/^ltp/i,'ltp'],[/^price change/i,'priceChange'],[/^session range/i,'dayRange'],[/^tick/i,'tick'],[/^number of lots/i,'lots'],[/^limit premium|^sell limit/i,'limit'],[/^trigger premium|^stop trigger/i,'trigger'],[/^entry funds|^total entry funds/i,'entryFunds'],[/^entry charge|^entry fee|^exit fee|^fee charged|^unallocated entry/i,'fees'],[/^premium commitment|^premium at|^purchase premium|^premium\b/i,'premium'],[/^gross premium/i,'maxLoss'],[/^including stated/i,'netLoss'],[/^available/i,'available'],[/^reserved|^funds reserved/i,'reserved'],[/^net realised|^realised/i,'realised'],[/^indicative/i,'unrealised'],[/^actual average fill|^average purchase/i,'averageFill'],[/^filled units/i,'filled'],[/^remaining pending|^pending /i,'pending'],[/^ordered units/i,'units'],[/^open units|^long position/i,'position']];
    app.querySelectorAll('.money-line>span:first-child,.quote-grid small,.status-grid small,.metric-label,.chain-table th,.panel h3,.field-row label').forEach(function(el){
      if(el.querySelector('[data-metric]'))return;
      var text=el.tagName==='LABEL'&&el.firstChild?el.firstChild.textContent:el.textContent;
      var pair=map.find(function(p){return p[0].test(text.trim());});if(!pair)return;
      var holder=document.createElement('span');holder.className='metric-inline';holder.innerHTML=metric(pair[1]);el.appendChild(holder);
      if(el.tagName==='LABEL'){el.classList.add('metric-field');var field=el.querySelector('input,select');if(field&&!field.hasAttribute('aria-label'))field.setAttribute('aria-label',text.trim());}
    });
  }
  function payoffExplorer(ct,o,a){
    if(a.breakEvenPaise==null)return '';
    var lo=Math.max(0,ct.strikePaise-30000),hi=ct.strikePaise+30000,current=q()&&q().spotPaise;
    current=E.nonnegative(current)?Math.max(lo,Math.min(hi,current)):ct.strikePaise;
    var v=E.expiry(ct,o.limitPaise,a.units,current,sim.fees);
    return '<section class="panel payoff-explorer"><div class="info-row"><h2>Explore an expiry outcome</h2>'+metric('breakeven')+'</div><p class="small">Change an illustrative settlement level. This does not change your order or predict the market.</p><label for="expiry-slider">Illustrative index settlement level</label><input type="range" id="expiry-slider" min="'+lo+'" max="'+hi+'" step="1" value="'+current+'"><div class="range-endpoints"><span>'+level(lo)+'</span><span>'+level(hi)+'</span></div><div class="explorer-readout" aria-live="polite"><div><small>If the index settles at</small><strong id="explorer-level" class="mono">'+level(current)+'</strong></div><div><small>Net result at expiry · ₹50 path cost included</small><strong id="explorer-result" class="'+tone(v)+'">'+signed(v)+'</strong></div></div><p class="helper">This is an expiry calculation. Exiting earlier uses the traded option premium, not this expiry calculation.</p></section>';
  }
  function updatePayoff(){var slider=document.getElementById('expiry-slider');if(!slider||!sim.draft)return;var s=Number(slider.value),a=sim.check().analysis;if(!a||!FeesAvailable())return;var v=E.expiry(c(),sim.draft.limitPaise,a.units,s,sim.fees);document.getElementById('explorer-level').textContent=level(s);var out=document.getElementById('explorer-result');out.textContent=signed(v);out.className=tone(v);}
  function feeNote(){if(!root.FTFees.valid(sim.fees))return '<p class="fee-note">Fee profile unavailable. Costs are not assumed to be zero; submission is blocked until the synthetic fee profile is restored.</p>';return '<p class="fee-note">'+esc(sim.fees.name)+'. '+
    '₹25 per entry order; ₹25 per exit order or settlement. One complete path costs ₹50, regardless of lots. These are invented fees, not a broker tariff. More separate exit orders add fees.</p>';}
  function head(title,description,back){return '<div class="page-head"><div><div class="eyebrow">FIRST OPTIONS ORDER / '+(state.mode==='baseline'?'BASELINE':'REVIEW')+'</div><h1>'+title+'</h1><p class="subhead">'+description+'</p></div><div class="head-actions">'+(back?'<button class="text-button" data-action="chain">← Option chain</button>':'<span class="tag">SIMULATED ACCOUNT</span>')+'</div></div>';}
  function nav(){
    document.getElementById('sidebar').innerHTML='<div class="nav-kicker">WORKSPACE</div>'+names.map(function(n,i){var active=(state.view==='orders'&&n==='Orders')||(['position','portfolio'].includes(state.view)&&n==='Portfolio')||(!['home','orders','position','portfolio'].includes(state.view)&&n==='Option Chain');
      return '<button class="nav-button '+(active?'active':'')+'" data-nav="'+esc(n)+'" aria-label="'+esc(n)+'" '+(active?'aria-current="page"':'')+'><svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+paths[i]+'"/></svg><span class="nav-name">'+n+'</span></button>';}).join('');
  }
  function chain(){
    var rows=[{strike:2250000,call:'E',put:'F'},{strike:2260000,call:'A',put:'B'},{strike:2270000,call:'G',put:'H'}];
    var activity=state.chainView==='activity';
    function cell(id,side){
      var qu=sim.quotes[id],st=F.stats(id),price=qu.askPaise,change=qu.ltpPaise-st.previousClosePaise;
      var info=activity?'<td class="'+side+'-tint">'+level(qu.ltpPaise)+'</td><td class="'+side+'-tint">'+(change>=0?'+':'−')+level(Math.abs(change))+'</td>':
        '<td class="'+side+'-tint">'+st.oiContracts.toLocaleString('en-IN')+'</td><td class="'+side+'-tint">'+(qu.bidPaise==null?'No bid':level(qu.bidPaise))+' / '+level(qu.askPaise)+'</td>';
      var vol=activity?level(st.lowPaise)+'–'+level(st.highPaise):st.volumeContracts.toLocaleString('en-IN');
      var priceButton='<td class="'+side+'-tint"><button class="select-contract" data-contract="'+id+'" aria-label="Open synthetic '+level(sim.contracts[id].strikePaise)+' '+(side==='call'?'call':'put')+'">'+level(price)+'</button><span class="depth-label">per unit · synthetic ask</span></td>';
      return side==='call'?info+'<td class="call-tint">'+vol+'</td>'+priceButton:priceButton+'<td class="put-tint">'+vol+'</td>'+info;
    }
    var left=activity?'<th>LTP / unit</th><th>Price change / unit</th><th>Session range / unit</th>':'<th>Open interest<br><small>contracts</small></th><th>Bid / ask · per unit</th><th>Volume<br><small>contracts</small></th>';
    var right=activity?'<th>Session range / unit</th><th>LTP / unit</th><th>Price change / unit</th>':'<th>Volume<br><small>contracts</small></th><th>Open interest<br><small>contracts</small></th><th>Bid / ask · per unit</th>';
    return head('Option chain','Open the contract you have chosen. Every question mark explains a number without changing your order.',false)+coach('chain')+
      '<div class="chain-toolbar"><strong>DEMO INDEX <span class="mono">22,608.20</span> '+metric('spot')+'</strong><label><span class="offscreen">Option chain view</span><select id="buyer-view"><option value="buyer" '+(!activity?'selected':'')+'>Option Buyer</option><option value="activity" '+(activity?'selected':'')+'>Price &amp; activity</option></select></label><span class="small">Lot size <b>65 units</b> '+metric('lotSize')+'</span><span class="quote-state">Synthetic · '+date(sim.clock)+'</span></div>'+
      '<div class="table-scroll"><table class="chain-table"><caption class="offscreen">Synthetic option chain. OI and volume are contracts. Bid, ask and premiums are per unit. No trade is recommended.</caption><thead><tr class="group"><th colspan="4">CALLS '+metric('call')+'</th><th class="strike"><button class="expiry-control" data-metric="expiry">27 Oct 26 <span aria-hidden="true">?</span></button></th><th colspan="4">PUTS '+metric('put')+'</th></tr><tr>'+left+'<th>Premium · select</th><th class="strike">Strike</th><th>Premium · select</th>'+right+'</tr></thead><tbody>'+
      rows.map(function(r){return '<tr>'+cell(r.call,'call')+'<td class="strike">'+level(r.strike)+'</td>'+cell(r.put,'put')+'</tr>';}).join('')+
      '</tbody></table><div class="ticker-line">DEMO INDEX · 22,608.20 · Frozen synthetic reference level</div></div>'+
      '<div class="chain-footer"><span>'+metric('premium','Premium is per unit')+' · '+metric('units','Orders use whole lots')+'</span><span>SIM exchange · no real market data</span></div>'+
      '<div class="chain-bottom"><section class="panel order-map"><div class="eyebrow">THREE PLACES, DIFFERENT JOBS</div><div><strong>Option Chain</strong><span>Choose your contract and draft an order.</span></div><div><strong>Orders</strong><span>Pending and filled instructions.</span></div><div><strong>Portfolio</strong><span>Units you actually hold and can close.</span></div></section>'+
      '<section class="panel"><div class="info-row"><h2>Simulated account</h2><span class="tag">NO REAL FUNDS</span></div><div class="money-line"><span>Available funds</span><strong class="money">'+money(sim.availablePaise())+'</strong></div><div class="money-line"><span>Reserved for pending purchases</span><strong class="money">'+money(sim.reservedPaise())+'</strong></div><div class="actions"><button data-action="orders">Orders</button><button data-action="portfolio">Portfolio</button></div></section></div>'+
      '<p class="testing-note">Advanced terms are in Metrics explained. Missing prices and abnormal quotes are explicit evaluator scenarios, separate from this normal chain.</p>';
  }
  function openTicket(id,exit){
    state.contractId=id;state.exit=!!exit;state.view=exit?'exit-ticket':'ticket';state.submitKey=null;
    var o=F.order(id,1);if(exit){o.intent='CLOSE';o.side='SELL';o.limitPaise=sim.quotes[id]&&sim.quotes[id].bidPaise;var units=sim.openUnits(id)-sim.closingReserved(id);o.lots=Math.max(1,Math.floor(units/sim.contracts[id].lotSize));}
    sim.setDraft(o);sim.reviewRecord=null;render(true);
  }
  function budgetInput(){return '<div class="form-section"><label for="loss-budget">Optional loss budget for this trade (₹)</label><span class="budget-help">'+metric('budget','What this means')+'</span><input class="budget-value" id="loss-budget" inputmode="decimal" placeholder="Not sure / not entered" value="'+(sim.user.lossBudgetInvalid?esc(sim.user.lossBudgetRaw):sim.user.lossBudgetPaise==null?'':esc(sim.user.lossBudgetPaise/100))+'"><label class="check-label"><input id="not-sure" type="checkbox" '+(sim.user.lossBudgetPaise==null&&!sim.user.lossBudgetInvalid?'checked':'')+'> Not sure</label><p class="helper">Your own comparison amount, not a guarantee or a position-size suggestion.</p></div>';}
  function ticket(){
    var ct=c(),qu=q(),o=sim.draft,check=sim.check(),a=check.analysis,exit=state.exit;
    var position=sim.positions[state.contractId],label=X.contract(ct);
    return head(exit?'Exit the position':'Your chosen contract',exit?'Selling closes an existing long. A pending exit does not remove your exposure.':'Enter your order details, then review the consequences before simulated submission.',true)+(!exit?coach('ticket'):coach('status'))+
      '<div class="ticket-layout"><section class="panel"><div class="ticket-label">Proposed ticket (not Nubra\'s actual order ticket)</div><div class="contract-heading"><h2>'+esc(label)+'</h2><span class="tag">SYNTHETIC</span></div><p class="small">Expiry '+date(ct.expiryMs)+' · '+esc(ct.settlement)+' settlement '+metric('cash')+' · SIM '+metric(ct.optionType==='CE'?'call':'put',ct.optionType==='CE'?'Call / CE':'Put / PE')+' '+metric('expiry','Expiry')+'</p>'+
      '<div class="quote-grid"><div><small>Bid / unit</small><strong class="money">'+money(qu&&qu.bidPaise)+'</strong></div><div><small>Ask / unit</small><strong class="money">'+money(qu&&qu.askPaise)+'</strong></div><div><small>Tick / unit</small><strong class="money">'+money(ct.tickPaise)+'</strong></div></div>'+
      '<div class="field-row"><label>Number of lots<input id="lots" type="number" min="1" max="100" step="1" value="'+esc(o.lots)+'"></label><label>Limit premium / unit (₹)<input id="limit-price" inputmode="decimal" value="'+(o.limitPaise==null?'':esc(o.limitPaise/100))+'"></label></div><p class="helper" id="ticket-quantity">'+(E.positive(ct.lotSize)?esc(o.lots)+' lot'+(o.lots===1?'':'s')+' × '+esc(ct.lotSize)+' units = '+esc(o.lots*ct.lotSize)+' units. ':'Quantity is unavailable until lot-size metadata is restored. ')+(exit?'Unreserved long units: '+Math.max(0,(position?position.units:0)-sim.closingReserved(ct.id))+'.':'Price shown is an editable synthetic ask, not a price instruction.')+'</p>'+
      (exit?'<div class="field-row"><label>Exit order type<select id="exit-type"><option value="LIMIT" '+(o.type==='LIMIT'?'selected':'')+'>Limit</option><option value="SL_LIMIT" '+(o.type==='SL_LIMIT'?'selected':'')+'>Stop-limit</option></select></label>'+(o.type==='SL_LIMIT'?'<label>Trigger premium / unit (₹)<input id="trigger-price" inputmode="decimal" value="'+(o.triggerPaise==null?'':esc(o.triggerPaise/100))+'"></label>':'')+'</div>':'')+
      '<div class="cost-chip">'+(exit?'SELL TO CLOSE':'BUY TO OPEN')+' · LIMIT'+(o.type==='SL_LIMIT'?' WITH TRIGGER':'')+' · DAY · Simulated carry</div>'+
      (!exit?budgetInput():'<p class="helper">If your stop triggers, its sell limit still needs a matching bid. It may remain unfilled.</p>')+
      '<div id="ticket-live">'+(a&&!exit?'<div class="form-section"><div class="money-line"><span>Premium at your limit</span><strong class="money">'+money(a.premiumPaise)+'</strong></div><div class="money-line"><span>Entry fee (one order)</span><strong class="money">'+money(a.entryFeePaise)+'</strong></div><div class="money-line total"><span>Entry funds at limit</span><strong class="money">'+money(a.entryFundsPaise)+'</strong></div><div class="money-line"><span>Available simulated funds</span><strong class="money">'+money(sim.availablePaise())+'</strong></div></div>':'')+
      errors(check)+'</div><div class="actions"><button data-action="chain" class="text-button">Back out</button><button data-action="review" id="review-order" class="primary">Review order</button></div>'+feeNote()+'</section>'+
      '<aside class="facts-stack"><section class="panel"><div class="note-icon" aria-hidden="true">↳</div><h2>Review, then decide</h2><p class="small">The next step explains this order. It does not judge whether the trade is right for you. You remain free to change the order or leave.</p><ul class="fact-list"><li>No real order is sent.</li><li>Limit prices control execution price, not whether an order fills.</li><li>Orders and positions are separate: a submitted order can remain unfilled.</li></ul></section><section class="panel"><h3>Question about choosing?</h3><p class="small">'+esc(X.answer('which strike should I buy?'))+'</p></section></aside></div>';
  }
  function review(){
    var ct=c(),o=sim.draft,check=sim.check(),a=check.analysis,changed=sim.reviewChanged(),exit=state.exit;
    var intro=head(exit?'Review your exit':'Review your first options order',exit?'Confirm the closing quantity and what happens if this exit does not fill.':'A review of the order you chose. These are consequences, not a forecast or recommendation.',true)+(!exit?coach('review'):'');
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
      payoffExplorer(ct,o,a)+'<section class="panel"><h3>Before expiry is different</h3><p class="small">'+esc(facts.before)+'</p></section></div>'+
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
    return head(close?'Exit result':'Order status',description,true)+coach('status')+'<div class="review-wrap"><section class="panel"><div class="status-heading"><span class="status-icon" aria-hidden="true">≡</span><div><h2>'+esc(o.id)+' · '+esc(X.contract(ct))+'</h2><span class="status-badge">'+o.status.replace('_',' ')+'</span> <span class="small">Synthetic · '+(close?'SELL TO CLOSE':'BUY TO OPEN')+'</span></div></div>'+
      '<div class="status-grid"><div><small>Ordered units</small><strong class="mono">'+o.units+'</strong></div><div><small>Filled units</small><strong class="mono">'+o.filledUnits+'</strong></div><div><small>Remaining pending units</small><strong class="mono">'+o.remainingUnits+'</strong></div><div><small>Actual average fill / unit</small><strong class="money">'+(o.averageFillPaise==null?'Not filled':money(o.averageFillPaise))+'</strong></div></div>'+
      '<div class="money-line"><span>Fee charged on this order</span><strong>'+money(o.chargedFeePaise)+'</strong></div><div class="money-line"><span>Long position units now</span><strong>'+remains+'</strong></div><div class="money-line"><span>Funds reserved across pending purchases</span><strong>'+money(sim.reservedPaise())+'</strong></div>'+
      (close&&o.filledUnits?'<div class="money-line total"><span>Net realised result from this exit</span><strong class="'+tone(o.realisedPaise||0)+'">'+signed(o.realisedPaise||0)+'</strong></div>':'')+
      (pending?'<div class="fill-next"><strong>Next: simulate an execution</strong><p>No real order is sent. This attempts a fill at the displayed synthetic quote; it may remain pending.</p><button class="primary" data-action="try-fill" data-id="'+o.id+'">'+(close?'Simulate closing fill':'Simulate a fill')+'</button><button class="text-button" data-action="keep-pending">Leave pending</button><p id="fill-feedback" role="status"></p></div>':'')+'<div class="actions">'+(pending?'<button data-action="cancel" data-id="'+o.id+'">Cancel unfilled remainder</button>':'')+'<button data-action="orders">All orders</button><button class="primary" data-action="portfolio">View positions</button></div><p class="helper">Evaluator controls provide additional partial-fill and rejection scenarios. Matching rules apply to every fill.</p><h3 class="form-section">Order events</h3><ol class="history">'+o.events.map(function(e){return '<li>'+esc(e)+'</li>';}).join('')+'</ol>'+feeNote()+'</section></div>';
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
    var guideButton=document.getElementById('guidance-toggle');guideButton.textContent=state.guidance===true?'Guidance on':state.guidance===false?'Guidance off':'Guidance';guideButton.setAttribute('aria-pressed',state.guidance===true?'true':'false');
    document.getElementById('fno-entry').classList.toggle('active',state.riskAcknowledged&&state.view!=='home');
  }
  function render(focus){
    nav();app.innerHTML=state.view==='home'?home():state.view==='chain'?chain():['ticket','exit-ticket'].includes(state.view)?ticket():state.view==='review'?review():state.view==='status'?status():state.view==='orders'?orders():state.view==='position'?position():portfolio();
    injectMetrics();controls();if(focus){document.getElementById('main').focus({preventScroll:true});window.scrollTo(0,0);}
  }
  function readDraft(){
    var o=F.clone(sim.draft);if(!o)return;
    var lots=document.getElementById('lots'),price=document.getElementById('limit-price'),trigger=document.getElementById('trigger-price'),type=document.getElementById('exit-type'),budget=document.getElementById('loss-budget');
    if(lots)o.lots=Number(lots.value);if(price)o.limitPaise=E.parsePaise(price.value);if(type)o.type=type.value;
    if(trigger)o.triggerPaise=E.parsePaise(trigger.value);
    if(budget){sim.user.lossBudgetRaw=budget.value;sim.user.lossBudgetPaise=budget.value.trim()===''?null:E.parsePaise(budget.value);sim.user.lossBudgetInvalid=budget.value.trim()!==''&&sim.user.lossBudgetPaise==null;}
    sim.setDraft(o);
  }
  function refreshTicket(){
    if(!['ticket','exit-ticket'].includes(state.view))return;
    var generated=document.createElement('div');generated.innerHTML=ticket();
    ['ticket-live','ticket-quantity'].forEach(function(id){var old=document.getElementById(id),fresh=generated.querySelector('#'+id);if(old&&fresh)old.innerHTML=fresh.innerHTML;});
    var notSure=document.getElementById('not-sure');if(notSure)notSure.checked=sim.user.lossBudgetPaise==null&&!sim.user.lossBudgetInvalid;
    var coachText=app.querySelector('.guide-coach p');if(coachText&&!state.exit)coachText.textContent=G.describeOrder(c(),sim.draft,sim.check().analysis);
    injectMetrics();
  }
  document.addEventListener('click',function(event){
    var b=event.target.closest('button');if(!b||b.disabled)return;
    var action=b.dataset.action;
    if(b.dataset.metric){showMetric(b.dataset.metric);return;}
    if(action==='enter-fno'){enterFno();return;}
    if(action==='close-dialog'){closeDialog();return;}
    if(action==='ack-risk'){state.riskAcknowledged=true;showInvite();return;}
    if(action==='choose-guided'||action==='choose-unguided'){state.guidance=action==='choose-guided'&&state.mode!=='baseline';closeDialog();state.view='chain';state.exit=false;render(true);return;}
    if(action==='switch-guided'){state.guidance=true;state.mode='review';location.hash='?mode=review';closeDialog();state.view='chain';state.exit=false;render(true);return;}
    if(action==='guidance'){showGuidance();return;}
    if(action==='guidance-off'){state.guidance=false;if(state.modal)closeDialog();render(true);return;}
    if(action==='glossary'){showGlossary();return;}
    if(action==='risk-context'){
      var a=sim.draft&&sim.check().analysis;
      showDialog('risk-context','Historical losses are not this trade’s odds','<p class="dialog-lead">The disclosure describes annual results for a historical group of traders. It is not a probability for your selected option and does not tell you whether this order will profit.</p><div class="selected-example"><strong>Limited amount ≠ low chance of loss</strong><p>'+(a?'The whole '+money(a.grossMaxLossPaise)+' premium in this order can be lost. Costs are additional.':'A purchased option can lose its entire premium. Costs are additional.')+'</p></div><p class="small">POP would need a specified model and assumptions; it is not calculated here. The reproduced disclosure is based on FY 2021–22, not presented as the latest data.</p>','<button class="primary" data-action="close-dialog">Back to my screen</button>');return;
    }
    if(action==='answer-term'){
      var query=document.getElementById('term-question').value,answer=document.getElementById('term-answer');
      if(/which|recommend|should i|pick|suggest|predict|forecast|best|suitable/i.test(query)){answer.textContent=X.answer('which strike');return;}
      var words=query.toLowerCase().replace(/[^a-z ]/g,' ').split(/\s+/).filter(function(w){return w.length>2&&!['what','does','mean','explain','the','how','about'].includes(w);});
      var match=Object.keys(G.terms).find(function(k){return words.some(function(w){return (k+' '+G.terms[k][0]).toLowerCase().includes(w);});});
      var term=match&&G.get(match,context());answer.textContent=term?term.title+': '+term.definition+' '+term.caution:X.answer(query);return;
    }
    if(action==='try-fill'){var attempted=sim.fill(b.dataset.id,'full');render();var feedback=document.getElementById('fill-feedback');if(feedback)feedback.textContent=attempted.ok?'Filled '+attempted.units+' units at '+money(attempted.pricePaise)+'.':attempted.message;notify(attempted.ok?'Synthetic execution recorded. See the filled quantity and actual position.':attempted.message);return;}
    if(action==='keep-pending'){notify('No fill event sent. The order remains pending; any position stays open.');return;}
    if(b.dataset.mode){location.hash='?mode='+b.dataset.mode;return;}
    if(b.dataset.nav){var name=b.dataset.nav;if(name==='Option Chain'){enterFno();}else if(name==='Orders'){state.view='orders';render(true);}else if(name==='Portfolio'){state.view='portfolio';render(true);}else showSidebar(name);return;}
    if(b.dataset.contract){openTicket(b.dataset.contract,false);return;}
    if(b.dataset.exit){openTicket(b.dataset.exit,true);return;}
    if(b.dataset.position){state.contractId=b.dataset.position;state.view='position';render(true);return;}
    if(b.dataset.status){state.orderId=b.dataset.status;state.view='status';render(true);return;}
    if(action==='chain'){state.view='chain';state.exit=false;render(true);}
    if(action==='orders'||action==='portfolio'){state.view=action;render(true);}
    if(action==='review'){readDraft();sim.review();state.view='review';state.submitKey=sim.reviewRecord.id;render(true);}
    if(action==='edit'){state.view=state.exit?'exit-ticket':'ticket';render(true);}
    if(action==='recalculate'){sim.review();state.submitKey=sim.reviewRecord.id;render();notify('Review recalculated using the current synthetic inputs.');}
    if(action==='submit'){var r=sim.submit(state.submitKey);if(r.ok){state.orderId=r.order.id;state.view='status';render(true);}else{notify(r.message);render();}}
    if(action==='cancel'){var cancel=sim.cancel(b.dataset.id);notify(cancel.ok?'Unfilled remainder cancelled. Existing fills remain.':cancel.message);render();}
  });
  app.addEventListener('change',function(event){
    if(event.target.id==='buyer-view'){state.chainView=event.target.value;render();var select=document.getElementById('buyer-view');if(select)select.focus();return;}
    if(event.target.id==='not-sure'){sim.user.lossBudgetPaise=event.target.checked?null:0;sim.user.lossBudgetInvalid=false;var field=document.getElementById('loss-budget');if(field)field.value=event.target.checked?'':'0';refreshTicket();return;}
    if(['lots','limit-price','loss-budget','exit-type','trigger-price'].includes(event.target.id)){
      readDraft();if(event.target.id==='exit-type'){render();var selector=document.getElementById('exit-type');if(selector)selector.focus();}else refreshTicket();
    }
  });
  document.addEventListener('input',function(event){
    if(['lots','limit-price','loss-budget','trigger-price'].includes(event.target.id)){readDraft();refreshTicket();}
    if(event.target.id==='metric-search')document.getElementById('glossary-results').innerHTML=glossaryRows(event.target.value);
    if(event.target.id==='expiry-slider')updatePayoff();
  });
  document.getElementById('experience-dialog').addEventListener('cancel',function(){state.modal=null;});
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
  document.getElementById('reset').addEventListener('click',function(){sim.reset();state.view='home';state.contractId=null;state.orderId=null;state.exit=false;state.submitKey=null;state.riskAcknowledged=false;state.guidance=null;state.chainView='buyer';if(state.modal)closeDialog();document.getElementById('scenario').value='normal';document.getElementById('fixture').value='';render(true);message('Simulation reset. Orders, positions, reservations and scenarios cleared.');});
  document.getElementById('open-sell').addEventListener('click',function(){if(!state.contractId)openTicket('A',false);var o=F.order(state.contractId,1);o.side='SELL';o.intent='OPEN';sim.setDraft(o);state.exit=false;sim.review();state.view='review';render(true);message('Opening Sell is outside this prototype; no order was sent.');});
  function mode(){var m=location.hash.match(/[?&]mode=(baseline|review)/);if(m)state.mode=m[1];if(state.mode==='baseline')state.guidance=false;render();}
  window.addEventListener('hashchange',mode);mode();
  // Expose a read-only diagnostic entry point for sandbox UI checks; no network or account data.
  root.FTUI={snapshot:function(){return F.clone({view:state.view,mode:state.mode,guidance:state.guidance,riskAcknowledged:state.riskAcknowledged,cashPaise:sim.cashPaise,reservedPaise:sim.reservedPaise(),orders:sim.orders,positions:sim.positions});}};
}(typeof globalThis!=='undefined'?globalThis:this));
