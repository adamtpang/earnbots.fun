import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  GITHUB_REPO_URL,
  RESEARCH_URL,
  SITE_URL,
  SUPERTEAM_AGENT_GUIDE_URL,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/` },
};

const STATUS = {
  checkedAt: "2026-08-20",
  liveListings: 9,
  openUnclaimed: 0,
  deadlineFilterWorks: false,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-16 px-6 pb-24">
        <section className="flex flex-col gap-6 pt-8">
          <Badge variant="secondary" className="w-fit">
            not yet proven
          </Badge>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Can an AI agent actually earn real money on its own?
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            earnbots.fun is an open build log, not a product or an earnings
            promise. The experiment tracks whether an autonomous agent can find
            and complete paid bounties, while recording the useful results and
            the failures without marketing spin.
          </p>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            The first investigation follows Superteam Earn&apos;s published
            agent workflow. earnbots.fun does not operate a public API, accept
            bounty submissions, or hold payout credentials; it documents the
            external experiment and points readers to original sources.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={RESEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Start with the sourced research
            </a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Follow the build on GitHub
            </a>
            <a
              href={SUPERTEAM_AGENT_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Review Superteam&apos;s agent guide
            </a>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            The honest current state
          </h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            The latest recorded check was {STATUS.checkedAt}. Superteam&apos;s
            external listing service returned {STATUS.liveListings} eligible
            listings, but all {STATUS.liveListings} already showed winners and
            {" "}
            {STATUS.openUnclaimed} were both open and unclaimed, so the
            experiment has not earned money.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardDescription>
                  Listings returned by Superteam
                </CardDescription>
                <CardTitle className="text-3xl">
                  {STATUS.liveListings}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-500">
                Recorded from Superteam&apos;s published agent workflow.
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
                Every returned listing already had a winner announced.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Documented deadline filter</CardDescription>
                <CardTitle className="text-3xl">
                  {STATUS.deadlineFilterWorks ? "Working" : "Broken"}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-500">
                The external filter returned a server error during the check.
              </CardContent>
            </Card>
          </div>
          <p className="max-w-xl text-sm text-zinc-500">
            earnbots.fun will publish a real listing and claim link only after
            the experiment finds one. Until that happens, the site makes no
            earnings claim and does not present old listings as available work.
          </p>
        </section>

        <Separator />

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            How the external experiment is intended to work
          </h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            Superteam Earn&apos;s four-step workflow belongs to that external
            platform, not to earnbots.fun. This site records observations and
            source links; registration, listing discovery, submission, and any
            eventual payout claim happen through Superteam&apos;s own service.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">1. Register there</CardTitle>
                <CardDescription>
                  The agent registers with Superteam and receives the
                  credentials and claim code described in its guide.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">2. Discover work</CardTitle>
                <CardDescription>
                  The agent checks Superteam listings marked for agent
                  participation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">3. Submit there</CardTitle>
                <CardDescription>
                  The agent completes the work and submits it through
                  Superteam&apos;s published workflow.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">4. Claim a win</CardTitle>
                <CardDescription>
                  If the submission wins, a human follows Superteam&apos;s claim
                  process for the payout.
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
            The project began by researching ways AI agents are reported to
            make money online, across crypto and non-crypto systems, then
            ranking them by the evidence behind the earnings rather than the
            volume of their marketing. The{" "}
            <a
              href={RESEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              full sourced writeup is in the repository
            </a>
            . Most examples were unverified campaigns or one-off windfalls;
            Superteam&apos;s documented bounty workflow and past payouts made it
            a concrete starting point, not proof that this experiment will
            earn anything.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                n: "1",
                t: "Superteam Earn bounties",
                d: "Published agent workflow and documented past payouts. Testing it first.",
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
                d: "Real protocol, about half the volume was meme-coin noise.",
              },
              {
                n: "6",
                t: "Virtuals Protocol agent commerce",
                d: "Infrastructure is real; autonomous execution was rare in the reviewed evidence.",
              },
              {
                n: "7",
                t: "Solo-agent crypto windfalls",
                d: "Truth Terminal-style: real money, unrealized gains, not repeatable.",
              },
              {
                n: "8",
                t: "Adversarial agent games",
                d: "Freysa-style: a real payout, but to whoever beats the agent.",
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

      <SiteFooter />
    </div>
  );
}
