# Copy Audit — gergobalogh.me

## Audiences (all four)

1. Fellow builders / devs — resonate with process and thinking
2. Potential collaborators — orgs, NGOs, civic groups who might want to work with you
3. Curious visitors / general — conference organizers, journalists, people who google you
4. Users of your projects — arrive looking for a tool, not for you

## Tone

Keep current mixed tone — Hero is direct, About is spare, projects are descriptive, notes are opinionated. Don't flatten it.

## Primary site goal

Leave a clear impression of who you are and how you think. Actions are secondary.

---

## Job stories per audience

### Fellow builders / devs

**When I'm scanning someone's site to decide if they're worth following, I want to see evidence of real shipped work and honest thinking, so I can decide whether to read more or move on.**

- Functional: find projects that are actually live and notes that say something specific
- Emotional: feel like I found a peer, not a brand
- Social: be able to reference this person's work in conversation without caveats

Push: most personal sites are generic — "software engineer passionate about X" — and signal nothing. Pull: a site that shows restraint and specificity signals someone worth paying attention to. Anxiety: "will this be another portfolio with no substance behind the headlines?" Habit: skim the hero, skip to projects, maybe read one note.

**The copy must pass the 3-second test:** a builder reads the hero and either clicks through or leaves. The hero must signal "this person ships real things and writes honestly about them" — not "this person works in tech."

### Potential collaborators

**When I'm considering someone for a civic tech project, I want to quickly understand what they've built and how they think about participation, so I can decide whether to reach out.**

- Functional: see relevant project work (civic tools, not just dev tools) and understand the design philosophy
- Emotional: feel confidence that this person won't over-promise and under-deliver
- Social: be able to recommend this person to colleagues without hedging

Push: need someone who understands civic context, not just code. Pull: a site that clearly frames what the work is FOR (coalition-building, not voting) signals the right kind of experience. Anxiety: "is this person a technologist who doesn't understand the social layer, or someone who gets both?" Habit: read About, scan projects, check one note for depth.

**The About section is the gate.** If it reads like a LinkedIn summary, they leave. If it shows a point of view ("build for use, not demonstration"), they stay and look at the work.

### Curious visitors / general

**When I google someone's name, I want a quick, clear picture of who they are and what they do, so I can decide if they're relevant to whatever brought me here.**

- Functional: get a read on this person in under 10 seconds
- Emotional: feel like I learned something, not like I read marketing copy
- Social: be able to describe this person in one sentence to someone else

Push: need information fast, don't want to dig. Pull: a site that respects my time by being direct. Anxiety: "will this be a generic portfolio or will I actually learn something?" Habit: read the hero, maybe scroll, leave.

**The hero must write the one-sentence description for them.** If they leave thinking "he builds civic tools in Cluj" that's fine. If they leave thinking "software engineer" that's a failure.

### Users of your projects

**When I land here from a project link, I want to find the tool I was looking for without friction, so I can use it or learn more about it.**

- Functional: locate the right project and get to the live product quickly
- Emotional: feel like the project is alive and maintained, not abandoned
- Social: share the project with others confidently

Push: came for a specific tool, don't care about the person yet. Pull: a clear path from landing to the live product. Anxiety: "is this still active?" Habit: scan for the project name, click the CTA.

**The project cards must be scannable.** Project name and CTA must be visible without reading the description. Status should signal life, not a ticket tracker.

---

## Per-page breakdown

### Homepage — Hero

- **Who it's for:** All four audiences on first contact
- **Tone:** Direct and spare (as now)
- **Action:** Plant the seed: "this person builds things that matter, not just things"
- **Current problem:** "I build playful and civic software" is accurate but flat. It describes a category without conveying what makes it interesting. A curious visitor reads it and thinks "ok" — not "I want to see what they made."

### Homepage — About

- **Who it's for:** Curious visitors + collaborators (the two who need context on who you are)
- **Tone:** Warm but spare
- **Action:** Answer "why should I care about this person?" in under 3 seconds
- **Current problem:** "I build for use, not for demonstration" is the strongest line on the site — but it's buried at the end of a paragraph that reads like a LinkedIn summary. That line should earn more oxygen.

### Homepage — Projects

- **Who it's for:** Fellow builders + collaborators (who want to see what you've shipped) + project users (who land here looking for a tool)
- **Tone:** Descriptive, let the work speak
- **Action:** Make each project feel like something worth clicking — not just something that exists
- **Current problems:**
  - The descriptions explain what things ARE rather than why they're interesting. "A game about telling the difference" is a definition; "Can you tell if this was made by a human?" is a challenge that makes you want to click.
  - The civic chatbot is fully translated in i18n but invisible in the UI — it's a gap.
  - "Notes and experiments" as a project block is odd — notes aren't a project, they're a lens on your projects.

### Homepage — Notes

- **Who it's for:** Fellow builders (who want to see how you think)
- **Tone:** Direct, opinionated (as the notes themselves already are)
- **Action:** Make the titles and summaries irresistible enough to click through
- **Current problem:** The intro line "Working notes on civic software, publishing, and building useful things" is a category label, not a hook. It doesn't create urgency.

### Homepage — Elsewhere

- **Who it's for:** Collaborators + curious visitors who want to follow or reach out
- **Tone:** Quiet, no selling
- **Action:** Make contact feel easy and natural
- **Current problem:** It's fine. Maybe the weakest issue on the site.

### Project detail pages

- **Who it's for:** People who clicked because they're already interested
- **Tone:** Descriptive + opinionated (the "Why it exists" section is the best copy on the site)
- **Action:** Get them to the live project (primary CTA) or back to other work (secondary)
- **Current problems:**
  - isthisai's CTA says "Play isthisai" — good. clujparticipa says "See clujparticipa" — weak. You're not showing a prototype, you're inviting participation.
  - The "Status: In progress" / "Status: Live" lines read like a Jira ticket.

### Notes index

- **Who it's for:** Builders who want to go deeper on your thinking
- **Tone:** Direct, as the notes themselves
- **Action:** Click into a note that resonates
- **Current problem:** Same as the homepage — the intro is a category, not a hook.

---

## Cross-cutting pattern

The copy describes things accurately but doesn't make the reader lean in. The fix isn't more enthusiasm — it's sharper framing. The notes are already good at this ("A civic tool doesn't need to solve politics. It needs to help one group understand something"). The rest of the site should match that energy.

## Rewrite principles (derived from job stories)

1. **3-second hero test:** someone reads the hero and can describe what you do in one sentence. If they'd say "software engineer," the copy failed.
2. **About earns the click:** "build for use, not demonstration" is the thesis — it must land before the visitor scrolls past.
3. **Projects frame, not define:** each card must make the reader think "I want to see this," not "I understand what this is."
4. **Status signals life:** replace Jira-language with something that makes projects feel active.
5. **Notes intro hooks, not categorizes:** the reader should feel "these might change how I think about X," not "these are notes about X."

## Unresolved items

- Civic chatbot project: fully translated in `src/i18n/ui.ts` but not rendered in any template. Decide whether to wire it in or remove the translations.
- "Notes and experiments" as a project card: it's a category, not a project. Decide whether to keep it, reframe it, or move it.
