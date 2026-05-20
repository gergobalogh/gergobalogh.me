# User Stories — sharper-copy

---

## US-1: Hero passes the 3-second test

**As a** fellow builder scanning personal sites
**I want** the hero to signal "this person ships real things and thinks honestly" in one read
**So I can** decide whether to scroll or leave within 3 seconds

**job_id:** JOB-1

### Elevator Pitch
Before: A builder reads the hero and thinks "software engineer" — leaves immediately.
After: reads `heroHeadline` → sees specific framing of civic + playful work, not a category label
Decision enabled: decides whether to scroll down or leave based on actual substance signal

### Acceptance Criteria
- AC-1.1: `heroHeadline` contains NO generic category label ("software", "engineer", "passionate", "building")
- AC-1.2: `heroHeadline` frames the work specifically enough that a builder can describe what you do in one sentence
- AC-1.3: `heroSubhead` deepens the signal without repeating the headline
- AC-1.4: `siteDescription` meta tag matches the new hero copy (SEO consistency)
- AC-1.5: Copy change is EN only (RO/HU in US-2)

---

## US-2: Hero works in all three languages

**As a** Romanian- or Hungarian-speaking builder
**I want** the hero to deliver the same sharp first impression in my language
**So I can** evaluate substance without switching to English

**job_id:** JOB-1, JOB-3

### Elevator Pitch
Before: RO/HU hero is a literal translation of a flat EN headline — no better than EN.
After: reads `heroHeadline` in RO or HU → sees locally adapted sharp framing
Decision enabled: decides to stay and explore based on native-language substance signal

### Acceptance Criteria
- AC-2.1: RO `heroHeadline` passes the 3-second test for a Romanian-speaking builder
- AC-2.2: HU `heroHeadline` passes the 3-second test for a Hungarian-speaking builder
- AC-2.3: Neither translation is a word-for-word of EN — each adapts the framing to the target language
- AC-2.4: Both preserve the "specificity over category" principle from the rewrite principles
- AC-2.5: RO and HU `heroSubhead` and `siteDescription` are also updated

---

## US-3: About lands the thesis early

**As a** potential collaborator evaluating civic fit
**I want** the About section to show a point of view immediately
**So I can** decide whether this person thinks about participation the right way

**job_id:** JOB-2, JOB-1

### Elevator Pitch
Before: Collaborator reads the About, sees "software engineer in Cluj-Napoca" — reads like LinkedIn, bounces.
After: reads `aboutBody` → "build for use, not demonstration" lands in the first sentence
Decision enabled: decides this person has a design philosophy, not just a job title

### Acceptance Criteria
- AC-3.1: "Build for use, not demonstration" (or equivalent thesis) appears in the first sentence of `aboutBody`
- AC-3.2: The About does NOT use any of the 5 anti-patterns (Mission Statement, Credential Cascade, Humblebrag, Over-Explainer, Values Paragraph)
- AC-3.3: Location is stated as fact ("Cluj-Napoca, Romania"), not explained or justified
- AC-3.4: If project references are included, they use "I built X to do Y" structure (values through practice)
- AC-3.5: RO and HU translations preserve the structure and avoid anti-patterns
- AC-3.6: The expanded section (if present) follows Pattern D: clearly optional, not required reading

---

## US-4: isthisai card frames the challenge

**As a** builder scanning project cards
**I want** the isthisai description to make me want to click
**So I can** see if this person actually ships interesting things

**job_id:** JOB-1

### Elevator Pitch
Before: Builder reads "A game about telling the difference" — a definition, no urgency to click.
After: reads `isthisaiDescription` → sees a challenge that makes them think "I want to try this"
Decision enabled: decides the projects are worth exploring, confirming the hero's promise

### Acceptance Criteria
- AC-4.1: `isthisaiDescription` uses challenge framing, not definition framing
- AC-4.2: The description preserves the core information (images/videos, human vs. machine)
- AC-4.3: No added enthusiasm or hype — sharper framing only
- AC-4.4: RO and HU translations preserve the challenge framing
- AC-4.5: `isthisaiCta` remains "Play isthisai" (already good)

---

## US-5: clujparticipa CTA invites participation

**As a** potential collaborator or project user
**I want** the clujparticipa CTA to feel like an invitation
**So I can** feel confident the project is participatory, not just displayed

**job_id:** JOB-2, JOB-4

### Elevator Pitch
Before: Collaborator sees "See clujparticipa" — a display verb, no action energy.
After: sees `clujparticipaCta` → action-oriented invitation to participate
Decision enabled: decides to engage with the project, not just look at it

### Acceptance Criteria
- AC-5.1: `clujparticipaCta` uses an action verb ("Try", "Join", "Explore") not a display verb ("See", "View", "Visit")
- AC-5.2: CTA preserves the project name for scannability
- AC-5.3: RO and HU translations preserve the action orientation
- AC-5.4: The CTA does NOT over-promise (no "revolutionize", "transform")

---

## US-6: Status labels signal life, not tickets

**As a** project user checking if a tool is alive
**I want** the status label to convey momentum or completion
**So I can** trust that the project is worth engaging with

**job_id:** JOB-4

### Elevator Pitch
Before: User sees "Status: In progress" — reads like a Jira ticket, feels stale.
After: sees status label → feels the project is active and being worked on, or live in the world
Decision enabled: decides whether to invest time in exploring the project

### Acceptance Criteria
- AC-6.1: `isthisaiStatus` does NOT use Jira-language ("In progress", "To do", "Done")
- AC-6.2: `clujparticipaStatus` signals momentum, not a ticket state
- AC-6.3: `notesAndExperimentsStatus` signals ongoing activity
- AC-6.4: All status labels are updated in RO and HU
- AC-6.5: Status labels are short (1-3 words max)

---

## US-7: Notes intro hooks the reader

**As a** builder looking for honest thinking
**I want** the notes section intro to make me want to read
**So I can** decide if the thinking is worth my time

**job_id:** JOB-1, JOB-2

### Elevator Pitch
Before: Builder reads "Working notes on civic software, publishing, and building useful things" — a category, no urgency.
After: reads `notesIntro` → feels "these might change how I think about X"
Decision enabled: decides to click through to a note, confirming the site's substance signal

### Acceptance Criteria
- AC-7.1: `notesIntro` creates urgency or curiosity, not just a category label
- AC-7.2: The intro preserves the current subject areas but frames them as ideas-in-progress
- AC-7.3: `notesPageIntro` on the notes index page matches the same hook framing
- AC-7.4: RO and HU translations preserve the hook framing

---

## Unresolved items (out of scope for this feature, tracked for follow-up)

1. **Civic chatbot project card:** Fully translated in `ui.ts` but not rendered in any template. Decision: wire it in or remove the translations. NOT addressed in this feature.
2. **"Notes and experiments" as a project card:** It's a category, not a project. Decision: keep, reframe, or move. Partially addressed by US-6 (status label) but the structural question remains open.
