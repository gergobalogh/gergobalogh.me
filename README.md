# gergobalogh.me

Starter plan for a small personal site that routes attention to public work without oversharing private life. This site is the trust hub for:

- `isthisai`
- `clujparticipa`
- future notes or experiments worth publishing under your own name

## MVP Goal

Publish a clean, fast site on `gergobalogh.me` that answers three questions in under 30 seconds:

1. Who is Gergo Balogh?
2. What is he building now?
3. Where should a visitor click next?

## Product Positioning

This is not a blog-first site and not a résumé dump. It is a public home page for selected work.

Core message:

> I build playful and civic software that helps people think more clearly, participate more meaningfully, and act on better information.

## MVP Scope

The first version should have one page plus a lightweight notes section.

### 1. Homepage

Sections:

- Hero: one-sentence positioning, one short supporting paragraph
- Selected projects: `isthisai`, `clujparticipa`, and one placeholder for future work
- Short about: safe public bio only
- Notes: 3-5 short posts or stubs
- Contact/links: GitHub, LinkedIn, email

### 2. Notes

Start with short, durable writing. Good first topics:

- why publishing multiplies meaningful work
- minimum effective dose for side projects
- what makes a civic tool useful before it is complete
- why coalition-building tools matter

### 3. Project Pages

Each featured project should eventually have its own page with:

- what it is
- who it is for
- why it exists
- current status
- link to live product or demo

For MVP, homepage cards can link out directly if those pages are not ready.

## Non-Goals

Do not add:

- personal journal content
- comments
- auth
- analytics complexity
- a CMS
- public political attack content on the homepage

## Delivery Plan

### Phase 1: Message and structure

Tasks:

- define final homepage copy
- choose the 3 featured cards
- write a safe short bio
- pick 3 initial notes

DoD:

- one approved homepage outline exists
- final hero headline and subhead are written
- bio is under 120 words
- 3 note titles and one-sentence summaries are chosen

### Phase 2: Ship the site shell

Tasks:

- set up a simple static site
- build homepage sections
- add metadata, favicon, and social preview image
- make mobile and desktop layouts feel intentional

DoD:

- site runs locally
- homepage is complete and readable on phone and desktop
- page loads fast and has working title/description/OG tags
- all primary links work

### Phase 3: Fill content

Tasks:

- publish final copy for homepage
- add project cards for `isthisai` and `clujparticipa`
- publish 3 short notes

DoD:

- homepage copy is final
- both project cards have real descriptions and destinations
- 3 notes are published
- no placeholder text remains

### Phase 4: Domain and launch

Tasks:

- deploy to hosting
- point `gergobalogh.me` DNS
- verify HTTPS and social previews
- test from a clean browser and on mobile

DoD:

- `gergobalogh.me` resolves correctly
- HTTPS works without warnings
- shared link preview renders correctly
- launch-ready checklist is fully green

## Launch Checklist

- homepage explains who you are in plain language
- no sensitive personal details are exposed
- `isthisai` is linked clearly
- `clujparticipa` is framed as a prototype, not a production voting system
- contact links are correct
- spelling and tone were reviewed once in full

## Success Criteria

The MVP is successful if a first-time visitor can quickly understand your public identity, see that you build real things, and click through to at least one project without confusion.

## Starter Copy

Use this as the default content source for MVP implementation. Do not replace it with generic portfolio filler unless explicitly revised.

### Site title

`Gergo Balogh`

### Site description

`Software engineer building playful and civic tools on the internet.`

### Hero

Headline:

`I build playful and civic software.`

Subhead:

`I make tools that help people think more clearly, participate more meaningfully, and act on better information.`

Supporting paragraph:

`This site is the public home for the projects I’m putting into the world. Some are playful, some are civic, and all of them are attempts to build things that feel useful, honest, and worth sharing.`

Primary CTA:

`See projects`

Secondary CTA:

`Read notes`

### About

Section title:

`About`

Body:

`I’m Gergo Balogh, a software engineer based in Cluj-Napoca. I’m interested in civic tech, public-interest software, and small internet products that are clear, useful, and alive. I care about building things that people can actually use, not just admire in theory.`

Short variant for cards / metadata:

`Software engineer in Cluj-Napoca building civic and playful software.`

### Projects

Section intro:

`Here are the projects I’m actively putting into public view.`

#### Project 1

Name:

`isthisai`

Status:

`Live`

Description:

`A simple game about media literacy. Players look at images and videos and guess whether they were made by AI or not.`

Reason it exists:

`AI-generated media is getting harder to spot. This project turns that problem into something interactive, social, and easier to talk about.`

CTA:

`Play isthisai`

#### Project 2

Name:

`clujparticipa`

Status:

`In progress`

Description:

`A participatory budgeting prototype for Cluj-Napoca where residents can submit ideas, browse proposals, show support, comment, and place ideas on a map.`

Reason it exists:

`Cities need better ways for residents to surface local ideas and build support around them before formal politics takes over.`

Important qualifier:

`This is a coalition-building and participation tool, not a production voting system.`

CTA:

`See clujparticipa`

#### Project 3

Name:

`Notes and experiments`

Status:

`Ongoing`

Description:

`Short writing and small experiments about publishing, civic software, internet products, and building in public.`

CTA:

`Read notes`

### Notes

Section intro:

`Short notes about building, publishing, and making useful things on the internet.`

Initial note 1:

Title:

`Publishing multiplies meaningful work`

Summary:

`Doing meaningful work matters, but sharing it publicly is what gives it reach, feedback, and luck surface area.`

Initial note 2:

Title:

`The minimum effective dose for side projects`

Summary:

`Not every project needs heroic effort. A small amount of consistent public work beats long private overthinking.`

Initial note 3:

Title:

`What makes a civic tool useful before it is complete`

Summary:

`A civic product does not need to solve politics. It needs to help one group understand something, coordinate around it, and act.`

Initial note 4:

Title:

`Coalition-building beats outrage`

Summary:

`The most useful civic tools are not just complaint funnels. They help people find shared interests and gather around practical proposals.`

### Contact

Section title:

`Elsewhere`

Intro:

`If you want to follow the work or get in touch, these are the best places to find me.`

Links to include:

- `GitHub` -> `https://github.com/gergobalogh`
- `LinkedIn` -> `https://ro.linkedin.com/in/gergobalogh`
- `Email` -> `mailto:baloghgergo@gmail.com`

Public email:

`baloghgergo@gmail.com`

### Portrait

Use one portrait/headshot on the homepage. Keep it simple, calm, and professional rather than overly polished or corporate. The image should support recognition and trust, not dominate the page.

### Languages

The personal site should be designed for three languages:

- Romanian (`ro`)
- English (`en`)
- Hungarian (`hu`)

MVP recommendation:

- ship all three languages at launch
- structure navigation and content so language switching is obvious and consistent
- keep the copy equivalent across `ro`, `en`, and `hu`, not substantially different in meaning
- default the root route to English
- allow users to switch language from the navbar or footer instead of using a dedicated language gate page

Language positioning:

`English is the base public-facing language. Romanian and Hungarian make the site locally grounded and more aligned with the civic work.`

### Tone rules

The implementation should preserve this tone:

- calm, direct, and thoughtful
- confident without sounding self-important
- specific, not startup-hypey
- human, but not confessional
- public-facing, but not overexposed

### Copy guardrails

Do not introduce:

- generic claims like `passionate developer`
- inflated mission language
- personal backstory not provided here
- references to family, therapy, employer details, or private life
- strong political attacks on the homepage

## Public Project Selection

Current GitHub profile:

`https://github.com/gergobalogh`

Public repositories currently visible include:

- `focus-15min-extension`
- `bLoG`
- `jianu-auto-service`
- `gergobalogh.github.io`
- `mayor-pkv`

Recommendation for what to expose on `gergobalogh.me`:

### Strong candidates

- `isthisai`
  Reason: it is distinct, understandable in one sentence, and easy for visitors to try.
- `clujparticipa`
  Reason: it expresses a serious civic direction and gives the site a clear public-interest identity.
- `focus-15min-extension`
  Reason: it is already public, easy to explain, and useful as a third proof-of-work link if needed.

### Keep secondary

- `bLoG`
  Reason: the name is generic and the repo description is empty, so it does not currently help positioning.
- `jianu-auto-service`
  Reason: unless there is a good public story behind it, it reads more like client/service work than a clear personal flagship.
- `mayor-pkv`
  Reason: relevant to your thinking, but not ideal as a front-page personal link unless you explicitly want your homepage tied to more political material from day one.
- `gergobalogh.github.io`
  Reason: useful as legacy history, not as a current flagship.

Default MVP project order:

1. `isthisai`
2. `clujparticipa`
3. `Notes and experiments`

If `isthisai` and `clujparticipa` remain private on GitHub, the website should still link to their live products or project pages. Public repo visibility is optional; public product visibility is what matters.

`clujparticipa` should point to the live app once it is ready. Until then, it can exist as a project card on the personal site without a public destination, or with a clearly marked temporary placeholder page if needed during launch.

Public product URL for `isthisai`:

`https://isthisaislop.help`

## Open Questions

These should be answered before launch, but the MVP can still be built with temporary placeholders:

- Which portrait/headshot should be used, and what file/crop should be considered final for MVP?
- What is the final public URL for `clujparticipa` once live?
- Should the language switcher appear in the navbar, footer, or both?
