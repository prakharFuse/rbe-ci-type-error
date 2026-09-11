---
name: architecture
description: Module graph of the 3-file src/ tree and how the typecheck-only CI validates it
type: knowledge
scope: global
updated: 2026-09-11 (IONE-959)
captured_sha: 9be5bb70521e87b3a02f3227c230abc9b9eb7390
sources:
  - src/index.ts
  - src/describe-event.ts
  - src/events.ts
  - .github/workflows/ci.yml
  - tsconfig.json
sources_sha256:
  .github/workflows/ci.yml: cfa9c7f3e5ba6d7f34e93fd056cedc0299da8ece5805124a13fbf435d5c0551f
  src/describe-event.ts: 3f9807e8b851f1e171a1657ff456e86ac7d742d502075a5da988d2bbe5f3ec41
  src/events.ts: be6de5fc2d321918937b21dc9ff88efd1ae0c256371bfd7ad894927cf71824d9
  src/index.ts: a2a74a00e83938c1d024447ba7419a31a683abd9a4c17eb42472d34f59bf8526
  tsconfig.json: 5f4c6ab7df221013f393d79ba00c89e076bf3a651716002fbd34b0ac494a7e48
---

```mermaid
flowchart LR
  events["src/events.ts\n(DomainEvent type)"]
  describe["src/describe-event.ts\ndescribeEvent()"]
  index["src/index.ts\nsummarize()"]

  describe -->|imports type| events
  index -->|imports type| events
  index -->|imports fn| describe

  ci["CI: tsc --noEmit"] -.->|typechecks| index
  ci -.->|typechecks| describe
  ci -.->|typechecks| events
```

- `events.ts` defines the discriminated union `DomainEvent` (`created` /
  `updated` / `deleted`), each variant with its own required fields.
- `describe-event.ts` exhaustively switches over `event.kind`; the `default`
  branch assigns to a `never`-typed `unreachable` so that adding a new
  `DomainEvent` variant without a matching `case` becomes a compile error.
  This is the exhaustiveness-check idiom used throughout — see
  [[typescript-conventions]].
- `index.ts` is the only consumer, building a hardcoded `recent` array and
  mapping it through `describeEvent`.
- CI (`.github/workflows/ci.yml`) runs `npm install` then `npm test`, which is
  just `tsc --noEmit` (`package.json`) — there is no bundler, linter, or test
  runner in this repo.
