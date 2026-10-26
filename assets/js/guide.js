(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./engine.js'));
  else root.FTGuide=factory(root.FTEngine);
}(typeof globalThis!=='undefined'?globalThis:this,function(E){
  'use strict';
  // Explanations describe mechanics. None select a contract or predict its return.
  var terms={
    spot:['Index level','The current reference level of the underlying index. You are buying an option on this index, not the index itself.','A change in the index does not translate one-for-one into an option’s price.'],
    strike:['Strike','The contract’s reference level used to calculate its value at expiry.','Strike is not your total cost and is not the same as cost-adjusted breakeven.'],
    call:['Call / CE','For this cash-settled index call, expiry payoff per unit is the index settlement level minus strike, or zero if that difference is negative.','A rise that does not cover your premium and costs can still leave a loss.'],
    put:['Put / PE','For this cash-settled index put, expiry payoff per unit is strike minus the index settlement level, or zero if that difference is negative.','A fall that does not cover your premium and costs can still leave a loss.'],
    premium:['Premium','The option’s price per unit. Multiply it by total units to calculate the premium committed.','A low per-unit number is not the total order cost. The full premium can be lost.'],
    ltp:['LTP','Last traded price: the price of the most recent completed trade in the contract.','It is not necessarily a price available for your next purchase or exit.'],
    bid:['Bid','The highest currently displayed price offered by buyers for the option. A closing sale needs a matching buyer.','Displayed size is limited. A quote can change or disappear before execution.'],
    ask:['Ask / offer','The lowest currently displayed price at which sellers offer this option.','An offer is not a guaranteed fill. The price and available size can change.'],
    spread:['Bid–ask spread','The difference between the displayed ask and bid. Entering at ask and immediately selling at bid can create a loss before fees.','A larger spread makes displayed-price estimates less useful. This demo blocks a spread over 5% of midpoint as a prototype policy.'],
    oi:['Open interest','Outstanding contracts that have not yet been closed or settled. Here OI is displayed in contracts, not units.','OI is not today’s trading volume and does not establish whether you should buy or sell.'],
    volume:['Volume','The number of contracts traded during the illustrated session.','Volume is not outstanding open interest, a forecast, or a guarantee that your order will fill.'],
    oiChange:['OI change','The change in outstanding contracts compared with the stated earlier snapshot.','Positive OI change alone does not prove that prices will rise or fall.'],
    priceChange:['Price change','The difference between the illustrated LTP and previous close. The percentage uses previous close as its denominator.','Past price movement does not predict the next move. These values are synthetic.'],
    dayRange:['Session range','The lowest and highest illustrated traded premiums during this synthetic session.','The next price is not constrained by this past range.'],
    expiry:['Expiry','The date and time the option ends. This index-option demo uses cash settlement at a separately supplied settlement level.','Time matters: an option can lose value as time passes. Dates and the settlement event here are synthetic.'],
    lots:['Lots','How many contract-sized blocks you choose. This instrument has a defined number of units in each lot.','One lot is the minimum form value, not a suggested or necessarily affordable position.'],
    lotSize:['Lot size','The number of units in one lot. It comes from the instrument’s contract specification, not your preferred trade size.','The lot sizes here are fixture values, not verified current exchange specifications.'],
    units:['Total units','Number of lots multiplied by units per lot. Premium and expiry payoff are calculated on all these units.','Do not confuse units with lots or per-unit premium with total premium.'],
    tick:['Tick size','The smallest allowed price increment for this fixture. The ticket rejects prices that do not match it.','This prototype does not silently round an order to another price.'],
    limit:['Limit price','The maximum premium per unit you choose to pay on a purchase, or minimum you choose to accept on a closing sale.','It controls price, not execution. A limit order may stay pending.'],
    day:['DAY validity','An unfilled order or remainder expires at the end of its applicable trading day.','This simplified simulator processes outstanding remainders when you run its expiry event; it does not reproduce a broker’s full daily schedule.'],
    carry:['Simulated carry','The demo allows an opened position to remain until you close it or process the synthetic expiry.','It does not model intraday square-off schedules or authorise real overnight trading.'],
    cash:['Cash settlement','At expiry this index-option fixture pays its intrinsic value in cash. No underlying shares are delivered.','This does not describe stock-option settlement. Dates, levels and the event in this demo are synthetic.'],
    budget:['Your loss budget','An optional amount you enter to compare with this order’s full premium exposure and stated costs.','It is not a guaranteed limit on losses or a position-size recommendation. You can choose not sure.'],
    fees:['Charges','The invented profile charges ₹25 once per entry order and ₹25 per separate exit order or settlement event.','These are not Nubra’s charges. Real fees can depend on side, turnover, broker plan, date and exit versus exercise.'],
    entryFunds:['Entry funds','Premium at your chosen purchase limit plus entry charges. This is what the pending purchase reserves.','Later exit or settlement charges are separate. Entry funds are not the same as full-path loss exposure.'],
    maxLoss:['Gross premium at risk','For the supported purchased option, the entire purchase premium can be lost.','A capped amount is not a low probability of losing it. Costs add to the loss.'],
    netLoss:['Including costs','Premium at risk plus the stated costs for one entry and one closing order or settlement.','More separate closing orders add fees. An entered loss budget or stop does not guarantee a smaller loss.'],
    breakeven:['Breakeven at expiry','The underlying settlement level where expiry payoff just recovers premium and the stated entry/settlement costs.','It applies at expiry, not to the option’s trading price before expiry. Rounded levels may leave a few paise of difference.'],
    maxProfit:['Maximum profit','For a purchased put on a non-negative index, maximum profit is finite: units × (strike − premium), less applicable costs.','An unbounded theoretical call payoff is not a predicted or likely return.'],
    available:['Available funds','Synthetic cash not currently reserved for pending purchases.','Available funds do not establish that a trade is appropriate for a person.'],
    reserved:['Reserved funds','Money held for the unfilled part of a purchase order, including the entry fee if it has not yet been charged.','Cancelling a remainder releases that reservation; it does not reverse filled purchases.'],
    position:['Position','The units you actually hold after an opening order fills.','A submitted or pending order is not yet a position.'],
    pending:['Pending / unfilled','An accepted simulated order is waiting for matching execution.','It has not necessarily bought or sold anything. A pending exit leaves its position open.'],
    filled:['Filled units','The units that have actually executed, at the recorded fill price.','A partially filled order has both a filled portion and an unfilled remainder.'],
    averageFill:['Average fill price','Total executed premium divided by filled units. Multiple fills may produce an average with fractional paise.','The ledger uses exact premium totals, not a rounded displayed average.'],
    unrealised:['Indicative P&L','An estimate of the result if the open position could close at the displayed bid, including the stated allocated costs.','It is not realised money or a promise that all units can exit at that price.'],
    realised:['Realised P&L','The result from units actually closed or settled, after allocated purchase costs and the stated closing costs.','Displayed gains and losses come from the synthetic execution ledger, not market forecasts.'],
    stop:['Stop-limit','A trigger activates a limit order. The activated order still needs a matching price to fill.','If the market gaps beyond the limit, it can stay unfilled. It does not guarantee your chosen loss amount.'],
    trigger:['Trigger price','The condition that activates a stop-limit order. For this closing sell stop, activation occurs when LTP reaches or falls below the trigger.','The trigger is not a guaranteed execution price.'],
    pop:['Probability of profit / POP','A model-dependent estimate of profit under stated assumptions and a specific horizon.','Not calculated in this demo. Population loss statistics and option delta are not your probability of net profit.'],
    margin:['Margin','Funds or collateral required to support certain positions. It is not a universal maximum-loss limit.','This purchase-only demo labels the purchase premium and costs directly; it does not calculate short-option margin.'],
    iv:['Implied volatility / IV','A model-implied measure of expected variability embedded in an option premium.','Not calculated here. IV is neither the probability of profit nor a forecast of direction.'],
    delta:['Delta','A local estimate of how an option premium changes for a small change in the underlying, with other inputs held constant.','Not calculated here. Delta is not a calibrated probability of net profit.'],
    gamma:['Gamma','How delta changes as the underlying moves, under a pricing model.','Not calculated here; model sensitivities are not guarantees.'],
    theta:['Theta / time decay','A model sensitivity to time passing, holding other inputs constant.','Not calculated here. An option’s full price can also change because of the underlying and volatility.'],
    vega:['Vega','A model sensitivity of the premium to a change in implied volatility.','Not calculated here. Specify model and units before presenting a numerical value.'],
    pcr:['Put–call ratio / PCR','A ratio of put activity to call activity; its definition must state whether it uses volume or open interest.','Not calculated here. The ratio alone does not select a trade.'],
    maxPain:['Max pain','A level calculated from open-interest data under a particular aggregate-payoff definition.','Not calculated here. It does not predict where an index will settle.']
  };
  var sidebar={
    'Watchlist':['Keep instruments together','A personal list lets you return to contracts without searching again.','It does not rank contracts or tell you what to trade. In this demo, your chosen contract stays on its ticket.'],
    'Market Watch':['A market snapshot','View reference levels and quotes across instruments.','The market strip here contains frozen synthetic values. No live market connection is active.'],
    'Strategies':['Several legs in one view','Strategy tools combine positions and show their combined payoff.','This first-order prototype supports only a single purchased index option. No strategy or contract is recommended.'],
    'Scalper':['An advanced execution workspace','Typically puts charts and fast order controls together.','One-click execution is not part of this guided flow. You review an order before sending a simulated purchase.'],
    'Investment':['Longer-term holdings','A separate area can organise investments and products beyond options.','Your existing equity experience does not make an option equivalent to owning equity. This demo keeps investments outside its trading scope.'],
    'AI':['An explanation helper','Here you can look up a metric using fixed, offline explanations.','There is no runtime AI, price prediction or contract recommendation. Ask what a number means, not what to buy.'],
    'Cloud':['Automation and connected workflows','Cloud tools may run connected workflows or automation.','No cloud jobs or APIs run in this offline prototype. They are not required to understand this order.'],
    'Terminal':['An advanced trading workspace','Terminals usually combine quotes, charts, orders and specialised tools.','This concept keeps the first-order path in Option Chain, Orders and Portfolio. It does not open an external terminal.'],
    'Alerts':['Conditions to watch','An alert can notify you when a specified condition is met.','An alert is not an executed order and does not cap a loss. No live notifications are sent here.']
  };
  function get(key,ctx){
    var row=terms[key];if(!row)return null;
    var example='';ctx=ctx||{};var c=ctx.contract,o=ctx.order,a=ctx.analysis,q=ctx.quote;
    if(key==='lots'||key==='lotSize'||key==='units')if(c&&o&&E.positive(c.lotSize))example=o.lots+' lots × '+c.lotSize+' units = '+o.lots*c.lotSize+' units in your order.';
    if(key==='premium'&&a)example='Your premium commitment is '+E.money(a.premiumPaise)+' before entry costs.';
    if(key==='entryFunds'&&a)example='Your order: '+E.money(a.premiumPaise)+' premium + '+E.money(a.entryFeePaise)+' entry charge = '+E.money(a.entryFundsPaise)+'.';
    if(key==='breakeven'&&a)example=a.breakEvenPaise==null?'This selected order has no feasible breakeven under the stated costs.':'Your cost-adjusted expiry breakeven is approximately '+E.level(a.breakEvenPaise)+'.';
    if(key==='maxLoss'&&a)example='Your full premium at risk: '+E.money(a.grossMaxLossPaise)+'.';
    if(key==='netLoss'&&a&&a.maxLossIncludingCostsPaise!=null)example='For this single-entry/single-exit path: '+E.money(a.maxLossIncludingCostsPaise)+'.';
    if(key==='spot'&&q)example='Synthetic reference level: '+E.level(q.spotPaise)+'.';
    if((key==='bid'||key==='ask'||key==='ltp')&&q)example='Selected quote: '+E.money(q[{bid:'bidPaise',ask:'askPaise',ltp:'ltpPaise'}[key]])+' per unit.';
    if(key==='strike'&&c)example='Selected strike: '+E.level(c.strikePaise)+'.';
    if(key==='spread'&&q&&E.positive(q.bidPaise)&&E.positive(q.askPaise))example='Current synthetic spread: '+E.money(q.askPaise-q.bidPaise)+' per unit.';
    return {key:key,title:row[0],definition:row[1],caution:row[2],example:example};
  }
  function search(query){var s=String(query||'').trim().toLowerCase();return Object.keys(terms).filter(function(k){return !s||(k+' '+terms[k].join(' ')).toLowerCase().includes(s);});}
  function describeOrder(c,o,a){
    if(!c||!o||!a)return 'Complete the order details to explain its consequences.';
    return 'You are buying '+o.lots+' lot'+(o.lots===1?'':'s')+' ('+a.units+' units) of a '+(c.optionType==='CE'?'call':'put')+' option on '+c.underlying+', not the index itself. At your limit, the premium is '+E.money(a.premiumPaise)+'; entry costs add '+E.money(a.entryFeePaise)+'.';
  }
  var risk={title:'Risk disclosure for Futures and Options',period:'FY 2021–22',source:'SEBI study dated 25 January 2023; disclosure circular dated 19 May 2023.',
    bullets:['9 out of 10 individual traders in equity Futures and Options segment incurred net losses.','On average, loss makers registered net trading loss close to ₹50,000.','Over and above net trading losses, loss makers spent an additional 28% of those losses as transaction costs.','Those making net trading profits incurred between 15% and 50% of those profits as transaction costs.'],
    context:'These historical annual trader outcomes are not the probability of this particular order losing money, and are not presented as the latest market statistics.'};
  return {terms:terms,sidebar:sidebar,get:get,search:search,describeOrder:describeOrder,risk:risk};
}));
