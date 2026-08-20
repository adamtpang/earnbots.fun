import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const STATUS = {
  checkedAt: "2026-08-20",
  liveListings: 9,
  openUnclaimed: 0,
  deadlineFilterWorks: false,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-8">
        <span className="font-mono text-sm font-semibold tracking-tight">
          earnbots.fun
        </span>
        <Badge variant="outline">build log</Badge>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-16 px-6 pb-24">
        <section className="flex flex-col gap-6 pt-8">
          <Badge variant="secondary" className="w-fit">
            not yet proven
          </Badge>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Can an AI agent actually earn real money on its own?
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is a build log, not a product. I&apos;m trying to get an
            autonomous agent to find and complete paid bounties, starting
            with Superteam Earn&apos;s agent API, and logging exactly what
            happens, good or bad.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/adamtpang/earnbots.fun"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Follow the repo
            </a>
            <a
              href="https://superteam.fun/earn/agents"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Superteam Earn agent API
            </a>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            The honest current state
          </h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            Checked {STATUS.checkedAt}. No fabricated traction, no
            &quot;passive income&quot; framing. Just what the API actually
            returns right now.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardDescription>Agent-eligible listings found</CardDescription>
                <CardTitle className="text-3xl">
                  {STATUS.liveListings}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-500">
                via GET /api/agents/listings/live
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Open and unclaimed</CardDescription>
                <CardTitle className="text-3xl">
                  {STATUS.openUnclaimed}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-500">
                every listing returned already has a winner announced
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Deadline filter</CardDescription>
                <CardTitle className="text-3xl">Broken</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-500">
                the documented `deadline` param 500s server-side
              </CardContent>
            </Card>
          </div>
          <p className="max-w-xl text-sm text-zinc-500">
            This page will update the moment that changes, with a real
            listing and a real claim link. Until then, no earnings claims.
          </p>
        </section>

        <Separator />

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            How this is supposed to work
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">1. Register</CardTitle>
                <CardDescription>
                  Agent calls POST /api/agents, gets an API key and a claim
                  code.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">2. Discover</CardTitle>
                <CardDescription>
                  Agent checks listings marked AGENT_ALLOWED or AGENT_ONLY.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">3. Submit</CardTitle>
                <CardDescription>
                  Agent does the work and submits it through the API.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">4. Claim</CardTitle>
                <CardDescription>
                  If it wins, a human claims the crypto payout with the
                  claim code.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why start with bounties, and what&apos;s next
          </h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            Before writing any code, I researched every way AI agents are
            currently making real money online, crypto and non-crypto, and
            ranked them by how verified the earnings actually are, not by
            how loud the marketing is.{" "}
            <a
              href="https://github.com/adamtpang/earnbots.fun/blob/master/RESEARCH.md"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Full sourced writeup is in the repo.
            </a>{" "}
            The short version: most of the space is unverified marketing
            claims or one-off windfalls. Superteam Earn&apos;s bounty API is
            one of the few genuinely audited payout rails, which is why
            it&apos;s the starting point here, not the whole plan.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                n: "1",
                t: "Superteam Earn bounties",
                d: "Real API, real past payouts. Building here first.",
              },
              {
                n: "2",
                t: "GPT Store / Poe bots",
                d: "Real revenue share, small per-bot earnings.",
              },
              {
                n: "3",
                t: "Olas prediction-market agents",
                d: "Real trades, unaudited returns, weak token economics.",
              },
              {
                n: "4",
                t: "Small agent-bounty marketplaces",
                d: "Real but trivial. One documented case: $0.68.",
              },
              {
                n: "5",
                t: "x402 micropayment agents",
                d: "Real protocol, ~half the volume is meme-coin noise.",
              },
              {
                n: "6",
                t: "Virtuals Protocol agent commerce",
                d: "Infra is real, autonomous execution is rare per Virtuals' own team.",
              },
              {
                n: "7",
                t: "Solo-agent crypto windfalls",
                d: "Truth Terminal-style. Real money, unrealized gains, not repeatable.",
              },
              {
                n: "8",
                t: "Adversarial agent games",
                d: "Freysa-style. Real payout, but to whoever beats the agent.",
              },
            ].map((item) => (
              <Card key={item.n}>
                <CardHeader>
                  <CardDescription>Method {item.n}</CardDescription>
                  <CardTitle className="text-base">{item.t}</CardTitle>
                  <CardDescription>{item.d}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-4xl px-6 py-8 text-sm text-zinc-500">
        Built by{" "}
        <a
          href="https://github.com/adamtpang"
          className="underline underline-offset-4"
        >
          Adam
        </a>
        . Source on{" "}
        <a
          href="https://github.com/adamtpang/earnbots.fun"
          className="underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}
