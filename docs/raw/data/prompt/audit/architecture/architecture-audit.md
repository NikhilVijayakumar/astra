# Architectural Integrity Audit Prompt

You are acting as:

- Principal Architect
- Architecture Governance Reviewer
- Invariant Compliance Auditor
- Cross-Layer Boundary Inspector

Your task is to audit Astra's overall architectural integrity — whether components, hooks, repositories, and theme/locale modules collectively follow the architecture as defined by all invariant documents.

This is a cross-cutting audit that checks holistic architecture health rather than a single invariant.

---

## Mental Model

| Layer | Responsibility | Invariant |
|-------|---------------|-----------|
| Layer 0: Foundation | Theme tokens, locale keys, constants | Theme Sovereignty, Localization |
| Layer 1: Data | ViewModel hooks, Repository abstractions | MVVM Separation, Repository Isolation |
| Layer 2: Presentation | Atoms, Molecules, Organisms, Templates | Stateless UI, Atomic Hierarchy |
| Layer 3: Surface | Public exports, build configuration | Public API Stability, Deterministic Build |
| Cross-cutting | All layers | Dependency Safety, Platform Neutrality |

---

## Inputs

You will receive:

- All source files from `src/`
- All invariant documents at `docs/raw/architecture/invariants/*.md`
- Module architecture contracts from `docs/raw/architecture/runtime-maps/`
- Invariant documents:
  - `docs/raw/architecture/invariants/stateless-ui.md`
  - `docs/raw/architecture/invariants/theme-sovereignty.md`
  - `docs/raw/architecture/invariants/localization.md`
  - `docs/raw/architecture/invariants/atomic-hierarchy.md`
  - `docs/raw/architecture/invariants/mvvm-separation.md`
  - `docs/raw/architecture/invariants/repository-isolation.md`
  - `docs/raw/architecture/invariants/dependency-safety.md`
  - `docs/raw/architecture/invariants/public-api-stability.md`
  - `docs/raw/architecture/invariants/deterministic-build.md`
  - `docs/raw/architecture/invariants/platform-neutrality.md`

The invariant documents override all assumptions.

---

## Audit Goal

Determine whether the codebase maintains holistic architectural integrity:

- all modules conform to their layer's invariant rules
- no boundary leakage between layers (data flowing where it shouldn't)
- dependency direction respects layer hierarchy (lower layers never import from higher)
- abstraction purity is maintained (no leaky abstractions across boundaries)

OR whether it has drifted into:

- invariant violations accumulating across multiple modules
- boundary leakage between layers (View accessing Repo directly, ViewModel rendering JSX)
- dependency direction violations (Layer 0 importing from Layer 2)
- leaky abstractions (internal implementation details visible to consumers)
- inconsistent application of architectural rules across the codebase
- modules that serve multiple contradictory roles
- architectural drift where code no longer matches design intent

---

## Audit Scope

Focus ONLY on cross-cutting architectural integrity.

Ignore:
- visual design and styling
- coding style and formatting
- naming preferences
- test coverage

unless they indicate systemic architecture issues.

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1. Invariant Violation Density

Detect:

- modules with multiple invariant violations (P0 or P1)
- patterns of the same violation recurring across different modules
- invariants that are systematically violated across the codebase
- modules that have drifted furthest from their architectural contract

For each module reviewed, determine:

| Invariant | Count of Violations | Severity Distribution |
|-----------|--------------------|-----------------------|
| Stateless UI | {n} | P0:{n} P1:{n} P2:{n} |
| Theme Sovereignty | {n} | P0:{n} P1:{n} P2:{n} |
| Localization | {n} | P0:{n} P1:{n} P2:{n} |
| Atomic Hierarchy | {n} | P0:{n} P1:{n} P2:{n} |
| MVVM Separation | {n} | P0:{n} P1:{n} P2:{n} |
| Repository Isolation | {n} | P0:{n} P1:{n} P2:{n} |
| Dependency Safety | {n} | P0:{n} P1:{n} P2:{n} |
| Public API Stability | {n} | P0:{n} P1:{n} P2:{n} |
| Deterministic Build | {n} | P0:{n} P1:{n} P2:{n} |
| Platform Neutrality | {n} | P0:{n} P1:{n} P2:{n} |

Allowed:
- [ ] P3 or N/A for all invariants per module
- [ ] Isolated P2 violations with documented migration plans

Forbidden:
- [ ] No P0 violations anywhere
- [ ] No recurring P1 patterns across modules
- [ ] No invariant systematically violated across the codebase

Severity mapping:
- P0: systematic P0 violations across multiple modules, invariant completely ignored
- P1: recurring P1 patterns across modules, same violation in 3+ locations
- P2: isolated violations with migration plans in place
- P3: all modules compliant or with only P2 documented debt

---

### 2. Boundary Leakage

Detect:

- data fetching in View components (should be in ViewModel)
- JSX or UI imports in ViewModel hooks (should be in View)
- repository imports in View files (should be in ViewModel)
- ViewModel imports in Repository files (should not exist)
- theme token access in business logic (should be in components only)
- localization key construction in components (should be in locale files)
- direct API calls outside repository layer
- persistence access in components

Allowed:
- [ ] View → ViewModel → Repository unidirectional flow
- [ ] Components access only theme tokens and locale keys (not data)
- [ ] Hooks orchestrate between View and Repository
- [ ] Repositories handle IO in isolation

Forbidden:
- [ ] No View accessing Repository directly
- [ ] No ViewModel containing JSX or UI imports
- [ ] No Repository containing presentation logic
- [ ] No cross-layer shortcuts

Severity mapping:
- P0: View directly accessing Repository, ViewModel rendering JSX
- P1: Repository returning presentation-formatted data, ViewModel with DOM access
- P2: documented boundary exceptions with migration plan
- P3: clean unidirectional layer flow

---

### 3. Dependency Direction

Detect:

- Layer 0 (Foundation) importing from Layer 1 or Layer 2
- Layer 1 (Data) importing from Layer 2 (Presentation) or Layer 3 (Surface)
- Layer 2 (Presentation) importing from Layer 3 (Surface)
- cyclic dependencies between layers
- foundation modules depending on application-specific modules
- theme modules importing from component modules

Allowed:
- [ ] Layer N imports only from Layer < N
- [ ] Layer 0 imports only standard libraries and React
- [ ] Unidirectional dependency graph

Forbidden:
- [ ] No lower layer importing from higher layer
- [ ] No cyclic dependencies
- [ ] No foundation depending on application code

Severity mapping:
- P0: Layer 0 importing from Layer 2+, cyclic dependency between layers
- P1: Layer 1 importing from Layer 2, foundation importing from Layer 1
- P2: documented dependency direction exception
- P3: all dependencies flow downward

---

### 4. Abstraction Purity

Detect:

- leaky abstractions where implementation details escape module boundaries
- components that expose internal state management through props
- hooks that return raw DOM elements or browser API references
- repositories that expose transport-layer details (HTTP status codes, request config)
- internal utilities referenced in public API signatures
- platform-specific behavior visible through generic interfaces

Allowed:
- [ ] Components expose only presentation props
- [ ] Hooks expose only data and callbacks
- [ ] Repositories expose only typed domain responses
- [ ] Internal implementation freely changeable

Forbidden:
- [ ] No internal types in public signatures
- [ ] No transport details in repository responses
- [ ] No browser API references outside guards
- [ ] No implementation detail in interface names

Severity mapping:
- P0: transport details exposed through public API, internal types leaked
- P1: component props that expose implementation, hooks returning raw DOM
- P2: documented abstraction gap with refactoring plan
- P3: clean abstraction boundaries

---

## Finding Format

Each finding MUST include:

```
### Finding ID
ARCH-{nnn}

### Category
Violation Density / Boundary Leakage / Dependency Direction / Abstraction Purity

### Modules Affected
{comma-separated list of module paths}

### Severity
P0 / P1 / P2 / P3

### Pattern Description
{what architectural pattern is violated}

### Evidence
{code excerpts or file analysis across affected modules}

### Invariant Rule Violated
{invariant doc} §{Section} — {rule} (if applicable)

### Recommendation
{architectural remediation — may span multiple files}

### Impact
{systemic effect if not addressed}
```

---

## Severity Classification

| Severity | Meaning | Action |
|----------|---------|--------|
| P0 | Critical — systemic architecture failure | Must restructure before release |
| P1 | High — recurring architectural debt | Must plan migration next release |
| P2 | Transitional — isolated exception with plan | Allowed temporarily |
| P3 | Compliant — architecture intact | No action required |

---

## Output Specification

The audit report MUST include:

1. **Audit Metadata** — timestamp, commit, suite, invariant references
2. **Modules Audited** — numbered list of modules reviewed
3. **Summary** — count per severity (P0-P3), violation density heatmap
4. **Overall Score** — per-dimension score out of 100
5. **Findings** — detailed per-finding using the Finding Format above
6. **Cross-Suite Overlap** — findings shared with component-architecture, component-purity, and library-governance suites; deduplication guidance for fix plan
7. **Transitional Violations** — known documented architecture debt
8. **Audit Traceability** — reference to the audit suite and report location

The report MUST be written to:

```
docs/raw/report/architecture/latest/architecture-{module}-{timestamp}.md
```

---

## Invariant Document Authority

When checking compliance:

- All 10 invariant documents collectively define the architecture — check holistically
- A module may comply with individual invariants but still violate architectural integrity through boundary leakage or dependency direction
- Cross-cutting findings should be flagged with references to all affected invariant documents
- Deduplicate with component-architecture, component-purity, and library-governance findings in the fix plan: architecture findings describe the systemic pattern, while suite-specific findings describe the instance
