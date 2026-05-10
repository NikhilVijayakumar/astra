# Repository Integrity Audit Prompt

You are acting as:

- Data Layer Architect
- Repository Isolation Auditor
- API Abstraction Reviewer

Your task is to audit Astra repository layer implementations for violations of:

1. Repository Isolation

You MUST follow the invariant document exactly.

Do not invent architectural rules.

The invariant document is the source of truth.

---

## Mental Model

| Layer | IO Responsibility | Location | Restrictions |
|-------|------------------|----------|--------------|
| View (Component) | None — props in, events out | `src/common/components/` | No IO of any kind |
| ViewModel (Hook) | Orchestration only | `src/common/hooks/` | No direct IO, delegates to Repo |
| Repository | All external IO | `src/common/repo/` | No UI imports, no presentation formatting |
| ApiService | Transport abstraction | Inside repo/ | Raw HTTP, typed contracts |
| External | HTTP, WebSocket, Storage | Outside application | Only accessed through Repo |

---

## Inputs

You will receive:

- Repository files from `src/common/repo/`
- Hook files from `src/common/hooks/`
- Component files from `src/common/components/{atoms|molecules|organisms|templates}/`
- ApiService utility files
- Invariant document:
  - `docs/raw/architecture/invariants/repository-isolation.md`

The invariant document overrides all assumptions.

---

## Audit Goal

Determine whether the repository layer behaves as:

- an isolated data access layer where all external communication flows through typed repository abstractions
- a clean IO boundary where components and hooks never touch HTTP, storage, or external APIs directly

OR whether it has drifted into:

- `axios` imports outside `repo/` directory
- `fetch()` calls outside `repo/` directory
- direct `ApiService` instantiation in components or hooks
- raw HTTP response handling without `ServerResponse` wrapper
- repository imports in component files
- `ApiService` usage in View or ViewModel files
- HTTP interceptors or middleware in non-repo files
- storage access outside repository layer

---

## Audit Scope

Focus ONLY on repository isolation and IO abstraction.

Ignore:
- visual design and styling
- coding style and formatting
- feature completeness
- test coverage
- theme or localization concerns

unless they intersect with data access patterns.

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1. IO Isolation

Detect:
- `axios` import in any file outside `src/common/repo/`
- `fetch()` calls outside `src/common/repo/`
- `ApiService` import in component or hook files
- direct HTTP call (`axios.get`, `axios.post`) in components or hooks
- `XMLHttpRequest` usage outside repo/
- `WebSocket` instantiation outside repo/
- `localStorage` / `sessionStorage` for API-related data outside repo/

Allowed:
- [ ] All `axios`/`fetch` usage inside `src/common/repo/`
- [ ] ApiService used only inside repo/ files
- [ ] Typed `ServerResponse` returns from all repo methods
- [ ] Error messages centralized in ApiService config

Forbidden:
- [ ] No axios/fetch outside repo/
- [ ] No direct HTTP in components or hooks
- [ ] No ApiService outside repo/
- [ ] No XHR or WebSocket outside repo/

Severity mapping:
- P0: axios/fetch in components, direct HTTP in ViewModel
- P1: ApiService outside repo/, storage access for API data outside repo/
- P2: legacy direct access with documented migration plan
- P3: all IO through typed Repositories

---

### 2. Transport Abstraction

Detect:
- raw HTTP response objects returned from repositories (should return typed `ServerResponse`)
- HTTP status code handling outside repository layer
- request/response interceptor logic outside ApiService configuration
- hardcoded API URLs in multiple repository files (should be centralized)
- per-file axios instance creation (should use shared ApiService)
- cookie/token management in repository methods (should be in ApiService interceptor)
- retry logic distributed across repository files (should be centralized)

Allowed:
- [ ] Repositories return typed `ServerResponse<T>` objects
- [ ] HTTP status codes mapped to domain errors inside ApiService
- [ ] Centralized API base URL configuration
- [ ] Shared request/response interceptors in ApiService

Forbidden:
- [ ] No raw HTTP response returns
- [ ] No status code handling outside ApiService
- [ ] No hardcoded URLs in repository files
- [ ] No per-file axios instances
- [ ] No distributed retry logic

Severity mapping:
- P0: raw HTTP response returned from repository
- P1: hardcoded API URLs in repositories, per-file axios instances
- P2: documented transport coupling with abstraction plan
- P3: clean transport abstraction through ApiService

---

### 3. Typing Enforcement

Detect:
- repository methods returning `any` or untyped responses
- missing `ServerResponse` wrapper on repository return types
- inline type definitions in repository files (should import from contracts)
- type definitions for API contracts duplicated across repository and consumer
- missing error type definitions in repository signatures
- repository methods that mutate input parameters

Allowed:
- [ ] All repository methods return typed `ServerResponse<T>`
- [ ] API contract types imported from shared type definitions
- [ ] Error types explicitly defined in repository signatures
- [ ] Immutable input parameter handling

Forbidden:
- [ ] No `any` return types in repositories
- [ ] No missing ServerResponse wrappers
- [ ] No inline API contract types
- [ ] No duplicated type definitions
- [ ] No input parameter mutation

Severity mapping:
- P0: any return type from repository method
- P1: inline type definitions, missing error types, duplicated contracts
- P2: partial typing with documented plan
- P3: fully typed repository contracts

---

## Finding Format

Each finding MUST include:

```
### Finding ID
REPO-{nnn}

### File
{file-path}

### Category
IO Isolation / Transport Abstraction / Typing Enforcement

### Invariant Violated
docs/raw/architecture/invariants/repository-isolation.md

### Severity
P0 / P1 / P2 / P3

### Violation Type
{short description}

### Evidence
{exact code snippet}

### Invariant Rule Violated
repository-isolation.md §{Section} — {rule}

### Recommendation
{actionable remediation — move to repository or centralize abstraction}

### Impact
{what breaks if not fixed — IO coupling, untestable, typing unsafety}
```

---

## Severity Classification

| Severity | Meaning | Action |
|----------|---------|--------|
| P0 | Critical — direct IO outside repository | Must move into repository layer |
| P1 | High — weak abstraction or typing | Must strengthen next release |
| P2 | Transitional — documented IO gap | Allowed temporarily with plan |
| P3 | Compliant — repository isolation intact | No action required |

---

## Output Specification

The audit report MUST include:

1. **Audit Metadata** — timestamp, commit, suite, module, invariant references
2. **Audited Files** — numbered list of files reviewed
3. **Summary** — count per severity (P0-P3)
4. **Overall Score** — per-dimension score out of 100
5. **Findings** — detailed per-finding using the Finding Format above
6. **Cross-Suite Overlap** — findings shared with component-architecture audit (Repository Isolation dimension); deduplication guidance for fix plan
7. **Transitional Violations** — known documented tech debt
8. **Audit Traceability** — reference to the audit suite and report location

The report MUST be written to:

```
docs/raw/report/repository/latest/repository-{module}-{timestamp}.md
```

---

## Invariant Document Authority

When checking compliance:

- The invariant document is the source of truth
- For each finding, reference the specific Allowed or Forbidden pattern section from repository-isolation.md
- Do NOT override invariant rules based on perceived convenience
- Findings overlapping with component-architecture audit must be flagged for deduplication in the fix plan
