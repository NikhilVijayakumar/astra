## ADDED Requirements

### Requirement: Package compatibility

Astra SHALL package its library output and declarations for its root and existing common subpaths while retaining peer ranges (ASTRA-PKG-001; `knowledge/architecture/public-api-build.md`).

#### Scenario: Consumer installs package

- **GIVEN** a built archive and its peer dependencies
- **WHEN** a consumer resolves the public entry points
- **THEN** JavaScript and declarations resolve to packaged files.

### Requirement: Staged release

A tag release SHALL run checks and stage only a matching package version using trusted publishing, leaving publication to maintainer approval (ASTRA-PKG-002; `knowledge/architecture/public-api-build.md`).

#### Scenario: Tag mismatch

- **GIVEN** a tag different from the package version
- **WHEN** the release workflow runs
- **THEN** staging does not occur.

#### Scenario: Staged release

- **GIVEN** matching tag and successful checks
- **WHEN** the workflow stages a version
- **THEN** it is not published until an npm maintainer approves it with 2FA.

### Requirement: Consumer and release guidance

Documentation SHALL describe registry setup, staged approval and migration including the npm alias (ASTRA-PKG-003; `knowledge/architecture/public-api-build.md`).
