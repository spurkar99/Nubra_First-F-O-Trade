# Manual verification — expected results, not participant findings

All money below uses the active synthetic profile. Perform on the deployed P0 copy; current remote P0 deployment is **NOT RUN**.

| Click / action | Expected result |
|---|---|
| Open root without parameters | v2.1P0, synthetic banner, Option Chain, no evaluator drawer; no chosen contract |
| Click22,600 call | Historical risk disclosure, then optional context; choosing Continue without guidance opens that same call's proposed ticket |
| Close/leave disclosure | No acknowledgement/order/fees; chain remains available |
| One lot, limit100.20, Review order | 65units; premium₹6,513 + entry₹25 =₹6,538; most lost under single-path assumption₹6,563; approximate breakeven22,700.97 **at expiry**; exit can remain pending |
| Inspect review before opening details | Four immediate answers; scenarios, before-expiry, liquidity and expiry/cost notes collapsed |
| Inspect action row | Back out, Edit and Place have the same style/width; no approval badge |
| Expand each detail section | Real explanations; three equally prominent loss/near-break-even/profit cases; slider changes conditional P&L only |
| Edit lots to2 and click Review | 130units; premium₹13,026, entry₹13,051; no input focus replacement or missed click |
| Back out from review | No order, position or reserved funds |
| Place simulated order | Pending, not a position; no auto fill |
| Simulate a fill → Portfolio | Filled units held, actual price recorded |
| Exit position → review → place → simulate closing fill | Existing units close; no short. One lot A at100.20→100 produces net loss₹63; two lots produces₹76 |
| Open `index.html#?mode=baseline` | Plain constructed summary, explicitly labelled; same costs/checks; no four consequence cards |
| Open `index.html?eval=1` | Evaluator drawer visible but collapsed; expanding exposes existing controls |
| Load GOLD-C, one lot → Review | Entry₹5,025; loss₹5,050; breakeven20,101 at expiry |
| Load GOLD-P, one lot → Review | Same outlay/loss; breakeven19,899 at expiry; profit requires below it |
| Apply stale/wide/no bid/missing fees | Review blocked; missing fees never become zero. Normal restores synthetic data; review again |
| Apply changed after reviewing | Place disabled; explicit Recalculate review needed |
| Two-lot pending order → Partial50% → Cancel remainder | One lot remains held; only remainder funds released; entry fee charged once |
| Load restricted D or Test opening Sell | Unsupported; no submitted order |
| Exit quantity above held / fractional lots / negative price | Blocks; no silent rounding or short |
| Process GOLD-C expiry at20,200 | If one lot filled at100: net₹4,950; pending remainders expire; repeat settlement blocked |
| Run tests.html | Per-area counts; shared suite plus browser UI checks. Check current actual counts in EVALS.md |
| Reload / Reset | No persisted order/account state; first-entry disclosure repeats |

Recompute the fee and breakeven values in FEES.md in a separate spreadsheet. Then run the **human** protocol in COMPREHENSION_TEST.md. Neither this click list nor automated browser assertions are human comprehension evidence.

P1 features (new expiries, teach-back UI, session download, sidebar restyle and repo metadata/screenshots) and P2 work (formal keyboard/mobile/contrast pass, GitHub Action) are intentionally deferred.
