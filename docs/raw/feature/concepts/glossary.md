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

## Referenced External Concepts

These concepts are owned by `architecture/` docs. Feature docs reference them but do not define them.

| Concept | Owning Doc | Referenced From |
|---------|-----------|-----------------|
| MVVM pattern | `architecture/core/mvvm-pattern.md` | state/README.md (implicit) |
| Repository pattern | `architecture/core/repository.md` | state/README.md (implicit) |
| useDataState hook | `architecture/core/hooks.md` | state/README.md (implicit) |
| AppStateHandler | `architecture/core/state-management.md` | state/README.md (implicit) |
| ThemeProvider | `architecture/core/theming.md` | theming/README.md (implicit) |
| useTheme hook | `architecture/core/hooks.md` | theming/ThemeToggle.md (implicit) |
| LanguageProvider | `architecture/core/localization.md` | localization/README.md (implicit) |
| useLanguage hook | `architecture/core/hooks.md` | localization/README.md (implicit) |
