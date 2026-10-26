# Assumptions and evidence boundaries — v2.0

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
- **ASSUMED:** mode is stored only in the hash (`#?mode=baseline` or `#?mode=review`). The app has no SPA server routing dependency. Baseline omits proactive guidance; execution validations and exit mechanics are shared. Record whether a comprehension comparison tests the entire guided journey or review only.

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

## v2 decisions and current evidence

- **OBSERVED — live demo and GitHub:** inspected the supplied Pages site and repository at commit `5beb947d74d602dcde994d381eec2c3221d75910`. The original nine advanced sidebar controls stopped at a toast and the chain dropdown had one choice. The update changes local source and provides a ZIP; no remote commit, PR or deployment was made.
- **ASSUMED — “same error”:** interpreted the requested popup as the F&O risk disclosure in the supplied Nubra screenshot, not KYC pending or a trading rejection. It is reproduced with explicit historical context. No account error or fake failed KYC is introduced.
- **SOURCED — disclosure:** the four historical figures match the supplied screenshot and SEBI circular of 19 May 2023. Its cited underlying study covers FY 2021–22 (published 25 January 2023). This is not a current personal loss probability. Current prescribed wording still needs a separate production review.
- **ASSUMED — scope expansion:** a short optional, order-specific guidance layer, searchable definitions and sidebar summaries have been added. No compulsory tutorial, quiz, recommendations, readiness badge or return forecast is introduced. Declining or turning off guidance does not prevent the normal review flow.
- **ASSUMED — navigation:** Option Chain, Orders and Portfolio are working areas. The other nine navigation entries are informative overview panels, not implemented trading products. The AI panel is a deterministic term helper and expressly has no runtime model.
- **ASSUMED — normal chain:** E/F at strike 22,500 and G/H at 22,700 supplement A/B at 22,600; all are invented. Their ask differences equal the stipulated spot–strike difference for internal fixture consistency, not a full arbitrage-free pricing model. C no-bid and D physical-settlement remain separate edge fixtures.
- **ASSUMED — metrics:** OI and volume are now explicitly in contracts. Price/activity uses invented previous closes and ranges. Numerical IV, Greeks, PCR, POP and max pain are not calculated; the glossary explains their meaning and limits.
- **ASSUMED — simulation usability:** a normal visitor may trigger a synthetic fill from the order-status screen. It still uses the original matching/depth rules, does not automatically execute, and cannot place real orders. Additional controls remain in the evaluator drawer.
- **ASSUMED — disclosure timing:** the popup occurs at first F&O entry per in-memory session and repeats after Reset. This is a demonstration choice, not a claim to reproduce every required broker disclosure occasion.
- **ASSUMED — metric help:** manual metric help is available in both comparison modes. Baseline suppresses the proactive context cards and uses an explicit baseline invitation. Comprehension reports must say whether the experiment tested the entire guided journey or only the final review, to avoid attributing earlier learning solely to the review screen.
- **ASSUMED — version/cache:** a v2.0 label and relative static cache keys make the new assets recognisable. No fetch, external font, CDN, API or runtime dependency was added.

### Source references (documentation only; the app makes no network request)

- User-supplied Nubra/Kite captures and v2 conversation log.
- https://www.sebi.gov.in/sebi_data/attachdocs/may-2023/1684493716856.pdf
- https://www.nseindia.com/option-chain
- https://support.zerodha.com/category/trading-and-markets/charts-and-orders/order/articles/what-are-stop-loss-orders-and-how-to-use-them
- https://robinhood.com/us/en/support/articles/placing-an-options-trade/ (benchmark only, not Indian settlement rules).
