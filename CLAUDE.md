# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the Next.js dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`, extends `next/core-web-vitals` + `next/typescript`)

There is no test runner configured.

## Architecture

Single-page marketing/landing site for an SEO AI agent, built on the **Next.js 16 App Router** with **React 19**.

- `app/` — App Router entry. `layout.tsx` defines root HTML, fonts (Geist via `next/font`), and SEO metadata (Open Graph + Twitter). `page.tsx` composes the landing page from components. `globals.css` sets up Tailwind v4.
- `components/` — page sections (`NavBar`, `HeroSection`, `RyzeAgentHero`) and primitives (`Button`). Client components use `"use client"` and `motion` (Framer Motion successor) for animations; icons come from `lucide-react`.
- **Tailwind v4** is configured via `@tailwindcss/postcss` in `postcss.config.mjs` — there is no `tailwind.config.js`; theme customization lives in `app/globals.css` via `@theme`.
- Path alias `@/*` → repo root (see `tsconfig.json`).

## Product context

`info.md` is the source of truth for product positioning, target users, and core messaging (e.g. "Stop doing SEO. Start running it."). Consult it before writing or editing any user-facing copy — hero text, metadata, CTAs — and follow its "Notes for AI Agents" section (emphasize automation/outcomes; avoid framing as a tool, content generator, or keyword platform).

## Next.js 16 caveat

Per `AGENTS.md`, this is Next.js 16 with breaking changes from prior major versions. Before writing code touching routing, data fetching, caching, or metadata APIs, consult `node_modules/next/dist/docs/` rather than relying on prior Next.js knowledge.
