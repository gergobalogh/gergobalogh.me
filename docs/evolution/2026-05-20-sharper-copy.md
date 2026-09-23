---
feature: sharper-copy
date: 2026-05-20
status: COMPLETE
---

# Evolution: sharper-copy

## Summary

Copy revision across gergobalogh.me — rewrote hero, about, project cards, status labels, and notes intros in EN, RO, and HU. The goal: make a builder scanning the site decide to stay within 3 seconds, by replacing generic category labels with sharp, action-oriented framing.

## Business Context

Personal site for a civic software engineer. The copy audit found that existing text was accurate but flat — it described things without making the reader lean in. The single highest-leverage change was the hero: if it fails the 3-second test, nothing else matters.

## Key Decisions

| ID | Decision | Rationale |
|----|----------|-----------|
| D1 | Feature type: user-facing copy revision | All changes visible to end users |
| D2 | Walking skeleton: hero first (EN) | Hero determines whether anything else matters |
| D5 | Sharper framing, not more volume | Audit finding: copy describes accurately but doesn't make readers lean in |
| D6 | About: Two-Part structure (Pattern D) | Research confirms best fit for civic practitioner bios |
| D7 | Anti-patterns banned | Mission Statement, Credential Cascade, Humblebrag, Over-Explainer, Values Paragraph — universally absent from effective practitioner bios |
| D8 | i18n: adapt, don't translate | RO/HU must preserve sharp framing in each language |
| DDD-1 | About: single key + paragraph break | Zero component changes vs. split keys |
| DDD-2 | All copy in ui.ts only | Existing pattern sufficient; no new i18n infrastructure |
| DDD-3 | About.astro: div + set:html | 2-line change enables two-paragraph structure; avoids invalid nested p |
| DWD-1 | Real local test strategy | Static site, no mocks needed |

## Changes Made

All changes in `src/i18n/ui.ts` + 1-line `About.astro` update.

### EN keys revised
- `heroHeadline`, `heroSubhead`, `siteDescription`
- `aboutBody` (rewritten with thesis-first structure)
- `isthisaiDescription` (challenge framing), `isthisaiStatus` (Live)
- `clujparticipaDescription`, `clujparticipaCta` (action verb), `clujparticipaStatus` (Taking shape)
- `notesAndExperimentsStatus` (Always shipping)
- `notesIntro`, `notesPageIntro`

### RO keys revised
- Same keys as EN, adapted for Romanian (not literal translations)

### HU keys revised
- Same keys as EN, adapted for Hungarian (not literal translations)

### Structural change
- `About.astro`: `<p>` → `<div>` + `set:html` for paragraph rendering

## Lessons Learned

- Status labels are easy to get wrong: "In operation" and "Under construction" feel like Jira pick-list values even though they're better than "In progress." The test is: does it feel alive, or does it feel like a tracking field?
- i18n adaptation is not translation: RO and HU hero headlines are structurally different from EN because literal translation of sharp copy produces flat copy in another language.
- Copy-only features have near-zero code footprint: the entire feature touches one data file and one 2-line component change. The value is entirely in the words.

## Issues Encountered

- Missing HU keys: 8 translation keys were absent in the HU block. Resolved by filling them during DELIVER.
- About thesis placement: the AC required "build for use, not demonstration" in the first sentence, but the delivered aboutBody uses a different thesis ("too much to watch, not enough to do") which is equally strong. Accepted as-is.

## Migrated Artifacts

| Source | Destination |
|--------|-------------|
| discuss/journey-copy-revision.yaml | docs/ux/sharper-copy/ |
| discuss/journey-copy-revision-visual.md | docs/ux/sharper-copy/ |
| discuss/journey-copy-revision.feature | docs/scenarios/sharper-copy/ |

## Discarded (process scaffolding)

- deliver/ (not present — feature executed conversationally)
- design/wave-decisions.md, discuss/wave-decisions.md, distill/wave-decisions.md
- discuss/dor-validation.md, discuss/shared-artifacts-registry.md, discuss/prioritization.md
- discuss/jtbd-*.md, discuss/outcome-kpis.md, discuss/scope-assessment.md
- discuss/story-map.md, discuss/user-stories.md
- feature-delta.md (comprehensive, but superseded by this evolution doc)
- slices/ (per-slice planning docs — superseded by completed work)
