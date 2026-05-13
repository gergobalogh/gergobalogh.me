# Project Board

Live coordination board for `gergobalogh.me`. Keep this file short and current. Long-form thinking belongs in `README.md` and `DESIGN_BRIEF.md`.

## Current Status

MVP site is built and running locally. All core routes exist in EN, RO, and HU. Design system is implemented. Content is loaded from approved copy. 4 starter notes are published in English.

## Core Decisions

- Site purpose: trust hub for public work, not a personal diary and not a résumé dump
- Stack: `Astro + TypeScript + MDX + plain CSS`
- Languages at launch: `RO`, `EN`, `HU`
- Root route defaults to `EN`
- Language switching is available in the navbar
- Core homepage and site chrome ship in all three languages
- Notes are published per-language, without mandatory 3-language parity
- English is the default note publishing language unless a note is intentionally translated
- Visual direction: `editorial civic minimalism`
- Homepage includes one portrait
- Primary featured projects: `isthisai`, `clujparticipa`
- Third homepage slot: `Notes and experiments`
- `clujparticipa` should link to the live app when ready
- `isthisai` public URL: `https://isthisaislop.help`
- Public contact email: `baloghgergo@gmail.com`
- Public GitHub: `https://github.com/gergobalogh`
- Public LinkedIn: `https://ro.linkedin.com/in/gergobalogh`

## Task Status

### 1. ~~Create Astro site skeleton~~ ✅

Done:
- Astro v6 project exists in this folder
- TypeScript is configured
- Plain CSS global styling is wired with all design tokens
- App builds and runs locally (22 pages)

### 2. ~~Set up multilingual routing~~ ✅

Done:
- `/` resolves to English by default
- `/ro/` resolves to Romanian
- `/hu/` resolves to Hungarian
- Language switcher (RO / EN / HU) is in the navbar
- Localized homepages work directly by URL
- All note and project routes exist in all three languages

### 3. ~~Implement homepage layout~~ ✅

Done:
- Top bar with site name, nav links, and language switcher
- Hero with headline, subhead, body, CTAs, and portrait
- About section
- Projects section with 3 project blocks
- Notes section with 4 starter notes
- Elsewhere section with GitHub, LinkedIn, Email
- Footer
- Layout works on mobile and desktop

### 4. ~~Apply design system~~ ✅

Done:
- All color tokens from DESIGN_BRIEF.md implemented in global.css
- Typography: Fraunces for headings, Source Sans 3 for body
- Spacing scale implemented
- Buttons: primary and secondary styles
- Project blocks with status indicators
- Notes editorial list style
- Fade-in animation on sections
- No Tailwind, no glassmorphism, no glossy cards

### 5. ~~Load final MVP copy~~ ✅

Done:
- All homepage copy from README.md is implemented via i18n/ui.ts
- Project blocks use approved text
- Contact links are real (GitHub, LinkedIn, Email)
- No filler copy remains

### 6. ~~Add notes structure~~ ✅

Done:
- Notes authored in MDX via content collections
- 4 starter notes published in English
- Notes index pages exist in all 3 languages (RO/HU show "coming soon" placeholder)
- Notes ship in English without requiring RO/HU translations
- Translation links appear only when translations exist

### 7. Prepare launch assets — ⬜ In progress

Remaining:
- [ ] Final portrait asset (currently using SVG placeholder)
- [ ] Social preview image (OG image)
- [ ] Favicon exists ✅
- [ ] Metadata is wired ✅

### 8. Deploy MVP — ⬜ Not started

Remaining:
- [ ] Site deployed to hosting
- [ ] `gergobalogh.me` DNS resolves
- [ ] HTTPS verified
- [ ] Smoke test on desktop and mobile

## Routes Implemented

| Route | Language | Purpose |
|-------|----------|---------|
| `/` | EN | English homepage |
| `/ro/` | RO | Romanian homepage |
| `/hu/` | HU | Hungarian homepage |
| `/notes/` | EN | English notes index |
| `/notes/[slug]/` | EN | English note detail |
| `/ro/notite/` | RO | Romanian notes index |
| `/ro/notite/[slug]/` | RO | Romanian note detail |
| `/hu/jegyzetek/` | HU | Hungarian notes index |
| `/hu/jegyzetek/[slug]/` | HU | Hungarian note detail |
| `/projects/` | EN | English projects index |
| `/projects/isthisai/` | EN | isthisai project page |
| `/projects/clujparticipa/` | EN | clujparticipa project page |
| `/projects/notes-and-experiments/` | EN | Notes & experiments page |
| `/ro/proiecte/` | RO | Romanian projects index |
| `/ro/proiecte/isthisai/` | RO | isthisai (Romanian) |
| `/ro/proiecte/clujparticipa/` | RO | clujparticipa (Romanian) |
| `/ro/proiecte/notes-and-experiments/` | RO | Notes & experiments (Romanian) |
| `/hu/projektek/` | HU | Hungarian projects index |
| `/hu/projektek/isthisai/` | HU | isthisai (Hungarian) |
| `/hu/projektek/clujparticipa/` | HU | clujparticipa (Hungarian) |
| `/hu/projektek/notes-and-experiments/` | HU | Notes & experiments (Hungarian) |

## Open Questions

- Which portrait file is the final MVP portrait? (Currently using SVG placeholder)
- What is the final public URL for `clujparticipa` once live?

## Risks

- Triple-language launch may slow content completion if note translations are treated as required
- A weak or over-polished portrait can hurt the site more than help it
- If the implementation drifts from the design brief, the result may look like a generic portfolio

## Working Rule

When in doubt, prefer clarity, restraint, and publishability over feature creep.
