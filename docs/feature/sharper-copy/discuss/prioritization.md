# Prioritization — sharper-copy

## Execution order

| Priority | Slice | Rationale |
|----------|-------|-----------|
| 1 | S1: Hero EN | Highest learning leverage. If hero fails, nothing else matters. Validates the rewrite principles before investing in more changes. |
| 2 | S2: Hero RO+HU | Dependency on S1. Must ship same day to keep all-language parity. |
| 3 | S3: About | Second-highest impact (JOB-2 collaborators). Can ship independently of S1/S2 but follows naturally. |
| 4 | S4: isthisai card | Confirms the hero's promise with concrete work. Medium impact. |
| 5 | S5: clujparticipa card + CTA | CTA is weak ("See") — high impact for low effort. |
| 6 | S6: Notes card + status labels | Closes the loop. Lower urgency. |
| 7 | S7: Notes intro | Completes the emotional arc. Lowest urgency. |

## Dogfood cadence

S1 should ship and be live for at least 1 day before proceeding to S3+. Use analytics (umami events: hero-cta-primary, hero-cta-secondary) to validate the 3-second test hypothesis.

## Reference class

Copy-only changes on personal sites. No comparable A/B test data available. Learning is qualitative + behavioral (scroll depth, time-on-page, CTA clicks).
