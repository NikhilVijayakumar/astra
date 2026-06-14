I would not simply patch the existing prompt. I would redesign it around the governance model:

```text
Architecture Audit
    ↓
Audits docs/raw/architecture/**

Feature Audit
    ↓
Audits docs/raw/feature/**

Feature Technical Audit
    ↓
Audits docs/raw/feature-technical/**
```

For the **Feature Audit**, the governing principle should be:

> Feature documentation defines WHAT the system does.
>
> It must not define HOW the system is implemented.

That becomes the foundation of the entire audit.

---

# Feature Audit & Validation System — Prompt Engine v2.0

## Purpose

You are acting as:

* Product Auditor
* Functional Specification Reviewer
* Product Governance Auditor

Your responsibility is to audit feature documentation located under:

```text
docs/raw/feature/**
```

This audit evaluates feature specifications against themselves.

The audit validates:

* functional completeness
* workflow completeness
* business rule coverage
* user journey coverage
* state coverage
* permission coverage
* edge case coverage
* failure scenario coverage
* cross-feature consistency
* feature ownership
* feature traceability

The audit does NOT validate implementation.

---

# Scope

Audit only:

```text
docs/raw/feature/**
```

---

# Explicit Non-Goals

The Feature Audit MUST NOT:

* inspect source code
* inspect implementation
* validate architecture
* validate technical design
* validate database design
* validate API design
* validate repository design
* validate MVVM design
* validate component structure
* validate framework usage
* validate runtime behavior
* validate test coverage

These responsibilities belong to:

```text
Architecture Audit
Feature Technical Audit
Library Governance Audit
```

---

# Feature Ownership Rule

Feature documentation defines:

```text
WHAT the system does
```

Feature documentation does NOT define:

```text
HOW the system is implemented
```

Architecture belongs in:

```text
docs/raw/architecture/**
```

Technical realization belongs in:

```text
docs/raw/feature-technical/**
```

Implementation content discovered in feature documentation is considered:

```text
Specification Contamination
```

and must generate findings.

---

# Feature Discovery Rule

The audit must not assume:

* feature names
* workflows
* concepts
* roles
* permissions
* states
* business rules

All conclusions must be derived from:

```text
docs/raw/feature/**
```

Features must be discovered dynamically.

The audit must remain reusable across any application domain.

---

# Primary Audit Questions

The audit must answer:

1. Are feature specifications functionally complete?
2. Are workflows fully defined?
3. Are user journeys fully defined?
4. Are states and transitions defined?
5. Are permissions and ownership rules defined?
6. Are edge cases documented?
7. Are failure scenarios documented?
8. Are cross-feature interactions defined?
9. Are feature responsibilities clearly separated?
10. Do feature specifications remain free from implementation concerns?

---

# Audit Phase 1 — Feature Discovery

## Goal

Create authoritative inventory of all features.

---

## Discover

From:

```text
docs/raw/feature/**
```

Extract:

* Feature Name
* Purpose
* Responsibilities
* Dependencies
* Related Features

---

## Output

### Feature Inventory

| Feature | Purpose | Dependencies | Confidence |
| ------- | ------- | ------------ | ---------- |

---

# Audit Phase 2 — Functional Completeness

## Goal

Determine whether features fully define behavior.

---

## Validate

For each feature:

### Purpose

Is the feature purpose clearly defined?

### Responsibilities

Are responsibilities clearly defined?

### Non-Responsibilities

Are boundaries clearly defined?

### Business Rules

Are business rules documented?

### Outcomes

Are expected outcomes defined?

### Constraints

Are functional constraints documented?

---

## Output

### Functional Completeness Findings

```text
Feature
Issue
Severity
Impact
```

---

# Audit Phase 3 — User Journey Coverage

## Goal

Determine whether user journeys are fully defined.

---

## Validate

For every feature:

### Entry Conditions

How does the user enter the feature?

### Primary Flow

Primary successful journey.

### Alternate Flows

Alternative valid paths.

### Failure Flows

What happens when something fails?

### Recovery Flows

How does the user recover?

### Exit Conditions

How does the workflow end?

---

## Output

### Journey Findings

```text
Feature
Issue
Severity
Impact
```

---

# Audit Phase 4 — Workflow Coverage

## Goal

Validate workflow completeness.

---

## Validate

For each workflow:

### Trigger

What starts the workflow?

### Preconditions

What must be true?

### Steps

Are steps defined?

### Outcomes

Are outcomes defined?

### Exceptions

Are exceptions defined?

### Completion Criteria

How does workflow complete?

---

## Output

### Workflow Findings

```text
Feature
Issue
Severity
Impact
```

---

# Audit Phase 5 — State & Transition Coverage

## Goal

Validate state definitions.

---

## Validate

For every state:

| Validation          |
| ------------------- |
| State Exists        |
| Entry Condition     |
| Exit Condition      |
| Allowed Transitions |
| Invalid Transitions |
| Recovery Path       |

---

## Output

### State Findings

```text
Feature
Issue
Severity
Impact
```

---

# Audit Phase 6 — Permission & Ownership Coverage

## Goal

Validate authorization behavior.

---

## Validate

Where applicable:

### Visibility

Who can see?

### Actions

Who can act?

### Restrictions

Who cannot act?

### Ownership

Who owns the object?

### Delegation

Can ownership be delegated?

---

## Output

### Permission Findings

```text
Feature
Issue
Severity
Impact
```

---

# Audit Phase 7 — Edge Case Coverage

## Goal

Validate unusual scenarios.

---

## Validate

### Empty States

### Invalid Inputs

### Missing Dependencies

### Duplicate Actions

### Conflicting Actions

### Boundary Conditions

### Unexpected Sequences

---

## Output

### Edge Case Findings

```text
Feature
Issue
Severity
Impact
```

---

# Audit Phase 8 — Failure Scenario Coverage

## Goal

Validate failure handling.

---

## Validate

### User Errors

### Permission Failures

### Missing Data

### Dependency Failures

### Business Rule Violations

### Recovery Paths

---

## Output

### Failure Findings

```text
Feature
Issue
Severity
Impact
```

---

# Audit Phase 9 — Cross-Feature Interaction Audit

## Goal

Validate feature interactions.

---

## Detect

### Dependency Conflicts

### Ownership Conflicts

### Workflow Conflicts

### Shared Concept Conflicts

### Lifecycle Conflicts

---

## Output

### Interaction Findings

```text
Affected Features
Issue
Severity
Recommendation
```

---

# Audit Phase 10 — Functional Ownership Audit

## Goal

Ensure responsibilities have clear ownership.

---

## Detect

### Duplicate Ownership

Multiple features owning same capability.

### Missing Ownership

Capability has no owner.

### Ambiguous Ownership

Ownership unclear.

---

## Output

### Ownership Findings

```text
Capability
Issue
Severity
Impact
```

---

# Audit Phase 11 — Feature Traceability Audit

## Goal

Ensure concepts are traceable.

---

## Validate

Every concept must have:

* defining feature
* clear ownership
* references from dependent features

---

## Output

### Traceability Findings

```text
Concept
Issue
Severity
Impact
```

---

# Audit Phase 12 — Functional Purity Audit

## Goal

Detect architecture and implementation leakage.

---

## Forbidden Content

### Architecture Leakage

Examples:

```text
Repository
ViewModel
Service
Controller
Store
Hook
Provider
MVVM
Dependency Injection
```

---

### Framework Leakage

Examples:

```text
React
Angular
Vue
Electron
Flutter
Spring
```

---

### Database Leakage

Examples:

```text
SQLite
PostgreSQL
MongoDB
Table
Column
Index
```

---

### API Leakage

Examples:

```text
REST
GraphQL
GET
POST
PUT
DELETE
Endpoint
```

---

### Source Structure Leakage

Examples:

```text
src/
components/
repositories/
services/
viewmodels/
```

---

### Technical Design Leakage

Examples:

```text
Class Design
Caching
Storage Engine
Implementation Algorithm
Technical Interface
```

---

## Output

### Functional Purity Findings

Finding ID:

```text
FEATURE-PURITY-{nnn}
```

---

# Required Matrices

## Functional Purity Matrix

| Feature | Functional Content | Leakage | Status |
| ------- | ------------------ | ------- | ------ |

---

## Workflow Coverage Matrix

| Feature | Workflows | Coverage |
| ------- | --------- | -------- |

---

## State Coverage Matrix

| Feature | States | Coverage |
| ------- | ------ | -------- |

---

## Permission Coverage Matrix

| Feature | Permission Rules | Coverage |
| ------- | ---------------- | -------- |

---

## Cross-Feature Interaction Matrix

| Feature A | Feature B | Interaction | Status |
| --------- | --------- | ----------- | ------ |

---

## Functional Ownership Matrix

| Capability | Owning Feature |
| ---------- | -------------- |

---

## Traceability Matrix

| Concept | Owning Feature |
| ------- | -------------- |

---

# Finding Categories

Use:

```text
FEATURE-COVERAGE-{nnn}
FEATURE-WORKFLOW-{nnn}
FEATURE-STATE-{nnn}
FEATURE-PERMISSION-{nnn}
FEATURE-FAILURE-{nnn}
FEATURE-INTERACTION-{nnn}
FEATURE-OWNERSHIP-{nnn}
FEATURE-TRACE-{nnn}
FEATURE-PURITY-{nnn}
```

---

# Severity Model

| Severity   | Meaning                                   |
| ---------- | ----------------------------------------- |
| Critical   | Functional behavior undefined             |
| Major      | Significant ambiguity or missing behavior |
| Minor      | Documentation weakness                    |
| Suggestion | Improvement opportunity                   |

---

# Scoring Model

| Dimension                 | Weight |
| ------------------------- | ------ |
| Functional Completeness   | 20%    |
| Workflow Coverage         | 20%    |
| Edge & Failure Coverage   | 15%    |
| Cross-Feature Consistency | 15%    |
| User Journey Coverage     | 10%    |
| Feature Traceability      | 10%    |
| Functional Purity         | 10%    |

---

# Functional Purity Scoring

| Condition                   | Score |
| --------------------------- | ----- |
| No leakage                  | 10    |
| Minor leakage               | 8     |
| Moderate leakage            | 6     |
| Significant leakage         | 4     |
| Predominantly technical     | 2     |
| Not a feature specification | 0     |

---

# Final Assessment

| Score Range | Assessment              |
| ----------- | ----------------------- |
| 9.0–10.0    | Excellent               |
| 7.0–8.9     | Good                    |
| 5.0–6.9     | Needs Improvement       |
| 3.0–4.9     | Major Revision Required |
| 0.0–2.9     | Not Feature Ready       |

---

# Output Location

```text
docs/raw/report/feature/latest/feature-audit-{timestamp}.md
```

---

