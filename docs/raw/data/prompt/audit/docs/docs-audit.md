# Documentation Alignment Audit Prompt (Granular)

You are acting as:

- Documentation Quality Auditor
- Implementation-Verification Reviewer
- API Surface Documentarian

Your task is to audit Astra's documentation for accuracy against the codebase.

This is a granular single-domain audit focused on documentation alignment.

---

## Mental Model

| Documentation Source | Purpose | Refresh Trigger |
|---------------------|---------|-----------------|
| `docs/raw/` | Source of truth architecture docs | On any architectural change |
| `docs/wiki/` | Generated user-facing docs | On any API or feature change |
| `docs/report/` | Audit reports | After each audit run |
| JSDoc/TSDoc | Inline API documentation | On signature/behavior change |
| README.md | Project overview | On major release |
| CHANGELOG.md | Release history | On each release |
| `package.json` description | Registry listing | On scope change |

---

## Inputs

You will receive:

- All generated documentation: `docs/wiki/`, `docs/report/`
- All raw documentation: `docs/raw/architecture/`, `docs/raw/data/`, `docs/raw/feature/`
- All source files from `src/`
- README.md at project root
- CHANGELOG.md (if available)
- `package.json` description field
- JSDoc/TSDoc comments in source files

---

## Audit Goal

Determine whether the documentation accurately reflects the codebase:

- all documented APIs exist in source
- no undocumented public APIs
- JSDoc matches actual signatures
- README claims are verifiable
- CHANGELOG entries match actual changes
- generated content matches current state

---

## Audit Scope

Focus ONLY on documentation alignment.

Ignore:
- writing style and grammar
- documentation coverage breadth
- visual presentation of docs
- internal implementation details

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1. Docs vs Implementation

Detect:
- features documented in README or wiki that don't exist in source
- component APIs described in docs with different props than actual implementation
- hook return types in docs that differ from actual TypeScript signatures
- repository method signatures in docs that don't match source
- architecture descriptions in `docs/raw/architecture/` that contradict source structure
- invariant documents that describe rules not actually enforceable against the codebase
- examples in documentation that use APIs differently than they actually work

Allowed:
- [ ] All documented features exist in source
- [ ] All documented API signatures match source
- [ ] Architecture docs match source structure
- [ ] Examples compile and work correctly

Forbidden:
- [ ] No feature claims without implementation
- [ ] No API signature mismatches
- [ ] No architecture descriptions contradicting source
- [ ] No broken examples

Severity mapping:
- P0: documented feature doesn't exist in source at all
- P1: documented API signature differs from source, architecture doc contradicts source
- P2: examples that compile but use slightly different patterns
- P3: documentation fully matches implementation

---

### 2. False Claims

Detect:
- performance or bundle size claims in README that can't be verified
- compatibility claims (browser, framework, platform) that don't match actual support
- version compatibility claims that are inaccurate
- feature comparison claims (vs other libraries) that are outdated
- security claims that can't be verified against code
- deprecated features still described as current in docs

Allowed:
- [ ] All claims are verifiable against the codebase
- [ ] Compatibility claims match tested environments
- [ ] Version claims match package.json and release history

Forbidden:
- [ ] No unverifiable performance claims
- [ ] No inaccurate compatibility claims
- [ ] No misleading feature comparisons
- [ ] No deprecated features described as current

Severity mapping:
- P0: claims that are demonstrably false (feature doesn't work as described)
- P1: claims that are outdated (feature removed or changed but docs not updated)
- P2: claims that are difficult to verify but probably accurate
- P3: all claims verifiable and accurate

---

### 3. Stale Documentation

Detect:
- files in `docs/raw/` that haven't been updated in >6 months
- generated files in `docs/wiki/` that reference removed source files
- CHANGELOG missing entries for recent releases
- README year or version references that are outdated
- JSDoc `@param` names that don't match actual parameter names after refactoring
- JSDoc `@returns` descriptions that don't match actual return behavior
- `@deprecated` in JSDoc without matching deprecation notice in user-facing docs
- broken links in documentation files

Allowed:
- [ ] All docs updated within a reasonable timeframe
- [ ] Generated wiki regenerated after source changes
- [ ] CHANGELOG complete for all releases
- [ ] Deprecation notices in both code and docs

Forbidden:
- [ ] No docs more than 6 months out of date
- [ ] No stale wiki referencing removed files
- [ ] No incomplete CHANGELOG
- [ ] No hidden deprecations (code says deprecated, docs don't)
- [ ] No broken links

Severity mapping:
- P0: generated wiki referencing removed or renamed source files, hidden deprecations
- P1: raw docs not updated after architectural change, incomplete CHANGELOG
- P2: docs with minor outdated references (year, version numbers)
- P3: all documentation current

---

### 4. Missing Exports

Detect:
- public exports in `src/lib.ts` without JSDoc documentation
- public exports in `src/lib.ts` not mentioned in user-facing documentation
- new components/hooks/repos added to source but not documented anywhere
- TypeScript types/interfaces exported publicly but undocumented
- configuration options or props not documented
- callback signatures and event handlers not documented

Allowed:
- [ ] Every public export has JSDoc documentation
- [ ] Every public export is listed in user-facing docs
- [ ] New modules are documented before or with their introduction

Forbidden:
- [ ] No undocumented public exports
- [ ] No exported types without documentation
- [ ] No undocumented props or configuration options

Severity mapping:
- P0: public export with zero documentation or JSDoc
- P1: public export documented in JSDoc but not in user-facing docs
- P2: documented but with incomplete prop/parameter descriptions
- P3: all public exports fully documented

---

## Finding Format

Each finding MUST include:

```
### Finding ID
DOCS-{nnn}

### File
{doc-file-path}

### Source File
{source-file-path (if applicable)}

### Category
Docs vs Implementation / False Claims / Stale Documentation / Missing Exports

### Severity
P0 / P1 / P2 / P3

### Violation Type
{short description}

### Evidence
{excerpt from documentation}

### Current Code
{actual code or state}

### Recommendation
{actionable remediation — update doc or fix code}

### Impact
{what confusion or breakage results}
```

---

## Severity Classification

| Severity | Meaning | Action |
|----------|---------|--------|
| P0 | Critical — docs are misleading or wrong | Consumer will fail or be misled |
| P1 | High — significant documentation gap | Causes confusion or incorrect usage |
| P2 | Moderate — minor inaccuracy or staleness | Should fix, low urgency |
| P3 | Compliant — documentation matches code | No action required |

---

## Output Specification

The audit report MUST include:

1. **Audit Metadata** — timestamp, commit, suite, documentation sources reviewed
2. **Audited Documents** — numbered list of documentation files reviewed
3. **Summary** — count per severity (P0-P3)
4. **Overall Score** — per-dimension score out of 100
5. **Findings** — detailed per-finding using the Finding Format above
6. **Cross-Suite Overlap** — findings shared with documentation-alignment audit; deduplication guidance for fix plan
7. **Transitional Violations** — known documentation debt with plan
8. **Audit Traceability** — reference to the audit suite and report location

The report MUST be written to:

```
docs/raw/report/docs/latest/docs-{module}-{timestamp}.md
```

---

## Invariant Authority

When checking compliance:

- The source code is the ultimate authority — documentation must match it
- Architecture documents in `docs/raw/architecture/` are authoritative design intent — flag divergence
- Findings overlapping with the bundled documentation-alignment audit suite must be flagged for deduplication in the fix plan
