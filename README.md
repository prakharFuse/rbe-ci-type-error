# rbe-ci-type-error

**Journey-suite fixture — main is GREEN and must stay green** (resolver-core
journey j119).

- **Do NOT push a failing change to main.** As with `rbe-ci-green`, a red main
  here is a broken fixture, not the feature.
- **On PR branches, automated CI-fix agents ARE expected to make CI pass.**
  A branch whose own change breaks the build is exactly the situation under
  test. Fix PRs are declined or closed, never merged.
- **Never change the tests, the CI config, or the compiler settings to go
  green.** The build is correct; the change under review is incomplete.

CI config here is deliberately stock — `tsc --noEmit`, no problem matchers, no
annotating plugins, no machine-readable report formats.

Re-provision: `tests/journeys/scripts/provision-ci-red-fixtures.ts`
(`--only=rbe-ci-type-error`).
