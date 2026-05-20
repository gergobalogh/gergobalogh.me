# DESIGN Decisions — sharper-copy

## Key Decisions
- [DDD-1] About structure: Single `aboutBody` key with paragraph break (Option A). Rationale: zero component changes for copy-only feature. (see: ADR-001)
- [DDD-2] All copy changes in `src/i18n/ui.ts` only. No new files, no content collections for UI copy. Rationale: existing pattern is sufficient; creating new i18n infrastructure would violate the copy-only constraint.
- [DDD-3] About.astro: change outer `<p>` to `<div>` and use `set:html` to render paragraph breaks. Rationale: `<p>` inside `<p>` is invalid HTML; using `<div>` avoids this while enabling Pattern D. ~2-line change.
- [DDD-4] ~~Missing HU translation keys~~ — RESOLVED: all 8 keys already exist in HU block (verified during DISTILL review). No action needed.

## Architecture Summary
- Pattern: Modular monolith (Astro static site with SSR on Cloudflare Pages)
- Paradigm: Multi-paradigm TypeScript (Astro declarative + typed i18n)
- Key components: `src/i18n/ui.ts` (single copy source), `About.astro` (1-line render update), all other components unchanged

## Reuse Analysis
| Existing Component | File | Overlap | Decision | Justification |
|---|---|---|---|---|
| translations object | src/i18n/ui.ts | All copy strings | EXTEND | Adding/revising keys is ~0 LOC new vs. new i18n system |
| useTranslations() | src/i18n/ui.ts | Translation lookup | EXTEND | Already used by all components |
| BaseLayout | src/layouts/BaseLayout.astro | Page title, description, OG | EXTEND | siteDescription update flows through t() |
| Hero | src/components/Hero.astro | Hero rendering | EXTEND | Copy changes auto-render, no component change |
| About | src/components/About.astro | About rendering | EXTEND | 1-line change: set:html for paragraph breaks |
| Projects | src/components/Projects.astro | Project cards | EXTEND | Copy changes only |
| Notes | src/components/Notes.astro | Notes section | EXTEND | Copy changes only |
| Project detail pages | src/pages/{lang}/projects/*.astro | Project detail rendering | EXTEND | Status/CTA changes flow through t() |

## Technology Stack
- Astro 5.x (SSR on Cloudflare Pages): unchanged
- TypeScript: unchanged
- i18n: custom inline translations (ui.ts): unchanged

## Constraints Established
- Copy-only: all changes in `src/i18n/ui.ts` + 1-line `About.astro` update
- No new components, no new files, no new dependencies
- All 3 languages must be updated simultaneously
- Missing HU keys must be filled (discovered gap)

## Upstream Changes
- No DISCUSS assumptions changed. The DISCUSS constraint "no layout or component changes" is preserved — the About.astro `set:html` change is a rendering mode switch (text → html), not a layout or structural change. It enables the Pattern D two-paragraph structure without adding new elements.
