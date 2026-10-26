# Evidence, assumptions and limitations — v2.1 P0

## Evidence labels

**OBSERVED** means visible in supplied screenshots or the inspected prototype. **REPORTED** means the candidate's notes/log, not an independently observed behaviour. **ASSUMED** is a design or simulation choice. Mathematics is derived from stipulated fixture inputs, not verified current market data.

## Research boundaries

- **REPORTED:** two friend conversations. Aditya described Groww's loss warning, his father's negative experience and family restrictions. Divyanshu described complexity/cost concerns and funded-account forex trading. Neither is an observed completed first-options-order participant. Claims that either lacks no knowledge or is comfortable with all risks are interpretations, not interview findings.
- **HYPOTHESIS:** unbounded-loss fear and a missing informed moment can be more important than an information shortage. Family permission, complexity, cost and knowledge may matter differently. The prototype does not solve all of them or establish a dominant cause.
- **OBSERVED — supplied captures/log:** Nubra's dark dashboard, sidebar, Option Buyer label, option chain and Strategies payoff metrics. Showing max loss/breakeven alone is not a defensible novelty claim.
- **UNKNOWN:** Nubra's actual order ticket, Option Buyer behaviour, complete first-trade experience and whether existing assistance already solves the problem. The proposed ticket and constructed baseline are labelled accordingly. Screenshots cannot establish that an absent item is absent across the service.
- **NOT RUN:** human comprehension, real first-order observations and 90-day outcomes. Automated cases, screenshots and simulated fills are software checks, not user research.
- **REPORTED — brief:** one-pager300–700 words, original prompts including failures, evals and working link. ONE_PAGER.md is now included under the current explicit request. PROMPTS.md contains slots only, not reconstructed messages.

## Current implementation boundaries

- **ASSUMED scope:** user-selected single-leg cash-settled index option purchases. Existing long units can be sold to close. Opening option sales, stock options, futures, strategies, recommendations, forecasts, sizing, suitability, runtime LLMs, live data and real execution are excluded.
- **ASSUMED shell:** original SVG/CSS/system-font dashboard inspired by supplied web captures. No logos, screenshots, proprietary assets or real market data are embedded.
- **ASSUMED existing navigation:** Option Chain, Orders and Portfolio work; the other nine items retain v2 explanatory overviews. No advanced workspaces are implemented. Changing these items to inactive is a P1 decision, not included in P0.
- **ASSUMED P0 first impression:** the page opens on the chain; no contract is preselected. A contract click preserves that user selection while disclosure and optional context are shown. F&O also opens the disclosure. No first-entry acknowledgement is treated as demonstrated comprehension.
- **ASSUMED disclosure:** v2's dated historical figures are retained from the supplied screenshot and the previously checked19May2023 circular, based on FY2021–22. They are not current personal order odds or an asserted current compliance template. [FILL: verify prescribed wording/current source before production claims].
- **ASSUMED review:** four consequences open immediately; secondary sections are collapsed. Optional glossary remains available. There is no compulsory learning sequence or badge. Back-out/edit/submit use the same button style and equal grid width.
- **ASSUMED evaluator flag:** `?eval=1` reveals a collapsed drawer. Default has no drawer or its jargon. This is presentation gating, not access control. Hash comparison URLs remain compatible.

## Synthetic fixtures and order policies

- All symbols, quotes, balances, OI, volume, depths, previous closes, ranges and orders are invented. SIM is a fictional exchange. A/B/E/F/G/H are six normal same-expiry contracts. C is the isolated no-bid case; D is an excluded physical stock fixture. REG-C/REG-P and GOLD-C/GOLD-P are separate regressions.
- The22,600 CE150.45/PE78.95 regression premiums were inferred from logged Strategies exports; they are not contemporaneous executable quotes. Lot65 is a fixture value, not a verified current lot size.
- Cash starts at₹25,000; initial one lot and editable quoted limit are form placeholders, not recommended sizes/prices. The optional loss budget never changes the selected instrument or quantity.
- Internal clock is fixed at26Oct2026 13:00IST; synthetic expiry is27Oct2026 15:30IST. These are not a verified exchange calendar. Weekly/monthly fixtures are P1 and remain unimplemented.
- Stale>30seconds, future quotes, missing two-sided depth, crossed quotes and spread>5% of midpoint block review. These are prototype policies, not Nubra or exchange rules.
- 1–100 whole lots, positive finite price bounds and₹0.05 tick are fixture/numerical policies. Partial50% fills require at least two remaining whole lots. No fractional-lot fill, random execution, queue priority or hidden liquidity is modelled.
- Only existing DAY limit / closing stop-limit behaviour remains. Settlement is one simplified event, including expiry of pending DAY remainders; repeated settlement is blocked. No multi-day session engine, RMS cutoffs, exercise schedule or physical settlement is implemented.
- Submissions are idempotent; pending buys reserve funds; pending closes reserve long units. Cancel/reject affects only unfilled remainders. Actual fills use executable synthetic quotes and consume depth. Closing cannot become an opening short.
- All state is in memory. Reload/reset clears it. No session logging/download or teach-back UI is added; both are P1. The separate research CSV is manually completed after consent.

## Fees and arithmetic

- Active **structured synthetic** fee rows invent₹25 per entry and₹25 per closing order or settlement. Demo allocation to brokerage with other category rates explicitly zero is artificial, not a real fee split or tax claim. The old flat25/25/25 representation remains named `synthetic-fixed-v1` for regressions.
- The Nubra config contains [FILL] fields and `verified:false`. It cannot supply a cost-aware review. Zero is accepted only when explicitly configured; missing fees/metadata block amounts and submission.
- Supported row bases are option turnover, intrinsic proceeds and GST category sums. Event/side, condition, minimum/cap and rounding are explicit. This is a constrained adapter, not a production-complete tariff engine. Unsupported taxable bases, date schedules, netting or broker events need implementation and independent checks before activation.
- Integer paise ledgers; exact BigInt fee-rate ratios. Partial fills charge cumulative rounded fee differences. Actual filled prices determine paid turnover. Partial closes allocate basis/entry fees to the nearest paise, final close takes the exact remainder.
- Fixed-path breakeven retains a rational root. Variable fee breakeven solves the complete rounded net equation on an integer-paise level grid, only under a conservative monotonicity condition. Unsupported fee schedules or numerical range block submission. Approximate grid roots can have a small residual.
- All-in max loss is shown only for a proven supported fixed-fee single-entry/single-exit-or-settlement path. Variable models return unavailable rather than claim a bound. Extra separate closing orders may add costs. Entry funds exclude later closing/settlement fees. Margin is never a universal loss ceiling.
- The invented settlement charge applies even to worthless expiry in the regression. This is not actual broker treatment. A purchased put's maximum profit is finite on a non-negative index; logged “infinite put profit” labels are not copied as facts.
- Premium scales with lots. Fixed per-order charges do not: total=n×premium+fees(n), not n×the one-lot total. Tests distinguish these cases.

## Remaining verification / [FILL]

1. Complete the source/effective-date/plan, brokerage, statutory, exchange, GST, stamp, rounding and path fields in FEES.md/config; verify independently. Current Nubra fee correctness: **NOT VERIFIED**.
2. Obtain actual Nubra ticket and flow evidence, including activation/disclosure, review placement and exits, before comparative claims.
3. Verify current exchange metadata, settlement, permitted orders, disclosures and broker cutoff/RMS treatment. This project is not compliance certification or a permission to trade.
4. Paste original prompts unchanged into PROMPTS.md, with truthful dates/outcomes/failed attempts.
5. Run consented comprehension sessions, complete the CSV, report confident errors and corrections, and replace the one-pager's metric placeholder with actual findings. If unavailable, retain NOT RUN.
6. Independently calculate the FEES.md spreadsheet cases; do not use passing engine tests as the candidate's hand check.
7. Upload and verify the delivered P0 package on Pages logged out. P0 deployment by this assistant: **NOT RUN**. No remote commit/PR/settings edit was made.

The log's unchecked FY25/FY26 statistics, market loss shares, activation thresholds, mandatory-exam claims and video inferences have not been promoted to facts. No new sourced market/regulatory claim is needed for these P0 changes.
