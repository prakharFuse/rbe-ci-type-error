---
name: typescript-conventions
description: TypeScript compiler settings and the exhaustiveness-check pattern used for DomainEvent
type: convention
scope: global
updated: 2026-09-11 (IONE-959)
captured_sha: 9be5bb70521e87b3a02f3227c230abc9b9eb7390
sources:
  - tsconfig.json
  - src/describe-event.ts
  - src/index.ts
sources_sha256:
  src/describe-event.ts: 3f9807e8b851f1e171a1657ff456e86ac7d742d502075a5da988d2bbe5f3ec41
  src/index.ts: a2a74a00e83938c1d024447ba7419a31a683abd9a4c17eb42472d34f59bf8526
  tsconfig.json: 5f4c6ab7df221013f393d79ba00c89e076bf3a651716002fbd34b0ac494a7e48
---

- `strict: true`, `module`/`moduleResolution: NodeNext`. Under `NodeNext`,
  relative imports must use the `.js` extension even though the source files
  are `.ts` (see `import type { DomainEvent } from './events.js'` in both
  `src/describe-event.ts` and `src/index.ts`) — this is required by the
  resolver, not a typo.
- New fields on a `DomainEvent` variant, or a new variant added to the union
  in `src/events.ts`, must be handled in the `switch` in
  `src/describe-event.ts`. The `default: { const unreachable: never = event; }`
  branch is a deliberate exhaustiveness guard — leaving a variant unhandled
  is a compile error under `strict`, which is the mechanism this fixture
  exercises (see [[overview]]).
- No linter or formatter is configured in this repo; `tsc --noEmit` is the
  only check (`package.json` `test` script).
