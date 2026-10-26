# Evaluation report — v2.1 P0

## Actual run status — 26 October 2026

| Check | Actual result | What this establishes / limit |
|---|---|---|
| Untouched audited v2 Node suite | **121 PASSED /0FAILED** | Baseline before any edits |
| Final Node shared suite | **150 PASSED /0FAILED /0NOT RUN** |121 retained +29 new; deterministic financial/state/copy/policy checks |
| Classic-script UMD, Node VM | **150 PASSED /0FAILED** | Config/module load order without imports/CommonJS in browser path |
| Chrome tests.html, static HTTP root | **161 PASSED /0FAILED /0NOT RUN** |150 shared +11 browser-native DOM integration cases |
| Chrome tests.html, /repo-check/ prefix | **161 PASSED /0FAILED /0NOT RUN** | Same suites from a GitHub project-style prefix |
| Retained DOM event harness | **29 PASSED /0FAILED** | v2 journeys retained through P0; temporary development-only DOM runtime, no dependency shipped |
| Static/source audit | **17 PASSED /0FAILED** | Local relative assets, syntax, no runtime data requests/imports, empty .nojekyll, copy and document checks |
| Direct file:// browser transport | **NOT RUN** | Cloud browser permits HTTP/HTTPS only. No protocol-policy workaround; shared scripts were loaded from local disk in Node/VM. Browser UI iframe suite explicitly reports NOT RUN on file origins. |
| Candidate's independent spreadsheet | **NOT RUN** | Expected values provided in FEES.md, no candidate verification fabricated |
| Human comprehension /90-day outcomes | **NOT RUN** | Protocol, CSV and criteria exist; no participant results |
| P0 on remote GitHub Pages | **NOT RUN** | Existing published v2 inspected; this delivery does not commit or deploy |
| Full P2 accessibility/CI work | **NOT RUN / deferred** | No certification or workflow run claimed |

Node version: `v24.22.1`. A “PASSED” above means the check actually ran. Browser DOM tests click controls in an isolated iframe; they do not represent human understanding. Automated test counts do not indicate market validity.

## Per-area shared results

| Area | Passed | Failed |
|---|---:|---:|
| Fees | 6 | 0 |
| Golden | 19 | 0 |
| Regression | 12 | 0 |
| Math | 5 | 0 |
| Scope | 3 | 0 |
| Validation | 8 | 0 |
| Risk | 9 | 0 |
| Review | 10 | 0 |
| Orders | 13 | 0 |
| Exit | 12 | 0 |
| Expiry | 5 | 0 |
| Scenarios | 3 | 0 |
| Copy | 4 | 0 |
| Ledger | 1 | 0 |
| Guidance | 8 | 0 |
| Fixtures | 3 | 0 |
| Fee adapter | 14 | 0 |
| Fee ledger | 5 | 0 |
| Properties | 5 | 0 |
| UI policy | 1 | 0 |
| Copy lint | 4 | 0 |

## What the added checks prove

- **Fee adapter (14):** named old flat regression, structured categories per side, incomplete real config rejected, exact context/rounding/cap/GST rules, independent variable-fee entry/exit/settlement golden numbers, call/put roots and unavailable bounds.
- **Fee ledger (5):** cumulative fee deltas for partial fills; cancelled remainder; actual closing price; settlement snapshot; row changes invalidating a review even without version changes.
- **Properties (5):** root round-trip across call/put fixtures, profiles and lot counts; zero-payoff loss equals premium+applicable path fees; premium scales with lots and fixed fees remain an intercept; variable fees scale under stipulated uncapped rules; finite put maximum.
- **UI policy (1):** exact query opt-in; default, similar names/values and hash-looking inputs do not expose controls.
- **Copy lint (4):** every metric definition/caution/example and sidebar template, disclosure and boundary responses; full consequence packets across supported fixtures, two fee models and ten lifecycle states; all existing scenario names plus opening-sale/restricted-stock/metadata/expiry failures. Missing elements or banned phrases fail. Required outlay/max-loss/“breakeven at expiry”/exit elements apply to a **complete review packet**, not an individual glossary definition. Blocked packets state unavailable amounts explicitly. This is a syntactic check, not a guarantee against every form of advisory wording.

Banned phrases: great choice; safe; guaranteed; recommended; you should; don't miss; trending; hot (case-insensitive whole phrases/words). Negative “guaranteed” sentences were rewritten too. Financial amounts remain rupees first; margins are not max-loss limits. Glossary/probability explanations do not invent a personal chance of profit.

## Executable boundary/state coverage retained

| Case family | Expected behaviour |
|---|---|
| Opening sale / stock / futures | Rejected; no opening short or unsupported payoff claim |
| Excess/concurrent close | Reserve held units; reject oversell; never become short |
| Fractional/negative lots / non-positive or invalid-tick price | Reject, no silent rounding |
| Missing contract/quote/fees | Block and show unavailable; costs never replaced with zero |
| Stale>30s / future / wide>5% midpoint / no bid / crossed | Block under explicit prototype policies |
| Changed draft/quote/fees/budget/metadata/rules | Review invalidated until recalculation |
| Pending / nonmarketable / idempotency | No position until actual fill; one order/reservation; no repeated debit |
| Partial entry then cancel/reject | Filled units/costs persist; only remainder released |
| Close / partial close / stop gap | Actual price and allocated basis; pending exit retains exposure; stop activation may not fill |
| Expiry / reset | Actual intrinsic settlement; pending DAY remainders expire; repeat settlement blocked; reset clears state |
| Optional guidance and baseline | No compulsory course; preserved selected contract; constructed baseline clearly labelled |

## Browser-native UI cases — all11 PASSED

- Default opens the chain and hides the evaluator drawer.
- Exact eval flag reveals a collapsed drawer.
- Direct chosen contract survives disclosure and optional context choices.
- Review has four essential answers, closed detail sections and equal actions.
- Expanding scenarios does not submit, reserve or change the order.
- Baseline remains a constructed plain summary without consequence cards.
- Edit and back out create no fees, position or reservation.
- Fee failure removes totals and blocks simulated submission.
- Changed-after-review blocks place until recalculation.
- Numeric input preserves its node and updates actual reviewed quantity.
- Normal entry and close still reconcile actual fill fees.

## Rendered inspection actually performed

Default chain has no evaluator drawer. Direct22,600-call selection opens the dated disclosure and optional invitation, then retains that ticket after declining context. The rendered review shows four consequence cards, approximate expiry root and explicit estimate labels. Back-out, Edit and Place use the same style/width; detail rows are closed. This subset does not constitute the deferred full keyboard/mobile/contrast pass.

## Financial expected values to verify independently

Use [FEES.md](FEES.md) for full values and formulas. Especially recompute: premium versus entry funds versus complete-path loss; one/two lots; both22,600 regression roots and rounding residuals; finite put gain; variable entry₹80.80; price-dependent call20,102.65 and put19,897.35 thresholds with +₹0.37 residual; early-close₹716.60; partial-fill fee delta₹69.00. Candidate spreadsheet verification remains NOT RUN.

## Software findings and corrections

A new query-policy test initially failed because a hash-looking input was accepted. The function now requires a query starting with `?`. Additional browser checks cover preserving the selected contract through guidance choices and keeping the current ticket when guidance is re-enabled. These are implementation findings; no participant behaviour is inferred.

## Full shared test list — what each executable check proves

Each name states the invariant/expected behaviour asserted by that case. Property/ledger cases contain multiple checks, including3,600 seeded steps in the retained ledger test; those steps are not counted as separate participants or test cases.

| Area | Executable assertion / purpose | Actual result |
|---|---|---|
| Fees | Named synthetic profile and 25/25/25 order charges | PASSED |
| Fees | Entry + exit path is ₹50 | PASSED |
| Fees | Entry + settlement path is ₹50 | PASSED |
| Golden | Arithmetic call premium is ₹5,000 | PASSED |
| Golden | Entry funds are ₹5,025, not ₹5,050 | PASSED |
| Golden | Gross loss ₹5,000; stated bounded loss ₹5,050 | PASSED |
| Golden | Arithmetic call gross breakeven 20,100 | PASSED |
| Golden | Arithmetic call net expiry breakeven 20,101 | PASSED |
| Golden | Arithmetic put net expiry breakeven 19,899 | PASSED |
| Golden | Call at 20,100 loses ₹50 | PASSED |
| Golden | Call at 20,200 earns ₹4,950 | PASSED |
| Golden | Call at strike loses ₹5,050 | PASSED |
| Golden | Call below strike loses ₹5,050 | PASSED |
| Golden | Call at net breakeven earns exactly zero | PASSED |
| Golden | Put at 19,900 loses ₹50 | PASSED |
| Golden | Put at 19,800 earns ₹4,950 | PASSED |
| Golden | Put at/above strike loses ₹5,050 | PASSED |
| Golden | Put at net breakeven earns zero | PASSED |
| Golden | Arithmetic long-put maximum gain finite | PASSED |
| Golden | Call maximum profit is unbounded, represented by null not a fake number | PASSED |
| Golden | Two lots: fixed fee does not double | PASSED |
| Golden | Two-lot put breakeven and zero-payoff loss | PASSED |
| Regression | 22,600 CE × 65 premium = ₹9,779.25 | PASSED |
| Regression | 22,600 PE × 65 premium = ₹5,131.75 | PASSED |
| Regression | CE premium-only breakeven 22,750.45 | PASSED |
| Regression | PE premium-only breakeven 22,521.05 | PASSED |
| Regression | CE ₹50 cost-adjusted root and rounded threshold | PASSED |
| Regression | PE ₹50 cost-adjusted root and rounded threshold | PASSED |
| Regression | CE at 22,400 / 22,600 loses ₹9,829.25 including costs | PASSED |
| Regression | CE at 22,800 earns ₹3,170.75 including costs | PASSED |
| Regression | PE at 22,400 earns ₹7,818.25 including costs | PASSED |
| Regression | PE at 22,600 / 22,800 loses ₹5,181.75 including costs | PASSED |
| Regression | PE maximum gross profit is ₹14,63,868.25, finite | PASSED |
| Regression | Regression entry totals separate from full loss | PASSED |
| Fees | Missing fees throw; never treated as zero | PASSED |
| Fees | Partially missing fee record rejected | PASSED |
| Fees | Unbounded profile does not claim an all-in maximum | PASSED |
| Math | Put with negative implied breakeven reports no feasible root | PASSED |
| Math | Put breaking even only at zero cannot produce a profit | PASSED |
| Math | Price parsing exact paise; no silent fractional-paise rounding | PASSED |
| Math | Before-expiry realised P&L uses option exit price | PASSED |
| Math | Money format includes Indian grouping and two decimal places | PASSED |
| Scope | Naked opening sale rejected before submission | PASSED |
| Scope | Stock option blocked before funding or payoff assumptions | PASSED |
| Scope | Futures are unsupported | PASSED |
| Validation | Fractional lots invalid | PASSED |
| Validation | Zero / negative lots invalid | PASSED |
| Validation | Invalid tick is rejected, not rounded | PASSED |
| Validation | Negative / absent price invalid | PASSED |
| Validation | Missing contract metadata blocks review | PASSED |
| Validation | Expired contract blocks review | PASSED |
| Validation | Unknown quote / mismatched contract blocks review | PASSED |
| Validation | Missing fees block review and submit | PASSED |
| Risk | Budget below one-lot total exposure blocks order | PASSED |
| Risk | Equal explicit budget accepted; not sure is supported | PASSED |
| Risk | Invalid budget entry cannot silently become not sure | PASSED |
| Risk | Insufficient funds blocks even when premium alone fits | PASSED |
| Risk | Stale >30s blocks; exactly 30s accepted | PASSED |
| Risk | Future-dated quote is not accepted as fresh | PASSED |
| Risk | Spread >5% of midpoint blocks | PASSED |
| Risk | No bid blocks; no executable exit assumed | PASSED |
| Risk | Crossed quote rejected | PASSED |
| Review | Changed quantity invalidates acknowledged review | PASSED |
| Review | Changed price invalidates acknowledged review | PASSED |
| Review | Changed quote invalidates acknowledged review | PASSED |
| Review | Changed fees invalidates acknowledged review | PASSED |
| Review | Changed budget invalidates acknowledged review | PASSED |
| Review | Changed contract invalidates acknowledged review | PASSED |
| Review | Changed rules invalidates acknowledged review | PASSED |
| Review | Recalculation enables changed order | PASSED |
| Review | Submission without a review fails | PASSED |
| Review | User can back out without an order, fee, or reservation | PASSED |
| Orders | Idempotent submission creates one order and one reservation | PASSED |
| Orders | Pending submission has no position or debited cash | PASSED |
| Orders | Limit below ask stays pending | PASSED |
| Orders | Fill uses actual ask, not limit or LTP | PASSED |
| Orders | Repeat fill does not debit again | PASSED |
| Orders | Partial two-lot fill charges entry once and reserves remainder | PASSED |
| Orders | Single-lot 50% fill never creates fractional-lot position | PASSED |
| Orders | Cancellation after partial fill retains position and charged fee | PASSED |
| Orders | Cancelling wholly unfilled order releases all funds without fees | PASSED |
| Orders | Rejected remainder releases reservation but preserves partial fill | PASSED |
| Orders | Multiple purchase reservations prevent overspending | PASSED |
| Orders | Fill is blocked if quote becomes stale after submission | PASSED |
| Orders | Quoted depth limits fills to whole lots | PASSED |
| Exit | Sell-to-close accepted and fully closes long without opening short | PASSED |
| Exit | Sell-to-close without a position rejected | PASSED |
| Exit | Exit above long quantity cannot create a short | PASSED |
| Exit | Concurrent exits reserve units; duplicate close rejected | PASSED |
| Exit | Cancelled exit releases closing units but keeps position | PASSED |
| Exit | Exit limit above bid remains pending with position open | PASSED |
| Exit | Stop-limit triggers without filling after a gap | PASSED |
| Exit | Stop does not trigger prematurely | PASSED |
| Exit | Stop-gap evaluator scenario reproduces an activated unfilled exit | PASSED |
| Exit | Sell-stop trigger below limit rejected | PASSED |
| Exit | Partial closing fills allocate basis and fee without duplication | PASSED |
| Exit | No-bid quote does not invent a sale price | PASSED |
| Expiry | Expiry cancels pending DAY remainder and releases reservation | PASSED |
| Expiry | Call settlement reconciles with golden profit and account cash | PASSED |
| Expiry | Worthless settlement still charges invented settlement fee | PASSED |
| Expiry | Put settlement reconciles with golden profit | PASSED |
| Expiry | Negative settlement / repeat settlement rejected | PASSED |
| Scenarios | Scenario picker applies stale/wide/no-bid/missing fees | PASSED |
| Scenarios | Changed-data scenario invalidates an existing review | PASSED |
| Scenarios | Reset clears orders, positions, reservations, fee errors and clock | PASSED |
| Copy | Which strike response does not pick a contract | PASSED |
| Copy | Templates contain no reassurance, urgency or celebration | PASSED |
| Copy | Before-expiry explanation permits loss despite favourable direction | PASSED |
| Copy | No feasible breakeven is stated rather than fabricated | PASSED |
| Ledger | 3,600 seeded purchase/fill/cancel/exit steps reconcile cash, basis and fees | PASSED |
| Guidance | All displayed critical metrics have complete definitions and cautions | PASSED |
| Guidance | Nine sidebar overviews have actual content rather than a dead-end stub | PASSED |
| Guidance | Order explanation reflects actual lots, units and costs | PASSED |
| Guidance | Metric explanation uses selected-order premium and expiry breakeven | PASSED |
| Guidance | Missing selected-order context never fabricates a personalised number | PASSED |
| Guidance | Historical disclosure is dated and explicitly not personal order odds | PASSED |
| Guidance | Advanced probabilities and Greeks are not invented numerical values | PASSED |
| Guidance | Search finds premium and uses an empty result for unknown terms | PASSED |
| Fixtures | All six normal chain contracts support valid purchase reviews | PASSED |
| Fixtures | Synthetic paired ask differences are consistent with the stipulated spot/strike | PASSED |
| Fixtures | Chain activity is explicitly reported in contracts | PASSED |
| Fee adapter | Old flat profile remains a named, unchanged regression | PASSED |
| Fee adapter | Active profile uses structured rows for every category and side | PASSED |
| Fee adapter | Nubra placeholder config is incomplete and cannot be used as zero fees | PASSED |
| Fee adapter | Missing category, missing rate and duplicate IDs fail closed | PASSED |
| Fee adapter | Fee context must supply both integer-paise bases | PASSED |
| Fee adapter | Independent turnover golden entry ₹80.80 and funds ₹5,080.80 | PASSED |
| Fee adapter | Early-sale path is ₹283.40, net ₹716.60 at exit premium ₹120 | PASSED |
| Fee adapter | Settlement charge recomputes from actual intrinsic proceeds | PASSED |
| Fee adapter | Price-dependent call root solves net equation, not fixed-cost addition | PASSED |
| Fee adapter | Price-dependent put root solves the reversed net equation | PASSED |
| Fee adapter | Variable model never claims an unproven all-in maximum loss | PASSED |
| Fee adapter | Discontinuous ITM model blocks submission instead of inventing a root | PASSED |
| Fee adapter | Caps, minima, component GST and explicit line rounding apply | PASSED |
| Fee adapter | GST cannot depend recursively on GST | PASSED |
| Fee ledger | Variable entry partials charge a cumulative fee delta, not two fixed fees | PASSED |
| Fee ledger | Partial cancellation retains only fees earned on filled turnover | PASSED |
| Fee ledger | Closing variable fees reconcile against actual bid and allocated entry cost | PASSED |
| Fee ledger | Settlement uses position tariff snapshot and actual payoff | PASSED |
| Fee ledger | Changed fee rows invalidate review even without a version bump | PASSED |
| Properties | Every normal and regression contract: call/put breakeven round-trip | PASSED |
| Properties | Call zero-payoff loss equals premium plus actual entry/settlement fees | PASSED |
| Properties | Lots scale premium exactly; fixed fees remain an intercept | PASSED |
| Properties | Turnover fees scale affinely with lots under this uncapped fixture | PASSED |
| Properties | Put maximum profit remains finite under variable settlement fees | PASSED |
| UI policy | Evaluator controls are opt-in by exact query flag | PASSED |
| Copy lint | All metric definitions, cautions, examples and sidebar templates avoid banned phrases | PASSED |
| Copy lint | Every fixture, fee model and lifecycle state retains the four required elements | PASSED |
| Copy lint | Every abnormal scenario produces neutral blocked or complete consequence copy | PASSED |
| Copy lint | No-feasible and unavailable-root branches do not claim a profit condition | PASSED |

## Run again

Open tests.html from HTTP/Pages to run150 shared +11 UI integration cases. From disk, the150 shared cases run and iframe UI integration is labelled NOT RUN. Node: `node tests/golden.test.js`. All require no installation. Run COMPREHENSION_TEST.md separately with people. Fill actual outcomes in results_template.csv and keep failed/partial answers.
