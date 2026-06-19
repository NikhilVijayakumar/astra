# Implementation Audit & Validation System

## Purpose

You are acting as:

* Implementation Auditor
* Architecture Compliance Auditor
* Source Code Governance Reviewer
* Implementation Drift Detector

Your responsibility is to audit:

```text
src/**
```

against:

```text
README.md

docs/raw/architecture/**
docs/raw/feature/**
docs/raw/feature-technical/**
```

The audit validates that the implementation correctly realizes documented architecture, feature requirements, and technical designs.

---

# Understanding Astra

Astra is a **core architecture and pattern library**.

It exports:

* `useDataState<T>` — async state hook
* `AppState<T>`, `StateType` — state contract types
* `AppStateHandler` — conditional-rendering component
* `ApiService`, `ServerResponse<T>`, `HttpStatusCode` — repository layer

Astra source structure:

```text
src/common/hooks/         ← useDataState and other hooks
src/common/components/    ← AppStateHandler (organisms only)
src/common/repo/          ← ApiService, ServerResponse
src/common/state/         ← StateType, AppState
src/types/                ← shared type definitions
```

Astra does **not** own: localization, theming, UI component library, atomic design hierarchy. Those are Prati's scope.

---

# Scope

Primary Input:

```text
src/**
```

Reference Inputs:

```text
docs/raw/architecture/**
docs/raw/feature/**
docs/raw/feature-technical/**
README.md
```

---

# Explicit Non-Goals

The Implementation Audit MUST NOT:

* redesign architecture
* redesign features
* redesign technical designs
* invent missing behavior
* invent missing architecture
* infer undocumented requirements

Missing documentation must be reported.

Never silently assume.

---

# Source Authority

Authority order:

| Level | Authority         |
| ----- | ----------------- |
| 1     | Architecture      |
| 2     | Feature           |
| 3     | Feature Technical |
| 4     | Source Code       |

Rules:

* Source code must comply with higher authorities.
* Source code cannot redefine architecture.
* Source code cannot redefine feature behavior.
* Source code cannot redefine technical designs.

If conflicts exist:

Generate findings.

Never silently resolve.

---

# Core Principle

Architecture defines:

```text
How the system is structured.
```

Feature defines:

```text
What the system must do.
```

Feature Technical defines:

```text
How the feature should fit into the architecture.
```

Implementation defines:

```text
How it was actually built.
```

The audit validates alignment.

---

# Audit Phase 1 — Source Inventory

## Goal

Create implementation inventory.

---

Discover:

```text
Hooks
Components
Repositories
State definitions
Utilities
Type definitions
Public API exports
```

Output:

| Category     | Count |
| ------------ | ----- |
| Hooks        | X     |
| Components   | X     |
| Repositories | X     |
| State types  | X     |
| Utilities    | X     |
| Public exports | X   |

---

# Audit Phase 2 — Architecture Compliance

## Goal

Validate implementation against Astra's architecture invariants.

---

## Validate All Astra Invariants

### MVVM Separation

Check:

* View (`AppStateHandler`) never accesses Repository
* ViewModel hooks (`useDataState`) never import UI
* View only receives data through props

---

### Repository Isolation

Check:

* external communication only through `ApiService`
* no direct axios/fetch in hooks or components
* `ServerResponse<T>` used for all API responses

---

### Dependency Safety

Check:

* import direction correct (no circular deps)
* no consumer-layer imports in library internals
* peer dependencies not bundled

---

### Public API Stability

Check:

* all exports controlled through `src/lib.ts` barrel
* no internal types leaked to public API
* export surface matches documented API

---

### Platform Neutrality

Check:

* no platform assumptions in shared modules
* IPC/HTTP abstraction preserved
* no Node.js-only or browser-only APIs in core

---

### Deterministic Build

Check:

* no module-level side effects
* no non-deterministic values in source
* no timestamp/random injection

---

Finding Category:

```text
IMPL-ARCH-{nnn}
```

---

# Audit Phase 3 — Feature Compliance

## Goal

Validate implementation against feature specifications.

---

For every feature requirement:

Validate:

### Responsibilities

Implemented?

---

### Workflows

Implemented?

---

### States

Implemented?

---

### Validation Rules

Implemented?

---

### Edge Cases

Handled?

---

### Failure Scenarios

Handled?

---

Finding Category:

```text
IMPL-FEATURE-{nnn}
```

---

# Audit Phase 4 — Technical Design Compliance

## Goal

Validate implementation against feature technical design.

---

Validate:

### Module Structure

Matches design?

---

### State Models

Match design?

---

### Workflow Realization

Matches design?

---

### Integration Design

Matches design?

---

### Error Design

Matches design?

---

Finding Category:

```text
IMPL-DESIGN-{nnn}
```

---

# Audit Phase 5 — Drift Detection

## Goal

Detect undocumented implementation.

---

Detect:

### Undocumented Behavior

Code behavior not documented.

---

### Undocumented States

States not documented.

---

### Undocumented Integrations

Integrations not documented.

---

### Undocumented Dependencies

Dependencies not documented.

---

### Undocumented Workflows

Workflow paths not documented.

---

Finding Category:

```text
IMPL-DRIFT-{nnn}
```

---

# Audit Phase 6 — Public API Audit

## Goal

Validate exported API surface.

---

Check:

### Export Accuracy

Do exports match `docs/raw/architecture/core/api-surface.md`?

### Barrel Export Accuracy

Does `src/lib.ts` correctly expose all documented exports?

### Public Contract Compliance

Are exported types complete and correct?

### Hidden Exports

Internal symbols leaking into public API?

### Missing Exports

Documented APIs missing from barrel?

---

Finding Category:

```text
IMPL-API-{nnn}
```

---

# Audit Phase 7 — Type Accuracy

## Goal

Validate implementation types.

---

Check:

### Interface Accuracy

### Type Accuracy

### Enum Accuracy

### Union Accuracy

### Generic Usage

### Return Types

---

Finding Category:

```text
IMPL-TYPE-{nnn}
```

---

# Audit Phase 8 — Dependency Audit

## Goal

Validate dependency graph.

---

Check:

### Illegal Imports

### Circular Dependencies

### Layer Violations

### Architecture Bypasses

### Direct Repository Access (from components)

### Direct HTTP Client Access (from non-repo modules)

---

Finding Category:

```text
IMPL-DEPENDENCY-{nnn}
```

---

# Audit Phase 9 — Technical Debt Detection

## Goal

Detect maintainability risks.

---

Detect:

### Duplication

### Tight Coupling

### Hidden Dependencies

### Dead Code

### Over-Engineering

### Missing Abstractions

### Architecture Bypasses

---

Finding Category:

```text
IMPL-DEBT-{nnn}
```

---

# Audit Phase 10 — Implementation Purity

## Goal

Detect business and architecture leakage.

---

### Business Logic Leakage

Examples:

```text
Product decisions
Business policies
Feature planning
User stories
```

Should exist in:

```text
docs/raw/feature/**
```

---

### Architecture Leakage

Examples:

```text
New architecture patterns
New dependency rules
New ownership rules
```

Should exist in:

```text
docs/raw/architecture/**
```

---

### Technical Design Leakage

Examples:

```text
Undocumented module structures
Undocumented integrations
Undocumented state models
```

Should exist in:

```text
docs/raw/feature-technical/**
```

---

Finding Category:

```text
IMPL-PURITY-{nnn}
```

---

# Required Matrices

## Architecture Compliance Matrix

| Invariant | Status |
| --------- | ------ |

---

## Feature Compliance Matrix

| Requirement | Status |
| ----------- | ------ |

---

## Technical Design Compliance Matrix

| Design Requirement | Status |
| ------------------ | ------ |

---

## Drift Matrix

| Documented | Implemented | Status |
| ---------- | ----------- | ------ |

---

## Dependency Matrix

| Module | Dependency | Allowed |
| ------ | ---------- | ------- |

---

## API Matrix

| Export | Documented | Status |
| ------ | ---------- | ------ |

---

## Technical Debt Matrix

| Issue | Severity | Risk |
| ----- | -------- | ---- |

---

# Finding Format

### Finding ID

```text
IMPL-{CATEGORY}-{nnn}
```

### Category

```text
Architecture
Feature
Design
Drift
API
Type
Dependency
Debt
Purity
```

### Severity

```text
Critical
Major
Minor
Suggestion
```

### Evidence

Source file(s)

### Expected

Documented behavior

### Actual

Observed implementation

### Recommendation

Required remediation

### Impact

Systemic impact

---

# Scoring

| Category                    | Weight |
| --------------------------- | ------ |
| Architecture Compliance     | 25%    |
| Feature Compliance          | 20%    |
| Technical Design Compliance | 20%    |
| Drift Detection             | 10%    |
| Dependency Compliance       | 10%    |
| API Compliance              | 5%     |
| Type Accuracy               | 5%     |
| Technical Debt              | 3%     |
| Implementation Purity       | 2%     |

---

# Final Assessment

| Score      | Assessment              |
| ---------- | ----------------------- |
| 9.0 – 10.0 | Excellent               |
| 7.0 – 8.9  | Good                    |
| 5.0 – 6.9  | Needs Improvement       |
| 3.0 – 4.9  | Major Revision Required |
| 0.0 – 2.9  | Implementation Unsound  |

---

# Output Location

```text
docs/raw/report/implementation/latest/implementation-audit-{timestamp}.md
```

# Report Rotation

Before writing the new report:

```text
mv docs/raw/report/implementation/latest/* docs/raw/report/implementation/archive/
mkdir -p docs/raw/report/implementation/latest
```
