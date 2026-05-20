# DISTILL Decisions — sharper-copy

## Key Decisions
- [DWD-1] Walking Skeleton Strategy: Strategy C (Real local). Rationale: static Astro site with no external dependencies — all tests run against real build output and real translation data.
- [DWD-2] Test runner: Vitest. Rationale: Astro's recommended test runner; minimal setup; runs TypeScript natively.
- [DWD-3] Test classification: content validation (not visual regression). Rationale: copy quality rules (anti-patterns, framing, completeness) are assertions on string content, not visual appearance.
- [DWD-4] No scaffolding needed. Rationale: all production modules being tested (`ui.ts`, `About.astro`) already exist. No new production code is being introduced — only copy revisions to existing keys.

## WS strategy
Strategy C — Real local. All tests use real translation data and real Astro build output.

## Adapter coverage
| Adapter | @real-io scenario | Covered by |
|---------|-------------------|------------|
| translations (ui.ts) | YES | All content validation tests read real translation keys |
| Astro build output | YES | Build verification test runs real `astro build` |

## Driving adapter coverage
| Driving port | WS scenario | Protocol |
|-------------|-------------|----------|
| src/i18n/ui.ts:translations | All tests import and read translations directly | TypeScript import |

No CLI, HTTP, or hook adapters — this is a data-surface-only feature.
