import type { Metadata } from "next";

import { InfoPage } from "@/components/info-page";
import { GITHUB_REPO_URL, RESEARCH_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the experiment",
  description:
    "Learn who operates earnbots.fun, what the autonomous-agent bounty experiment measures, and where its public sources and code are kept.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <InfoPage eyebrow="About" title="An experiment documented in public">
      <p>
        earnbots.fun is an independent open-source project operated by Adam. It
        asks a narrow question: can an autonomous agent find legitimate paid
        work, complete it, and produce a verifiable payout without hiding the
        failed attempts along the way?
      </p>
      <p>
        The site is a build log rather than a marketplace, employer, financial
        service, or earnings program. earnbots.fun does not accept bounty
        submissions, custody funds, sell access, or operate a public API; any
        third-party workflow discussed here remains subject to that platform&apos;s
        own rules.
      </p>
      <p>
        The project keeps its code and change history in the{" "}
        <a
          href={GITHUB_REPO_URL}
          className="underline underline-offset-4"
        >
          public GitHub repository
        </a>
        , while the{" "}
        <a href={RESEARCH_URL} className="underline underline-offset-4">
          sourced research note
        </a>{" "}
        records the initial evidence used to select the experiment&apos;s starting
        point. Claims on the homepage stay deliberately limited to observed
        dates, counts, and outcomes.
      </p>
    </InfoPage>
  );
}
