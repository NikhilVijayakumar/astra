# Component Library

The UI component library is organized by atomic design methodology into four tiers.

## Tier Overview

| Tier | Purpose | Components |
|------|---------|------------|
| **Atoms** | Small, reusable primitives representing basic states | StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState |
| **Molecules** | Composed components combining atoms for specific UI patterns | Card, Notification, TrendMetricCard, ImageViewer, MdViewer, JsonViewer |
| **Organisms** | Complex UI sections composed of molecules and atoms | DataTable, FormLayout, DrawerComponent, ToolbarComponent, FileViewerRouter, CsvViewer |
| **Templates** | Page structure components | PageHeader, SummaryPanel, HeroSection |

## Responsibilities

- Organize all UI components by atomic design tier
- Enable consistent composition patterns
- Integrate with theme and localization systems

## Non-Responsibilities

- Does not define application-level routing or page composition
- Does not manage global application state
- Does not implement domain-specific business logic

## Core Concepts

- **Atomic Design**: Components organized into Atoms → Molecules → Organisms → Templates hierarchy
- **Theme Integration**: All components adapt to light/dark theme
- **Localization Ready**: Components display translated text based on active language

## States

- **Organized** — All components correctly filed by atomic tier
- **Unclassified** — New component exists but not assigned to a tier
- **Deprecated** — Component superseded by newer version

## Edge Cases

- **Cross-Tier Components**: Components that could logically fit multiple tiers
- **Third-Party Wrappers**: External component wrappers needing custom tier assignment

## Error Conditions

- **Incorrect import path** — Importing from wrong tier directory causes build failure
- **Cross-tier dependency violation** — Lower tier imports from higher tier creates circular dependency

## User Journey

### Entry Conditions
A developer needs a UI component and consults the component library to find the right one.

### Primary Flow
The developer identifies the atomic tier (atom/molecule/organism/template) that matches the component need, navigates to that directory, and reads the component doc.

### Alternate Flows
A developer has an existing component they want to classify and uses the atomic design methodology doc and flowchart to determine the correct tier.

### Failure Flows
A developer imports a component from the wrong tier directory, causing a build failure due to cross-tier dependency violations.

### Recovery Flows
The developer moves the component to the correct tier directory and updates the import paths.

### Exit Conditions
The developer finds the component and integrates it into their feature, or classifies a new component correctly.

## Workflow

### Trigger
A developer needs to find or classify a UI component.

### Preconditions
The component library is organized by atomic tiers and each tier directory exists.

### Steps
The developer identifies the component need, consults the tier overview, navigates to the appropriate directory, and reads the component specification.

### Outcomes
The developer understands which component to use or where to place a new component.

### Exceptions
A component could fit multiple tiers — the developer uses the atomic design flowchart to resolve the ambiguity.

### Completion Criteria
The developer locates the correct component or assigns the new component to the correct tier.

## Atomic Design Methodology

For detailed methodology on component classification and design principles, see [Atomic Design](./atomic-design/README.md).
