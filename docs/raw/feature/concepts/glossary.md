# Feature Ownership Glossary

Every concept in the system has exactly one owning feature doc. Other docs may reference it, but the owning doc is authoritative.

## Core Concepts

| Concept | Owning Feature | File |
|---------|---------------|------|
| Async state lifecycle | State Management | `state/README.md` |
| State-driven UI routing | State Management | `state/README.md` |
| Three-phase lifecycle (INIT/LOADING/COMPLETED) | State Management | `state/README.md` |
| Light/dark mode | Theming System | `theming/README.md` |
| Theme persistence | Theming System | `theming/README.md` |
| Design tokens | Design Tokens | `theming/tokens.md` |
| Theme toggle | ThemeToggle | `theming/ThemeToggle.md` |
| Runtime language switching | Localization | `localization/README.md` |
| Translation dictionaries | Localization | `localization/README.md` |
| Translation key naming | Translation Patterns | `localization/patterns.md` |
| Component library | Component Library | `components/README.md` |
| Atomic design methodology | Atomic Design | `components/atomic-design/README.md` |
| Authorization model | Authorization | `concepts/authorization.md` |
| Dependency contracts | Dependency Contracts | `concepts/dependency-contracts.md` |
| Lifecycle ordering | Lifecycle | `concepts/lifecycle.md` |

## Components

| Component | Owning Tier | File |
|-----------|-------------|------|
| StatusDot | Atoms | `components/atoms/StatusDot.md` |
| SeverityBadge | Atoms | `components/atoms/SeverityBadge.md` |
| LoadingState | Atoms | `components/atoms/LoadingState.md` |
| ErrorState | Atoms | `components/atoms/ErrorState.md` |
| EmptyState | Atoms | `components/atoms/EmptyState.md` |
| Card | Molecules | `components/molecules/Card.md` |
| Notification | Molecules | `components/molecules/Notification.md` |
| TrendMetricCard | Molecules | `components/molecules/TrendMetricCard.md` |
| ImageViewer | Molecules | `components/molecules/ImageViewer.md` |
| MdViewer | Molecules | `components/molecules/MdViewer.md` |
| JsonViewer | Molecules | `components/molecules/JsonViewer.md` |
| DataTable | Organisms | `components/organisms/DataTable.md` |
| FormLayout | Organisms | `components/organisms/FormLayout.md` |
| DrawerComponent | Organisms | `components/organisms/DrawerComponent.md` |
| ToolbarComponent | Organisms | `components/organisms/ToolbarComponent.md` |
| FileViewerRouter | Organisms | `components/organisms/FileViewerRouter.md` |
| CsvViewer | Organisms | `components/organisms/CsvViewer.md` |
| PageHeader | Templates | `components/templates/PageHeader.md` |
| SummaryPanel | Templates | `components/templates/SummaryPanel.md` |
| HeroSection | Templates | `components/templates/HeroSection.md` |

## Referenced Architecture Concepts

These capabilities are owned by `docs/raw/architecture/` documents. Feature docs describe WHAT these capabilities do; architecture docs define HOW they are realized. Feature specifications must not reference implementation names (hooks, providers, classes).

| Capability (WHAT) | Authoritative Architecture Doc |
|-------------------|---------------------------------|
| Async state tracking mechanism | `architecture/core/state-management.md` |
| MVVM pattern | `architecture/core/mvvm-pattern.md` |
| Repository data access pattern | `architecture/core/repository.md` |
| Theme context delivery mechanism | `architecture/core/theming.md` |
| Language context delivery mechanism | `architecture/core/localization.md` |
| Hook contracts for state, theme, and language | `architecture/core/hooks.md` |
