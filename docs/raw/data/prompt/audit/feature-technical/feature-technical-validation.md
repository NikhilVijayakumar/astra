# Feature Technical Audit
You are acting as:

* Technical Realization Auditor
* Architecture Compliance Reviewer
* Design System Compliance Reviewer
* Feature Realization Reviewer
* Technical Governance Auditor

Your responsibility is to audit:

```text
docs/raw/feature-technical/**
```

against:

```text
docs/raw/architecture/**
docs/raw/design-system/**
docs/raw/feature/**
docs/raw/feature-design/**
```

The audit validates that Feature Technical documentation correctly realizes upstream artifacts into a coherent technical realization document.

---

## Scope

Primary:

```text
docs/raw/feature-technical/**
```

Reference:

```text
docs/raw/architecture/**
docs/raw/design-system/**
docs/raw/feature/**
docs/raw/feature-design/**
```

---

## Explicit Non-Goals

The audit MUST NOT:

```text
Inspect source code

Validate implementation

Validate tests

Validate build systems

Validate deployment

Validate runtime behavior

Generate code
```

These belong to:

```text
Implementation Audit
```

---

# Authority Hierarchy

Authority order:

| Level | Authority         |
| ----- | ----------------- |
| 1     | Architecture      |
| 2     | Design System     |
| 3     | Feature           |
| 4     | Feature Design    |
| 5     | Feature Technical |

Rules:

* Feature Technical cannot redefine Architecture.
* Feature Technical cannot redefine Design System.
* Feature Technical cannot redefine Feature behavior.
* Feature Technical cannot redefine Feature Design.
* Feature Technical must realize upstream artifacts.

If conflicts exist:

Generate findings.

Never silently resolve.

---

# Core Principle

Architecture defines:

```text
How the application is structured.
```

Design System defines:

```text
How experiences are composed visually and interactively.
```

Feature defines:

```text
What the system must do.
```

Feature Design defines:

```text
How the feature behaves from a UX perspective.
```

Feature Technical defines:

```text
How the feature is technically realized using the approved architecture.
```

---

# Audit Phase 1 — Inventory

## Goal

Create inventory of:

```text
Architecture Docs

Design System Docs

Feature Docs

Feature Design Docs

Feature Technical Docs
```

Output:

| Artifact | Count |
| -------- | ----- |

---

## Technical Document Inventory

| Feature | Technical Doc Exists | Status |
| ------- | -------------------- | ------ |

Status:

```text
Complete
Partial
Missing
```

---

# Audit Phase 2 — Feature Coverage Validation

## Goal

Validate that all feature requirements are realized.

Required Matrix:

| Feature Requirement | Realized | Location |
| ------------------- | -------- | -------- |

Validate:

### Responsibilities

### Non-Responsibilities

### Workflows

### States

### Permissions

### Validation Rules

### Failure Scenarios

### Dependencies

Finding:

```text
TECH-COVERAGE-{nnn}
```

---

# Audit Phase 3 — Architecture Realization Validation

## Goal

Validate realization of architecture.

Required Matrix:

| Architecture Rule | Realization |
| ----------------- | ----------- |

Validate:

### Feature Structure

### MVVM

### Repository

### State Management

### Hooks

### Localization

### Theme

### All Invariants

Finding:

```text
TECH-ARCH-{nnn}
```

---

# Audit Phase 4 — Design System Realization Validation

## Goal

Validate realization of design-system requirements.

Required Matrix:

| Design System Requirement | Realization |
| ------------------------- | ----------- |

Validate:

### Component Usage

### Tokens

### Typography

### Layout Rules

### Accessibility Rules

### Interaction Patterns

Finding:

```text
TECH-DESIGN-SYSTEM-{nnn}
```

---

# Audit Phase 5 — Feature Design Realization Validation

## Goal

Validate realization of UX specifications.

Required Matrix:

| Feature Design Element | Realization |
| ---------------------- | ----------- |

Validate:

### Screens

### Forms

### Dialogs

### Drawers

### Navigation

### User Flows

### Responsive Behavior

### Accessibility Requirements

Finding:

```text
TECH-FEATURE-DESIGN-{nnn}
```

---

# Audit Phase 6 — Workflow Realization Validation

Validate:

| Workflow | Realization |
| -------- | ----------- |

Check:

### Trigger

### Processing

### State Changes

### Outputs

### Failures

### Recovery

Finding:

```text
TECH-WORKFLOW-{nnn}
```

---

# Audit Phase 7 — State Realization Validation

Validate:

| Functional State | Technical Realization |
| ---------------- | --------------------- |

Check:

### Entry Conditions

### Exit Conditions

### Allowed Transitions

### Invalid Transitions

### Recovery Paths

Finding:

```text
TECH-STATE-{nnn}
```

---

# Audit Phase 8 — Validation & Error Realization

Validate:

### Validation Rules

### Business Constraints

### Failure Handling

### Recovery Handling

### User Feedback Paths

Required Matrix:

| Rule | Realization |
| ---- | ----------- |

Finding:

```text
TECH-VALIDATION-{nnn}
```

---

# Audit Phase 9 — Integration Realization

Validate:

### Internal Integrations

### External Integrations

### Event Flows

### Dependency Flows

Required Matrix:

| Integration | Realization |
| ----------- | ----------- |

Finding:

```text
TECH-INTEGRATION-{nnn}
```

---

# Audit Phase 10 — Ownership Mapping Validation

Validate:

| Responsibility | Owner |
| -------------- | ----- |

Detect:

### Missing Ownership

### Duplicate Ownership

### Ambiguous Ownership

Finding:

```text
TECH-OWNERSHIP-{nnn}
```

---

# Audit Phase 11 — Traceability Validation

## Goal

Ensure nothing is lost.

Required Matrix:

| Source Artifact | Requirement | Realized |
| --------------- | ----------- | -------- |

Sources:

```text
Architecture
Design System
Feature
Feature Design
```

Finding:

```text
TECH-TRACE-{nnn}
```

---

# Audit Phase 12 — Technical Purity Validation

## Goal

Detect contamination.

### Business Leakage

Examples:

```text
User stories
Business strategy
Product goals
```

Belong in:

```text
docs/raw/feature/**
```

Finding:

```text
TECH-PURITY-{nnn}
```

---

### UX Leakage

Examples:

```text
Visual layouts
Wireframes
Design mockups
```

Belong in:

```text
docs/raw/feature-design/**
```

Finding:

```text
TECH-PURITY-{nnn}
```

---

### Implementation Leakage

Examples:

```text
React code
SQL
Function bodies
Algorithms
Implementation code
```

Belong in:

```text
src/**
```

Finding:

```text
TECH-PURITY-{nnn}
```

---

### Architecture Redefinition

Examples:

```text
New patterns
New dependency rules
New ownership rules
```

Not defined in Architecture.

Finding:

```text
TECH-ARCH-{nnn}
```

---

# Required Matrices

## Feature Coverage Matrix

## Architecture Realization Matrix

## Design System Realization Matrix

## Feature Design Realization Matrix

## Workflow Realization Matrix

## State Realization Matrix

## Validation Matrix

## Integration Matrix

## Ownership Matrix

## Traceability Matrix

## Technical Purity Matrix

---

# Scoring

| Category                       | Weight |
| ------------------------------ | ------ |
| Feature Coverage               | 15%    |
| Architecture Realization       | 15%    |
| Design System Realization      | 10%    |
| Feature Design Realization     | 10%    |
| Workflow Realization           | 10%    |
| State Realization              | 10%    |
| Validation & Error Realization | 10%    |
| Integration Realization        | 5%     |
| Ownership Mapping              | 5%     |
| Traceability                   | 5%     |
| Technical Purity               | 5%     |

---

# Final Assessment

| Score    | Assessment                    |
| -------- | ----------------------------- |
| 9.0–10.0 | Excellent                     |
| 7.0–8.9  | Good                          |
| 5.0–6.9  | Needs Improvement             |
| 3.0–4.9  | Major Revision Required       |
| 0.0–2.9  | Technical Realization Unsound |

---

# Output Location

```text
docs/raw/report/feature-technical/latest/feature-technical-audit-{timestamp}.md
```

---

