# Agent earning platforms — resource list for future investigation

A living bookmark list of specific websites where an AI agent could pick up
paid work, separate from [RESEARCH.md](RESEARCH.md) (the one-time ranked
methods index). This file gets updated as platforms are checked; each entry
carries the date it was last actually verified live, not just described.

## Checked live, 2026-08-20

### Superteam Earn — superteam.fun/earn/agents
Documented agent API (register, discover, submit, human claims payout).
**Live status (2026-08-20, checked twice with two different agent keys):**
9 listings returned, all 9 already have winners announced. Zero open,
unclaimed bounties. Deadline filter param is broken server-side.
Typical bounty size when open: $500-$5,000.
- Docs: https://superteam.fun/skill.md
- Agent info: https://superteam.fun/earn/agents

### dealwork.ai
Real, live marketplace, humans and AI agents hire each other. Documented
`skill.md` protocol any LLM agent can follow, plus a REST API at
`/api/v1`. **Live status (2026-08-20):** 25 `posted` + 21 `bidding`
listings checked, **0 currently claimable** (every one flagged
`underfunded` or `poster_unfunded` — mostly agents advertising services
looking for buyers, not funded demand waiting to be claimed). 107
completed jobs on record, real but small payouts ($0.40-$0.80 typical in
the completed sample, one prior documented case at $0.68 total across 5
contracts).
- Site: https://dealwork.ai
- Agent skill file: https://dealwork.ai/skill.md
- API: https://dealwork.ai/api/v1 (docs at `/api-docs`)

### trybounty.ai — most promising live find so far
Real, live bounty board. **Live status (2026-08-20):** of the 24 most
recent listings shown, **7 were open and unclaimed** (no "Completed by"
tag): $5.75, $23.00, $345.00, $9.78, $86.25, $3.45, and $1.15, roughly
**$474 in real open bounty value** at the time of checking. The rest were
already completed by what look like the platform's own named AI workers
(Scouter, Ledger, Index, Atlas, Cloud, Navigator, LightX).
**Unresolved, needs follow-up**: could not find a public agent-facing API
or `skill.md`-equivalent on the site (no `/docs` or `/api` route found;
WebSearch turned up nothing). Unclear whether a third-party dev's agent
can actually claim these, or whether claiming is restricted to the
platform's own in-house agents. Worth a direct signup/API check before
building against it.
- Site: https://trybounty.ai
- Browse: https://trybounty.ai/listings
- Leaderboard: https://trybounty.ai/leaderboard

### Algora — algora.io
Real, live, OSS GitHub issue bounty marketplace. Fund an issue with
`/bounty $1000` comment, developer claims by commenting + submitting a
PR, gets paid via Stripe 1-3 days after merge. **Live status
(2026-08-20)**: the classic `/bounties` board route 404'd; the homepage
now leads with "Hire the top 1% open source engineers," suggesting a
pivot toward recruiting/matching alongside or instead of the old public
bounty board. Real historical dollars: one customer (Ziverge) reports
$143K distributed through Algora; visible 2026 awards ranged $50-$2,500.
Human-workflow-first (GitHub comment/PR), but nothing in the mechanism
stops an agent with GitHub API access from doing the same thing, and a
third-party guide (gigs.sh) already documents it as an agent-earning path.
**Unresolved, needs follow-up**: re-check whether the public bounty board
still exists at a different URL, and whether Algora has any bot/agent
policy.
- Site: https://algora.io
- Agent guide (third party): https://gigs.sh/p/algora

## Bug/security bounty platforms (not yet live-checked)

Different category from feature bounties above — these pay for finding
security vulnerabilities, not building features. Worth checking whether
any allow agent submissions.
- HackerOne — https://hackerone.com
- Bugcrowd — https://www.bugcrowd.com
- Immunefi (crypto/smart-contract specific) — https://immunefi.com

## Other agent marketplaces named in research, not yet live-checked

- BotBounty.ai — https://botbounty.ai
- gigs.sh — https://gigs.sh (also hosts agent-earning guides for other
  platforms, worth reading before checking each one live)
- ClawGig — needs a working URL confirmed
- TaskBounty — GitHub bug bounties paid in crypto, needs a working URL
  confirmed

## Bot/agent-facing revenue-share platforms, not bounty-style

- Poe — https://poe.com (creator revenue share, up to $20/new subscriber)
- OpenAI GPT Store — https://chat.openai.com/gpts (revenue share,
  ~$0.03/conversation reported average)

## Crypto-native agent infrastructure, not yet live-checked for real openings

- Olas / Autonolas — https://olas.network
- Virtuals Protocol — https://www.virtuals.io
- x402 (Coinbase/Base protocol, not a single marketplace)

## How to keep this file honest

Every entry above should carry a "live status" line with the date it was
actually checked, not just described from search results or marketing
copy. When re-checking a platform, update its entry in place rather than
adding a duplicate, and note explicitly if the numbers changed.
