# Feature Delta — sharper-copy

## Wave: DISCUSS / [REF] Persona ID

**Primary persona:** Fellow builder / developer — scans personal sites for substance signals, decides within 3 seconds whether to stay or leave.

**Secondary personas:** Potential collaborator (civic tech org looking for the right kind of engineer), Curious visitor (googled the name, needs a quick read), Project user (arrived looking for a tool).

## Wave: DISCUSS / [REF] JTBD one-liner

When I'm scanning someone's site to decide if they're worth following, I want to see evidence of real shipped work and honest thinking, so I can decide whether to read more or move on.

## Wave: DISCUSS / [REF] Locked decisions

- [D1] Feature type: User-facing copy revision
- [D2] Walking skeleton: Hero first (EN only, then RO+HU)
- [D3] UX research depth: Lightweight (copy audit + research docs already extensive)
- [D4] JTBD: Formalize from copy audit into jobs.yaml
- [D5] Copy approach: sharper framing, not more volume
- [D6] About structure: Two-Part (Pattern D from research)
- [D7] Anti-patterns banned: Mission Statement, Credential Cascade, Humblebrag, Over-Explainer, Values Paragraph
- [D8] i18n: adapt framing per language, don't translate literally

## Wave: DISCUSS / [REF] User stories with elevator pitches

### US-1: Hero passes the 3-second test
**Before:** A builder reads the hero and thinks "software engineer" — leaves immediately.
**After:** reads `heroHeadline` → sees specific framing of civic + playful work, not a category label
**Decision enabled:** decides whether to scroll down or leave based on actual substance signal
(job_id: JOB-1)

### US-2: Hero works in all three languages
**Before:** RO/HU hero is a literal translation of a flat EN headline — no better than EN.
**After:** reads `heroHeadline` in RO or HU → sees locally adapted sharp framing
**Decision enabled:** decides to stay and explore based on native-language substance signal
(job_id: JOB-1, JOB-3)

### US-3: About lands the thesis early
**Before:** Collaborator reads the About, sees "software engineer in Cluj-Napoca" — reads like LinkedIn, bounces.
**After:** reads `aboutBody` → "build for use, not demonstration" lands in the first sentence
**Decision enabled:** decides this person has a design philosophy, not just a job title
(job_id: JOB-2, JOB-1)

### US-4: isthisai card frames the challenge
**Before:** Builder reads "A game about telling the difference" — a definition, no urgency to click.
**After:** reads `isthisaiDescription` → sees a challenge that makes them think "I want to try this"
**Decision enabled:** decides the projects are worth exploring, confirming the hero's promise
(job_id: JOB-1)

### US-5: clujparticipa CTA invites participation
**Before:** Collaborator sees "See clujparticipa" — a display verb, no action energy.
**After:** sees `clujparticipaCta` → action-oriented invitation to participate
**Decision enabled:** decides to engage with the project, not just look at it
(job_id: JOB-2, JOB-4)

### US-6: Status labels signal life, not tickets
**Before:** User sees "Status: In progress" — reads like a Jira ticket, feels stale.
**After:** sees status label → feels the project is active and being worked on, or live in the world
**Decision enabled:** decides whether to invest time in exploring the project
(job_id: JOB-4)

### US-7: Notes intro hooks the reader
**Before:** Builder reads "Working notes on civic software, publishing, and building useful things" — a category, no urgency.
**After:** reads `notesIntro` → feels "these might change how I think about X"
**Decision enabled:** decides to click through to a note, confirming the site's substance signal
(job_id: JOB-1, JOB-2)

## Wave: DISCUSS / [REF] Acceptance criteria

Embedded per story above. Key cross-cutting ACs:
- No generic category labels in hero headline (AC-1.1)
- Thesis line in first sentence of About (AC-3.1)
- Project descriptions frame, not define (AC-4.1)
- CTAs use action verbs, not display verbs (AC-5.1)
- Status labels do not read like Jira fields (AC-6.1)
- Notes intro creates urgency, not category (AC-7.1)
- All changes applied in EN, RO, and HU

## Wave: DISCUSS / [REF] Definition of Done

1. [ ] All 7 user stories implemented with ACs verified
2. [ ] Copy changes applied in all 3 languages (EN, RO, HU)
3. [ ] No anti-patterns present (per D7)
4. [ ] "Build for use, not demonstration" preserved in About
5. [ ] Site builds and renders correctly
6. [ ] No layout or component changes introduced
7. [ ] Umami event tracking still works (hero-cta-primary, project-cta, note-click)
8. [ ] OG meta tags match new hero copy
9. [ ] Qualitative 3-second test: ≥3 of 5 builders describe the site as "civic tools in Cluj" not "software engineer"

## Wave: DISCUSS / [REF] Out-of-scope

- Adding the civic chatbot project card to templates (unresolved item — separate decision)
- Restructuring "Notes and experiments" out of the project cards section
- Any layout, component, or CSS changes
- New content (notes, project pages)
- Adding a "More" toggle for the About section (if the Two-Part pattern needs UI, defer)

## Wave: DISCUSS / [REF] WS strategy

**Strategy B: Thin slice first.** Ship the hero rewrite (S1) as the walking skeleton. Validate with analytics before expanding. The hero is the single highest-leverage change — it determines whether any other copy matters.

## Wave: DISCUSS / [REF] Driving ports

- `src/i18n/ui.ts` — the single inbound surface for all copy changes. Every change touches this file. No CLI, no API, no HTTP surface.

## Wave: DISCUSS / [REF] Pre-requisites

- Copy audit (`docs/copy-audit.md`) — completed, serves as DISCOVER input
- Civic tech About section research (`docs/research/civic-tech-about-sections/`) — completed, provides anti-patterns and structural patterns
- Localized content research (`docs/research/localized-content/`) — completed, provides RO/HU context

## Wave: DISCUSS / [HOW] Gherkin scenarios

Provenance: triggered by AC ambiguity in US-6 (status labels). Expanded per `ask-intelligent` density mode.

```gherkin
Feature: Sharper copy across gergobalogh.me

  Background:
    Given I visit gergobalogh.me

  # US-1: Hero passes the 3-second test

  Scenario: Hero headline is specific, not categorical
    When I read the hero headline
    Then it does NOT contain "software engineer" or "passionate" or "building X and Y"
    And it frames the work specifically enough to describe in one sentence

  Scenario: Hero subhead deepens without repeating
    When I read the hero subhead
    Then it does NOT repeat the headline
    And it adds depth or context to the headline's framing

  # US-2: Hero works in all three languages

  Scenario: RO hero is adapted, not literally translated
    When I switch to the Romanian version
    And I read the hero headline
    Then it passes the 3-second test in Romanian
    And it is NOT a word-for-word translation of the EN version

  Scenario: HU hero is adapted, not literally translated
    When I switch to the Hungarian version
    And I read the hero headline
    Then it passes the 3-second test in Hungarian
    And it is NOT a word-for-word translation of the EN version

  # US-3: About lands the thesis early

  Scenario: Thesis line appears in first sentence
    When I read the About section
    Then "build for use, not demonstration" appears in the first sentence
    And the section does NOT start with "I'm a software engineer"

  Scenario: About avoids anti-patterns
    When I read the About section
    Then it does NOT contain "passionate about" or "leveraging" or "empower"
    And it does NOT explain or justify Cluj-Napoca as a location
    And it does NOT contain a standalone values paragraph

  # US-4: isthisai card frames the challenge

  Scenario: isthisai description creates curiosity
    When I read the isthisai project card description
    Then it uses challenge framing (the reader thinks "I want to try this")
    And it does NOT use definition framing (the reader does NOT think "I understand what this is")
    And it preserves the core information about human vs. machine judgment

  # US-5: clujparticipa CTA invites participation

  Scenario: clujparticipa CTA uses an action verb
    When I read the clujparticipa CTA
    Then it uses an action verb like "Try" or "Join" or "Explore"
    And it does NOT use a display verb like "See" or "View" or "Visit"
    And the project name is still visible in the CTA text

  # US-6: Status labels signal life, not tickets

  Scenario: isthisai status conveys liveness
    When I read the isthisai status label
    Then it signals "this project is live in the world"
    And it does NOT read like a Jira field (NOT "In progress", "To do", "Done")

  Scenario: clujparticipa status conveys momentum
    When I read the clujparticipa status label
    Then it signals "this project is being actively worked on"
    And it does NOT read like a Jira field (NOT "In progress", "In development")

  Scenario: Notes and experiments status conveys ongoing activity
    When I read the notes-and-experiments status label
    Then it signals ongoing activity or continuous output
    And it does NOT read like a Jira field (NOT "Ongoing" as a ticket state)

  # US-7: Notes intro hooks the reader

  Scenario: Notes intro creates urgency
    When I read the notes section intro
    Then it creates curiosity or urgency (not just a category label)
    And it does NOT say "Working notes on X, Y, and Z"
    And it frames the subjects as ideas-in-progress, not categories

  Scenario: Notes page intro matches homepage hook
    When I visit the notes index page
    And I read the page intro
    Then it matches the hook framing of the homepage notes intro
```

## Wave: DESIGN / [REF] DDD list

- [DDD-1] About structure: Single `aboutBody` key with paragraph break — zero component changes for copy-only feature (ADR-001)
- [DDD-2] All copy changes in `src/i18n/ui.ts` only — no new files, no content collections for UI copy
- [DDD-3] About.astro: change outer `<p>` to `<div>` and use `set:html` to render paragraph breaks — avoids invalid HTML (`<p>` inside `<p>`) when aboutBody contains `\n\n`
- [DDD-4] ~~Fill missing HU translation keys~~ — RESOLVED: all 8 keys already exist in HU block (verified during DISTILL review). No action needed.

## Wave: DESIGN / [REF] Component decomposition

| Component | File | Change type | Description |
|-----------|------|-------------|-------------|
| translations.en | src/i18n/ui.ts | MODIFY | Rewrite heroHeadline, heroSubhead, siteDescription, aboutBody, isthisaiDescription, clujparticipaCta, isthisaiStatus, clujparticipaStatus, notesAndExperimentsStatus, notesAndExperimentsDescription, notesIntro, notesPageIntro |
| translations.ro | src/i18n/ui.ts | MODIFY | Same keys as EN, adapted for Romanian |
| translations.hu | src/i18n/ui.ts | MODIFY | Same keys as EN, adapted for Hungarian |
| About.astro | src/components/About.astro | MODIFY (2 lines) | Change `<p class="about-body">` to `<div class="about-body">` and add `set:html={t('aboutBody')}` — avoids invalid nested `<p>` when aboutBody contains paragraph breaks |

All other components (Hero, Projects, Notes, Elsewhere, TopBar, Footer, BaseLayout, project detail pages, note pages): NO CHANGES — copy flows through existing `t()` calls.

## Wave: DESIGN / [REF] Driving ports

| Port | Type | Description |
|------|------|-------------|
| `src/i18n/ui.ts:translations` | Data surface (inbound) | All UI copy strings. Single mutation surface for copy changes. |
| `src/components/About.astro` | Component surface (inbound) | Structural change: `<p>` → `<div>` + `set:html` for paragraph rendering (DDD-3). |

## Wave: DESIGN / [REF] Driven ports + adapters

| Port | Adapter | Description |
|------|---------|-------------|
| SEO | `<head>` in BaseLayout | `og:title`, `og:description` derived from `t()` — auto-updated when translation keys change |
| Analytics | Umami (client-side script) | Event tracking on hero CTAs, project CTAs, note clicks — no change needed |

## Wave: DESIGN / [REF] Technology choices

| Technology | Version | Role | Rationale |
|------------|---------|------|-----------|
| Astro | 5.x | SSG/SSR framework | Existing; no change |
| TypeScript | 5.x | Language | Existing; no change |
| @astrojs/cloudflare | latest | Deployment adapter | Existing; no change |
| @astrojs/mdx | latest | Content collections | Existing; no change |
| Custom i18n (ui.ts) | inline | Translation system | Existing; extended with revised keys |

## Wave: DESIGN / [REF] Decisions table

| DDD-N | Decision | Verdict | One-line rationale |
|-------|----------|---------|-------------------|
| DDD-1 | About structure | Single key + paragraph break | Zero component changes vs. split keys or content collection |
| DDD-2 | Copy surface | ui.ts only | Existing pattern sufficient; no new i18n infrastructure |
| DDD-3 | About rendering | `<div>` + set:html | 2-line change enables Pattern D; avoids invalid nested `<p>` HTML |
| DDD-4 | Missing HU keys | RESOLVED — already filled | All 8 keys exist in HU block; no action needed |

## Wave: DESIGN / [REF] Reuse analysis

| Existing Component | File | Overlap | Decision | Justification |
|---|---|---|---|---|
| translations object | src/i18n/ui.ts | All copy strings | EXTEND | Revising keys is ~0 LOC new |
| useTranslations() | src/i18n/ui.ts | Translation lookup | EXTEND | Used by all components |
| BaseLayout | src/layouts/BaseLayout.astro | Title, desc, OG | EXTEND | siteDescription update via t() |
| Hero | src/components/Hero.astro | Hero rendering | EXTEND | Copy auto-renders |
| About | src/components/About.astro | About rendering | EXTEND | 1-line set:html change |
| Projects | src/components/Projects.astro | Project cards | EXTEND | Copy only |
| Notes | src/components/Notes.astro | Notes section | EXTEND | Copy only |
| Project detail pages | src/pages/{lang}/projects/*.astro | Detail rendering | EXTEND | Status/CTA via t() |

## Wave: DESIGN / [REF] Open questions

1. **About paragraph rendering:** The `set:html` approach in About.astro means the translation string can contain HTML. If future copy includes special characters that need escaping, this becomes a minor XSS risk (mitigated: the content is developer-controlled, not user-generated). If this is unacceptable, Option B (split keys) would be needed in a future feature.
2. **Civic chatbot card:** Fully translated in `ui.ts` but not rendered. Decision deferred to a future feature. The translations can remain in `ui.ts` without harm.
3. **"Notes and experiments" structural question:** Whether this should remain as a project card or be refactored. Deferred to a future feature.

## Wave: DISTILL / [REF] Scenario list with tags

| Scenario | Tags | User story | Status (pre-DELIVER) |
|----------|------|------------|---------------------|
| Site builds successfully with revised copy | @walking_skeleton @real-io @US-1 | US-1 | GREEN (build works today) |
| Hero headline contains no generic category labels | @US-1 @real-io | US-1 | GREEN (already specific enough) |
| Hero subhead deepens without repeating | @US-1 @real-io | US-1 | GREEN |
| Site description meta tag matches hero copy | @US-1 @real-io | US-1 | GREEN |
| RO hero is adapted not literally translated | @US-2 @real-io | US-2 | GREEN (already different strings) |
| HU hero is adapted not literally translated | @US-2 @real-io | US-2 | GREEN |
| RO and HU hero subheads are also updated | @US-2 @real-io | US-2 | GREEN |
| Thesis line in first sentence of About | @US-3 @real-io | US-3 | RED (thesis buried at end) |
| About avoids all five anti-patterns | @US-3 @real-io | US-3 | GREEN |
| About renders with paragraph breaks | @US-3 @real-io | US-3 | RED (aboutBody is single paragraph, no line break) |
| isthisai description uses challenge framing | @US-4 @real-io | US-4 | RED (starts "A game about") |
| clujparticipa CTA uses action verb | @US-5 @real-io | US-5 | RED (uses "See") |
| clujparticipa CTA does not use display verbs | @US-5 @real-io | US-5 | RED (contains "See") |
| clujparticipa CTA preserves project name | @US-5 @real-io | US-5 | GREEN |
| isthisai status does not use Jira language | @US-6 @real-io | US-6 | GREEN ("Live" is OK) |
| clujparticipa status signals momentum | @US-6 @real-io | US-6 | RED ("In progress" is Jira) |
| Notes and experiments status signals ongoing | @US-6 @real-io | US-6 | GREEN |
| Notes intro creates urgency not category | @US-7 @real-io | US-7 | RED ("Working notes on") |
| Notes page intro matches homepage hook | @US-7 @real-io | US-7 | GREEN |
| Every EN key exists in RO | @real-io @error | Cross-cutting | GREEN |
| Every EN key exists in HU | @real-io @error | Cross-cutting | RED (8 missing keys) |
| No anti-patterns in any language About | @real-io @property | Cross-cutting | GREEN |

**RED count:** 7 tests fail against current copy. These map to the 7 copy problems identified in the audit (6 from original audit + 1 About paragraph structure).

## Wave: DISTILL / [REF] WS strategy

**Strategy C: Real local (test realism) + Strategy B: Thin slice first (delivery sequencing).** All tests read real translation data from `src/i18n/ui.ts` and run real Astro builds (Strategy C — no mocks, no InMemory doubles). Delivery order follows Strategy B from DISCUSS: hero first (S1), then expand. Both strategies apply simultaneously on different axes.

## Wave: DISTILL / [REF] Adapter coverage table

| Adapter | @real-io scenario | Covered by |
|---------|-------------------|------------|
| translations (ui.ts) | YES | All content validation tests import and read real translation keys |
| Astro build output | YES | Build verification test runs real `astro build` |
| Umami analytics | NO | Analytics tags are client-side JS; not testable via server-side content validation. Acceptable gap — copy changes don't affect analytics wiring. |

## Wave: DISTILL / [REF] Scaffolds

No scaffolds needed. All production modules (`ui.ts`, `About.astro`) already exist. The acceptance tests import real production code and assert against its content. DELIVER will revise copy values within existing keys — no new modules, no new classes, no new functions.

## Wave: DISTILL / [REF] Test placement

`tests/sharper-copy/acceptance/` — colocated with feature name, under acceptance tier. Rationale: Astro project convention puts tests at project root; `tests/` is the standard Vitest include path.

## Wave: DISTILL / [REF] Driving adapter coverage

| Driving port | WS scenario | Protocol |
|-------------|-------------|----------|
| `src/i18n/ui.ts:translations` | All tests import translations directly | TypeScript import |

No CLI, HTTP, or hook adapters — data-surface-only feature.

## Wave: DISTILL / [REF] Pre-requisites

- DESIGN driving port: `src/i18n/ui.ts:translations` (data surface)
- DESIGN structural change: `About.astro` set:html (DDD-3)
- DEVOPS: default environment matrix (clean | with-pre-commit | with-stale-config) — DEVOPS wave not run
- Vitest installed as devDependency
- Astro build succeeds before and after copy changes
