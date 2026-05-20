# Slice 06: Notes card reframe + status label rewrite (all languages)

## Goal
The notes-and-experiments card is framed correctly (not as a "project"). Status labels signal life, not ticket tracking.

## IN scope
- Rewrite `notesAndExperimentsDescription` in EN, RO, HU
- Rewrite `notesAndExperimentsCta` in EN, RO, HU (if needed)
- Rewrite `isthisaiStatus`, `clujparticipaStatus`, `notesAndExperimentsStatus` in EN, RO, HU

## OUT scope
- isthisai and clujparticipa description/CTA changes (done in S4, S5)
- Layout changes
- Adding the civic chatbot project card (unresolved item — separate decision)

## Learning hypothesis
Non-Jira status labels ("Live" → "Live", "In progress" → something that signals momentum, "Ongoing" → something that signals life) make in-progress projects feel active. Disproved if visitors still interpret status labels as ticket fields.

## Acceptance criteria
- Status labels do NOT read like Jira fields ("In progress", "Ongoing")
- Status labels convey: "this thing is alive and being worked on" or "this thing is in the world"
- The notes-and-experiments card frames notes as a lens on your projects, not as a project itself
- RO and HU translations match the new tone

## Dependencies
- S4, S5 (those slices change other fields on the same cards)

## Effort estimate
~2 hours (3 languages, multiple fields)

## Progress (2026-05-19)

IN PROGRESS — status labels discussion started, not yet resolved.

### Status labels to resolve:
- `clujparticipaStatus` — RED ("In progress" is Jira). Options presented, not picked yet.
- `notesAndExperimentsStatus` — borderline ("Ongoing"). Options presented, not picked yet.
- `isthisaiStatus` — GREEN ("Live"). Question: keep or revise for consistency?

### Notes card keys still to do:
- `notesAndExperimentsDescription` — needs reframe (currently a category list)
- `notesAndExperimentsCta` — evaluate if change needed
