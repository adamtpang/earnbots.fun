# earnbots.fun

An open research site studying how agents earn and testing bounded workflows with measurable results. The homepage presents four sourced case studies, evidence filters and a proposed paid AI-integration experiment. No Earnbots revenue, autonomous earnings or trading profit has been verified.

## Run the site

Use Node.js 24 and npm. The application uses Next.js 16.4, React 19, Tailwind CSS and native system fonts. No credentials are required for the public site or market collector.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). To run a production build locally:

```sh
npm run build
npm start
```

The homepage is `src/app/page.tsx`; case data is `src/lib/agent-cases.ts`. `/build-log` preserves an explicitly dated August snapshot. `/about`, `/contact` and `/privacy` describe the project and its policies. There is no public API, assignment executor or payment system in this release.

## Check changes

```sh
npm run lint
npm test
npm audit --omit=dev
```

`npm test` first builds the application, then runs eight Node tests covering the production site's identity/security contract and market-data validation. If a fresh build already exists, `node --test test/*.test.mjs` runs those tests without rebuilding. Production contract tests temporarily start a local server on port 43127; leave that port available.

`public/brand-mark.svg` is the original icon source. After editing it, run `node scripts/generate-icons.mjs` to regenerate the multi-size favicon and Apple touch icon.

## Public market research

Run the dependency-free collector once:

```sh
node --test test/market-watch.test.mjs
node scripts/market-watch.mjs
```

It reads public market listings and both order books for up to five eligible binary markets. Each snapshot records quotes, best-quote sizes, timestamps, minimum sizes and data-quality flags. Local runs write JSON to ignored `.artifacts/market-watch/` and print the same observation to standard output.

[The GitHub Actions workflow](.github/workflows/market-watch.yml) requests a run at minute 17 of each UTC hour after the workflow reaches the default branch. It also supports **Run workflow** from [the Actions page](https://github.com/adamtpang/earnbots.fun/actions/workflows/market-watch.yml). The job runs on GitHub, independently of a developer's laptop or the website, and skips private repositories. It uses read-only repository permissions, fixed public GET endpoints, bounded responses, timeouts and a four-minute job limit.

The collector connects no wallet, makes no paid model or service calls, submits no orders, opens no paper positions and generates no buy/sell signals. No independent forecasting model or complete fee model is configured, so quotes cannot establish a trading edge or profit.

Standard GitHub-hosted runners are free for public repositories. This workflow uploads no artifacts; snapshots appear in job logs and summaries. Logs expire under repository retention settings, so retain them separately before using them for a longitudinal study. Scheduling can be delayed, dropped or disabled after inactivity; this is recurring research, not a continuous-service guarantee. Disable **Public market research** in Actions to stop future scheduled runs. These limits do not guarantee that unrelated hosting or other services are free.

## Research and release notes

- [Agent-income evidence and replication plan](public/agent-income-study.md)
- [Proposed first paid workflow](public/first-experiment.md)
- [Survival-prompt claim audit, Kelly assumptions and collector limits](public/survival-agent-study.md)
- [Design and validation record](DESIGN_AND_AGENT_STUDY_2026-10-14.md)
- [Changelog](CHANGELOG.md)
- [Historical August methods index](RESEARCH.md) and [platform checks](AGENT_PLATFORMS.md)
- [Original August starting prompt](START_PROMPT.md), retained as historical context rather than current setup instructions

The public studies distinguish reported sales from net profit, technical performance from collected payments and market observations from forecasts. Client communication and commitments remain human actions. Keep credentials, filled receipts, customer information and financial evidence out of public assets and commits.
