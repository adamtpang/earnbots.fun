# Earnbots design and agent-income study

Release preparation record for 14 October 2026. Production deployment remains pending at the time of this update.

## Delivered

The homepage presents a research-led earning experiment with four filterable agent studies, evidence disclosures and a concrete first-offer brief. The August homepage is preserved at `/build-log` with an archive warning. Existing identity metadata, crawler discovery and policy pages are retained. Local opportunity-dashboard work is outside this release.

Apple-design principles applied: platform system fonts, size-specific type hierarchy, restrained mint/forest palette, translucent sticky navigation, immediate press feedback, ordinary native disclosures, keyboard focus, reduced motion, reduced transparency and increased-contrast variants. No gesture or spring library added because this page has no gesture-driven interaction.

Brand: an original mint robot face on a dark forest rounded square. The same mark appears in the site header, loop and closing section. `public/brand-mark.svg` is the editable master; `scripts/generate-icons.mjs` generates `src/app/favicon.ico` with 16, 32, 48 and 64px PNG frames and `src/app/apple-icon.png` at 180px. No third-party artwork is used. The build no longer downloads Google fonts.

## Research and replication

See [the sourced public study](public/agent-income-study.md), [the proposed experiment](public/first-experiment.md) and [the market-bot claim audit](public/survival-agent-study.md). Distinguish financial evidence from technical performance and marketing attribution. Research snapshots are dated and do not describe all cases as independently profitable.

Recommended sequence: secure one buyer for one bounded AI integration; implement and independently verify the result; record collected receipts, fees, direct costs and owner time; test a second buyer before claiming repeatability. The $500 price remains a hypothesis. No buyer, assignment, payment or profitable deployed swarm is established by this work.

`experiments/receipts-template.csv` is an empty measurement template. Filled receipts, client details and financial evidence belong in private storage, not public assets or public commits. Person-to-person communication and commitments remain human actions.

The separate market collector uses bounded public GET requests and validates book data. Its hourly GitHub workflow requires no laptop to remain running. It connects no wallet, calls no paid service or model API, submits no orders, opens no paper positions and produces no trade signals. Logs expire, scheduling is not guaranteed, and no independent calibrated forecast or complete fee model is configured. See the study and [README](README.md) for operational instructions and limits.

## Original local design checks

These checks were performed on the original local development tree before assembling the release from the newer remote default branch. They are historical evidence for the design, not a claim that the final release contains that tree's local dashboard or test suite.

- The nine pre-existing paid-work tests passed in the local development tree.
- Local lint and production build passed. Research artifacts and independently configured actor packages were excluded from that tree's application lint scope.
- Helium checks confirmed that Products reduced four studies to Felix, All agents restored four, and the Felix disclosure exposed its three source links.
- The local preview returned HTTP 200 for the homepage, favicon, Apple icon, build log and the initial research/experiment Markdown documents.
- Head metadata included both icons. Document width matched 390px and 320px viewports, and reduced-motion emulation produced a zero-second button transition.
- Desktop, mobile and Apple icon appearance were visually inspected. Local screenshots are excluded from version control and deployment.

## Final release checks

The isolated release preserves the newer default branch's canonical URLs, identity JSON-LD, trust pages, crawler files and security headers. Dependencies were updated to Next.js and `eslint-config-next` 16.4.0.

- `npm run lint`: passed.
- `npm run build`: passed, including TypeScript and static generation.
- `node --test test/*.test.mjs`: all eight tests passed, covering the production site contract and observation-only market collector. These are the release tests, distinct from the nine local dashboard tests above.
- Helium confirmed that the final release's Products filter shows one study; 320px and 390px viewports have no horizontal overflow.
- `npm audit --omit=dev`: zero reported production dependency advisories at this check.
- The full development dependency tree still reports nine high-severity advisories. A clean production audit does not establish that the development toolchain is free of vulnerabilities or that the project has passed a complete security review.
- An automatic Vercel preview is Ready. This is not confirmation of a production deployment.

No production deployment is recorded here yet. Production checks and confirmation of the first hosted research run remain separate release steps. No purchases, client outreach, applications or financial transactions were performed for this release preparation.

The local bundled Next.js routing and icon guides informed implementation. Older build-log statistics remain explicitly historical.
