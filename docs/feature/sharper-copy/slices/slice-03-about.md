# Slice 03: About restructure (all languages)

## Goal
"Build for use, not demonstration" lands before the visitor scrolls past the About section.

## IN scope
- Restructure `aboutBody` in EN using the Two-Part pattern (short standalone + optional longer)
- The thesis line ("build for use, not demonstration") must appear in the first sentence, not buried at the end
- Translate restructured About to RO and HU

## OUT scope
- Changes to hero, projects, notes, elsewhere
- Adding a "More" UI toggle (if any — the expansion may be just a longer paragraph, no JS)
- Any component structural changes

## Learning hypothesis
Thesis-first About retains collaborators who currently bounce at LinkedIn-style copy. This is disproved if the restructured About receives negative feedback or the "longer version" feels self-important.

## Acceptance criteria
- The first sentence of aboutBody contains "build for use, not demonstration" or an equivalent thesis statement
- The About does NOT read like a LinkedIn summary (no "passionate about", no "leveraging", no credential cascade)
- The longer section (if present) uses Pattern D from the research: values through practice, not pronouncement
- Location is stated as fact ("in Cluj-Napoca, Romania"), not explained
- Project references (if any) use "I built X to do Y" structure
- RO and HU translations preserve the structure and avoid the 5 anti-patterns from the research

## Dependencies
- S1 (hero rewrite sets the tone; About should complement, not contradict)

## Effort estimate
~3 hours (EN restructuring + RO/HU translation + review)
