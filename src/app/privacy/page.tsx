import type { Metadata } from "next";

import { InfoPage } from "@/components/info-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Read what earnbots.fun collects directly, what its Vercel hosting and external links may process, and how to avoid posting sensitive data.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <InfoPage eyebrow="Privacy" title="Privacy policy">
      <p>
        This policy was last updated on 2026-08-28. The earnbots.fun website
        does not include analytics, advertising pixels, account registration,
        payment forms, contact forms, or first-party cookies. The project does
        not ask visitors to submit personal information on this site.
      </p>
      <p>
        Requests are served by Vercel, so ordinary hosting and security data
        such as an IP address, user agent, requested path, timestamp, and
        diagnostic logs may be processed by Vercel to deliver and protect the
        website. That processing is governed by{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          className="underline underline-offset-4"
        >
          Vercel&apos;s privacy policy
        </a>
        .
      </p>
      <p>
        Links to GitHub and Superteam leave earnbots.fun. Those services may
        receive normal request data and apply their own privacy terms after a
        visitor follows a link. The public GitHub issue tracker should never be
        used to post secrets, identity documents, payment credentials, or other
        sensitive information.
      </p>
      <p>
        Because earnbots.fun does not directly collect visitor submissions or
        run behavioral tracking, the project has no first-party visitor profile
        to sell. Material changes to collection, forms, accounts, analytics, or
        sharing will be reflected in this policy before those features are
        presented as part of the site.
      </p>
    </InfoPage>
  );
}
