# P0 — full updated file contents

Complete contents of every changed/new source or document file, not diffs. The working files also exist at their normal paths in the ZIP. This generated collector excludes itself to avoid recursive duplication. Files touched and reasons are in P0_REVIEW.md below. Original .nojekyll remains empty and unchanged.

## README.md

````markdown
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
````

## assets/css/styles.css

````css
:root{color-scheme:dark;--bg:#080e15;--panel:#101923;--panel2:#142230;--line:#293642;--muted:#a5b4c2;--text:#eef4f8;--accent:#96cf6c;--red:#ff999c;--amber:#f0c577;--blue:#9ec9f5;--focus:#d5f29b;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text)}button,input,select,textarea{font:inherit}button,a,input,select,summary{touch-action:manipulation}button{cursor:pointer}button:disabled{cursor:not-allowed;opacity:.55}a{color:var(--blue)}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:3px solid var(--focus);outline-offset:3px}button,input,select{border-radius:6px}button{padding:10px 15px;background:var(--panel2);border:1px solid var(--line);color:var(--text);font-weight:550}button:hover:not(:disabled){filter:brightness(1.15)}input,select{background:#0a121c;color:var(--text);border:1px solid #47596a;min-height:42px;padding:9px 11px;width:100%}input[type=checkbox]{width:18px;min-height:18px;accent-color:var(--accent)}label{display:flex;flex-direction:column;gap:7px;color:#c5d2dd;font-size:13px}h1,h2,h3,p{margin-top:0}h1{font-size:25px;letter-spacing:-.6px;margin-bottom:9px}h2{font-size:18px;letter-spacing:-.25px;margin-bottom:14px}h3{font-size:14px;margin-bottom:8px}p{line-height:1.6}small,.small{font-size:12px;line-height:1.6;color:var(--muted)}.muted{color:var(--muted)}.mono,.money,td,.market-strip b{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",monospace;font-variant-numeric:tabular-nums}.skip{position:fixed;top:-80px;z-index:50;background:white;color:black;padding:12px}.skip:focus{top:10px}.concept-banner{background:#223326;color:#dcf2cf;text-align:center;font-size:12px;font-weight:600;padding:8px 16px;letter-spacing:.25px;border-bottom:1px solid #40543a}.topbar{height:66px;display:flex;align-items:center;gap:28px;padding:0 24px;border-bottom:1px solid var(--line);background:#0c141d}.wordmark{font-size:15px;font-weight:750;letter-spacing:1.7px;white-space:nowrap}.wordmark>span{color:var(--accent)}.concept-tag{font-size:9px;letter-spacing:1px;border:1px solid #486039;border-radius:4px;padding:4px 5px;margin-left:10px;vertical-align:middle}.mode-control{display:flex;background:#080e15;padding:3px;border:1px solid var(--line);border-radius:7px;margin-left:auto}.mode-control button{padding:7px 12px;background:transparent;border:0;font-size:12px;font-weight:500;color:var(--muted)}.mode-control button[aria-pressed=true]{background:#293a43;color:#f0f8ed}.test-link{text-decoration:none;font-size:12px;white-space:nowrap}.market-strip{display:flex;gap:28px;align-items:center;padding:11px 24px 11px 84px;background:linear-gradient(100deg,#0d2533,#102a23 60%,#0d1822);border-bottom:1px solid var(--line);font-size:11px;overflow:auto;white-space:nowrap}.market-strip b{margin-left:9px;color:#e3f1ec;font-size:12px}.strip-label{font-size:9px;letter-spacing:1px;color:#a7bbb7}.offline-label{margin-left:auto;color:#c6d3c7}.workspace{display:flex;min-height:calc(100vh - 190px)}.sidebar{width:64px;flex-shrink:0;border-right:1px solid var(--line);background:#0b141d;display:flex;flex-direction:column;align-items:center;padding:17px 6px;gap:7px}.nav-button{position:relative;display:flex;align-items:center;justify-content:center;width:43px;height:40px;padding:8px;border-color:transparent;background:transparent;color:#9fb0bd}.nav-button.active{color:#dcf5c8;background:#24382c;border-color:#425540}.nav-button svg{width:21px;height:21px;stroke:currentColor;stroke-width:1.6;fill:none;stroke-linecap:round;stroke-linejoin:round}.nav-name{position:absolute;left:49px;white-space:nowrap;background:#253443;color:#fff;padding:7px 10px;border:1px solid var(--line);border-radius:5px;opacity:0;pointer-events:none;z-index:10}.nav-button:hover .nav-name,.nav-button:focus-visible .nav-name{opacity:1}main{flex:1;min-width:0;padding:27px 28px 86px}.page-head{display:flex;justify-content:space-between;align-items:flex-start;gap:18px;margin-bottom:23px}.eyebrow{font-size:10px;letter-spacing:1.7px;color:#a5bf9b;font-weight:600;margin-bottom:9px}.subhead{color:var(--muted);max-width:680px;font-size:13px;margin:0}.head-actions{display:flex;gap:8px;align-items:center}.tag{display:inline-block;font-size:10px;font-weight:600;letter-spacing:.4px;border:1px solid #48616b;color:#c7dfed;border-radius:4px;padding:4px 7px;white-space:nowrap}.chain-toolbar{display:flex;align-items:center;gap:14px;padding:14px 16px;background:var(--panel);border:1px solid var(--line);border-radius:8px 8px 0 0}.chain-toolbar select{width:145px;min-height:34px;padding:6px 8px;font-size:12px}.chain-toolbar strong{font-size:15px}.quote-state{margin-left:auto;color:#a4b8aa;font-size:11px}.table-scroll{overflow:auto;border:1px solid var(--line);border-top:0;border-radius:0 0 8px 8px}.chain-table{width:100%;border-collapse:collapse;min-width:790px;background:#0d151e}.chain-table th{font-weight:500;color:#abbcc9;padding:13px 11px;border-bottom:1px solid var(--line);font-size:11px;text-align:right;font-family:system-ui,sans-serif}.chain-table .group th{text-align:center;padding:10px;background:#152634;color:#cedce6;letter-spacing:.5px;font-size:11px}.chain-table td{padding:19px 11px;text-align:right;border-bottom:1px solid #26313c;font-size:13px}.chain-table tr:last-child td{border-bottom:0}.chain-table .strike{text-align:center;background:#1d2935;font-weight:700;color:#f0f4f6;font-size:14px;min-width:115px}.chain-table .group .strike{font-size:11px;font-weight:500}.chain-table td.call-tint{background:#11221c40}.chain-table td.put-tint{background:#18212e55}.chain-table .select-contract{background:transparent;color:var(--text);border:0;padding:5px 0;font-size:15px;font-family:inherit;text-decoration:underline;text-decoration-style:dotted;text-underline-offset:5px}.chain-table .select-contract:hover{color:var(--accent)}.depth-label{color:#b6c5cf;font-size:10px;display:block;margin-top:5px}.ticker-line{background:#15251e;border-bottom:1px solid #36523b;color:#c5dec0;text-align:center;font-size:11px;padding:8px}.chain-footer{display:flex;justify-content:space-between;gap:20px;padding:13px 0;color:var(--muted);font-size:11px}.chain-bottom{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:27px}.panel{background:var(--panel);border:1px solid var(--line);border-radius:9px;padding:21px}.panel.slim{padding:16px 19px}.panel p:last-child{margin-bottom:0}.empty-line{display:flex;justify-content:space-between;align-items:center;gap:20px}.empty-line .large-icon{width:46px;height:46px;color:var(--muted);border:1px solid var(--line);display:grid;place-items:center;border-radius:10px;font-size:23px}.primary{background:var(--accent);color:#13200f;border-color:var(--accent);font-weight:650}.secondary{background:#172432}.danger-outline{color:#ffc2c3;border-color:#835358;background:#2e1c23}.sell{background:#b84a52;color:white;border-color:#d4777d}.text-button{background:transparent;border:1px solid var(--line);color:#d0dce5}.ticket-layout{display:grid;grid-template-columns:minmax(310px,520px) minmax(260px,1fr);gap:22px;max-width:1100px;margin:auto}.ticket-label{font-size:11px;line-height:1.5;color:#dec596;background:#30291c;border:1px solid #615336;border-radius:6px;padding:10px 12px;margin-bottom:20px}.contract-heading{display:flex;gap:10px;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line);padding-bottom:16px;margin-bottom:20px}.contract-heading h2{margin:0;font-size:18px}.quote-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin:18px 0}.quote-grid small{display:block}.quote-grid strong{display:block;margin-top:5px;font-size:16px}.field-row{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:18px}.helper{font-size:11px;color:var(--muted);margin-top:7px;line-height:1.5}.check-label{display:flex;flex-direction:row;align-items:center;gap:9px;margin:10px 0}.form-section{border-top:1px solid var(--line);padding-top:17px;margin-top:18px}.money-line{display:flex;justify-content:space-between;gap:15px;margin:11px 0;font-size:13px}.money-line.total{font-size:16px;border-top:1px solid var(--line);margin-top:16px;padding-top:16px}.money-line span:first-child{color:#b8c7d1}.money-line.total span{color:var(--text)}.actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}.actions>*{flex:1;white-space:nowrap}.actions .back{flex:0 0 auto}.facts-stack{display:flex;flex-direction:column;gap:14px}.note-icon{font-size:20px;margin-bottom:13px;color:var(--blue)}.note-title{font-size:13px;margin:0 0 7px}.fact-list{margin:0;padding:0;list-style:none}.fact-list li{padding:12px 0;border-bottom:1px solid var(--line);color:#c0ced9;line-height:1.6;font-size:12px}.fact-list li:last-child{border-bottom:0}.error-box,.changed-box{padding:13px 15px;border:1px solid #81535a;background:#2c1b24;border-radius:7px;margin:15px 0;font-size:12px;color:#ffd0d3;line-height:1.6}.error-box ul{padding-left:17px;margin:5px 0}.changed-box{background:#30291b;border-color:#7e693f;color:#ffe0a5}.review-wrap{max-width:1120px;margin:auto}.review-header{background:#15241e;border:1px solid #3c5141;padding:18px 21px;border-radius:9px;margin-bottom:19px;display:flex;justify-content:space-between;gap:20px;align-items:center}.review-header h2{font-size:18px;margin:0 0 5px}.review-header p{margin:0;color:#bdd0c2;font-size:12px}.review-layout{display:grid;grid-template-columns:1.65fr 1fr;gap:18px}.review-column{display:flex;flex-direction:column;gap:18px}.metric-value{font-size:29px;letter-spacing:-.7px;line-height:1.25;margin:10px 0;color:#f5f9f4}.metric-label{font-size:11px;color:#c1cebc;text-transform:uppercase;letter-spacing:1px}.cost-chip{display:inline-block;background:#172430;padding:5px 8px;border-radius:4px;font-size:11px;color:#b7c8d6}.scenario-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:17px}.scenario-card{border:1px solid #3a4754;background:#0b141e;border-radius:7px;padding:14px 12px;min-height:130px}.scenario-card h3{font-size:11px;font-weight:500;color:#c1cfdb;margin-bottom:12px}.scenario-card strong{display:block;font-size:17px;font-weight:550;margin-bottom:7px}.scenario-card small{font-size:10px}.negative{color:#ffb0b3}.positive{color:#b9df9e}.neutral{color:#d8e2ea}.review-actions{background:#111d28;border:1px solid var(--line);padding:17px 20px;border-radius:9px;display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:18px}.review-actions .actions{margin:0}.fee-note{font-size:11px;color:#a7b8c6;line-height:1.6;margin-top:18px}.status-heading{display:flex;align-items:center;gap:12px;margin-bottom:18px}.status-icon{width:42px;height:42px;display:grid;place-items:center;background:#253440;border:1px solid #4b6271;border-radius:50%;font-size:20px}.status-badge{display:inline-block;background:#263745;border:1px solid #4b5d69;border-radius:4px;padding:5px 8px;font-size:11px;color:#e2ebf1}.status-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:19px 0;margin:20px 0}.status-grid small{display:block;margin-bottom:8px}.status-grid strong{font-weight:500}.history{padding-left:18px;color:#b9c9d6;font-size:12px;line-height:1.9}.list-table{width:100%;border-collapse:collapse;min-width:620px}.list-table td,.list-table th{text-align:left;padding:13px 12px;border-bottom:1px solid var(--line);font-size:12px}.list-table th{font-family:system-ui,sans-serif;color:var(--muted);font-weight:500}.table-panel{overflow:auto;padding:0}.empty{max-width:700px;margin:60px auto;text-align:center}.empty p{color:var(--muted)}.baseline-wrap{max-width:650px;margin:auto}.baseline-label{background:#283442;border:1px solid #4b5e70;padding:11px 13px;font-size:12px;border-radius:6px;margin-bottom:16px}.toast{position:fixed;left:50%;bottom:76px;transform:translateX(-50%);background:#e3eaf0;color:#14202c;border:1px solid white;border-radius:7px;padding:12px 20px;z-index:100;max-width:90vw;font-size:12px;box-shadow:0 6px 30px #0008}.evaluator{position:fixed;bottom:0;left:64px;right:0;background:#101b27;border-top:1px solid #53667a;z-index:20;box-shadow:0 -8px 28px #0004}.evaluator summary{cursor:pointer;padding:15px 25px;font-size:12px;font-weight:600;list-style-position:inside}.drawer-dot{display:inline-block;width:7px;height:7px;background:var(--blue);border-radius:50%;margin:0 7px}.summary-meta{font-weight:400;color:#a7b8c7;margin-left:14px;font-size:11px}.drawer-content{padding:0 25px 18px;max-height:65vh;overflow:auto}.policy-note{color:#c7d4df;font-size:12px;max-width:1080px}.controls-grid{display:grid;grid-template-columns:2fr 1fr 2fr 1fr;gap:12px;align-items:end;margin:14px 0}.fill-grid{grid-template-columns:2fr repeat(4,1fr)}.controls-grid button{font-size:12px;min-height:42px;padding:9px}.drawer-result{color:#d3e6c9;font-size:12px;border-left:2px solid #86ab72;padding:8px 12px;background:#18271f}.tests-main{max-width:1150px;margin:auto;padding:28px 20px}.test-summary{display:flex;gap:18px;margin:20px 0}.result-pass{color:#bfe5a3}.result-fail{color:#ffb5ba}.test-table{width:100%;border-collapse:collapse;font-size:12px}.test-table td,.test-table th{padding:10px 12px;border-bottom:1px solid var(--line);text-align:left}.test-table td:nth-child(2){min-width:95px}.test-table td:last-child{max-width:400px;overflow-wrap:anywhere}.inline-answer{background:#0b151f;padding:12px;border-radius:5px;color:#c5d3dd;font-size:12px;margin-top:10px}.info-row{display:flex;justify-content:space-between;gap:14px;align-items:center}.quiet-link{font-size:12px}.budget-value{max-width:220px}.testing-note{font-size:11px;color:var(--muted);padding:8px 0}.position-foot{margin-top:16px}.offscreen{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}
@media(min-width:1600px){main{padding-left:45px;padding-right:45px}.chain-table td{padding-top:25px;padding-bottom:25px}}
@media(max-width:1024px){.market-strip{gap:18px;padding-left:78px}.review-layout{grid-template-columns:1.3fr 1fr}.scenario-cards{gap:7px}.scenario-card{padding:12px 8px}.scenario-card strong{font-size:14px}.controls-grid{grid-template-columns:1fr 1fr}.fill-grid{grid-template-columns:repeat(3,1fr)}.ticket-layout{grid-template-columns:1fr 1fr}main{padding:23px 19px 85px}.wordmark{font-size:12px}.concept-tag{display:none}.topbar{gap:15px}}
@media(max-width:760px){.topbar{height:auto;min-height:62px;padding:13px 12px;flex-wrap:wrap;gap:10px}.wordmark{font-size:11px;letter-spacing:1px}.mode-control{margin-left:auto}.mode-control button{padding:6px 8px;font-size:11px}.test-link{font-size:11px}.market-strip{padding:10px 12px;gap:19px}.strip-label,.offline-label{display:none}.sidebar{width:47px;padding:12px 3px;gap:7px}.nav-button{width:35px;height:36px}.nav-button svg{width:19px;height:19px}.evaluator{left:47px}.evaluator summary{padding:14px 12px}.summary-meta{display:none}.drawer-content{padding:0 12px 12px}.controls-grid,.fill-grid{grid-template-columns:1fr 1fr}.ticket-layout,.review-layout,.chain-bottom{grid-template-columns:1fr}.page-head{flex-direction:column;gap:12px}h1{font-size:22px}main{padding:19px 12px 80px}.head-actions{width:100%}.panel{padding:17px}.review-header{padding:15px;align-items:flex-start}.review-actions{align-items:stretch;flex-direction:column;padding:15px}.review-actions .actions{flex-wrap:wrap}.review-actions .actions>*{flex:1}.scenario-cards{grid-template-columns:1fr}.scenario-card{min-height:0;display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:12px}.scenario-card h3{grid-column:1/-1;margin:0}.scenario-card strong{font-size:17px;margin:5px 0}.scenario-card small{text-align:right;margin-top:5px}.quote-state{display:none}.chain-toolbar{gap:9px;flex-wrap:wrap}.chain-toolbar strong{font-size:12px}.status-grid{grid-template-columns:1fr 1fr}.field-row{gap:10px}.actions{gap:8px}.actions button{padding:10px 12px;font-size:12px}.chain-footer{flex-direction:column;gap:7px}.metric-value{font-size:27px}.review-header .tag{display:none}.fee-note{font-size:10px}.drawer-content .small{font-size:10px}.ticket-label{font-size:10px}.quote-grid strong{font-size:14px}.baseline-label{font-size:11px}}
.concept-banner{position:sticky;top:0;z-index:40}
@media(prefers-reduced-motion:no-preference){button{transition:background .13s,filter .13s}}

/* v2: contextual onboarding, fully explained controls, and an observable order journey. */
.product-tab{background:transparent;border:0;border-bottom:2px solid #879b7f;border-radius:0;padding:12px 10px;color:#dce5eb;min-width:60px}.product-tab.active{color:#d3edc4;border-color:#a7d48a}.release-tag{font-size:10px;letter-spacing:.7px;color:#b2c3b4;border:1px solid #374a3c;padding:4px 7px;border-radius:4px}.header-tools{display:flex;gap:9px;margin-left:auto}.header-tools button{font-size:12px;padding:8px 11px}.evaluation-mode{width:max-content;margin:8px 0 14px}.topbar{gap:19px}.sidebar{width:174px;align-items:stretch;padding:17px 10px;gap:5px}.nav-kicker{font-size:9px;letter-spacing:1.8px;color:#9bafbd;padding:4px 9px 13px}.nav-button{width:100%;justify-content:flex-start;gap:11px;padding:9px 10px}.nav-button svg{width:18px;height:18px;flex:0 0 auto}.nav-name{position:static;opacity:1;pointer-events:auto;background:transparent;border:0;padding:0;color:inherit;font-size:12px;font-weight:500;white-space:normal}.evaluator{left:174px}.market-strip{padding-left:194px}.release-tag{white-space:nowrap}.home-wrap{max-width:1080px;margin:30px auto 0;padding:10px 14px 25px}.home-eyebrow{font-size:10px;letter-spacing:2.4px;color:#bdcfbd;display:flex;gap:12px;align-items:center;margin-bottom:28px}.home-eyebrow span{font-size:9px;letter-spacing:.5px;border:1px solid #405447;border-radius:3px;padding:4px 6px}.home-wrap h1{font-size:49px;line-height:1.18;letter-spacing:-1.8px;margin-bottom:25px;font-weight:650}.home-wrap h1>span{color:#a9beb1}.home-lead{color:#b3c4d0;max-width:650px;font-size:15px;line-height:1.8}.home-action{display:flex;align-items:center;gap:20px;margin-top:28px}.large-button{padding:13px 24px;min-width:155px;font-size:14px}.large-button span{margin-left:24px}.home-action>span{font-size:11px;color:#a9b9c6}.home-preview{margin-top:43px;border:1px solid #33493e;border-radius:11px;background:linear-gradient(115deg,#13232a,#111e22 60%,#12241c);overflow:hidden}.home-preview-top{display:flex;justify-content:space-between;gap:20px;border-bottom:1px solid #34443f;padding:15px 22px;font-size:9px;letter-spacing:1.4px;color:#bacdbf}.home-preview-row{display:grid;grid-template-columns:repeat(3,1fr)}.home-preview-row>div{padding:25px 22px;border-right:1px solid #34443f}.home-preview-row>div:last-child{border:0}.home-preview-row>div>span{font-size:11px;color:#a2b7a6;letter-spacing:1px}.home-preview-row h2{font-size:17px;margin:16px 0 9px}.home-preview-row p{font-size:12px;line-height:1.7;color:#afc0c7;margin:0}.home-footnote{font-size:11px;line-height:1.8;max-width:760px;color:#9eafba;margin-top:24px}.guide-coach{position:relative;display:flex;align-items:flex-start;gap:15px;padding:18px 44px 17px 18px;background:#132532;border:1px solid #3d5c72;border-radius:8px;margin:0 0 21px}.guide-coach .eyebrow{color:#b3cfe0;font-size:9px;margin-bottom:7px;letter-spacing:1.3px}.guide-coach h2{font-size:14px;margin:0 0 7px;font-weight:600}.guide-coach p{font-size:12px;line-height:1.75;color:#c0d1dc;margin:0;max-width:880px}.coach-symbol{border:1px solid #81a2b7;color:#c6dfec;flex:0 0 25px;width:25px;height:25px;display:grid;place-items:center;border-radius:50%;font-family:Georgia,serif;font-style:italic;font-size:17px}.coach-dismiss{position:absolute;right:10px;top:10px;padding:2px 7px;background:transparent;border:0;font-size:19px;color:#b6cbd9}.coach-links{display:flex;gap:15px;flex-wrap:wrap;margin-top:10px}.metric-link{display:inline-flex;align-items:center;gap:5px;vertical-align:middle;border:0;background:transparent;color:#c5d8e4;font-size:11px;padding:2px 0;font-weight:450;text-align:left}.metric-question{display:inline-grid;place-items:center;width:15px;height:15px;border:1px solid #8ca7b8;color:#cfdfeb;border-radius:50%;font-size:9px;line-height:1;font-family:system-ui,sans-serif;font-weight:600;flex:0 0 auto}.metric-inline{display:inline-flex;vertical-align:middle;margin-left:6px}.metric-field{position:relative}.metric-field>.metric-inline{position:absolute;top:0;right:0}.chain-table th .metric-inline{margin-left:4px}.chain-table .group .metric-link{margin-left:4px}.chain-table th small{font-size:9px;line-height:1.8;color:#a6b6c3}.chain-table th{white-space:nowrap}.expiry-control{border:0;background:transparent;font-size:10px;padding:3px 0;color:#d5e4ed}.expiry-control span{border:1px solid #86a0ae;padding:0 4px;border-radius:50%;margin-left:5px}.order-map>div:not(.eyebrow){display:flex;gap:16px;padding:10px 0;border-top:1px solid var(--line);font-size:12px;line-height:1.5}.order-map strong{flex:0 0 105px;font-size:12px}.order-map span{color:#b7c7d2}.fill-next{padding:18px;background:#172c25;border:1px solid #45634e;border-radius:8px;margin:22px 0}.fill-next>strong{font-size:14px;font-weight:550}.fill-next>p{font-size:12px;line-height:1.7;color:#bed0c4;margin:9px 0 14px}.fill-next>button{margin:0 10px 0 0}.fill-next #fill-feedback:empty{display:none}.payoff-explorer input[type=range]{width:100%;padding:0;min-height:30px;accent-color:#9bc27f;margin:15px 0 0}.range-endpoints{display:flex;justify-content:space-between;color:#a8b9c6;font-size:10px;font-family:ui-monospace,monospace}.explorer-readout{display:grid;grid-template-columns:1fr 1.5fr;gap:15px;border-top:1px solid var(--line);padding-top:17px;margin-top:18px}.explorer-readout small{display:block;font-size:10px;margin-bottom:7px}.explorer-readout strong{font-family:ui-monospace,monospace;font-size:17px;font-weight:500}.payoff-explorer .helper{margin-top:15px}.panel h3>.metric-inline{font-size:10px}.chain-toolbar>strong{display:flex;align-items:center;gap:7px}.chain-toolbar .small>.metric-link{margin-left:3px}
dialog{width:min(650px,calc(100vw - 32px));max-height:calc(100dvh - 44px);border:1px solid #49606b;border-radius:13px;background:#111b24;color:#edf3f6;padding:25px 29px;box-shadow:0 24px 100px #000b;overflow:auto}dialog::backdrop{background:#02070cbd;backdrop-filter:blur(5px)}dialog:not([open]){display:none}dialog h2{font-size:23px;letter-spacing:-.55px;line-height:1.35;margin:10px 0 20px}.dialog-head{display:flex;justify-content:space-between;align-items:center;gap:20px}.dialog-head .eyebrow{font-size:9px;margin:0;letter-spacing:1.4px}.dialog-close{padding:2px 8px;font-size:23px;font-weight:400;border:0;background:transparent;color:#c1d0da}.dialog-lead{font-size:14px;line-height:1.8;color:#c4d3dd}.dialog-actions{display:flex;gap:12px;justify-content:stretch;margin-top:24px}.dialog-actions>button{flex:1;font-size:12px;min-height:43px}.disclosure-quote{padding:0 0 5px}.disclosure-quote ul{padding-left:20px;margin:0}.disclosure-quote li{font-size:13px;line-height:1.8;color:#d8e2e9;margin-bottom:13px;padding-left:3px}.historical-note{background:#202b32;border:1px solid #46555b;border-radius:7px;padding:14px 16px}.historical-note strong{font-size:11px;font-weight:600;color:#d8e0d7}.historical-note p{font-size:11px;line-height:1.7;color:#b8c7cd;margin:7px 0}.historical-note small{font-size:10px;color:#afbdc7}.disclosure-ack{background:#edf2f6;color:#15212b;border-color:#edf2f6}.invite-points{display:flex;flex-direction:column;margin:25px 0 20px;border-top:1px solid #33444f}.invite-points>div{position:relative;padding:17px 0 15px 37px;border-bottom:1px solid #33444f}.invite-points>div>span{position:absolute;left:0;top:20px;font-size:10px;color:#a5c091;font-family:ui-monospace,monospace}.invite-points strong{font-size:13px;font-weight:550}.invite-points p{font-size:12px;line-height:1.7;color:#afc0cd;margin:5px 0 0}.selected-example{padding:16px 18px;border:1px solid #446045;background:#192b21;border-radius:7px;margin:20px 0}.selected-example>span{font-size:9px;color:#bfd3b4;letter-spacing:1.3px}.selected-example p{font-size:13px;line-height:1.8;color:#d0e1c7;margin:7px 0 0}.selected-example strong{font-size:13px}.meaning-caution{margin-top:19px;border-left:2px solid #8a9d84;padding:5px 15px}.meaning-caution strong{font-size:11px;letter-spacing:.2px}.meaning-caution p{font-size:12px;line-height:1.8;color:#afc1cb;margin:7px 0 0}.term-search-label{margin:19px 0 15px}.glossary-results{max-height:43vh;overflow:auto;padding-right:6px}.glossary-row{display:flex;align-items:center;gap:15px;justify-content:space-between;text-align:left;width:100%;background:#14212d;border:1px solid #30414e;margin-bottom:8px;padding:13px 15px}.glossary-row strong{display:block;font-size:12px;font-weight:600;color:#e1eaf1;margin-bottom:6px}.glossary-row small{display:block;font-size:11px;line-height:1.7}.glossary-row>span:last-child{color:#b3c4d0;font-size:17px}.mini-market{display:flex;flex-direction:column;gap:13px;border:1px solid var(--line);border-radius:7px;padding:16px;margin-top:20px}.mini-market>span{display:flex;justify-content:space-between;gap:20px;font-size:12px}.mini-market b{font-family:ui-monospace,monospace;font-weight:500}.mini-market small{font-size:10px}.sidebar-explainer h3{font-size:14px;font-weight:550;color:#b9cfa9;margin:0 0 13px}.table-scroll{scrollbar-color:#5c7182 #111c27}.coach-links>.metric-link:last-child{font-size:10px}
@media(max-width:1120px){.sidebar{width:151px}.evaluator{left:151px}.market-strip{padding-left:170px}.nav-button{padding-left:6px;gap:9px}.nav-name{font-size:11px}.home-wrap h1{font-size:41px}.wordmark{font-size:11px}.topbar{gap:12px}.release-tag{display:none}.header-tools{gap:6px}.chain-toolbar{gap:10px}.chain-toolbar strong{font-size:12px}}
@media(max-width:760px){.sidebar{width:47px;align-items:center;padding:12px 3px}.nav-button{width:35px;justify-content:center;padding:8px}.nav-name,.nav-kicker{display:none}.evaluator{left:47px}.market-strip{padding-left:12px}.header-tools{gap:7px}.header-tools button{font-size:10px;padding:6px 7px}.topbar{gap:8px;padding:10px 12px}.wordmark{font-size:10px;letter-spacing:.8px}.product-tab{font-size:11px;min-width:40px;padding:8px 6px}.test-link{font-size:10px}.home-wrap{margin:12px auto 0;padding:7px 0 12px}.home-wrap h1{font-size:31px;line-height:1.25;letter-spacing:-1px}.home-eyebrow{font-size:9px;margin-bottom:22px}.home-lead{font-size:12px;line-height:1.8}.home-action{align-items:flex-start;flex-direction:column;gap:13px}.home-preview{margin-top:27px}.home-preview-top{font-size:8px;padding:13px}.home-preview-row{grid-template-columns:1fr}.home-preview-row>div{padding:17px;border-right:0;border-bottom:1px solid #34443f}.home-preview-row h2{font-size:15px;margin:9px 0 5px}.home-preview-row p{font-size:11px}.home-footnote{font-size:10px}.guide-coach{gap:10px;padding:15px 27px 14px 12px}.coach-symbol{width:20px;height:20px;flex-basis:20px;font-size:14px}.guide-coach h2{font-size:13px}.guide-coach p{font-size:11px}.coach-links{gap:8px 12px}.coach-links>.metric-link{font-size:10px}.coach-dismiss{right:5px;top:5px}.chain-toolbar>strong{font-size:11px}.chain-toolbar select{width:141px}.chain-table th{font-size:10px}.metric-inline{margin-left:3px}.metric-question{width:14px;height:14px;font-size:8px}.fill-next{padding:15px}.fill-next>p{font-size:11px}.fill-next>button{font-size:11px;margin:6px 7px 0 0;padding:10px}.order-map>div:not(.eyebrow){gap:12px;font-size:11px}.order-map strong{flex-basis:92px;font-size:11px}.explorer-readout{grid-template-columns:1fr;gap:14px}.explorer-readout strong{font-size:17px}dialog{padding:20px 19px;width:calc(100vw - 24px);max-height:calc(100dvh - 24px);border-radius:10px}dialog h2{font-size:21px;line-height:1.35}.dialog-lead{font-size:13px}.dialog-actions{flex-direction:column;gap:9px}.dialog-actions>button{width:100%;flex:auto;min-height:43px}.dialog-head .eyebrow{font-size:8px}.disclosure-quote li{font-size:12px;line-height:1.75;margin-bottom:11px}.historical-note{padding:12px}.historical-note strong{font-size:10px}.historical-note p{font-size:10px}.historical-note small{font-size:9px}.invite-points{margin-top:19px}.invite-points>div{padding-top:13px;padding-bottom:12px}.invite-points>div>span{top:16px}.invite-points strong{font-size:12px}.invite-points p{font-size:11px}.evaluation-mode{width:auto}.header-tools{margin-left:0}.test-link{margin-left:auto}.chain-footer .metric-link{font-size:10px}}

/* P0: consequences first; optional details remain collapsed. */
[hidden]{display:none!important}.fee-estimate-notice{padding:6px 20px;text-align:center;background:#111d28;color:#c5d2dd;font-size:11px;border-bottom:1px solid var(--line)}
.review-essentials{display:grid;grid-template-columns:1fr 1fr;gap:14px}.essential-card h2{font-size:16px;margin-bottom:9px}.essential-card p{font-size:12px;line-height:1.65;color:#c1ced8;margin:12px 0 0}.essential-card .metric-value{font-size:27px}.estimate-tag{display:block;font-size:10px;line-height:1.5;color:#c4d0d9;font-family:system-ui,sans-serif;font-weight:400;letter-spacing:0}.cost-equation{font-variant-numeric:tabular-nums}
.decision-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:18px 0}.decision-actions .decision-button{background:#1a2a36;border:1px solid #7c939f;color:#edf4f7;font-weight:600;padding:13px 16px;min-height:46px;white-space:normal}.decision-actions .decision-button:hover{background:#293c48}.review-details{margin-top:20px}.review-detail{border:1px solid #394b59;border-radius:7px;background:#0f1923;margin-top:10px}.review-detail>summary{padding:15px 18px;cursor:pointer;font-size:13px;color:#d9e3ea}.detail-body{padding:2px 18px 18px}.detail-body p{font-size:12px;color:#bdcbd5}.detail-body .panel{margin-top:16px}.detail-body .scenario-cards{margin-top:10px}.area-summary{display:flex;gap:10px;flex-wrap:wrap;margin:16px 0}.area-summary>span{padding:9px;border:1px solid var(--line);border-radius:5px;font-size:12px}
@media(max-width:760px){.review-essentials{grid-template-columns:1fr}.decision-actions{grid-template-columns:1fr}.decision-actions .decision-button{width:100%}.fee-estimate-notice{font-size:10px;padding:6px 12px}}
````

## assets/js/engine.js

````javascript
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./fees.js'));
  else root.FTEngine = factory(root.FTFees);
}(typeof globalThis !== 'undefined' ? globalThis : this, function (Fees) {
  'use strict';
  var RULES={version:1, staleMs:30000, maxSpreadPercent:5, maxLots:100, maxPricePaise:1000000000};
  function positive(n){return Number.isSafeInteger(n)&&n>0;}
  function nonnegative(n){return Number.isSafeInteger(n)&&n>=0;}
  function error(code,message){return {code:code,message:message};}
  function money(p){return typeof p==='number'&&Number.isFinite(p)?'₹'+(p/100).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2}):'Unavailable';}
  function level(p){return typeof p==='number'&&Number.isFinite(p)?(p/100).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2}):'Unavailable';}
  function parsePaise(s){
    s=String(s).trim(); if(!/^\d+(\.\d{1,2})?$/.test(s))return null;
    var parts=s.split('.'), p=Number(parts[0])*100+Number(((parts[1]||'')+'00').slice(0,2));
    return nonnegative(p)&&p<=RULES.maxPricePaise?p:null;
  }
  function contractErrors(c,now){
    var e=[];
    if(!c||!c.id||!positive(c.lotSize)||!positive(c.tickPaise)||!positive(c.strikePaise)||
      !positive(c.expiryMs)||!['CE','PE'].includes(c.optionType)||c.version==null){return [error('METADATA','Contract metadata is missing or invalid.')];}
    if(c.assetType!=='INDEX'||c.settlement!=='CASH')e.push(error('UNSUPPORTED','Only cash-settled index option purchases are supported. Stock options and futures are outside this prototype.'));
    if(now>=c.expiryMs)e.push(error('EXPIRED','This contract has expired in the simulation.'));
    return e;
  }
  function quoteErrors(q,now,contractId){
    if(!q||q.contractId!==contractId||!nonnegative(q.asOfMs)||q.version==null)return [error('QUOTE','Quote metadata is unavailable or for another contract.')];
    var e=[];
    if(now-q.asOfMs>RULES.staleMs||q.asOfMs>now)e.push(error('STALE','Quote is stale or dated ahead of the simulation clock. Refresh and review again.'));
    if(!positive(q.askPaise)||!positive(q.askUnits)||!positive(q.bidPaise)||!positive(q.bidUnits))e.push(error('NO_BID','A two-sided executable quote is unavailable. An exit price cannot be assumed.'));
    else if(q.askPaise<q.bidPaise)e.push(error('CROSSED','Quote has an invalid crossed spread.'));
    else if((q.askPaise-q.bidPaise)*200>(q.askPaise+q.bidPaise)*RULES.maxSpreadPercent)e.push(error('SPREAD','Bid/ask spread exceeds the prototype threshold. Review is blocked.'));
    return e;
  }
  function orderErrors(c,o){
    var e=[]; if(!o||!c)return [error('ORDER','Select a contract and enter an order.')];
    if(o.contractId!==c.id)e.push(error('CONTRACT','Order and selected contract differ.'));
    if(!positive(o.lots)||o.lots>RULES.maxLots)e.push(error('QUANTITY','Lots must be a whole number from 1 to 100 (prototype limit).'));
    if(!positive(o.limitPaise)||o.limitPaise>RULES.maxPricePaise||o.limitPaise%c.tickPaise!==0)e.push(error('PRICE','Enter a positive limit price that matches the contract tick.'));
    if(!((o.intent==='OPEN'&&o.side==='BUY')||(o.intent==='CLOSE'&&o.side==='SELL')))e.push(error('OPEN_SELL','Opening option sales are outside this prototype. Selling to close an existing long is supported.'));
    if(!['LIMIT','SL_LIMIT'].includes(o.type)||o.validity!=='DAY'||o.product!=='SIM_CARRY')e.push(error('ORDER_TYPE','Only DAY limit orders and closing stop-limit orders are supported.'));
    if(o.type==='SL_LIMIT'&&(o.intent!=='CLOSE'||!positive(o.triggerPaise)||o.triggerPaise%c.tickPaise!==0||o.limitPaise>o.triggerPaise))e.push(error('STOP','A closing sell stop needs a positive, tick-valid trigger at or above its limit.'));
    return e;
  }
  function intrinsic(c,s){return c.optionType==='CE'?Math.max(s-c.strikePaise,0):Math.max(c.strikePaise-s,0);}
  function feeContext(p,q,intrinsicPerUnit){return {premiumPaise:p*q,intrinsicPaise:(intrinsicPerUnit||0)*q};}
  function expiry(c,p,q,s,fees){
    if(!nonnegative(s)||!positive(p)||!positive(q))throw new Error('Invalid expiry calculation input.');
    var payoff=intrinsic(c,s)*q,premium=p*q;
    if(!Number.isSafeInteger(payoff)||!Number.isSafeInteger(premium))throw new Error('Calculation exceeds integer bounds.');
    return payoff-premium-Fees.path(fees,'SETTLEMENT',feeContext(p,q,0),{premiumPaise:payoff,intrinsicPaise:payoff});
  }
  function breakEven(c,p,q,fees){
    var zero={premiumPaise:0,intrinsicPaise:0},entry=feeContext(p,q,0);
    if(Fees.flatPath(fees)){
      var cost=Fees.path(fees,'SETTLEMENT',entry,zero);
      var numerator=c.optionType==='CE'?(c.strikePaise+p)*q+cost:(c.strikePaise-p)*q-cost;
      var root=(c.optionType==='CE'||numerator>=0)?numerator/q:null;
      return {root:root,numerator:numerator,denominator:q,status:root===null?'NO_FEASIBLE':'SOLVED',
        threshold:root===null?null:(c.optionType==='CE'?Math.ceil(root):Math.floor(root)),
        canProfit:c.optionType==='CE'||numerator>0};
    }
    if(!Fees.monotoneSettlement(fees,q))return {root:null,status:'UNSUPPORTED_FEES',canProfit:null,threshold:null};
    var call=c.optionType==='CE',lo=call?c.strikePaise:0,hi=call?RULES.maxPricePaise:c.strikePaise;
    var lower=expiry(c,p,q,lo,fees),upper=expiry(c,p,q,hi,fees);
    if((call&&upper<0)||(!call&&lower<0))return {root:null,status:call?'OUTSIDE_RANGE':'NO_FEASIBLE',canProfit:false,threshold:null};
    while(lo<hi){var mid=call?Math.floor((lo+hi)/2):Math.ceil((lo+hi)/2);var net=expiry(c,p,q,mid,fees);
      if(call){if(net>=0)hi=mid;else lo=mid+1;}else{if(net>=0)lo=mid;else hi=mid-1;}}
    return {root:lo,threshold:lo,status:'SOLVED_GRID',numerator:null,denominator:null,
      canProfit:call?upper>0:lower>0,residualPaise:expiry(c,p,q,lo,fees)};
  }
  function analyse(c,o,fees){
    if(!Fees.valid(fees))throw new Error('Fees unavailable; costs are not zero.');
    var errs=orderErrors(c,o);if(errs.length)throw new Error(errs[0].message);
    var q=o.lots*c.lotSize,p=o.limitPaise,premium=q*p;
    if(!Number.isSafeInteger(premium)||!Number.isSafeInteger(c.strikePaise*q))throw new Error('Calculation exceeds integer bounds.');
    var entryCtx=feeContext(p,q,0),zero={premiumPaise:0,intrinsicPaise:0};
    var entryFee=Fees.charge(fees,'ENTRY',entryCtx),be=breakEven(c,p,q,fees);
    if(!nonnegative(premium+entryFee))throw new Error('Entry funds exceed integer bounds.');
    var bePayoff=be.root==null?0:intrinsic(c,be.threshold)*q;
    var path=Fees.path(fees,'SETTLEMENT',entryCtx,{premiumPaise:bePayoff,intrinsicPaise:bePayoff});
    var atZero=Fees.path(fees,'SETTLEMENT',entryCtx,zero),exitZero=Fees.path(fees,'EXIT',entryCtx,zero);
    var maxTotal=Fees.supportsBound(fees)?premium+Math.max(exitZero,atZero):null;
    return {units:q,premiumPaise:premium,entryFeePaise:entryFee,entryFundsPaise:premium+entryFee,
      feeLabel:Fees.label(fees),feeProfileId:fees.id,entryBreakdown:Fees.quote(fees,'ENTRY',entryCtx).items,
      expiryPathFeePaise:path,zeroPayoffPathFeePaise:atZero,exitPathFeePaise:Fees.path(fees,'EXIT',entryCtx,entryCtx),grossMaxLossPaise:premium,
      maxLossIncludingCostsPaise:maxTotal,grossBreakEvenPaise:c.optionType==='CE'?c.strikePaise+p:c.strikePaise-p,
      breakEvenPaise:be.root,breakEvenStatus:be.status,breakEvenResidualPaise:be.residualPaise||0,
      breakEvenNumerator:be.numerator,breakEvenDenominator:be.denominator,thresholdPaise:be.threshold,
      canProfitAtExpiry:be.canProfit,grossMaxProfitPaise:c.optionType==='PE'?q*(c.strikePaise-p):null,
      netMaxProfitPaise:c.optionType==='PE'?expiry(c,p,q,0,fees):null};
  }
  function preflight(c,o,q,fees,context,now){
    var e=contractErrors(c,now);e=e.concat(orderErrors(c,o));
    if(c)e=e.concat(quoteErrors(q,now,c.id));
    if(!Fees.valid(fees))e.push(error('FEES','Fees are missing. A cost-aware review cannot be completed.'));
    if(e.length)return {ok:false,errors:e,analysis:null};
    var a;try{a=analyse(c,o,fees);}catch(err){return {ok:false,errors:[error('CALC',err.message)],analysis:null};}
    if(o.intent==='OPEN'&&['UNSUPPORTED_FEES','OUTSIDE_RANGE'].includes(a.breakEvenStatus))e.push(error('FEES_MODEL','Cost-aware breakeven cannot be verified for this fee model or search range. Submission is blocked.'));
    if(o.intent==='OPEN'){
      if(!context||!nonnegative(context.availablePaise)||a.entryFundsPaise>context.availablePaise)e.push(error('FUNDS','Available simulated funds do not cover entry funds at the limit.'));
      if(context&&context.lossBudgetPaise!=null){
        if(!nonnegative(context.lossBudgetPaise))e.push(error('BUDGET_INPUT','Enter a non-negative rupee budget or choose not sure.'));
        else if(a.maxLossIncludingCostsPaise==null)e.push(error('BUDGET_UNKNOWN','A bounded cost comparison is unavailable.'));
        else if(a.maxLossIncludingCostsPaise>context.lossBudgetPaise)e.push(error('BUDGET','Exposure including the stated single-exit costs exceeds your entered loss budget. Edit, explicitly change your budget, or back out.'));
      }
    }
    return {ok:e.length===0,errors:e,analysis:a};
  }
  function realised(p,e,q,fees){
    if(!positive(p)||!nonnegative(e)||!positive(q))throw new Error('Invalid realised P&L inputs.');
    return q*(e-p)-Fees.path(fees,'EXIT',feeContext(p,q,0),feeContext(e,q,0));
  }
  return {RULES:RULES,money:money,level:level,parsePaise:parsePaise,positive:positive,nonnegative:nonnegative,
    contractErrors:contractErrors,quoteErrors:quoteErrors,orderErrors:orderErrors,analyse:analyse,
    preflight:preflight,expiry:expiry,realised:realised,intrinsic:intrinsic,feeContext:feeContext};
}));
````

## assets/js/explain.js

````javascript
(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./engine.js'));
  else root.FTExplain=factory(root.FTEngine);
}(typeof globalThis!=='undefined'?globalThis:this,function(E){
  'use strict';
  function contract(c){return c.underlying+' · '+E.level(c.strikePaise)+' '+c.optionType;}
  function facts(c,o,a){
    var unavailable=a.breakEvenStatus==='UNSUPPORTED_FEES'||a.breakEvenStatus==='OUTSIDE_RANGE';
    return {
      identity:contract(c)+' · Synthetic',
      quantity:o.lots+' lot'+(o.lots===1?'':'s')+' × '+c.lotSize+' units = '+a.units+' units',
      entry:'Your entry outlay at the limit is '+E.money(a.entryFundsPaise)+': '+E.money(a.premiumPaise)+' premium + '+E.money(a.entryFeePaise)+' entry fees. '+a.feeLabel+'. Only filled units are bought; a limit may stay unfilled.',
      exposure:'Max loss of premium: the full '+E.money(a.grossMaxLossPaise)+' can be lost. Costs are additional.',
      boundary:a.maxLossIncludingCostsPaise==null?'An all-in maximum loss is unavailable for this fee model. The full premium remains at risk; exit and settlement costs depend on the path.':
        E.money(a.maxLossIncludingCostsPaise)+' including this profile’s costs for one entry and one exit or settlement; '+a.feeLabel+'. Separate additional exit orders add fees.',
      expiry:a.breakEvenPaise==null?(unavailable?'Breakeven at expiry is unavailable: this fee model or the numerical search range does not support a verified threshold.':'No feasible breakeven at expiry at a non-negative settlement level under these costs.'):
        'Breakeven at expiry: approximately '+E.level(a.breakEvenPaise)+'. For net profit, '+c.underlying+' must settle '+(c.optionType==='CE'?'above ':'below ')+'that level under the stated entry and settlement fees; '+a.feeLabel+'.'+(a.canProfitAtExpiry?'':' No non-negative settlement level produces a net profit.'),
      before:'Before expiry, profit or loss depends on the option’s exit premium, time remaining, and volatility. A move in the underlying’s expected direction does not ensure a profit.',
      exit:'To exit, sell the same option units you hold. A pending exit leaves the position open. A limit can remain unfilled; a stop-limit can trigger without filling and does not cap the loss at your intended amount.',
      cancel:'Cancelling an unfilled order releases its reservation. Cancelling the remainder of a partially filled order leaves the filled position open.'
    };
  }
  var STATES={PENDING:'Submitted is not filled. The order is pending; a matching execution may not occur.',
    PARTIAL:'Some units are filled. The remainder is still pending.',CANCELLED:'Only the unfilled remainder was cancelled. Any filled position remains.',
    REJECTED:'The remaining units were rejected. Any existing fills remain.',EXPIRED:'The DAY remainder expired without filling.',
    TRIGGER_WAIT:'Waiting for the stop trigger. The position remains open.',FILLED:'The recorded units have executed at their actual fill price.',
    OPEN:'The filled option units remain open until a closing sale fills or settlement occurs.',CLOSED:'No units remain open in this position.',
    SETTLED:'Synthetic cash settlement is complete. No units remain open.'};
  function stateInfo(state){return STATES[state]||'No supported order state is available.';}
  function blocked(){return {entry:'Entry outlay unavailable until the missing or invalid data is resolved.',
    exposure:'Max loss including costs is unavailable; missing charges are not treated as zero.',
    expiry:'Breakeven at expiry is unavailable. No profit condition is inferred.',
    exit:'To exit an existing position, a closing sale must fill. This blocked review sends no order.'};}
  function answer(question){
    return /strike|which|recommend|buy|pick|suggest|suitab|forecast/i.test(question)?
      'This tool reviews the order you chose. It does not choose a strike, contract, price, or position size, or forecast returns.':
      'This tool explains the selected order’s outlay, exposure, expiry outcomes, and exit mechanics using synthetic data.';
  }
  return {facts:facts,contract:contract,answer:answer,stateInfo:stateInfo,states:STATES,blocked:blocked};
}));
````

## assets/js/fee-config.js

````javascript
(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory();
  else root.FTFeeConfig=factory();
}(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  // All values below are invented. Explicit zero rates are demo assumptions, not missing real costs.
  var categories=['brokerage','statutory','exchange','gst','stamp'];
  function flatRows(){return categories.map(function(category){return {
    id:category,category:category,name:category==='brokerage'?'Invented fixed demo charge':category+' (synthetic zero)',
    fixedPaise:category==='brokerage'?2500:0,ratePpm:0,
    base:category==='gst'?'COMPONENTS':'PREMIUM',basisCategories:category==='gst'?['brokerage','exchange']:[],
    minPaise:0,capPaise:null,condition:'ALWAYS',rounding:'HALF_UP',roundToPaise:1
  };});}
  var DEMO={id:'synthetic-adapter-v1',version:1,schemaVersion:2,
    name:'Synthetic demo fees (not Nubra\'s charges)',synthetic:true,verified:false,bounded:true,
    effectiveDate:'Synthetic only',events:{ENTRY:flatRows(),EXIT:flatRows(),SETTLEMENT:flatRows()}};
  // Fill every field and provide explicit rules per side. This incomplete record cannot be activated.
  var NUBRA={id:'nubra-unverified',version:1,schemaVersion:2,synthetic:false,verified:false,bounded:false,
    name:'[FILL: Nubra plan / tariff name]',effectiveDate:'[FILL: effective date]',
    source:'[FILL: pricing URL and captured date]',verification:'[FILL: independent calculation / reviewer]',
    events:{ENTRY:'[FILL: BUY brokerage, statutory, exchange, GST, stamp rows]',
      EXIT:'[FILL: SELL-to-close rows; bases, rates, caps and rounding]',
      SETTLEMENT:'[FILL: expiry/exercise rows including ITM and zero-payoff treatment]'}};
  return {ACTIVE:'DEMO',DEMO:DEMO,NUBRA:NUBRA,categories:categories};
}));
````

## assets/js/fees.js

````javascript
(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./fee-config.js'));
  else root.FTFees=factory(root.FTFeeConfig);
}(typeof globalThis!=='undefined'?globalThis:this,function(Config){
  'use strict';
  // Named, unchanged flat-fee regression. Existing fixtures deliberately keep this representation.
  var LEGACY_FLAT={id:'synthetic-fixed-v1',version:1,name:"Synthetic demo fees (not Nubra's charges)",
    entryPaise:2500,exitPaise:2500,settlementPaise:2500,per:'ORDER',bounded:true,synthetic:true};
  var EVENTS=['ENTRY','EXIT','SETTLEMENT'];
  function integer(n){return Number.isSafeInteger(n)&&n>=0;}
  function clone(x){return JSON.parse(JSON.stringify(x));}
  function structured(p){return !!p&&p.schemaVersion===2;}
  function valid(p){
    if(!p||!p.id||p.version==null)return false;
    if(!structured(p))return p.per==='ORDER'&&['entryPaise','exitPaise','settlementPaise'].every(function(k){return integer(p[k]);});
    if(!p.synthetic&&!p.verified)return false;
    if(!p.events)return false;
    return EVENTS.every(function(event){
      var rows=p.events[event],ids={};if(!Array.isArray(rows)||!rows.length)return false;
      if(!Config.categories.every(function(cat){return rows.some(function(r){return r.category===cat;});}))return false;
      return rows.every(function(r){
        if(!r.id||ids[r.id])return false;ids[r.id]=true;
        return Config.categories.includes(r.category)&&integer(r.fixedPaise)&&integer(r.ratePpm)&&r.ratePpm<=1000000&&
          ['PREMIUM','INTRINSIC','COMPONENTS'].includes(r.base)&&
          (r.base!=='COMPONENTS'||(r.category==='gst'&&Array.isArray(r.basisCategories)&&r.basisCategories.length>0&&r.basisCategories.every(function(cat){return Config.categories.includes(cat)&&cat!=='gst';})))&&
          (r.category!=='gst'||r.base==='COMPONENTS')&&
          integer(r.minPaise)&&(r.capPaise===null||(integer(r.capPaise)&&r.capPaise>=r.minPaise))&&
          ['ALWAYS','ITM'].includes(r.condition)&&['HALF_UP','CEIL','FLOOR'].includes(r.rounding)&&integer(r.roundToPaise)&&r.roundToPaise>0;
      });
    });
  }
  function roundRatio(numerator,denominator,method,step){
    var d=BigInt(denominator)*BigInt(step),n=BigInt(numerator),q=n/d,r=n%d;
    if(method==='CEIL'&&r>0n)q++;if(method==='HALF_UP'&&r*2n>=d)q++;
    var out=Number(q*BigInt(step));if(!Number.isSafeInteger(out))throw new Error('Fee exceeds integer bounds.');return out;
  }
  function quote(p,event,ctx){
    if(!valid(p)||!EVENTS.includes(event))throw new Error('Missing or invalid fee profile/event. Costs cannot be calculated.');
    if(!structured(p)){var flat=p[{ENTRY:'entryPaise',EXIT:'exitPaise',SETTLEMENT:'settlementPaise'}[event]];return {totalPaise:flat,items:[{id:'flat-regression',category:'aggregate',amountPaise:flat}],synthetic:!!p.synthetic};}
    ctx=ctx||{};if(!integer(ctx.premiumPaise)||!integer(ctx.intrinsicPaise))throw new Error('Fee bases are missing or invalid.');
    var items=[],sums={};
    p.events[event].slice().sort(function(a,b){return (a.category==='gst')-(b.category==='gst');}).forEach(function(r){
      var base=r.base==='PREMIUM'?ctx.premiumPaise:r.base==='INTRINSIC'?ctx.intrinsicPaise:r.basisCategories.reduce(function(s,k){return s+(sums[k]||0);},0);
      if(!integer(base))throw new Error('Fee base exceeds integer bounds.');
      var value=0;
      if(r.condition==='ALWAYS'||ctx.intrinsicPaise>0){
        value=roundRatio(BigInt(r.fixedPaise)*1000000n+BigInt(base)*BigInt(r.ratePpm),1000000,r.rounding,r.roundToPaise);
        value=Math.max(r.minPaise,value);if(r.capPaise!==null)value=Math.min(r.capPaise,value);
      }
      sums[r.category]=(sums[r.category]||0)+value;if(!integer(sums[r.category]))throw new Error('Fee component exceeds integer bounds.');items.push({id:r.id,category:r.category,name:r.name||r.id,basePaise:base,amountPaise:value});
    });
    var total=items.reduce(function(s,r){return s+r.amountPaise;},0);if(!integer(total))throw new Error('Fee total exceeds integer bounds.');
    return {totalPaise:total,items:items,synthetic:!!p.synthetic};
  }
  function charge(p,event,ctx){return quote(p,event,ctx).totalPaise;}
  function path(p,event,entryCtx,endCtx){return charge(p,'ENTRY',entryCtx)+charge(p,event,endCtx);}
  function active(){var p=Config[Config.ACTIVE];return valid(p)?clone(p):null;}
  function flatPath(p){return !structured(p)||EVENTS.every(function(e){return p.events[e].every(function(r){return r.ratePpm===0&&r.condition==='ALWAYS';});});}
  // A conservative proof condition for a single path: entry depends only on entry premium;
  // closing/settlement fee can grow by <1 rupee per rupee of payoff. Discontinuous ITM fees fail closed.
  function supportsBound(p){
    if(!valid(p)||!p.bounded)return false;if(!structured(p))return true;
    if(!flatPath(p))return false;
    if(p.events.ENTRY.some(function(r){return r.base==='INTRINSIC'||r.condition!=='ALWAYS';}))return false;
    return ['EXIT','SETTLEMENT'].every(function(e){
      var rows=p.events[e];if(rows.some(function(r){return r.condition!=='ALWAYS';}))return false;
      var slope=rows.filter(function(r){return r.category!=='gst';}).reduce(function(s,r){return s+r.ratePpm;},0);
      var gst=rows.filter(function(r){return r.category==='gst';}).reduce(function(s,r){return s+r.ratePpm;},0);
      return slope*(1+gst/1000000)<1000000;
    });
  }
  function monotoneSettlement(p,units){
    if(!valid(p))return false;if(!structured(p))return true;
    if(p.events.ENTRY.some(function(r){return r.base==='INTRINSIC'||r.condition!=='ALWAYS';}))return false;
    var rows=p.events.SETTLEMENT;if(rows.some(function(r){return r.condition!=='ALWAYS';}))return false;
    var deltas={},total=0;
    rows.filter(function(r){return r.category!=='gst';}).forEach(function(r){
      var delta=r.ratePpm?Math.ceil(units*r.ratePpm/1000000)+r.roundToPaise:0;
      deltas[r.category]=(deltas[r.category]||0)+delta;total+=delta;
    });
    rows.filter(function(r){return r.category==='gst';}).forEach(function(r){
      var base=r.basisCategories.reduce(function(s,k){return s+(deltas[k]||0);},0);
      total+=r.ratePpm?Math.ceil(base*r.ratePpm/1000000)+r.roundToPaise:0;
    });
    return total<units;
  }
  function label(p){return p&&p.synthetic?'estimate - synthetic fee profile':'estimate - configured fee profile';}
  return {DEMO:LEGACY_FLAT,LEGACY_FLAT:LEGACY_FLAT,CONFIG:Config,structured:structured,valid:valid,quote:quote,charge:charge,path:path,
    active:active,flatPath:flatPath,supportsBound:supportsBound,monotoneSettlement:monotoneSettlement,label:label};
}));
````

## assets/js/fixtures.js

````javascript
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./fees.js'));
  else root.FTFixtures = factory(root.FTFees);
}(typeof globalThis !== 'undefined' ? globalThis : this, function (Fees) {
  'use strict';
  var CLOCK = Date.parse('2026-10-26T13:00:00+05:30');
  var EXPIRY = Date.parse('2026-10-27T15:30:00+05:30');
  var contracts = [
    { id:'A', underlying:'DEMO INDEX', assetType:'INDEX', optionType:'CE', strikePaise:2260000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Normal call' },
    { id:'B', underlying:'DEMO INDEX', assetType:'INDEX', optionType:'PE', strikePaise:2260000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Normal put' },
    { id:'E', underlying:'DEMO INDEX', assetType:'INDEX', optionType:'CE', strikePaise:2250000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Synthetic lower-strike call' },
    { id:'F', underlying:'DEMO INDEX', assetType:'INDEX', optionType:'PE', strikePaise:2250000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Synthetic lower-strike put' },
    { id:'G', underlying:'DEMO INDEX', assetType:'INDEX', optionType:'CE', strikePaise:2270000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Synthetic higher-strike call' },
    { id:'H', underlying:'DEMO INDEX', assetType:'INDEX', optionType:'PE', strikePaise:2270000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Synthetic higher-strike put' },
    { id:'C', underlying:'DEMO INDEX', assetType:'INDEX', optionType:'CE', strikePaise:2270000, lotSize:65, tickPaise:5, settlement:'CASH', role:'No-bid example' },
    { id:'D', underlying:'DEMO BANK', assetType:'STOCK', optionType:'PE', strikePaise:76000, lotSize:650, tickPaise:5, settlement:'PHYSICAL', role:'Restricted stock option' },
    { id:'REG-C', underlying:'REGRESSION INDEX', assetType:'INDEX', optionType:'CE', strikePaise:2260000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Inferred-price regression: call' },
    { id:'REG-P', underlying:'REGRESSION INDEX', assetType:'INDEX', optionType:'PE', strikePaise:2260000, lotSize:65, tickPaise:5, settlement:'CASH', role:'Inferred-price regression: put' },
    { id:'GOLD-C', underlying:'ARITHMETIC INDEX', assetType:'INDEX', optionType:'CE', strikePaise:2000000, lotSize:50, tickPaise:5, settlement:'CASH', role:'K 20,000 arithmetic: call' },
    { id:'GOLD-P', underlying:'ARITHMETIC INDEX', assetType:'INDEX', optionType:'PE', strikePaise:2000000, lotSize:50, tickPaise:5, settlement:'CASH', role:'K 20,000 arithmetic: put' }
  ].map(function(c) { c.expiryMs=EXPIRY; c.version=1; c.synthetic=true; c.exchange='SIM'; return c; });
  function quote(id) {
    var pairs = { A:[10000,10020], B:[9180,9200], E:[16000,16020], F:[5180,5200], G:[5500,5520], H:[14680,14700], C:[null,5000], D:[7100,7160],
      'REG-C':[15025,15045], 'REG-P':[7875,7895], 'GOLD-C':[9980,10000], 'GOLD-P':[9980,10000] };
    var p=pairs[id]; if(!p) return null;
    return {contractId:id, spotPaise:id==='D'?68800:id.indexOf('GOLD')===0?2000000:2260820,
      bidPaise:p[0], askPaise:p[1], bidUnits:p[0]===null?0:1300, askUnits:1300,
      ltpPaise:p[1], asOfMs:CLOCK, version:1, source:'SYNTHETIC', synthetic:true};
  }
  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  return { CLOCK:CLOCK, EXPIRY:EXPIRY, contracts:contracts, clone:clone,
    contract:function(id) { var c=contracts.find(function(c){return c.id===id;});return c?clone(c):null; },
    stats:function(id){var map={A:[1340,320],B:[246,617],E:[1720,445],F:[530,285],G:[990,360],H:[1140,504],C:[110,29]};var v=map[id]||[100,25];var q=quote(id);return {oiContracts:v[0],volumeContracts:v[1],ltpPaise:q?q.ltpPaise:null,previousClosePaise:q?Math.max(5,q.ltpPaise-25):null,lowPaise:q?Math.max(5,q.ltpPaise-60):null,highPaise:q?q.ltpPaise+40:null};},
    quote:quote, fees:function(){return clone(Fees.LEGACY_FLAT);}, activeFees:function(){return Fees.active();},
    order:function(id, lots) {return {contractId:id,lots:lots||1,side:'BUY',intent:'OPEN',type:'LIMIT',
      limitPaise:quote(id).askPaise,validity:'DAY',product:'SIM_CARRY',triggerPaise:null};} };
}));
````

## assets/js/guide.js

````javascript
(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./engine.js'));
  else root.FTGuide=factory(root.FTEngine);
}(typeof globalThis!=='undefined'?globalThis:this,function(E){
  'use strict';
  // Explanations describe mechanics. None select a contract or predict its return.
  var terms={
    spot:['Index level','The current reference level of the underlying index. You are buying an option on this index, not the index itself.','A change in the index does not translate one-for-one into an option’s price.'],
    strike:['Strike','The contract’s reference level used to calculate its value at expiry.','Strike is not your total cost and is not the same as cost-adjusted breakeven.'],
    call:['Call / CE','For this cash-settled index call, expiry payoff per unit is the index settlement level minus strike, or zero if that difference is negative.','A rise that does not cover your premium and costs can still leave a loss.'],
    put:['Put / PE','For this cash-settled index put, expiry payoff per unit is strike minus the index settlement level, or zero if that difference is negative.','A fall that does not cover your premium and costs can still leave a loss.'],
    premium:['Premium','The option’s price per unit. Multiply it by total units to calculate the premium committed.','A low per-unit number is not the total order cost. The full premium can be lost.'],
    ltp:['LTP','Last traded price: the price of the most recent completed trade in the contract.','It is not necessarily a price available for your next purchase or exit.'],
    bid:['Bid','The highest currently displayed price offered by buyers for the option. A closing sale needs a matching buyer.','Displayed size is limited. A quote can change or disappear before execution.'],
    ask:['Ask / offer','The lowest currently displayed price at which sellers offer this option.','An offer may change before execution. The price and available size can change.'],
    spread:['Bid–ask spread','The difference between the displayed ask and bid. Entering at ask and immediately selling at bid can create a loss before fees.','A larger spread makes displayed-price estimates less useful. This demo blocks a spread over 5% of midpoint as a prototype policy.'],
    oi:['Open interest','Outstanding contracts that have not yet been closed or settled. Here OI is displayed in contracts, not units.','OI is not today’s trading volume and does not select a purchase or sale.'],
    volume:['Volume','The number of contracts traded during the illustrated session.','Volume is not outstanding open interest, a forecast, or a guarantee that your order will fill.'],
    oiChange:['OI change','The change in outstanding contracts compared with the stated earlier snapshot.','Positive OI change alone does not prove that prices will rise or fall.'],
    priceChange:['Price change','The difference between the illustrated LTP and previous close. The percentage uses previous close as its denominator.','Past price movement does not predict the next move. These values are synthetic.'],
    dayRange:['Session range','The lowest and highest illustrated traded premiums during this synthetic session.','The next price is not constrained by this past range.'],
    expiry:['Expiry','The date and time the option ends. This index-option demo uses cash settlement at a separately supplied settlement level.','Time matters: an option can lose value as time passes. Dates and the settlement event here are synthetic.'],
    lots:['Lots','How many contract-sized blocks you choose. This instrument has a defined number of units in each lot.','One lot is the minimum form value, not a suggested or necessarily affordable position.'],
    lotSize:['Lot size','The number of units in one lot. It comes from the instrument’s contract specification, not your preferred trade size.','The lot sizes here are fixture values, not verified current exchange specifications.'],
    units:['Total units','Number of lots multiplied by units per lot. Premium and expiry payoff are calculated on all these units.','Do not confuse units with lots or per-unit premium with total premium.'],
    tick:['Tick size','The smallest allowed price increment for this fixture. The ticket rejects prices that do not match it.','This prototype does not silently round an order to another price.'],
    limit:['Limit price','The maximum premium per unit you choose to pay on a purchase, or minimum you choose to accept on a closing sale.','It controls price, not execution. A limit order may stay pending.'],
    day:['DAY validity','An unfilled order or remainder expires at the end of its applicable trading day.','This simplified simulator processes outstanding remainders when you run its expiry event; it does not reproduce a broker’s full daily schedule.'],
    carry:['Simulated carry','The demo allows an opened position to remain until you close it or process the synthetic expiry.','It does not model intraday square-off schedules or authorise real overnight trading.'],
    cash:['Cash settlement','At expiry this index-option fixture pays its intrinsic value in cash. No underlying shares are delivered.','This does not describe stock-option settlement. Dates, levels and the event in this demo are synthetic.'],
    budget:['Your loss budget','An optional amount you enter to compare with this order’s full premium exposure and stated costs.','It does not cap the executed loss or determine your position size. You can choose not sure.'],
    fees:['Charges','The default invented profile charges ₹25 per entry order and ₹25 per separate closing order or settlement. The adapter also supports explicit turnover and settlement bases.','These are not Nubra’s charges. Real fees can depend on side, turnover, broker plan, date and exit versus exercise.'],
    entryFunds:['Entry funds','Premium at your chosen purchase limit plus entry charges. This is what the pending purchase reserves.','Later exit or settlement charges are separate. Entry funds are not the same as full-path loss exposure.'],
    maxLoss:['Gross premium at risk','For the supported purchased option, the entire purchase premium can be lost.','A capped amount is not a low probability of losing it. Costs add to the loss.'],
    netLoss:['Including costs','Premium at risk plus the stated costs for one entry and one closing order or settlement.','More separate closing orders add fees. An entered loss budget or stop does not guarantee a smaller loss.'],
    breakeven:['Breakeven at expiry','The underlying settlement level where expiry payoff just recovers premium and the stated entry/settlement costs.','It applies at expiry, not to the option’s trading price before expiry. Rounded levels may leave a few paise of difference.'],
    maxProfit:['Maximum profit','For a purchased put on a non-negative index, maximum profit is finite: units × (strike − premium), less applicable costs.','An unbounded theoretical call payoff is not a predicted or likely return.'],
    available:['Available funds','Synthetic cash not currently reserved for pending purchases.','Available funds do not establish that a trade is appropriate for a person.'],
    reserved:['Reserved funds','Money held for the unfilled part of a purchase order, including the entry fee if it has not yet been charged.','Cancelling a remainder releases that reservation; it does not reverse filled purchases.'],
    position:['Position','The units you actually hold after an opening order fills.','A submitted or pending order is not yet a position.'],
    pending:['Pending / unfilled','An accepted simulated order is waiting for matching execution.','It has not necessarily bought or sold anything. A pending exit leaves its position open.'],
    filled:['Filled units','The units that have actually executed, at the recorded fill price.','A partially filled order has both a filled portion and an unfilled remainder.'],
    averageFill:['Average fill price','Total executed premium divided by filled units. Multiple fills may produce an average with fractional paise.','The ledger uses exact premium totals, not a rounded displayed average.'],
    unrealised:['Indicative P&L','An estimate of the result if the open position could close at the displayed bid, including the stated allocated costs.','It is not realised money or a promise that all units can exit at that price.'],
    realised:['Realised P&L','The result from units actually closed or settled, after allocated purchase costs and the stated closing costs.','Displayed gains and losses come from the synthetic execution ledger, not market forecasts.'],
    stop:['Stop-limit','A trigger activates a limit order. The activated order still needs a matching price to fill.','If the market gaps beyond the limit, it can stay unfilled. It does not guarantee your chosen loss amount.'],
    trigger:['Trigger price','The condition that activates a stop-limit order. For this closing sell stop, activation occurs when LTP reaches or falls below the trigger.','The trigger activates an order; it is not an execution price.'],
    pop:['Probability of profit / POP','A model-dependent estimate of profit under stated assumptions and a specific horizon.','Not calculated in this demo. Population loss statistics and option delta are not your probability of net profit.'],
    margin:['Margin','Funds or collateral required to support certain positions. It is not a universal maximum-loss limit.','This purchase-only demo labels the purchase premium and costs directly; it does not calculate short-option margin.'],
    iv:['Implied volatility / IV','A model-implied measure of expected variability embedded in an option premium.','Not calculated here. IV is neither the probability of profit nor a forecast of direction.'],
    delta:['Delta','A local estimate of how an option premium changes for a small change in the underlying, with other inputs held constant.','Not calculated here. Delta is not a calibrated probability of net profit.'],
    gamma:['Gamma','How delta changes as the underlying moves, under a pricing model.','Not calculated here; model sensitivities are not guarantees.'],
    theta:['Theta / time decay','A model sensitivity to time passing, holding other inputs constant.','Not calculated here. An option’s full price can also change because of the underlying and volatility.'],
    vega:['Vega','A model sensitivity of the premium to a change in implied volatility.','Not calculated here. Specify model and units before presenting a numerical value.'],
    pcr:['Put–call ratio / PCR','A ratio of put activity to call activity; its definition must state whether it uses volume or open interest.','Not calculated here. The ratio alone does not select a trade.'],
    maxPain:['Max pain','A level calculated from open-interest data under a particular aggregate-payoff definition.','Not calculated here. It does not predict where an index will settle.']
  };
  var sidebar={
    'Watchlist':['Keep instruments together','A personal list lets you return to contracts without searching again.','It does not rank contracts or tell you what to trade. In this demo, your chosen contract stays on its ticket.'],
    'Market Watch':['A market snapshot','View reference levels and quotes across instruments.','The market strip here contains frozen synthetic values. No live market connection is active.'],
    'Strategies':['Several legs in one view','Strategy tools combine positions and show their combined payoff.','This first-order prototype supports only a single purchased index option. This tool does not select a strategy or contract.'],
    'Scalper':['An advanced execution workspace','Typically puts charts and fast order controls together.','One-click execution is not part of this guided flow. You review an order before sending a simulated purchase.'],
    'Investment':['Longer-term holdings','A separate area can organise investments and products beyond options.','Your existing equity experience does not make an option equivalent to owning equity. This demo keeps investments outside its trading scope.'],
    'AI':['An explanation helper','Here you can look up a metric using fixed, offline explanations.','There is no runtime AI, price prediction or contract recommendation. Ask what a number means, not what to buy.'],
    'Cloud':['Automation and connected workflows','Cloud tools may run connected workflows or automation.','No cloud jobs or APIs run in this offline prototype. They are not required to understand this order.'],
    'Terminal':['An advanced trading workspace','Terminals usually combine quotes, charts, orders and specialised tools.','This concept keeps the first-order path in Option Chain, Orders and Portfolio. It does not open an external terminal.'],
    'Alerts':['Conditions to watch','An alert can notify you when a specified condition is met.','An alert is not an executed order and does not cap a loss. No live notifications are sent here.']
  };
  function get(key,ctx){
    var row=terms[key];if(!row)return null;
    var example='';ctx=ctx||{};var c=ctx.contract,o=ctx.order,a=ctx.analysis,q=ctx.quote;
    if(key==='lots'||key==='lotSize'||key==='units')if(c&&o&&E.positive(c.lotSize))example=o.lots+' lots × '+c.lotSize+' units = '+o.lots*c.lotSize+' units in your order.';
    if(key==='premium'&&a)example='Your premium commitment is '+E.money(a.premiumPaise)+' before entry costs.';
    if(key==='entryFunds'&&a)example='Your order: '+E.money(a.premiumPaise)+' premium + '+E.money(a.entryFeePaise)+' entry charge = '+E.money(a.entryFundsPaise)+'.';
    if(key==='breakeven'&&a)example=a.breakEvenPaise==null?'This selected order has no feasible breakeven under the stated costs.':'Your cost-adjusted expiry breakeven is approximately '+E.level(a.breakEvenPaise)+'.';
    if(key==='maxLoss'&&a)example='Your full premium at risk: '+E.money(a.grossMaxLossPaise)+'.';
    if(key==='netLoss'&&a&&a.maxLossIncludingCostsPaise!=null)example='For this single-entry/single-exit path: '+E.money(a.maxLossIncludingCostsPaise)+'.';
    if(key==='spot'&&q)example='Synthetic reference level: '+E.level(q.spotPaise)+'.';
    if((key==='bid'||key==='ask'||key==='ltp')&&q)example='Selected quote: '+E.money(q[{bid:'bidPaise',ask:'askPaise',ltp:'ltpPaise'}[key]])+' per unit.';
    if(key==='strike'&&c)example='Selected strike: '+E.level(c.strikePaise)+'.';
    if(key==='spread'&&q&&E.positive(q.bidPaise)&&E.positive(q.askPaise))example='Current synthetic spread: '+E.money(q.askPaise-q.bidPaise)+' per unit.';
    return {key:key,title:row[0],definition:row[1],caution:row[2],example:example};
  }
  function search(query){var s=String(query||'').trim().toLowerCase();return Object.keys(terms).filter(function(k){return !s||(k+' '+terms[k].join(' ')).toLowerCase().includes(s);});}
  function describeOrder(c,o,a){
    if(!c||!o||!a)return 'Complete the order details to explain its consequences.';
    return 'You are buying '+o.lots+' lot'+(o.lots===1?'':'s')+' ('+a.units+' units) of a '+(c.optionType==='CE'?'call':'put')+' option on '+c.underlying+', not the index itself. At your limit, the premium is '+E.money(a.premiumPaise)+'; entry costs add '+E.money(a.entryFeePaise)+'.';
  }
  var risk={title:'Risk disclosure for Futures and Options',period:'FY 2021–22',source:'SEBI study dated 25 January 2023; disclosure circular dated 19 May 2023.',
    bullets:['9 out of 10 individual traders in equity Futures and Options segment incurred net losses.','On average, loss makers registered net trading loss close to ₹50,000.','Over and above net trading losses, loss makers spent an additional 28% of those losses as transaction costs.','Those making net trading profits incurred between 15% and 50% of those profits as transaction costs.'],
    context:'These historical annual trader outcomes are not the probability of this particular order losing money, and are not presented as the latest market statistics.'};
  function evaluatorEnabled(search){return /^\?/.test(String(search||''))&&/(?:^\?|&)eval=1(?:&|$)/.test(String(search||''));}
  return {evaluatorEnabled:evaluatorEnabled,terms:terms,sidebar:sidebar,get:get,search:search,describeOrder:describeOrder,risk:risk};
}));
````

## assets/js/simulator.js

````javascript
(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./engine.js'),require('./fees.js'),require('./fixtures.js'));
  else root.FTSimulator=factory(root.FTEngine,root.FTFees,root.FTFixtures);
}(typeof globalThis!=='undefined'?globalThis:this,function(E,Fees,F){
  'use strict';
  var ACTIVE=['PENDING','PARTIAL','TRIGGER_WAIT'];
  function Simulation(options){this.initialPaise=options&&options.initialPaise!=null?options.initialPaise:2500000;this.reset();}
  Simulation.prototype.reset=function(){
    this.clock=F.CLOCK;this.cashPaise=this.initialPaise;this.contracts={};this.quotes={};
    F.contracts.forEach(function(c){this.contracts[c.id]=F.clone(c);this.quotes[c.id]=F.quote(c.id);},this);
    this.fees=F.activeFees();this.rules=F.clone(E.RULES);this.orders=[];this.positions={};this.idempotency={};
    this.draft=null;this.reviewRecord=null;this.user={firstOptions:true,lossBudgetPaise:null,holdingPeriod:'UNSURE'};
    this.seq=0;this.events=[];this.lastResult=null;return this;
  };
  Simulation.prototype.event=function(text){this.events.unshift({time:this.clock,text:text});this.events=this.events.slice(0,30);};
  Simulation.prototype.active=function(o){return ACTIVE.includes(o.status);};
  Simulation.prototype.reservedPaise=function(){
    return this.orders.reduce(function(sum,o){return sum+(this.active(o)&&o.intent==='OPEN'?
      o.remainingUnits*o.limitPaise+Fees.charge(o.feeProfile,'ENTRY',{premiumPaise:o.fillPremiumPaise+o.remainingUnits*o.limitPaise,intrinsicPaise:0})-o.chargedFeePaise:0);}.bind(this),0);
  };
  Simulation.prototype.availablePaise=function(){return this.cashPaise-this.reservedPaise();};
  Simulation.prototype.closingReserved=function(id){return this.orders.reduce(function(s,o){return s+(o.contractId===id&&o.intent==='CLOSE'&&this.active(o)?o.remainingUnits:0);}.bind(this),0);};
  Simulation.prototype.openUnits=function(id){return this.positions[id]?this.positions[id].units:0;};
  Simulation.prototype.setDraft=function(o){this.draft=F.clone(o);return this.draft;};
  Simulation.prototype.signature=function(){
    var d=this.draft,c=d&&this.contracts[d.contractId],q=d&&this.quotes[d.contractId];
    return JSON.stringify({draft:d,contract:c,quote:q,fees:this.fees,rules:this.rules,user:this.user,
      available:this.availablePaise(),units:d?this.openUnits(d.contractId):0,closing:d?this.closingReserved(d.contractId):0,clock:this.clock});
  };
  Simulation.prototype.check=function(){
    var d=this.draft,c=d&&this.contracts[d.contractId],q=d&&this.quotes[d.contractId];
    var result=E.preflight(c,d,q,this.fees,{availablePaise:this.availablePaise(),lossBudgetPaise:this.user.lossBudgetPaise},this.clock);
    if(d&&d.intent==='OPEN'&&this.user.lossBudgetInvalid){result.errors.push({code:'BUDGET_INPUT',message:'Enter a valid non-negative rupee budget with at most two decimals, or choose not sure.'});result.ok=false;}
    if(d&&d.intent==='CLOSE'&&result.analysis&&result.analysis.units>this.openUnits(d.contractId)-this.closingReserved(d.contractId)){
      result.errors.push({code:'CLOSE_QTY',message:'Exit quantity exceeds the unreserved long position. This close cannot open a short.'});result.ok=false;
    }
    return result;
  };
  Simulation.prototype.review=function(){
    var check=this.check();
    this.reviewRecord={signature:this.signature(),result:check,id:'R'+(++this.seq)};
    return check;
  };
  Simulation.prototype.reviewChanged=function(){return !!this.reviewRecord&&this.reviewRecord.signature!==this.signature();};
  Simulation.prototype.submit=function(key){
    if(key&&this.idempotency[key])return {ok:true,order:this.idempotency[key],duplicate:true};
    if(!key)return {ok:false,code:'KEY',message:'An idempotency key is required.'};
    if(!this.reviewRecord)return {ok:false,code:'REVIEW',message:'Review the order before submitting.'};
    if(this.reviewChanged())return {ok:false,code:'REVIEW_CHANGED',message:'Order data changed after review. Recalculate and review again.'};
    var check=this.check();if(!check.ok)return {ok:false,code:check.errors[0].code,message:check.errors[0].message};
    var o=F.clone(this.draft);o.id='SIM-'+String(++this.seq).padStart(4,'0');o.units=check.analysis.units;o.remainingUnits=o.units;
    o.filledUnits=0;o.fillPremiumPaise=0;o.averageFillPaise=null;o.feeCharged=false;o.chargedFeePaise=0;
    o.feeProfile=F.clone(this.fees);o.status=o.type==='SL_LIMIT'?'TRIGGER_WAIT':'PENDING';
    o.createdAt=this.clock;o.reason='';o.events=['Submitted: no fill assumed'];
    this.orders.push(o);this.idempotency[key]=o;this.event(o.id+' submitted; '+o.units+' units pending.');
    return {ok:true,order:o};
  };
  Simulation.prototype.order=function(id){return this.orders.find(function(o){return o.id===id;});};
  Simulation.prototype.quoteChange=function(id,patch){
    var q=this.quotes[id]||{contractId:id,version:0};Object.keys(patch).forEach(function(k){q[k]=patch[k];});q.version=(q.version||0)+1;this.quotes[id]=q;
  };
  Simulation.prototype.fill=function(id,kind){
    var o=this.order(id);if(!o||!this.active(o))return {ok:false,code:'STATE',message:'Only an active order can fill.'};
    var c=this.contracts[o.contractId],q=this.quotes[o.contractId];
    var errs=E.contractErrors(c,this.clock).concat(E.quoteErrors(q,this.clock,c.id));
    if(errs.length)return {ok:false,code:errs[0].code,message:errs[0].message};
    if(o.status==='TRIGGER_WAIT'){
      if(!E.nonnegative(q.ltpPaise)||q.ltpPaise>o.triggerPaise)return {ok:false,code:'NOT_TRIGGERED',message:'The stop trigger has not been reached. Position remains open.'};
      o.status='PENDING';o.events.push('Stop activated; limit still needs a matching bid.');
    }
    var isBuy=o.intent==='OPEN',price=isBuy?q.askPaise:q.bidPaise;
    if((isBuy&&price>o.limitPaise)||(!isBuy&&price<o.limitPaise))return {ok:false,code:'NOT_MARKETABLE',message:'No matching price at the limit. Order remains pending; any position remains open.'};
    var remLots=o.remainingUnits/c.lotSize;
    if(kind==='partial'&&remLots<2)return {ok:false,code:'ONE_LOT',message:'A 50% partial fill needs at least two remaining lots. This prototype never fills fractional lots.'};
    var desired=kind==='partial'?Math.floor(remLots/2)*c.lotSize:o.remainingUnits;
    var depth=isBuy?q.askUnits:q.bidUnits,units=Math.min(desired,Math.floor(depth/c.lotSize)*c.lotSize);
    if(units<=0)return {ok:false,code:'DEPTH',message:'Not enough quoted depth for one whole lot. Order stays pending.'};
    var cumulativePremium=o.fillPremiumPaise+units*price;
    var fee=Fees.charge(o.feeProfile,isBuy?'ENTRY':'EXIT',{premiumPaise:cumulativePremium,intrinsicPaise:0})-o.chargedFeePaise;
    if(isBuy){
      this.cashPaise-=units*price+fee;
      var p=this.positions[c.id];
      if(!p)p=this.positions[c.id]={contractId:c.id,units:0,costBasisPaise:0,entryFeesRemainingPaise:0,realisedPaise:0,status:'OPEN',feeProfile:F.clone(o.feeProfile)};
      p.units+=units;p.costBasisPaise+=units*price;p.entryFeesRemainingPaise+=fee;p.status='OPEN';
      q.askUnits-=units;
    }else{
      var position=this.positions[c.id];
      if(!position||units>position.units)return {ok:false,code:'CLOSE_QTY',message:'Closing units exceed the position. No short position was created.'};
      var basis=units===position.units?position.costBasisPaise:Math.round(position.costBasisPaise*units/position.units);
      var entryFee=units===position.units?position.entryFeesRemainingPaise:Math.round(position.entryFeesRemainingPaise*units/position.units);
      var net=units*price-basis-entryFee-fee;
      position.realisedPaise+=net;position.costBasisPaise-=basis;position.entryFeesRemainingPaise-=entryFee;position.units-=units;
      position.status=position.units?'OPEN':'CLOSED';this.cashPaise+=units*price-fee;q.bidUnits-=units;
      o.realisedPaise=(o.realisedPaise||0)+net;
    }
    o.feeCharged=true;o.chargedFeePaise+=fee;o.fillPremiumPaise+=units*price;o.filledUnits+=units;o.remainingUnits-=units;
    o.averageFillPaise=o.fillPremiumPaise/o.filledUnits;o.status=o.remainingUnits?'PARTIAL':'FILLED';
    o.events.push(units+' units filled at '+E.money(price)+'.');
    this.event(o.id+': '+units+' units filled at '+E.money(price)+'; '+o.remainingUnits+' remain.');
    this.lastResult={orderId:o.id,units:units,pricePaise:price};return {ok:true,order:o,units:units,pricePaise:price};
  };
  Simulation.prototype.cancel=function(id){
    var o=this.order(id);if(!o||!this.active(o))return {ok:false,code:'STATE',message:'This order has no active remainder to cancel.'};
    o.events.push('Cancellation requested.');o.status='CANCELLED';o.reason='Unfilled remainder cancelled in simulation.';
    o.cancelledUnits=o.remainingUnits;o.remainingUnits=0;o.events.push('Remainder cancelled; existing fills retained.');
    this.event(o.id+' remainder cancelled. Filled positions remain open.');return {ok:true,order:o};
  };
  Simulation.prototype.reject=function(id){
    var o=this.order(id);if(!o||!this.active(o))return {ok:false,code:'STATE',message:'Only an active remainder can be rejected.'};
    o.rejectedUnits=o.remainingUnits;o.remainingUnits=0;o.status='REJECTED';o.reason='Evaluator-triggered rejection of remaining units.';
    o.events.push(o.reason);this.event(o.id+' remainder rejected; any fills remain.');return {ok:true,order:o};
  };
  Simulation.prototype.settle=function(settlementPaise){
    if(!E.nonnegative(settlementPaise)||settlementPaise>E.RULES.maxPricePaise)return {ok:false,code:'SETTLEMENT',message:'Enter a valid non-negative settlement level.'};
    if(this.clock>=F.EXPIRY)return {ok:false,code:'SETTLED',message:'The expiry event has already been processed. Reset to start a new simulation.'};
    if(Object.keys(this.positions).some(function(id){var p=this.positions[id];return p.units>0&&!Fees.valid(p.feeProfile);},this))return {ok:false,code:'FEES',message:'Settlement fees are unavailable.'};
    this.clock=F.EXPIRY;
    this.orders.forEach(function(o){if(this.active(o)){o.expiredUnits=o.remainingUnits;o.remainingUnits=0;o.status='EXPIRED';o.events.push('DAY remainder expired without a fill.');}},this);
    var settled=[];
    Object.keys(this.positions).forEach(function(id){
      var p=this.positions[id];if(!p.units)return;var c=this.contracts[id];
      var intrinsic=c.optionType==='CE'?Math.max(settlementPaise-c.strikePaise,0):Math.max(c.strikePaise-settlementPaise,0);
      var proceeds=intrinsic*p.units,fee=Fees.charge(p.feeProfile,'SETTLEMENT',{premiumPaise:proceeds,intrinsicPaise:proceeds});
      var net=proceeds-p.costBasisPaise-p.entryFeesRemainingPaise-fee;
      this.cashPaise+=proceeds-fee;p.realisedPaise+=net;p.settlementPaise=settlementPaise;p.settlementNetPaise=net;
      p.settledUnits=p.units;p.units=0;p.costBasisPaise=0;p.entryFeesRemainingPaise=0;p.status='SETTLED';settled.push(id);
    },this);
    this.event('Synthetic expiry processed at '+E.level(settlementPaise)+'. Pending orders expired.');return {ok:true,settled:settled};
  };
  Simulation.prototype.applyScenario=function(name,id){
    id=id||(this.draft&&this.draft.contractId)||'A';
    var fresh=F.quote(id);if(!fresh)return;
    fresh.version=(this.quotes[id]?this.quotes[id].version:0)+1;fresh.asOfMs=this.clock;
    this.quotes[id]=fresh;this.fees=F.activeFees();
    if(name==='stale')this.quotes[id].asOfMs=this.clock-31000;
    if(name==='wide'){this.quotes[id].bidPaise=Math.floor(fresh.askPaise*.8/5)*5;}
    if(name==='no-bid'){this.quotes[id].bidPaise=null;this.quotes[id].bidUnits=0;}
    if(name==='missing-fees')this.fees=null;
    if(name==='stop-gap'){
      var closing=this.orders.slice().reverse().find(function(o){return o.contractId===id&&o.intent==='CLOSE'&&o.type==='SL_LIMIT'&&this.active(o);},this);
      if(closing){var price=Math.max(5,closing.limitPaise-100);this.quoteChange(id,{bidPaise:price,askPaise:price+5,ltpPaise:price});}
    }
    if(name==='changed'){
      if(this.draft&&!this.reviewRecord)this.review();
      this.quoteChange(id,{askPaise:fresh.askPaise+5,ltpPaise:fresh.askPaise+5});
    }
    this.event('Evaluator scenario: '+name+' (synthetic).');
  };
  return {Simulation:Simulation,ACTIVE:ACTIVE};
}));
````

## assets/js/ui.js

````javascript
(function(root){
  'use strict';
  if(typeof document==='undefined')return;
  var E=root.FTEngine,F=root.FTFixtures,X=root.FTExplain,S=root.FTSimulator,G=root.FTGuide;
  var sim=new S.Simulation(),state={view:'chain',contractId:null,orderId:null,mode:'review',exit:false,submitKey:null,
    riskAcknowledged:false,guidance:null,chainView:'buyer',modal:null,pendingContractId:null};
  var app=document.getElementById('app'),toastTimer;
  var names=['Watchlist','Market Watch','Option Chain','Strategies','Scalper','Portfolio','Orders','Investment','AI','Cloud','Terminal','Alerts'];
  var paths=[
    'M6 3h12v18l-6-4-6 4Z','M5 3v18M3 7h4v7H3ZM12 2v20M10 5h4v11h-4ZM19 5v16M17 10h4v7h-4Z',
    'M9 8H7a4 4 0 0 0 0 8h4M15 8h2a4 4 0 0 1 0 8h-4M8 12h8','M3 16h6l3-11 3 14 3-7h3',
    'M14 2 4 14h7l-1 8 10-13h-7Z','M3 7h18v14H3ZM5 7V3h14v4M9 12h6',
    'M5 3h14v18H5ZM8 8h8M8 12h8M8 16h5','M3 9h18L12 3ZM5 12v7M10 12v7M15 12v7M20 12v7M3 22h18',
    'M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z','M5 18a5 5 0 0 1-1-10 7 7 0 0 1 13-2 6 6 0 0 1 1 12Z',
    'M3 3h7v7H3ZM14 3h7v7h-7ZM3 14h7v7H3ZM14 14h7v7h-7Z','M4 18h16l-2-3V9a6 6 0 0 0-12 0v6ZM9 21h6'
  ];
  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function money(v){return E.money(v);}function level(v){return E.level(v);}
  function signed(v){return(v>0?'Profit +':v<0?'Loss −':'Break-even ')+money(Math.abs(v));}
  function tone(v){return v>0?'positive':v<0?'negative':'neutral';}
  function date(ms){if(!Number.isSafeInteger(ms))return 'Unavailable';return new Date(ms).toLocaleString('en-GB',{timeZone:'Asia/Kolkata',day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit',hour12:false})+' IST';}
  function notify(text){var n=document.getElementById('toast');n.textContent=text;n.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(function(){n.hidden=true;},6500);}
  function message(text){document.getElementById('evaluator-result').textContent=text;notify(text);}
  function c(){return sim.contracts[state.contractId];}
  function q(){return sim.quotes[state.contractId];}
  function errors(check){return check.errors.length?'<div class="error-box" role="alert"><strong>Review needs attention</strong><ul>'+check.errors.map(function(e){return '<li data-error="'+esc(e.code)+'">'+esc(e.message)+'</li>';}).join('')+'</ul></div>':'';}
  function metric(key,label){var t=G.get(key);return '<button type="button" class="metric-link" data-metric="'+key+'" aria-label="Explain '+esc(t?t.title:key)+'">'+(label?esc(label)+' ':'')+'<span class="metric-question" aria-hidden="true">?</span></button>';}
  function context(){return {contract:c(),order:sim.draft,quote:q(),analysis:sim.draft?sim.check().analysis:null};}
  var returnFocus=null;
  function showDialog(kind,title,body,actions){
    var dialog=document.getElementById('experience-dialog');
    if(!dialog.open)returnFocus=document.activeElement;
    state.modal=kind;
    document.getElementById('dialog-content').innerHTML='<div class="dialog-head"><span class="eyebrow">'+(kind==='risk'?'F&O / RISK DISCLOSURE':'FIRST ORDER / CONTEXT')+'</span><button class="dialog-close" data-action="close-dialog" aria-label="Close dialog">×</button></div><h2 id="dialog-title" tabindex="-1">'+esc(title)+'</h2>'+body+(actions?'<div class="dialog-actions">'+actions+'</div>':'');
    if(!dialog.open){if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');}
    document.getElementById('dialog-title').focus();
  }
  function closeDialog(){var d=document.getElementById('experience-dialog');if(typeof d.close==='function')d.close();else d.removeAttribute('open');state.modal=null;if(returnFocus&&document.contains(returnFocus))returnFocus.focus();}
  function showRisk(){
    showDialog('risk',G.risk.title,'<div class="disclosure-quote"><ul>'+G.risk.bullets.map(function(b){return '<li>'+esc(b)+'</li>';}).join('')+'</ul></div><div class="historical-note"><strong>Historical population data · '+G.risk.period+'</strong><p>'+esc(G.risk.context)+'</p><small>'+esc(G.risk.source)+'</small></div>',
      '<button class="text-button" data-action="close-dialog">Back to workspace</button><button class="disclosure-ack" data-action="ack-risk">I understand</button>');
  }
  function showInvite(){
    if(state.mode==='baseline'){
      showDialog('invite','Constructed baseline mode','<p class="dialog-lead">This evaluation view uses a plain constructed order summary without the contextual guidance layer. It is not Nubra’s actual ticket.</p><p class="small">Continue with the baseline, or explicitly switch to the guided review experience.</p>',
        '<button class="text-button" data-action="choose-unguided">Continue with baseline</button><button class="primary" data-action="switch-guided">Switch to guided review</button>');return;
    }
    showDialog('invite','A little context for your first order?',
      '<p class="dialog-lead">Keep the trading tools. Add a short explanation of what the numbers mean, what your chosen order commits, and how you can exit.</p><div class="invite-points"><div><span>01</span><strong>Know what you are buying</strong><p>Read the contract and quantities in plain language.</p></div><div><span>02</span><strong>See the consequences</strong><p>Separate the full loss exposure from your intended exit.</p></div><div><span>03</span><strong>Decide for yourself</strong><p>Review, edit, or back out. No contract recommendations.</p></div></div><p class="small">Optional. You can switch guidance off at any time. This is context for your order, not a course or a judgement about whether to trade.</p>',
      '<button class="text-button" data-action="choose-unguided">Continue without guidance</button><button class="primary" data-action="choose-guided">Use guided view</button>');
  }
  function finishGuidanceChoice(){
    closeDialog();
    if(state.pendingContractId){var selected=state.pendingContractId;state.pendingContractId=null;openTicket(selected,false);}
    else {if(state.view==='home')state.view='chain';render(true);}
  }
  function enterFno(){
    if(!state.riskAcknowledged){showRisk();return;}
    if(state.guidance===null){showInvite();return;}
    state.view='chain';state.exit=false;render(true);
  }
  function showMetric(key){
    var term=G.get(key,context());if(!term)return;
    showDialog('metric',term.title,'<p class="dialog-lead">'+esc(term.definition)+'</p>'+(term.example?'<div class="selected-example"><span>IN YOUR SELECTED ORDER</span><p>'+esc(term.example)+'</p></div>':'')+'<div class="meaning-caution"><strong>Keep in mind</strong><p>'+esc(term.caution)+'</p></div>',
      '<button class="text-button" data-action="glossary">All metrics</button><button class="primary" data-action="close-dialog">Back to my screen</button>');
  }
  function showSidebar(name){
    var item=G.sidebar[name];if(!item)return;
    showDialog('sidebar',name,'<div class="sidebar-explainer"><h3>'+esc(item[0])+'</h3><p class="dialog-lead">'+esc(item[1])+'</p><div class="meaning-caution"><strong>For this first order</strong><p>'+esc(item[2])+'</p></div></div>'+(name==='Market Watch'?'<div class="mini-market"><span>DEMO INDEX <b>22,608.20</b></span><span>DEMO BANK <b>688.00</b></span><small>Synthetic reference levels, not live quotes.</small></div>':'')+(name==='AI'?'<label class="term-search-label">Ask about a term<input id="term-question" placeholder="For example: what is a premium?"></label><button class="secondary" data-action="answer-term">Explain this term</button><div id="term-answer" class="inline-answer" aria-live="polite">Offline explanations only. No trade selection or forecasts.</div>':''),
      '<button class="text-button" data-action="close-dialog">Back to my screen</button><button class="secondary" data-action="glossary">Look up a metric</button>');
  }
  function glossaryRows(query){return G.search(query).map(function(k){var term=G.get(k);return '<button class="glossary-row" data-metric="'+k+'"><span><strong>'+esc(term.title)+'</strong><small>'+esc(term.definition)+'</small></span><span aria-hidden="true">↗</span></button>';}).join('')||'<p class="small">No matching metric. Try “premium”, “margin”, “expiry” or “stop”. This helper does not select a trade.</p>';}
  function showGlossary(){showDialog('glossary','Every number, explained','<p class="small">Look up the terms shown in the flow. Advanced terms are explained, but numerical Greeks and probability of profit are not calculated here.</p><label class="term-search-label">Search metrics<input id="metric-search" type="search" placeholder="Search premium, strike, breakeven…"></label><div id="glossary-results" class="glossary-results">'+glossaryRows('')+'</div>','<button class="text-button" data-action="close-dialog">Back to my screen</button>');}
  function showGuidance(){
    if(!state.riskAcknowledged){enterFno();return;}
    if(state.guidance!==true){showInvite();return;}
    showDialog('guidance','Guidance is on','<p class="dialog-lead">Brief explanations appear beside the chain, your ticket and your review. The question-mark controls explain individual metrics without changing the order.</p><p class="small">Orders tracks what is pending or filled. Portfolio tracks what you actually hold and can close.</p>',
      '<button class="text-button" data-action="guidance-off">Turn guidance off</button><button class="primary" data-action="close-dialog">Keep guidance on</button>');
  }
  function home(){
    return '<div class="home-wrap"><div class="home-eyebrow">ORDER CLARITY <span>v2.0</span></div><h1>Your first order.<br><span>With its consequences in view.</span></h1><p class="home-lead">A trading workspace with an optional layer of context for your first options order. You choose the contract. The review makes the commitment, exposure and exit mechanics explicit.</p><div class="home-action"><button class="primary large-button" data-action="enter-fno">Open F&amp;O <span aria-hidden="true">→</span></button><span>Index option purchases · Synthetic data only</span></div><div class="home-preview"><div class="home-preview-top"><span>YOUR WORKSPACE</span><span>NO REAL ORDERS</span></div><div class="home-preview-row"><div><span>01</span><h2>Option Chain</h2><p>Find the contract you have already chosen.</p></div><div><span>02</span><h2>Orders</h2><p>See what is pending, partly filled or complete.</p></div><div><span>03</span><h2>Portfolio</h2><p>See what you hold and how a closing order works.</p></div></div></div><p class="home-footnote">This concept does not pick contracts, forecast returns, or decide whether a trade is appropriate. All prices, balances and orders are fictional. You can leave the flow at any time.</p></div>';
  }
  function coach(screen){
    if(!state.guidance||state.mode==='baseline')return '';
    var title,body;
    if(screen==='chain'){title='You only need a few things here';body='The middle column is the strike. Calls are on the left; puts on the right. Confirm the expiry and open the contract you have chosen. OI and volume describe activity; they do not select a trade.';}
    else if(screen==='ticket'){title='What this order actually means';body=G.describeOrder(c(),sim.draft,sim.check().analysis);}
    else if(screen==='review'){title='Four things to take away';body='Know the entry outlay, full loss exposure, profit conditions at expiry, and how an exit works. Understanding these consequences does not mean the trade will succeed.';}
    else {title='An order is not the same as a position';body='Orders shows pending and filled instructions. Portfolio contains the units actually held. A closing sale removes exposure only when it fills.';}
    return '<aside class="guide-coach"><div class="coach-symbol" aria-hidden="true">i</div><div><div class="eyebrow">OPTIONAL GUIDANCE</div><h2>'+title+'</h2><p>'+esc(body)+'</p><div class="coach-links">'+metric('premium','Premium')+metric('expiry','Expiry')+metric('maxLoss','Loss exposure')+'<button data-action="risk-context" class="metric-link">What do the loss figures mean? <span aria-hidden="true">↗</span></button></div></div><button class="coach-dismiss" data-action="guidance-off" aria-label="Turn off optional guidance">×</button></aside>';
  }
  function injectMetrics(){
    var map=[[/^open interest/i,'oi'],[/^volume/i,'volume'],[/^strike$/i,'strike'],[/^bid\s*\/\s*ask/i,'spread'],[/^bid\s*\//i,'bid'],[/^ask\s*\//i,'ask'],[/^ltp/i,'ltp'],[/^price change/i,'priceChange'],[/^session range/i,'dayRange'],[/^tick/i,'tick'],[/^number of lots/i,'lots'],[/^limit premium|^sell limit/i,'limit'],[/^trigger premium|^stop trigger/i,'trigger'],[/^entry funds|^total entry funds/i,'entryFunds'],[/^entry charge|^entry fee|^exit fee|^fee charged|^unallocated entry/i,'fees'],[/^premium commitment|^premium at|^purchase premium|^premium\b/i,'premium'],[/^gross premium/i,'maxLoss'],[/^including stated/i,'netLoss'],[/^available/i,'available'],[/^reserved|^funds reserved/i,'reserved'],[/^net realised|^realised/i,'realised'],[/^indicative/i,'unrealised'],[/^actual average fill|^average purchase/i,'averageFill'],[/^filled units/i,'filled'],[/^remaining pending|^pending /i,'pending'],[/^ordered units/i,'units'],[/^open units|^long position/i,'position']];
    app.querySelectorAll('.money-line.total strong').forEach(function(el){if(!el.querySelector('.estimate-tag')&&FeesAvailable()){var note=document.createElement('small');note.className='estimate-tag';note.textContent=root.FTFees.label(sim.fees);el.appendChild(note);}});
    app.querySelectorAll('.money-line>span:first-child,.quote-grid small,.status-grid small,.metric-label,.chain-table th,.panel h3,.field-row label').forEach(function(el){
      if(el.querySelector('[data-metric]'))return;
      var text=el.tagName==='LABEL'&&el.firstChild?el.firstChild.textContent:el.textContent;
      var pair=map.find(function(p){return p[0].test(text.trim());});if(!pair)return;
      var holder=document.createElement('span');holder.className='metric-inline';holder.innerHTML=metric(pair[1]);el.appendChild(holder);
      if(el.tagName==='LABEL'){el.classList.add('metric-field');var field=el.querySelector('input,select');if(field&&!field.hasAttribute('aria-label'))field.setAttribute('aria-label',text.trim());}
    });
  }
  function payoffExplorer(ct,o,a){
    if(a.breakEvenPaise==null)return '';
    var lo=Math.max(0,ct.strikePaise-30000),hi=ct.strikePaise+30000,current=q()&&q().spotPaise;
    current=E.nonnegative(current)?Math.max(lo,Math.min(hi,current)):ct.strikePaise;
    var v=E.expiry(ct,o.limitPaise,a.units,current,sim.fees);
    return '<section class="panel payoff-explorer"><div class="info-row"><h2>Explore an expiry outcome</h2>'+metric('breakeven')+'</div><p class="small">Change an illustrative settlement level. This does not change your order or predict the market.</p><label for="expiry-slider">Illustrative index settlement level</label><input type="range" id="expiry-slider" min="'+lo+'" max="'+hi+'" step="1" value="'+current+'"><div class="range-endpoints"><span>'+level(lo)+'</span><span>'+level(hi)+'</span></div><div class="explorer-readout" aria-live="polite"><div><small>If the index settles at</small><strong id="explorer-level" class="mono">'+level(current)+'</strong></div><div><small>Net result at expiry · estimated fees included</small><strong id="explorer-result" class="'+tone(v)+'">'+signed(v)+'</strong></div></div><p class="helper">This is an expiry calculation. Exiting earlier uses the traded option premium, not this expiry calculation.</p></section>';
  }
  function updatePayoff(){var slider=document.getElementById('expiry-slider');if(!slider||!sim.draft)return;var s=Number(slider.value),a=sim.check().analysis;if(!a||!FeesAvailable())return;var v=E.expiry(c(),sim.draft.limitPaise,a.units,s,sim.fees);document.getElementById('explorer-level').textContent=level(s);var out=document.getElementById('explorer-result');out.textContent=signed(v);out.className=tone(v);}
  function feeNote(){return !root.FTFees.valid(sim.fees)?'<p class="fee-note">Fee profile unavailable. Costs are not assumed to be zero; submission is blocked.</p>':
    '<p class="fee-note">'+esc(root.FTFees.label(sim.fees))+' · '+esc(sim.fees.name)+'. Entry and closing/settlement charges are separate. Additional closing orders can add costs. This is not a verified Nubra tariff.</p>';}
  function feeAmount(event,premium){return FeesAvailable()?root.FTFees.charge(sim.fees,event,{premiumPaise:premium,intrinsicPaise:0}):null;}
  function head(title,description,back){return '<div class="page-head"><div><div class="eyebrow">FIRST OPTIONS ORDER / '+(state.mode==='baseline'?'BASELINE':'REVIEW')+'</div><h1>'+title+'</h1><p class="subhead">'+description+'</p></div><div class="head-actions">'+(back?'<button class="text-button" data-action="chain">← Option chain</button>':'<span class="tag">SIMULATED ACCOUNT</span>')+'</div></div>';}
  function nav(){
    document.getElementById('sidebar').innerHTML='<div class="nav-kicker">WORKSPACE</div>'+names.map(function(n,i){var active=(state.view==='orders'&&n==='Orders')||(['position','portfolio'].includes(state.view)&&n==='Portfolio')||(!['home','orders','position','portfolio'].includes(state.view)&&n==='Option Chain');
      return '<button class="nav-button '+(active?'active':'')+'" data-nav="'+esc(n)+'" aria-label="'+esc(n)+'" '+(active?'aria-current="page"':'')+'><svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+paths[i]+'"/></svg><span class="nav-name">'+n+'</span></button>';}).join('');
  }
  function chain(){
    var rows=[{strike:2250000,call:'E',put:'F'},{strike:2260000,call:'A',put:'B'},{strike:2270000,call:'G',put:'H'}];
    var activity=state.chainView==='activity';
    function cell(id,side){
      var qu=sim.quotes[id],st=F.stats(id),price=qu.askPaise,change=qu.ltpPaise-st.previousClosePaise;
      var info=activity?'<td class="'+side+'-tint">'+level(qu.ltpPaise)+'</td><td class="'+side+'-tint">'+(change>=0?'+':'−')+level(Math.abs(change))+'</td>':
        '<td class="'+side+'-tint">'+st.oiContracts.toLocaleString('en-IN')+'</td><td class="'+side+'-tint">'+(qu.bidPaise==null?'No bid':level(qu.bidPaise))+' / '+level(qu.askPaise)+'</td>';
      var vol=activity?level(st.lowPaise)+'–'+level(st.highPaise):st.volumeContracts.toLocaleString('en-IN');
      var priceButton='<td class="'+side+'-tint"><button class="select-contract" data-contract="'+id+'" aria-label="Open synthetic '+level(sim.contracts[id].strikePaise)+' '+(side==='call'?'call':'put')+'">'+level(price)+'</button><span class="depth-label">per unit · synthetic ask</span></td>';
      return side==='call'?info+'<td class="call-tint">'+vol+'</td>'+priceButton:priceButton+'<td class="put-tint">'+vol+'</td>'+info;
    }
    var left=activity?'<th>LTP / unit</th><th>Price change / unit</th><th>Session range / unit</th>':'<th>Open interest<br><small>contracts</small></th><th>Bid / ask · per unit</th><th>Volume<br><small>contracts</small></th>';
    var right=activity?'<th>Session range / unit</th><th>LTP / unit</th><th>Price change / unit</th>':'<th>Volume<br><small>contracts</small></th><th>Open interest<br><small>contracts</small></th><th>Bid / ask · per unit</th>';
    return head('Option chain','Open the contract you have chosen. Every question mark explains a number without changing your order.',false)+coach('chain')+
      '<div class="chain-toolbar"><strong>DEMO INDEX <span class="mono">22,608.20</span> '+metric('spot')+'</strong><label><span class="offscreen">Option chain view</span><select id="buyer-view"><option value="buyer" '+(!activity?'selected':'')+'>Option Buyer</option><option value="activity" '+(activity?'selected':'')+'>Price &amp; activity</option></select></label><span class="small">Lot size <b>65 units</b> '+metric('lotSize')+'</span><span class="quote-state">Synthetic · '+date(sim.clock)+'</span></div>'+
      '<div class="table-scroll"><table class="chain-table"><caption class="offscreen">Synthetic option chain. OI and volume are contracts. Bid, ask and premiums are per unit. No trade is selected for you.</caption><thead><tr class="group"><th colspan="4">CALLS '+metric('call')+'</th><th class="strike"><button class="expiry-control" data-metric="expiry">27 Oct 26 <span aria-hidden="true">?</span></button></th><th colspan="4">PUTS '+metric('put')+'</th></tr><tr>'+left+'<th>Premium · select</th><th class="strike">Strike</th><th>Premium · select</th>'+right+'</tr></thead><tbody>'+
      rows.map(function(r){return '<tr>'+cell(r.call,'call')+'<td class="strike">'+level(r.strike)+'</td>'+cell(r.put,'put')+'</tr>';}).join('')+
      '</tbody></table><div class="ticker-line">DEMO INDEX · 22,608.20 · Synthetic reference level</div></div>'+
      '<div class="chain-footer"><span>'+metric('premium','Premium is per unit')+' · '+metric('units','Orders use whole lots')+'</span><span>SIM exchange · no real market data</span></div>'+
      '<div class="chain-bottom"><section class="panel order-map"><div class="eyebrow">THREE PLACES, DIFFERENT JOBS</div><div><strong>Option Chain</strong><span>Choose your contract and draft an order.</span></div><div><strong>Orders</strong><span>Pending and filled instructions.</span></div><div><strong>Portfolio</strong><span>Units you actually hold and can close.</span></div></section>'+
      '<section class="panel"><div class="info-row"><h2>Simulated account</h2><span class="tag">NO REAL FUNDS</span></div><div class="money-line"><span>Available funds</span><strong class="money">'+money(sim.availablePaise())+'</strong></div><div class="money-line"><span>Reserved for pending purchases</span><strong class="money">'+money(sim.reservedPaise())+'</strong></div><div class="actions"><button data-action="orders">Orders</button><button data-action="portfolio">Portfolio</button></div></section></div>'+
      '<p class="testing-note">Definitions are available in Metrics explained. You choose the contract; no contract is selected for you.</p>';
  }
  function openTicket(id,exit){
    state.contractId=id;state.exit=!!exit;state.view=exit?'exit-ticket':'ticket';state.submitKey=null;
    var o=F.order(id,1);if(exit){o.intent='CLOSE';o.side='SELL';o.limitPaise=sim.quotes[id]&&sim.quotes[id].bidPaise;var units=sim.openUnits(id)-sim.closingReserved(id);o.lots=Math.max(1,Math.floor(units/sim.contracts[id].lotSize));}
    sim.setDraft(o);sim.reviewRecord=null;render(true);
  }
  function budgetInput(){return '<div class="form-section"><label for="loss-budget">Optional loss budget for this trade (₹)</label><span class="budget-help">'+metric('budget','What this means')+'</span><input class="budget-value" id="loss-budget" inputmode="decimal" placeholder="Not sure / not entered" value="'+(sim.user.lossBudgetInvalid?esc(sim.user.lossBudgetRaw):sim.user.lossBudgetPaise==null?'':esc(sim.user.lossBudgetPaise/100))+'"><label class="check-label"><input id="not-sure" type="checkbox" '+(sim.user.lossBudgetPaise==null&&!sim.user.lossBudgetInvalid?'checked':'')+'> Not sure</label><p class="helper">Your own comparison amount, not a guarantee or a position-size suggestion.</p></div>';}
  function ticket(){
    var ct=c(),qu=q(),o=sim.draft,check=sim.check(),a=check.analysis,exit=state.exit;
    var position=sim.positions[state.contractId],label=X.contract(ct);
    return head(exit?'Exit the position':'Your chosen contract',exit?'Selling closes an existing long. A pending exit does not remove your exposure.':'Enter your order details, then review the consequences before simulated submission.',true)+(!exit?coach('ticket'):coach('status'))+
      '<div class="ticket-layout"><section class="panel"><div class="ticket-label">Proposed ticket (not Nubra\'s actual order ticket)</div><div class="contract-heading"><h2>'+esc(label)+'</h2><span class="tag">SYNTHETIC</span></div><p class="small">Expiry '+date(ct.expiryMs)+' · '+esc(ct.settlement)+' settlement '+metric('cash')+' · SIM '+metric(ct.optionType==='CE'?'call':'put',ct.optionType==='CE'?'Call / CE':'Put / PE')+' '+metric('expiry','Expiry')+'</p>'+
      '<div class="quote-grid"><div><small>Bid / unit</small><strong class="money">'+money(qu&&qu.bidPaise)+'</strong></div><div><small>Ask / unit</small><strong class="money">'+money(qu&&qu.askPaise)+'</strong></div><div><small>Tick / unit</small><strong class="money">'+money(ct.tickPaise)+'</strong></div></div>'+
      '<div class="field-row"><label>Number of lots<input id="lots" type="number" min="1" max="100" step="1" value="'+esc(o.lots)+'"></label><label>Limit premium / unit (₹)<input id="limit-price" inputmode="decimal" value="'+(o.limitPaise==null?'':esc(o.limitPaise/100))+'"></label></div><p class="helper" id="ticket-quantity">'+(E.positive(ct.lotSize)?esc(o.lots)+' lot'+(o.lots===1?'':'s')+' × '+esc(ct.lotSize)+' units = '+esc(o.lots*ct.lotSize)+' units. ':'Quantity is unavailable until lot-size metadata is restored. ')+(exit?'Unreserved long units: '+Math.max(0,(position?position.units:0)-sim.closingReserved(ct.id))+'.':'Price shown is an editable synthetic ask, not a price instruction.')+'</p>'+
      (exit?'<div class="field-row"><label>Exit order type<select id="exit-type"><option value="LIMIT" '+(o.type==='LIMIT'?'selected':'')+'>Limit</option><option value="SL_LIMIT" '+(o.type==='SL_LIMIT'?'selected':'')+'>Stop-limit</option></select></label>'+(o.type==='SL_LIMIT'?'<label>Trigger premium / unit (₹)<input id="trigger-price" inputmode="decimal" value="'+(o.triggerPaise==null?'':esc(o.triggerPaise/100))+'"></label>':'')+'</div>':'')+
      '<div class="cost-chip">'+(exit?'SELL TO CLOSE':'BUY TO OPEN')+' · LIMIT'+(o.type==='SL_LIMIT'?' WITH TRIGGER':'')+' · DAY · Simulated carry</div>'+
      (!exit?budgetInput():'<p class="helper">If your stop triggers, its sell limit still needs a matching bid. It may remain unfilled.</p>')+
      '<div id="ticket-live">'+(a&&!exit?'<div class="form-section"><div class="money-line"><span>Premium at your limit</span><strong class="money">'+money(a.premiumPaise)+'</strong></div><div class="money-line"><span>Entry fee (one order)</span><strong class="money">'+money(a.entryFeePaise)+'</strong></div><div class="money-line total"><span>Entry funds at limit</span><strong class="money">'+money(a.entryFundsPaise)+'</strong></div><div class="money-line"><span>Available simulated funds</span><strong class="money">'+money(sim.availablePaise())+'</strong></div></div>':'')+
      errors(check)+'</div><div class="actions"><button data-action="chain" class="text-button">Back out</button><button data-action="review" id="review-order" class="primary">Review order</button></div>'+feeNote()+'</section>'+
      '<aside class="facts-stack"><section class="panel"><div class="note-icon" aria-hidden="true">↳</div><h2>Review, then decide</h2><p class="small">The next step explains this order. It does not judge whether the trade is right for you. You remain free to change the order or leave.</p><ul class="fact-list"><li>No real order is sent.</li><li>Limit prices control execution price, not whether an order fills.</li><li>Orders and positions are separate: a submitted order can remain unfilled.</li></ul></section><section class="panel"><h3>Question about choosing?</h3><p class="small">'+esc(X.answer('which strike should I buy?'))+'</p></section></aside></div>';
  }
  function review(){
    var ct=c(),o=sim.draft,check=sim.check(),a=check.analysis,changed=sim.reviewChanged(),exit=state.exit;
    var intro=head(exit?'Review your exit':'Review your chosen order',exit?'Check the closing quantity and what happens if this exit does not fill.':'Your contract, its costs and its consequences.',true);
    var change=changed?'<div class="changed-box" role="alert"><strong>Data changed after review.</strong> Recalculate before submitting. <button data-action="recalculate" class="secondary">Recalculate review</button></div>':'';
    if(!a)return intro+'<div class="review-wrap">'+change+errors(check)+'<section class="panel">'+Object.values(X.blocked()).map(function(text){return '<p class="small">'+esc(text)+'</p>';}).join('')+'</section>'+'<div class="actions decision-actions"><button data-action="edit">Edit order</button><button data-action="chain">Back out</button></div>'+feeNote()+'</div>';
    if(exit)return intro+exitReview(ct,o,a,check,changed,change);
    var facts=X.facts(ct,o,a),estimate='<small class="estimate-tag">'+esc(a.feeLabel)+'</small>';
    var buttons='<div class="actions decision-actions"><button data-action="chain" class="decision-button">Back out</button><button data-action="edit" class="decision-button">Edit order</button><button data-action="submit" id="place-order" class="decision-button" '+(!check.ok||changed?'disabled':'')+'>Place simulated order</button></div>';
    if(state.mode==='baseline')return intro+'<div class="baseline-wrap"><div class="baseline-label">Constructed baseline, not Nubra\'s ticket</div><section class="panel"><h2>'+esc(facts.identity)+'</h2><p class="small">'+esc(facts.quantity)+' · '+date(ct.expiryMs)+'</p><div class="money-line"><span>Limit per unit</span><strong>'+money(o.limitPaise)+'</strong></div><div class="money-line"><span>Premium</span><strong>'+money(a.premiumPaise)+'</strong></div><div class="money-line"><span>Entry fee</span><strong>'+money(a.entryFeePaise)+'</strong></div><div class="money-line total"><span>Total entry funds</span><strong>'+money(a.entryFundsPaise)+estimate+'</strong></div>'+change+errors(check)+buttons+feeNote()+'</section></div>';
    var be=a.thresholdPaise,lossLevel=ct.optionType==='CE'?Math.max(ct.strikePaise-10000,0):ct.strikePaise+10000;
    var profitLevel=be==null?null:ct.optionType==='CE'?be+10000:Math.max(be-10000,0);
    var scenarios=[{name:'Loss example',settle:lossLevel},{name:'Near breakeven',settle:be},{name:'Profit example',settle:a.canProfitAtExpiry?profitLevel:null}];
    var optional='<div class="review-details">'+
      '<details class="review-detail" id="scenario-detail"><summary>Expiry scenarios and outcome explorer</summary><div class="detail-body"><div class="scenario-cards">'+scenarios.map(function(s){var v=s.settle==null?null:E.expiry(ct,o.limitPaise,a.units,s.settle,sim.fees);return '<article class="scenario-card"><h3>'+s.name+'</h3><strong class="'+(v==null?'neutral':tone(v))+'">'+(v==null?'Unavailable':signed(v))+'</strong><small>'+(s.settle==null?'No supported example':'If index settles at '+level(s.settle))+'</small></article>';}).join('')+'</div><p class="helper">Conditional examples, not forecasts. '+esc(a.feeLabel)+'. Fees are recomputed at each settlement level. Rounded breakeven can leave a small residual.</p>'+payoffExplorer(ct,o,a)+'</div></details>'+
      '<details class="review-detail"><summary>Before expiry: time and volatility</summary><div class="detail-body"><p>'+esc(facts.before)+'</p><p>Time passing can reduce an option’s value with other inputs held constant. No probability of profit is calculated.</p></div></details>'+
      '<details class="review-detail"><summary>Quotes, spread and liquidity</summary><div class="detail-body"><p>Bid '+money(q().bidPaise)+' / ask '+money(q().askPaise)+' per unit. Spread '+money(q().askPaise-q().bidPaise)+' per unit. Quotes and available size may change before a fill.</p><p>A missing bid does not provide an exit price. Quote-age and spread checks in this demo are prototype policies.</p></div></details>'+
      '<details class="review-detail"><summary>Expiry, costs and order exceptions</summary><div class="detail-body"><p>Cash-settled synthetic index option. Expiry: '+date(ct.expiryMs)+'. The entire premium can be lost at expiry. Real broker cutoffs, square-off and exercise charges need verification.</p><p>'+esc(facts.cancel)+'</p><p>Optional loss budget: '+(sim.user.lossBudgetPaise==null?'not sure / not entered.':money(sim.user.lossBudgetPaise)+' entered by you.')+' It does not set the executed loss or change your quantity.</p><h3>Entry fee breakdown</h3>'+a.entryBreakdown.map(function(row){return '<div class="money-line"><span>'+esc(row.name||row.category)+'</span><strong>'+money(row.amountPaise)+'</strong></div>';}).join('')+feeNote()+'</div></details></div>';
    return intro+'<div class="review-wrap"><div class="review-header"><div><h2>'+esc(facts.identity)+'</h2><p>'+esc(facts.quantity)+' · Expiry '+date(ct.expiryMs)+'</p></div><span class="tag">YOUR SELECTED ORDER</span></div>'+change+
      '<section class="review-essentials" aria-label="Four consequences of your order">'+
      '<article class="panel essential-card" data-essential="outlay"><h2>What you pay in total</h2><div class="metric-value money">'+money(a.entryFundsPaise)+'</div>'+estimate+'<p class="cost-equation">'+money(a.premiumPaise)+' premium + '+money(a.entryFeePaise)+' entry fees</p><p>At your limit, for '+a.units+' units. Later exit or settlement fees are separate. Only filled units are bought.</p></article>'+
      '<article class="panel essential-card" data-essential="max-loss"><h2>The most you can lose</h2><div class="metric-value money">'+(a.maxLossIncludingCostsPaise==null?'All-in bound unavailable':money(a.maxLossIncludingCostsPaise))+'</div>'+estimate+'<p>Full '+money(a.grossMaxLossPaise)+' premium at risk. Costs are additional.</p><p>'+esc(facts.boundary)+'</p></article>'+
      '<article class="panel essential-card" data-essential="breakeven"><h2>Breakeven at expiry</h2><div class="metric-value mono">'+(a.breakEvenPaise==null?'Unavailable':'≈ '+level(a.breakEvenPaise))+'</div>'+estimate+'<p>'+esc(facts.expiry)+'</p></article>'+
      '<article class="panel essential-card" data-essential="exit"><h2>How you exit</h2><p>'+esc(facts.exit)+'</p><p>Submitting or cancelling an exit does not close units that have not filled.</p></article></section>'+errors(check)+buttons+optional+feeNote()+'</div>';
  }
  function exitReview(ct,o,a,check,changed,change){
    var p=sim.positions[ct.id],basis=p&&p.units?Math.round(p.costBasisPaise*a.units/p.units):0;
    var entryFee=p&&p.units?Math.round(p.entryFeesRemainingPaise*a.units/p.units):0;
    var proceeds=a.units*o.limitPaise,estimate=proceeds-basis-entryFee-feeAmount('EXIT',proceeds);
    return '<div class="baseline-wrap"><section class="panel"><h2>Sell to close · '+esc(X.contract(ct))+'</h2><p class="small">Synthetic · '+o.lots+' lots × '+ct.lotSize+' = '+a.units+' units. This is a closing sale, not a new short position.</p>'+change+
      '<div class="money-line"><span>Sell limit per unit</span><strong>'+money(o.limitPaise)+'</strong></div><div class="money-line"><span>Proceeds at this limit, before exit fee</span><strong>'+money(proceeds)+'</strong></div><div class="money-line"><span>Exit fee (one order)</span><strong>'+money(feeAmount('EXIT',proceeds))+'</strong></div><div class="money-line total"><span>Indicative realised result if fully filled at limit</span><strong class="'+tone(estimate)+'">'+signed(estimate)+'</strong></div>'+
      (o.type==='SL_LIMIT'?'<div class="changed-box">Stop trigger '+money(o.triggerPaise)+'; sell limit '+money(o.limitPaise)+'. Activation can leave the order unfilled and does not cap the loss.</div>':'')+
      '<p class="small">The result includes the allocated purchase premium, allocated entry fee and this exit fee. A pending exit leaves your position open. An execution at a different price changes the result.</p>'+errors(check)+
      '<div class="actions"><button data-action="edit">Edit order</button><button data-action="portfolio">Back out</button><button class="sell" data-action="submit" id="place-order" '+(!check.ok||changed?'disabled':'')+'>Place simulated exit</button></div>'+feeNote()+'</section></div>';
  }
  function status(){
    var o=sim.order(state.orderId);if(!o)return empty('No order selected','Open an order from Orders.');
    var ct=sim.contracts[o.contractId],close=o.intent==='CLOSE';
    var remains=sim.openUnits(ct.id),pending=sim.active(o);
    var description=X.stateInfo(o.status);
    return head(close?'Exit result':'Order status',description,true)+coach('status')+'<div class="review-wrap"><section class="panel"><div class="status-heading"><span class="status-icon" aria-hidden="true">≡</span><div><h2>'+esc(o.id)+' · '+esc(X.contract(ct))+'</h2><span class="status-badge">'+o.status.replace('_',' ')+'</span> <span class="small">Synthetic · '+(close?'SELL TO CLOSE':'BUY TO OPEN')+'</span></div></div>'+
      '<div class="status-grid"><div><small>Ordered units</small><strong class="mono">'+o.units+'</strong></div><div><small>Filled units</small><strong class="mono">'+o.filledUnits+'</strong></div><div><small>Remaining pending units</small><strong class="mono">'+o.remainingUnits+'</strong></div><div><small>Actual average fill / unit</small><strong class="money">'+(o.averageFillPaise==null?'Not filled':money(o.averageFillPaise))+'</strong></div></div>'+
      '<div class="money-line"><span>Fee charged on this order</span><strong>'+money(o.chargedFeePaise)+'</strong></div><div class="money-line"><span>Long position units now</span><strong>'+remains+'</strong></div><div class="money-line"><span>Funds reserved across pending purchases</span><strong>'+money(sim.reservedPaise())+'</strong></div>'+
      (close&&o.filledUnits?'<div class="money-line total"><span>Net realised result from this exit</span><strong class="'+tone(o.realisedPaise||0)+'">'+signed(o.realisedPaise||0)+'</strong></div>':'')+
      (pending?'<div class="fill-next"><strong>Next: simulate an execution</strong><p>No real order is sent. This attempts a fill at the displayed synthetic quote; it may remain pending.</p><button class="primary" data-action="try-fill" data-id="'+o.id+'">'+(close?'Simulate closing fill':'Simulate a fill')+'</button><button class="text-button" data-action="keep-pending">Leave pending</button><p id="fill-feedback" role="status"></p></div>':'')+'<div class="actions">'+(pending?'<button data-action="cancel" data-id="'+o.id+'">Cancel unfilled remainder</button>':'')+'<button data-action="orders">All orders</button><button class="primary" data-action="portfolio">View positions</button></div><p class="helper">Only an actual simulated fill changes the held quantity.</p><h3 class="form-section">Order events</h3><ol class="history">'+o.events.map(function(e){return '<li>'+esc(e)+'</li>';}).join('')+'</ol>'+feeNote()+'</section></div>';
  }
  function empty(title,body){return head(title,body,true)+'<section class="panel empty"><h2>'+title+'</h2><p>'+body+'</p><button data-action="chain">Option chain</button></section>';}
  function orders(){
    if(!sim.orders.length)return empty('Orders','No simulated orders have been submitted.');
    return head('Orders','Orders can be pending, partly filled, cancelled, rejected, expired, or filled.',true)+'<section class="panel table-panel"><table class="list-table"><thead><tr><th>Order</th><th>Contract · Synthetic</th><th>Intent</th><th>Filled / ordered</th><th>Status</th><th>Action</th></tr></thead><tbody>'+sim.orders.slice().reverse().map(function(o){return '<tr><td>'+o.id+'</td><td>'+esc(X.contract(sim.contracts[o.contractId]))+'</td><td>'+o.side+' TO '+o.intent+'</td><td>'+o.filledUnits+' / '+o.units+'</td><td>'+o.status+'</td><td><button data-status="'+o.id+'">View</button></td></tr>';}).join('')+'</tbody></table></section>'+feeNote();
  }
  function portfolio(){
    var ids=Object.keys(sim.positions);if(!ids.length)return empty('Portfolio','No position exists until an opening order fills.');
    return head('Portfolio','Filled positions and realised results. Cancelling a pending exit does not close a position.',true)+
      '<div class="chain-bottom">'+ids.map(function(id){var p=sim.positions[id],ct=sim.contracts[id];return '<section class="panel"><div class="info-row"><h2>'+esc(X.contract(ct))+'</h2><span class="tag">'+p.status+'</span></div><p class="small">Synthetic · Expiry '+date(ct.expiryMs)+'</p><div class="money-line"><span>Open units</span><strong>'+p.units+'</strong></div><div class="money-line"><span>Purchase premium still held</span><strong>'+money(p.costBasisPaise)+'</strong></div><div class="money-line"><span>Pending closing units</span><strong>'+sim.closingReserved(id)+'</strong></div><div class="money-line"><span>Net realised result</span><strong class="'+tone(p.realisedPaise)+'">'+signed(p.realisedPaise)+'</strong></div><div class="actions"><button data-position="'+id+'">Position details</button><button class="sell" data-exit="'+id+'" '+(p.units-sim.closingReserved(id)<=0?'disabled':'')+'>Exit position</button></div></section>';}).join('')+'</div>';
  }
  function position(){
    var ct=c(),p=sim.positions[state.contractId],qu=q();if(!p)return empty('No position','Only filled units create a position.');
    var indicative=p.units&&qu&&E.positive(qu.bidPaise)&&FeesAvailable()?p.units*qu.bidPaise-p.costBasisPaise-p.entryFeesRemainingPaise-feeAmount('EXIT',p.units*qu.bidPaise):null;
    return head('Position details','Review the filled position. Exit orders need an executable matching price.',true)+'<div class="ticket-layout"><section class="panel"><h2>'+esc(X.contract(ct))+'</h2><p class="small">Synthetic · '+p.status+' · Expiry '+date(ct.expiryMs)+'</p><div class="money-line"><span>Open units</span><strong>'+p.units+'</strong></div><div class="money-line"><span>Average purchase premium / unit</span><strong>'+money(p.units?p.costBasisPaise/p.units:0)+'</strong></div><div class="money-line"><span>Gross premium at risk still held</span><strong>'+money(p.costBasisPaise)+'</strong></div><div class="money-line"><span>Unallocated entry costs</span><strong>'+money(p.entryFeesRemainingPaise)+'</strong></div><div class="money-line"><span>Pending exit units</span><strong>'+sim.closingReserved(ct.id)+'</strong></div><div class="money-line"><span>Net realised result so far</span><strong class="'+tone(p.realisedPaise)+'">'+signed(p.realisedPaise)+'</strong></div>'+
      (p.units?'<div class="money-line total"><span>Indicative net result if closed at current bid</span><strong class="'+(indicative==null?'neutral':tone(indicative))+'">'+(indicative==null?'Unavailable':signed(indicative))+'</strong></div><p class="small">This includes allocated entry and one exit fee, assumes all open units fill at this bid, and is not an executable promise.</p>':'<p class="small">No units remain open.'+(p.status==='SETTLED'?' Synthetic settlement processed at '+level(p.settlementPaise)+'.':'')+'</p>')+
      '<div class="actions"><button data-action="portfolio">Portfolio</button><button class="sell" data-exit="'+ct.id+'" '+(p.units-sim.closingReserved(ct.id)<=0?'disabled':'')+'>Exit position</button></div>'+feeNote()+'</section><aside class="panel"><h2>Exit versus cancel</h2><p class="small">Selling the same contract closes the units you hold only when it fills. Cancelling a pending order releases its unfilled remainder; it does not undo an existing position.</p><p class="small">A stop-limit can trigger and remain unfilled after a price gap. Full premium loss remains possible.</p></aside></div>';
  }
  function FeesAvailable(){return root.FTFees.valid(sim.fees);}
  function controls(){
    var select=document.getElementById('active-order'),prev=select.value;
    select.innerHTML=sim.orders.length?sim.orders.slice().reverse().map(function(o){return '<option value="'+o.id+'">'+o.id+' · '+o.status+' · '+o.remainingUnits+' pending</option>';}).join(''):'<option value="">No submitted orders</option>';
    if(state.orderId&&sim.order(state.orderId))select.value=state.orderId;else if(prev&&sim.order(prev))select.value=prev;
    document.getElementById('clock-label').textContent=date(sim.clock);
    document.getElementById('review-mode').setAttribute('aria-pressed',state.mode==='review');
    document.getElementById('baseline-mode').setAttribute('aria-pressed',state.mode==='baseline');
    document.getElementById('fee-estimate-notice').textContent=FeesAvailable()?'Amounts including fees: '+root.FTFees.label(sim.fees):'Fee estimates unavailable — costs are not assumed to be zero';
    var guideButton=document.getElementById('guidance-toggle');guideButton.textContent=state.guidance===true?'Guidance on':state.guidance===false?'Guidance off':'Guidance';guideButton.setAttribute('aria-pressed',state.guidance===true?'true':'false');
    document.getElementById('fno-entry').classList.toggle('active',state.riskAcknowledged&&state.view!=='home');
  }
  function render(focus){
    nav();app.innerHTML=state.view==='home'?home():state.view==='chain'?chain():['ticket','exit-ticket'].includes(state.view)?ticket():state.view==='review'?review():state.view==='status'?status():state.view==='orders'?orders():state.view==='position'?position():portfolio();
    injectMetrics();controls();if(focus){document.getElementById('main').focus({preventScroll:true});window.scrollTo(0,0);}
  }
  function readDraft(){
    var o=F.clone(sim.draft);if(!o)return;
    var lots=document.getElementById('lots'),price=document.getElementById('limit-price'),trigger=document.getElementById('trigger-price'),type=document.getElementById('exit-type'),budget=document.getElementById('loss-budget');
    if(lots)o.lots=Number(lots.value);if(price)o.limitPaise=E.parsePaise(price.value);if(type)o.type=type.value;
    if(trigger)o.triggerPaise=E.parsePaise(trigger.value);
    if(budget){sim.user.lossBudgetRaw=budget.value;sim.user.lossBudgetPaise=budget.value.trim()===''?null:E.parsePaise(budget.value);sim.user.lossBudgetInvalid=budget.value.trim()!==''&&sim.user.lossBudgetPaise==null;}
    sim.setDraft(o);
  }
  function refreshTicket(){
    if(!['ticket','exit-ticket'].includes(state.view))return;
    var generated=document.createElement('div');generated.innerHTML=ticket();
    ['ticket-live','ticket-quantity'].forEach(function(id){var old=document.getElementById(id),fresh=generated.querySelector('#'+id);if(old&&fresh)old.innerHTML=fresh.innerHTML;});
    var notSure=document.getElementById('not-sure');if(notSure)notSure.checked=sim.user.lossBudgetPaise==null&&!sim.user.lossBudgetInvalid;
    var coachText=app.querySelector('.guide-coach p');if(coachText&&!state.exit)coachText.textContent=G.describeOrder(c(),sim.draft,sim.check().analysis);
    injectMetrics();
  }
  document.addEventListener('click',function(event){
    var b=event.target.closest('button');if(!b||b.disabled)return;
    var action=b.dataset.action;
    if(b.dataset.metric){showMetric(b.dataset.metric);return;}
    if(action==='enter-fno'){enterFno();return;}
    if(action==='close-dialog'){closeDialog();return;}
    if(action==='ack-risk'){state.riskAcknowledged=true;showInvite();return;}
    if(action==='choose-guided'||action==='choose-unguided'){state.guidance=action==='choose-guided'&&state.mode!=='baseline';finishGuidanceChoice();return;}
    if(action==='switch-guided'){state.guidance=true;state.mode='review';location.hash='?mode=review';finishGuidanceChoice();return;}
    if(action==='guidance'){showGuidance();return;}
    if(action==='guidance-off'){state.guidance=false;if(state.modal)closeDialog();render(true);return;}
    if(action==='glossary'){showGlossary();return;}
    if(action==='risk-context'){
      var a=sim.draft&&sim.check().analysis;
      showDialog('risk-context','Historical losses are not this trade’s odds','<p class="dialog-lead">The disclosure describes annual results for a historical group of traders. It is not a probability for your selected option and does not tell you whether this order will profit.</p><div class="selected-example"><strong>Limited amount ≠ low chance of loss</strong><p>'+(a?'The whole '+money(a.grossMaxLossPaise)+' premium in this order can be lost. Costs are additional.':'A purchased option can lose its entire premium. Costs are additional.')+'</p></div><p class="small">POP would need a specified model and assumptions; it is not calculated here. The reproduced disclosure is based on FY 2021–22, not presented as the latest data.</p>','<button class="primary" data-action="close-dialog">Back to my screen</button>');return;
    }
    if(action==='answer-term'){
      var query=document.getElementById('term-question').value,answer=document.getElementById('term-answer');
      if(/which|recommend|should i|pick|suggest|predict|forecast|best|suitable/i.test(query)){answer.textContent=X.answer('which strike');return;}
      var words=query.toLowerCase().replace(/[^a-z ]/g,' ').split(/\s+/).filter(function(w){return w.length>2&&!['what','does','mean','explain','the','how','about'].includes(w);});
      var match=Object.keys(G.terms).find(function(k){return words.some(function(w){return (k+' '+G.terms[k][0]).toLowerCase().includes(w);});});
      var term=match&&G.get(match,context());answer.textContent=term?term.title+': '+term.definition+' '+term.caution:X.answer(query);return;
    }
    if(action==='try-fill'){var attempted=sim.fill(b.dataset.id,'full');render();var feedback=document.getElementById('fill-feedback');if(feedback)feedback.textContent=attempted.ok?'Filled '+attempted.units+' units at '+money(attempted.pricePaise)+'.':attempted.message;notify(attempted.ok?'Synthetic execution recorded. See the filled quantity and actual position.':attempted.message);return;}
    if(action==='keep-pending'){notify('No fill event sent. The order remains pending; any position stays open.');return;}
    if(b.dataset.mode){location.hash='?mode='+b.dataset.mode;return;}
    if(b.dataset.nav){var name=b.dataset.nav;if(name==='Option Chain'){enterFno();}else if(name==='Orders'){state.view='orders';render(true);}else if(name==='Portfolio'){state.view='portfolio';render(true);}else showSidebar(name);return;}
    if(b.dataset.contract){if(!state.riskAcknowledged||state.guidance===null){state.pendingContractId=b.dataset.contract;enterFno();}else openTicket(b.dataset.contract,false);return;}
    if(b.dataset.exit){openTicket(b.dataset.exit,true);return;}
    if(b.dataset.position){state.contractId=b.dataset.position;state.view='position';render(true);return;}
    if(b.dataset.status){state.orderId=b.dataset.status;state.view='status';render(true);return;}
    if(action==='chain'){state.view='chain';state.exit=false;render(true);}
    if(action==='orders'||action==='portfolio'){state.view=action;render(true);}
    if(action==='review'){readDraft();sim.review();state.view='review';state.submitKey=sim.reviewRecord.id;render(true);}
    if(action==='edit'){state.view=state.exit?'exit-ticket':'ticket';render(true);}
    if(action==='recalculate'){sim.review();state.submitKey=sim.reviewRecord.id;render();notify('Review recalculated using the current synthetic inputs.');}
    if(action==='submit'){var r=sim.submit(state.submitKey);if(r.ok){state.orderId=r.order.id;state.view='status';render(true);}else{notify(r.message);render();}}
    if(action==='cancel'){var cancel=sim.cancel(b.dataset.id);notify(cancel.ok?'Unfilled remainder cancelled. Existing fills remain.':cancel.message);render();}
  });
  app.addEventListener('change',function(event){
    if(event.target.id==='buyer-view'){state.chainView=event.target.value;render();var select=document.getElementById('buyer-view');if(select)select.focus();return;}
    if(event.target.id==='not-sure'){sim.user.lossBudgetPaise=event.target.checked?null:0;sim.user.lossBudgetInvalid=false;var field=document.getElementById('loss-budget');if(field)field.value=event.target.checked?'':'0';refreshTicket();return;}
    if(['lots','limit-price','loss-budget','exit-type','trigger-price'].includes(event.target.id)){
      readDraft();if(event.target.id==='exit-type'){render();var selector=document.getElementById('exit-type');if(selector)selector.focus();}else refreshTicket();
    }
  });
  document.addEventListener('input',function(event){
    if(['lots','limit-price','loss-budget','trigger-price'].includes(event.target.id)){readDraft();refreshTicket();}
    if(event.target.id==='metric-search')document.getElementById('glossary-results').innerHTML=glossaryRows(event.target.value);
    if(event.target.id==='expiry-slider')updatePayoff();
  });
  document.getElementById('experience-dialog').addEventListener('cancel',function(){state.modal=null;});
  document.getElementById('apply-scenario').addEventListener('click',function(){
    var name=document.getElementById('scenario').value;if(!state.contractId)openTicket('A',false);
    var id=state.contractId;
    if(name==='normal'){sim.contracts[id]=F.contract(id);}
    sim.applyScenario(name,id);
    if(name==='missing-data'){sim.contracts[id].lotSize=null;}
    if(name==='expired'){sim.contracts[id].expiryMs=sim.clock-1;}
    if(name==='changed'&&state.view!=='review'){state.view='review';state.submitKey=sim.reviewRecord?sim.reviewRecord.id:null;}
    render();message('Applied '+document.getElementById('scenario').selectedOptions[0].text+'. Synthetic inputs changed; previous reviews may be invalid.');
  });
  document.getElementById('load-fixture').addEventListener('click',function(){var id=document.getElementById('fixture').value;if(id)openTicket(id,false);else message('Choose a test fixture.');});
  function activeId(){return document.getElementById('active-order').value;}
  document.getElementById('fill-now').addEventListener('click',function(){var r=sim.fill(activeId(),'full');render();message(r.ok?'Filled '+r.units+' units at '+money(r.pricePaise)+'.':r.message);});
  document.getElementById('partial-fill').addEventListener('click',function(){var r=sim.fill(activeId(),'partial');render();message(r.ok?'Filled '+r.units+' units; any remainder stays pending.':r.message);});
  document.getElementById('reject-order').addEventListener('click',function(){var r=sim.reject(activeId());render();message(r.ok?'Remaining units rejected; existing fills remain.':r.message);});
  document.getElementById('stay-pending').addEventListener('click',function(){var o=sim.order(activeId());message(o&&sim.active(o)?'No fill event sent. Order remains '+o.status+'.':'There is no active order to leave pending.');});
  document.getElementById('settle').addEventListener('click',function(){var s=E.parsePaise(document.getElementById('settlement-level').value),r=sim.settle(s);state.view='portfolio';render();message(r.ok?'Expiry processed at '+level(s)+'. Pending remainders expired.':r.message);});
  document.getElementById('reset').addEventListener('click',function(){sim.reset();state.view='chain';state.contractId=null;state.orderId=null;state.exit=false;state.submitKey=null;state.riskAcknowledged=false;state.guidance=null;state.chainView='buyer';state.pendingContractId=null;if(state.modal)closeDialog();document.getElementById('scenario').value='normal';document.getElementById('fixture').value='';render(true);message('Simulation reset. Orders, positions, reservations and scenarios cleared.');});
  document.getElementById('open-sell').addEventListener('click',function(){if(!state.contractId)openTicket('A',false);var o=F.order(state.contractId,1);o.side='SELL';o.intent='OPEN';sim.setDraft(o);state.exit=false;sim.review();state.view='review';render(true);message('Opening Sell is outside this prototype; no order was sent.');});
  function mode(){document.getElementById('evaluator').hidden=!G.evaluatorEnabled(location.search);var m=(location.hash||location.search||'').match(/[?&]mode=(baseline|review)/);if(m)state.mode=m[1];if(state.mode==='baseline')state.guidance=false;render();}
  window.addEventListener('hashchange',mode);mode();
  // Expose a read-only diagnostic entry point for sandbox UI checks; no network or account data.
  root.FTUI={snapshot:function(){return F.clone({view:state.view,mode:state.mode,guidance:state.guidance,riskAcknowledged:state.riskAcknowledged,cashPaise:sim.cashPaise,reservedPaise:sim.reservedPaise(),orders:sim.orders,positions:sim.positions});}};
}(typeof globalThis!=='undefined'?globalThis:this));
````

## docs/ASSUMPTIONS.md

````markdown
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
````

## docs/CHANGES.md

````markdown
# v2.1 P0 changes

P0 only: fee adapter/config and complete net-equation breakeven; four-consequence review with collapsed detail and equal actions; chain entry with preserved user selection; hidden evaluator drawer except `?eval=1`; reviewer README,553-word one-pager, original-prompt template and prewritten comprehension kit; expanded executable checks and full source handoff.

No real fees, participant outcomes or prompt history are invented. No remote commit/PR/deployment was made. P1/P2 remain deferred. See [P0_REVIEW.md](P0_REVIEW.md) and [EVALS.md](EVALS.md).

---

The following records the earlier v2 delivery; its deployment/version wording is historical.

# v2.0 changes

## What the audit found

The published repository matched the v1 package. Nine sidebar controls intentionally showed only a stub message; the view dropdown had one option; a normal visitor had to discover evaluator controls to simulate a fill. Those implementation boundaries made the demonstration feel incomplete.

## What changed

1. F&O entry now opens the dated risk disclosure shown in the research screenshots, followed by an explicit optional guidance choice. It is a disclosure, not an account/KYC error.
2. Guidance explains the current screen and the user’s selected order, can be turned off, and is never a compulsory course.
3. Nine sidebar entries now open short, useful overview panels. Core Option Chain, Orders and Portfolio remain functional. No fake scalper, live alerts or cloud execution is claimed.
4. Forty-nine searchable metric/term definitions provide concise meanings and limitations. Inline help includes actual selected-order numbers when available. Uncalculated advanced metrics are explicitly marked.
5. OI/volume units are labelled; the option-view dropdown changes columns; six coherent normal contracts are available without recommendations. Edge/regression fixtures remain separate.
6. The expiry-outcome slider computes conditional P&L without altering the chosen order.
7. Normal status screens now offer simulated entry and closing fills. A pending order is still not a position; matching/depth rules remain enforced.
8. Numeric edits update values in place, preserving the input node and avoiding lost clicks/keyboard focus.
9. The historical disclosure is not described as current personal odds. Costs remain explicitly synthetic.
10. Baseline mode explicitly identifies itself and does not promise guidance it hides.

## Upload

Replace all existing root files and folders with the new ZIP’s extracted contents. Keep index.html at the repository root. No npm install, build, keys or server are needed. The interface should show v2.0. No remote commit, PR or deployment was made by this update.

## Remaining limits

No human comprehension result is claimed. The actual Nubra ticket remains unobserved and is labelled proposed. Real fees and current compliance/RMS requirements remain unverified. This update stays entirely synthetic and offline.
````

## docs/COMPREHENSION_TEST.md

````markdown
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
````

## docs/DEPLOY.md

````markdown
# Deployment and packaging

This P0 package is a static project site. No installation, build, server, API keys, CDN or external fonts are required. Runtime state is memory-only and clears on reload. No remote commit, PR or deployment is included in this delivery.

## GitHub Pages — three steps

1. Extract the ZIP. Upload its contents to the repository root on `main`, replacing matching files. `index.html`, `tests.html`, `assets/`, `tests/`, `docs/` and the empty `.nojekyll` belong directly at the root. Upload the contents, not the ZIP or an extra enclosing folder. Commit the files yourself.
2. Open **Settings → Pages → Build and deployment → Source: Deploy from a branch → main → / (root) → Save**.
3. Open the supplied Pages URL. Confirm **v2.1 P0**, then run `tests.html` and the click checklist. All asset paths are relative and support a repository prefix.

## Local use and tests

Open `index.html` or `tests.html` directly in a modern browser. If Node is installed, run `node tests/golden.test.js` from the project root; no packages are required. Actual file-transport verification status is recorded in EVALS.md separately from HTTP/browser checks.

## Evaluator controls

Append `?eval=1` to `index.html` or the site root. With comparison modes, use `index.html?eval=1#?mode=baseline` or `index.html?eval=1#?mode=review`. The drawer remains collapsed until expanded. This is a display setting, not an authentication boundary. Normal order submission and explicit simulated fills work without the drawer.

- Scenario: Normal restores fixture metadata/fresh quote/demo fees; stale, wide, no bid, missing fees or metadata, expired and changed-after-review exercise existing checks.
- Separate fixture: GOLD-C/GOLD-P are the hand-calculation cases. REG-C/REG-P are inferred-price regression cases. D is the unsupported stock case.
- Partial 50% needs at least two remaining whole lots. Cancel/reject affects only unfilled units.
- Expiry input processes the existing one-event synthetic settlement. No exchange calendar or intraday session engine is represented.
- Reset clears the simulation, returns to the chain and repeats first-entry disclosure when opening a contract or F&O. Reload also resets.

## Fee configuration

Keep the default synthetic profile until the tariff fields and independent checks in FEES.md are complete. The file is `assets/js/fee-config.js`; it is a classic-script config, not fetched JSON. Preserve load order: config → fees → fixtures → engine → simulator → explain → guide → UI.

## Packaging

Create an archive of root contents, including `.nojekyll`. Exclude local preview configuration, `dist/`, Git history, credentials, temporary tools and screenshots used only for QA. No `.github` workflow is included in P0; CI is deferred to P2.
````

## docs/EVALS.md

````markdown
# Evaluation report — v2.1 P0

## Actual run status — 26 October 2026

| Check | Actual result | What this establishes / limit |
|---|---|---|
| Untouched audited v2 Node suite | **121 PASSED /0FAILED** | Baseline before any edits |
| Final Node shared suite | **150 PASSED /0FAILED /0NOT RUN** |121 retained +29 new; deterministic financial/state/copy/policy checks |
| Classic-script UMD, Node VM | **150 PASSED /0FAILED** | Config/module load order without imports/CommonJS in browser path |
| Chrome tests.html, static HTTP root | **161 PASSED /0FAILED /0NOT RUN** |150 shared +11 browser-native DOM integration cases |
| Chrome tests.html, /repo-check/ prefix | **161 PASSED /0FAILED /0NOT RUN** | Same suites from a GitHub project-style prefix |
| Retained DOM event harness | **29 PASSED /0FAILED** | v2 journeys retained through P0; temporary development-only DOM runtime, no dependency shipped |
| Static/source audit | **17 PASSED /0FAILED** | Local relative assets, syntax, no runtime data requests/imports, empty .nojekyll, copy and document checks |
| Direct file:// browser transport | **NOT RUN** | Cloud browser permits HTTP/HTTPS only. No protocol-policy workaround; shared scripts were loaded from local disk in Node/VM. Browser UI iframe suite explicitly reports NOT RUN on file origins. |
| Candidate's independent spreadsheet | **NOT RUN** | Expected values provided in FEES.md, no candidate verification fabricated |
| Human comprehension /90-day outcomes | **NOT RUN** | Protocol, CSV and criteria exist; no participant results |
| P0 on remote GitHub Pages | **NOT RUN** | Existing published v2 inspected; this delivery does not commit or deploy |
| Full P2 accessibility/CI work | **NOT RUN / deferred** | No certification or workflow run claimed |

Node version: `v24.22.1`. A “PASSED” above means the check actually ran. Browser DOM tests click controls in an isolated iframe; they do not represent human understanding. Automated test counts do not indicate market validity.

## Per-area shared results

| Area | Passed | Failed |
|---|---:|---:|
| Fees | 6 | 0 |
| Golden | 19 | 0 |
| Regression | 12 | 0 |
| Math | 5 | 0 |
| Scope | 3 | 0 |
| Validation | 8 | 0 |
| Risk | 9 | 0 |
| Review | 10 | 0 |
| Orders | 13 | 0 |
| Exit | 12 | 0 |
| Expiry | 5 | 0 |
| Scenarios | 3 | 0 |
| Copy | 4 | 0 |
| Ledger | 1 | 0 |
| Guidance | 8 | 0 |
| Fixtures | 3 | 0 |
| Fee adapter | 14 | 0 |
| Fee ledger | 5 | 0 |
| Properties | 5 | 0 |
| UI policy | 1 | 0 |
| Copy lint | 4 | 0 |

## What the added checks prove

- **Fee adapter (14):** named old flat regression, structured categories per side, incomplete real config rejected, exact context/rounding/cap/GST rules, independent variable-fee entry/exit/settlement golden numbers, call/put roots and unavailable bounds.
- **Fee ledger (5):** cumulative fee deltas for partial fills; cancelled remainder; actual closing price; settlement snapshot; row changes invalidating a review even without version changes.
- **Properties (5):** root round-trip across call/put fixtures, profiles and lot counts; zero-payoff loss equals premium+applicable path fees; premium scales with lots and fixed fees remain an intercept; variable fees scale under stipulated uncapped rules; finite put maximum.
- **UI policy (1):** exact query opt-in; default, similar names/values and hash-looking inputs do not expose controls.
- **Copy lint (4):** every metric definition/caution/example and sidebar template, disclosure and boundary responses; full consequence packets across supported fixtures, two fee models and ten lifecycle states; all existing scenario names plus opening-sale/restricted-stock/metadata/expiry failures. Missing elements or banned phrases fail. Required outlay/max-loss/“breakeven at expiry”/exit elements apply to a **complete review packet**, not an individual glossary definition. Blocked packets state unavailable amounts explicitly. This is a syntactic check, not a guarantee against every form of advisory wording.

Banned phrases: great choice; safe; guaranteed; recommended; you should; don't miss; trending; hot (case-insensitive whole phrases/words). Negative “guaranteed” sentences were rewritten too. Financial amounts remain rupees first; margins are not max-loss limits. Glossary/probability explanations do not invent a personal chance of profit.

## Executable boundary/state coverage retained

| Case family | Expected behaviour |
|---|---|
| Opening sale / stock / futures | Rejected; no opening short or unsupported payoff claim |
| Excess/concurrent close | Reserve held units; reject oversell; never become short |
| Fractional/negative lots / non-positive or invalid-tick price | Reject, no silent rounding |
| Missing contract/quote/fees | Block and show unavailable; costs never replaced with zero |
| Stale>30s / future / wide>5% midpoint / no bid / crossed | Block under explicit prototype policies |
| Changed draft/quote/fees/budget/metadata/rules | Review invalidated until recalculation |
| Pending / nonmarketable / idempotency | No position until actual fill; one order/reservation; no repeated debit |
| Partial entry then cancel/reject | Filled units/costs persist; only remainder released |
| Close / partial close / stop gap | Actual price and allocated basis; pending exit retains exposure; stop activation may not fill |
| Expiry / reset | Actual intrinsic settlement; pending DAY remainders expire; repeat settlement blocked; reset clears state |
| Optional guidance and baseline | No compulsory course; preserved selected contract; constructed baseline clearly labelled |

## Browser-native UI cases — all11 PASSED

- Default opens the chain and hides the evaluator drawer.
- Exact eval flag reveals a collapsed drawer.
- Direct chosen contract survives disclosure and optional context choices.
- Review has four essential answers, closed detail sections and equal actions.
- Expanding scenarios does not submit, reserve or change the order.
- Baseline remains a constructed plain summary without consequence cards.
- Edit and back out create no fees, position or reservation.
- Fee failure removes totals and blocks simulated submission.
- Changed-after-review blocks place until recalculation.
- Numeric input preserves its node and updates actual reviewed quantity.
- Normal entry and close still reconcile actual fill fees.

## Rendered inspection actually performed

Default chain has no evaluator drawer. Direct22,600-call selection opens the dated disclosure and optional invitation, then retains that ticket after declining context. The rendered review shows four consequence cards, approximate expiry root and explicit estimate labels. Back-out, Edit and Place use the same style/width; detail rows are closed. This subset does not constitute the deferred full keyboard/mobile/contrast pass.

## Financial expected values to verify independently

Use [FEES.md](FEES.md) for full values and formulas. Especially recompute: premium versus entry funds versus complete-path loss; one/two lots; both22,600 regression roots and rounding residuals; finite put gain; variable entry₹80.80; price-dependent call20,102.65 and put19,897.35 thresholds with +₹0.37 residual; early-close₹716.60; partial-fill fee delta₹69.00. Candidate spreadsheet verification remains NOT RUN.

## Software findings and corrections

A new query-policy test initially failed because a hash-looking input was accepted. The function now requires a query starting with `?`. Additional browser checks cover preserving the selected contract through guidance choices and keeping the current ticket when guidance is re-enabled. These are implementation findings; no participant behaviour is inferred.

## Full shared test list — what each executable check proves

Each name states the invariant/expected behaviour asserted by that case. Property/ledger cases contain multiple checks, including3,600 seeded steps in the retained ledger test; those steps are not counted as separate participants or test cases.

| Area | Executable assertion / purpose | Actual result |
|---|---|---|
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
| Guidance | All displayed critical metrics have complete definitions and cautions | PASSED |
| Guidance | Nine sidebar overviews have actual content rather than a dead-end stub | PASSED |
| Guidance | Order explanation reflects actual lots, units and costs | PASSED |
| Guidance | Metric explanation uses selected-order premium and expiry breakeven | PASSED |
| Guidance | Missing selected-order context never fabricates a personalised number | PASSED |
| Guidance | Historical disclosure is dated and explicitly not personal order odds | PASSED |
| Guidance | Advanced probabilities and Greeks are not invented numerical values | PASSED |
| Guidance | Search finds premium and uses an empty result for unknown terms | PASSED |
| Fixtures | All six normal chain contracts support valid purchase reviews | PASSED |
| Fixtures | Synthetic paired ask differences are consistent with the stipulated spot/strike | PASSED |
| Fixtures | Chain activity is explicitly reported in contracts | PASSED |
| Fee adapter | Old flat profile remains a named, unchanged regression | PASSED |
| Fee adapter | Active profile uses structured rows for every category and side | PASSED |
| Fee adapter | Nubra placeholder config is incomplete and cannot be used as zero fees | PASSED |
| Fee adapter | Missing category, missing rate and duplicate IDs fail closed | PASSED |
| Fee adapter | Fee context must supply both integer-paise bases | PASSED |
| Fee adapter | Independent turnover golden entry ₹80.80 and funds ₹5,080.80 | PASSED |
| Fee adapter | Early-sale path is ₹283.40, net ₹716.60 at exit premium ₹120 | PASSED |
| Fee adapter | Settlement charge recomputes from actual intrinsic proceeds | PASSED |
| Fee adapter | Price-dependent call root solves net equation, not fixed-cost addition | PASSED |
| Fee adapter | Price-dependent put root solves the reversed net equation | PASSED |
| Fee adapter | Variable model never claims an unproven all-in maximum loss | PASSED |
| Fee adapter | Discontinuous ITM model blocks submission instead of inventing a root | PASSED |
| Fee adapter | Caps, minima, component GST and explicit line rounding apply | PASSED |
| Fee adapter | GST cannot depend recursively on GST | PASSED |
| Fee ledger | Variable entry partials charge a cumulative fee delta, not two fixed fees | PASSED |
| Fee ledger | Partial cancellation retains only fees earned on filled turnover | PASSED |
| Fee ledger | Closing variable fees reconcile against actual bid and allocated entry cost | PASSED |
| Fee ledger | Settlement uses position tariff snapshot and actual payoff | PASSED |
| Fee ledger | Changed fee rows invalidate review even without a version bump | PASSED |
| Properties | Every normal and regression contract: call/put breakeven round-trip | PASSED |
| Properties | Call zero-payoff loss equals premium plus actual entry/settlement fees | PASSED |
| Properties | Lots scale premium exactly; fixed fees remain an intercept | PASSED |
| Properties | Turnover fees scale affinely with lots under this uncapped fixture | PASSED |
| Properties | Put maximum profit remains finite under variable settlement fees | PASSED |
| UI policy | Evaluator controls are opt-in by exact query flag | PASSED |
| Copy lint | All metric definitions, cautions, examples and sidebar templates avoid banned phrases | PASSED |
| Copy lint | Every fixture, fee model and lifecycle state retains the four required elements | PASSED |
| Copy lint | Every abnormal scenario produces neutral blocked or complete consequence copy | PASSED |
| Copy lint | No-feasible and unavailable-root branches do not claim a profit condition | PASSED |

## Run again

Open tests.html from HTTP/Pages to run150 shared +11 UI integration cases. From disk, the150 shared cases run and iframe UI integration is labelled NOT RUN. Node: `node tests/golden.test.js`. All require no installation. Run COMPREHENSION_TEST.md separately with people. Fill actual outcomes in results_template.csv and keep failed/partial answers.
````

## docs/FEES.md

````markdown
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
````

## docs/MANUAL_CHECKS.md

````markdown
# Manual verification — expected results, not participant findings

All money below uses the active synthetic profile. Perform on the deployed P0 copy; current remote P0 deployment is **NOT RUN**.

| Click / action | Expected result |
|---|---|
| Open root without parameters | v2.1P0, synthetic banner, Option Chain, no evaluator drawer; no chosen contract |
| Click22,600 call | Historical risk disclosure, then optional context; choosing Continue without guidance opens that same call's proposed ticket |
| Close/leave disclosure | No acknowledgement/order/fees; chain remains available |
| One lot, limit100.20, Review order | 65units; premium₹6,513 + entry₹25 =₹6,538; most lost under single-path assumption₹6,563; approximate breakeven22,700.97 **at expiry**; exit can remain pending |
| Inspect review before opening details | Four immediate answers; scenarios, before-expiry, liquidity and expiry/cost notes collapsed |
| Inspect action row | Back out, Edit and Place have the same style/width; no approval badge |
| Expand each detail section | Real explanations; three equally prominent loss/near-break-even/profit cases; slider changes conditional P&L only |
| Edit lots to2 and click Review | 130units; premium₹13,026, entry₹13,051; no input focus replacement or missed click |
| Back out from review | No order, position or reserved funds |
| Place simulated order | Pending, not a position; no auto fill |
| Simulate a fill → Portfolio | Filled units held, actual price recorded |
| Exit position → review → place → simulate closing fill | Existing units close; no short. One lot A at100.20→100 produces net loss₹63; two lots produces₹76 |
| Open `index.html#?mode=baseline` | Plain constructed summary, explicitly labelled; same costs/checks; no four consequence cards |
| Open `index.html?eval=1` | Evaluator drawer visible but collapsed; expanding exposes existing controls |
| Load GOLD-C, one lot → Review | Entry₹5,025; loss₹5,050; breakeven20,101 at expiry |
| Load GOLD-P, one lot → Review | Same outlay/loss; breakeven19,899 at expiry; profit requires below it |
| Apply stale/wide/no bid/missing fees | Review blocked; missing fees never become zero. Normal restores synthetic data; review again |
| Apply changed after reviewing | Place disabled; explicit Recalculate review needed |
| Two-lot pending order → Partial50% → Cancel remainder | One lot remains held; only remainder funds released; entry fee charged once |
| Load restricted D or Test opening Sell | Unsupported; no submitted order |
| Exit quantity above held / fractional lots / negative price | Blocks; no silent rounding or short |
| Process GOLD-C expiry at20,200 | If one lot filled at100: net₹4,950; pending remainders expire; repeat settlement blocked |
| Run tests.html | Per-area counts; shared suite plus browser UI checks. Check current actual counts in EVALS.md |
| Reload / Reset | No persisted order/account state; first-entry disclosure repeats |

Recompute the fee and breakeven values in FEES.md in a separate spreadsheet. Then run the **human** protocol in COMPREHENSION_TEST.md. Neither this click list nor automated browser assertions are human comprehension evidence.

P1 features (new expiries, teach-back UI, session download, sidebar restyle and repo metadata/screenshots) and P2 work (formal keyboard/mobile/contrast pass, GitHub Action) are intentionally deferred.
````

## docs/ONE_PAGER.md

````markdown
# First order, understood

## Problem framing

An equity investor has chosen an options contract but may still misunderstand the commitment behind Buy. The working thesis is that fear of unbounded loss and the absence of an informed moment at the order can matter more than another information resource. This is a hypothesis, not a validated explanation of first-trade behaviour. The product should expose foreseeable consequences before submission. Confidence matters only when the person can explain those consequences; proceeding is not the required outcome.

## Why Nubra

The supplied Nubra dashboard captures show a dense option chain, Option Buyer mode, advanced tools and a Strategies view with max loss, breakeven, probability of profit and margin. Adding those numbers alone would not establish differentiation. The opportunity is to place a concise consequence review beside the chosen order. Nubra's actual order ticket was not observed, so this prototype does not establish that Nubra lacks these explanations today.

## Solution space

A course, a blanket warning and a contract recommender solve different problems. This concept tests an optional order-context layer followed by a review with four immediate answers: total entry outlay, full loss exposure, the condition for profit at expiry, and how to exit if execution is available. Scenarios and technical detail remain available on demand. Edit, back out and simulated submission have equal prominence. No comprehension badge endorses a trade.

## In scope

A simulated review of a user-selected, single-leg, cash-settled index option purchase; deterministic quantities, fee estimates and expiry outcomes; pending versus filled orders; and selling an existing long to close. All data and fees are synthetic. The ticket is explicitly proposed, not Nubra's actual ticket. A structured fee adapter separates entry, closing and settlement paths without claiming a verified Nubra tariff.

## Out of scope

Opening sales, stock options, futures, multi-leg strategies, live feeds, runtime LLMs, real orders, forecasts, contract recommendations, position sizing and suitability judgements.

## Evidence and limitations

The research log contains two friend conversations. One reports a risk warning and family restrictions; the other reports complexity and cost concerns alongside forex experience. These are reported barriers, not observed first-order behaviour. No recent first-options-order participant was interviewed. Kite and Nubra walkthroughs identify potential confusion but cannot prove comparative superiority or the absence of help elsewhere. Logged market statistics and inferred prices are not used as current forecasts. Automated checks validate stipulated calculations and states; they cannot validate understanding. Human comprehension tests and 90-day outcomes are **NOT RUN**.

## Success metrics

“Informed” means four uncoached answers are correct: entry cost, material loss exposure, expiry profit condition and exit/non-fill mechanics. The primary formative finding is the count of confident-but-wrong answers, alongside correctness by dimension, voluntary back-outs and time to explain. A counterbalanced constructed baseline/review comparison uses matched call/put fixtures; 2–3 people can expose failures, not establish statistical lift. A later secondary metric is “informed and still active at 90 days”: initial comprehension plus voluntary account engagement, including non-trading use, paired with repeat comprehension and surprise-cost complaints. It must not reward F&O frequency. Targets and actual results remain [FILL: after testing].

## Broker-incentive tension

More orders can produce more broker revenue, while an informed customer may trade less or decline. The concept treats that decline as valid. Conversion alone would reward the wrong behaviour; comprehension and fewer material surprises must constrain any business claim.
````

## docs/P0_REVIEW.md

````markdown
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
````

## docs/PROMPTS.md

````markdown
# Actual prompt record — template only

This document contains no reconstructed prompt history. Paste the original messages exactly, including typos, constraints, failed attempts and later corrections. Do not edit them to match the final implementation. Separate commentary about outcomes from the original prompt text.

## Prompt 1

Tool/model: [FILL: actual tool/model if known]
Date/time: [FILL: actual or unknown]
Purpose: [FILL: brief factual label]

```text
[PASTE AS-IS]
```

Outcome: [FILL: what happened; include failures]
Evidence/artifact: [FILL: chat export, link or file]

## Prompt 2 — subsequent iteration

Tool/model: [FILL]
Date/time: [FILL]

```text
[PASTE AS-IS]
```

Outcome: [FILL]

## Failed or abandoned attempt

Tool/model: [FILL]
Date/time: [FILL]

```text
[PASTE AS-IS]
```

Observed failure: [FILL: exact limitation/error; do not invent one]
Follow-up: [FILL: link to the next actual message]

Duplicate these slots for every actual prompt, including the P0 audit/change request and later continuation messages. Keep original attached files/exports alongside the log where permitted. A summary of a prompt is not the submitted prompt.
````

## docs/results_template.csv

````csv
participant_id,task,mode,fixture,status,dimension,confidence_before_1_5,verbatim_first_answer,score_correct_partial_wrong,confidence_after_1_5,confident_but_wrong_0_1,time_seconds,decision_proceed_edit_decline,assistance,glossary_or_details_used,notes
P1,1,baseline,GOLD-C,NOT RUN,total_cost,,,,,,,,,,
P1,1,baseline,GOLD-C,NOT RUN,maximum_loss,,,,,,,,,,
P1,1,baseline,GOLD-C,NOT RUN,profit_at_expiry,,,,,,,,,,
P1,1,baseline,GOLD-C,NOT RUN,exit_nonfill,,,,,,,,,,
P1,2,review,GOLD-P,NOT RUN,total_cost,,,,,,,,,,
P1,2,review,GOLD-P,NOT RUN,maximum_loss,,,,,,,,,,
P1,2,review,GOLD-P,NOT RUN,profit_at_expiry,,,,,,,,,,
P1,2,review,GOLD-P,NOT RUN,exit_nonfill,,,,,,,,,,
P2,1,review,GOLD-C,NOT RUN,total_cost,,,,,,,,,,
P2,1,review,GOLD-C,NOT RUN,maximum_loss,,,,,,,,,,
P2,1,review,GOLD-C,NOT RUN,profit_at_expiry,,,,,,,,,,
P2,1,review,GOLD-C,NOT RUN,exit_nonfill,,,,,,,,,,
P2,2,baseline,GOLD-P,NOT RUN,total_cost,,,,,,,,,,
P2,2,baseline,GOLD-P,NOT RUN,maximum_loss,,,,,,,,,,
P2,2,baseline,GOLD-P,NOT RUN,profit_at_expiry,,,,,,,,,,
P2,2,baseline,GOLD-P,NOT RUN,exit_nonfill,,,,,,,,,,
P3,1,baseline,GOLD-P,NOT RUN,total_cost,,,,,,,,,,
P3,1,baseline,GOLD-P,NOT RUN,maximum_loss,,,,,,,,,,
P3,1,baseline,GOLD-P,NOT RUN,profit_at_expiry,,,,,,,,,,
P3,1,baseline,GOLD-P,NOT RUN,exit_nonfill,,,,,,,,,,
P3,2,review,GOLD-C,NOT RUN,total_cost,,,,,,,,,,
P3,2,review,GOLD-C,NOT RUN,maximum_loss,,,,,,,,,,
P3,2,review,GOLD-C,NOT RUN,profit_at_expiry,,,,,,,,,,
P3,2,review,GOLD-C,NOT RUN,exit_nonfill,,,,,,,,,,
````

## index.html

````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="An offline concept prototype for understanding a chosen first options order. Synthetic data, simulated orders only.">
  <title>Order clarity · First order, understood</title>
  <link rel="icon" href="data:,">
  <link rel="stylesheet" href="assets/css/styles.css?v=2.1-p0">
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <div class="concept-banner">Concept prototype - Synthetic data - No real orders</div>
  <header class="topbar"><div class="wordmark">ORDER<span> / </span>CLARITY <span class="concept-tag">CONCEPT</span></div>
    <button class="product-tab" data-action="enter-fno" id="fno-entry">F&amp;O</button><span class="release-tag">v2.1 P0</span><div class="header-tools"><button class="text-button" id="guidance-toggle" data-action="guidance">Guidance</button><button class="text-button" data-action="glossary">Metrics explained</button></div>
    <a class="test-link" href="tests.html">Run tests <span aria-hidden="true">↗</span></a>
  </header>
  <div class="fee-estimate-notice" id="fee-estimate-notice">Amounts including fees: estimate - synthetic fee profile</div>
  <div class="market-strip"><span class="strip-label">SYNTHETIC SNAPSHOT</span><span>DEMO INDEX <b>22,608.20</b></span><span>DEMO BANK <b>688.00</b></span><span id="clock-label">26 Oct 2026 · 13:00 IST</span><span class="offline-label">Offline simulation</span></div>
  <div class="workspace"><nav id="sidebar" class="sidebar" aria-label="Dashboard navigation"></nav><main id="main" tabindex="-1"><div id="app"></div></main></div>
  <dialog id="experience-dialog" aria-labelledby="dialog-title"><div id="dialog-content"></div></dialog>
  <div id="toast" class="toast" role="status" aria-live="polite" hidden></div>
  <details hidden id="evaluator" class="evaluator">
    <summary><span class="drawer-dot" aria-hidden="true"></span> Evaluator controls </summary>
    <div class="drawer-content">
      <div class="mode-control evaluation-mode" role="group" aria-label="Comprehension test mode"><button id="review-mode" data-mode="review">Review layer</button><button id="baseline-mode" data-mode="baseline">Constructed baseline</button></div>
      <p class="policy-note">Prototype policies, not Nubra or exchange rules: stale &gt; 30 seconds; spread &gt; 5% of midpoint blocks review. Fills are evaluator-triggered and must match a price and whole-lot depth.</p>
      <div class="controls-grid">
        <label>Scenario<select id="scenario"><option value="normal">Normal</option><option value="stale">Stale quote</option><option value="wide">Wide spread</option><option value="no-bid">No bid</option><option value="missing-fees">Missing fees</option><option value="changed">Data changed after review</option><option value="missing-data">Missing contract data</option><option value="expired">Expired contract</option><option value="stop-gap">Gap below pending stop-limit</option></select></label>
        <button id="apply-scenario" class="secondary">Apply scenario</button>
        <label>Separate test fixture<select id="fixture"><option value="">Choose a fixture</option><option value="A">A · Synthetic normal call</option><option value="B">B · Synthetic normal put</option><option value="C">C · Synthetic no-bid call</option><option value="D">D · Synthetic stock option (blocked)</option><option value="REG-C">Regression · 22,600 CE, ₹150.45</option><option value="REG-P">Regression · 22,600 PE, ₹78.95</option><option value="GOLD-C">Arithmetic · 20,000 CE, ₹100</option><option value="GOLD-P">Arithmetic · 20,000 PE, ₹100</option></select></label>
        <button id="load-fixture" class="secondary">Open fixture</button>
      </div>
      <div class="controls-grid fill-grid"><label>Active simulated order<select id="active-order"><option value="">No submitted orders</option></select></label><button id="fill-now" class="secondary">Fill now</button><button id="partial-fill" class="secondary">Partial 50%</button><button id="reject-order" class="secondary">Reject remainder</button><button id="stay-pending" class="secondary">Let it stay pending</button></div>
      <div class="controls-grid"><label>Expiry settlement level<input id="settlement-level" inputmode="decimal" value="22600.00"></label><button id="settle" class="secondary">Process synthetic expiry</button><button id="reset" class="danger-outline">Reset simulation</button><button id="open-sell" class="secondary">Test opening Sell</button></div>
      <p id="evaluator-result" class="drawer-result" role="status" aria-live="polite">Select a contract or test fixture to begin. Partial 50% needs at least two remaining lots.</p>
      <p class="small">No real account or network connection. Reset clears all orders, positions, reservations, and scenarios. Reload also starts a fresh simulation.</p>
    </div>
  </details>
  <script src="assets/js/fee-config.js?v=2.1-p0"></script><script src="assets/js/fees.js?v=2.1-p0"></script><script src="assets/js/fixtures.js?v=2.1-p0"></script><script src="assets/js/engine.js?v=2.1-p0"></script><script src="assets/js/simulator.js?v=2.1-p0"></script><script src="assets/js/explain.js?v=2.1-p0"></script><script src="assets/js/guide.js?v=2.1-p0"></script><script src="assets/js/ui.js?v=2.1-p0"></script>
</body>
</html>
````

## tests/browser-ui.test.js

````javascript
(function(root){
  'use strict';
  // Browser-native DOM integration checks. No test dependency or runtime data API.
  async function run(){
    var results=[],frame;
    function assert(v,message){if(!v)throw new Error(message);}
    async function load(query,hash){
      if(frame)frame.remove();frame=document.createElement('iframe');frame.title='Isolated UI test fixture';frame.setAttribute('aria-hidden','true');frame.tabIndex=-1;
      frame.style.cssText='position:fixed;left:-12000px;top:0;width:1024px;height:768px;pointer-events:none';
      var loaded=new Promise(function(resolve,reject){frame.onload=resolve;frame.onerror=function(){reject(new Error('Test iframe did not load.'));};});
      frame.src='index.html'+(query||'')+(hash||'');document.body.appendChild(frame);await loaded;
      var d=frame.contentDocument,w=frame.contentWindow;if(!d||!w.FTUI)throw new Error('Test iframe is inaccessible or failed to initialise.');
      function click(sel){var e=d.querySelector(sel);assert(e,'Missing '+sel);assert(!e.disabled,'Disabled '+sel);e.click();}
      function change(id,value){var el=d.getElementById(id);el.value=value;el.dispatchEvent(new w.Event('change',{bubbles:true}));}
      function begin(){click('#fno-entry');click('[data-action="ack-risk"]');click('[data-action="choose-unguided"]');}
      return {d:d,w:w,click:click,change:change,begin:begin,snapshot:function(){return w.FTUI.snapshot();}};
    }
    async function test(name,fn){try{await fn();results.push({area:'Browser UI',name:name,pass:true,detail:''});}catch(e){results.push({area:'Browser UI',name:name,pass:false,detail:e.message});}}
    if(location.protocol==='file:')return [{area:'Browser UI',name:'Iframe DOM integration',pass:null,detail:'NOT RUN: file-origin iframe access differs by browser. Shared calculation tests above still run; use HTTP/Pages for UI suite.'}];
    await test('Default opens the chain and hides the evaluator drawer',async function(){var a=await load();assert(a.snapshot().view==='chain','Must open into chain');assert(a.d.getElementById('evaluator').hidden,'Drawer must be hidden');assert(!/frozen clock|Reproducible scenarios/.test(a.d.getElementById('app').textContent),'Default jargon');});
    await test('Exact eval flag reveals a collapsed drawer',async function(){var a=await load('?eval=1');assert(!a.d.getElementById('evaluator').hidden,'Drawer missing');assert(!a.d.getElementById('evaluator').open,'Drawer must begin collapsed');});
    await test('Direct chosen contract survives disclosure and optional context choices',async function(){var a=await load();a.click('[data-contract="A"]');assert(a.d.getElementById('dialog-title').textContent.includes('Risk disclosure'),'Disclosure first');a.click('[data-action="ack-risk"]');a.click('[data-action="choose-unguided"]');assert(a.snapshot().view==='ticket','Chosen ticket should open');assert(a.d.getElementById('app').textContent.includes('22,600.00 CE'),'Selected contract retained');assert(a.snapshot().orders.length===0,'No order created');a=await load();a.click('[data-contract="A"]');a.click('[data-action="ack-risk"]');a.click('[data-action="choose-guided"]');assert(a.snapshot().view==='ticket'&&a.snapshot().guidance,'Guided choice retains ticket');a.click('[data-action="guidance-off"]');a.click('#guidance-toggle');a.click('[data-action="choose-guided"]');assert(a.snapshot().view==='ticket','Guidance toggle retains current order');a=await load('','#?mode=baseline');a.click('[data-contract="A"]');a.click('[data-action="ack-risk"]');a.click('[data-action="switch-guided"]');assert(a.snapshot().view==='ticket'&&a.snapshot().mode==='review','Explicit baseline switch retains choice');});
    await test('Review has four essential answers, closed detail sections and equal actions',async function(){var a=await load();a.begin();a.click('[data-contract="A"]');a.click('#review-order');assert(a.d.querySelectorAll('[data-essential]').length===4,'Four essentials');assert(a.d.querySelectorAll('.review-detail').length===4,'Four disclosure sections');assert(a.d.querySelectorAll('.review-detail[open]').length===0,'Details should be collapsed');assert(a.d.querySelectorAll('.decision-actions .decision-button').length===3,'Three equally styled actions');var t=a.d.querySelector('.review-essentials').textContent;['₹6,538.00','₹6,563.00','Breakeven at expiry','How you exit','estimate - synthetic fee profile'].forEach(function(v){assert(t.includes(v),v);});});
    await test('Expanding scenarios does not submit, reserve or change the order',async function(){var a=await load();a.begin();a.click('[data-contract="A"]');a.click('#review-order');var before=a.snapshot();a.click('#scenario-detail summary');assert(a.d.getElementById('scenario-detail').open,'Details open');assert(a.snapshot().orders.length===0&&a.snapshot().reservedPaise===before.reservedPaise,'No ledger change');assert(a.d.querySelectorAll('.scenario-card').length===3,'All three outcome types');});
    await test('Baseline remains a constructed plain summary without consequence cards',async function(){var a=await load('','#?mode=baseline');a.begin();a.click('[data-contract="A"]');a.click('#review-order');assert(a.d.querySelector('.baseline-label').textContent.includes('Constructed baseline'),'Label');assert(a.d.querySelectorAll('[data-essential]').length===0,'No review cards in baseline');assert(a.d.getElementById('app').textContent.includes('₹6,538.00'),'Same entry funds');});
    await test('Edit and back out create no fees, position or reservation',async function(){var a=await load();a.begin();a.click('[data-contract="A"]');a.click('#review-order');a.click('[data-action="edit"]');assert(a.snapshot().view==='ticket','Edit ticket');a.click('#review-order');a.click('.decision-actions [data-action="chain"]');assert(a.snapshot().orders.length===0&&a.snapshot().reservedPaise===0,'No submission');});
    await test('Fee failure removes totals and blocks simulated submission',async function(){var a=await load('?eval=1');a.begin();a.click('[data-contract="A"]');a.change('scenario','missing-fees');a.click('#apply-scenario');a.click('#review-order');assert(a.d.querySelector('[data-error="FEES"]'),'Missing-fees error');assert(!a.d.getElementById('place-order'),'No submit control');assert(a.d.getElementById('app').textContent.includes('Entry outlay unavailable'),'Unknown amount explicit');});
    await test('Changed-after-review blocks place until recalculation',async function(){var a=await load('?eval=1');a.begin();a.click('[data-contract="A"]');a.click('#review-order');a.change('scenario','changed');a.click('#apply-scenario');assert(a.d.getElementById('place-order').disabled,'Blocked');a.click('[data-action="recalculate"]');assert(!a.d.getElementById('place-order').disabled,'Recalculated');});
    await test('Numeric input preserves its node and updates actual reviewed quantity',async function(){var a=await load();a.begin();a.click('[data-contract="A"]');assert(a.d.querySelector('.money-line.total .estimate-tag'),'Ticket total labelled estimate');var el=a.d.getElementById('lots');el.value='2';el.dispatchEvent(new a.w.Event('input',{bubbles:true}));assert(a.d.getElementById('lots')===el,'Input retained');a.click('#review-order');assert(a.d.getElementById('app').textContent.includes('130 units'),'Units');assert(a.d.querySelector('[data-essential="outlay"]').textContent.includes('₹13,051.00'),'Recomputed funds');});
    await test('Normal entry and close still reconcile actual fill fees',async function(){var a=await load();a.begin();a.click('[data-contract="A"]');a.click('#review-order');a.click('#place-order');assert(a.snapshot().orders[0].status==='PENDING','Pending first');a.click('[data-action="try-fill"]');a.click('[data-action="portfolio"]');a.click('[data-exit="A"]');a.click('#review-order');a.click('#place-order');a.click('[data-action="try-fill"]');assert(a.snapshot().positions.A.units===0,'No short');assert(a.snapshot().positions.A.realisedPaise===-6300,'Actual path loss');});
    if(frame)frame.remove();return results;
  }
  root.FTBrowserUI={run:run};
}(typeof globalThis!=='undefined'?globalThis:this));
````

## tests/golden.test.js

````javascript
(function(root,factory){
  if(typeof module==='object'&&module.exports){
    var suite=factory(require('../assets/js/engine.js'),require('../assets/js/fees.js'),require('../assets/js/fixtures.js'),require('../assets/js/simulator.js'),require('../assets/js/explain.js'),require('../assets/js/guide.js'));
    module.exports=suite;
    if(require.main===module){var results=suite.run();results.forEach(function(r){console.log((r.pass?'PASSED':'FAILED')+' | '+r.area+' | '+r.name+(r.detail?' | '+r.detail:''));});var failed=results.filter(function(r){return !r.pass;}).length;console.log('\n'+(results.length-failed)+' PASSED / '+failed+' FAILED / 0 NOT RUN');if(failed)process.exitCode=1;}
  }else root.FTTests=factory(root.FTEngine,root.FTFees,root.FTFixtures,root.FTSimulator,root.FTExplain,root.FTGuide);
}(typeof globalThis!=='undefined'?globalThis:this,function(E,Fees,F,S,X,G){
  'use strict';
  function equal(a,b){if(a!==b)throw new Error('Expected '+JSON.stringify(b)+'; received '+JSON.stringify(a));}
  function ok(v,msg){if(!v)throw new Error(msg||'Expected truthy value.');}
  function approx(a,b,tolerance){if(Math.abs(a-b)>(tolerance||1e-7))throw new Error('Expected approximately '+b+'; received '+a);}
  function throws(fn){var did=false;try{fn();}catch(e){did=true;}ok(did,'Expected an exception.');}
  function setup(id,lots){var s=new S.Simulation();s.setDraft(F.order(id||'GOLD-C',lots||1));return s;}
  function submit(s,key){var r=s.review();ok(r.ok,JSON.stringify(r.errors));var placed=s.submit(key||'test-key');ok(placed.ok,placed.message);return placed.order;}
  function open(s,id,lots,key){s.setDraft(F.order(id||'GOLD-C',lots||1));var o=submit(s,key);ok(s.fill(o.id,'full').ok);return o;}
  function closing(s,id,lots,type){var o=F.order(id,lots||1);o.side='SELL';o.intent='CLOSE';o.limitPaise=s.quotes[id].bidPaise;o.type=type||'LIMIT';s.setDraft(o);return o;}
  function has(check,code){return check.errors.some(function(e){return e.code===code;});}
  function run(){var results=[];
    function test(area,name,fn){try{fn();results.push({area:area,name:name,pass:true,detail:''});}catch(err){results.push({area:area,name:name,pass:false,detail:err.message});}}
    var gc=F.contract('GOLD-C'),gp=F.contract('GOLD-P'),fc=F.order('GOLD-C',1),fp=F.order('GOLD-P',1),fees=F.fees();
    var a=E.analyse(gc,fc,fees),p=E.analyse(gp,fp,fees);
    test('Fees','Named synthetic profile and 25/25/25 order charges',function(){equal(fees.name,"Synthetic demo fees (not Nubra's charges)");equal(fees.entryPaise,2500);equal(fees.exitPaise,2500);equal(fees.settlementPaise,2500);equal(fees.per,'ORDER');});
    test('Fees','Entry + exit path is ₹50',function(){equal(Fees.path(fees,'EXIT'),5000);});
    test('Fees','Entry + settlement path is ₹50',function(){equal(Fees.path(fees,'SETTLEMENT'),5000);});
    test('Golden','Arithmetic call premium is ₹5,000',function(){equal(a.premiumPaise,500000);equal(a.units,50);});
    test('Golden','Entry funds are ₹5,025, not ₹5,050',function(){equal(a.entryFundsPaise,502500);equal(a.entryFeePaise,2500);});
    test('Golden','Gross loss ₹5,000; stated bounded loss ₹5,050',function(){equal(a.grossMaxLossPaise,500000);equal(a.maxLossIncludingCostsPaise,505000);});
    test('Golden','Arithmetic call gross breakeven 20,100',function(){equal(a.grossBreakEvenPaise,2010000);});
    test('Golden','Arithmetic call net expiry breakeven 20,101',function(){equal(a.breakEvenPaise,2010100);});
    test('Golden','Arithmetic put net expiry breakeven 19,899',function(){equal(p.breakEvenPaise,1989900);});
    test('Golden','Call at 20,100 loses ₹50',function(){equal(E.expiry(gc,10000,50,2010000,fees),-5000);});
    test('Golden','Call at 20,200 earns ₹4,950',function(){equal(E.expiry(gc,10000,50,2020000,fees),495000);});
    test('Golden','Call at strike loses ₹5,050',function(){equal(E.expiry(gc,10000,50,2000000,fees),-505000);});
    test('Golden','Call below strike loses ₹5,050',function(){equal(E.expiry(gc,10000,50,1900000,fees),-505000);});
    test('Golden','Call at net breakeven earns exactly zero',function(){equal(E.expiry(gc,10000,50,2010100,fees),0);});
    test('Golden','Put at 19,900 loses ₹50',function(){equal(E.expiry(gp,10000,50,1990000,fees),-5000);});
    test('Golden','Put at 19,800 earns ₹4,950',function(){equal(E.expiry(gp,10000,50,1980000,fees),495000);});
    test('Golden','Put at/above strike loses ₹5,050',function(){equal(E.expiry(gp,10000,50,2000000,fees),-505000);equal(E.expiry(gp,10000,50,2100000,fees),-505000);});
    test('Golden','Put at net breakeven earns zero',function(){equal(E.expiry(gp,10000,50,1989900,fees),0);});
    test('Golden','Arithmetic long-put maximum gain finite',function(){equal(p.grossMaxProfitPaise,99500000);equal(p.netMaxProfitPaise,99495000);equal(E.expiry(gp,10000,50,0,fees),99495000);});
    test('Golden','Call maximum profit is unbounded, represented by null not a fake number',function(){equal(a.grossMaxProfitPaise,null);});
    test('Golden','Two lots: fixed fee does not double',function(){var x=E.analyse(gc,F.order('GOLD-C',2),fees);equal(x.units,100);equal(x.premiumPaise,1000000);equal(x.entryFundsPaise,1002500);equal(x.maxLossIncludingCostsPaise,1005000);equal(x.breakEvenPaise,2010050);equal(x.expiryPathFeePaise,5000);});
    test('Golden','Two-lot put breakeven and zero-payoff loss',function(){var x=E.analyse(gp,F.order('GOLD-P',2),fees);equal(x.breakEvenPaise,1989950);equal(E.expiry(gp,10000,100,2000000,fees),-1005000);});
    var rc=F.contract('REG-C'),rp=F.contract('REG-P'),ac=E.analyse(rc,F.order('REG-C',1),fees),ap=E.analyse(rp,F.order('REG-P',1),fees);
    test('Regression','22,600 CE × 65 premium = ₹9,779.25',function(){equal(ac.premiumPaise,977925);});
    test('Regression','22,600 PE × 65 premium = ₹5,131.75',function(){equal(ap.premiumPaise,513175);});
    test('Regression','CE premium-only breakeven 22,750.45',function(){equal(ac.grossBreakEvenPaise,2275045);});
    test('Regression','PE premium-only breakeven 22,521.05',function(){equal(ap.grossBreakEvenPaise,2252105);});
    test('Regression','CE ₹50 cost-adjusted root and rounded threshold',function(){approx(ac.breakEvenPaise,2275121.923076923);equal(ac.thresholdPaise,2275122);equal(E.expiry(rc,15045,65,ac.thresholdPaise,fees),5);});
    test('Regression','PE ₹50 cost-adjusted root and rounded threshold',function(){approx(ap.breakEvenPaise,2252028.076923077);equal(ap.thresholdPaise,2252028);equal(E.expiry(rp,7895,65,ap.thresholdPaise,fees),5);});
    test('Regression','CE at 22,400 / 22,600 loses ₹9,829.25 including costs',function(){equal(E.expiry(rc,15045,65,2240000,fees),-982925);equal(E.expiry(rc,15045,65,2260000,fees),-982925);});
    test('Regression','CE at 22,800 earns ₹3,170.75 including costs',function(){equal(E.expiry(rc,15045,65,2280000,fees),317075);});
    test('Regression','PE at 22,400 earns ₹7,818.25 including costs',function(){equal(E.expiry(rp,7895,65,2240000,fees),781825);});
    test('Regression','PE at 22,600 / 22,800 loses ₹5,181.75 including costs',function(){equal(E.expiry(rp,7895,65,2260000,fees),-518175);equal(E.expiry(rp,7895,65,2280000,fees),-518175);});
    test('Regression','PE maximum gross profit is ₹14,63,868.25, finite',function(){equal(ap.grossMaxProfitPaise,146386825);equal(ap.netMaxProfitPaise,146381825);});
    test('Regression','Regression entry totals separate from full loss',function(){equal(ac.entryFundsPaise,980425);equal(ap.entryFundsPaise,515675);equal(ac.maxLossIncludingCostsPaise,982925);equal(ap.maxLossIncludingCostsPaise,518175);});
    test('Fees','Missing fees throw; never treated as zero',function(){throws(function(){E.analyse(gc,fc,null);});throws(function(){Fees.charge(null,'ENTRY');});});
    test('Fees','Partially missing fee record rejected',function(){var bad=F.fees();delete bad.exitPaise;equal(Fees.valid(bad),false);});
    test('Fees','Unbounded profile does not claim an all-in maximum',function(){var f=F.fees();f.bounded=false;equal(E.analyse(gc,fc,f).maxLossIncludingCostsPaise,null);});
    test('Math','Put with negative implied breakeven reports no feasible root',function(){var c=F.clone(gp);c.strikePaise=5000;var x=E.analyse(c,fp,fees);equal(x.breakEvenPaise,null);equal(x.canProfitAtExpiry,false);});
    test('Math','Put breaking even only at zero cannot produce a profit',function(){var c=F.clone(gp);c.strikePaise=10100;var x=E.analyse(c,fp,fees);equal(x.breakEvenPaise,0);equal(x.canProfitAtExpiry,false);});
    test('Math','Price parsing exact paise; no silent fractional-paise rounding',function(){equal(E.parsePaise('150.45'),15045);equal(E.parsePaise('0'),0);equal(E.parsePaise('1.005'),null);equal(E.parsePaise('-1'),null);equal(E.parsePaise('NaN'),null);});
    test('Math','Before-expiry realised P&L uses option exit price',function(){equal(E.realised(10000,12000,50,fees),95000);equal(E.realised(10000,9000,50,fees),-55000);});
    test('Math','Money format includes Indian grouping and two decimal places',function(){ok(E.money(146386825).includes('14,63,868.25'));equal(E.money(null),'Unavailable');});
    test('Scope','Naked opening sale rejected before submission',function(){var s=setup();s.draft.side='SELL';ok(has(s.review(),'OPEN_SELL'));equal(s.submit('naked').ok,false);equal(s.orders.length,0);});
    test('Scope','Stock option blocked before funding or payoff assumptions',function(){var s=setup('D');ok(has(s.review(),'UNSUPPORTED'));equal(s.submit('stock').ok,false);});
    test('Scope','Futures are unsupported',function(){var s=setup();s.contracts['GOLD-C'].assetType='FUTURE';ok(has(s.review(),'UNSUPPORTED'));});
    test('Validation','Fractional lots invalid',function(){var s=setup();s.draft.lots=1.5;ok(has(s.review(),'QUANTITY'));});
    test('Validation','Zero / negative lots invalid',function(){[0,-1].forEach(function(n){var s=setup();s.draft.lots=n;ok(has(s.review(),'QUANTITY'));});});
    test('Validation','Invalid tick is rejected, not rounded',function(){var s=setup();s.draft.limitPaise=10001;ok(has(s.review(),'PRICE'));equal(s.draft.limitPaise,10001);});
    test('Validation','Negative / absent price invalid',function(){[-1,null,0].forEach(function(n){var s=setup();s.draft.limitPaise=n;ok(has(s.review(),'PRICE'));});});
    test('Validation','Missing contract metadata blocks review',function(){var s=setup();delete s.contracts['GOLD-C'].lotSize;ok(has(s.review(),'METADATA'));});
    test('Validation','Expired contract blocks review',function(){var s=setup();s.contracts['GOLD-C'].expiryMs=s.clock;ok(has(s.review(),'EXPIRED'));});
    test('Validation','Unknown quote / mismatched contract blocks review',function(){var s=setup();s.quotes['GOLD-C'].contractId='A';ok(has(s.review(),'QUOTE'));});
    test('Validation','Missing fees block review and submit',function(){var s=setup();s.fees=null;ok(has(s.review(),'FEES'));equal(s.submit('nofees').ok,false);});
    test('Risk','Budget below one-lot total exposure blocks order',function(){var s=setup();s.user.lossBudgetPaise=500000;ok(has(s.review(),'BUDGET'));equal(s.submit('budget').ok,false);equal(s.draft.contractId,'GOLD-C');equal(s.draft.lots,1);});
    test('Risk','Equal explicit budget accepted; not sure is supported',function(){var s=setup();s.user.lossBudgetPaise=505000;equal(s.review().ok,true);s.user.lossBudgetPaise=null;equal(s.review().ok,true);});
    test('Risk','Invalid budget entry cannot silently become not sure',function(){var s=setup();s.user.lossBudgetInvalid=true;s.user.lossBudgetRaw='-10';s.user.lossBudgetPaise=null;ok(has(s.review(),'BUDGET_INPUT'));equal(s.submit('invalidbudget').ok,false);});
    test('Risk','Insufficient funds blocks even when premium alone fits',function(){var s=setup();s.cashPaise=500000;ok(has(s.review(),'FUNDS'));equal(s.submit('lowcash').ok,false);});
    test('Risk','Stale >30s blocks; exactly 30s accepted',function(){var s=setup();s.quotes['GOLD-C'].asOfMs=s.clock-30000;equal(s.review().ok,true);s.quotes['GOLD-C'].asOfMs=s.clock-30001;ok(has(s.review(),'STALE'));});
    test('Risk','Future-dated quote is not accepted as fresh',function(){var s=setup();s.quotes['GOLD-C'].asOfMs=s.clock+1;ok(has(s.review(),'STALE'));});
    test('Risk','Spread >5% of midpoint blocks',function(){var s=setup();s.quotes['GOLD-C'].bidPaise=8000;ok(has(s.review(),'SPREAD'));});
    test('Risk','No bid blocks; no executable exit assumed',function(){var s=setup('C');ok(has(s.review(),'NO_BID'));equal(s.submit('illiquid').ok,false);});
    test('Risk','Crossed quote rejected',function(){var s=setup();s.quotes['GOLD-C'].bidPaise=10100;ok(has(s.review(),'CROSSED'));});
    ['quantity','price','quote','fees','budget','contract','rules'].forEach(function(field){test('Review','Changed '+field+' invalidates acknowledged review',function(){var s=setup();ok(s.review().ok);if(field==='quantity')s.draft.lots=2;if(field==='price')s.draft.limitPaise+=5;if(field==='quote')s.quoteChange('GOLD-C',{askPaise:10005});if(field==='fees')s.fees.version++;if(field==='budget')s.user.lossBudgetPaise=600000;if(field==='contract')s.contracts['GOLD-C'].version++;if(field==='rules')s.rules.version++;equal(s.submit('changed-'+field).code,'REVIEW_CHANGED');equal(s.orders.length,0);});});
    test('Review','Recalculation enables changed order',function(){var s=setup();s.review();s.draft.lots=2;s.review();equal(s.submit('updated').ok,true);});
    test('Review','Submission without a review fails',function(){var s=setup();equal(s.submit('unreviewed').code,'REVIEW');});
    test('Review','User can back out without an order, fee, or reservation',function(){var s=setup();s.review();equal(s.orders.length,0);equal(s.reservedPaise(),0);equal(s.cashPaise,s.initialPaise);});
    test('Orders','Idempotent submission creates one order and one reservation',function(){var s=setup(),o=submit(s,'same');var again=s.submit('same');equal(again.order.id,o.id);equal(again.duplicate,true);equal(s.orders.length,1);equal(s.reservedPaise(),502500);});
    test('Orders','Pending submission has no position or debited cash',function(){var s=setup();var o=submit(s);equal(o.status,'PENDING');equal(s.openUnits('GOLD-C'),0);equal(s.cashPaise,s.initialPaise);equal(s.availablePaise(),s.initialPaise-502500);});
    test('Orders','Limit below ask stays pending',function(){var s=setup();s.draft.limitPaise=9900;var o=submit(s);equal(s.fill(o.id,'full').code,'NOT_MARKETABLE');equal(o.status,'PENDING');equal(s.openUnits('GOLD-C'),0);});
    test('Orders','Fill uses actual ask, not limit or LTP',function(){var s=setup();s.draft.limitPaise=10100;s.quotes['GOLD-C'].ltpPaise=10500;var o=submit(s);var r=s.fill(o.id,'full');ok(r.ok);equal(r.pricePaise,10000);equal(o.averageFillPaise,10000);equal(s.positions['GOLD-C'].costBasisPaise,500000);equal(s.cashPaise,s.initialPaise-502500);equal(s.reservedPaise(),0);});
    test('Orders','Repeat fill does not debit again',function(){var s=setup(),o=submit(s);s.fill(o.id,'full');var cash=s.cashPaise;equal(s.fill(o.id,'full').ok,false);equal(s.cashPaise,cash);});
    test('Orders','Partial two-lot fill charges entry once and reserves remainder',function(){var s=setup('GOLD-C',2),o=submit(s);var r=s.fill(o.id,'partial');ok(r.ok);equal(o.filledUnits,50);equal(o.remainingUnits,50);equal(o.status,'PARTIAL');equal(o.chargedFeePaise,2500);equal(s.reservedPaise(),500000);s.fill(o.id,'full');equal(o.chargedFeePaise,2500);equal(s.cashPaise,s.initialPaise-1002500);});
    test('Orders','Single-lot 50% fill never creates fractional-lot position',function(){var s=setup(),o=submit(s);equal(s.fill(o.id,'partial').code,'ONE_LOT');equal(s.openUnits('GOLD-C'),0);});
    test('Orders','Cancellation after partial fill retains position and charged fee',function(){var s=setup('GOLD-C',2),o=submit(s);s.fill(o.id,'partial');ok(s.cancel(o.id).ok);equal(o.status,'CANCELLED');equal(o.cancelledUnits,50);equal(s.openUnits('GOLD-C'),50);equal(s.reservedPaise(),0);equal(s.cashPaise,s.initialPaise-502500);ok(o.events.includes('Cancellation requested.'));});
    test('Orders','Cancelling wholly unfilled order releases all funds without fees',function(){var s=setup(),o=submit(s);s.cancel(o.id);equal(s.availablePaise(),s.initialPaise);equal(o.chargedFeePaise,0);});
    test('Orders','Rejected remainder releases reservation but preserves partial fill',function(){var s=setup('GOLD-C',2),o=submit(s);s.fill(o.id,'partial');ok(s.reject(o.id).ok);equal(o.status,'REJECTED');equal(s.openUnits('GOLD-C'),50);equal(s.reservedPaise(),0);});
    test('Orders','Multiple purchase reservations prevent overspending',function(){var s=setup();s.cashPaise=800000;submit(s,'one');s.setDraft(F.order('GOLD-P',1));ok(has(s.review(),'FUNDS'));});
    test('Orders','Fill is blocked if quote becomes stale after submission',function(){var s=setup(),o=submit(s);s.quotes['GOLD-C'].asOfMs=s.clock-31000;equal(s.fill(o.id,'full').code,'STALE');equal(s.openUnits('GOLD-C'),0);});
    test('Orders','Quoted depth limits fills to whole lots',function(){var s=setup('GOLD-C',2);s.quotes['GOLD-C'].askUnits=50;var o=submit(s);ok(s.fill(o.id,'full').ok);equal(o.filledUnits,50);equal(o.status,'PARTIAL');equal(s.quotes['GOLD-C'].askUnits,0);});
    test('Exit','Sell-to-close accepted and fully closes long without opening short',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1);var o=submit(s,'exit');ok(s.fill(o.id,'full').ok);equal(s.openUnits('GOLD-C'),0);equal(o.status,'FILLED');equal(s.positions['GOLD-C'].realisedPaise,-6000);equal(s.cashPaise,s.initialPaise-6000);});
    test('Exit','Sell-to-close without a position rejected',function(){var s=setup();closing(s,'GOLD-C',1);ok(has(s.review(),'CLOSE_QTY'));equal(s.submit('invalidexit').ok,false);});
    test('Exit','Exit above long quantity cannot create a short',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',2);ok(has(s.review(),'CLOSE_QTY'));equal(s.submit('oversell').ok,false);equal(s.openUnits('GOLD-C'),50);});
    test('Exit','Concurrent exits reserve units; duplicate close rejected',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1);submit(s,'exit1');s.setDraft(F.clone(s.draft));ok(has(s.review(),'CLOSE_QTY'));});
    test('Exit','Cancelled exit releases closing units but keeps position',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1);var o=submit(s,'exit');s.cancel(o.id);equal(s.openUnits('GOLD-C'),50);equal(s.closingReserved('GOLD-C'),0);});
    test('Exit','Exit limit above bid remains pending with position open',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1);s.draft.limitPaise=10100;var o=submit(s,'exit');equal(s.fill(o.id,'full').code,'NOT_MARKETABLE');equal(s.openUnits('GOLD-C'),50);});
    test('Exit','Stop-limit triggers without filling after a gap',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1,'SL_LIMIT');s.draft.triggerPaise=9500;s.draft.limitPaise=9400;var o=submit(s,'stop');equal(o.status,'TRIGGER_WAIT');s.quoteChange('GOLD-C',{ltpPaise:9000,bidPaise:9000,askPaise:9020});equal(s.fill(o.id,'full').code,'NOT_MARKETABLE');equal(o.status,'PENDING');equal(s.openUnits('GOLD-C'),50);});
    test('Exit','Stop does not trigger prematurely',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1,'SL_LIMIT');s.draft.triggerPaise=9500;s.draft.limitPaise=9400;var o=submit(s,'stop');equal(s.fill(o.id,'full').code,'NOT_TRIGGERED');equal(o.status,'TRIGGER_WAIT');});
    test('Exit','Stop-gap evaluator scenario reproduces an activated unfilled exit',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1,'SL_LIMIT');s.draft.triggerPaise=9500;s.draft.limitPaise=9400;var o=submit(s,'stop');s.applyScenario('stop-gap','GOLD-C');equal(s.fill(o.id,'full').code,'NOT_MARKETABLE');equal(o.status,'PENDING');equal(s.openUnits('GOLD-C'),50);});
    test('Exit','Sell-stop trigger below limit rejected',function(){var s=setup();open(s,'GOLD-C',1,'entry');closing(s,'GOLD-C',1,'SL_LIMIT');s.draft.triggerPaise=9000;s.draft.limitPaise=9500;ok(has(s.review(),'STOP'));});
    test('Exit','Partial closing fills allocate basis and fee without duplication',function(){var s=setup();open(s,'GOLD-C',2,'entry');closing(s,'GOLD-C',2);var o=submit(s,'exit');s.fill(o.id,'partial');equal(s.openUnits('GOLD-C'),50);s.fill(o.id,'full');equal(o.chargedFeePaise,2500);equal(s.openUnits('GOLD-C'),0);equal(s.positions['GOLD-C'].realisedPaise,-7000);equal(s.cashPaise,s.initialPaise-7000);});
    test('Exit','No-bid quote does not invent a sale price',function(){var s=setup();open(s,'GOLD-C',1,'entry');s.quoteChange('GOLD-C',{bidPaise:null,bidUnits:0});closing(s,'GOLD-C',1);ok(has(s.review(),'NO_BID'));equal(s.openUnits('GOLD-C'),50);});
    test('Expiry','Expiry cancels pending DAY remainder and releases reservation',function(){var s=setup(),o=submit(s);ok(s.settle(2000000).ok);equal(o.status,'EXPIRED');equal(s.reservedPaise(),0);equal(s.cashPaise,s.initialPaise);ok(has(s.check(),'EXPIRED'));});
    test('Expiry','Call settlement reconciles with golden profit and account cash',function(){var s=setup();open(s,'GOLD-C',1,'entry');ok(s.settle(2020000).ok);equal(s.positions['GOLD-C'].realisedPaise,495000);equal(s.positions['GOLD-C'].status,'SETTLED');equal(s.cashPaise,s.initialPaise+495000);equal(s.openUnits('GOLD-C'),0);});
    test('Expiry','Worthless settlement still charges invented settlement fee',function(){var s=setup();open(s,'GOLD-C',1,'entry');s.settle(2000000);equal(s.positions['GOLD-C'].realisedPaise,-505000);equal(s.cashPaise,s.initialPaise-505000);});
    test('Expiry','Put settlement reconciles with golden profit',function(){var s=setup('GOLD-P');open(s,'GOLD-P',1,'entry');s.settle(1980000);equal(s.positions['GOLD-P'].realisedPaise,495000);});
    test('Expiry','Negative settlement / repeat settlement rejected',function(){var s=setup();equal(s.settle(-1).ok,false);s.settle(2000000);equal(s.settle(2000000).ok,false);});
    test('Scenarios','Scenario picker applies stale/wide/no-bid/missing fees',function(){var s=setup('A');[['stale','STALE'],['wide','SPREAD'],['no-bid','NO_BID'],['missing-fees','FEES']].forEach(function(x){s.applyScenario(x[0],'A');ok(has(s.review(),x[1]));});});
    test('Scenarios','Changed-data scenario invalidates an existing review',function(){var s=setup('A');s.review();s.applyScenario('changed','A');equal(s.reviewChanged(),true);equal(s.submit('changed').code,'REVIEW_CHANGED');});
    test('Scenarios','Reset clears orders, positions, reservations, fee errors and clock',function(){var s=setup();open(s,'GOLD-C',1,'entry');s.fees=null;s.settle(2000000);s.reset();equal(s.orders.length,0);equal(Object.keys(s.positions).length,0);equal(s.reservedPaise(),0);equal(s.clock,F.CLOCK);ok(Fees.valid(s.fees));equal(s.cashPaise,s.initialPaise);equal(s.reviewRecord,null);});
    test('Copy','Which strike response does not pick a contract',function(){var text=X.answer('Which strike should I buy?');ok(text.includes('reviews the order you chose'));ok(text.includes('does not choose'));ok(!/22,600|22600|buy the|choose the/i.test(text));});
    test('Copy','Templates contain no reassurance, urgency or celebration',function(){[gc,gp,F.contract('A'),F.contract('B')].forEach(function(c){var order=F.order(c.id,1),analysis=E.analyse(c,order,fees);var text=Object.values(X.facts(c,order,analysis)).join(' ');ok(!/\bsafe\b|\bsuitable\b|good choice|hurry|congratulations|guaranteed profit|trade again/i.test(text));ok(text.toLowerCase().includes('at expiry'));ok(text.includes('Costs are additional'));});});
    test('Copy','Before-expiry explanation permits loss despite favourable direction',function(){var text=X.facts(gc,fc,a).before;ok(text.includes('does not ensure a profit'));ok(text.includes('volatility'));});
    test('Copy','No feasible breakeven is stated rather than fabricated',function(){var c=F.clone(gp);c.strikePaise=5000;var text=X.facts(c,fp,E.analyse(c,fp,fees)).expiry;ok(text.includes('No feasible breakeven'));});
    test('Ledger','3,600 seeded purchase/fill/cancel/exit steps reconcile cash, basis and fees',function(){
      var seed=213;function rnd(n){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n;}
      for(var run=0;run<40;run++){
        var s=new S.Simulation(),key=0;
        for(var i=0;i<90;i++){
          var id=rnd(2)?'A':'B',action=rnd(6),active=s.orders.filter(function(o){return s.active(o);});
          if(action<2){s.setDraft(F.order(id,1+rnd(3)));if(s.review().ok)s.submit('k'+(++key));}
          else if(action===2&&active.length)s.fill(active[rnd(active.length)].id,rnd(2)?'full':'partial');
          else if(action===3&&active.length)s.cancel(active[rnd(active.length)].id);
          else if(action===4&&s.openUnits(id)>s.closingReserved(id)){var o=F.order(id,1);o.intent='CLOSE';o.side='SELL';o.limitPaise=s.quotes[id].bidPaise;s.setDraft(o);if(s.review().ok)s.submit('k'+(++key));}
          else if(action===5)s.quoteChange(id,{askUnits:1300,bidUnits:1300});
          var ps=Object.values(s.positions),lhs=s.cashPaise+ps.reduce(function(sum,p){return sum+p.costBasisPaise+p.entryFeesRemainingPaise;},0),rhs=s.initialPaise+ps.reduce(function(sum,p){return sum+p.realisedPaise;},0);
          equal(lhs,rhs);ok(!ps.some(function(p){return p.units<0;}));ok(s.reservedPaise()>=0);ok(s.availablePaise()>=0);
        }
      }
    });
    test('Guidance','All displayed critical metrics have complete definitions and cautions',function(){
      ['spot','strike','call','put','premium','ltp','bid','ask','spread','oi','volume','priceChange','dayRange','expiry','lots','lotSize','units','tick','limit','day','carry','cash','budget','fees','entryFunds','maxLoss','netLoss','breakeven','available','reserved','position','pending','filled','averageFill','unrealised','realised','stop','trigger'].forEach(function(k){var t=G.get(k);ok(t&&t.title&&t.definition.length>15&&t.caution.length>15,k);});
    });
    test('Guidance','Nine sidebar overviews have actual content rather than a dead-end stub',function(){
      ['Watchlist','Market Watch','Strategies','Scalper','Investment','AI','Cloud','Terminal','Alerts'].forEach(function(k){ok(G.sidebar[k]&&G.sidebar[k].length===3);ok(G.sidebar[k].join(' ').length>100);ok(!G.sidebar[k].join(' ').includes('Not part of this prototype'));});
    });
    test('Guidance','Order explanation reflects actual lots, units and costs',function(){var o=F.order('A',2),c=F.contract('A'),text=G.describeOrder(c,o,E.analyse(c,o,fees));ok(text.includes('2 lots (130 units)'));ok(text.includes('₹13,026.00'));ok(text.includes('₹25.00'));ok(text.includes('not the index itself'));});
    test('Guidance','Metric explanation uses selected-order premium and expiry breakeven',function(){var ctx={contract:gc,order:fc,quote:F.quote('GOLD-C'),analysis:a};ok(G.get('entryFunds',ctx).example.includes('₹5,025.00'));ok(G.get('breakeven',ctx).example.includes('20,101.00'));ok(G.get('maxLoss',ctx).example.includes('₹5,000.00'));});
    test('Guidance','Missing selected-order context never fabricates a personalised number',function(){equal(G.get('entryFunds',{}).example,'');equal(G.get('breakeven',{}).example,'');equal(G.get('unknown',{}),null);});
    test('Guidance','Historical disclosure is dated and explicitly not personal order odds',function(){equal(G.risk.period,'FY 2021–22');equal(G.risk.bullets.length,4);ok(G.risk.context.includes('not the probability'));ok(G.risk.context.includes('not presented as the latest'));});
    test('Guidance','Advanced probabilities and Greeks are not invented numerical values',function(){['pop','iv','delta','gamma','theta','vega','pcr','maxPain'].forEach(function(k){ok(G.get(k).caution.toLowerCase().includes('not calculated'));});});
    test('Guidance','Search finds premium and uses an empty result for unknown terms',function(){ok(G.search('premium').includes('premium'));equal(G.search('zzzz-nonexistent').length,0);});
    test('Fixtures','All six normal chain contracts support valid purchase reviews',function(){['A','B','E','F','G','H'].forEach(function(id){var s=setup(id);ok(s.review().ok,id);});});
    test('Fixtures','Synthetic paired ask differences are consistent with the stipulated spot/strike',function(){[['E','F'],['A','B'],['G','H']].forEach(function(pair){var cq=F.quote(pair[0]),pq=F.quote(pair[1]),c=F.contract(pair[0]);equal(cq.askPaise-pq.askPaise,cq.spotPaise-c.strikePaise);});});
    test('Fixtures','Chain activity is explicitly reported in contracts',function(){['A','B','E','F','G','H'].forEach(function(id){var st=F.stats(id);ok(E.positive(st.oiContracts));ok(E.positive(st.volumeContracts));ok(st.lowPaise<=st.ltpPaise&&st.ltpPaise<=st.highPaise);});});
    function variableFees(){
      var f=Fees.active();f.id='synthetic-turnover-test';f.name='Synthetic turnover test (not a broker tariff)';
      ['ENTRY','EXIT','SETTLEMENT'].forEach(function(event){f.events[event].forEach(function(r){r.fixedPaise=0;r.ratePpm=0;});});
      function row(event,category){return f.events[event].find(function(r){return r.category===category;});}
      row('ENTRY','brokerage').fixedPaise=1000;row('ENTRY','exchange').ratePpm=10000;row('ENTRY','stamp').ratePpm=2000;row('ENTRY','gst').ratePpm=180000;
      row('EXIT','brokerage').fixedPaise=1000;row('EXIT','exchange').ratePpm=10000;row('EXIT','statutory').ratePpm=20000;row('EXIT','gst').ratePpm=180000;
      row('SETTLEMENT','statutory').base='INTRINSIC';row('SETTLEMENT','statutory').ratePpm=10000;
      return f;
    }
    test('Fee adapter','Old flat profile remains a named, unchanged regression',function(){equal(Fees.LEGACY_FLAT.id,'synthetic-fixed-v1');equal(Fees.path(Fees.LEGACY_FLAT,'EXIT'),5000);});
    test('Fee adapter','Active profile uses structured rows for every category and side',function(){var f=Fees.active();ok(Fees.structured(f));['ENTRY','EXIT','SETTLEMENT'].forEach(function(event){equal(f.events[event].length,5);equal(Fees.charge(f,event,{premiumPaise:500000,intrinsicPaise:0}),2500);});});
    test('Fee adapter','Nubra placeholder config is incomplete and cannot be used as zero fees',function(){equal(Fees.valid(Fees.CONFIG.NUBRA),false);var previous=Fees.CONFIG.ACTIVE;try{Fees.CONFIG.ACTIVE='NUBRA';equal(Fees.active(),null);}finally{Fees.CONFIG.ACTIVE=previous;}throws(function(){Fees.quote(Fees.CONFIG.NUBRA,'ENTRY',{premiumPaise:500000,intrinsicPaise:0});});});
    test('Fee adapter','Missing category, missing rate and duplicate IDs fail closed',function(){['category','rate','id'].forEach(function(kind){var f=Fees.active();if(kind==='category')f.events.ENTRY.pop();if(kind==='rate')delete f.events.EXIT[0].ratePpm;if(kind==='id')f.events.ENTRY[1].id=f.events.ENTRY[0].id;equal(Fees.valid(f),false);});});
    test('Fee adapter','Fee context must supply both integer-paise bases',function(){throws(function(){Fees.charge(Fees.active(),'ENTRY');});throws(function(){Fees.charge(Fees.active(),'ENTRY',{premiumPaise:-1,intrinsicPaise:0});});});
    test('Fee adapter','Independent turnover golden entry ₹80.80 and funds ₹5,080.80',function(){var f=variableFees(),x=E.analyse(gc,fc,f),b=Fees.quote(f,'ENTRY',{premiumPaise:500000,intrinsicPaise:0});equal(b.totalPaise,8080);equal(x.entryFundsPaise,508080);equal(b.items.find(function(r){return r.category==='gst';}).amountPaise,1080);});
    test('Fee adapter','Early-sale path is ₹283.40, net ₹716.60 at exit premium ₹120',function(){var f=variableFees();equal(Fees.charge(f,'EXIT',{premiumPaise:600000,intrinsicPaise:0}),20260);equal(E.realised(10000,12000,50,f),71660);});
    test('Fee adapter','Settlement charge recomputes from actual intrinsic proceeds',function(){var f=variableFees();equal(E.expiry(gc,10000,50,2020000,f),481920);equal(E.expiry(gc,10000,50,2000000,f),-508080);});
    test('Fee adapter','Price-dependent call root solves net equation, not fixed-cost addition',function(){var x=E.analyse(gc,fc,variableFees());equal(x.breakEvenPaise,2010265);equal(E.expiry(gc,10000,50,x.thresholdPaise,variableFees()),37);ok(E.expiry(gc,10000,50,x.thresholdPaise-1,variableFees())<0);});
    test('Fee adapter','Price-dependent put root solves the reversed net equation',function(){var x=E.analyse(gp,fp,variableFees());equal(x.breakEvenPaise,1989735);equal(E.expiry(gp,10000,50,x.thresholdPaise,variableFees()),37);ok(E.expiry(gp,10000,50,x.thresholdPaise+1,variableFees())<0);});
    test('Fee adapter','Variable model never claims an unproven all-in maximum loss',function(){equal(E.analyse(gc,fc,variableFees()).maxLossIncludingCostsPaise,null);});
    test('Fee adapter','Discontinuous ITM model blocks submission instead of inventing a root',function(){var s=setup();s.fees=variableFees();s.fees.events.SETTLEMENT[0].condition='ITM';ok(has(s.review(),'FEES_MODEL'));equal(s.submit('unsupported-fees').ok,false);});
    test('Fee adapter','Caps, minima, component GST and explicit line rounding apply',function(){var f=Fees.active();f.events.ENTRY[0].fixedPaise=0;f.events.ENTRY[0].ratePpm=333333;f.events.ENTRY[0].minPaise=5;f.events.ENTRY[0].capPaise=10;equal(Fees.charge(f,'ENTRY',{premiumPaise:1,intrinsicPaise:0}),5);equal(Fees.charge(f,'ENTRY',{premiumPaise:100,intrinsicPaise:0}),10);var r=f.events.ENTRY[0];r.minPaise=0;r.capPaise=null;r.rounding='CEIL';equal(Fees.charge(f,'ENTRY',{premiumPaise:1,intrinsicPaise:0}),1);r.rounding='FLOOR';equal(Fees.charge(f,'ENTRY',{premiumPaise:1,intrinsicPaise:0}),0);});
    test('Fee adapter','GST cannot depend recursively on GST',function(){var f=Fees.active();f.events.ENTRY.find(function(r){return r.category==='gst';}).basisCategories=['gst'];equal(Fees.valid(f),false);});
    test('Fee ledger','Variable entry partials charge a cumulative fee delta, not two fixed fees',function(){var s=setup('GOLD-C',2);s.fees=variableFees();var o=submit(s);ok(s.fill(o.id,'partial').ok);equal(o.chargedFeePaise,8080);equal(s.reservedPaise(),506900);ok(s.fill(o.id,'full').ok);equal(o.chargedFeePaise,14980);equal(s.cashPaise,s.initialPaise-1014980);});
    test('Fee ledger','Partial cancellation retains only fees earned on filled turnover',function(){var s=setup('GOLD-C',2);s.fees=variableFees();var o=submit(s);s.fill(o.id,'partial');s.cancel(o.id);equal(s.reservedPaise(),0);equal(s.positions['GOLD-C'].entryFeesRemainingPaise,8080);equal(s.cashPaise,s.initialPaise-508080);});
    test('Fee ledger','Closing variable fees reconcile against actual bid and allocated entry cost',function(){var s=setup();s.fees=variableFees();open(s,'GOLD-C',1,'variable-entry');s.quoteChange('GOLD-C',{bidPaise:12000,askPaise:12020});closing(s,'GOLD-C',1);var o=submit(s,'variable-exit');s.fill(o.id,'full');equal(o.chargedFeePaise,20260);equal(s.positions['GOLD-C'].realisedPaise,71660);equal(s.cashPaise,s.initialPaise+71660);equal(s.openUnits('GOLD-C'),0);});
    test('Fee ledger','Settlement uses position tariff snapshot and actual payoff',function(){var s=setup();s.fees=variableFees();open(s,'GOLD-C',1,'variable-entry');s.fees=Fees.active();s.settle(2020000);equal(s.positions['GOLD-C'].realisedPaise,481920);equal(s.cashPaise,s.initialPaise+481920);});
    test('Fee ledger','Changed fee rows invalidate review even without a version bump',function(){var s=setup();s.review();s.fees.events.ENTRY[0].fixedPaise++;equal(s.submit('tariff-change').code,'REVIEW_CHANGED');});
    test('Properties','Every normal and regression contract: call/put breakeven round-trip',function(){F.contracts.filter(function(c){return c.assetType==='INDEX';}).forEach(function(c){[1,2,5].forEach(function(lots){[F.fees(),Fees.active(),variableFees()].forEach(function(f){var o=F.order(c.id,lots),x=E.analyse(c,o,f);if(x.breakEvenPaise!==null){var net=E.expiry(c,o.limitPaise,x.units,x.thresholdPaise,f);ok(net>=0&&net<=x.units+5,'Root residual for '+c.id+': '+net);var lossSide=x.thresholdPaise+(c.optionType==='CE'?-1:1);ok(E.expiry(c,o.limitPaise,x.units,lossSide,f)<=0,'Root direction for '+c.id);}});});});});
    test('Properties','Call zero-payoff loss equals premium plus actual entry/settlement fees',function(){[1,2,3,10].forEach(function(lots){[F.fees(),Fees.active(),variableFees()].forEach(function(f){var o=F.order('GOLD-C',lots),x=E.analyse(gc,o,f);[0,1000000,gc.strikePaise].forEach(function(level){equal(E.expiry(gc,o.limitPaise,x.units,level,f),-x.premiumPaise-x.zeroPayoffPathFeePaise);});});});});
    test('Properties','Lots scale premium exactly; fixed fees remain an intercept',function(){[1,2,3,5,10].forEach(function(n){var x=E.analyse(gc,F.order('GOLD-C',n),Fees.active());equal(x.premiumPaise,n*500000);equal(x.entryFundsPaise,n*500000+2500);equal(x.maxLossIncludingCostsPaise,n*500000+5000);});});
    test('Properties','Turnover fees scale affinely with lots under this uncapped fixture',function(){[1,2,3,5,10].forEach(function(n){var x=E.analyse(gc,F.order('GOLD-C',n),variableFees());equal(x.entryFeePaise,1180+6900*n);equal(x.entryFundsPaise,500000*n+1180+6900*n);});});
    test('Properties','Put maximum profit remains finite under variable settlement fees',function(){var x=E.analyse(gp,fp,variableFees());equal(x.netMaxProfitPaise,E.expiry(gp,10000,50,0,variableFees()));ok(Number.isSafeInteger(x.netMaxProfitPaise));});
    test('UI policy','Evaluator controls are opt-in by exact query flag',function(){['','?eval=0','?evaluation=1','?eval=10','#?eval=1'].forEach(function(s){equal(G.evaluatorEnabled(s),false);});['?eval=1','?eval=1&mode=review','?x=2&eval=1'].forEach(function(s){equal(G.evaluatorEnabled(s),true);});});
    var banned=/\b(?:great choice|safe|guaranteed|recommended|you should|don't miss|trending|hot)\b/i;
    test('Copy lint','All metric definitions, cautions, examples and sidebar templates avoid banned phrases',function(){F.contracts.forEach(function(c){var o=F.order(c.id,1),ctx={contract:c,order:o,quote:F.quote(c.id)};if(c.assetType==='INDEX')ctx.analysis=E.analyse(c,o,Fees.active());Object.keys(G.terms).forEach(function(k){ok(!banned.test(Object.values(G.get(k,ctx)).join(' ')),k);});});Object.values(G.sidebar).forEach(function(v){ok(!banned.test(v.join(' ')));});ok(!banned.test(JSON.stringify(G.risk)));['Which strike should I buy?','Predict returns','What is premium?'].forEach(function(question){ok(!banned.test(X.answer(question)));});});
    test('Copy lint','Every fixture, fee model and lifecycle state retains the four required elements',function(){F.contracts.filter(function(c){return c.assetType==='INDEX';}).forEach(function(c){[Fees.active(),variableFees()].forEach(function(f){var o=F.order(c.id,1),a=E.analyse(c,o,f);Object.keys(X.states).forEach(function(state){var text=Object.values(X.facts(c,o,a)).join(' ')+' '+X.stateInfo(state);ok(!banned.test(text),c.id+' '+state);ok(/outlay/i.test(text));ok(/max loss/i.test(text));ok(/breakeven at expiry/i.test(text));ok(/to exit/i.test(text));ok(text.includes('estimate - synthetic fee profile'));});});});});
    test('Copy lint','Every abnormal scenario produces neutral blocked or complete consequence copy',function(){['normal','stale','wide','no-bid','missing-fees','changed','missing-data','expired','stop-gap','opening-sell','restricted-stock'].forEach(function(scenario){var s=setup(scenario==='restricted-stock'?'D':'A');s.applyScenario(scenario,scenario==='restricted-stock'?'D':'A');if(scenario==='missing-data')s.contracts.A.lotSize=null;if(scenario==='expired')s.contracts.A.expiryMs=s.clock;if(scenario==='opening-sell')s.draft.side='SELL';var r=s.review(),text=Object.values(r.ok?X.facts(s.contracts.A,s.draft,r.analysis):X.blocked()).join(' ');Object.keys(X.states).forEach(function(state){ok(!banned.test(text+' '+X.stateInfo(state)));});['outlay','max loss','breakeven at expiry','to exit'].forEach(function(term){ok(text.toLowerCase().includes(term),scenario+' '+term);});});});
    test('Copy lint','No-feasible and unavailable-root branches do not claim a profit condition',function(){var c=F.clone(gp);c.strikePaise=5000;var text=X.facts(c,fp,E.analyse(c,fp,Fees.active())).expiry;ok(/No feasible/.test(text));ok(!banned.test(text));var f=variableFees();f.events.SETTLEMENT[0].condition='ITM';var t=X.facts(gc,fc,E.analyse(gc,fc,f)).expiry;ok(/unavailable/.test(t));ok(!/must settle/.test(t));});
    return results;
  }
  return {run:run};
}));
````

## tests.html

````html
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Executable evals · Order clarity</title><link rel="icon" href="data:,"><link rel="stylesheet" href="assets/css/styles.css"></head><body>
<div class="concept-banner">Concept prototype - Synthetic data - No real orders</div><main class="tests-main"><a href="index.html">← Prototype</a><div class="eyebrow" style="margin-top:24px">SAME CASES IN NODE AND BROWSER</div><h1>Executable evaluations</h1><p class="subhead">Real calculation and state checks. This page runs the shared suite plus browser UI integration checks. The shared suite also runs with <span class="mono">node tests/golden.test.js</span>. The shared suite works from disk; iframe UI checks use HTTP/Pages. No install, API keys or external data service is needed.</p><div class="actions"><button id="run" class="primary">Run all tests</button></div><div id="summary" class="test-summary" role="status" aria-live="polite">NOT RUN</div><div id="area-summary" class="area-summary" aria-label="Results by area"></div><div class="table-scroll"><table class="test-table"><thead><tr><th>Area</th><th>Status</th><th>Executable check</th><th>Failure detail</th></tr></thead><tbody id="results"></tbody></table></div><p class="small" style="margin-top:20px">Passing software tests is not evidence that users understand the interface. Human comprehension tests are separate and remain NOT RUN until participants complete them.</p></main>
<script src="assets/js/fee-config.js"></script><script src="assets/js/fees.js"></script><script src="assets/js/fixtures.js"></script><script src="assets/js/engine.js"></script><script src="assets/js/simulator.js"></script><script src="assets/js/explain.js"></script><script src="assets/js/guide.js"></script><script src="tests/golden.test.js"></script>
<script src="tests/browser-ui.test.js"></script>
<script>
(function(){'use strict';
function show(all){var body=document.getElementById('results');body.textContent='';var counts={pass:0,fail:0,notrun:0},areas={};
all.forEach(function(r){var key=r.pass===null?'notrun':r.pass?'pass':'fail';counts[key]++;var a=areas[r.area]||(areas[r.area]={pass:0,fail:0,notrun:0});a[key]++;
var row=document.createElement('tr');[r.area,key==='notrun'?'NOT RUN':r.pass?'PASSED':'FAILED',r.name,r.detail].forEach(function(v,i){var cell=document.createElement('td');cell.textContent=v;if(i===1)cell.className=r.pass?'result-pass':r.pass===false?'result-fail':'';row.appendChild(cell);});body.appendChild(row);});
document.getElementById('summary').textContent=counts.pass+' PASSED / '+counts.fail+' FAILED / '+counts.notrun+' NOT RUN';var area=document.getElementById('area-summary');area.textContent='';Object.keys(areas).forEach(function(k){var el=document.createElement('span');el.textContent=k+': '+areas[k].pass+' passed / '+areas[k].fail+' failed / '+areas[k].notrun+' not run';area.appendChild(el);});window.FTBrowserTestResults=all;}
async function run(){var button=document.getElementById('run');button.disabled=true;document.getElementById('summary').textContent='RUNNING';try{var all=window.FTTests.run();show(all);all=all.concat(await window.FTBrowserUI.run());show(all);}catch(err){document.getElementById('summary').textContent='FAILED TO RUN: '+err.message;}finally{button.disabled=false;}}
document.getElementById('run').addEventListener('click',run);run();}());
</script></body></html>
````

