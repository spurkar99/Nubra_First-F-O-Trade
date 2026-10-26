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
