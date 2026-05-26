# AGENTS.md — context for any AI assistant editing this repo

This is the marketing site for **Nrvana Studio**, served at `https://studio.nrvana.com`.

## Project purpose

A small, opinionated, single-CTA marketing site for the Nrvana Studio AI design practice. Three audiences (For You, For Your Team, For Artists). One thesis (amplify humans — never replace, especially not the artists). One primary CTA per page.

## The thesis (do not violate)

> **Nrvana Studio amplifies the humans doing the design work. Nrvana Studio does not replace designers or artists with AI.**

Any copy you write or edit must answer to this. Reject "headcount reduction" / "skip the designer" / "AI replaces illustrators" framings on sight. Audience C (working artists) deserves extra care — treat AI as a power tool the artist steers, never as the talent.

## Stack

- **Framework:** Astro 5 (static-first)
- **Styling:** Tailwind CSS 4 via `@tailwindcss/vite`
- **Content:** MDX-ready (Studio Notes essays go in `src/content/`)
- **Deploy:** Vercel, connected to `main`

## Voice rules (apply when writing copy)

- **Warm, plain, specific, confident — with more visual confidence than the sibling consulting site.**
- **Three named concepts only:** Amplification · Visual Cortex · Atelier.
- **Italicized punchlines** at section breaks. One per section.
- **Never credit or link to external research sources** (cmprssn.xyz, theagenticstack.vercel.app, clawryderz.spirittree.dev, AI design tools research brief, etc.). Translate insights into Nrvana Studio voice.
- **Real samples, real before/afters, real numbers** — never invent.
- **Yours regardless** — surface this guarantee on every offer page.
- **Show pricing.** Every offer page shows the price visibly.

Full voice guide in the operating folder: `/Users/stupaul22/Documents/VAULT/studioAI/brand/voice.md`.

## Where to find the source-of-truth docs

- `studioAI/brand/positioning.md` — three audiences, the wedge, hard rules.
- `studioAI/brand/voice.md` — voice + copy rulebook.
- `consultAI/brand/repo-map.md` — the umbrella brand surface map (two active surfaces: this site + ai.nrvana.com).
- `studioAI/products/service-map.md` — pricing and deliverables per offering.
- `studioAI/research/ai_design_tools.md` — the AI design tool landscape we use and recommend.
- `studioAI/website/PRD.md` — full page-by-page spec.

## Before drafting public-facing content

Before writing a new page, a Studio Notes essay, social copy, or any other public artifact: consult the shared ongoing-resources index at `consultAI/research/ongoing-resources.md`. Currently surfaces the **Clawryderz knowledge vault** (https://clawryderz.spirittree.dev/) — Stuart's Telegram-community knowledge graph. **Authenticated; credentials in `/Users/stupaul22/Documents/VAULT/.env`.** Fastest way to get the channel's canonical position on any topic: ask Bridg3 directly via the floating 🐯 button (`POST /api/ask`).

**Never credit or link to research sources on the public site.**

## When in doubt

- Default to **draft and ask**, not silent edit, on any public-facing copy change.
- Anything that touches pricing or the thesis: stop and confirm.
- For technical changes, follow Astro 5 conventions.

## Things not to do

- Do not draft copy that implies AI replaces designers or artists. Hard line.
- Do not credit external research sources.
- Do not invent testimonials, client logos, before/afters, or AI-generated placeholder art posing as real work.
- Do not link to the sibling `ai.nrvana.com` (Nrvana AI consulting) beyond the footer "Also from Nrvana" pattern.
- Do not link to or reference `nrvana.com` (`nrvana-site`) — it is parked / obsolete (old web-2.0 portfolio).
- Do not reference or link to `lit-nrvana` / `lit.nrvana.com` — that is Stuart's private poetry and out of scope for this project entirely.
- Do not commit secrets or `.env*` files.
