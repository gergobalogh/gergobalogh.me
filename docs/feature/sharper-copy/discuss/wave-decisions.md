# DISCUSS Decisions — sharper-copy

## Key Decisions
- [D1] Feature type: User-facing copy revision. Rationale: all changes are visible to end users on a personal website.
- [D2] Walking skeleton: Hero first (EN). Rationale: if the hero fails the 3-second test, nothing else matters. Ship and validate before expanding.
- [D3] UX research depth: Lightweight. Rationale: the copy audit + research docs already contain extensive audience analysis; no new research needed.
- [D4] JTBD: Formalize from copy audit. Rationale: the audit already has strong JTBD-style job stories; formalizing them into jobs.yaml enforces traceability.
- [D5] Copy approach: sharper framing, not more volume. Rationale: the copy audit's cross-cutting finding — "the copy describes things accurately but doesn't make the reader lean in" — means the fix is framing, not enthusiasm.
- [D6] About structure: Two-Part (Pattern D). Rationale: research confirms this is the best fit — preserves restraint, offers optional depth, used by similar practitioners.
- [D7] Anti-patterns banned: Mission Statement, Credential Cascade, Humblebrag, Over-Explainer, Values Paragraph. Rationale: research on 12+ civic tech practitioners confirms these are universally absent from effective personal bios.
- [D8] i18n: adapt, don't translate. Rationale: RO/HU translations must preserve the sharp framing in each language, not just translate EN literally.

## Requirements Summary
- Primary jobs: builders evaluate substance (JOB-1, opp score 45), collaborators assess civic fit (JOB-2, opp score 40)
- Walking skeleton scope: Hero headline + subhead in EN
- Feature type: User-facing

## Constraints Established
- Copy-only changes — no layout, component, or structural changes
- All changes must be applied in all 3 languages (EN, RO, HU)
- No anti-patterns (per D7)
- "Build for use, not demonstration" must be preserved — it's the strongest line on the site
- Status labels must not read like Jira tickets

## Upstream Changes
- No DISCOVER assumptions changed. The copy audit served as the primary discover input and all its findings are consistent with DISCUSS decisions.
