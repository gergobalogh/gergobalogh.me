# Session Handoff

This file captures the key decisions from the planning conversation so work can continue cleanly in a new session.

## Project

Personal site for `gergobalogh.me`.

Purpose:

- public trust hub
- routes attention to current work
- supports long-term publishing without exposing private life unnecessarily

## Strategic Position

The site is not:

- a personal diary
- a résumé dump
- a generic portfolio
- a political attack site

The site is:

- a calm public home for selected work
- a bridge to `isthisai` and `clujparticipa`
- a place for short durable notes on publishing, civic software, and useful internet products

## Core Message

`I build playful and civic software.`

Supporting idea:

`I make tools that help people think more clearly, participate more meaningfully, and act on better information.`

## Stack

- `Astro`
- `TypeScript`
- `MDX`
- `plain CSS`

Reason:

- fast to ship
- easy for a smaller agent to modify
- static-content friendly
- avoids unnecessary abstraction

## Design Direction

Style:

- `editorial civic minimalism`

Desired traits:

- calm
- grounded
- intelligent
- restrained
- public-facing

Avoid:

- startup gloss
- AI-slop portfolio look
- hype-heavy copy
- purple-on-white design defaults

See `DESIGN_BRIEF.md` for full details.

## Languages

Launch languages:

- Romanian
- English
- Hungarian

Routing rule:

- `/` defaults to English
- `RO / EN / HU` switcher in navbar

Notes policy:

- site chrome and homepage content ship in all 3 languages
- notes are published per-language
- English is the default note publishing language
- no forced translation parity

## Featured Projects

Primary:

1. `isthisai`
2. `clujparticipa`

Optional third:

- `Notes and experiments`

## Public Links

- GitHub: `https://github.com/gergobalogh`
- LinkedIn: `https://ro.linkedin.com/in/gergobalogh`
- Email: `baloghgergo@gmail.com`
- `isthisai`: `https://isthisaislop.help`

## Visual Decisions

- one portrait on homepage
- warm off-white background
- serif headings and sans-serif body
- text-first layout
- minimal motion

## Key Docs

- `README.md` -> MVP scope, positioning, starter copy
- `DESIGN_BRIEF.md` -> visual and voice system
- `PROJECT_BOARD.md` -> task tracking and DoDs
- `IA_SPEC.md` -> sitemap and page inventory

## Recommended Goal For Small Agent

Build the first working MVP of `gergobalogh.me` using the approved docs in this folder.

Success means:

- Astro site is scaffolded and runs locally
- homepage exists in `EN`, `RO`, and `HU`
- navbar language switcher works
- design follows `DESIGN_BRIEF.md`
- copy comes from `README.md`
- routes and page structure follow `IA_SPEC.md`
- implementation progress is tracked in `PROJECT_BOARD.md`

## Current Open Questions

- Which portrait file is final for MVP?
- What is the final public URL for `clujparticipa` once live?

## Rule For Next Session

Do not redesign the product direction. Continue from the docs in this folder unless a deliberate product decision changes.
