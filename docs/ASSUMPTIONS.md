# Assumptions and evidence boundaries

## Status labels

- **OBSERVED:** visual details supplied in research screenshots only.
- **SOURCED:** provided brief/log statements or mathematics derived from explicitly stipulated inputs. This does not turn a user's report or an AI inference into independently verified market evidence.
- **ASSUMED:** prototype policy, synthetic fixture, design proposal or unverified interpretation.

## What this package claims

1. **SOURCED — brief:** Problem 04 targets an equity investor placing a first options trade. Deliverables are a 300–700-word one-pager, actual prompts including failures, evals and an accessible app link. This package provides the prototype and evaluation materials, not your one-pager or prompt log.
2. **ASSUMED — scope:** single-leg, cash-settled index option purchases only; sell-to-close is supported. Futures, stock options, opening sales, recommendations, live feeds and real execution are excluded. These restrictions are implementation scope, not a suitability judgement or regulator-approved beginner product.
3. **OBSERVED — screenshots:** dark web dashboard, sidebar, market strip, dense option chain and Option Buyer label. This implementation uses original HTML/CSS/SVG; no brand logos, screenshots, proprietary assets or external fonts are embedded.
4. **ASSUMED — ticket:** the actual Nubra order ticket was not observed. Ticket, review, lifecycle and baseline designs here are proposals. The app labels the proposed ticket and constructed baseline accordingly.
5. **SOURCED — research report:** two friend interviews are recorded. **UNVERIFIED:** neither establishes the needs of a person who has chosen a contract and is about to order. Knowledge, fear of unbounded loss, family permission and complexity remain hypotheses. No new interviews or human comprehension tests were fabricated for this build.

## Synthetic data and policies

- **ASSUMED:** every contract, symbol, quote, order, depth, open-interest/volume value, balance and settlement event is synthetic. SIM is a fictional exchange label. The market strip does not update and does not represent a live quote.
- **ASSUMED:** account cash starts at ₹25,000. It is not a suggested capital amount.
- **ASSUMED:** form initially contains one lot as a minimum-lot placeholder and an editable quote-based limit. These are not endorsed sizes or prices; the user must review them. The tool never searches for contracts that fit a budget or changes the selected contract.
- **ASSUMED:** frozen clock is 26 October 2026, 13:00 IST. Synthetic expiry is 27 October 2026, 15:30 IST. These are fixture dates, not verification of an exchange calendar or settlement-price method. Wall-clock time does not make the demo expire later.
- **ASSUMED:** quote age >30 seconds, future-dated quotes, missing two-sided depth, crossed quotes and spread >5% of midpoint block review. The thresholds are prototype policies, not broker or exchange thresholds.
- **ASSUMED:** 1–100 whole lots, ₹0.05 fixture tick, and finite positive price bounds are numerical/simulation policies. Real lot/tick sizes must come from current contract metadata.
- **ASSUMED:** “partial 50%” is half the remaining whole lots rounded down, with a minimum of two remaining lots. Real execution can be more complex. No queue priority, hidden liquidity or stochastic fills are modelled.
- **ASSUMED:** synthetic quoted depth is consumed by fills. Applying a fresh scenario replenishes its invented depth. Fills happen only after an evaluator click and still need a matching bid/ask at the order's limit.
- **ASSUMED:** only DAY carry orders are supported. No intraday square-off engine, margin offsets, pledged collateral, tax P&L reporting, American exercise or corporate actions are simulated.
- **ASSUMED:** expiry processing is one simplified event: expire pending remainders and settle filled index positions. A repeated settlement is blocked. This is not an exchange or broker implementation.
- **ASSUMED:** cancellation is synchronous but records “requested” and “completed” events. A rejected/cancelled remainder never erases existing fills.
- **ASSUMED:** all state lives in memory. Reload/Reset clears account state. No personal data is transmitted, stored remotely or restored across sessions.
- **ASSUMED:** mode is stored only in the hash (`#?mode=baseline` or `#?mode=review`). The app has no SPA server routing dependency. Baseline compares purchase review only; execution validations and exit flow are shared.

## Fees and arithmetic

- **ASSUMED:** profile name is “Synthetic demo fees (not Nubra's charges)”; ₹25 ENTRY, ₹25 EXIT, ₹25 SETTLEMENT, per order/event, not per lot. One complete path costs ₹50. These are invented inclusive totals; no real STT, GST, brokerage or statutory-rate claim is made.
- **ASSUMED:** even worthless expiry pays the synthetic settlement fee. This is necessary to keep the stipulated fixed-₹50 golden fixture; it must not be presented as actual broker treatment.
- **ASSUMED:** fee is charged once on the first fill of an entry/exit order, not on each partial fill. No charge on an unfilled cancelled/rejected/expired order. Each separate closing order adds another exit fee. Its fee profile is snapshotted at submission; existing positions retain their initial settlement profile. The UI does not support tariff migration mid-position.
- **ASSUMED:** pre-trade funding reserves premium at the limit plus entry fee. Future exit/settlement fees are not debited at entry. They can add to losses. Pending close orders reserve position units, not an opening-short margin amount.
- **SOURCED — mathematics:** Q = lots × lot size. Call expiry net = Q × max(S−K,0) − QP − entry/settlement costs; put expiry net = Q × max(K−S,0) − QP − entry/settlement costs. Early close net uses filled option premiums, not spot direction.
- **ASSUMED:** integer paise ledgers. Average fill price and a breakeven root can be rational values; monetary ledgers are not rounded from those displayed averages. Partial closes allocate cost basis and unallocated entry fees to the nearest paise; the final close receives the exact remainder, preserving reconciliation.
- **ASSUMED:** “including costs” exposure is bounded for one entry and one exit/settlement under this fixed profile only. Additional separate exits add fees. If the profile cannot support a bound, the engine returns unavailable rather than inventing an all-in maximum.
- **SOURCED — regression arithmetic only:** 22,600 CE at 150.45 ×65 = ₹9,779.25; premium-only BE 22,750.45. PE at 78.95 ×65 = ₹5,131.75; premium-only BE 22,521.05. **INFERRED/UNVERIFIED:** these prices were reverse-derived from logged Strategies figures, not confirmed executable quotes. They live separately from the synthetic A/B chain and are not asserted to be contemporaneous.
- **SOURCED — correction:** long-put maximum gain is finite when the underlying is non-negative. Logged “infinite” long-put profit/short-put loss labels must not be copied as mathematical facts. The engine handles infeasible or zero-only breakeven explicitly.

## Human and production verification still needed

1. Recruit 2–3 suitable participants, record consent, baseline/review answers and confidence. Current human results are **NOT RUN**. Small samples are formative, not statistical validation.
2. Verify Nubra's actual ticket, Option Buyer behaviour and first-trade experience before making comparative claims. A visible button or missing item in one screenshot is not proof of acceptance or absence elsewhere.
3. Confirm the mapped Nubra brokerage plan, statutory fee bases/rates/rounding, IPFT/clearing charges, exercise versus early-sale treatment, effective dates and RMS/square-off costs. No real tariff has been implemented.
4. Confirm current exchange contract metadata/calendar, cash versus physical settlement, order-type restrictions, broker cutoffs and disclosures before any production work. This offline concept is not compliance certification.
5. Verify any SEBI FY25/FY26 loss statistics, “92% from options,” activation thresholds/timing, mandatory-exam claims and historical video inferences from original sources before citing them. The app deliberately does not repeat these unchecked claims.
6. Confirm advice boundaries, data rights, consent, audit obligations and security with broker compliance before integration. No suitability score or investment recommendation is provided here.
7. Test your deployed GitHub Pages link logged out. Actual GitHub hosting/account permissions cannot be validated until you upload and enable Pages.

No runtime AI, network requests, API keys, copied brand assets, third-party scripts or real account data are used.
