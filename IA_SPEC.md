# Information Architecture Spec

This document defines the MVP sitemap and page-by-page content inventory for `gergobalogh.me`.

## Route Strategy

Default language:

- `/` serves English

Localized routes:

- `/` -> English homepage
- `/ro/` -> Romanian homepage
- `/hu/` -> Hungarian homepage

Notes:

- `/notes/` -> English notes index
- `/notes/[slug]/` -> English note
- `/ro/notite/` -> Romanian notes index
- `/ro/notite/[slug]/` -> Romanian note
- `/hu/jegyzetek/` -> Hungarian notes index
- `/hu/jegyzetek/[slug]/` -> Hungarian note

Projects:

- `/projects/isthisai/`
- `/projects/clujparticipa/`
- `/projects/notes-and-experiments/`

Localized project routes:

- `/ro/proiecte/isthisai/`
- `/ro/proiecte/clujparticipa/`
- `/ro/proiecte/notes-and-experiments/`
- `/hu/projektek/isthisai/`
- `/hu/projektek/clujparticipa/`
- `/hu/projektek/notes-and-experiments/`

MVP rule:

- `isthisai` and `clujparticipa` should be visible from the homepage even if their standalone project pages are initially light.
- `clujparticipa` should link to the live app when ready.
- `isthisai` should link to `https://isthisaislop.help`.

## MVP Sitemap

### Required pages

- English homepage at `/`
- Romanian homepage at `/ro/`
- Hungarian homepage at `/hu/`
- English notes index
- Romanian notes index
- Hungarian notes index
- `isthisai` project page
- `clujparticipa` project page
- `notes and experiments` project page

### Optional MVP pages

- note detail pages if at least one note is ready

### Not in MVP

- blog categories
- tags
- search
- RSS
- contact form
- dedicated about page
- timeline / résumé page

## Global Navigation

Navbar:

- site name
- `Projects`
- `Notes`
- `Elsewhere` or direct external links
- language switcher: `RO / EN / HU`

Footer:

- name
- GitHub
- LinkedIn
- Email

## Page Inventory

## 1. Homepage

Purpose:

- establish who Gergo Balogh is
- show what he is building now
- route visitors to the right project or note

Audience:

- curious strangers
- potential collaborators
- civic-tech and internet-product peers
- journalists, organizers, or technically minded locals

Sections:

1. Hero
2. About
3. Selected projects
4. Notes
5. Elsewhere
6. Footer

Source copy:

- from `README.md` starter copy

Primary CTA:

- `See projects`

Secondary CTA:

- `Read notes`

Translation expectation:

- full translation in `ro`, `en`, `hu`

## 2. Notes Index

Purpose:

- collect short writing about publishing, civic software, and building useful internet tools

Sections:

1. page title
2. short intro
3. note list

Content rules:

- notes may exist only in English at first
- Romanian and Hungarian notes appear only when actually translated
- translation links should only render when present

Primary CTA:

- note title links

Translation expectation:

- page chrome and section labels in all three languages
- note inventory varies by language

## 3. Note Detail Page

Purpose:

- publish one durable idea cleanly

Sections:

1. title
2. optional metadata
3. note body
4. translation links if they exist
5. return link to notes index

Style rules:

- strong typography
- narrow reading width
- no sidebar

Translation expectation:

- per note, only where content exists

## 4. Project Page: isthisai

Purpose:

- explain the product clearly and route people to try it

Sections:

1. title and status
2. one-sentence summary
3. why it exists
4. what users do
5. link to live product

Core message:

- `A simple game about media literacy. Players look at images and videos and guess whether they were made by AI or not.`

Primary CTA:

- `Play isthisai`

Translation expectation:

- full translation in `ro`, `en`, `hu`

## 5. Project Page: clujparticipa

Purpose:

- explain the prototype and establish the civic direction of the work

Sections:

1. title and status
2. one-sentence summary
3. what the prototype does
4. why it exists
5. important qualifier
6. link to live app when ready

Core message:

- `A participatory budgeting prototype for Cluj-Napoca where residents can submit ideas, browse proposals, show support, comment, and place ideas on a map.`

Required qualifier:

- `This is a coalition-building and participation tool, not a production voting system.`

Translation expectation:

- full translation in `ro`, `en`, `hu`

## 6. Project Page: notes and experiments

Purpose:

- provide a third homepage slot that groups writing and small public experiments under one durable umbrella

Sections:

1. title and status
2. one-sentence summary
3. what belongs here
4. why it exists
5. link to notes index or related public work

Core framing:

`Short writing and small experiments about publishing, civic software, internet products, and building in public.`

Translation expectation:

- full translation in `ro`, `en`, `hu`

## Homepage Density Rules

- above the fold should show hero copy, one CTA, and at least part of the portrait on desktop
- homepage should not become a long scrolling manifesto
- each section should stay concise
- the site should feel publishable with minimal content, not incomplete

## Content Sources

- `README.md` holds the current approved starter copy and product framing
- `DESIGN_BRIEF.md` defines visual and voice rules
- `PROJECT_BOARD.md` tracks the active implementation sequence and open questions

## IA DoD

- all MVP routes are decided
- homepage scope is frozen
- notes and project page expectations are explicit
- multilingual behavior is unambiguous
- the implementation agent can scaffold pages without inventing structure
