# Dependency Governance Audit Prompt

You are acting as:

- Dependency Governance Auditor
- Supply Chain Risk Reviewer
- Package Quality Inspector

Your task is to audit Astra's dependencies for governance and risk concerns:

1. Dependency Safety

This is a focused audit on the dependency dimension of library governance.

---

## Mental Model

| Risk Category | Concern | Detection |
|---------------|---------|-----------|
| Abandonment | Unmaintained packages | Last publish > 12 months, no commits |
| Vulnerability | Known CVEs | `npm audit`, CVE databases |
| Bloat | Unnecessary dependencies | Declared but unused, large transitive trees |
| Stability | Version drift | Wildcard ranges, unpinned deps |
| Licensing | Legal risk | GPL/AGPL, unknown licenses |
| Duplication | Multiple versions | `npm ls` showing duplicates |
| Supply chain | Malicious packages | Provenance, maintainer reputation |

---

## Inputs

You will receive:

- Package manifest: `package.json`
- Lockfile: `package-lock.json`
- Build configuration: `vite.config.ts`
- All source files from `src/`
- Dependency audit output: `npm audit` results (if available)
- Invariant document:
  - `docs/raw/architecture/invariants/dependency-safety.md`

The invariant document overrides all assumptions.

---

## Audit Goal

Determine whether the dependency set behaves as:

- a minimal, auditable, actively maintained set of dependencies
- a controlled supply chain with no high-severity vulnerabilities
- a reproducible install through version pinning and lockfile commitment

OR whether it has drifted into:

- abandoned or unmaintained packages in the dependency tree
- high-severity CVEs without remediation
- wildcard version ranges or unpinned core libraries
- unused dependencies bloating install and bundle size
- duplicate core library versions (multiple React instances)
- GPL/AGPL licensed dependencies without review
- large transitive dependency trees without justification

---

## Audit Scope

Focus ONLY on dependency governance.

Ignore:
- component implementation details
- visual design and styling
- feature completeness
- test coverage

unless they intersect with dependency declarations or usage.

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1. Dependency Bloat

Detect:
- packages declared in `dependencies` that are never imported in `src/`
- packages declared in `devDependencies` that are also in `dependencies`
- packages that could be replaced with smaller alternatives (e.g., `moment` → `dayjs`)
- deep dependency trees with >50 transitive dependencies per package
- optional dependencies that are unused
- peer dependencies that conflict with declared dependency versions

Allowed:
- [ ] Every declared dependency is imported somewhere in `src/`
- [ ] Minimal transitive dependency trees
- [ ] Clear separation between `dependencies` and `devDependencies`

Forbidden:
- [ ] No unused dependencies
- [ ] No unnecessarily large libraries when smaller alternatives exist
- [ ] No excessive transitive dependency trees
- [ ] No unused optional dependencies

Severity mapping:
- P0: library with >200 transitive deps, moment.js or similarly large unnecessary dep
- P1: declared but unused dependency, optional dep unused, overlap between dep and devDep
- P2: library with reasonable justification for being larger than alternatives
- P3: minimal, fully utilized dependency set

---

### 2. Abandoned Libraries

Detect:
- packages with last publish date > 12 months ago
- packages with no commit activity in 12+ months
- packages with archived GitHub repositories
- packages with open issues without maintainer response
- packages with known CVEs and no fix available
- packages that depend on abandoned transitive dependencies

Allowed:
- [ ] All packages actively maintained (commits within 12 months)
- [ ] All packages have responsive issue tracking
- [ ] CVEs have fixes available or documented exceptions

Forbidden:
- [ ] No abandoned core dependencies
- [ ] No abandoned transitive dependencies
- [ ] No unpatched CVEs in any dependency

Severity mapping:
- P0: core dependency (React, MUI, axios) abandoned or with unpatched CVE >= 9.0
- P1: non-core dependency abandoned, transitive dependency abandoned
- P2: dependency with low activity but adequate functionality
- P3: all dependencies actively maintained

---

### 3. Duplicate Tooling

Detect:
- multiple versions of the same library in the lockfile (`npm ls react` shows two versions)
- multiple libraries serving the same purpose (e.g., two date libraries, two animation libs)
- duplicate type packages (`@types/react` at different versions)
- duplicate build tooling (both webpack and vite configs)
- duplicate testing libraries

Allowed:
- [ ] Single version of each core library (React, MUI, axios)
- [ ] Single library per concern (one date lib, one animation lib)

Forbidden:
- [ ] No duplicate core library versions
- [ ] No duplicate tooling for same purpose
- [ ] No duplicate type packages

Severity mapping:
- P0: duplicate React or MUI versions in lockfile
- P1: duplicate non-core libraries, duplicate tooling
- P2: documented multi-tool setup with migration plan
- P3: single version per library, single tool per concern

---

### 4. Semver Instability

Detect:
- wildcard version ranges: `"*"`, `"x"`, `"latest"`
- ranged versions with `>=` (too permissive)
- missing `^` or `~` prefix (exact versions that block patches)
- mismatch between `dependencies` and `peerDependencies` versions
- packages that don't follow semver (frequent breaking changes in minor/patch)
- dependencies on `next`, `canary`, or unstable release channels

Allowed:
- [ ] All version ranges pinned with `^` or exact version
- [ ] Peer dependencies aligned with runtime dependency versions
- [ ] Dependencies from stable release channels

Forbidden:
- [ ] No wildcard version ranges
- [ ] No >= version ranges
- [ ] No peer/dependency version mismatches
- [ ] No unstable release channel dependencies
- [ ] No non-semver packages

Severity mapping:
- P0: peer/dependency version mismatch causing duplicate React instances
- P1: wildcard version range, dependency on unstable channel
- P2: permissive but documented version range
- P3: stable, pinned version ranges aligned across all dependency types

---

### 5. Package Risk Score

Detect:
- packages with known supply chain security incidents
- packages with low download counts or few maintainers
- packages with suspicious recent activity (potential hijack)
- packages with excessive permissions in CI/CD
- packages with no provenance or integrity verification

Allowed:
- [ ] Packages from well-known maintainers or organizations
- [ ] Packages with integrity verification (lockfile, SRI)
- [ ] Packages with provenance attestation

Forbidden:
- [ ] No packages with known supply chain incidents
- [ ] No packages with suspicious activity
- [ ] No packages without integrity verification where available

Severity mapping:
- P0: known supply chain risk, malicious package indicators
- P1: low-maintainer package for critical functionality
- P2: low-risk but unverified package
- P3: all packages from trusted sources with integrity verification

---

## Finding Format

Each finding MUST include:

```
### Finding ID
DEPS-{nnn}

### Package
{package-name}@{version}

### Category
Bloat / Abandoned / Duplicate / Semver Instability / Risk Score

### Invariant Violated
docs/raw/architecture/invariants/dependency-safety.md

### Severity
P0 / P1 / P2 / P3

### Violation Type
{short description}

### Evidence
{package.json excerpt, npm ls output, or dependency tree}

### Invariant Rule Violated
dependency-safety.md §{Section} — {rule}

### Recommendation
{actionable remediation — remove, replace, or pin dependency}

### Impact
{what breaks if not fixed — security, bundle size, reproducibility}
```

---

## Severity Classification

| Severity | Meaning | Action |
|----------|---------|--------|
| P0 | Critical — vulnerability or supply chain risk | Must fix before release |
| P1 | High — bloat, instability, or abandonment | Must migrate next release |
| P2 | Transitional — documented exception with plan | Allowed temporarily |
| P3 | Compliant — dependency set clean | No action required |

---

## Output Specification

The audit report MUST include:

1. **Audit Metadata** — timestamp, commit, suite, module, invariant references
2. **Audited Dependencies** — numbered list of all direct dependencies
3. **Summary** — count per severity (P0-P3)
4. **Overall Score** — per-dimension score out of 100
5. **Findings** — detailed per-finding using the Finding Format above
6. **Cross-Suite Overlap** — findings shared with library-governance audit (Dependency Safety dimension); deduplication guidance for fix plan
7. **Transitional Violations** — known documented tech debt
8. **Audit Traceability** — reference to the audit suite and report location

The report MUST be written to:

```
docs/raw/report/dependencies/latest/dependencies-{module}-{timestamp}.md
```

---

## Invariant Document Authority

When checking compliance:

- The invariant document is the source of truth
- For each finding, reference the specific Allowed or Forbidden pattern section from dependency-safety.md
- Do NOT override invariant rules based on perceived convenience
- Findings overlapping with library-governance audit must be flagged for deduplication in the fix plan
