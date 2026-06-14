# Architectural Integrity Audit Prompt

You are acting as:

- Principal Architect
- Architecture Governance Reviewer
- Invariant Compliance Auditor
- Cross-Layer Boundary Inspector

Your task is to audit Astra's overall architectural integrity — whether components, hooks, repositories, and theme/locale modules collectively follow the architecture as defined by all invariant documents.

This is a cross-cutting audit that checks holistic architecture health rather than a single invariant.

---

## Understanding Astra's Role

Astra is a **stateless component library**. Its `src/` contains:
- **UI components** — atoms, molecules, organisms, templates (pure rendering, no state)
- **Library hooks** — `useDataState`, `useLanguage`, `useTheme` (infrastructure, not app ViewModels)
- **Infrastructure utilities** — `ApiService`, `AppStateHandler`, `HttpStatusCode`
- **Theme and localization systems** — tokens, providers, translation infrastructure

The architecture defines invariants that govern this library AND provides guidance for **consumers** who build stateful applications on top of Astra using the canonical feature structure.

**This audit has two tracks:**

| Track | Scope | What is audited |
|-------|-------|----------------|
| **Library Compliance** | `src/` source code and build config | Components, hooks, utilities, theme, locale, exports, dependencies |
| **Guidance Clarity** | Architecture docs in `docs/raw/architecture/` | Feature structure, MVVM guidance, integration contracts, invariants |

The architecture is **implementation-agnostic and feature-agnostic**. Audit findings must not reference specific consumer app features (e.g., flashcards, notes). The architecture remains valid regardless of which features any consumer builds.

---

## Mental Model

| Layer | Responsibility | Invariant | Audit Track |
|-------|---------------|-----------|-------------|
| Layer 0: Foundation | Theme tokens, locale keys, constants | Theme Sovereignty, Localization | Library |
| Layer 1: Data | ViewModel hooks, Repository abstractions | MVVM Separation, Repository Isolation | Guidance |
| Layer 2: Presentation | Atoms, Molecules, Organisms, Templates | Stateless UI, Atomic Hierarchy | Library |
| Layer 3: Surface | Public exports, build configuration | Public API Stability, Deterministic Build | Library |
| Cross-cutting | All layers | Dependency Safety, Platform Neutrality | Library |

---

## Inputs

You will receive:

- All source files from `src/`
- All architecture guidance documents at `docs/raw/architecture/core/*.md`
- All integration contracts at `docs/raw/architecture/integration-contracts/*.md`
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

- Architecture guidance documents:
  - `docs/raw/architecture/core/feature-structure.md` — Canonical feature module layout
  - `docs/raw/architecture/core/mvvm-pattern.md` — MVVM conceptual pattern
  - `docs/raw/architecture/core/hooks.md` — useDataState and ViewModel hooks
  - `docs/raw/architecture/core/repository.md` — Repository pattern
  - `docs/raw/architecture/core/state-management.md` — AppState and state types
  - `docs/raw/architecture/integration-contracts/react.md` — React integration guide
  - `docs/raw/architecture/integration-contracts/electron.md` — Electron integration guide
  - `docs/raw/architecture/integration-contracts/getting-started.md` — Getting started

The invariant documents override all assumptions.

---

## Audit Goal

Determine whether:

**Track A — Library Compliance**: the `src/` source code and build configuration conform to all applicable invariants (Stateless UI, Atomic Hierarchy, Theme Sovereignty, Localization, Public API Stability, Deterministic Build, Platform Neutrality, Dependency Safety). MVVM Separation and Repository Isolation should also be checked for accidental violations, though they primarily apply to consumer apps.

**Track B — Guidance Clarity**: the architecture guidance documents clearly define how consumers should build stateful features on top of Astra — without depending on any specific feature or implementation. Guidance must be:

- implementation-agnostic (valid for any consumer app)
- feature-agnostic (valid regardless of domain)
- consistent across all guidance documents
- clearly separated between library primitives and consumer responsibilities

Check whether either track has drifted into:

- invariant violations accumulating across multiple modules
- boundary leakage between layers (View accessing Repo directly, ViewModel rendering JSX)
- dependency direction violations (Layer 0 importing from Layer 2)
- leaky abstractions (internal implementation details visible to consumers)
- inconsistent application of architectural rules across the codebase
- modules that serve multiple contradictory roles
- architectural drift where code no longer matches design intent
- guidance docs that reference specific features or implementations

---

## Audit Scope

For Track A (Library Compliance), audit `src/` source code and build configuration.

For Track B (Guidance Clarity), audit architecture guidance documents at `docs/raw/architecture/core/*.md` and `docs/raw/architecture/integration-contracts/*.md`.

Focus ONLY on cross-cutting architectural integrity.

Ignore:
- visual design and styling
- coding style and formatting
- naming preferences
- test coverage

unless they indicate systemic architecture issues.

For Guidance Clarity audit, additionally ignore:
- typos or grammar in docs
- formatting preferences
- doc structure or organization
- missing unrelated documentation

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1a. Library Invariant Compliance (Track A)

Apply to `src/` source code only. Audit against the invariants that govern library code:

| Invariant | Scope | Applies To |
|-----------|-------|------------|
| Stateless UI | All components in `src/components/` | Components must be pure rendering units |
| Atomic Hierarchy | All components in `src/components/` | Each component belongs to exactly one tier |
| Theme Sovereignty | All components in `src/components/` | All styling via theme tokens |
| Localization | All components in `src/components/` | All user-facing text via translation system |
| Dependency Safety | `package.json`, `src/` imports | Dependencies pinned, auditable, minimal |
| Public API Stability | `src/lib.ts`, `package.json` exports | Only declared exports are public API |
| Deterministic Build | Build config, `src/` build output | Build produces identical output for identical inputs |
| Platform Neutrality | `src/` module scope | No Electron/Node/browser lock-in at module scope |
| MVVM Separation | `src/` source | Verify no accidental ViewModel/View mixing in library utilities |
| Repository Isolation | `src/` source | Verify no accidental repository access outside abstraction |

Detect:

- modules with multiple invariant violations (P0 or P1)
- patterns of the same violation recurring across different modules
- invariants that are systematically violated across the codebase
- modules that have drifted furthest from their architectural contract

For each module reviewed, determine:

| Invariant | Count of Violations | Severity Distribution |
|-----------|--------------------|-----------------------|
| Stateless UI | {n} | P0:{n} P1:{n} P2:{n} |
| Atomic Hierarchy | {n} | P0:{n} P1:{n} P2:{n} |
| Theme Sovereignty | {n} | P0:{n} P1:{n} P2:{n} |
| Localization | {n} | P0:{n} P1:{n} P2:{n} |
| Dependency Safety | {n} | P0:{n} P1:{n} P2:{n} |
| Public API Stability | {n} | P0:{n} P1:{n} P2:{n} |
| Deterministic Build | {n} | P0:{n} P1:{n} P2:{n} |
| Platform Neutrality | {n} | P0:{n} P1:{n} P2:{n} |
| MVVM Separation (library) | {n} | P0:{n} P1:{n} P2:{n} |
| Repository Isolation (library) | {n} | P0:{n} P1:{n} P2:{n} |

Allowed:
- [ ] P3 or N/A for all invariants per module
- [ ] Isolated P2 violations with documented migration plans
- [ ] MVVM Separation and Repository Isolation marked N/A for library-only modules (e.g., pure atoms)

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

### 1b. Guidance Completeness (Track B)

Apply to architecture guidance documents only. Evaluate whether docs provide complete, implementation-agnostic guidance for:

| Guidance Area | Key Documents | What to Check |
|---------------|--------------|---------------|
| Feature Structure | `core/feature-structure.md` | Canonical dir layout, layer responsibilities, rules |
| MVVM Pattern | `core/mvvm-pattern.md` | Conceptual MVVM, mapping to canonical structure |
| ViewModel Hooks | `core/hooks.md` | useDataState wrapping, ViewModel pattern |
| Repository Pattern | `core/repository.md` | ApiService usage, data source abstraction |
| Integration | `integration-contracts/react.md`, `electron.md`, `getting-started.md` | Framework-specific feature setup |

Detect:

- missing guidance for consumer-applicable invariants (MVVM Separation, Repository Isolation)
- guidance that references consumer-feature directories or patterns that don't exist in the canonical structure
- inconsistencies between guidance documents (different directory layouts, naming conventions)
- code examples that contradict the canonical feature structure
- guidance that assumes a specific consumer app domain or feature set
- consumer guidance that is mixed into library-level invariants without clear separation

Allowed:
- [ ] All consumer-applicable invariants have corresponding guidance in architecture docs
- [ ] Canonical feature structure is consistently referenced across all docs
- [ ] Code examples use feature-agnostic naming (e.g., `User`, `Item`)
- [ ] Guidance clearly separates library primitives from consumer responsibilities

Forbidden:
- [ ] No guidance covering consumer MVVM or Repository pattern
- [ ] Guidance documents referencing different or conflicting directory structures
- [ ] Code examples tied to a specific consumer feature domain
- [ ] Consumer responsibilities mixed into library invariant docs

---

### 2. Boundary Leakage (Track A — Library)

Audit `src/` for boundary leakage between layers. Note: Astra is a library, so its source doesn't contain consumer feature layers (ViewModel, Repository, Page components). Check instead:

- library hooks (`useDataState`, `useLanguage`, `useTheme`) importing from UI component modules
- utility modules importing from component directories
- component modules importing from data or utility layers inappropriately
- theme or locale infrastructure importing from component modules
- `ApiService` or `AppStateHandler` being used in inappropriate contexts

For guidance docs (Track B), check:
- guidance clearly separates View, ViewModel, Repository responsibilities
- code examples respect the unidirectional flow
- no guidance suggests consumers can bypass the layer separation

Allowed:
- [ ] Library hooks (useDataState, useLanguage) are pure logic — no component imports
- [ ] Components import only from theme, locale, or shared types
- [ ] Guidance docs show clear View → ViewModel → Repository flow
- [ ] Repositories are isolated from UI concerns in all examples

Forbidden:
- [ ] No library hook importing from component modules
- [ ] No component containing data access or business logic in `src/`
- [ ] No guidance suggesting cross-layer shortcuts for consumers

---

### 3. Dependency Direction (Track A — Library)

Apply the layer model to `src/`:

| Layer | Library Modules |
|-------|----------------|
| Layer 0: Foundation | Theme tokens, locale keys, constants, types |
| Layer 1: Data | Library hooks (useDataState, useLanguage), ApiService, AppStateHandler |
| Layer 2: Presentation | Components (atoms, molecules, organisms, templates) |
| Layer 3: Surface | Public exports (lib.ts), build config |

Detect:

- Layer 0 importing from Layer 1 or Layer 2
- Layer 1 importing from Layer 2 (Presentation)
- Layer 2 importing from Layer 3 (Surface)
- cyclic dependencies between layers
- foundation modules depending on application-specific modules
- theme modules importing from component modules
- internal modules importing from public barrel exports (lib.ts)

Allowed:
- [ ] Layer N imports only from Layer < N
- [ ] Layer 0 imports only standard libraries and React
- [ ] Unidirectional dependency graph
- [ ] Layer 1 (hooks) importing from Layer 0 (types, state) is allowed

Forbidden:
- [ ] No lower layer importing from higher layer
- [ ] No cyclic dependencies
- [ ] No foundation depending on application code
- [ ] No internal module importing from the public barrel

Severity mapping:
- P0: Layer 0 importing from Layer 2+, cyclic dependency between layers
- P1: Layer 1 importing from Layer 2, foundation importing from Layer 1
- P2: documented dependency direction exception
- P3: all dependencies flow downward

---

### 4. Abstraction Purity (Track A — Library)

Detect in `src/`:

- leaky abstractions where implementation details escape module boundaries
- components that expose internal state management through props
- hooks that return raw DOM elements or browser API references
- utilities that expose transport-layer details (raw Axios config, HTTP status codes)
- internal utilities referenced in public API signatures (`src/lib.ts`)
- platform-specific behavior visible through generic interfaces

Also check:

- `ApiService` wraps Axios cleanly — no raw Axios types exposed in public signatures
- `AppState` and `ServerResponse` hide their internal state representation
- Hooks return typed data, not raw DOM or platform APIs
- Components accept presentation props only, not state management objects
- `src/lib.ts` exports only public API, no internal utilities

Allowed:
- [ ] Components expose only presentation props
- [ ] Hooks expose only data and callbacks
- [ ] ApiService returns typed ServerResponse, not raw AxiosResponse
- [ ] Internal implementation freely changeable

Forbidden:
- [ ] No internal types in public signatures
- [ ] No transport details leaked through public API
- [ ] No browser API references outside guards
- [ ] No implementation detail in interface names

---

### 5. Architecture Guidance Clarity (Track B — Guidance)

Audit whether the architecture guidance documents clearly define the split between library primitives and consumer responsibilities, without depending on any specific feature or implementation.

Detect:

- guidance that references specific consumer app features or domain names
- guidance documents that define conflicting directory structures or naming conventions
- missing distinction between "what Astra provides" and "what consumers build"
- consumer-applicable invariants (MVVM Separation, Repository Isolation) with no corresponding how-to guidance in core docs
- code examples that are inconsistent with the canonical feature structure in `core/feature-structure.md`
- integration contracts that assume specific app frameworks or tools (beyond React, Electron)
- loose references to "application state" or "business logic" without clarifying where those live (consumer feature modules, not Astra)
- guidance documents without cross-references to `core/feature-structure.md`

For each guidance document, evaluate:

| Document | Clarity | Feature-Agnostic | Consistent | Consumer Boundary |
|----------|---------|-----------------|------------|-------------------|
| `core/feature-structure.md` | {P/F} | {P/F} | {P/F} | {P/F} |
| `core/mvvm-pattern.md` | {P/F} | {P/F} | {P/F} | {P/F} |
| `core/hooks.md` | {P/F} | {P/F} | {P/F} | {P/F} |
| `core/repository.md` | {P/F} | {P/F} | {P/F} | {P/F} |
| `core/state-management.md` | {P/F} | {P/F} | {P/F} | {P/F} |
| `integration-contracts/react.md` | {P/F} | {P/F} | {P/F} | {P/F} |
| `integration-contracts/electron.md` | {P/F} | {P/F} | {P/F} | {P/F} |
| `integration-contracts/getting-started.md` | {P/F} | {P/F} | {P/F} | {P/F} |

Allowed:
- [ ] All guidance documents clearly separate library primitives vs consumer responsibilities
- [ ] All code examples use feature-agnostic naming
- [ ] All docs consistently reference the canonical feature structure
- [ ] Consumer-applicable invariants have corresponding how-to guidance
- [ ] Integration contracts avoid framework-specific assumptions beyond stated scope

Forbidden:
- [ ] No guidance document referencing specific consumer features or domains
- [ ] No conflicting directory structures between documents
- [ ] No consumer guidance missing for MVVM Separation or Repository Isolation
- [ ] No assumption about what consumer app features look like

Severity mapping:
- P0: guidance documents reference specific consumer app features, no consumer guidance for MVVM/Repository
- P1: conflicting directory structures across documents, inconsistent naming
- P2: isolated inconsistency or missing cross-reference — documented gap
- P3: all guidance docs are feature-agnostic, implementation-agnostic, and consistent

---

## Finding Format

Each finding MUST use the appropriate prefix:

| Track | Prefix |
|-------|--------|
| Library Compliance (source) | `ARCH-{nnn}` |
| Guidance Clarity (docs) | `ARCH-GUIDE-{nnn}` |

Each finding MUST include:

```
### Finding ID
ARCH-{nnn} or ARCH-GUIDE-{nnn}

### Track
Library Compliance / Guidance Clarity

### Category
Library Invariant Compliance / Guidance Completeness / Boundary Leakage / Dependency Direction / Abstraction Purity / Architecture Guidance Clarity

### Modules Affected
{comma-separated list of module paths (source) or document paths (guidance)}

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

1. **Audit Metadata** — timestamp, commit, suite, invariant references, track(s) audited
2. **Modules/Documents Audited** — numbered list of modules (source) and documents (guidance) reviewed
3. **Summary** — count per severity (P0-P3) per track, violation density heatmap
4. **Overall Score** — per-dimension score out of 100, separate scores for Library Compliance and Guidance Clarity
5. **Findings** — detailed per-finding using the Finding Format above, grouped by track
6. **Cross-Suite Overlap** — findings shared with component-architecture, component-purity, and library-governance suites; deduplication guidance for fix plan
7. **Transitional Violations** — known documented architecture debt
8. **Guidance Gaps** — summary of missing consumer-facing guidance with suggested additions
9. **Audit Traceability** — reference to the audit suite and report location

The report MUST be written to:

```
docs/raw/report/architecture/latest/architecture-{module}-{timestamp}.md
```

---

## Invariant Document Authority

When checking compliance:

- All 10 invariant documents collectively define the architecture — check holistically
- For Library Compliance (Track A), invariants apply to `src/` directly. MVVM Separation and Repository Isolation primarily describe consumer-applicable patterns; check them in `src/` only for accidental violations.
- For Guidance Clarity (Track B), invariants describe what consumers must follow. Check that the guidance documents provide clear, implementation-agnostic how-to for each invariant.
- A module may comply with individual invariants but still violate architectural integrity through boundary leakage or dependency direction
- Cross-cutting findings should be flagged with references to all affected invariant documents
- Deduplicate with component-architecture, component-purity, and library-governance findings in the fix plan: architecture findings describe the systemic pattern, while suite-specific findings describe the instance
- Guidance Clarity findings (ARCH-GUIDE-*) describe documentation gaps; they are architectural findings, not documentation quality findings
