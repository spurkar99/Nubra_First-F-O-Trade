# P0 audit and review record

## Step0 — audit before implementation

Inspected all17 tracked files in the supplied GitHub repository; their Git blob hashes matched the local v2 source. Source commit: `480926722205d1315204c65148341357b10ebf7f`. Inspected the published page's first impression. Ran the untouched baseline suite: **121 PASSED /0FAILED**. No remote change was made.

### What existed

A plain static17-file prototype: index/tests pages; original dashboard CSS; seven classic-script modules (engine, fees, fixtures, simulator, explain, guide, UI); shared Node/browser tests; README; assumptions, evals, comprehension kit and change record. User-selected single-leg index purchases and closing longs were implemented. The simulator already covered reviews, reservations, partial fills, cancellation, rejection, expiry and reset. Those capabilities were retained, not extended.

### Gaps against the requested tasks

| Area | Audited gap |
|---|---|
| P0 first impression | Evaluator summary and engineering jargon visible on arrival; marketing landing before chain |
| P0 review | Simultaneous scenarios, slider, contextual notes and exposure panels competed with four essential consequences; Place visually stronger |
| P0 fees | Three flat numbers; direct flat fee access in engine/UI/ledger; fixed₹50 assumptions in explanations |
| P0 reviewer README | Deployment/evaluator/build material mixed with product framing |
| P0 documents | One-pager and prompts template absent; protocol lacked per-dimension before/after confidence, predefined acceptance and CSV |
| Eval work | Core boundaries/states existed; needed structured-fee arithmetic, properties, broader template lint and per-area result counts |
| P1 | One expiry; no session export or teach-back UI; advanced sidebar remained explanatory overviews; metadata/screenshots not updated |
| P2 | No formal complete accessibility pass or GitHub Action |

### Risks and resolutions

- Treating the thesis as proven would overclaim two adjacent interviews. README/one-pager explicitly call it a hypothesis.
- Nubra's actual ticket was not seen; the baseline cannot be represented as a real competitor control.
- Fee paths and rounded variable charges can invalidate fixed-cost breakeven and simple partial-fill accounting. Adapter/engine/ledger changed together, retaining original golden values.
- “Totals scale linearly with lots” is false for fixed per-order charges. Tests assert linear premium and correct affine total/variable-fee behaviour.
- Arbitrary variable/conditional fee schedules do not justify a global maximum-loss claim. Only proven fixed single-path bounds are shown; unsupported opening breakeven models block submission.
- A literal banned-word lint would reject even negative sentences containing “guaranteed”. Explanations now say that execution can remain unfilled, without exceptions to the requested ban.
- A mode comparison can be contaminated by earlier guidance/learning. The kit chooses review-only testing, equal preceding help, counterbalancing and explicit carryover limitations.
- A richer shell, new expiries or teaching UI could consume the take-home without proving framing. P1/P2 are deferred.

### Ordered plan issued before edits

1. `fee-config.js`, `fees.js`, `engine.js`, `simulator.js`, `fixtures.js`: structured configuration/adapter, net-equation solver, actual-turnover ledger, named flat regression.
2. `index.html`, `ui.js`, `explain.js`, `guide.js`, `styles.css`: user-flow arrival, exact evaluator flag, four consequences and collapsed detail, equal actions, cost labels.
3. `README.md`, docs and tests: reviewer argument, separated deployment, one-pager/template, prewritten comprehension protocol, per-area executable results.

## P0 implementation batches — files and why

| Batch | Files touched | Reason |
|---|---|---|
| A: financial adapter | `assets/js/fee-config.js` (new), `fees.js`, `engine.js`, `simulator.js`, `fixtures.js` | Explicit per-event/categories, missing-config guard, price-dependent net equation, cumulative fill charges, unchanged old flat fixture |
| B: consequence review | `index.html`, `assets/js/ui.js`, `explain.js`, `guide.js`, `assets/css/styles.css` | Chain on arrival, preserved selected contract through optional context, hidden evaluator by default, four top answers, closed details, equal action styles, estimate labels |
| C: executable evidence | `tests/golden.test.js`, `tests/browser-ui.test.js` (new), `tests.html` | Retain121 cases, add29 shared cases,11 browser-native UI cases, pass/fail/not-run counts by area |
| D: reviewer documents | `README.md`, `docs/ONE_PAGER.md`, `DEPLOY.md`, `FEES.md`, `COMPREHENSION_TEST.md`, `results_template.csv`, `PROMPTS.md`, `ASSUMPTIONS.md`, `EVALS.md`, `MANUAL_CHECKS.md`, `CHANGES.md`, this record | Submission argument, truthful evidence boundaries, prompt slots, reproducible manual/human checks, current run results |
| E: full-content handoff | `docs/FULL_UPDATED_FILES.md` | Complete updated contents of every changed/new file, not a diff; the working source files also appear at their normal paths |

`.nojekyll` remains empty and unchanged. No dependency, external asset, live service or runtime model was introduced. No new simulator operation was added. Original Node golden cases remain intact.

## Tests and manual review

[EVALS.md](EVALS.md) lists every executable check and its purpose/status. [FEES.md](FEES.md) lists independent spreadsheet values. [MANUAL_CHECKS.md](MANUAL_CHECKS.md) gives exact clicks and expected results. [COMPREHENSION_TEST.md](COMPREHENSION_TEST.md) is for real participants and remains NOT RUN.

An initial new evaluator-query test caught acceptance of a hash-looking input; the function was tightened to accept only a query beginning with `?`. The final suite is green. Browser inspection also prompted preserving the chosen ticket when optional guidance is enabled again. These are software findings, not interview observations.

## Assumptions, incomplete work and every fill category

- Real Nubra tariff/current rules remain unverified. Complete all source/date/plan/side/category/base/rate/cap/rounding/verification fields in `fee-config.js` and FEES.md. Unsupported bases/events need code, not a guessed mapping.
- Original prompts: fill tool/model, actual timestamps, exact prompts, truthful outcomes/failures and artifact references in PROMPTS.md; no prompt was invented.
- Human sessions: fill consent/experience deviations, actual order, first answers, before/after confidence, rubric, time, help and decisions in the CSV/protocol. Fill the observed-failure/change/re-test table only after actual observations.
- One-pager: replace `[FILL: after testing]` with actual findings/targets or retain NOT RUN. No numeric target or observed lift was fabricated.
- Independent spreadsheet: record candidate calculations/workbook, checker and date for FEES.md's fixed and variable cases.
- Comparative evidence: obtain actual Nubra ticket/order flow and current disclosure/RMS/settlement evidence before stronger claims.
- Deployment: upload/commit this package yourself and run the logged-out Pages checklist. P0 live deployment is not claimed.
- P1: visual-shell/sidebar changes, weekly/monthly expiry, JSON session export, optional teach-back, repo description/topics/screenshots **not started**.
- P2: full keyboard/mobile/contrast audit and GitHub Action **not started**. Existing focus/responsive behaviour is retained; this is not accessibility certification.

**Stop point:** P0 only. P1 requires the candidate's confirmation under the current request.
