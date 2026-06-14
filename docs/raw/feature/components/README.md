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

## Atomic Design Methodology

For detailed methodology on component classification and design principles, see [Atomic Design](./atomic-design/README.md).
