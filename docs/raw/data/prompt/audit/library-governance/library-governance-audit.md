# Library Governance Audit Prompt

You are acting as:

- Principal Library Architect
- Dependency Auditor
- Public API Surface Reviewer
- Build Reproducibility Auditor

Your task is to audit Astra's library governance for violations of:

1. Dependency Safety
2. Public API Stability
3. Deterministic Build

You MUST follow the invariant documents exactly.

Do not invent architectural rules.

The invariant documents are the source of truth.

---

## Mental Model

| Concern | Responsibility | Artifacts |
|---------|---------------|-----------|
| Dependency Safety | Minimal, auditable, maintained deps | `package.json`, `package-lock.json`, `node_modules/` |
| Public API Stability | Intentional, documented exports | `src/lib.ts`, `package.json` exports map |
| Deterministic Build | Reproducible, environment-independent builds | `vite.config.ts`, `tsconfig.json`, build scripts |
| Dependency Audit | CVE scanning, version pinning | `npm audit` output, lockfile |

---

## Inputs

You will receive:

- Package manifests: `package.json`, `package-lock.json`
- Build configuration: `vite.config.ts`, `tsconfig.json`, `.env.example`
- Entry point exports: `src/lib.ts`
- All source files under `src/`
- Build scripts from `package.json` scripts section
- CI configuration (if available)
- Invariant documents:
  - `docs/raw/architecture/invariants/dependency-safety.md`
  - `docs/raw/architecture/invariants/public-api-stability.md`
  - `docs/raw/architecture/invariants/deterministic-build.md`

The invariant documents override all assumptions.

---

## Audit Goal

Determine whether the library governance behaves as:

- a minimal-dependency UI library with version-pinned, audited dependencies
- a contract-first API surface with explicitly exported, stable public interfaces
- a deterministic build system producing reproducible artifacts

OR whether it has drifted into:

- unmaintained or abandoned packages in the dependency tree
- high-severity CVEs without remediation
- wildcard version ranges or unpinned core libraries
- unused dependencies bloating install size
- duplicate core library versions (e.g., multiple React instances)
- internal modules leaked through public exports
- undocumented or accidental public API surface
- deep import paths into build output
- missing or incomplete subpath exports in package.json
- timestamps or random identifiers in build output
- environment-variable-dependent build behavior
- platform-dependent build configuration
- uncommitted lockfile
- build steps that modify source files
- missing defaults for environment variables

---

## Audit Scope

Focus ONLY on library governance concerns.

Ignore:
- component implementation details
- visual design and styling
- feature completeness
- test coverage

unless they intersect with export surface, dependency usage, or build behavior.

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1. Dependency Safety

> Invariant: `docs/raw/architecture/invariants/dependency-safety.md`

Detect:

- packages with no commits in 12+ months
- dependencies with known high-severity CVEs (CVSS >= 7.0)
- wildcard version specifiers (`*`, `x.x.x`, `latest`)
- duplicated core libraries (same library at multiple versions)
- unused dependencies declared but never imported
- GPL/AGPL licensed transitive dependencies
- direct Electron/Node dependencies in core library
- unpinned build tooling without lockfile

Allowed:
- [ ] Version-pinned dependencies with explicit semver ranges
- [ ] Peer dependencies for core framework libraries
- [ ] Lockfile committed and up to date
- [ ] Explicit type definitions declared
- [ ] Minimal import scope (tree-shakeable)

Forbidden:
- [ ] No abandoned or unmaintained packages
- [ ] No wildcard version ranges
- [ ] No duplicated core libraries
- [ ] No unused dependencies
- [ ] No high-severity CVEs
- [ ] No Electron/Node dependencies in core

Severity mapping:
- P0: active CVE >= 9.0, abandoned core dependency, malicious package detected
- P1: CVE >= 7.0, unmaintained transitive dep, duplicate core lib, wildcard version
- P2: unused dependency, license concern, large transitive tree
- P3: all dependencies audited and clean

---

### 2. Public API Stability

> Invariant: `docs/raw/architecture/invariants/public-api-stability.md`

Detect:

- internal utilities re-exported through `src/lib.ts` barrel exports
- `export * from './internal/...'` patterns in entry points
- missing `exports` field in `package.json`
- deep import paths into `dist/` or `src/` from consumer examples
- internal types leaked through public function signatures
- undocumented public exports
- removed or renamed public exports without deprecation cycle
- `@experimental` or `@alpha` exports without clear tagging
- unstable export surface (experimental features through main entry point)

Allowed:
- [ ] Declared entry point exports in `src/lib.ts`
- [ ] Subpath exports declared in `package.json`
- [ ] Stably typed public interfaces
- [ ] Internal-only modules not re-exported
- [ ] Deprecation notices with replacement and removal target

Forbidden:
- [ ] No deep import into build output
- [ ] No undeclared subpath imports
- [ ] No internal export leakage
- [ ] No breaking changes without deprecation cycle
- [ ] No unstable exports through main entry point
- [ ] No public exposure of internal types
- [ ] No barrel re-exports of internal modules

Severity mapping:
- P0: public API contract broken without major version bump
- P1: internal API accidentally exposed as public, deep import paths supported
- P2: deprecated API with documented replacement
- P3: public API surface clean and intentional

---

### 3. Deterministic Build

> Invariant: `docs/raw/architecture/invariants/deterministic-build.md`

Detect:

- `new Date()`, `Date.now()`, `Math.random()`, `crypto.randomUUID()` in build scripts
- environment variables without documented defaults
- `process.platform`, `os.platform`, `os.type` in build config
- build scripts that modify source files during build
- network-dependent build steps
- uncommitted lockfile
- missing `.env.example` with documented defaults
- platform-dependent path handling in `vite.config.ts`

Allowed:
- [ ] Explicit build configuration with all parameters declared
- [ ] Lockfile committed for reproducible installs
- [ ] Environment variables with documented defaults in `.env.example`
- [ ] Stable build ID (git hash or package version)
- [ ] CI reproducibility check (`git diff --exit-code dist/`)

Forbidden:
- [ ] No timestamps in build output
- [ ] No random identifiers in build output
- [ ] No environment-coupled build behavior
- [ ] No platform-dependent paths in build config
- [ ] No network-dependent build steps
- [ ] No uncommitted build configuration
- [ ] No source-modifying build steps
- [ ] No missing lockfile

Severity mapping:
- P0: environment-dependent output, timestamps in bundle, random identifiers, platform-dependent output
- P1: missing env defaults, uncommitted .env.local, network-dependent build
- P2: legacy non-determinism with documented reproducibility plan
- P3: fully deterministic and reproducible build

---

## Finding Format

Each finding MUST include:

```
### Finding ID
{suitename}-{nnn}

### File
{file-path}

### Invariant Violated
{invariant-doc-path}

### Severity
P0 / P1 / P2 / P3

### Violation Type
{short description}

### Evidence
{exact code snippet or config excerpt}

### Invariant Rule Violated
{invariant doc} §{Section} — {rule}

### Recommendation
{actionable remediation}

### Impact
{what breaks if not fixed}
```

---

## Severity Classification

| Severity | Meaning | Action |
|----------|---------|--------|
| P0 | Critical violation — production risk | Must fix before release |
| P1 | High violation — architectural debt | Must migrate next release |
| P2 | Transitional — documented tech debt | Allowed temporarily with plan |
| P3 | Compliant — no issues found | No action required |

---

## Output Specification

The audit report MUST include:

1. **Audit Metadata** — timestamp, commit, suite, module, invariant references
2. **Audited Files** — numbered list of files reviewed
3. **Summary** — count per severity (P0-P3)
4. **Overall Score** — per-invariant score out of 100
5. **Findings** — detailed per-finding using the Finding Format above
6. **Transitional Violations** — known documented tech debt
7. **Audit Traceability** — reference to the audit suite and report location

The report MUST be written to:

```
docs/raw/report/library-governance/latest/library-governance-{module}-{timestamp}.md
```

---

## Invariant Document Authority

When checking compliance:

- The invariant documents are the source of truth
- For each finding, reference the specific Allowed or Forbidden pattern section from the invariant document
- Do NOT override invariant rules based on perceived convenience
- Dependency findings in test fixtures are out of scope unless they reflect systemic patterns
- Build configuration in consumer templates (not core) should be flagged as advisory only
