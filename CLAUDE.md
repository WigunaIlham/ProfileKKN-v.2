# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `pnpm-workspace.yaml`, `pnpm-lock.yaml`). Use `pnpm`, not `npm`/`yarn`.

- `pnpm dev` — Next.js dev server on http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm lint` — `next lint` (ESLint via `eslint-config-next`)

There is no test suite configured.

## Architecture

Single-page landing site for "KKN JamaLights 206" built on **Next.js 15 App Router + React 19 + TypeScript (strict) + Tailwind CSS 3**. The entire site is a single route (`app/page.tsx`) that composes ~16 section components in a fixed vertical order. Routing additions are rare; most work is editing data files, sections, or shared UI.

### Section composition pattern

`app/page.tsx` is the canonical assembly: `Navbar` followed by each `*Section` component, then `FooterSection`. To add a new section: create `components/sections/NameSection.tsx`, render it in `app/page.tsx` at the correct position, and (if it needs an anchor) add an entry to `NAV_LINKS` in `constants/index.ts` with matching `id` on the section's root element.

### Data layer

All page content is static and lives in `data/*.ts` (team, programs, gallery, timeline, divisions, village, testimonials, faqs, stats). Each file exports a typed array consumed by the matching section. Interfaces are centralized in `types/index.ts` — update the type there when adding fields, not inline in the data file.

### Google Drive image pipeline

Team photos, gallery images, and testimonial avatars are served from Google Drive, not from `/public`. The mechanism lives in `lib/drive.ts`:

- Data stores a `driveId` (raw Google Drive file ID). `extractDriveId()` accepts raw IDs or full Drive share URLs.
- `driveUrl(id, size)` / `buildDriveUrl(input, size)` produce `https://drive.google.com/thumbnail?id=...&sz=w<size>` URLs at allowed sizes `100|200|400|800|1200|1600`.
- The `drive.google.com/thumbnail**` host is whitelisted in `next.config.ts` `images.remotePatterns` — adding any new external image host requires updating that list.
- When `driveId` is missing/empty, fall back to a gradient avatar built from `getInitials()` + `getAvatarGradient(name)` (deterministic gradient per name).
- `TeamMember.photo` is **deprecated**; prefer `driveId`. Don't reintroduce it for new entries.

### Styling system

Tailwind config (`tailwind.config.ts`) defines the earthy palette — `primary` (forest green), `gold`, `cream`, `olive` — plus custom gradients (`bg-gradient-earthy`, `bg-gradient-gold`, `bg-gradient-hero`, `bg-gradient-hero-dark`, `bg-grain`), shadows (`shadow-earthy`, `shadow-card`, etc.), and animations (`animate-float`, `animate-shimmer`, `animate-spin-slow`, etc.). Reuse these tokens rather than inlining hex values. Dark mode is class-based (`darkMode: ["class"]`) and wired through `next-themes` via `components/providers/ThemeProvider`. Fonts are loaded in `app/layout.tsx` via `next/font/google` and exposed as CSS vars `--font-plus-jakarta` (heading) and `--font-poppins` (body), referenced by `font-heading` / `font-body` Tailwind utilities.

### Animation

Shared Framer Motion variants live in `lib/motion.ts` (`fadeUp`, `fadeIn`, `fadeLeft`, `fadeRight`, `scaleUp`, `staggerContainer`). Use these for section entry animations to keep motion consistent; don't redefine equivalents inline.

### TypeScript paths

`tsconfig.json` maps `@/*` to the repo root, so imports look like `@/components/sections/HeroSection`, `@/data/team`, `@/lib/drive`, `@/constants`. Strict mode is on.

### Content language

Site copy, comments, and many data fields are in **Bahasa Indonesia**. Preserve language when editing user-facing strings.
