# Improvements TODO

Design and copy improvements identified in review. Ordered by impact.

---

## Design

### 1. Replace the color palette ✅ Applied

The warm-cream palette (`#f5f1e8`, `#ece6da`, `#e4dccd`) has become a recognizable genre — "artisanal editorial beige" — and reads as a safe choice rather than a considered one. The amber warmth is the main source of the stale quality.

**Direction:** crisp, near-white base. Less warmth, more contrast. Keep near-black text — that part works. One confident accent instead of two.

**Proposed tokens:**

```css
--bg: #f7f7f5;          /* crisp off-white, no amber tint */
--surface: #efefec;     /* subtle lift, still cool */
--surface-2: #e6e5e0;   /* only used where needed */
--text: #1a1e1c;        /* near-black, slightly cooler */
--muted: #5a6460;       /* unchanged — works */
--line: #d4d2cc;        /* slightly cooler than current */
--accent: #1a4535;      /* deeper, slightly cooler forest green — more tension */
--accent-hover: #12301f;
--link: #1a4535;
--link-hover: #12301f;
/* drop --accent-2 entirely — it only appears in one dot */
```

### 2. Reduce border-radius ✅ Applied

`--radius: 10px` makes every card read as an app component. Drop it to 3–4px. One change, everywhere — project blocks, buttons, qualifier boxes.

```css
--radius: 3px;
```

### 3. Reconsider project block hover lift ✅ Applied

`transform: translateY(-2px)` + box-shadow on hover is the most "generic portfolio template" micro-interaction on the site. Consider removing the lift entirely and using a subtle left-border color change or background tone shift instead.

### 4. Replace portrait SVG placeholder

The gray SVG square is the most visible structural gap. A real photo — even a modest, candid one — will do more for the site's personality than any copy or color change.

### 5. Remove Elsewhere section / simplify footer

The Elsewhere section and the Footer contain identical links (GitHub, LinkedIn, Email). The duplication makes the page feel padded. Options:
- Absorb the Elsewhere content into a slightly richer Footer
- Keep Elsewhere but remove the link duplication from Footer

### 6. Give sections more visual weight variation

All sections currently use identical `padding-block: var(--space-7)`. Consider giving the hero significantly more vertical space to signal it as primary, and making the Footer section feel intentionally compact. Visual hierarchy via spacing, not just typography.

---

## Copy — Grammar and correctness fixes

### Hungarian

**`projectsIntro`**
- Current: `"Íme a projektek, amelyeket aktívan a nyilvánosság elé tárulok."`
- Issue: `tárulok` is reflexive/intransitive. The verb should be transitive.
- Fix: `"Íme a projektek, amelyeket aktívan a nyilvánosság elé tárok."`

**`heroCta`**
- Current: `"Projektek"` (just a noun)
- Issue: EN is "See projects" — the verb was dropped in translation
- Fix: `"Projektek megtekintése"` or `"Nézd a projekteket"`

**`heroCtaSecondary`**
- Current: `"jegyzetek"` (just a noun)
- Issue: EN is "Read notes"
- Fix: `"Olvasd a jegyzeteket"` or `"Jegyzetek olvasása"`

**`clujparticipaCta`**
- Current: `"Lásd: clujparticipa"` — colon reads oddly as a CTA
- Fix: `"Nézd a clujparticipát"`

### Romanian

**`aboutBody`**
- Current: `"Îmi pasă de a construi lucruri…"`
- Issue: `"de a construi"` is slightly awkward; gerund construction is more natural
- Fix: `"Îmi pasă să construiesc lucruri…"`

**Nav `notes` label vs URL slug inconsistency**
- The nav label is `"Note"` but the URL is `/ro/notite/` and the notes collection uses "notițe" framing throughout
- Decision needed: standardize on `"Note"` or `"Notițe"` in nav label
- Recommendation: `"Notițe"` in nav, matching the URL and the more natural Romanian word for short notes (vs. `"Note"` which reads as grades or musical notes)

### English

**`aboutBody` — "admire in theory"**
- Current: `"I care about building things that people can actually use, not just admire in theory."`
- Issue: the contrast doesn't land — software isn't admired in theory, it's ignored or over-designed
- Fix: see voice section below

**`heroSubhead` — "participate more meaningfully"**
- Current: `"…participate more meaningfully…"`
- Issue: "meaningfully" is a filler intensifier — meaningfully compared to what?
- Fix: see voice section below

---

## Copy — Cuts and rewrites (EN) ✅ Applied

The core problem: copy explained what the reader could already see. Classic AI slop pattern — over-narrating context that the structure already provides.

### `heroBody` — **deleted**

Three paragraphs in the hero said the same thing with declining specificity. The headline already states the purpose. The body paragraph ("This site is the public home for the projects I'm putting into the world…") was meta-explanation of a website to a person already on it. Removed from `ui.ts` and `Hero.astro`.

### `projectsIntro` — **deleted**

"Here are the projects I'm actively putting into public view." The section is called Projects. The reader is looking at projects. Zero information added. Removed from `ui.ts` and `Projects.astro`.

### `heroSubhead` — rewritten

- Was: `"I make tools that help people think more clearly, participate more meaningfully, and act on better information."`
- Now: `"I make tools that help people see more clearly, participate directly, and act on what they know."`

### `aboutBody` — shortened, name removed

The name was redundant — the whole page is headed "Gergo Balogh." The "admire in theory" contrast was unclear.
- Was: `"I'm Gergo Balogh, a software engineer based in Cluj-Napoca. I'm interested in civic tech, public-interest software, and small internet products that are clear, useful, and alive. I care about building things that people can actually use, not just admire in theory."`
- Now: `"I'm a software engineer in Cluj-Napoca. I work in civic tech, public-interest software, and small internet products. I build for use, not for demonstration."`

### `isthisaiDescription` — rewritten (Talkie rhythm)

- Was: `"A simple game about media literacy. Players look at images and videos and guess whether they were made by AI or not."`
- Now: `"A game about telling the difference. You look at images and video and judge whether they were made by a person or a machine."`

### `clujparticipaDescription` — tightened

- Was: `"A participatory budgeting prototype for Cluj-Napoca where residents can submit ideas, browse proposals, show support, comment, and place ideas on a map."` — feature list, "ideas" repeated
- Now: `"A participatory budgeting prototype for Cluj-Napoca. Residents submit proposals, build support, and place ideas on a map — a tool for surfacing what the city might want before formal decisions are made."`

### `notesIntro` (homepage) and `notesPageIntro` (notes index) — differentiated

These were nearly identical. Now distinct.
- `notesIntro`: `"Working notes on civic software, publishing, and building useful things."`
- `notesPageIntro`: `"Notes on what I'm thinking through — civic software, publishing, and small improvements to how the internet works."`

---

## Copy — RO and HU voice (apply after EN is final)

Once English voice improvements are finalized, re-translate the updated strings into RO and HU rather than patching the existing translations piecemeal. The Romanian and Hungarian translations are structurally sound — they just need to reflect the cleaner EN source.

Priority strings to re-translate: `heroSubhead`, `heroBody`, `aboutBody`, `isthisaiDescription`, `clujparticipaDescription`, `notesIntro`, `notesPageIntro`.
