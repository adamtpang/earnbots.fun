# AI agent money index — pure agents devs deploy for themselves

Researched 2026-08-20, via parallel WebSearch/WebFetch across crypto/DeFi,
gig/bounty platforms, social/content, and enterprise contexts. Scope note
below matters, read it first.

## Scope: what counts, what doesn't

This index is about a single dev (or small team) standing up an autonomous
or semi-autonomous agent that earns money directly, not a VC-backed company
selling agent software as a product to other people.

**Excluded on purpose**: Cognition/Devin ($492M ARR), Anthropic Claude Code
($8B ARR), Replit Agent ($525M ARR), Sierra AI ($200M ARR), Decagon, 11x,
Artisan. These are real, large, verified revenue numbers, but they are
companies selling agent tools to customers. That's a different question
(who profits from agentic AI as a business) from this one (can a dev's own
deployed agent make that dev money).

**Included**: bounty-hunting agents, trading/prediction-market bots,
GPT-store/Poe bot creators, agent launchpad participants, and the handful
of named individual cases (Truth Terminal, Freysa) where a specific person
deployed a specific agent and it moved real money.

## Ranked index, most-proven first

### 1. Superteam Earn agent bounties — real rail, thin supply right now
A dev registers an agent via `POST /api/agents`, the agent discovers
`AGENT_ALLOWED`/`AGENT_ONLY` bounties, submits work, and a human claims the
crypto payout with a claim code. Typical bounty size $500-$5,000.
**Live-checked 2026-08-20 with a freshly registered agent** (for the
earnbots.fun build): 9 listings returned, all 9 already have winners
announced, zero open and unclaimed. The documented `deadline` filter param
throws a server-side error. Mechanism is real and working end to end; the
opportunity to actually earn from it, as of today, is not.
Source: https://superteam.fun/earn/agents

### 2. GPT Store / Poe bot creators — real but small per-bot
An individual builds a GPT or Poe bot and gets a revenue share. Poe pays
creators up to $20 per new subscriber plus a per-message cut; TechCrunch
reports Poe's total creator payouts run at "tens of millions of dollars"
a year in aggregate, but that's spread across many creators and most
individual bots earn little. OpenAI's GPT Store reportedly averages around
$0.03/conversation, and most creators miss the volume threshold to earn
anything at all; a handful of top creators reach the low thousands/month,
unofficially.
Source: https://techcrunch.com/2024/04/09/poe-introduces-a-price-per-message-revenue-model-for-ai-bot-creators

### 3. Agent-run prediction-market/trading bots on Olas (Autonolas) — real activity, unaudited returns
Devs run autonomous trading agents on Olas infrastructure (staking +
prediction-market trading). One named example, "Polystrat," claims 4,200+
Polymarket trades with up to 376% returns on individual trades, but this
is self-reported and not independently audited. Aggregate marketplace
turnover is small (~$89K), and the OLAS token itself is down 99.6% from
its all-time high, so the infrastructure's own economics are weak even
where individual trading claims look good.
Source: https://agenteconomy.to/olas, https://www.gate.com/learn/articles/what-is-autonolas-olas/7162

### 4. Small agent-bounty marketplaces (Bounty, BotBounty.ai, TaskBounty, dealwork.ai, ClawGig) — real but trivial payouts
A growing set of niche platforms let a dev's agent pick up small paid
tasks, usually paid in crypto (USDC/ETH). Concrete, verifiable data point:
one agent on dealwork.ai, "ICYatrends," earned a documented **$0.68**
across 5 completed contracts. That's real money changing hands, but it
illustrates the current scale honestly: this category is nascent, not
lucrative. Marketing claims of "top hunters earn $10k+/month" on these
platforms are unsourced.
Source: https://dev.to/kirothebot/the-agent-economy-is-real-12-platforms-where-ai-agents-actually-earn-money-may-2026-5bm2

### 5. x402 micropayment agents — real protocol, mostly gamified in practice
Coinbase/Cloudflare's x402 lets an agent pay or get paid per API call in
stablecoins on Base, agent-to-agent. By Q1 2026: ~167M cumulative settled
transactions, ~69,000 active agents. But real, non-speculative commerce
volume is only about **$28,000/day**, and roughly half of all activity is
meme-coin-driven gamification (e.g. spikes tied to the PING token) rather
than agents actually buying and selling real services. A dev can plug an
agent into this rail today; whether there's real paying demand on the
other end is the open question.
Source: https://www.chainalysis.com/blog/x402-agentic-payments-adoption/

### 6. Virtuals Protocol "Agent Commerce Protocol" — infrastructure exists, real execution is rare
Virtuals lets a dev tokenize and launch an agent, and its Feb 2026
"Revenue Network" is designed to distribute up to $1M/month to agents that
sell real services. Protocol-level revenue is real ($59M annualized,
mostly from launch fees), but Virtuals' own team told researchers
"genuine autonomous execution remains rare" — most of the $13.2B/month in
trading volume is token speculation on agent launches, not agents earning
from actual work. Revenue is also down 96% from its January 2025 peak.
Source: https://blockeden.xyz/blog/2026/04/21/agdp-agent-gdp-virtuals-protocol-ai-blockchain-valuation-primitive-tvl-displacement/

### 7. Truth Terminal — one dev, one agent, real money, but a windfall not a repeatable model
Andy Ayrey built an AI agent that posts on X. Marc Andreessen sent its
wallet $50,000 in BTC as a research grant (July 2024); the agent then
endorsed the $GOAT memecoin and later $FARTCOIN, and its wallet's paper
value hit an estimated $1.5M within months, reportedly as high as $37.5M
by December 2024. This is the single clearest "one dev's agent moved real
money" story in the research, but it's unrealized token appreciation from
an airdrop and a lucky memecoin endorsement, not earned income from doing
work, and the creator has confirmed human oversight was involved.
Source: https://techcrunch.com/2024/12/19/the-promise-and-warning-of-truth-terminal-the-ai-bot-that-secured-50000-in-bitcoin-from-marc-andreessen/

### 8. Freysa — a dev-deployed agent, but the money went to the person who beat it
A team deployed an AI agent that guarded a $47,000 prize pool; users paid
escalating fees to try to talk it into releasing the funds, and it was
drained on the 482nd attempt via a prompt-injection exploit (Nov 2024).
Real, fully verified payout, but the money flowed to the human who broke
the agent, not to the agent's operators as ongoing income. Included here
as the field's clearest "yes, real dollars moved because of an agent" case
study, with the caveat that it's a one-off game, not a business model.
Source: https://www.coinspeaker.com/freysa-ai-surrenders-47000-prize-clever-user-exploits-language-loophole/

## Explicitly excluded as unverified or discredited

- **ai16z / ElizaOS "autonomous AI fund"**: discredited. Token down ~97%
  from peak, founder called it "completely dead" (Aug 2026), a federal
  class-action was settled by transferring the foundation's treasury to
  plaintiffs. Not a working example of a dev's agent earning money.
- **DeFi trading-agent platforms broadly**: a 2026 academic paper, "Paper
  Agents, Paper Gains," surveyed 10 DeFi investment-agent platforms and
  found only 3 actually executed autonomous trades; the rest gave advice
  or simulations. Across the surveyed platforms, users collectively lost
  $191.7M while platform operators held $34.3M in unrealized paper gains.
- **AI YouTube automation / AI OnlyFans-style personas**: real subscription
  and ad-revenue mechanisms exist, but the specific dollar figures in wide
  circulation ($3,847/month, $23,000/month, etc.) trace back almost
  entirely to the agencies and creators selling the "build your own"
  course or template, with no independent verification. These are
  AI-assisted human content businesses more than autonomous earning agents.

## Bottom line for earnbots.fun

Across every category, the honest pattern is the same: the payout rails a
solo dev can actually plug an agent into are real (Superteam Earn, x402,
Poe, Olas, agent-bounty marketplaces), but current real, non-speculative,
non-inflated earnings per agent are small to negligible, and the two
cases with genuinely large dollar figures (Truth Terminal, Freysa) are
one-off windfalls, not repeatable income. Building against Superteam
Earn's agent API is a defensible starting point precisely because it's the
most transparent, audited version of this pattern: a documented API, real
past bounty payouts, and an honest current state (zero open listings as of
today) rather than a platform hiding behind unverified aggregate numbers.
