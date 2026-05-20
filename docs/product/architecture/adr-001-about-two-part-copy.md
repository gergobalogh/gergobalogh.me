# ADR-001: About Section Structural Change for Pattern D (Two-Part Bio)

**Status:** Accepted

**Context:**

The DISCUSS wave decided (D6) to restructure the About section using Pattern D (Two-Part: short standalone bio + optional longer section). The research on 12+ civic tech practitioners confirms this is the most effective structure for a personal bio that needs both restraint and optional depth.

The current `aboutBody` is a single translation string: "I'm a software engineer in Cluj-Napoca. I work in civic tech, public-interest software, and small internet products. I build for use, not for demonstration."

Pattern D requires:
1. A short standalone paragraph (the primary bio)
2. A clearly separated longer section (optional depth)

**Decision:**

**Option A: Single key with paragraph break** — Add a `\n\n` line break inside `aboutBody` to separate the short bio from the longer section. No component changes.

**Option B: Two translation keys** — Split into `aboutBodyShort` and `aboutBodyLong`. Component renders both, with the long section visually separated (e.g., reduced opacity, smaller font, or just a paragraph gap).

**Option C: Short key + content collection** — `aboutBodyShort` in `ui.ts`, longer section as a dedicated MDX content file for rich formatting.

**Chosen: Option A** — Single key with paragraph break.

**Rationale:**

- Option A requires zero component changes. The `About.astro` component already renders `{t('aboutBody')}` as a paragraph. Adding a line break within the string produces two visual paragraphs. No code changes, no new keys, no component rework.
- Option B introduces new translation keys and a component change to render two separate elements. This is structural overkill for a copy-only feature.
- Option C adds a content collection for a single bio section. This is the heaviest option and conflicts with the DISCUSS constraint of "no layout or component changes."
- If Pattern D's "optional" aspect needs a visual affordance (e.g., a "More" toggle), that can be added in a future feature. For now, two paragraphs with a gap is the minimum viable Pattern D.

**Consequences:**

- The `aboutBody` translation key will contain two paragraphs separated by `\n\n`.
- The `About.astro` component requires a 2-line update: change the outer `<p class="about-body">` to `<div class="about-body">` and use `set:html={t('aboutBody')}` instead of text content interpolation. This is necessary because `<p>` inside `<p>` is invalid HTML; a `<div>` wrapper correctly contains nested paragraph elements rendered from the translation string.
- RO and HU translations follow the same two-paragraph structure.
