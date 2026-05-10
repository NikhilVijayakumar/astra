# Dependency Safety Invariant

```md
# Dependency Safety Invariant

## Purpose

Astra is a production UI library with a controlled dependency surface.

All dependencies must remain auditable, minimal, actively maintained, and version-pinned. The library must not introduce risk through abandoned packages, high-severity vulnerabilities, or unpredictable transitive dependencies.

Dependency safety guarantees:
- reproducible installs across environments
- predictable upgrade paths
- minimized attack surface
- controlled bundle size
- clear licensing compliance
- long-term maintainability

---

## Architectural Rule

Dependencies must meet all safety criteria before inclusion.

A dependency is acceptable only if:
- it is actively maintained (commits within last 12 months)
- it has no known high-severity CVEs
- it is MIT, Apache 2.0, or BSD licensed
- it is pinned to a specific semver range (no wildcard `*`)
- it has a clear, documented API
- it is the minimal dependency needed (no bundled extras)

Core runtime dependencies (react, mui, axios) must be:
- version-pinned in package.json
- listed as peer dependencies where appropriate
- audited for breaking changes before upgrade

---

## Allowed Patterns

### Version-Pinned Dependencies

Allowed:

```json
{
  "dependencies": {
    "@mui/material": "7.2.0",
    "axios": "1.15.0",
    "framer-motion": "^11.18.2"
  }
}
```

Reason:
Explicit versions enable reproducible installs and controlled upgrades.

---

### Peer Dependencies for Core Libraries

Allowed:

```json
{
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@mui/material": "^7.0.0"
  }
}
```

Reason:
Consumer controls the core framework version — avoids duplicate copies.

---

### Lockfile Committed

Allowed:

```text
package-lock.json (committed to repository)
```

Reason:
Lockfile ensures bit-for-bit identical installs across all environments.

---

### Explicit Type Definitions

Allowed:

```json
{
  "dependencies": {
    "@types/react": "19.1.8",
    "@types/uuid": "10.0.0"
  }
}
```

Reason:
Type packages are explicitly declared — not relying on transitive or bundled types.

---

### Minimal Import Scope

Allowed:

```tsx
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
```

Reason:
Tree-shakeable imports allow consumers to exclude unused code.

---

## Forbidden Patterns

### Abandoned Packages

Forbidden:

```json
{
  "dependencies": {
    "unmaintained-package": "^1.0.0"
  }
}
```

where the package has no commits, releases, or issue responses in over 12 months.

Reason:
Unmaintained packages accumulate CVEs and compatibility issues.

---

### Wildcard Version Ranges

Forbidden:

```json
{
  "dependencies": {
    "some-lib": "*"
  }
}
```

Reason:
Wildcard versions produce non-reproducible installs.

---

### Duplicated Core Libraries

Forbidden:

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "peerDependencies": {
    "react": "^18.0.0"
  }
}
```

where runtime and peer versions conflict.

Reason:
Duplicate React instances cause hook errors and increased bundle size.

---

### Unused Dependencies

Forbidden:

```json
{
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

where lodash is not imported anywhere in the library source.

Reason:
Every dependency increases install time, audit surface, and bundle size.

---

### High-Severity Vulnerability Introduction

Forbidden:

Any dependency with:
- known CVE with CVSS >= 7.0
- unpatched security advisory
- malicious package provenance

Reason:
Library consumers inherit all transitive vulnerabilities.

---

### Direct Dependency on Electron in Core

Forbidden:

```json
{
  "dependencies": {
    "electron": "^35.0.0"
  }
}
```

inside the core library package.json.

Reason:
Electron coupling violates platform neutrality — belongs in consumer project.

---

### Unpinned Build Tooling

Forbidden:

```json
{
  "devDependencies": {
    "vite": "^6.0.0"
  }
}
```

without lockfile commitment.

Reason:
Build tool version drift produces non-reproducible build artifacts.

---

## Detection Heuristics

### Unmaintained Packages

Detect packages in package.json where:

- last publish > 12 months ago
- no commit activity in 12 months
- open issues without response
- archived GitHub repository

---

### Known Vulnerabilities

Run:

```bash
npm audit
```

and flag:

- CRITICAL severities
- HIGH severities
- packages without fix available

---

### Duplicate Core Libraries

Detect in lockfile:

```bash
npm ls react
npm ls @mui/material
```

where multiple versions of the same core library are installed.

---

### Wildcard Version Specifiers

Detect in package.json:

```json
"*"
"x.x.x"
"latest"
```

---

### Unused Package Imports

Detect packages declared in `dependencies` that are never imported in `src/`.

---

### Large Transitive Dependency Trees

Flag packages whose transitive dependency count exceeds reasonable thresholds (>50).

---

### License Violations

Detect packages with:

- GPL/AGPL licenses (unless explicitly accepted)
- unknown or proprietary licenses
- custom licenses without review

---

## Severity Levels

### P0 — Critical

Active vulnerability or abandoned core dependency.

Examples:

- dependency with unpatched CVE >= 9.0
- core library (React, MUI, axios) abandoned
- malicious package detected

Must fix before release.

---

### P1 — High

Vulnerability or stability risk in non-core dependency.

Examples:

- dependency with CVE >= 7.0
- unmaintained transitive dependency
- duplicate core library versions
- wildcard version specifier

Must migrate within release cycle.

---

### P2 — Transitional

Unused dependency or license concern.

Examples:

- declared but unused dependency
- GPL-licensed transitive dependency
- large bundle contribution without value

Allowed temporarily with migration plan.

---

### P3 — Informational

All dependencies audited and clean.

No action required.

---

## Refactoring Guidance

### Replace Unmaintained Package

BAD:

```json
"deprecated-lib": "^1.0.0"
```

GOOD:

```json
"active-lib": "^2.0.0"
```

or implement the functionality inline if small.

---

### Pin Version Ranges

BAD:

```json
"lib": "*"
```

GOOD:

```json
"lib": "^1.2.3"
```

---

### Remove Unused Dependencies

BAD:

```json
"lodash": "^4.17.21"
```

(unused)

GOOD:

```json
// remove from dependencies
```

---

### Deduplicate Core Libraries

BAD:

```bash
npm ls react
# react@18.0.0, react@19.0.0
```

GOOD:

```json
// Align peer and runtime react versions
"peerDependencies": { "react": "^19.0.0" }
"devDependencies": { "react": "^19.0.0" }
```

---

### Replace Large Libraries With Smaller Alternatives

BAD:

```json
"moment": "^2.29.0"
```

GOOD:

```json
"dayjs": "^1.11.0"
```

or native Intl APIs if sufficient.

---

## Library Impact

Violating Dependency Safety causes:

- consumer inherits vulnerabilities
- non-reproducible installs across team members
- duplicate bundled dependencies (bloated consumer bundles)
- breaking changes from unpinned transitive updates
- audit fatigue (too many dependencies to track)
- license compliance risk
- stale security posture
- build instability from tooling drift

Without Dependency Safety:
Astra becomes a liability for consumers
instead of a trusted, auditable library dependency.

---

## Migration Notes

### Transitional Dependency Exceptions Must Include

```json
/**
 * @deprecated-dependency
 * Package: <name>
 * Version: <version>
 * Risk: <what risk>
 * Replacement: <target>
 * Removal target: <version>
 */
```

---

### Migration Strategy

1. Run `npm audit` and fix all CRITICAL and HIGH vulnerabilities
2. Remove all unused dependencies
3. Pin all version ranges (no wildcards)
4. Align peer dependencies with runtime versions
5. Replace unmaintained packages with active alternatives
6. Review transitive dependency tree for bloat
7. Commit lockfile
8. Add `npm audit` to CI pipeline

---

## Validation Requirements

The dependency set is compliant only if:

- all packages are actively maintained
- no high-severity vulnerabilities exist
- all version ranges are pinned (no wildcards)
- no unused dependencies are declared
- no duplicate core library versions exist
- all licenses are compatible
- lockfile is committed and up to date
- `npm audit` passes with no CRITICAL or HIGH items
- bundle size impact of each dependency is justified

---

## Compliance Goal

Astra must behave as:

- a minimal-dependency UI library
- an auditable dependency tree
- a CVE-monitored package set
- a reproducible install substrate

NOT:

- a vulnerability vector for consumers
- an unmaintained dependency sink
- a duplicate-library host
- a wildcard-versioned risk source
```
