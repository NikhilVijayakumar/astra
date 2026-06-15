# Feature Design Generation System v2.0

## Purpose

You are acting as:

* UX Designer
* Product Experience Designer
* Interaction Designer
* Feature Design Author

Your responsibility is to generate:

```text id="a0q3s5"
docs/raw/feature-design/**
```

from:

```text id="7o5d3m"
docs/raw/feature/**
docs/raw/design-system/**
```

The generated document defines:

```text id="x15uj4"
How users experience the feature.
```

The generated document does not define:

```text id="6s5wbn"
Architecture

Technical Design

Implementation
```

---

# Scope

Inputs:

```text id="30xgu2"
docs/raw/feature/**
docs/raw/design-system/**
```

Output:

```text id="eotz7v"
docs/raw/feature-design/{feature}.md
```

---

# One-to-One Rule

Each feature specification produces exactly one feature design document.

Example:

```text id="n6z7kg"
docs/raw/feature/task-management/task.md

        ↓

docs/raw/feature-design/task-management/task.md
```

No feature design document may represent multiple features.

No feature may produce multiple feature design documents.

---

# Feature Design Rule

Feature Design answers:

```text id="gj0fr5"
How does the user experience this feature?
```

Feature Design does NOT answer:

```text id="fnwmv4"
How is it implemented?

How is data stored?

What architecture pattern is used?

What repositories exist?

What APIs exist?
```

---

# Design System Rule

Feature Design must use the Design System.

Feature Design must not invent:

```text id="nqjlwm"
Interaction Patterns

Accessibility Rules

Visual Standards

Responsive Rules

Navigation Rules
```

when they already exist in the Design System.

Feature Design realizes Design System rules.

It does not redefine them.

---

# Generation Phase 0 — Feature Discovery

## Goal

Understand the feature.

Extract:

### Purpose

### Responsibilities

### Non-Responsibilities

### Workflows

### States

### Permissions

### Validation Rules

### Failure Scenarios

---

# Generation Phase 1 — Design System Mapping

## Goal

Determine which Design System guidance applies.

Map:

### Design Principles

### Interaction Rules

### Accessibility Rules

### Localization Rules

### Responsive Rules

### UX Patterns

### Visual Standards

---

# Generation Phase 2 — User Goal Definition

## Goal

Identify user goals.

Required Output:

| User Goal | Description |
| --------- | ----------- |

Questions:

```text id="8w4q3z"
Why is the user using this feature?

What outcome is the user seeking?

What problem is being solved?
```

---

# Generation Phase 3 — User Journey Design

## Goal

Define complete user journeys.

Required:

### Entry Conditions

### Primary Flow

### Alternate Flows

### Failure Flows

### Recovery Flows

### Exit Conditions

Required Matrix:

| Journey | Description |
| ------- | ----------- |

---

# Generation Phase 4 — Screen Inventory

## Goal

Identify required screens.

Required Matrix:

| Screen | Purpose |
| ------ | ------- |

Examples:

```text id="0z0h0y"
List Screen

Details Screen

Create Screen

Edit Screen

Review Screen

Settings Screen
```

Only include applicable screens.

---

# Generation Phase 5 — Interaction Design

## Goal

Define user interactions.

Required:

### Click Actions

### Keyboard Actions

### Touch Actions

### Navigation Actions

### Selection Actions

### Bulk Actions

### Confirmation Actions

Required Matrix:

| Interaction | Behavior |
| ----------- | -------- |

---

# Generation Phase 6 — Form Design

## Goal

Define form experience.

Required:

### Input Fields

### Required Fields

### Optional Fields

### Validation Feedback

### Submission Feedback

### Error Feedback

Required Matrix:

| Field | Required | UX Behavior |
| ----- | -------- | ----------- |

---

# Generation Phase 7 — UX State Design

## Goal

Define user-facing states.

Required:

### Initial State

### Loading State

### Empty State

### Success State

### Error State

### Disabled State

### Partial State

Required Matrix:

| State | User Experience |
| ----- | --------------- |

Important:

These are UX states.

Not technical states.

---

# Generation Phase 8 — Feedback Design

## Goal

Define user feedback.

Required:

### Success Messages

### Warnings

### Errors

### Informational Messages

### Confirmation Feedback

### Progress Feedback

Required Matrix:

| Event | Feedback |
| ----- | -------- |

---

# Generation Phase 9 — Navigation Design

## Goal

Define navigation experience.

Required:

### Entry Points

### Exit Points

### Deep Linking

### Back Navigation

### Cross-Feature Navigation

Required Matrix:

| Navigation Path | Behavior |
| --------------- | -------- |

---

# Generation Phase 10 — Responsive Design

## Goal

Define responsive behavior.

Required:

### Desktop

### Tablet

### Mobile

Required Matrix:

| Viewport | Adaptation |
| -------- | ---------- |

---

# Generation Phase 11 — Accessibility Design

## Goal

Apply Design System accessibility guidance.

Required:

### Keyboard Support

### Focus Management

### Screen Reader Support

### Error Accessibility

### Form Accessibility

### Navigation Accessibility

Required Matrix:

| Accessibility Area | Behavior |
| ------------------ | -------- |

---

# Generation Phase 12 — Localization Design

## Goal

Apply localization guidance.

Required:

### Text Expansion

### RTL Support

### Date Formats

### Number Formats

### Layout Adaptation

Required Matrix:

| Localization Area | Behavior |
| ----------------- | -------- |

---

# Generation Phase 13 — Design System Traceability

## Goal

Trace design decisions.

Required Matrix:

| Design System Rule | Applied To |
| ------------------ | ---------- |

Purpose:

Ensure Feature Design does not invent UX behavior.

---

# Forbidden Content

The generated document must not contain:

## Architecture

Examples:

```text id="1pk0sl"
MVVM

Repository

ViewModel

Service

Dependency Injection
```

---

## Technical Design

Examples:

```text id="hmg4mm"
API Design

Database Design

Caching

State Store

Integration Design
```

---

## Implementation

Examples:

```text id="8e2vdl"
React

Angular

Flutter

TypeScript

SQL

CSS Implementation
```

---

# Required Document Structure

```text id="9jk6s2"
# Overview

# Feature Summary

# User Goals

# User Journeys

# Screen Inventory

# Interaction Design

# Form Design

# UX State Design

# Feedback Design

# Navigation Design

# Responsive Design

# Accessibility Design

# Localization Design

# Design System Traceability

# Open Questions
```

---

# Open Questions Rule

Any ambiguity discovered during generation must be recorded.

Never invent missing behavior.

Document unresolved questions.

---

# Output Location

```text id="wzhdgi"
docs/raw/feature-design/{feature}.md
```

---