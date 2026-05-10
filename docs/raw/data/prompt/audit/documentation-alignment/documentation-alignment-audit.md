# Documentation Alignment Audit Prompt

You are acting as:

- Technical Documentation Auditor
- API Surface Documentarian
- Implementation-Verification Reviewer
- README and Wiki Quality Reviewer

Your task is to audit Astra's documentation for alignment with the actual codebase.

This is a standalone audit suite — it checks whether documentation accurately reflects the implementation, not whether specific invariants are violated.

---

## Mental Model

| Documentation Source | Purpose | Authority Level |
|---------------------|---------|-----------------|
| `docs/raw/` | Architecture governance, invariants, prompts, templates | Authoritative — source of truth |
| `docs/wiki/` | Generated user-facing documentation | Must match code and raw docs |
| `docs/report/` | Generated audit reports | Derived from code state at audit time |
| JSDoc / TSDoc comments | Inline API documentation | Must match implementation |
| README.md | Project overview, getting started | Must be accurate and up to date |
| `package.json` description | Package registry listing | Must match README scope |

---

## Inputs

You will receive:

- All generated documentation: `docs/wiki/`, `docs/report/`
- All raw documentation: `docs/raw/`
- All source files from `src/`
- README.md at project root
- `package.json` description field
- JSDoc/TSDoc comments in source files
- Changelog (if available)

---

## Audit Goal

Determine whether the documentation accurately reflects the codebase:

- all documented public APIs actually exist in the source
- no undocumented public APIs (exports without documentation)
- JSDoc comments match actual function signatures, parameters, and return types
- architecture diagrams and descriptions match actual code structure
- README claims are verifiable against the implementation
- generated wiki content matches the current state of source and raw docs
- changelog entries correspond to actual changes in the repository
- invariants documented in raw docs are actually enforced or verifiable
- deprecated APIs are marked as deprecated in both code and documentation
- examples in documentation compile and work with current API

---

## Audit Scope

Focus ONLY on documentation-to-code alignment.

Ignore:
- writing style and grammar
- documentation completeness (coverage is separate from alignment)
- visual design of documentation pages
- internal implementation details not intended for documentation

unless they contribute to misalignment between documentation and code.

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1. Public API Documentation Alignment

Detect:
- exported functions/components/types in `src/lib.ts` without JSDoc comments
- JSDoc `@param` names that don't match actual parameter names
- JSDoc `@returns` that don't match actual return type
- documented `@example` code that doesn't compile against current API
- `@deprecated` markers in code without matching deprecated notice in docs
- removed exports still referenced in documentation
- renamed exports still referenced by old name in docs

Allowed:
- [ ] Every public export has a JSDoc comment
- [ ] @param tags match actual parameter names and types
- [ ] @returns tag matches actual return type
- [ ] @deprecated tags have removal version and replacement
- [ ] Examples compile against current API surface

Forbidden:
- [ ] No public export without documentation
- [ ] No mismatch between JSDoc and implementation
- [ ] No documentation referencing removed or renamed APIs
- [ ] No undocumented breaking changes

Severity mapping:
- P0: documented API that doesn't exist in code, documentation claiming features not implemented
- P1: missing JSDoc on public export, @param/@returns mismatch, @deprecated without docs update
- P2: stale examples that need minor updates, changelog gaps
- P3: all public APIs documented and accurate

---

### 2. Architecture Documentation Alignment

Detect:
- `docs/raw/architecture/` descriptions that don't match actual code structure
- invariant documents that describe rules not actually followed or enforceable
- component tier classifications in docs that don't match actual file locations
- mental model descriptions that contradict actual implementation patterns
- architectural decision records (ADRs) that no longer reflect current design
- runtime maps that reference modules or patterns not present in code

Allowed:
- [ ] Architecture docs match code structure
- [ ] Invariant rules are actually enforceable against the codebase
- [ ] Component classifications match actual tier placement
- [ ] ADRs accurately reflect current decisions

Forbidden:
- [ ] No architecture doc describing code that doesn't exist
- [ ] No invariant rule that can't be checked against code
- [ ] No misclassified components in documentation
- [ ] No superseded ADRs without updated status

Severity mapping:
- P0: architecture docs describing features or structure that don't exist
- P1: invariant rules that aren't actually enforceable, misclassified documentation
- P2: ADRs not updated to reflect current decisions
- P3: architecture docs fully aligned with codebase

---

### 3. README & Package Documentation Alignment

Detect:
- README claims about features that don't exist in code
- README installation instructions that don't work (wrong package name, wrong import paths)
- `package.json` description that doesn't match README scope
- README examples that reference removed or renamed APIs
- README version compatibility matrix that's inaccurate
- badging or status indicators that don't reflect reality

Allowed:
- [ ] README features are implemented in code
- [ ] Installation instructions produce a working setup
- [ ] Examples use current API surface
- [ ] Description accurately reflects library purpose

Forbidden:
- [ ] No feature claims without implementation
- [ ] No broken installation instructions
- [ ] No examples using removed APIs
- [ ] No inaccurate version compatibility claims

Severity mapping:
- P0: README claims features that don't exist at all, installation instructions broken
- P1: README examples using renamed/deprecated APIs, inaccurate version matrix
- P2: stale feature descriptions that need rewording
- P3: README fully aligned with implementation

---

### 4. Generated Wiki Alignment

Detect:
- wiki content referencing APIs or features that have changed
- wiki examples that produce TypeScript/compilation errors
- wiki component documentation showing incorrect props
- wiki pages for removed or renamed modules
- wiki content contradicting raw architecture docs

Allowed:
- [ ] Wiki examples compile with current codebase
- [ ] Wiki prop tables match actual component interfaces
- [ ] Wiki module list matches current source tree

Forbidden:
- [ ] No wiki references to removed modules
- [ ] No wiki examples that fail to compile
- [ ] No wiki prop documentation that differs from source

Severity mapping:
- P0: wiki documentation of non-existent features or components
- P1: wiki prop tables incorrect, wiki examples failing
- P2: wiki content with minor inaccuracies
- P3: wiki fully aligned with source

---

## Finding Format

Each finding MUST include:

```
### Finding ID
DOC-{nnn}

### File
{doc-file-path}

### Source File
{source-file-path (if applicable)}

### Category
API Docs / Architecture Docs / README / Wiki

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
| P0 | Critical — documentation is misleading or wrong | Consumer will fail or be misled |
| P1 | High — significant documentation gap or inaccuracy | Causes confusion or incorrect usage |
| P2 | Moderate — minor inaccuracy or staleness | Should fix, low urgency |
| P3 | Compliant — documentation matches code | No action required |

---

## Output Specification

The audit report MUST include:

1. **Audit Metadata** — timestamp, commit, suite, documentation sources reviewed
2. **Audited Documents** — numbered list of documentation files reviewed
3. **Summary** — count per severity (P0-P3)
4. **Overall Score** — per-category score out of 100
5. **Findings** — detailed per-finding using the Finding Format above
6. **Transitional Violations** — known documentation debt with plan
7. **Audit Traceability** — reference to the audit suite and report location

The report MUST be written to:

```
docs/raw/report/documentation-alignment/latest/documentation-alignment-{module}-{timestamp}.md
```

---

## Invariant Authority

When checking compliance:

- The source code is the ultimate authority — documentation must match it, not the reverse
- Architecture documents in `docs/raw/architecture/` are authoritative design intent — if code diverges from them, flag misalignment rather than assume doc error
- Generated wiki content should be regenerated from current raw docs and code, not hand-edited
- README is a living document — flag any claim that cannot be verified against the codebase
