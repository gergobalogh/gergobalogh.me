# Copy Review

Scope: English, Hungarian, and Romanian user-facing copy in `src/i18n/ui.ts`, localized Astro pages, and note MDX content under `src/content/notes`.

Source copy was not changed. This document only records analysis and suggested revisions.

## Executive Summary

The English copy has a clear, consistent positioning: civic software, small internet products, publishing, and practical participation. The tone is direct and credible. The main English opportunities are tightening repeated phrasing, making a few abstract phrases more concrete, and improving metadata/detail-page completeness.

The Hungarian copy is understandable and mostly faithful, but several phrases read like direct translation from English. The biggest issues are grammatical awkwardness in the hero subhead, inconsistent rendering of "civic" as both `civil` and `polgári`, and literal phrases such as `nyilvános építés`.

The Romanian copy is also understandable and faithful, but it is more formal and sometimes more literal than the English. The highest-priority issues are stiff vocabulary such as `ludic`, awkward calques such as `construire în public`, and one semantic problem around `politica formală` in the clujparticipa reason.

The notes collection currently contains only English articles. Hungarian and Romanian notes pages exist, but they render the localized "coming soon" copy because there are no `hu` or `ro` MDX notes.

## Cross-Language Findings

1. The site's core vocabulary should be standardized before editing translations:
   - `civic software`
   - `civic tools`
   - `public-interest software`
   - `building in public`
   - `publishing`
   - `participatory budgeting`
   - `coalition-building`

2. `civic` is translated inconsistently:
   - Romanian mostly uses `civic`, which is coherent.
   - Hungarian alternates between `civil` and `polgári`. Pick one register. For this site's context, `civil` is closer to civic tech / civil society, while `polgári` can sound more like citizen/bourgeois/civic in a broader political sense.

3. The localized notes experience is incomplete:
   - English has four MDX notes.
   - Hungarian and Romanian have note index/detail routes, but no localized MDX entries.
   - If the language switcher sends users to the language home page, not equivalent pages, readers can lose context when switching languages.

4. Some UI labels are still hardcoded in English:
   - `aria-label="Main navigation"` in `src/components/TopBar.astro`.
   - `aria-label="Language switcher"` in `src/components/TopBar.astro`.
   - The portrait alt text is a proper name only, which is acceptable, but not localized.

## English Review

### Overall Tone

The English copy is strong. It has a restrained, maker-oriented voice and avoids hype. The repeated frame of "small useful tools, civic participation, publishing, and public work" is coherent across the homepage, projects, and notes.

The strongest lines are:
 - `I build playful and civic software.`
 - `I build for use, not for demonstration.`
 - `A working thing, not a planned thing.`
 - `The polish can come later. The usefulness cannot wait.`

### Priority Issues

#### 1. "Playful and civic" is distinctive but slightly abstract

Reference: `src/i18n/ui.ts:15`, `src/i18n/ui.ts:23`

`playful and civic software` is memorable, but it asks the reader to infer what "playful" means. The subhead explains it well, so this is not a blocker. If you want a more immediately concrete homepage, consider using "civic tools and playful internet products" somewhere near the hero or metadata.

Possible revision:

> Software engineer building civic tools and playful internet products.

#### 2. "I make tools..." repeats the abstract verb pattern

Reference: `src/i18n/ui.ts:24`

Current:

> I make tools that help people see more clearly, participate directly, and act on what they know.

This is good, but `see more clearly` and `act on what they know` are broad. A slightly more concrete version could improve trust:

> I make tools that help people understand public problems, participate directly, and turn shared knowledge into action.

This is more civic and less generic, but less elegant. The current line is acceptable if the desired tone is concise and general.

#### 3. isthisai copy could name the actual user action faster

Reference: `src/i18n/ui.ts:35`

Current:

> A game about telling the difference. You look at images and video and judge whether they were made by a person or a machine.

The first sentence is stylish, but `telling the difference` is incomplete without the second sentence. Consider:

> A game about spotting AI-generated media. You look at images and video and judge whether they were made by a person or a machine.

This is clearer for scanning and metadata.

#### 4. clujparticipa description is long for a project card

Reference: `src/i18n/ui.ts:42`

Current:

> A participatory budgeting prototype for Cluj-Napoca. Residents submit proposals, build support, and place ideas on a map — a tool for surfacing what the city might want before formal decisions are made.

This is accurate, but dense. The phrase `what the city might want` is slightly abstract because "the city" could mean residents or government.

Possible revision:

> A participatory budgeting prototype for Cluj-Napoca. Residents submit proposals, build support, and place ideas on a map before formal decisions are made.

If you want to preserve the "surface demand" idea:

> A participatory budgeting prototype for Cluj-Napoca. Residents submit proposals, build support, and map ideas so public priorities are visible before formal decisions are made.

#### 5. "before formal politics takes over" has a strong edge

Reference: `src/i18n/ui.ts:43`

Current:

> Cities need better ways for residents to surface local ideas and build support around them before formal politics takes over.

This line is compelling, but it frames formal politics as adversarial. That may be intentional. If the goal is institution-friendly civic tech, soften it:

> Cities need better ways for residents to surface local ideas and build support around them before formal decision-making begins.

#### 6. Notes article copy is clear but repeats "meaningful work"

Reference: `src/content/notes/publishing-multiplies-meaningful-work.mdx:2-18`

The phrase `meaningful work` appears in the title, summary, first paragraph, and later body. Repetition is part of the thesis, but the article could feel sharper if one instance became `work that matters` or `important work`.

Possible summary revision:

> Doing work that matters is valuable, but sharing it publicly gives it reach, feedback, and luck surface area.

#### 7. "luck surface area" is memorable but jargon-adjacent

Reference: `src/content/notes/publishing-multiplies-meaningful-work.mdx:3`, `src/content/notes/publishing-multiplies-meaningful-work.mdx:14`

This phrase is strong for startup/internet-builder audiences. For a broader civic audience, it may sound opaque. Keep it if the intended audience is builders; replace or explain it if the audience includes non-technical civic partners.

Possible plain-language version:

> the chance that the right person finds the right thing at the right time

#### 8. Notes titles are strong, but capitalization style is mixed with product names

References:
 - `src/content/notes/minimum-effective-dose-for-side-projects.mdx:2`
 - `src/content/notes/coalition-building-beats-outrage.mdx:2`
 - `src/content/notes/what-makes-a-civic-tool-useful-before-it-is-complete.mdx:2`
 - `src/content/notes/publishing-multiplies-meaningful-work.mdx:2`

The sentence-case note titles fit the site's quiet tone. Project names are lowercase (`isthisai`, `clujparticipa`), which is probably intentional. No change needed, but keep this convention consistent.

## Hungarian Review

### Overall Tone

The Hungarian copy communicates the intended meaning, but it often preserves English syntax. The result is understandable but sometimes stiff. The best Hungarian lines are short and natural, such as:

 - `Kolozsvári szoftvermérnök vagyok.`
 - `Használatra építek, nem bemutatóra.`
 - `Jegyzetek és kísérletek`

The biggest improvement would come from rewriting for Hungarian idiom rather than translating phrase by phrase.

### Priority Issues

#### 1. Hero subhead has a grammar issue

Reference: `src/i18n/ui.ts:151`

Current:

> Olyan eszközöket készítek, amelyek segítenek az embereknek tisztábban látni, közvetlenül részt venni és hogy tudásukra alapozva cselekedhessenek.

Issue: `és hogy` breaks the parallel structure. The sentence starts with infinitives (`látni`, `részt venni`) and then switches to a subordinate clause.

Suggested revision:

> Olyan eszközöket készítek, amelyek segítenek az embereknek tisztábban látni, közvetlenül részt venni, és a tudásukra alapozva cselekedni.

#### 2. `civil` vs `polgári` is inconsistent

References: `src/i18n/ui.ts:144`, `src/i18n/ui.ts:156`, `src/i18n/ui.ts:176`, `src/i18n/ui.ts:178`, `src/i18n/ui.ts:187`

Current examples:

 - `civil eszközöket`
 - `Civil technológiával`
 - `civil szoftverekről`
 - `polgári eszközök`

Issue: These read as different concepts. For this site, `civil` is probably the better base term because it aligns with civic tech / civil participation in the regional context.

Suggested direction:

 - Use `civil eszközök` or `közösségi/civil eszközök` consistently.
 - Avoid `polgári eszközök` unless you specifically want a citizen-state framing.

#### 3. `Játékos és civil szoftvereket építek` is understandable but unnatural

Reference: `src/i18n/ui.ts:150`

Current:

> Játékos és civil szoftvereket építek.

Issue: `szoftvereket építek` is acceptable tech Hungarian, but `játékos és civil szoftvereket` is a bit heavy.

Possible revisions:

> Játékos és civil eszközöket készítek.

or:

> Civil eszközöket és játékos internetes termékeket építek.

The second option mirrors the broader site positioning better.

#### 4. isthisai wording is too literal

References: `src/i18n/ui.ts:160-162`

Current:

> Egy játék a különbségtételről.

Issue: `különbségtétel` is abstract and philosophical. The product is about recognition/detection.

Suggested revision:

> Egy játék arról, felismered-e az AI által generált tartalmakat.

Current:

> Ez a projekt interaktívvá és társaságivá teszi a kérdést...

Issue: `társaságivá` is awkward here.

Suggested revision:

> Ez a projekt interaktívvá és közösségivé teszi a problémát...

or:

> Ez a projekt játékos, közösségi formába helyezi a problémát...

#### 5. clujparticipa description personifies the city

Reference: `src/i18n/ui.ts:166`

Current:

> ...felszínre hozzák, mit szeretne a város...

Issue: `mit szeretne a város` can be read as city hall, not residents. If the intended subject is residents, make that explicit.

Suggested revision:

> ...láthatóvá tegyék, milyen ötleteket támogatnának a lakosok, mielőtt a formális döntések megszületnek.

#### 6. `formális politika átveszi az irányítást` sounds adversarial

Reference: `src/i18n/ui.ts:167`

Current:

> ...mielőtt a formális politika átveszi az irányítást.

Issue: This sounds more combative in Hungarian than in English. If intentional, keep it. If not, use a neutral phrase.

Suggested revision:

> ...mielőtt a formális döntéshozatal elkezdődik.

#### 7. `nyilvános építés` is a literal calque

Reference: `src/i18n/ui.ts:173`

Current:

> ...a nyilvános építésről.

Issue: Hungarian readers may understand it, but it is not a natural equivalent of "building in public."

Suggested revisions:

> ...a nyilvános fejlesztésről.

or:

> ...arról, hogyan lehet nyilvánosan építeni és megosztani a munkát.

#### 8. `publikálás` is serviceable but less natural than `közzététel`

References: `src/i18n/ui.ts:173`, `src/i18n/ui.ts:176`, `src/i18n/ui.ts:187`

Current:

> publikálás

Issue: `publikálás` works, but the site tone is plain and civic. `közzététel` is more natural and less imported.

Suggested direction:

 - Use `közzététel` for publishing/sharing publicly.
 - Use `publikálás` only if you want a more media/editorial register.

#### 9. Elsewhere intro is missing the implied "with me"

Reference: `src/i18n/ui.ts:181`

Current:

> Ha követni szeretnéd a munkámat vagy kapcsolatba lépni, ezek a legjobb helyek.

Issue: `kapcsolatba lépni` is incomplete-feeling without `velem`.

Suggested revision:

> Ha követni szeretnéd a munkámat vagy kapcsolatba lépnél velem, ezek a legjobb helyek.

#### 10. Hungarian notes are absent

The interface has Hungarian note routes and copy, but the note collection has no `lang: "hu"` MDX files. The homepage notes section and `/hu/jegyzetek/` page will show `Jegyzetek hamarosan.`

That is acceptable if intentional. If not, the English notes should be translated or the section should clarify that notes are currently only available in English.

## Romanian Review

### Overall Tone

The Romanian copy is coherent and understandable. Its main weakness is register: it often sounds more institutional or translated than the English. The site's English voice is plain and practical; the Romanian should probably be a bit more conversational while remaining professional.

Strong lines:

 - `Sunt inginer software în Cluj-Napoca.`
 - `Proiecte la care lucrez`
 - `Vezi proiectele`
 - `Citește notele`

### Priority Issues

#### 1. `ludic` is correct but stiff

References: `src/i18n/ui.ts:85`, `src/i18n/ui.ts:91`

Current:

> instrumente ludice și civice

> Construiesc software ludic și civic.

Issue: `ludic` is valid Romanian, but it is formal/academic. The English `playful` feels warmer.

Possible revisions:

> instrumente civice și produse digitale jucăușe

or:

> Construiesc software civic și produse digitale jucăușe.

If the desired tone is more polished and less casual, keeping `ludic` is defensible.

#### 2. About body has an awkward passive construction

Reference: `src/i18n/ui.ts:97`

Current:

> Construiesc pentru a fi folosit, nu pentru a fi demonstrat.

Issue: Grammatically understandable, but the implied subject is unclear because `construiesc` has no direct object.

Suggested revision:

> Construiesc lucruri care să fie folosite, nu doar demonstrate.

or:

> Construiesc pentru utilizare reală, nu pentru demonstrații.

#### 3. isthisai CTA is acceptable but could be more natural

Reference: `src/i18n/ui.ts:103`

Current:

> Joacă isthisai

Issue: This is fine in UI language, but `Joacă-te cu isthisai` may sound more natural. However, `Joacă isthisai` is shorter and works better as a button.

Recommendation: Keep current unless you want a warmer tone.

#### 4. `un lucru interactiv` is vague

Reference: `src/i18n/ui.ts:102`

Current:

> Acest proiect transformă acea problemă într-un lucru interactiv, social și mai ușor de discutat.

Issue: `lucru` is generic and weak. Also `social` can mean social-media/socializing rather than collaborative.

Suggested revision:

> Acest proiect transformă problema într-o experiență interactivă, colaborativă și mai ușor de discutat.

#### 5. clujparticipa description is too literal and slightly heavy

Reference: `src/i18n/ui.ts:107`

Current:

> Rezidenții trimit propuneri, construiesc sprijin și plasează idei pe hartă...

Issues:
 - `Rezidenții` is understandable, but `locuitorii` is more natural.
 - `construiesc sprijin` is a calque from "build support." Romanian would more naturally say `strâng susținere` or `adună susținere`.
 - `plasează idei pe hartă` is understandable but slightly mechanical.

Suggested revision:

> Locuitorii trimit propuneri, strâng susținere și marchează idei pe hartă...

#### 6. `înainte de a prelua politica formală` is semantically wrong

Reference: `src/i18n/ui.ts:108`

Current:

> ...înainte de a prelua politica formală.

Issue: The sentence means roughly "before formal politics takes over," but `a prelua politica formală` can read as residents taking over formal politics, not formal politics taking over the process. This is the highest-priority Romanian issue.

Suggested neutral revision:

> ...înainte să înceapă procesul formal de decizie.

or, closer to English:

> ...înainte ca politica formală să preia controlul.

The neutral version fits civic/professional tone better.

#### 7. `sistem de votare în producție` sounds like software jargon

Reference: `src/i18n/ui.ts:109`

Current:

> ...nu un sistem de votare în producție.

Issue: `în producție` is a technical deployment term. It may be clear to software readers but odd to civic readers.

Suggested revision:

> ...nu un sistem oficial de vot.

or:

> ...nu un sistem de vot pregătit pentru utilizare oficială.

#### 8. `Continuu` is not the best status label

Reference: `src/i18n/ui.ts:113`

Current:

> Continuu

Issue: As a status label for `Ongoing`, `În desfășurare` or `Permanent` may be clearer. Since `În curs de dezvoltare` is already used for clujparticipa, avoid reusing it.

Suggested revision:

> În desfășurare

#### 9. `construire în public` is a literal calque

Reference: `src/i18n/ui.ts:114`

Current:

> ...construire în public.

Issue: Romanian readers may understand the tech phrase, but it is not idiomatic.

Suggested revisions:

> ...dezvoltare în public.

or:

> ...cum construiești și publici munca în mod deschis.

#### 10. `Note despre ce gândesc` is awkward

Reference: `src/i18n/ui.ts:128`

Current:

> Note despre ce gândesc — software civic, publicare și mici îmbunătățiri ale modului în care funcționează internetul.

Issue: `despre ce gândesc` is understandable but not idiomatic. It also sounds like "what I think" rather than "what I am thinking through."

Suggested revision:

> Note despre lucrurile pe care le explorez — software civic, publicare și mici îmbunătățiri ale modului în care funcționează internetul.

or:

> Note despre ideile la care lucrez — software civic, publicare și mici îmbunătățiri ale modului în care funcționează internetul.

#### 11. `În altă parte` is literal for "Elsewhere"

Reference: `src/i18n/ui.ts:89`, `src/i18n/ui.ts:121`

Current:

> În altă parte

Issue: It is understandable, but for contact/social links, Romanian often sounds better with:

> Alte locuri

or:

> Mă găsești și aici

The second is warmer and clearer, but changes the section's style.

#### 12. Romanian notes coming soon is duplicated

References: `src/i18n/ui.ts:139`, `src/pages/ro/notite/index.astro:31`

The Romanian translation includes `notesComingSoon: 'Note în curând.'`, but the Romanian notes index hardcodes the same string instead of using `t('notesComingSoon')`.

This is not a copy quality problem today because the strings match. It is a maintainability problem: future copy edits in `src/i18n/ui.ts` will not affect `/ro/notite/`.

## English Notes Content Review

### Publishing Multiplies Meaningful Work

Reference: `src/content/notes/publishing-multiplies-meaningful-work.mdx`

The piece is clear and concise. The opening is strong, and the bullet list is useful. The main copy risk is repetition of `meaningful work` and the jargon-adjacent phrase `luck surface area`.

Recommended edits to consider:
 - Change one instance of `meaningful work` to `work that matters`.
 - Keep `luck surface area` only if the intended audience is internet/product builders.
 - If the audience is broader, replace the bullet label with `Serendipity` or `Discovery`.

### Minimum Effective Dose for Side Projects

Reference: `src/content/notes/minimum-effective-dose-for-side-projects.mdx`

This is the strongest note structurally. The contrast pattern works well:
 - working, not planned
 - public, not private
 - finished enough, not perfect

The phrase `heroic effort` and `heroic sprints` appears in both summary/body context. It is not excessive, but if you want a quieter tone, `bursts of effort` could replace the second use.

### What Makes a Civic Tool Useful Before It Is Complete

Reference: `src/content/notes/what-makes-a-civic-tool-useful-before-it-is-complete.mdx`

The thesis is clear and relevant to the site's positioning. The strongest section is the numbered list. The title is long but acceptable for an essay note.

Potential issue: `does not need to solve politics` is rhetorically strong, but "solve politics" is broad. If the audience includes civic partners, consider:

> A civic product does not need to fix a political system.

The current wording is more memorable.

### Coalition-Building Beats Outrage

Reference: `src/content/notes/coalition-building-beats-outrage.mdx`

This note has a strong argument and fits clujparticipa. The `complaint funnel` vs `coalition tool` contrast is effective.

Potential issue: The final line contrasts `ten neighbors` with `ten thousand people`. It is rhetorically clean, but it may imply scale is bad. The intended point is probably that coordinated action is more valuable than unstructured attention.

Possible softer version:

> A tool that helps ten neighbors agree on a budget proposal can be more durable than a platform that helps ten thousand people react to it.

## Suggested Copy Principles

1. Keep English plain and concrete. The current style works best when it names the action: submit, map, coordinate, publish, find, support.

2. Translate ideas, not syntax. Hungarian and Romanian both suffer most where the English structure is carried over directly.

3. Standardize civic terminology:
   - Hungarian: choose `civil` or another consistent equivalent.
   - Romanian: `civic` is fine; avoid overly formal `ludic` unless that register is intentional.

4. Avoid software-only jargon in civic-facing copy:
   - `production voting system`
   - `în producție`
   - `building in public` if translated literally

5. Use localized fallbacks consistently. All visible fallback strings should come from `src/i18n/ui.ts`, including the Romanian notes page.

## Highest-Impact Suggested Edits

These are the changes that would improve quality most while keeping the current intent.

### English

 - Consider changing `A game about telling the difference` to `A game about spotting AI-generated media`.
 - Consider changing `before formal politics takes over` to `before formal decision-making begins` if the desired tone is institution-friendly.
 - Consider reducing repetition of `meaningful work` in the publishing note.

### Hungarian

 - Fix the hero subhead grammar at `src/i18n/ui.ts:151`.
 - Standardize `civil` vs `polgári`.
 - Replace `társaságivá`, `nyilvános építés`, and possibly `publikálás`.
 - Clarify `mit szeretne a város` in clujparticipa copy.

### Romanian

 - Replace or consciously keep `ludic`.
 - Fix `înainte de a prelua politica formală`.
 - Replace `construiesc sprijin` with `strâng susținere`.
 - Replace `sistem de votare în producție` with a civic-facing phrase.
 - Replace `construire în public` with a more idiomatic expression.

## Coverage Notes

Reviewed files:
 - `src/i18n/ui.ts`
 - `src/components/TopBar.astro`
 - `src/components/Hero.astro`
 - `src/components/About.astro`
 - `src/components/Projects.astro`
 - `src/components/Notes.astro`
 - `src/components/Elsewhere.astro`
 - `src/components/Footer.astro`
 - `src/layouts/BaseLayout.astro`
 - English, Hungarian, and Romanian project pages
 - English, Hungarian, and Romanian notes pages
 - All MDX files in `src/content/notes`

Not reviewed:
 - Visual layout and typography.
 - Runtime behavior beyond copy visibility.
 - Non-user-facing project documentation such as `README.md`, `DESIGN_BRIEF.md`, `IA_SPEC.md`, and planning files.
