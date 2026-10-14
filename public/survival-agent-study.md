# Survival prompts, market bots and the research experiment

Research snapshot: October 14, 2026. No verified Earnbots revenue or trading profit.

## What the viral story actually establishes

An August 24 post attributed to @Argona0x claimed that a Grok bot turned $50 into $5,273 in 48 hours, used a survival prompt and Kelly sizing, and paid its own subscription. The original video was not independently inspected here.

[An October fact-check](https://agenteconomy.cloud/fact-check/grok-bot-50-to-5273-polymarket) associates the account shown in the story with a public Polymarket account through a Community Note. That attribution is a secondary-source claim, not proof of who operated a wallet or what software they used.

We independently queried the primary public data for the wallet identified in that audit. It records two deposits totaling $5,000 on August 18, and cumulative displayed P&L of $10,657 on August 21 versus $9,578.402 on August 24: a decrease of $1,078.598. Deposits are not profits. The observations do not substantiate a $50 starting balance or that claimed return, and do not establish that any trades were autonomous.

Reproduce with these read-only endpoints, substituting the public account address from the linked audit. For activity, set the UTC start/end parameters to August 18 and August 19, 2026 and include deposits/withdrawals:

```text
https://data-api.polymarket.com/activity?user=PUBLIC_ACCOUNT&limit=500&start=START_UNIX_SECONDS&end=END_UNIX_SECONDS&excludeDepositsWithdrawals=false&sortBy=TIMESTAMP&sortDirection=ASC

https://user-pnl-api.polymarket.com/user-pnl?user_address=PUBLIC_ACCOUNT&interval=all&fidelity=1d
```

These are mutable service responses. The P&L chart is a platform estimate, not an independently audited cash-flow statement. Neither cumulative P&L nor a wallet balance establishes net profit after every cost.

## Kelly sizes an assumed edge

For a fictional binary contract bought at price q that pays $1 if correct, a simplified, fee-free Kelly fraction of capital is `(p - q) / (1 - q)`, where p is the true success probability. With no shorting, a negative fraction means no position. This formula assumes known probabilities, appropriate repeatability and no omitted constraints; those assumptions are substantial.

For an educational example, p = 0.60 and q = 0.50 imply full Kelly of 20%. A quarter of that fraction is 5%, or $0.50 of an imaginary $10 bankroll. If the true p is 0.48, the supposed edge disappears. These numbers are not a recommended allocation. Model confidence is not a measured probability, and a minimum order size may prevent a small theoretical position.

Actual costs include spreads, market-specific fees, slippage, failed fills, resolution risk, correlation and infrastructure. [Polymarket's current fee documentation](https://docs.polymarket.com/trading/fees) describes category-specific fee parameters; a quote alone does not provide a complete cost model. See also [Meister's research on Kelly in prediction markets](https://arxiv.org/abs/2412.14144).

## What runs now

The repository contains an hourly public-data collector, scheduled at minute 17 UTC each hour. It samples up to five eligible binary markets from forty high-volume listings, reads both outcome books, and records timestamps, best quotes, depth at the best quote, minimum sizes and data quality. This bounded selection is not representative of the whole market.

It connects no wallet, places no orders, generates no buy/sell signals, calls no model API and opens no paper positions. No independent forecasting model is configured. Missing or stale data cannot produce a profitable result. The collector manages no funds.

[See research runs and their summaries](https://github.com/adamtpang/earnbots.fun/actions/workflows/market-watch.yml). Each run's logs contain observation JSON; local runs write to ignored `.artifacts/market-watch/`. Logs expire under the repository's retention settings: download and retain them before using them for a longitudinal study. No paid artifact storage is configured.

[Standard GitHub-hosted runners are free for public repositories](https://docs.github.com/en/billing/concepts/product-billing/github-actions). This workflow skips private repositories, has read-only repository permissions, uses no paid service credentials and stops after four minutes. Its code is independent of the website and makes no paid model calls. This is not a blanket guarantee about the owner's hosting bill or other services.

[Scheduled Actions can be delayed, dropped or disabled after inactivity](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule); this is recurring collection, not a guaranteed continuous service. Disabling the workflow stops future scheduled collection.

## What would count as evidence of an edge

Before claiming profitability, a separate study needs timestamped forecasts made before outcomes are known, a documented source of independent information, held-out calibration against simple baselines, realistic execution and fee assumptions, recorded losses and no-fills, settled outcomes and a complete expense ledger. Selecting winning wallets after the fact cannot substitute for that study. This collector alone does not establish any edge.

At 144 paid model calls per day, even $0.01 per call would cost $43.20 per 30 days, before trading losses or hosting. More agents can increase that expense without increasing revenue. A survival prompt supplies no evidence that this arithmetic changes.

Any real-money activity remains a human decision subject to the relevant venue's eligibility and rules. [Polymarket documents geographic restrictions](https://docs.polymarket.com/api-reference/geoblock); no bypass is part of this project. This project does not manage investments or execute financial transactions.
