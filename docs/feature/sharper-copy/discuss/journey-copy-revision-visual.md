# Journey: Builder evaluates substance — sharper-copy

**Primary job:** JOB-1 (Builders evaluate substance)
**Secondary jobs:** JOB-2 (Collaborators assess civic fit), JOB-3 (Visitors get a quick read)

---

## Mental Model

Builders arrive with skepticism: "Another portfolio. Probably generic." They scan the hero for a signal that this person is worth 30 more seconds. If the hero is a category label ("I build X and Y"), they leave. If the hero frames the work in a way that creates curiosity, they scroll. They trust the notes section most — if the titles and summaries show specific opinions, not categories.

---

## Happy Path

| Step | Action | Expected output | Emotional state |
|------|--------|----------------|-----------------|
| 1 | Land on homepage, read hero | One-sentence read that signals "ships real things + thinks honestly" | Skeptical → Curious |
| 2 | Read About section | A point of view, not a LinkedIn summary. "Build for use, not demonstration" lands early. | Curious → Interested |
| 3 | Scan project cards | Each card frames WHY the project is interesting, not just what it IS | Interested → Impressed |
| 4 | Click through to a note | Title + summary create urgency to read | Impressed → Engaged |
| 5 | Leave or follow | Can describe this person in one sentence: "builds civic tools in Cluj, writes honestly" | Engaged → Satisfied |

---

## Emotional Arc

```
Skepticism ──→ Curiosity ──→ Interest ──→ Engagement ──→ Satisfaction
  (hero)         (about)      (projects)    (notes)        (leave)
```

Current state: the arc stalls at Skepticism → faint Curiosity because the hero underwhelms. The About section recovers slightly (the "not for demonstration" line) but the momentum is lost by the time they reach projects.

Target state: each step builds progressive confidence. The hero creates the first hook. The About deepens it. The projects confirm it. The notes prove it.

---

## Shared Artifacts

| Artifact | Source | Consumed by |
|----------|--------|-------------|
| `${heroHeadline}` | `src/i18n/ui.ts` | Hero component, `<title>`, OG meta |
| `${heroSubhead}` | `src/i18n/ui.ts` | Hero component |
| `${aboutBody}` | `src/i18n/ui.ts` | About component |
| `${isthisaiDescription}` | `src/i18n/ui.ts` | Projects component + project detail page |
| `${isthisaiCta}` | `src/i18n/ui.ts` | Projects component + project detail page |
| `${clujparticipaDescription}` | `src/i18n/ui.ts` | Projects component + project detail page |
| `${clujparticipaCta}` | `src/i18n/ui.ts` | Projects component + project detail page |
| `${notesAndExperimentsDescription}` | `src/i18n/ui.ts` | Projects component + project detail page |
| `${isthisaiStatus}` | `src/i18n/ui.ts` | Projects component + project detail page |
| `${clujparticipaStatus}` | `src/i18n/ui.ts` | Projects component + project detail page |
| `${notesAndExperimentsStatus}` | `src/i18n/ui.ts` | Projects component + project detail page |
| `${notesIntro}` | `src/i18n/ui.ts` | Notes component |
| `${notesPageIntro}` | `src/i18n/ui.ts` | Notes index page |

---

## Error Paths

| Step | Failure mode | Recovery |
|------|-------------|----------|
| Hero | Visitor reads headline, thinks "software engineer" — leaves immediately | No recovery possible. This is the 3-second test failure. Fix: rewrite hero. |
| About | Visitor reads About, thinks "LinkedIn summary" — scrolls faster | Partial recovery: project cards might still land. But momentum is halved. Fix: restructure About (two-part, thesis-first). |
| Projects | Visitor reads "A game about telling the difference" — thinks definition, not challenge | Partial recovery: reason line might save it. But the card is weak. Fix: reframe descriptions. |
| Project CTA | "See clujparticipa" — weak, no action energy | Visitor may not click. Fix: rewrite CTA to invite participation, not display. |
| Status | "In progress" / "Live" — Jira language, not life signals | Visitor may think "abandoned" for in-progress items. Fix: replace status labels. |
