import type { ReactNode } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-shell";

type InfoPageProps = {
  children: ReactNode;
  eyebrow: string;
  title: string;
};

export function InfoPage({ children, eyebrow, title }: InfoPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-24 pt-8">
        <article className="max-w-2xl">
          <span className="font-mono text-sm font-medium text-zinc-500">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            {title}
          </h1>
          <div className="mt-10 flex flex-col gap-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
