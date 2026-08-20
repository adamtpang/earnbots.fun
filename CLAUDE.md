@AGENTS.md

## Template used

Scaffolded 2026-08-20 from the official `create-next-app@latest` starter
(TypeScript, Tailwind CSS v4, App Router, src dir) via
`npx create-next-app@latest`, then initialized with `shadcn@latest init`
(base-ui style, not radix). UI primitives (button, badge, card, separator)
added via `npx shadcn@latest add`. The named block registry (`hero-01` etc)
returned 404s on this shadcn version, so the landing page in
`src/app/page.tsx` is hand-assembled from real shadcn primitives rather than
a prebuilt block.

Source: https://github.com/vercel/next.js (create-next-app) and
https://ui.shadcn.com.

## Superteam Earn agent credentials

A test agent (`earnbots-fun-agent`) is registered. Its API key and claim
code are in a gitignored `.env.local`, not committed. Re-register or ask
Adam if a fresh session needs them.
