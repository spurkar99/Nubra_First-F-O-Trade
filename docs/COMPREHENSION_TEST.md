# Comprehension test kit

**Human status: NOT RUN.** No participant answers, confidence scores or findings have been fabricated. This protocol and its criteria are specified before collecting results.

## Question being tested

Does the consequence review help an equity investor explain their chosen first option order with fewer confident errors than a plain constructed summary? It is not a test of profitability, trade conversion or whether a person is fit to trade. The baseline is constructed, not Nubra's actual ticket.

Recruit 2–3 equity investors who have not placed an options order, ideally including someone who has considered a specific contract. Record experience deviations. Ask consent to take notes, use anonymous IDs, and never ask for real money or account details.

Read: “This is an interface test with fictional prices and money. We are testing the interface, not you. You can edit, leave, or continue. There is no preferred trading decision.”

## Controlled setup

1. Facilitator opens `index.html?eval=1#?mode=baseline` or `index.html?eval=1#?mode=review`, resets, clicks F&O, acknowledges the same historical disclosure, declines proactive guidance (Continue with baseline in baseline mode), opens the assigned GOLD-C/GOLD-P fixture and collapses the evaluator drawer. Both fixtures are one lot of 50 units, strike20,000, premium₹100, active synthetic flat-equivalent fee model. Check no old order, no budget and a Normal quote.
2. For a **review-only comparison**, decline proactive guidance in both conditions. Keep preceding exposure identical. The review condition still has the four-consequence screen; baseline has the plain summary. Keep the glossary available in both and record any use. Do not alternate between testing the whole guided journey and the review screen without labelling it a different study.
3. Give the same task: “Assume this is the fictional contract you already chose. Review it before deciding. You can leave or edit.” The facilitator selects the fixture to control difficulty, not to recommend an actual trade.
4. Before showing the assigned summary, ask confidence **1–5 for each of the four dimensions** below: “How confident are you that you could explain this correctly?” Do not collect a knowledge answer or teach the key yet.
5. Show the assigned summary. Ask the four questions; record exact first answers, time and confidence1–5 immediately after each answer. Do not correct, coach or praise correctness before both tasks finish.
6. Reset and present the second task with the other interface/fixture. Repeat confidence-before, answers and confidence-after. Ask proceed/edit/decline as an observation only. Debrief after both; any assisted re-test is a separate row, never the original score.

## Counterbalancing and fixture reversal

| Assigned sequence | Task1 | Task2 |
|---|---|---|
| P1 | Baseline + GOLD-C | Review + GOLD-P |
| P2 | Review + GOLD-C | Baseline + GOLD-P |
| P3, if available | Baseline + GOLD-P | Review + GOLD-C |

Use P1/P2 for two participants; record the actual sequence and any departure. This balances interface order and crosses contract type with interface across the first two people. P3 reverses fixture order; three people are not perfectly balanced. Learning/carryover remains possible even without feedback. Do not call this randomised or statistically significant.

## Four questions and prewritten answer key

| Dimension / exact question | Correct | Partial | Wrong |
|---|---|---|---|
| Total cost: “What is the total entry outlay, and which part is premium versus entry fees?” | ₹5,025 at limit =₹5,000 premium +₹25 entry fees. Exit/settlement fee is later. | Understands all50units and additional entry charges but cannot state the correct total/split. | ₹100, ₹5,000 or ₹5,050 as total entry; ignores units or confuses path cost with entry. |
| Maximum loss: “How much can be lost, including the stated costs? Does a stop cap that amount at your intended loss?” | Entire₹5,000 premium; stated one-entry/one-exit-or-settlement cost₹50, so₹5,050. Stop-limit can stay unfilled; more separate closing orders can add fees. | Full premium understood, but fee caveat or intended-stop limitation missing. | Stop amount or margin treated as universal loss ceiling; only a per-unit amount given. |
| Expiry profit: “What must happen for net profit at expiry? Would an earlier exit use the same calculation?” | GOLD-C: settlement above20,101. GOLD-P: below19,899. Entry+settlement fees included. Earlier exit uses option premium and may differ with time/volatility. | Correct direction and cost awareness but level/horizon distinction incomplete. | Any rise/fall ensures profit; uses strike alone or applies expiry root as an earlier trading price. |
| Exit: “How do you exit this position, and what happens if that order does not fill?” | Sell the same held units to close; a matching fill is needed. Pending exit leaves exposure open. Cancelling a pending order does not remove fills or close the position. | Knows closing sale is required but cannot explain pending/cancel distinction. | Cancel the position, buy an unrelated contract, or assumes submission itself removes exposure. |

Rubric uses **correct / partial / wrong**, scored from the first uncoached answer. A correct answer can use different words. Do not round partial up to correct. For maximum loss, missing the stop limitation is at most partial. The active structured demo is numerically identical to the named old flat regression; changing tariffs invalidates this key and requires recalculation before any new session.

## Headline metric and criteria, defined in advance

- **Confident-but-wrong count:** number of dimension answers scored **wrong** with confidence-after **4 or5**. Report numerator/total answers by condition (four per task), plus the number of participants with at least one such answer. This is a descriptive count, not significance testing.
- Also report high-confidence partials separately, all4-correct tasks, correctness by dimension, confidence-before/after, time, help usage and decisions. More confidence without correctness is not success.
- Formative acceptance criterion: **every review task has all four dimensions correct, zero confident-but-wrong answers and zero high-confidence partials**. Any wrong loss/exit answer requires a fix and a fresh uncoached test. A baseline comparison is reported regardless of direction; no improvement may be claimed if there is none. Two or three participants meeting these criteria still do not validate population performance.
- Backing out is not failure. Placement rate, profit and trade frequency are not comprehension measures. No readiness badge or compulsory pass gate follows this research scoring.

## Recording and change log

Use [results_template.csv](results_template.csv), one row per dimension per task. It has preassigned sequences and **NOT RUN** status; empty observation cells mean no data, not zero or wrong. Enter exact answers, 1–5 before/after confidence, rubric score, help, decision and time. Compute the headline flag from score/confidence; do not manually choose flags to improve the result.

| What failed (exact observed answer) | Evidence / participant/task | What I changed | Why | Fresh test / result |
|---|---|---|---|---|
| [FILL: after a real test] | [FILL] | [FILL: exact copy/layout change] | [FILL] | NOT RUN |

Do not fill this table with implementation bugs discovered by automated checks and call them participant findings. Software failures belong in EVALS.md.

## Not tested

Human comprehension; Hindi/regional-language comprehension; first real-order behaviour; family/social permission; actual Nubra ticket comparisons; loss experience with real money; long-term recall; 90-day activity; current fee/rule compliance; full assistive-technology usability; statistical causal lift. All remain **NOT RUN / unverified**, as applicable.
