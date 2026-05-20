# DoR Validation — sharper-copy

| # | DoR Item | Status | Evidence |
|---|----------|--------|----------|
| 1 | User stories are written from the user's perspective | PASS | All 7 stories use "As a [audience], I want [action], so I can [outcome]" |
| 2 | Every user story traces to a job_id | PASS | US-1→JOB-1, US-2→JOB-1/JOB-3, US-3→JOB-2/JOB-1, US-4→JOB-1, US-5→JOB-2/JOB-4, US-6→JOB-4, US-7→JOB-1/JOB-2 |
| 3 | Acceptance criteria are testable without ambiguity | PASS | Each AC specifies a concrete observable outcome (specific words present/absent, CTA uses action verb, no anti-patterns) |
| 4 | No open questions blocking implementation | PASS | Two unresolved items are explicitly out-of-scope; no blocker questions |
| 5 | Non-functional requirements identified | PASS | i18n consistency (all changes in 3 languages), no layout changes (copy only), no new dependencies |
| 6 | Dependencies between stories identified | PASS | US-2 depends on US-1; US-3/4/5/7 can proceed after US-1; US-6 depends on US-4/5 (same cards) |
| 7 | Story is small enough to complete in one iteration | PASS | Each story maps to 1-2 hours of work (copy writing + review) |
| 8 | Definition of Done is clear | PASS | Copy changes applied in all 3 languages, no anti-patterns present, site builds and renders correctly |
| 9 | Elevator pitch present for every non-infrastructure story | PASS | All 7 stories have Before/After/Decision-enabled elevator pitches |
