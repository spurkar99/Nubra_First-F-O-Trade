# Comprehension test protocol

## Status

**NOT RUN — no human participant results are claimed.** Automated browser tests are not a substitute for these interviews. Complete the blank scoring sheet after testing; retain partial/incorrect answers honestly.

## Participants and consent

Recruit 2–3 people who have bought equities and have not placed an options order, ideally including someone who has considered a specific order. Record any deviation (e.g. forex experience, existing options experience). Ask permission to record notes; use anonymous participant IDs. Do not ask them to fund an account or trade real money.

Tell them: “This is an interface test using invented prices and money. We are testing the explanation, not your financial knowledge. Proceeding, editing and deciding not to trade are all valid.”

## Setup: comparable fictional tasks

- Baseline URL: `index.html#?mode=baseline`
- Review URL: `index.html#?mode=review`
- Both modes share the same proposed order form and execution checks. Baseline shows a plain constructed summary, not Nubra's real ticket. Compare at the **purchase review moment**. Do not reveal the other mode or the expected answers in advance.
- Use the separate arithmetic fixtures GOLD-C and GOLD-P in the Evaluator drawer. Each has strike 20,000, premium ₹100 per unit, lot size 50 and the same fixed synthetic fee profile. Ensure one lot, no entered budget, a fresh Normal scenario and no prior orders. For the call, entry is ₹5,025, gross premium exposure ₹5,000 and stated single-path loss ₹5,050; expiry BE 20,101. For the put, expiry BE 19,899. Do not read this key aloud.
- The tasks differ in direction but have matched numerical complexity. This is a small formative comparison, not a controlled experiment or statistically significant A/B test. Order reversal reduces but cannot remove learning effects.

## Script: approximately 10 minutes each

1. Record participant's relevant experience, preferred language and whether they have selected an options contract before.
2. Give the scenario: “Assume you have chosen this fictional contract yourself. Please review the order as you would before deciding. You may leave, edit, or continue.” Do not recommend it or explain the answers.
3. Open the assigned baseline/review URL and fixture. Let them enter/confirm the order and open Review order. Observe hesitation and what they inspect. Avoid helping before their first answer.
4. Ask the four questions below, recording their exact first answer and confidence (1–5), plus time to answer. Do not correct answers yet.
5. Reset, switch interface and use the matched opposite-type fixture. Repeat without coaching.
6. Ask what, if anything, was confusing or appeared to endorse the decision. Ask whether they would edit, proceed, or decline and why. Their choice is not scored as conversion success.
7. After both tasks, debrief misunderstandings using the fictional example, without suggesting a real trade. Recheck any critical misconception after a proposed copy fix and label that result as a separate, assisted follow-up.

## Four questions and scoring key

| Dimension | Ask verbatim | Correct | Partial / incorrect examples |
|---|---|---|---|
| Outlay | “How much money is committed on entry, including the stated entry charges?” | ₹5,025 at limit: ₹5,000 premium + ₹25 entry fee. Not the later full-path cost. | Partial: knows cost is more than premium but not the amount. Incorrect: ₹100 or ₹5,000 total, or ₹5,050 entry. |
| Exposure | “How much can be lost, and does a stop guarantee a smaller loss?” | Full ₹5,000 premium, costs additional; stated one-entry/one-exit-or-settlement loss ₹5,050. Stop does not guarantee that intended loss. Multiple separate exits can add fees. | Partial: full premium understood but fees or stop limitations missed. Incorrect: only the stop amount, or margin is a universal cap. |
| Profit at expiry | “What must happen for profit at expiry? Could the result differ if you exit earlier?” | Call above 20,101; put below 19,899, under synthetic costs. Earlier result uses option exit premium and can differ with time/volatility. | Partial: correct direction but misses cost-adjusted level or time horizon. Incorrect: any underlying rise/fall ensures profit. |
| Exit | “How would you exit? What happens if the exit order does not fill?” | Sell existing same-contract long units to close. Pending exit leaves exposure open. Cancelling an order does not erase fills; quantity cannot exceed held/unreserved units. | Partial: knows sell-to-close but assumes guaranteed execution. Incorrect: cancel the position or open an unrelated short. |

Correct/partial/incorrect are observations, not an approval to trade. Define **informed** as all four dimensions correct without coaching. A confident incorrect answer is a critical finding. Do not inflate a partial into a pass.

## Fixture / interface order reversal

| Participant | Task 1 | Task 2 |
|---|---|---|
| P1 | Baseline + GOLD-C | Review + GOLD-P |
| P2 | Review + GOLD-C | Baseline + GOLD-P |
| P3, if available | Baseline + GOLD-P | Review + GOLD-C |

Record the exact order you actually used. Do not describe sequential comparison as randomised if it was not.

## Blank scoring sheet

| Participant / task / mode / fixture | Outlay C/P/I | Exposure C/P/I | Expiry C/P/I | Exit C/P/I | Confidence 1–5 | Time | Exact misunderstanding / quote | Proceed / edit / decline |
|---|---|---|---|---|---|---|---|---|
| P1 task 1 | NOT RUN | NOT RUN | NOT RUN | NOT RUN | — | — | — | — |
| P1 task 2 | NOT RUN | NOT RUN | NOT RUN | NOT RUN | — | — | — | — |
| P2 task 1 | NOT RUN | NOT RUN | NOT RUN | NOT RUN | — | — | — | — |
| P2 task 2 | NOT RUN | NOT RUN | NOT RUN | NOT RUN | — | — | — | — |
| P3 task 1 | NOT RUN | NOT RUN | NOT RUN | NOT RUN | — | — | — | — |
| P3 task 2 | NOT RUN | NOT RUN | NOT RUN | NOT RUN | — | — | — | — |

## Report honestly

Report counts by dimension and participant, critical errors, confidence calibration, actual quotes and changes made. Do not extrapolate to all traders or claim validated differentiation from 2–3 people. No 90-day outcomes are available. A later longitudinal study should pair brokerage engagement with comprehension, surprise-cost reports, accidental-short rates, complaints and voluntary non-trading, rather than reward derivatives trade frequency.

## v2 onboarding and experimental controls

Both conditions encounter the historical disclosure before F&O access. Baseline shows an explicit baseline invitation and no proactive guidance cards. Review offers optional guidance; record whether the participant opts in. Do not score a voluntary decline as failure.

Choose and document one comparison:

1. **Whole-experience comparison:** unguided baseline versus optional guided review journey. The measured difference may include learning from the ticket/chain cards, not just the final review.
2. **Review-only comparison:** give identical preceding exposure/help to both conditions, then compare the plain summary with the consequence review. Record any manual glossary usage, as it can influence answers.

The glossary is available on demand in both modes. Do not interpret clicking “I understand” as demonstrated comprehension. Use the four uncoached questions and fixture-order reversal. No new participant results were generated for this update.
