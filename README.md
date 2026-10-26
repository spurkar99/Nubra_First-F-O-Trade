# Order clarity — an informed first options order

[Open the concept](https://spurkar99.github.io/Nubra_First-F-O-Trade/) · [Run executable tests](tests.html) · [One-pager](docs/ONE_PAGER.md)

**Concept prototype — synthetic data — no real orders.** The ticket is proposed; it is not Nubra's actual order ticket.

## Problem and thesis

An equity investor has already chosen an options contract. Before submitting, can they explain what they pay, what they can lose, the condition for profit at expiry, and how to exit?

The working thesis is that fear of unbounded loss and the absence of an informed moment at the order can matter more than another information resource. **This remains a hypothesis.** Two friend conversations do not establish the dominant barrier, and neither participant was observed placing a first options order. Nubra's supplied Strategies captures already show payoff metrics. The proposed difference is their placement and explanation at the chosen order, measured through comprehension.

## A 60-second path

1. In **Option Chain**, open the synthetic **22,600 call**. Acknowledge the dated disclosure and accept or decline optional context. The initial one-lot and quoted limit fields are editable placeholders, not recommendations.
2. Select **Review order**. Read the four consequences: entry outlay, full loss exposure, breakeven **at expiry**, and exit/non-fill. Secondary detail opens on demand. **Back out**, **Edit order** and **Place simulated order** have equal prominence.
3. If continuing, submit, then choose **Simulate a fill**. A pending order is not a position. Open **Portfolio → Exit position → Review order → Place simulated exit → Simulate closing fill**. Leaving the flow is an equally valid outcome.

## Scope

**In:** a user-selected single-leg, cash-settled index option purchase; deterministic costs/payoffs; simulated pending/partial/filled/cancelled states; closing an existing long.

**Out:** contract selection, forecasts, position sizing, suitability decisions, opening sales, stock options, futures, strategies, live data, runtime LLMs and real execution. Sidebar overviews are explanations of existing labels; advanced workspaces are not implemented.

All fee-inclusive totals are labelled **estimate - synthetic fee profile**. The active structured demo profile invents ₹25 per entry and ₹25 per closing order or settlement. This is not Nubra's tariff. The separate Nubra configuration is incomplete and cannot supply costs. [Fee model and placeholders](docs/FEES.md).

## Evaluation

- [Executable tests](tests.html): financial golden cases, fee adapter, properties, order states, boundaries and copy checks, with counts by area. Node alternative: `node tests/golden.test.js`; no dependencies.
- [Evaluation report](docs/EVALS.md): actual runs, what each case proves, limits and spreadsheet checks.
- [Comprehension protocol](docs/COMPREHENSION_TEST.md) and [blank results CSV](docs/results_template.csv): counterbalanced constructed baseline/review, four questions and confidence. Human results: **NOT RUN**.
- [Constructed baseline](index.html#?mode=baseline) and [review](index.html#?mode=review). The baseline is constructed, not an observed Nubra ticket.

## Review materials

[Audit and P0 change record](docs/P0_REVIEW.md) · [Evidence and assumptions](docs/ASSUMPTIONS.md) · [Prompts template](docs/PROMPTS.md) · [Manual verification](docs/MANUAL_CHECKS.md)

The normal flow hides test controls. [Evaluator mode](index.html?eval=1) reveals the collapsed drawer for existing exceptional scenarios and isolated arithmetic fixtures. Tests and their controls do not establish human understanding.

[Deployment and ZIP instructions](docs/DEPLOY.md). Static relative files, classic scripts, system fonts and original SVG/CSS only; no install, build, keys, external CDNs or runtime data requests.
