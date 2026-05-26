# studio-ai

Marketing site for **Nrvana Studio** — AI-augmented design for individuals, SMBs, and especially digital artists. The AI design line of the Nrvana umbrella.

**Live at:** `https://studio.nrvana.com` (deployed via Vercel)
**Stack:** Astro 5 · Tailwind CSS 4 · MDX
**Sibling site:** `ai.nrvana.com` (Nrvana AI consulting — repo `Suede0619/nrvana-ai`)
**Operating folder:** `/Users/stupaul22/Documents/VAULT/studioAI/` (private; not in this repo)

## Quickstart

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Build & deploy

Pushing to `main` triggers a Vercel production deploy. Preview deploys run on every PR.

```bash
npm run build      # local production build to ./dist
npm run preview    # serve the built dist locally
```

## Structure

```
src/
├── layouts/BaseLayout.astro     Site chrome (head, nav, footer)
├── components/                  Nav, Footer
├── pages/                       Route per file
│   ├── index.astro              Home — hero + thesis + 3 doorways + stats + method + artist callout + CTA
│   ├── services/
│   │   ├── index.astro          Services overview (ladder + offerings table)
│   │   ├── snapshot.astro       Design Snapshot — $450
│   │   ├── visual-cortex.astro  Personal Visual Cortex — $2,500
│   │   ├── brand-sprint.astro   Brand & Visual System Sprint
│   │   ├── pitch-deck.astro     Pitch Deck Sprint
│   │   ├── visual-system.astro  Visual System Setup
│   │   └── retainers.astro      Retainers
│   ├── for-artists/
│   │   ├── index.astro          Artist Path overview
│   │   ├── audit.astro          Artist Style Snapshot — $250
│   │   └── cortex.astro         Artist Cortex — $1,200
│   ├── method.astro             (stub — full method page coming)
│   ├── about.astro              Stuart Paul · Founder
│   ├── plates/index.astro Essays index (essays coming)
│   ├── contact.astro            Two doorways
│   └── legal/                   Privacy + Terms (stubs)
└── styles/global.css            Tailwind + brand tokens (warm cream + terracotta)
```

## Brand rules

The operating brand/voice/positioning lives in `studioAI/brand/`. Three rules to remember:

1. **Thesis is immovable:** *Amplify the humans doing the design work. Never replace them — especially not the artists.*
2. **Three named concepts only:** Amplification · Visual Cortex · Atelier.
3. **Never link to or credit external research sources** in public copy.

See `AGENTS.md` for the full instructions any AI assistant should follow when editing this repo.

## License

Proprietary. © Nrvana / Stuart Paul.
