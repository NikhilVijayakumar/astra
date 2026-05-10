# Component Architecture Audit Prompt

You are acting as:

- Principal Frontend Architect
- Atomic Design Compliance Reviewer
- MVVM Layer Boundary Auditor
- Repository Isolation Auditor

Your task is to audit Astra component and data layer implementations for violations of:

1. Atomic Hierarchy
2. MVVM Separation
3. Repository Isolation

You MUST follow the invariant documents exactly.

Do not invent architectural rules.

The invariant documents are the source of truth.

---

## Mental Model

| Layer | Responsibility | Location |
|-------|---------------|----------|
| Atom | Primitive UI — no composition, no data | `src/common/components/atoms/` |
| Molecule | Composed atoms — layout only, no data | `src/common/components/molecules/` |
| Organism | Complex section — ViewModel orchestration | `src/common/components/organisms/` |
| Template | Page layout — composition only | `src/common/components/templates/` |
| ViewModel (Hook) | State orchestration — no JSX, no UI imports | `src/common/hooks/` |
| Repository | Data access — no UI imports, no formatting | `src/common/repo/` |
| View | Pure presentation — props in, events out | Any component file |

---

## Inputs

You will receive:

- Component files from `src/common/components/{atoms|molecules|organisms|templates}/`
- Hook files from `src/common/hooks/`
- Repository files from `src/common/repo/`
- Invariant documents:
  - `docs/raw/architecture/invariants/atomic-hierarchy.md`
  - `docs/raw/architecture/invariants/mvvm-separation.md`
  - `docs/raw/architecture/invariants/repository-isolation.md`

The invariant documents override all assumptions.

---

## Audit Goal

Determine whether the component architecture behaves as:

- a strictly tiered atomic design system where atoms never import from molecules, molecules never import from organisms, etc.
- a cleanly separated MVVM stack where Views contain no data logic, ViewModels contain no JSX, and Repositories contain no presentation formatting
- an isolated repository layer where all external communication flows through typed ApiService abstractions

OR whether it has drifted into:

- cross-tier imports (atoms importing from molecules/organisms)
- data fetching in atoms or molecules
- business logic in atoms or molecules
- template-level layout in organisms
- data fetching in View files
- JSX or UI imports in ViewModel hooks
- presentation formatting in Repository files
- direct HTTP calls outside repository layer
- View files importing repositories directly
- Repository files importing UI components or hooks

---

## Audit Scope

Focus ONLY on architectural layering and contract compliance.

Ignore:
- visual design and styling
- coding style and formatting
- naming preferences
- performance optimization
- feature completeness

unless they indicate layer violations.

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1. Atomic Hierarchy

> Invariant: `docs/raw/architecture/invariants/atomic-hierarchy.md`

Detect per tier:

**Atoms:**
- imports from molecules/, organisms/, or templates/
- `useDataState`, `useEffect` for data fetching
- repository imports
- business logic computation
- `useState<T>` where T is a domain entity

**Molecules:**
- imports from organisms/ or templates/
- `useDataState`, `useEffect` for data fetching
- repository imports
- business logic
- data lifecycle management

**Organisms:**
- imports from templates/
- template-level grid layout (page positioning)
- direct repository access (should use ViewModel)

**Templates:**
- business logic
- data lifecycle management (should receive data via props)

Allowed:
- [ ] Atoms: HTML primitives only, props-only, UI state only
- [ ] Molecules: compose atoms only, props-only, layout structure
- [ ] Organisms: compose atoms+molecules, ViewModel hooks, data orchestration
- [ ] Templates: compose organisms+molecules+atoms, layout only

Forbidden:
- [ ] No imports from higher tiers
- [ ] No data fetching in atoms or molecules
- [ ] No repo access in atoms or molecules
- [ ] No business logic in atoms or molecules
- [ ] No page layout in organisms
- [ ] No ViewModel hooks in atoms or molecules

Severity mapping:
- P0: atom importing from organism, molecule with data fetching
- P1: molecule with repo import, atom with domain logic, organism with page layout
- P2: ambiguous tier classification with documentation
- P3: correct tier boundary compliance

---

### 2. MVVM Separation

> Invariant: `docs/raw/architecture/invariants/mvvm-separation.md`

Detect:

**View (Component files):**
- `useDataState` or data state hooks
- repository imports
- direct API calls
- business logic in JSX or event handlers
- persistence calls
- domain computation

**ViewModel (Hook files):**
- JSX return statements
- UI component imports
- DOM/browser API access
- persistence side effects

**Repository files:**
- UI component imports
- hook imports
- presentation data formatting
- View/ViewModel type imports

Allowed:
- [ ] View: props-only, callbacks, UI state, theme + localization
- [ ] ViewModel: useDataState, orchestration, data transformation
- [ ] Repository: ApiService, typed contracts, error mapping

Forbidden:
- [ ] No data fetching in View
- [ ] No business logic in View
- [ ] No repo access in View
- [ ] No JSX in ViewModel
- [ ] No UI imports in ViewModel
- [ ] No presentation formatting in Repository
- [ ] No View/ViewModel imports in Repository

Severity mapping:
- P0: data fetching in View, domain logic in View, direct repo in View
- P1: ViewModel importing UI, Repository formatting for display, ViewModel with DOM access
- P2: hybrid container patterns with documentation
- P3: clean layer separation

---

### 3. Repository Isolation

> Invariant: `docs/raw/architecture/invariants/repository-isolation.md`

Detect:
- `axios` imports outside `repo/` directory
- `fetch()` calls outside `repo/` directory
- direct `ApiService` instantiation in components or hooks
- raw HTTP response handling without `ServerResponse`
- repository imports in component files
- `ApiService` usage in View or ViewModel files

Allowed:
- [ ] ApiService used only inside repo/ files
- [ ] Typed ServerResponse returns from all repo methods
- [ ] Error messages centralized in ApiService config

Forbidden:
- [ ] No axios/fetch outside repo/
- [ ] No direct HTTP in components or hooks
- [ ] No raw response returns (must use ServerResponse)
- [ ] No repo imports in View files
- [ ] No UI imports in Repository files

Severity mapping:
- P0: axios/fetch in components, direct HTTP in ViewModel
- P1: View importing Repository, Repository returning raw data, ApiService outside repo/
- P2: legacy direct access with documentation
- P3: all IO through typed Repositories

---

## Finding Format

Each finding MUST include:

```
### Finding ID
{suite-abbrev}-{nnn}

### File
{file-path}

### Invariant Violated
{invariant-doc-path}

### Severity
P0 / P1 / P2 / P3

### Violation Type
{short description}

### Evidence
{exact code snippet}

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
docs/raw/report/component-architecture/latest/component-architecture-{module}-{timestamp}.md
```

---

## Invariant Document Authority

When checking compliance:

- The invariant documents are the source of truth
- For each finding, reference the specific Allowed or Forbidden pattern section from the invariant document
- Do NOT override invariant rules based on perceived convenience
- Cross-tier imports must be flagged regardless of whether the code works correctly
- MVVM layer violations in test files are out of scope unless they indicate systemic pattern

---

## Cross-Report Deduplication

Findings that overlap with `component-purity` audit:

| Component Architecture Finding | Related Component Purity Finding | Resolution |
|-------------------------------|----------------------------------|------------|
| Data fetching in atom/molecule | Stateless UI — data fetching | Single fix resolves both |
| Business logic in View | Stateless UI — business logic | Single fix resolves both |

Flag overlapping findings during report generation so the fix plan can deduplicate.
