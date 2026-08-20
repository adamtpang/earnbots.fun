# earnbots.fun — starting prompt

Paste this whole file into a fresh Claude Code session opened in this folder
(`C:\Users\adamp\Aether\earnbots.fun`). It carries the context so that session
doesn't have to re-derive it.

## What this is

Adam bought `earnbots.fun` on 2026-08-20 as the home base for AI agents that go
find and complete paid bounties/gigs autonomously, then hand Adam a claim code
to cash out. This is a personal build-in-public project, not (yet) a product
for sale to others: prove agents can actually earn real money, log it honestly.

## The real state of the opportunity, read before writing any copy

Starting point is Superteam Earn's agent API
(https://superteam.fun/earn/agents, full spec at https://superteam.fun/skill.md).
The mechanism is real: an agent registers via `POST /api/agents`, gets an API
key and a claim code, discovers listings marked `AGENT_ALLOWED`/`AGENT_ONLY`
via `GET /api/agents/listings/live`, submits work, and a human claims the
crypto payout later at `/earn/claim/<claimCode>`.

**Verified 2026-08-20, re-check before trusting it's still true**: the live
listings endpoint currently only returns competitions already decided
(`isWinnersAnnounced: true`, `winnersAnnouncedAt` in the past, 9 results,
deadlines Feb through early July 2026). Their own documented `deadline` filter
parameter (`&deadline=2026-12-31`, straight from their skill.md example)
currently throws a server-side `PrismaClientValidationError`, tried twice with
two different dates. **No currently-open, unclaimed agent bounty has been
confirmed yet.** Do not write landing page copy that claims live earnings or a
working pipeline until this changes. First real task for this session, before
touching any code: re-run this check and see if it's changed.

```bash
curl -s "https://superteam.fun/api/agents/listings/live?take=20" \
  -H "Authorization: Bearer <a real agent api key>"
```

A test agent is already registered: agentId `235df31e-1f42-4bb6-bd07-d133bd786511`,
username `your-agent-name-grotesque-63` (placeholder name from testing, register
a properly-named one for real use). **Its API key and claim code are deliberately
not in this file, they're sensitive.** Adam has them from the terminal output.
Put them in a gitignored `.env.local`, never in a committed file or in code.

## Do, in order

1. **Re-check the Superteam listings endpoint** (command above). If real open
   listings exist now, use real numbers in the copy. If not, say "not yet
   proven" honestly, don't fabricate traction.
2. **Scaffold from an official, current toolchain, don't hand-roll**:
   `npx create-next-app@latest` (TypeScript, Tailwind, App Router), then
   `npx shadcn@latest init`, then pull real sections from shadcn's own blocks
   registry (https://ui.shadcn.com/blocks) rather than writing components from
   scratch. If a fuller third-party landing template looks appealing, check its
   last commit date first, a same-session search this project came out of
   flagged at least one popular shadcn landing template as stale since October
   2024. Recent commits and real adoption only, per the Aether workspace's
   standing template rule.
3. **Landing page copy, honest**: this is Adam's build log of getting AI
   agents to earn real money, starting with Superteam Earn, tracking real
   results as they happen. No "passive income" framing. No claiming live
   earnings that step 1 didn't actually confirm.
4. **Connect to GitHub**: the remote already exists, check before creating
   anything new: `git remote -v`. If not yet set:
   `git remote add origin https://github.com/adamtpang/earnbots.fun.git`
5. **Deploy to Vercel**: either `vercel --prod` via CLI, or the Vercel MCP
   tools already available in this workspace (`create_git_project` /
   `deploy_to_vercel`).
6. **Record the template choice** in this repo's own `CLAUDE.md`, per the
   Aether workspace's standing rule: name the exact starter/template used and
   its source URL, so the choice stays traceable for later sessions.

## Rules (Aether workspace standing rules, apply here too)

- No em dashes anywhere, ever, in code, copy, or commits.
- Don't overclaim. If something isn't proven live, the copy says so.
- Cheap and reversible actions (a git commit, adding a shadcn block) don't
  need to pause for permission. Real spend, a push that rewrites shared
  history, or anything hard to reverse does, ask first.
- Default to writing no code comments unless the why is genuinely non-obvious.

## Done means

Landing page live at earnbots.fun via Vercel, built from real shadcn
components (not hand-rolled from scratch), copy that honestly matches
whatever step 1 actually found, repo pushed to `adamtpang/earnbots.fun`, and
this repo's own `CLAUDE.md` records which template/starter was used.
