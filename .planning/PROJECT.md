# Project: Astra

**Type:** React + Electron Boilerplate Library
**Version:** 1.1.0
**Initialized:** 2026-04-09

## What is Astra?

Astra is a standalone boilerplate library for building React and Electron applications. It provides:

- **MVVM Architecture** with `useDataState` hook for state management
- **Theming** via Material UI with Light/Dark mode support
- **Localization** with `LanguageProvider` for i18n
- **API Repository** - type-safe Axios wrapper
- **36+ UI Components** organized by Atomic Design
- **Electron-ready** structure and patterns

## Core Value

Provide a production-ready, well-tested foundation that developers can extend with confidence, backed by clear documentation and consistent patterns.

## Requirements

### Validated

- v1.0: Quality improvements (type safety, testing, security fixes)
- v1.0: Component library refactored to Atomic Design structure
- v1.0: Modular documentation structure in docs/feature/
- v1.1: Atomic Design Documentation (DOCS-01 through DOCS-07, REFA-01) — full milestone shipped 2026-04-19

### Active

- [ ] Component Standards Enforcement — Phase 4 requirements TBD

### Out of Scope

- CI/CD pipeline (library, not app)
- React Native support
- Major API changes
- Breaking changes to exports

## Current State

**Shipped v1.1.0** on 2026-04-19. All Atomic Design documentation complete.

**Active work:** Phase 4 - Component Standards Enforcement (in planning)

## Context

- **Architecture:** MVVM with Repository pattern
- **Stack:** React 19, TypeScript, Vite, Material UI 7, Electron
- **Build:** Dual ESM/UMD output via vite-plugin-dts
- **Distribution:** Published to npm, consumed via GitHub dependencies
- **Consumers:** Client applications add `astra` to their `package.json`
- **Documentation:** docs/feature/ and docs/integration-guide/

### Component Structure (Atomic Design)

All UI components are organized following Atomic Design methodology:

```
src/common/components/
├── atoms/           # StatusDot, SeverityBadge
├── molecules/       # Card, Notification, TrendMetricCard
├── organisms/       # 27 complex components
├── templates/       # PageHeader, SummaryPanel, HeroSection
├── file-viewers/    # ImageViewer, MdViewer
├── navigation/      # Navigation components
└── wrapper/         # Wrapper components
```

## Constraints

- Must maintain backward compatibility
- Cannot break existing consumer imports
- React 19 is required (documented limitation)
- Electron support required
- No React Native support (documented)

## Key Decisions

| Decision                                  | Rationale                                    | Outcome |
| ----------------------------------------- | -------------------------------------------- | ------- |
| Atomic Design for components              | Consistency, predictability, maintainability | ✓ Good  |
| Modular docs structure                    | Better discoverability than monolith docs    | ✓ Good  |
| Barrel exports                            | Clean import API for consumers               | ✓ Good  |
| Methodology docs: Mermaid diagrams        | Visual clarity without external dependencies | ✓ Good  |
| Methodology docs: Comprehensive reference | Full explanations with anti-patterns         | ✓ Good  |

## Dependencies

**Critical to maintain:**

- `@mui/material@7.2.0`
- `react@19.2.3`
- `typescript@5.8.3`

**Needs monitoring:**

- `@mui/lab@7.0.0-beta.14` (pre-release)
- `framer-motion@^11.0.0`
- `lucide-react@^0.400.0`

---

_Last updated: 2026-04-19 after v1.1.0 milestone completion_

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):

1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):

1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state
