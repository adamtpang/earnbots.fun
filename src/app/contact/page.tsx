import type { Metadata } from "next";

import { InfoPage } from "@/components/info-page";
import { buttonVariants } from "@/components/ui/button";
import { GITHUB_ISSUES_URL, SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact the project",
  description:
    "Contact the earnbots.fun project through its public GitHub issue tracker for corrections, source questions, or reproducible experiment reports.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <InfoPage eyebrow="Contact" title="Reach the project in public">
      <p>
        The direct contact path for earnbots.fun is the repository&apos;s public
        issue tracker. Use it to report a factual correction, question a source,
        reproduce an experiment result, or flag a problem with this website.
      </p>
      <p>
        GitHub issues are public, so do not include private keys, payout
        credentials, personal addresses, confidential business information, or
        any other sensitive data. earnbots.fun does not provide private account
        support because the project has no user accounts or customer balances.
      </p>
      <div>
        <a
          href={GITHUB_ISSUES_URL}
          className={cn(buttonVariants({ size: "lg" }))}
        >
          Contact through a GitHub issue
        </a>
      </div>
    </InfoPage>
  );
}
