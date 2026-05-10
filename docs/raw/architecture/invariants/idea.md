Define Astra Invariants

This becomes the constitutional layer.

Every validator prompt derives from these invariants.

1. Core Astra Invariants

These are your non-negotiable system truths.

A. Stateless UI Invariant
Rule

UI components must remain presentation-only.

Enforced Constraints
No business logic
No data fetching
No persistence
No direct API calls
No hidden mutable state
Allowed
UI interaction state
animation state
temporary visual state
Violations
axios inside component
database usage
auth logic
domain computation
B. Theme Sovereignty Invariant
Rule

Visual styling must originate from Astra theme tokens only.

Constraints
No hardcoded colors
No hardcoded spacing
No inline typography systems
No external uncontrolled style systems
Required
token usage
theme access abstraction
C. Localization Invariant
Rule

UI text must be localization-driven.

Constraints
No hardcoded user-facing strings
No embedded locale assumptions
D. Atomic Hierarchy Invariant
Rule

Components must obey atomic complexity boundaries.

Constraints
Atom
Primitive
No composition complexity
Molecule
Limited composition
Organism
Complex orchestration
Template
Layout structure only
E. MVVM Separation Invariant
Rule

View, state orchestration, and data access must remain separated.

Constraints
Components cannot fetch data
Hooks orchestrate state
Repository handles IO
F. Repository Isolation Invariant
Rule

External communication must flow only through repository abstractions.

Constraints
No raw axios outside repo
No direct fetch usage
Typed response contracts required
G. Dependency Safety Invariant
Rule

Dependencies must remain auditable, minimal, and controlled.

Constraints
No abandoned packages
No high-risk dependencies
No unsafe Electron APIs
No unpinned critical tooling
H. Public API Stability Invariant
Rule

Only intentional APIs may be exposed.

Constraints
Internal utilities hidden
Controlled exports
Stable library boundary
I. Deterministic Build Invariant
Rule

Build outputs must remain reproducible.

Constraints
No environment-coupled behavior
Explicit build configuration
Stable output artifacts
J. Platform Neutrality Invariant
Rule

Astra core must remain runtime-agnostic.

Constraints
React/Electron separation
No platform leakage
Browser-safe abstractions