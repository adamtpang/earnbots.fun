# Earnbots design and agent-income study

## Delivered

The homepage now presents a research-led earning experiment with four filterable agent studies, evidence disclosures and a concrete first-offer brief. The August homepage is preserved at /build-log with an archive warning. The private opportunity queue was not changed.

Apple-design principles applied: platform system fonts, size-specific type hierarchy, restrained mint/forest palette, translucent sticky navigation, immediate press feedback, ordinary native disclosures, keyboard focus, reduced motion, reduced transparency and increased-contrast variants. No gesture or spring library added because this page has no gesture-driven interaction.

Brand: a simple mint robot face on a dark forest rounded square. The same mark appears in the site header, loop and footer. public/brand-mark.svg is the editable master; scripts/generate-icons.mjs generates src/app/favicon.ico with 16, 32, 48 and 64px PNG frames and src/app/apple-icon.png at 180px. No third-party artwork used. The build no longer downloads Google fonts.

## Research and replication

See [the sourced public study](public/agent-income-study.md) and [the proposed experiment](public/first-experiment.md). Distinguish financial evidence from technical performance and marketing attribution. The study dates snapshots and does not describe all four cases as independently profitable.

Recommended sequence: secure one buyer for one bounded AI integration; implement and independently verify the result; record collected receipts, fees, direct costs and owner time; test a second buyer before claiming repeatability. The $500 price remains a hypothesis. No buyer, assignment, payment or profitable deployed swarm is established by this work.

Use experiments/receipts-template.csv as an empty measurement template. Filled receipts, client details and evidence should live in private storage, not in public assets or a public Git commit. Adam performs person-to-person communications and commitments.

## Validation

- npm test: all nine existing paid-work tests passed.
- npm run lint: passed. Excluded research artifacts and independently configured actor packages from the application lint scope after the research Gymjim checkout caused unrelated errors. Application rules remain enabled.
- npm run build: passed, including TypeScript and static generation.
- Production preview: http://127.0.0.1:3117.
- Helium: Products filter reduced four studies to Felix; All agents restored four; source disclosure opened and exposed the three Felix source links.
- HTTP 200: homepage, favicon.ico (image/x-icon), apple-icon.png (image/png), /build-log and both Markdown documents.
- Head metadata includes both favicon and Apple touch icon.
- 390px viewport: document width 390; 320px viewport: document width 320.
- Reduced-motion emulation: button transition duration 0s.
- Desktop, mobile and Apple icon visually inspected. Screenshots: .artifacts/design-2026-10-14/desktop.png and mobile.png.

## Limits and existing state

No production deployment, purchases, outreach or applications performed. Existing dirty changes were preserved. npm ci reported 21 dependency advisories (4 moderate, 15 high, 2 critical); dependency remediation was not part of this design/research change and no automatic upgrade was applied. This report does not claim the full dependency tree has passed a security review.

The local bundled Next.js guides were read after installation made them available; official routing and icon guides were used while installation was pending. Older build-log statistics remain clearly historical.
