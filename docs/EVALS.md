# Evaluation report

## Run status — actual sandbox execution

No human results, rendered-browser results or GitHub-hosting results have been invented.

| Check | Status | Evidence / scope |
|---|---|---|
| Node shared suite (v24.22.1) | **PASSED — 110 / 110** | Executed `node tests/golden.test.js`; zero failed, zero skipped. |
| Classic-script UMD shared suite | **PASSED — 110 / 110** | Same scripts loaded without CommonJS into a Node VM global context; same cases pass. This is not a rendered browser. |
| DOM event/flow harness | **PASSED — 19 / 19** | Actual UI script and templates executed with a temporary LinkeDOM harness, including click/change events and simple browser-property shims. Not a layout or full browser test. No harness dependency is included in the deliverable. |
| Seeded accounting invariant sequence | **PASSED — 3,600 steps** | Included as one shared-suite case: 40 seeded runs of 90 actions. Cash + remaining basis + unallocated entry fees equals starting cash + realised P&L; no negative position units or invalid reservations. |
| Static file/path/syntax checks | **PASSED — 11 checks** | Relative asset references resolve; JS syntax checks; no runtime fetch/XHR/WebSocket/remote imports; empty `.nojekyll`; required files. |
| Rendered browser / mobile / keyboard layout | **NOT RUN** | Browser startup was attempted. The bundled executable was unavailable; official Chrome was obtained but the sandbox denied its required local socket (`Operation not permitted`). A remote browser could not reach the scratch server. No screenshots or visual/accessibility conformance are claimed. |
| `tests.html` in a real browser | **NOT RUN** | Browser page is included and invokes the same shared suite automatically. Open it to obtain its actual result. Classic-script VM execution above does not substitute for this. |
| Human baseline/review comprehension | **NOT RUN** | Blank protocol/scoring sheet supplied in COMPREHENSION_TEST.md. |
| Actual GitHub Pages deployment | **NOT RUN** | User must upload/enable Pages and verify its final URL. Static relative paths checked; no hosting account was changed. |

### Release interpretation

Engine and DOM-flow checks pass. This is an offline concept deliverable, not a production broking integration. Rendered visual/keyboard/mobile checks and participant comprehension remain unverified. Software pass counts do not validate the research hypothesis or show suitability.

## Golden financial cases

All money in the engine is integer paise. Prices/strikes in the tables below are rupees/index-point values for readability. Every fixture is synthetic. All totals use the same invented fee profile: ₹25 entry + ₹25 exit OR settlement per order/event; fixed complete path ₹50. The quote-derived regression prices are inferred values, not confirmed real quotes.

| Arithmetic fixture: K=20,000; P=100; Q=50 | Expected |
|---|---|
| Premium | ₹5,000 |
| Entry fee / entry funds | ₹25 / ₹5,025 |
| Gross premium loss / stated single-path loss | ₹5,000 / ₹5,050 |
| Call gross / net expiry BE | 20,100 / 20,101 |
| Put net expiry BE | 19,899 |
| Call at 20,100 / 20,200 / ≤20,000 | −₹50 / +₹4,950 / −₹5,050 |
| Put at 19,900 / 19,800 / ≥20,000 | −₹50 / +₹4,950 / −₹5,050 |
| Call at 20,101 / put at 19,899 | ₹0 net |
| Two lots: Q=100, fixed ₹50 path cost | Premium ₹10,000; entry ₹10,025; stated loss ₹10,050; call BE 20,100.50; put BE 19,899.50 |
| Long put maximum gross / net profit at S=0 | ₹9,95,000 / ₹9,94,950; finite |

| Separate 22,600 regression fixture; Q=65 | CE at ₹150.45 | PE at ₹78.95 |
|---|---|---|
| Premium | ₹9,779.25 | ₹5,131.75 |
| Entry funds | ₹9,804.25 | ₹5,156.75 |
| Premium-only BE | 22,750.45 | 22,521.05 |
| Fixed ₹50 cost-adjusted BE | 22,751.219230… | 22,520.280769… |
| Tradable integer-paise threshold used in examples | 22,751.22 | 22,520.28 |
| Net P&L at rounded threshold | +₹0.05 | +₹0.05 |
| Net at 22,400 | −₹9,829.25 | +₹7,818.25 |
| Net at 22,600 | −₹9,829.25 | −₹5,181.75 |
| Net at 22,800 | +₹3,170.75 | −₹5,181.75 |
| Long put maximum gross / net profit | — | ₹14,63,868.25 / ₹14,63,818.25; finite |

Negative implied put breakeven returns no feasible root. A put able to break even only at S=0 is not described as able to profit. The engine keeps entry funding separate from complete-path costs. Partial-fill fees are charged once per order, not per fill or lot.

## Edge-case matrix and expected behaviour

All rows below have executable checks in the shared suite; the full per-case results follow.

| Edge / state | Expected behaviour |
|---|---|
| Naked opening sale | Unsupported; no order, no falsely capped risk or opening short. |
| Sell-to-close versus sell-to-open | Only existing same-contract long units can close. |
| Exit above long / concurrent exits | Reject excess; reserve units for existing pending closes. |
| Budget below one lot | Block; no automatic cheaper contract/size substitution. Invalid budget is not silently treated as not sure. |
| Stock option / future | Outside scope before index-payoff assumptions are applied. |
| Missing metadata, fees or quote | Block; never replace missing costs with zero. |
| Fractional/negative lots, invalid price/tick | Reject without silent rounding. |
| Expired contract / future-dated quote | Block. Actual calendars remain unverified fixtures. |
| Stale >30s / spread >5% / crossed quote / no bid | Block; no invented executable exit value. |
| Changed order/quote/fees/budget/metadata/rules | Acknowledged review invalidated until explicit recalculation. |
| Submit twice / fill completed order again | One order, no duplicate reservation/debit/fill. |
| Pending non-marketable limit | No position until fill; funds stay reserved. |
| Partial entry then cancel/reject remainder | Keep filled units and charged entry fee; release only remainder reservation. |
| Partial exits | Allocate premium basis and entry fee; each exit order fee charged once; final remainder reconciles exactly. |
| Stop-limit triggered below sell limit | Pending, position remains open; no guaranteed stop loss. |
| Favourable spot but falling option premium | Earlier-exit calculation can show a loss; spot direction is not used to invent P&L. |
| Which strike? | Deterministic boundary response: reviews user-chosen order, does not select or forecast. |
| Back out | No order, fee or reservation created just by reviewing. |
| Expiry | Unfilled DAY remainders expire; supported filled positions settle using explicit synthetic level and fees; repeated processing rejected. |
| Reset | Orders, positions, review, fees/scenarios, idempotency, clock and reservations cleared. |

## Tone / advice-leakage checklist

- PASSED (automated template checks): no reassurance, suitability label, urgency, celebration, guarantee of profit or prompt to trade again.
- PASSED (automated checks): expiry is explicit; costs are additional; favourable direction does not guarantee an option profit; which-strike response does not name a contract.
- PASSED (DOM flow checks): order/quantity preserved through review; constructed baseline/proposed ticket labels; back-out flow available; unsupported opening sale blocked.
- PRESENT IN SOURCE; rendered verification NOT RUN: visible focus styling, semantic labels, keyboard-native buttons/inputs/details, profit/loss words in addition to colour, responsive CSS.
- NOT RUN (human): whether the copy sounds reassuring, confusing, frightening or advisory to actual first-time users.

## Shared executable case results

| Area | Case | Actual status |
|---|---|
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

## Separate DOM-harness results

These are Node DOM tests, **not browser rendering tests**. The harness was a temporary build-time tool and is not required by this site.

| Flow | Actual status |
|---|---|
| Initial dashboard contains 12 sidebar controls and synthetic banner | PASSED |
| Ticket, input editing and review expose exact units and entry funds | PASSED |
| Baseline/review switch uses hash and preserves the selected order | PASSED |
| UI executes partial entry, cancel remainder, position details and close | PASSED |
| Changed-data control invalidates review and explicit recalculation restores it | PASSED |
| Scenario control surfaces stale | PASSED |
| Scenario control surfaces wide | PASSED |
| Scenario control surfaces no-bid | PASSED |
| Scenario control surfaces missing-fees | PASSED |
| Scenario control surfaces missing-data | PASSED |
| Scenario control surfaces expired | PASSED |
| Normal scenario restores metadata after missing-data case | PASSED |
| Stock fixture and opening-sale control cannot submit | PASSED |
| Low loss budget, invalid budget, and explicit not-sure states | PASSED |
| Stop-limit control and gap scenario activate but do not fill exit | PASSED |
| Expiry input settles arithmetic fixture and expires its unfilled remainder | PASSED |
| Reset clears all simulation state and returns to chain | PASSED |
| Stub navigation returns scope message without changing view | PASSED |
| Pending and rejected status screens remain distinct | PASSED |

## Static audit results

| Check | Status |
|---|---|
| tests.html relative references exist | PASSED |
| index.html relative references exist | PASSED |
| tests/golden.test.js syntax and no remote calls | PASSED |
| assets/js/engine.js syntax and no remote calls | PASSED |
| assets/js/ui.js syntax and no remote calls | PASSED |
| assets/js/simulator.js syntax and no remote calls | PASSED |
| assets/js/explain.js syntax and no remote calls | PASSED |
| assets/js/fees.js syntax and no remote calls | PASSED |
| assets/js/fixtures.js syntax and no remote calls | PASSED |
| Empty .nojekyll | PASSED |
| Required deliverable files exist (EVALS generated next) | PASSED |

## Re-run

Run `node tests/golden.test.js`, or open `tests.html` to execute all shared cases in your browser. Record any new failure honestly. Then use COMPREHENSION_TEST.md with participants. Keep actual build prompts, including failed attempts, unedited; no prompt log or one-pager has been written in this package.
