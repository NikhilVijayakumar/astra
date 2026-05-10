# Governance Law Generator

> Generates constitutional governance for Astra's dependency, security, and build ecosystems.
>
> This is **ecosystem risk management** — defines supply-chain trust, runtime safety, and build integrity as machine-verifiable law.
>
> Success chain: features &rarr; invariants &rarr; governance &rarr; audit

---

## Role Definition

You are acting as:

- **Governance Architect** — defines constitutional rules for ecosystem trust
- **Supply-Chain Security Governor** — enforces dependency hygiene, pinning, and provenance
- **Runtime Safety Inspector** — detects and prevents forbidden API usage and exploit surfaces
- **Build Integrity Verifier** — ensures deterministic, stable, reproducible builds

---

## Mental Model

### Why Governance Exists

Modern frontend systems are **dependency ecosystems**, not merely codebases.

In older systems: you wrote most code yourself.
Today: most code executes from npm.

Meaning: **your dependencies are part of your runtime.**

Governance exists to control ecosystem risk across three pillars:

### A. Dependency Governance — Supply-Chain Law

A React app may contain 500–2000 transitive packages. Many are abandoned, vulnerable, malicious, or poorly maintained.

**Rules:**
- No package unmaintained > 2 years
- No package with high CVE risk
- No package with unknown ownership
- No package duplicating runtime purpose
- Critical runtime packages must use pinned versions

Why pinning? Because `^1.2.0` can silently introduce breaking behavior, malicious updates, or supply-chain compromise.

**Dependency governance is ecosystem trust management.**

### B. Security Governance — Runtime Safety Law

Defines forbidden APIs, unsafe patterns, and exploit surfaces.

**Rules:**
- No `eval()`
- No `Function()`
- No unsafe HTML injection
- No unrestricted IPC
- Renderer cannot contain secrets (renderer is untrusted execution environment)

**Security governance formalizes threat models.**
Instead of "be careful," you get machine-verifiable security law.

### C. Build Governance — Deterministic Runtime Law

The build system is part of the runtime, not merely tooling.

**Without governance:**
- outputs change unexpectedly
- exports break
- type generation fails
- bundles drift

**Rules:**
- Build outputs must generate stable types
- Build outputs must preserve public API
- Build outputs must support ESM + UMD
- Build outputs must avoid environment-coupled behavior

**Deterministic build means:** Same source → same output, always.

### Why This Is Important For Libraries

Clients depend on stable exports, stable typing, stable module resolution. Build instability becomes platform instability.

---

## Idempotency Logic

Before generating, check existence of output files:

```
FOR EACH FILE in docs/raw/governance/:
  read it
  read the governance idea from docs/raw/data/prompt/governance/idea.md
  read invariant documents from docs/raw/architecture/invariants/
  read source code from src/
  diff: compare governance rules against invariants AND source code
  IF concept drift (missing rules, weak enforcement, gaps):
    RESTRUCTURE: reframe around constitutional governance law
    PRESERVE: valid rules, audit patterns, severity tables
    REPLACE: vague guidance with machine-verifiable rules
    OPTIMIZE: merge duplicate rules across governance files
    APPEND: new governance law, detection heuristics, severity mapping
    FLAG: gaps between invariants and governance coverage
    UPDATE: Last Reviewed date
  ELSE:
    partial update — apply only changed sections

IF NEITHER EXISTS:
  fresh generation from scratch
```

---

## Update Requirements

When updating existing governance documents:

- preserve valid rules, severity tables, and audit patterns
- reframe vague guidance ("be careful") as machine-verifiable law
- add detection heuristics (ripgrep commands) for every rule
- append severity levels (P0–P3) to every rule
- do NOT remove working policies — annotate them with enforcement context
- update Last Reviewed date on every pass
- if a previous rule was weak, replace with stronger, verifiable equivalent
- if a gap between invariant documents and governance is found, flag it

---

## Input Files to Read

Read ALL of these before generating:

### Core Concept

1. `docs/raw/data/prompt/governance/idea.md` — the foundational concept: dependency supply-chain, security governance, build integrity

### Invariant Documents (governance source of truth)

2. `docs/raw/architecture/invariants/dependency-safety.md` — dependency audit rules
3. `docs/raw/architecture/invariants/platform-neutrality.md` — platform assumption rules
4. `docs/raw/architecture/invariants/deterministic-build.md` — build determinism rules
5. `docs/raw/architecture/invariants/public-api-stability.md` — public surface stability
6. `docs/raw/architecture/invariants/theme-sovereignty.md` — theme enforcement rules
7. `docs/raw/architecture/invariants/localization.md` — localization enforcement
8. `docs/raw/architecture/invariants/stateless-ui.md` — UI statelessness rules
9. `docs/raw/architecture/invariants/mvvm-separation.md` — MVVM boundary rules
10. `docs/raw/architecture/invariants/repository-isolation.md` — repository isolation rules
11. `docs/raw/architecture/invariants/atomic-hierarchy.md` — atomic tier rules

### Architecture Reference

12. `docs/raw/data/template/mental_model.md` — layer architecture model
13. `docs/raw/data/template/audit_report_template.md` — audit report format

### Source Implementation (what Astra actually does)

14. `package.json` — dependency declarations
15. `src/lib.ts` or equivalent — public export surface
16. `src/common/` — component and hook implementations
17. `vite.config.ts` or equivalent — build configuration
18. `package-lock.json` or `yarn.lock` — lockfile audit

### Existing Governance (if any)

19. `docs/raw/governance/*.md` — existing governance documents (if they exist)

---

## Cross-Validation: Invariants vs Source vs Governance

Before generating governance rules, you MUST cross-validate invariant documents against actual source code AND existing governance. Discrepancies must be surfaced.

### Governance Gap Validation

For each of the three pillars, check:

| Check | What to Verify |
|-------|---------------|
| Rule coverage | Does the invariant have a corresponding governance rule? |
| Enforcement | Is the rule machine-verifiable (ripgrep, audit script)? |
| Severity assigned | Does the rule have P0–P3 severity? |
| Source compliance | Does the actual source violate the rule? |
| Gap identified | If invariant exists but no governance rule, flag it |

### Cross-Reference Output

When discrepancies are found, include them:

```
## Governance-Implementation Discrepancies

### {pillar / file}
- **Issue:** {description of discrepancy}
- **Invariant says:** {what the invariant document specifies}
- **Governance rule says:** {what the governance document specifies}
- **Implementation does:** {what source code actually does}
- **Severity:** {P0/P1/P2/P3}
- **Recommendation:** {fix governance, fix code, or add rule?}
```

---

## Output File 1: `governance.md`

Write to: `docs/raw/governance/governance.md`

This is the **constitutional overview** — the top-level governance document that defines the three pillars, severity framework, and authority hierarchy. Create this file if it doesn't exist. If it exists, read and merge updates.

### Section 1: Purpose

Define Governance as Astra's constitutional layer for ecosystem risk management. State that it covers three pillars: dependency trust, runtime safety, and build integrity. Reference that governance turns "be careful" into machine-verifiable law.

### Section 2: The Three Pillars

Describe the three pillars from the mental model:

```
Dependency Governance  —  Security Governance  —  Build Governance
     (supply-chain)         (runtime safety)       (determinism)
```

Each pillar is a separate output file with detailed rules.

### Section 3: Severity Framework

| Level | Meaning | Action Required |
|-------|---------|-----------------|
| P0 | Critical governance violation — active exploit, compromised dependency, broken build | Must fix immediately |
| P1 | High governance risk — vulnerable pattern, unpinned critical dep, non-deterministic build | Must fix next release |
| P2 | Transitional — legacy violation with documented migration | Allowed temporarily |
| P3 | Compliant — governance rules respected | No action required |

**P0 examples:**
- Package with known critical CVE in production
- `eval()` or `Function()` in production code
- Renderer contains secrets or raw Electron APIs
- Lockfile missing or ignored
- Build output differs between environments

**P1 examples:**
- Package unmaintained > 2 years
- Unpinned critical runtime dependency
- No type generation in build
- Duplicate runtime-purpose packages
- Hardcoded API keys or tokens

**P2 examples:**
- Legacy dependency with documented migration plan
- Temporary build non-determinism with tracking issue

**P3 examples:**
- All dependencies audited and pinned
- Clean security scan with no forbidden APIs
- Deterministic build verified in CI

### Section 4: Authority Hierarchy

```
Constitutional Layer (this document)
    ↓ defines scope
Pillar Laws (dependency.md, security.md, build.md)
    ↓ defines rules
Invariant Documents (docs/raw/architecture/invariants/)
    ↓ defines non-negotiable system truths
Source Code (src/)
    ↓ must comply with all layers
```

Governance rules derive from invariants but are more actionable. Invariants say "what," governance says "how to enforce."

### Section 5: Cross-Pillar Mapping

| Invariant Document | Governance Pillar | Governance File |
|--------------------|-------------------|-----------------|
| `dependency-safety.md` | Dependency | `dependency.md` |
| `platform-neutrality.md` | Security | `security.md` |
| `deterministic-build.md` | Build | `build.md` |
| `public-api-stability.md` | Build | `build.md` |
| `theme-sovereignty.md` | Security | `security.md` |
| `localization.md` | Security | `security.md` |
| `stateless-ui.md` | Security | `security.md` |
| `mvvm-separation.md` | Security | `security.md` |
| `repository-isolation.md` | Security | `security.md` |
| `atomic-hierarchy.md` | Security | `security.md` |

---

## Output File 2: `dependency.md`

Write to: `docs/raw/governance/dependency.md`

This is the **supply-chain trust law** — defines rules for package hygiene, pinning, provenance, and audit automation.

### Section 1: Purpose

Define Dependency Governance as Astra's supply-chain trust management system. State rules for package selection, pinning, maintenance, and vulnerability management.

### Section 2: Package Trust Rules

**Rule 1 — Maintenance Threshold:**
No package may be used if unmaintained > 2 years (no commits, releases, or responses to issues).

**Rule 2 — CVE Threshold:**
No package with open high/critical CVE in production dependencies.

**Rule 3 — Ownership Transparency:**
No package with unknown or unverifiable ownership.

**Rule 4 — Purpose Uniqueness:**
No package duplicating the runtime purpose of another dependency.

**Rule 5 — Version Pinning:**
All critical runtime dependencies must use pinned versions (`1.2.3` not `^1.2.3`).

**Rule 6 — Lockfile Integrity:**
Lockfile (`package-lock.json` or `yarn.lock`) must be committed and verified.

**Rule 7 — Provenance Verification:**
Published packages should have verifiable provenance (npm provenance, sigstore).

### Section 3: Severity Assignment

| Rule | Default Severity | Rationale |
|------|-----------------|-----------|
| Maintenance Threshold | P1 | Risk of unpatched vulnerabilities over time |
| CVE Threshold | P0 | Active known vulnerability |
| Ownership Transparency | P1 | Risk of malicious takeover |
| Purpose Uniqueness | P1 | Bloat and confusion |
| Version Pinning | P1 | Risk of silent breaking changes |
| Lockfile Integrity | P0 | Supply-chain attack vector |
| Provenance Verification | P2 | Best practice, not always available |

### Section 4: Detection Heuristics

**Unmaintained packages (check manually or via npm info):**
```
npm view {package} time 2>$null | Select-Object -Last 1
```

**Known CVEs:**
```
npm audit --production
```

**Unpinned critical dependencies:**
```
rg "(?<!\")@?[a-z-]+: \"\^" package.json
```

**Lockfile missing:**
```
if (-not (Test-Path package-lock.json)) { Write-Output "MISSING LOCKFILE: P0" }
```

**Duplicate purpose packages:**
```
# Manually review for overlapping functionality in package.json dependencies
```

**Ownership verification:**
```
npm view {package} maintainer
```

### Section 5: Audit Automation

```
# CI governance check script
npm audit --production
if ($LASTEXITCODE -ne 0) { exit 1 }

# Verify lockfile exists
if (-not (Test-Path package-lock.json)) { exit 1 }

# Check pinned versions
$violations = rg "(?<!\")@?[a-z-]+: \"\^" package.json
if ($violations) { Write-Output "UNPINNED: $violations"; exit 1 }
```

### Section 6: Remediation

**Replace unmaintained package:**
```bash
npm remove {unmaintained-package}
npm install {replacement-package}
```

**Pin a version:**
Edit `package.json`: `"{package}": "{exact-version}"` (remove `^` or `~`).

**Address CVE:**
```bash
npm audit fix --production
# If no fix available, evaluate: replace or accept risk with documented exception
```

---

## Output File 3: `security.md`

Write to: `docs/raw/governance/security.md`

This is the **runtime safety law** — defines forbidden APIs, unsafe patterns, exploit surfaces, and runtime-specific security contracts.

### Section 1: Purpose

Define Security Governance as Astra's runtime safety law. Formalize threat models into machine-verifiable rules covering forbidden APIs, renderer security, IPC safety, and data handling.

### Section 2: Forbidden APIs

| API | Severity | Why |
|-----|----------|-----|
| `eval()` | P0 | Arbitrary code execution |
| `new Function()` | P0 | Arbitrary code execution |
| `setTimeout(string)` | P0 | String-based code execution |
| `setInterval(string)` | P0 | String-based code execution |
| `document.write()` | P1 | Unsafe HTML injection |
| `innerHTML` (with user input) | P1 | XSS vector |
| `dangerouslySetInnerHTML` | P1 | XSS vector (React) |
| `ipcRenderer` exposed to renderer | P0 | Unrestricted IPC access |
| `remote` module (Electron) | P0 | Full system access from renderer |
| `nodeIntegration: true` | P0 | Renderer has Node.js access |
| `contextIsolation: false` | P0 | Renderer shares context with preload |

### Section 3: Renderer Security Contract

**The renderer is an untrusted execution environment.**

Rules:
- Renderer MUST NOT contain secrets (API keys, tokens, passwords)
- Renderer MUST NOT access filesystem directly
- Renderer MUST NOT access Node.js/Electron APIs directly
- Renderer MUST NOT execute shell commands
- All privileged operations MUST go through validated IPC via preload
- `contextIsolation` MUST be `true`
- `nodeIntegration` MUST be `false`

**Violation examples:**
```tsx
// P0 — secret in renderer
const API_KEY = "sk-1234567890abcdef";

// P0 — Node.js access in renderer
const fs = window.require("fs");

// P0 — direct Electron API in renderer
const { ipcRenderer } = window.require("electron");
```

### Section 4: IPC Security Contract

Rules:
- Every IPC channel MUST have a documented contract
- Every IPC payload MUST be validated before processing
- Main process MUST NOT trust renderer input without validation
- Preload MUST NOT expose raw `ipcRenderer` or `remote`
- High-risk IPC (file access, database, shell) MUST have path/input allowlist validation

### Section 5: Data Security Rules

- No hardcoded secrets in source code
- No API keys in client-side bundles
- No tokens in localStorage without encryption
- No sensitive data in URL parameters
- All network requests MUST use HTTPS in production

### Section 6: Detection Heuristics

**Forbidden APIs:**
```
rg "(?:eval|new Function|setTimeout\s*\(\s*['\"`]|setInterval\s*\(\s*['\"`]|document\.write)" src/
```

**innerHTML with dynamic input:**
```
rg "innerHTML\s*=" src/common/components/ | grep -v "innerHTML\s*=\s*['\"`][^'\"`]*['\"`]$"
```

**Renderer containing secrets:**
```
rg "(?:API_KEY|SECRET|PASSWORD|TOKEN)\s*=" src/common/components/ src/features/
```

**nodeIntegration enabled:**
```
rg "nodeIntegration.*true" electron/ main/
```

**contextIsolation disabled:**
```
rg "contextIsolation.*false" electron/ main/
```

**Renderer accessing Node APIs:**
```
rg "(?:require\s*\(|process\.|fs\.)" src/common/components/ src/features/
```

**IP validation:**
Check that IPC channels are scoped, not raw:
```
rg "exposeInMainWorld.*ipcRenderer" src/preload/
```

### Section 7: Remediation

**Remove eval():**
```ts
// BAD
const result = eval(`(${userInput})`);

// GOOD
const result = JSON.parse(userInput);
// Or use a proper expression parser
```

**Remove secrets from renderer:**
```ts
// BAD
const API_KEY = "sk-...";
fetch(`https://api.example.com/data?key=${API_KEY}`);

// GOOD — proxy through backend
fetch("/api/proxy/data");
// Server-side adds the API key, never exposed to client
```

**Secure IPC:**
```ts
// BAD — raw IPC exposed
contextBridge.exposeInMainWorld("electron", { ipcRenderer });

// GOOD — scoped methods
contextBridge.exposeInMainWorld("app", {
  readConfig: () => ipcRenderer.invoke("read-config"),
  saveConfig: (data) => ipcRenderer.invoke("save-config", validate(data))
});
```

---

## Output File 4: `build.md`

Write to: `docs/raw/governance/build.md`

This is the **deterministic runtime law** — defines rules for build integrity, type stability, export surface governance, and CI verification gates.

### Section 1: Purpose

Define Build Governance as Astra's deterministic runtime law. State rules for stable builds, type generation, public API preservation, and environment-independent outputs.

### Section 2: Build Determinism Rules

**Rule 1 — Reproducible Outputs:**
Same source commit MUST produce identical build output regardless of environment.

**Rule 2 — Stable Type Generation:**
Type definitions MUST be generated and stable across builds. Type changes MUST be intentional.

**Rule 3 — Public API Preservation:**
Public exports MUST NOT change between patch versions. Breaking changes require minor/major version bump.

**Rule 4 — Format Support:**
Build output MUST support ESM (`.mjs` or `module` in package.json) and UMD/CJS (`.js` or `require`).

**Rule 5 — Environment Independence:**
Build output MUST NOT vary based on OS, Node version, or environment variables.

**Rule 6 — Lockfile Verification:**
Build MUST fail if lockfile is out of sync with package.json.

### Section 3: Severity Assignment

| Rule | Default Severity | Rationale |
|------|-----------------|-----------|
| Reproducible Outputs | P1 | Trust erosion, debugging confusion |
| Stable Type Generation | P2 | Causes downstream build failures |
| Public API Preservation | P0 | Breaking changes break consumers |
| Format Support | P2 | Platform compatibility |
| Environment Independence | P1 | Non-reproducible builds |
| Lockfile Verification | P1 | Supply-chain drift |

### Section 4: Detection Heuristics

**Non-deterministic build detection:**
```bash
# Build twice, compare outputs
npm run build
Get-ChildItem dist/ -Recurse | ForEach-Object { $hash = Get-FileHash $_.FullName; "$($hash.Hash) $($_.Name)" } > build1.txt
npm run build
Get-ChildItem dist/ -Recurse | ForEach-Object { $hash = Get-FileHash $_.FullName; "$($hash.Hash) $($_.Name)" } > build2.txt
diff build1.txt build2.txt
```

**Public API changes:**
```bash
# Compare exported symbols between versions
rg "^export" src/lib.ts > exports-current.txt
# Compare with previous version's exports
git show HEAD~1:src/lib.ts | rg "^export" > exports-previous.txt
diff exports-previous.txt exports-current.txt
```

**Lockfile sync check:**
```bash
npm ci  # fails if lockfile out of sync
```

**Type stability:**
```bash
# Check if type generation is deterministic
npx tsc --declaration --emitDeclarationOnly --outDir types-temp1
# Build again and compare
```

### Section 5: Build CI Gates

```
# CI governance gate script
steps:
  - npm ci
  - npm run lint
  - npm run typecheck
  - npm run build
  - npm test
  - # Lockfile sync check
  - npm ci  # must succeed without changes
  - # Verify exports haven't broken (patch version)
  - node scripts/verify-exports.js
```

### Section 6: Remediation

**Fix non-deterministic build:**
```bash
# Identify source of non-determinism
# Common causes:
# - Timestamps in build output (configure TZ, SOURCE_DATE_EPOCH)
# - Random/date-based IDs
# - File system ordering (use deterministic sort)
# - Environment variables leaking into output
```

**Stabilize public API:**
```bash
# Before adding a new export, check if it should be public or internal
# Public exports go in src/lib.ts or package.json "exports"
# Internal code stays in src/internal/ or marked @internal
```

---

## Verification Commands

After generating, run these commands to verify:

### 1. Forbidden API usage
```
rg "(?:eval|new Function|setTimeout\s*\(\s*['\"`]|setInterval\s*\(\s*['\"`]|document\.write)" src/
```

### 2. Secrets in renderer code
```
rg "(?:API_KEY|SECRET|PASSWORD|TOKEN|sk-[a-zA-Z0-9]+)\s*=" src/common/components/ src/features/
```

### 3. Renderer accessing Node/Electron APIs
```
rg "(?:require\s*\(['\"`]electron['\"`]|process\.|fs\.)" src/common/components/
```

### 4. Unpinned critical dependencies
```
rg "(?<!\")@?[a-z-]+: \"\^" package.json
```

### 5. Lockfile integrity
```
if (-not (Test-Path package-lock.json)) { Write-Output "MISSING LOCKFILE" }
```

### 6. nodeIntegration / contextIsolation
```
rg "nodeIntegration.*true" electron/ main/
rg "contextIsolation.*false" electron/ main/
```

### 7. Governance document coverage
```
# Verify all three pillars are documented
$files = @("governance.md", "dependency.md", "security.md", "build.md")
foreach ($f in $files) {
  $path = "docs/raw/governance/$f"
  if (-not (Test-Path $path)) { Write-Output "MISSING: $path" }
}
```

### 8. Cross-reference against invariants
```
# Verify each invariant maps to a governance rule
Get-ChildItem docs/raw/architecture/invariants/*.md -Exclude idea.md | ForEach-Object {
  $name = $_.BaseName
  $found = rg -l $name docs/raw/governance/*.md 2>$null
  if (-not $found) { Write-Output "UNMAPPED INVARIANT: $name has no governance rule" }
}
```

---

## Output Paths

```
docs/raw/governance/governance.md       (create — constitutional overview)
docs/raw/governance/dependency.md       (create — supply-chain trust law)
docs/raw/governance/security.md         (create — runtime safety law)
docs/raw/governance/build.md            (create — deterministic runtime law)
```

---

## Prompt Metadata

| Field | Value |
|-------|-------|
| Prompt Version | `1.0` |
| Generated For | `Astra Governance System` |
| Architecture Model | `Constitutional Governance (3 Pillars)` |
| Core Concept | `docs/raw/data/prompt/governance/idea.md` |
| Mental Model | `docs/raw/data/template/mental_model.md` |
| Last Updated | `2026-05-10` |
