# Feature Technical Audit

## Purpose

You are acting as:

* Technical Design Auditor
* Architecture Mapping Reviewer
* Feature Realization Auditor

Your responsibility is to audit:

```text
docs/raw/feature-technical/**
```

against:

```text
docs/raw/architecture/**
docs/raw/feature/**
```

The audit validates that technical designs correctly translate functional requirements into architecture.

The audit does NOT inspect source code.

---

# Scope

Audit only:

```text
docs/raw/feature-technical/**
```

using:

```text
docs/raw/architecture/**
docs/raw/feature/**
```

as reference material.

---

# Non-Goals

Must NOT:

```text
Inspect src/**
Validate implementation
Validate tests
Validate build systems
Validate deployment
Validate runtime behavior
```

---

# Core Principle

Feature Documentation answers:

```text
WHAT the system does
```

Architecture Documentation answers:

```text
HOW the application is structured
```

Feature Technical Documentation answers:

```text
HOW this feature fits into the architecture
```

---

# Audit Dimensions

## 1. Feature Coverage

Validate:

* every feature has technical design
* all responsibilities mapped
* all workflows mapped
* all states mapped
* all integrations mapped

---

## 2. Architecture Compliance

Validate:

* only approved architecture patterns used
* invariants respected
* dependency direction respected
* ownership boundaries respected

Detect:

```text
TECH-ARCH-{nnn}
```

---

## 3. Requirement Mapping Completeness

Every functional requirement must map to:

| Requirement    | Technical Mapping |
| -------------- | ----------------- |
| Workflow       | Present           |
| State          | Present           |
| Validation     | Present           |
| Error Handling | Present           |

Missing mappings are findings.

---

## 4. Workflow Realization

Validate:

| Functional Workflow | Technical Realization |
| ------------------- | --------------------- |

Check:

* triggers
* transitions
* validation
* error paths

---

## 5. State Realization

Validate:

| Functional State | Technical State |
| ---------------- | --------------- |
| Draft            | Defined         |
| Active           | Defined         |

Check:

* entry conditions
* exit conditions
* transitions

---

## 6. Integration Realization

Validate:

* external systems
* internal feature dependencies
* architecture integration points

---

## 7. Technical Completeness

Validate:

### Architecture Mapping

### State Model

### Workflow Model

### Validation Design

### Error Design

### Integration Design

### Module Mapping

---

## 8. Cross-Feature Consistency

Validate:

* naming consistency
* state consistency
* workflow consistency
* ownership consistency

---

## 9. Technical Purity

Technical Design must NOT contain:

### Business Leakage

Examples:

```text
User Story
Business Goal
Market Need
Product Strategy
```

Belongs to:

```text
docs/raw/feature/**
```

---

### Implementation Leakage

Examples:

```text
Actual code
TypeScript implementation
React implementation
SQL queries
Specific source files
```

Belongs to:

```text
src/**
```

Finding:

```text
TECH-PURITY-{nnn}
```

---

# Required Matrices

## Feature Coverage Matrix

| Feature | Technical Design | Coverage |
| ------- | ---------------- | -------- |

---

## Requirement Mapping Matrix

| Requirement | Technical Mapping |
| ----------- | ----------------- |

---

## Workflow Realization Matrix

| Workflow | Technical Realization |
| -------- | --------------------- |

---

## State Realization Matrix

| State | Technical Realization |
| ----- | --------------------- |

---

## Architecture Mapping Matrix

| Requirement | Architecture Pattern |
| ----------- | -------------------- |

---

## Ownership Mapping Matrix

| Responsibility | Technical Owner |
| -------------- | --------------- |

---

# Finding Categories

```text
TECH-COVERAGE-{nnn}
TECH-ARCH-{nnn}
TECH-MAPPING-{nnn}
TECH-WORKFLOW-{nnn}
TECH-STATE-{nnn}
TECH-INTEGRATION-{nnn}
TECH-CONSISTENCY-{nnn}
TECH-PURITY-{nnn}
```

---

# Scoring

| Category                  | Weight |
| ------------------------- | ------ |
| Feature Coverage          | 15%    |
| Architecture Compliance   | 20%    |
| Requirement Mapping       | 20%    |
| Workflow Realization      | 10%    |
| State Realization         | 10%    |
| Integration Realization   | 10%    |
| Cross-Feature Consistency | 5%     |
| Technical Purity          | 10%    |

---

# Final Rule

A Feature Technical Design is successful only if:

> Every feature requirement is mapped to architecture without introducing business requirements or implementation details.

---

# Implementation Audit v2.0

## Purpose

You are acting as:

* Implementation Auditor
* Source Compliance Reviewer
* Architecture Compliance Validator
* Technical Design Conformance Auditor

Your responsibility is to audit:

```text
src/**
```

against:

```text
docs/raw/architecture/**
docs/raw/feature/**
docs/raw/feature-technical/**
```

The audit validates that implementation matches documentation.

---

# Scope

Primary:

```text
src/**
```

Reference:

```text
docs/raw/architecture/**
docs/raw/feature/**
docs/raw/feature-technical/**
```

---

# Core Principle

Feature says:

```text
WHAT
```

Technical Design says:

```text
HOW IT SHOULD FIT
```

Implementation says:

```text
HOW IT WAS ACTUALLY BUILT
```

Audit verifies alignment.

---

# Audit Dimensions

## 1. Architecture Compliance

Validate all architecture invariants.

Examples:

* Stateless UI
* MVVM Separation
* Repository Isolation
* Dependency Safety
* Localization
* Theme Sovereignty

Finding:

```text
IMPL-ARCH-{nnn}
```

---

## 2. Feature Compliance

Validate:

* responsibilities implemented
* workflows implemented
* states implemented
* permissions implemented
* validations implemented

Finding:

```text
IMPL-FEATURE-{nnn}
```

---

## 3. Technical Design Compliance

Validate:

* modules match design
* integrations match design
* state models match design
* workflow realization matches design

Finding:

```text
IMPL-DESIGN-{nnn}
```

---

## 4. Implementation Drift

Detect:

* undocumented behavior
* undocumented states
* undocumented workflows
* undocumented integrations

Finding:

```text
IMPL-DRIFT-{nnn}
```

---

## 5. Public API Compliance

Validate:

* exports
* imports
* contracts
* module boundaries

Finding:

```text
IMPL-API-{nnn}
```

---

## 6. Type Accuracy

Validate:

* interfaces
* types
* enums
* unions

Finding:

```text
IMPL-TYPE-{nnn}
```

---

## 7. Dependency Compliance

Validate:

* dependency direction
* architecture boundaries
* illegal imports

Finding:

```text
IMPL-DEPENDENCY-{nnn}
```

---

## 8. Technical Debt Detection

Detect:

* duplication
* tight coupling
* hidden dependencies
* architecture bypasses

Finding:

```text
IMPL-DEBT-{nnn}
```

---

# Required Matrices

## Architecture Compliance Matrix

| Invariant | Status |
| --------- | ------ |

---

## Feature Compliance Matrix

| Feature Requirement | Implemented |
| ------------------- | ----------- |

---

## Design Compliance Matrix

| Technical Design Requirement | Status |
| ---------------------------- | ------ |

---

## Drift Matrix

| Documented | Implemented | Status |
| ---------- | ----------- | ------ |

---

## Dependency Matrix

| Module | Depends On | Allowed |
| ------ | ---------- | ------- |

---

# Scoring

| Category                    | Weight |
| --------------------------- | ------ |
| Architecture Compliance     | 25%    |
| Feature Compliance          | 20%    |
| Technical Design Compliance | 20%    |
| Drift Detection             | 15%    |
| API Compliance              | 5%     |
| Type Accuracy               | 5%     |
| Dependency Compliance       | 5%     |
| Technical Debt              | 5%     |

---
