# Fee adapter and independent checks

## Status and selection

`assets/js/fee-config.js` is the editable configuration. `ACTIVE: 'DEMO'` selects the structured synthetic profile. `NUBRA` is an incomplete placeholder, **not an implemented tariff**. A non-synthetic profile requires explicit verification and valid rows; incomplete values cannot become zero charges. Configuring an invalid active profile returns unavailable fees and blocks review/submission.

The active demo assigns an invented fixed ₹25 to the brokerage category and explicit synthetic zeros to statutory, exchange, GST and stamp categories. **This allocation is invented for schema demonstration; it does not describe Nubra's brokerage, tax exemptions or inclusive tariff.** Old `Fees.LEGACY_FLAT` / `Fees.DEMO` and `Fixtures.fees()` preserve the original 25/25/25 flat regression; the normal simulator uses `Fixtures.activeFees()`.

## Schema

Every profile has an ID, version, effective date, name, `synthetic`, `verified`, `bounded`, and explicit ENTRY (purchase), EXIT (closing sale), SETTLEMENT events. Each side must contain all five categories; explicit zero is permitted only as a documented assumption or verified rate. Multiple rows in a category allow distinct statutory levies.

Each row specifies:

| Field | Meaning / allowed values |
|---|---|
| `id`, `category`, `name` | Unique row ID per event; brokerage/statutory/exchange/gst/stamp; descriptive label |
| `fixedPaise` | Non-negative fixed charge per order/event, not per lot |
| `ratePpm` | Integer parts per million: 10,000 = 1%; 180,000 = 18%. This is a schema convention, not a current statutory rate. |
| `base` | PREMIUM, INTRINSIC, COMPONENTS. ENTRY/EXIT premium = executed option turnover. SETTLEMENT premium and intrinsic both receive intrinsic cash proceeds. |
| `basisCategories` | GST applies to the sum of specified non-GST categories after their rounding/caps; no recursive GST. |
| `minPaise`, `capPaise` | Explicit minimum and cap (null = no cap) |
| `condition` | ALWAYS or ITM (intrinsic proceeds >0). Conditional schedules can be quoted, but unsupported breakeven models block submission. |
| `rounding`, `roundToPaise` | HALF_UP / CEIL / FLOOR; integer rounding step in paise |

A row is `fixed + base × ratePpm / 1,000,000`, rounded once to the stated step, then minimum/cap applied. GST uses the resulting rounded category totals. BigInt ratio arithmetic prevents floating-point rate errors. Totals and ledgers remain integer paise.

Underlying notional, trade-by-trade/session netting, unusual taxable bases, refunds, discounts, tariff migration mid-position and broker RMS/square-off events are **not implemented**. If the verified tariff needs them, the current adapter is insufficient; do not force those rules into another field. Real-fee production readiness is not claimed.

## Calculation and solver

Q = lots × lot size; P = option premium in paise/unit. Intrinsic is max(S−K,0) for calls and max(K−S,0) for puts.

`net expiry(S) = Q × intrinsic(S) − QP − entryFees(QP) − settlementFees(Q × intrinsic(S))`.

`net early close = actual sale turnover − allocated actual purchase turnover − allocated entry fees − closingFees(actual sale turnover)`.

Fixed paths retain exact rational roots. Price-dependent paths solve the entire rounded net equation on the integer-paise settlement grid. The engine checks a conservative monotonicity condition first, then finds the smallest non-loss call level or largest non-loss put level by binary search. Grid rounding may yield a small positive residual; a neighboring level must be on the loss side. The displayed level is approximate, not an exact prediction or exchange settlement tick. A root outside the numerical limit, an unsupported/discontinuous schedule or missing fees blocks submission; “unavailable” is distinguished from “no feasible root.”

The default fixed profile supports an all-in bound for one entry plus one exit/settlement. Variable models return **all-in maximum unavailable** because a global bound has not been proven for arbitrary caps/rounding/path rules. Their zero-payoff expiry loss is still calculated exactly. No margin amount is treated as max loss. Additional separate closing orders may add fees.

## Fill ledger

Each order snapshots its fee profile. Partial fills charge the difference between the cumulative rounded fee at new turnover and fees already charged. This charges fixed order costs once and variable costs on actual turnover. The pending entry reserves remaining premium at the limit plus the remaining estimated cumulative fee. Cancel/reject releases only the remainder. Settlement uses the position's fee snapshot and actual intrinsic proceeds. Partial closes allocate original basis/entry fees in paise, with exact remainder on final close.

## [FILL] checklist before any Nubra-fee claim

- [FILL: pricing source URL, capture date, effective date, named plan and eligible customer/segment]
- [FILL: buy/close/settlement brokerage basis, fixed/rate terms, minimum, maximum and partial-fill/order aggregation]
- [FILL: each statutory levy including STT treatment on sale vs exercise and zero-payoff expiry]
- [FILL: exchange/clearing/IPFT charges, taxable bases and applicable segment]
- [FILL: GST rate, taxable components and rounding order]
- [FILL: stamp duty side, base, rate, cap and rounding]
- [FILL: real broker cutoffs, auto square-off/RMS and additional events outside the current adapter]
- [FILL: independent spreadsheet for all golden paths, including price-dependent exercise and partial fills]
- [FILL: verifier/date; only then set verified true and consider ACTIVE = NUBRA]

## Values to recompute by hand in a spreadsheet

Use the old fixed fee regression first. Do not paste an engine result into the expected-value column.

| Case | Independently expected |
|---|---|
| K20,000, P100, Q50, flat entry25 + settlement25 | Premium ₹5,000; entry ₹5,025; one-path loss ₹5,050; call BE20,101; put BE19,899 |
| Same, 2 lots | Premium ₹10,000; entry ₹10,025; loss ₹10,050; call BE20,100.50; put BE19,899.50. Fixed fees do not double. |
| 22,600 CE150.45 ×65 | Premium ₹9,779.25; entry ₹9,804.25; loss ₹9,829.25; net BE22,751.219230…; integer-paise level22,751.22 leaves +₹0.05 |
| 22,600 PE78.95 ×65 | Premium ₹5,131.75; entry ₹5,156.75; loss ₹5,181.75; net BE22,520.280769…; level22,520.28 leaves +₹0.05 |
| Default A, 1 lot, buy100.20 then close100 | Entry ₹6,538; full-path loss bound ₹6,563; realised −₹63 after closing |
| Default A, 2 lots, same prices | Entry ₹13,051; realised −₹76; no doubling of per-order fees |
| Long GOLD-P at index zero | Finite net maximum ₹9,94,950 under flat path |

An isolated **synthetic turnover test profile** exists only in the test code. It is not a broker rate: entry ₹10 fixed +1% exchange +0.2% stamp +18% GST on fixed/exchange; exit ₹10 fixed +1% exchange +2% statutory +18% GST on fixed/exchange; settlement 1% of intrinsic proceeds only. All labels/rates here are invented arithmetic exercises.

| Synthetic variable case, K20,000/P100/Q50 | Independent expected |
|---|---|
| Entry charges | 10 +50 +10 +10.80 = ₹80.80; entry funds ₹5,080.80 |
| Call grid root | 20,102.65; payoff ₹5,132.50; settlement fee ₹51.33; net +₹0.37. At20,102.64 net −₹0.13. |
| Put grid root | 19,897.35; same payoff/fee/net; at19,897.36 net −₹0.13 |
| Call expiry at20,200 | Payoff ₹10,000; settlement fee ₹100; net ₹4,819.20 |
| Earlier exit at option premium120 | Proceeds ₹6,000; exit fees ₹202.60; net ₹716.60 |
| 2-lot entry, two partial fills in one order | First fee ₹80.80, later delta ₹69.00; total ₹149.80, not ₹161.60 |

Hand/spreadsheet verification by the candidate: **NOT RUN — [FILL: workbook or recorded calculations and date]**. Automated expected values have been executed separately; that is not a candidate's independent check.
