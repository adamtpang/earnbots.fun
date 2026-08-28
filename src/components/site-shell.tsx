import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  GITHUB_PROFILE_URL,
  GITHUB_REPO_URL,
  SITE_NAME,
  TRUST_LINKS,
} from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-8">
      <Link
        href="/"
        className="font-mono text-sm font-semibold tracking-tight underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        {SITE_NAME}
      </Link>
      <div className="flex flex-wrap items-center gap-4">
        <nav
          aria-label="Company and policies"
          className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400"
        >
          {TRUST_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline-offset-4 hover:text-zinc-950 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 dark:hover:text-zinc-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Badge variant="outline">build log</Badge>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-4xl flex-col gap-4 border-t px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
      <span>
        Built by{" "}
        <a
          href={GITHUB_PROFILE_URL}
          className="underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Adam
        </a>
        . Source on{" "}
        <a
          href={GITHUB_REPO_URL}
          className="underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          GitHub
        </a>
        .
      </span>
      <nav aria-label="Footer links" className="flex flex-wrap gap-4">
        {TRUST_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
