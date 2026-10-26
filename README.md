# Order clarity v2.0 — first-options-order concept

A static, offline concept prototype for reviewing a **user-selected, single-leg, cash-settled index option purchase**. It explains the selected order; it does not pick contracts, forecast returns, size positions, or execute real orders. Closing an existing long is supported. Opening option sales, stock options, futures, live feeds and real execution are excluded.

The dark dashboard uses original SVG paths, CSS and system fonts. It has no logos, copied assets, external libraries, CDNs, API keys, runtime AI, server component or build process. The ticket is a **proposed interface**, not a captured Nubra ticket. Every price and account amount is synthetic.

## What changed in v2

- F&O entry now opens a research-based historical risk disclosure, then an optional guidance invitation. Declining guidance still opens the chain.
- Guidance is contextual: chain orientation, your actual order in plain language, consequences at review, and the order/position distinction. It is not a compulsory tutorial.
- Every sidebar button now responds: the three core areas navigate; nine advanced areas open short, labelled overviews. They are explanations, not fake working cloud/AI/scalper services.
- Inline question marks and a searchable glossary explain every financial metric displayed. Advanced Greeks and POP are defined but not assigned invented values.
- The option-view dropdown really changes the chain columns. Six coherent normal contracts are user-selectable; special and regression fixtures stay in evaluator controls. OI and volume explicitly use contracts.
- An interactive expiry-outcome slider calculates a conditional result without changing the order. It does not forecast the market.
- Simulate a fill / Simulate closing fill now sit in the normal order flow. Evaluator controls are for exceptional scenarios, not required for the ordinary journey.
- Numeric edits update values without replacing the focused input or swallowing the next click.

## Open immediately

Unzip and open `index.html` in a modern browser. Everything runs from disk. State is in memory; reloading or Reset starts again. No registration or installation is required.

The ZIP has `index.html` directly at its root. Upload the extracted files and `assets`, `tests`, `docs` folders to the repository root, preserving their paths. Include the empty `.nojekyll` file. Do not upload just the ZIP, and do not place everything inside an extra wrapping folder.

## GitHub Pages: three steps

1. Create/open your repository, upload all extracted site files to its root, and commit them on `main`. You make this commit yourself; this package has no GitHub integration.
2. Open **Settings > Pages > Build and deployment > Source: Deploy from a branch**. Choose **main** and **/ (root)**, then Save.
3. Open the Pages link GitHub provides, usually `https://YOUR-USERNAME.github.io/YOUR-REPO/`. Test the app and `tests.html` there. All site paths are relative, so the repository-name prefix works.

## Tests

- **Browser, no install:** open `tests.html` (from disk or Pages). The pass/fail table runs automatically; Run all tests repeats it.
- **Node, if already installed:** from the extracted root, run `node tests/golden.test.js`. There are no packages to install. Node and browser load the same cases and engine.
- `docs/EVALS.md` contains the actual sandbox results, expected outcomes, and limitations. Human comprehension testing is separate and **NOT RUN** until you recruit participants.

## Evaluator guide

The bottom **Evaluator controls** drawer is intentionally separate from the user flow. Its inputs are test controls, not trading advice.

### Normal journey

1. Click **F&O**. Read the dated disclosure; **I understand** leads to an optional guidance choice. Use guided view or continue without guidance. Then select a synthetic call or put in Option Chain. Confirm lots and the editable limit premium. The initial one-lot value is a minimum-lot form placeholder, not a size recommendation; it must be reviewed explicitly.
2. Select **Review order**, inspect consequences, then Edit order, Back out, or Place simulated order. Nothing fills automatically. Every question mark opens a short explanation; Metrics explained searches the full glossary.
3. On Order status, choose **Simulate a fill**. A fill still needs a marketable limit and whole-lot quoted depth. Open Portfolio, Position details, Exit position, review the closing sale, and submit. Choose **Simulate closing fill** to close it. The evaluator drawer provides additional partial/reject/pending scenarios.

### Scenario picker

| Scenario | How to reproduce / expected result |
|---|---|
| Normal | Restores the selected contract's metadata, fee profile and fresh quote. Re-review if data changed. |
| Stale quote | Age is 31 seconds relative to the frozen simulation clock; blocks review/submission. |
| Wide spread | Bid/ask gap exceeds 5% of midpoint; blocks review/submission. |
| No bid | Removes bid and bid depth. No executable closing price is invented. |
| Missing fees | Removes the fee profile; no all-in totals are invented. Restore Normal to continue. |
| Data changed after review | Changes quote version/ask and invalidates the previous acknowledgement. Recalculate review explicitly. A previously chosen limit can then remain pending if below the new ask. |
| Missing contract data | Removes lot size; blocks calculation. Normal restores metadata. |
| Expired contract | Makes the selected contract expired; blocks review. Normal restores its synthetic expiry unless the simulation clock has already reached expiry. |
| Gap below pending stop-limit | First submit a stop-limit exit with trigger/limit below the current premium. Apply this scenario, then Fill now. The stop activates but the bid is below the sell limit, so the exit remains pending and the position open. |

**Thresholds are prototype policies, not Nubra or exchange thresholds:** stale means age > 30 seconds, spread means > 5% of midpoint. The prototype also limits orders to 1–100 whole lots for numerical bounds, not suitability.

### Fill and order controls

- **Fill now:** attempts to fill the selected active order at the current synthetic ask (purchase) or bid (close), not at its LTP or automatically at its limit. Depth may yield a partial fill.
- **Partial 50%:** fills half the remaining whole lots, rounded down. It requires at least two remaining lots; one lot is not split. Set two lots before submitting to demonstrate this.
- **Reject remainder:** rejects only unfilled units. Existing fills and fees remain.
- **Let it stay pending:** sends no fill event; state and reservations remain.
- To cancel, open the order and choose **Cancel unfilled remainder**. A partial position remains open. A cancellation request and completion are synchronous simulated events, recorded in the order history.
- **Test opening Sell:** attempts the unsupported opening-sale path; it does not send an order.
- **Process synthetic expiry:** enter a non-negative settlement level. Advances the frozen clock to expiry, expires unfilled DAY remainders, cancels pending exits by expiring them, and cash-settles filled supported positions. This simplified event is not a replica of exchange/broker intraday operations. Reset to start over.
- **Reset simulation:** clears all positions, orders, fees/scenarios, idempotency records, reservations and clock changes. Mode selection remains as chosen. The F&O disclosure and optional invitation repeat after reset.

### Separate fixtures

The drawer can open A–D or isolated arithmetic/regression fixtures. The 22,600 CE/PE inferred premiums are separate checks, **not a matched real quote pair or a contemporaneous synthetic chain**. The arithmetic K=20,000 / P=100 / Q=50 fixture uses the same fee profile as the app.

### Baseline comparison

Open `index.html#?mode=baseline` or `index.html#?mode=review`, or use the mode switch in Evaluator controls. Baseline shows a plain **constructed** order summary, labelled “Constructed baseline, not Nubra's ticket.” The shared validation and execution restrictions apply in both modes. Baseline suppresses contextual guidance and identifies itself explicitly. The comparison can test the complete optional guided experience, or the purchase review only if both conditions receive the same preceding help. Record which design you tested. Exit mechanics are shared. See `docs/COMPREHENSION_TEST.md` for the test script and reversal protocol.

## Fees and calculations

`assets/js/fees.js` isolates the invented profile **Synthetic demo fees (not Nubra's charges)**: ₹25 per entry order, ₹25 per exit order, ₹25 per settlement event. A single entry/exit or entry/settlement path costs ₹50, regardless of lots. Even a zero-payoff settlement incurs the invented ₹25 fee in this fixture. Cancelled unfilled orders incur no fees; partial fills of the same order incur its fee once. More separate closing orders incur more fees.

Prices and money totals use integer paise. Breakeven roots and average fill premiums may have fractional paise mathematically; displayed values are approximate, with exact integer premium/fee ledgers retained. Scenarios use integer-paise settlement levels. Profit/loss uses actual fill premiums, not forecasts from the spot level before expiry.

Replacing the fee profile with a real tariff may require a richer fee adapter; do not simply overwrite three numbers and call it a production calculator. Real statutory fees can depend on turnover, side, path, date, rounding and broker plan.

## Files

- `assets/js/engine.js`: validation, quantities, costs, expiry and realised P&L.
- `fees.js`: synthetic fee provider; `fixtures.js`: isolated datasets.
- `simulator.js`: reviews, idempotency, reservations, fills, cancellations, closes and settlement.
- `explain.js`: deterministic order templates; `guide.js`: metric explanations, sidebar overviews and dated disclosure content; `ui.js`: accessible dialogs, opt-in flow, DOM and scenario controls.
- `tests/golden.test.js`: shared UMD suite for Node and `tests.html`.
- `docs/ASSUMPTIONS.md`: all synthetic choices and unverified boundaries.

No one-pager or prompt log is included. Retain the actual prompts from this chat and any other builder, including unsuccessful attempts; do not rewrite them retrospectively.

## Disclosure evidence

The first-entry popup recreates the four figures seen in the supplied Nubra screenshot, with the missing context made explicit: the underlying population study covers FY 2021–22 and was published on 25 January 2023; the disclosure circular is dated 19 May 2023. These annual group outcomes are not the odds for one order and are not described as the latest statistics. The prototype does not assert current regulatory compliance. If you intended a different error popup, replace it only after obtaining its exact screenshot.
