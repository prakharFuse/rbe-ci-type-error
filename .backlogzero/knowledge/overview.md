---
name: overview
description: What this repo is (a CI journey-suite fixture) and the rules that govern changes to it
type: knowledge
scope: global
updated: 2026-09-11 (IONE-959)
captured_sha: 9be5bb70521e87b3a02f3227c230abc9b9eb7390
sources:
  - README.md
  - package.json
sources_sha256:
  README.md: eae94deaacb8107689c30ab8632c0d9901be410e0f598b5846e34d0af878a6fa
  package.json: 0a04857349e0c2e2aaf7175dae5ae0cd56b5e337e128b13c3a33d4b394b2d48a
---

This is not a product codebase — it is a **fixture repo** for BacklogZero's own
journey-suite tests (resolver-core journey `j119`), named `rbe-ci-type-error`.
See `README.md` for the full rules; the short version:

- `main` must stay green (`npm test` → `tsc --noEmit`). A red `main` is a
  broken fixture, not a feature request.
- The scenario under test is a **PR branch** whose own change introduces a
  TypeScript type error. CI-fix agents are expected to fix the source change
  so the typecheck passes — not to weaken the check.
- Never edit `tsconfig.json`, `.github/workflows/ci.yml`, or add
  `// @ts-ignore`-style suppressions to force green. `README.md` calls this
  out explicitly as an anti-goal, not an oversight.
- The repo is re-provisioned from a script outside this checkout
  (`tests/journeys/scripts/provision-ci-red-fixtures.ts --only=rbe-ci-type-error`)
  — that script is not part of this working tree.

The entire "product" is 3 source files under `src/` (see
[[architecture]]). There is no database — no `data-model` page exists for
this repo.
