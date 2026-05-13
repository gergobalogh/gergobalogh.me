# Design Brief

This document is the implementation-facing design spec for `gergobalogh.me`.

## Direction

Style: `editorial civic minimalism`

Keywords:

- calm
- grounded
- intelligent
- public-facing
- restrained
- human

Avoid:

- startup gradients
- glassmorphism
- glossy cards
- purple accents
- oversized rounded UI
- dashboard aesthetics
- generic AI-portfolio patterns

## Visual Personality

The site should feel like a serious, well-kept public home for thoughtful work.

Target impression:

- professional without looking corporate
- personal without oversharing
- modern without looking trend-chasing
- simple without looking empty

## Color Tokens

```css
:root {
  --bg: #f5f1e8;
  --surface: #ece6da;
  --surface-2: #e4dccd;
  --text: #1f2522;
  --muted: #5f6a64;
  --line: #cfc6b8;
  --accent: #1f5c4a;
  --accent-hover: #174638;
  --accent-2: #8a5a2b;
  --link: #1f5c4a;
  --link-hover: #143c31;
  --max-width: 1120px;
  --measure: 68ch;
  --radius: 10px;
}
```

## Typography

Fonts:

- Headings: `Fraunces`
- Body/UI: `Source Sans 3`

Sizes:

```css
--step--1: 0.875rem;
--step-0: 1rem;
--step-1: 1.25rem;
--step-2: 1.75rem;
--step-3: 2.5rem;
--step-4: 3.5rem;
```

Rules:

- `h1` should be large, tight, serif, and strong without feeling theatrical
- `h2` should use the serif heading font
- body copy should use sans-serif with comfortable line-height
- navigation and UI labels should be smaller and quieter than body text
- long-form text width should stay close to `68ch`

## Spacing

```css
--space-1: 0.5rem;
--space-2: 0.75rem;
--space-3: 1rem;
--space-4: 1.5rem;
--space-5: 2rem;
--space-6: 3rem;
--space-7: 4.5rem;
--space-8: 6rem;
```

Rules:

- use generous vertical rhythm
- separate homepage sections with `--space-7` or `--space-8`
- keep internal component spacing airy rather than dense

## Layout

Global:

- centered container with max width `1120px`
- reading content should frequently sit in a narrower column
- use a 12-column desktop grid and a single-column mobile layout

Homepage order:

1. Top bar
2. Hero
3. About
4. Projects
5. Notes
6. Elsewhere
7. Footer

Desktop behavior:

- hero may be 2-column with text left and portrait right
- most other sections should remain single-column or gently asymmetric
- project blocks should stack vertically instead of shrinking into a card grid

## Components

### Top Bar

Contains:

- site name
- language switcher
- optional small nav with `Projects`, `Notes`, `Elsewhere`

Rules:

- no boxed navbar
- use a thin bottom border if needed
- keep it visually light

### Hero

Contains:

- headline
- subhead
- supporting paragraph
- two CTAs
- portrait

Rules:

- no full-screen hero
- headline should feel editorial, not marketing-heavy
- CTAs should be text-forward and restrained

### Portrait

Rules:

- use one image only
- natural, calm, and professional
- modest size
- square or slightly rounded crop is fine
- should support recognition, not dominate the layout

### About

Rules:

- one short paragraph
- compact and readable
- may include a subtle section label above

### Projects

Use large horizontal blocks rather than tiny cards.

Each block should contain:

- project name
- status
- one-sentence summary
- short rationale
- CTA

Visual treatment:

- subtle border or soft surface background
- generous padding
- no icon dependency
- status should be text-like, not a loud badge

Project order:

1. `isthisai`
2. `clujparticipa`
3. `focus-15min-extension` or `Notes and experiments`

### Notes

Rules:

- use a compact editorial list
- avoid a blog-card grid
- show title and summary clearly
- optional metadata may be added later

### Elsewhere

Keep it functional:

- GitHub
- LinkedIn
- Email

### Footer

Keep it small and quiet.

## Buttons and Links

Buttons:

- one primary style
- one secondary style
- rectangular or mildly rounded only
- no pill-button styling

Primary button:

- dark accent background
- light warm text
- subtle hover darkening

Secondary button:

- transparent background
- border and text only

Links:

- should be clearly identifiable
- may be underlined on hover or always underlined in body copy
- avoid decorative hover gimmicks

## Language Switcher

Recommended format:

`RO / EN / HU`

Rules:

- text-based, not icon-based
- no flags
- current language must be clearly highlighted
- no dropdown unless layout forces it

## Motion

Allowed:

- subtle fade-in on initial load
- gentle hover transitions
- slight upward shift on project block hover if it feels natural

Not allowed:

- parallax
- scroll hijacking
- bouncing elements
- animated gradients
- typing effects

## Voice

Tone:

- direct
- thoughtful
- modestly confident
- specific

Good:

- `I build playful and civic software.`
- `A participatory budgeting prototype for Cluj-Napoca.`

Bad:

- `I’m passionate about building impactful digital experiences.`
- `Leveraging technology to empower communities.`

## Implementation Rules

- use `Astro + TypeScript + MDX + plain CSS`
- keep design tokens in one CSS file
- avoid Tailwind
- avoid unnecessary client-side JavaScript
- build multilingual routes explicitly
- prefer readable HTML and CSS over abstraction-heavy patterns
- make the site mobile-first
- preserve accessibility: focus states, contrast, semantic headings

## Design DoD

- the homepage does not look like a generic portfolio template
- typography carries most of the site personality
- the palette feels warm, serious, and public-facing
- all three languages fit naturally in the layout
- the mobile layout feels intentional
- nothing feels glossy, loud, or AI-generated
