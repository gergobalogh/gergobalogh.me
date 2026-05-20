# Shared Artifacts Registry — sharper-copy

All copy changes flow through a single source of truth: `src/i18n/ui.ts`.

| Artifact | Source (SSOT) | Consumed by | Language variants |
|----------|---------------|-------------|-------------------|
| `heroHeadline` | `ui.ts:en.heroHeadline` | Hero component, `<title>`, OG meta | EN + RO + HU |
| `heroSubhead` | `ui.ts:en.heroSubhead` | Hero component | EN + RO + HU |
| `aboutBody` | `ui.ts:en.aboutBody` | About component | EN + RO + HU |
| `isthisaiDescription` | `ui.ts:en.isthisaiDescription` | Projects component + project detail page | EN + RO + HU |
| `isthisaiCta` | `ui.ts:en.isthisaiCta` | Projects component + project detail page | EN + RO + HU |
| `isthisaiStatus` | `ui.ts:en.isthisaiStatus` | Projects component + project detail page | EN + RO + HU |
| `clujparticipaDescription` | `ui.ts:en.clujparticipaDescription` | Projects component + project detail page | EN + RO + HU |
| `clujparticipaCta` | `ui.ts:en.clujparticipaCta` | Projects component + project detail page | EN + RO + HU |
| `clujparticipaStatus` | `ui.ts:en.clujparticipaStatus` | Projects component + project detail page | EN + RO + HU |
| `notesAndExperimentsDescription` | `ui.ts:en.notesAndExperimentsDescription` | Projects component + project detail page | EN + RO + HU |
| `notesAndExperimentsCta` | `ui.ts:en.notesAndExperimentsCta` | Projects component + project detail page | EN + RO + HU |
| `notesAndExperimentsStatus` | `ui.ts:en.notesAndExperimentsStatus` | Projects component + project detail page | EN + RO + HU |
| `notesIntro` | `ui.ts:en.notesIntro` | Notes component (homepage) | EN + RO + HU |
| `notesPageIntro` | `ui.ts:en.notesPageIntro` | Notes index page | EN + RO + HU |

**Key constraint:** every change must be applied in all three languages (EN, RO, HU). The RO and HU translations must preserve the sharper framing, not just translate literally.
