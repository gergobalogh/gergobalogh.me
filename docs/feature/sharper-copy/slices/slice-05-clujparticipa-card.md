# Slice 05: clujparticipa project card + CTA reframe (all languages)

## Goal
The clujparticipa CTA invites participation, not display. The card frames the project's purpose, not just what it is.

## IN scope
- Rewrite `clujparticipaCta` in EN, RO, HU (replace "See clujparticipa" with something action-oriented)
- Evaluate and potentially rewrite `clujparticipaDescription` if the current one is already framed well

## OUT scope
- clujparticipaStatus (addressed in S6)
- Layout changes
- Changes to the qualifier line (already good)

## Learning hypothesis
An action-oriented CTA ("Try clujparticipa" or "Join clujparticipa") increases click-through vs. the display-oriented "See clujparticipa". Disproved if analytics show no change or decrease.

## Acceptance criteria
- CTA uses an action verb, not a display verb ("Try", "Join", "Explore" — not "See", "View", "Visit")
- CTA preserves the project name for scannability
- RO and HU translations preserve the action orientation
- Description (if changed) frames the purpose, not just the definition

## Dependencies
- S1 (hero sets the tone)

## Effort estimate
~1 hour (3 languages)

## Progress (2026-05-19)

COMPLETED. All 6 keys applied to `src/i18n/ui.ts`:

| Key | EN | RO | HU |
|-----|----|----|-----|
| `clujparticipaCta` | Join clujparticipa | Participă la clujparticipa | Csatlakozz a clujparticipához |
| `clujparticipaDescription` | What does the city want before formal politics decides? Residents propose, build support, and map ideas — a participatory budgeting prototype for Cluj-Napoca. | Bugetarea participativă a murit la Cluj — orașul are nevoie de versiunea 2. Cetățenii propun, votul contează, banii se văd — un prototip care reface ce primăria a abandonat. | A város dönt, mielőtt kérdezne. Mi lenne, ha megfordítanánk? Javaslatok, támogatás, ötletek a térképen. Részvételi költségvetést Kolozsvárnak. |

Key decisions:
- EN: challenge-led question framing
- RO: locally grounded (participatory budgeting died in Cluj — user-authored)
- HU: rhetorical flip question ("Mi lenne, ha megfordítanánk?") — not translated from EN

Lesson: each language uses its own rhetorical structure, not literal translation.
