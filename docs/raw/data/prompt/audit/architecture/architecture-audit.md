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

## Score Model

Each dimension is scored **0–10** and mapped to a P-level:

| Score | P-Level | Label | Meaning |
|-------|---------|-------|---------|
| 10 | P3 | Compliant | All modules pass, no violations |
| 8-9 | P2 | Transitional | Isolated violations with documented plan |
| 5-7 | P1 | Needs Migration | Recurring pattern needing next-release fix |
| 0-4 | P0 | Critical | Systemic failure, must restructure |

The score represents **how much of the codebase/docs is compliant**, not how many violations exist. 10 = fully compliant; 0 = completely non-compliant.

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

Analyze ALL of the following. Each dimension must be scored **0–10** using the Score Model table above.

---

### 1a. Library Invariant Compliance (Track A)

Score: **{score}/10**

Apply to `src/` source code only. Group the 10 invariants into **6 dimensions**, each scored 0–10:

| Dimension | Invariants Grouped | Weight |
|-----------|--------------------|--------|
| **Component Purity** | Stateless UI, Atomic Hierarchy | 20% |
| **Theme Sovereignty** | Theme token usage in all components | 15% |
| **Localization Compliance** | Translation keys, hardcoded strings | 15% |
| **Data Architecture** | MVVM Separation, Repository Isolation | 20% |
| **Library Governance** | Dependency Safety, Public API, Deterministic Build | 15% |
| **Platform Neutrality** | Cross-runtime compatibility | 15% |

For each dimension, produce a row in the Scoring Breakdown table:

| Dimension | Score /10 | P-Level | Key Violations | Notes |
|-----------|-----------|---------|----------------|-------|

**Detect:**
- modules with multiple invariant violations
- patterns of the same violation recurring across different modules
- invariants systematically violated across the codebase
- modules drifted furthest from their architectural contract

**Allowed:**
- P3 or N/A for all invariants per module
- Isolated P2 violations with documented migration plans
- MVVM Separation and Repository Isolation marked N/A for library-only modules

**Forbidden:**
- No P0 violations anywhere
- No recurring P1 patterns across modules
- No invariant systematically violated across the codebase

---

### 1b. Guidance Completeness (Track B)

Score: **{score}/10**

Evaluate whether architecture guidance docs provide complete, implementation-agnostic guidance. Score each guidance area 0–10, then average:

| Guidance Area | Score /10 | P-Level | Gaps Found |
|---------------|-----------|---------|------------|
| Feature Structure (`core/feature-structure.md`) | {score} | {P} | {gaps} |
| MVVM Pattern (`core/mvvm-pattern.md`) | {score} | {P} | {gaps} |
| ViewModel Hooks (`core/hooks.md`) | {score} | {P} | {gaps} |
| Repository Pattern (`core/repository.md`) | {score} | {P} | {gaps} |
| Integration Contracts (`react.md`, `electron.md`, `getting-started.md`) | {score} | {P} | {gaps} |

**Detect:**
- missing guidance for consumer-applicable invariants
- references to consumer-feature directories not in canonical structure
- inconsistencies between docs (different layouts, naming)
- code examples contradicting canonical feature structure
- assumptions about specific consumer app domain
- consumer guidance mixed into library invariants

**Score guide:** 10 = all guidance complete, consistent, feature-agnostic; 7 = minor gaps or inconsistencies; 5 = major gaps; 0 = no consumer guidance exists

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

Score: **{score}/10**

Audit whether the architecture guidance docs clearly define the library/consumer split, without depending on any specific feature or implementation.

For each guidance document, evaluate across 4 criteria (each scored 0–10), then average per document:

| Criterion | What It Measures | 10 = | 0 = |
|-----------|-----------------|------|-----|
| **Clarity** | Is the doc's purpose and guidance easy to understand? | Crystal clear | Confusing or missing |
| **Feature-Agnostic** | Does it avoid consumer domain references? | Fully generic | Tied to specific features |
| **Consistency** | Does it align with canonical feature-structure.md? | Fully aligned | Contradicts other docs |
| **Consumer Boundary** | Does it clearly separate library vs consumer? | Explicit boundary | Blurred or missing |

**Document Scores:**

| Document | Clarity /10 | Feature-Agnostic /10 | Consistency /10 | Consumer Boundary /10 | Average /10 | P-Level |
|----------|-------------|---------------------|----------------|----------------------|-------------|---------|
| `core/feature-structure.md` | {score} | {score} | {score} | {score} | {avg} | {P} |
| `core/mvvm-pattern.md` | {score} | {score} | {score} | {score} | {avg} | {P} |
| `core/hooks.md` | {score} | {score} | {score} | {score} | {avg} | {P} |
| `core/repository.md` | {score} | {score} | {score} | {score} | {avg} | {P} |
| `core/state-management.md` | {score} | {score} | {score} | {score} | {avg} | {P} |
| `integration-contracts/react.md` | {score} | {score} | {score} | {score} | {avg} | {P} |
| `integration-contracts/electron.md` | {score} | {score} | {score} | {score} | {avg} | {P} |
| `integration-contracts/getting-started.md` | {score} | {score} | {score} | {score} | {avg} | {P} |

**Track B Score = average of all 8 document averages.**

**Detect:**
- guidance referencing specific consumer features or domain names
- conflicting directory structures or naming between docs
- missing library-vs-consumer boundary
- consumer-applicable invariants (MVVM, Repository) without how-to guidance
- code examples inconsistent with canonical feature structure
- loose references to "app state" / "business logic" without clarifying consumer owns those

**Allowed:**
- All docs clearly separate library vs consumer
- All code examples use feature-agnostic naming
- All docs consistently reference canonical feature structure
- Consumer-applicable invariants have corresponding how-to guidance

**Forbidden:**
- Any doc referencing specific consumer features or domains
- Conflicting directory structures between documents
- Missing consumer guidance for MVVM Separation or Repository Isolation

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

| Severity | Score Range | Meaning | Action |
|----------|-------------|---------|--------|
| P0 | 0–4 | Critical — systemic architecture failure | Must restructure before release |
| P1 | 5–7 | High — recurring architectural debt | Must plan migration next release |
| P2 | 8–9 | Transitional — isolated exception with plan | Allowed temporarily |
| P3 | 10 | Compliant — architecture intact | No action required |

---

## Score Calculation

### Track A — Library Compliance (weighted average)

```
Track A Score = Σ(dimension_score × weight) / Σ(weights)
```

| Dimension | Weight | Scoring Guidance |
|-----------|--------|-----------------|
| Component Purity | 20% | All components stateless & in correct tier → 10. Any data-fetching or cross-tier import → penalize per P-level |
| Theme Sovereignty | 15% | All styling via theme tokens → 10. Each hardcoded value cluster → -1, recurring pattern → -2 |
| Localization Compliance | 15% | All text via translation keys → 10. Each hardcoded string → -2 |
| Data Architecture | 20% | No MVVM/repo boundary leaks in library → 10. Accidental repo import in component → -3 |
| Library Governance | 15% | Deps pinned, public API clean, build deterministic → 10. Each gap → -2 |
| Platform Neutrality | 15% | No platform-specific APIs → 10. Each violation → -3 |

### Track B — Guidance Clarity (simple average)

```
Track B Score = average score across all 8 guidance documents
```

Each document score = average of its 4 criteria (Clarity, Feature-Agnostic, Consistency, Consumer Boundary).

### Combined Score (simple average of tracks)

```
Combined Score = (Track A Score + Track B Score) / 2
```

### Final Assessment Label

| Score Range | Label |
|-------------|-------|
| 9.0–10.0 | Excellent |
| 7.0–8.9 | Good |
| 5.0–6.9 | Needs Improvement |
| 3.0–4.9 | Major Revision Required |
| 0.0–2.9 | Not Implementation Ready |

---

## Output Specification

The audit report MUST use the following structure:

---

### 1. Executive Summary

```
# Architecture Audit Report — {timestamp}

## Executive Summary

- **Overall Assessment:** {Excellent / Good / Needs Improvement / Major Revision Required}
- **Combined Score:** {score}/10
- **Track A (Library Compliance):** {score}/10
- **Track B (Guidance Clarity):** {score}/10
- **Critical Findings (P0):** {n}
- **Major Findings (P1):** {n}
- **Minor Findings (P2):** {n}
- **Modules Audited:** {n} source files | {n} guidance documents
```

---

### 2. Modules & Documents Audited

Numbered list of all source modules and guidance documents reviewed.

---

### 3. Scoring Breakdown

#### Track A — Library Compliance

| Dimension | Score /10 | P-Level | Weight | Weighted Score | Key Violations |
|-----------|-----------|---------|--------|----------------|----------------|
| Component Purity | {score} | {P} | 20% | {w_score} | {summary} |
| Theme Sovereignty | {score} | {P} | 15% | {w_score} | {summary} |
| Localization Compliance | {score} | {P} | 15% | {w_score} | {summary} |
| Data Architecture | {score} | {P} | 20% | {w_score} | {summary} |
| Library Governance | {score} | {P} | 15% | {w_score} | {summary} |
| Platform Neutrality | {score} | {P} | 15% | {w_score} | {summary} |

```
Track A Score = Σ(weighted_scores) = {score}/10
```

#### Track B — Guidance Clarity

| Document | Clarity /10 | Feature-Agnostic /10 | Consistency /10 | Consumer Boundary /10 | Average /10 | P-Level |
|----------|-------------|---------------------|----------------|----------------------|-------------|---------|
| `core/feature-structure.md` | {score} | {score} | {score} | {score} | {avg} | {P} |
| ... | ... | ... | ... | ... | ... | ... |

```
Track B Score = average of all document averages = {score}/10
```

#### Combined

```
Combined Score = (Track A + Track B) / 2 = {score}/10
```

---

### 4. Findings

Each finding MUST follow the Finding Format defined above. Findings are grouped by track:

#### Track A — Library Compliance Findings

ARCH-001, ARCH-002, ...

#### Track B — Guidance Clarity Findings

ARCH-GUIDE-001, ARCH-GUIDE-002, ...

---

### 5. Cross-Suite Overlap

Table of findings shared with component-architecture, component-purity, and library-governance suites, with deduplication guidance for the fix plan.

---

### 6. Score Improvement Summary

If this is not the first audit, include an iteration history:

| Iteration | Date | Combined | Track A | Track B | Change | Key Changes |
|-----------|------|----------|---------|---------|--------|-------------|
| 1 (baseline) | {date} | {score} | {score} | {score} | — | — |
| 2 | {date} | {score} | {score} | {score} | +{n} | {what changed} |

Otherwise, note: "Baseline audit — no iteration history."

---

### 7. Final Verdict

```
{Excellent / Good / Needs Improvement / Major Revision Required} ({score}/10)
```

One-paragraph summary of the most critical action items and whether the architecture is healthy.

---

### 8. Audit Traceability

| Reference | Location |
|-----------|----------|
| Audit Suite | `docs/raw/data/prompt/audit/architecture/architecture-audit.md` |
| Invariant Docs | `docs/raw/architecture/invariants/*.md` |
| Architecture Docs | `docs/raw/architecture/core/*.md` |
| Integration Contracts | `docs/raw/architecture/integration-contracts/*.md` |
| This Report | `docs/raw/report/architecture/latest/architecture-{module}-{timestamp}.md` |

---

The report MUST be written to:

```
docs/raw/report/architecture/latest/architecture-audit-{timestamp}.md
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
