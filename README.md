# Ryze AI — Autonomous SEO Landing Page

![Ryze AI SEO landing page](public/hero.webp)

Marketing landing page for **Ryze AI's autonomous SEO system** — a future product from [Ryze AI](https://www.get-ryze.ai/) that replaces manual SEO workflows with a self-improving AI system.

> "Stop doing SEO. Let it run itself."

## About the product

An AI-powered system that automates end-to-end SEO execution for solo founders and small teams. Instead of providing data and dashboards, it identifies opportunities, makes decisions, executes changes, and continuously improves performance on its own.

**Core capabilities**

- **Opportunity Detection** — analyzes search data, competitors, and content gaps to surface high-impact wins
- **Decision Engine** — prioritizes actions by ROI and outputs only a small set of high-leverage moves
- **Autonomous Execution** — updates content, fixes internal linking, and optimizes page structure without manual work
- **Self-Healing Technical SEO** — detects and resolves Core Web Vitals, schema, and other technical issues
- **AI Visibility Tracker (GEO/AEO)** — tracks brand presence and citations inside AI-generated answers, not just rankings
- **Continuous Optimization** — observes results and adjusts strategy automatically

**Built for** solo founders, indie hackers, small SaaS teams, and lean marketing teams who want predictable growth without spending time on manual SEO.

**Positioning** — not a tool, keyword platform, or content generator, but an autonomous SEO operating system. See [info.md](info.md) for the full product brief, and follow its "Notes for AI Agents" when editing user-facing copy.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (configured via `@tailwindcss/postcss`; theme lives in `app/globals.css` via `@theme`)
- **Motion** (Framer Motion successor) for animations
- **lucide-react** for icons
- **Inter and Pixelify_Sans** font family via `next/font`
- TypeScript, ESLint (`next/core-web-vitals` + `next/typescript`)

## Project structure

- `app/` — App Router entry. `layout.tsx` sets up fonts and SEO metadata; `page.tsx` composes the landing page; `globals.css` configures Tailwind v4.
- `components/sections/` — page sections (`HeroSection`, `HowItWorksSection`, `LiveResultsStrip`, `FinalCTASection`, …)
- `components/` — shared primitives (`NavBar`, `Button`, etc.)
- `public/` — static assets including [hero.webp](public/hero.webp)
- `info.md` — source of truth for product positioning and messaging
- `AGENTS.md` / `CLAUDE.md` — guidance for AI coding agents working in this repo

Path alias `@/*` resolves to the repo root (see `tsconfig.json`).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Edits to files under `app/` and `components/` hot-reload.

## Scripts

- `npm run dev` — start the Next.js dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

There is no test runner configured.

## Important notes

- **Next.js 16 has breaking changes** from prior major versions. Before touching routing, data fetching, caching, or metadata APIs, consult `node_modules/next/dist/docs/` rather than relying on older Next.js knowledge.
- **Tailwind v4** — there is no `tailwind.config.js`. Theme tokens live in `app/globals.css` under `@theme`.
- **Copy guidelines** — emphasize automation and outcomes; frame Ryze as a system, not a tool. Avoid "content generator" or "keyword platform" framing.

## Deploy

Deploy on [Vercel](https://vercel.com/new) — the recommended platform for Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
