# Feature Documentation

Modular documentation for Astra library features. Each module contains focused, atomic documents.

## Overview

Feature Documentation provides a structured index of all Astra library features organized by domain. Each module contains focused, atomic documentation for its specific feature area, enabling independent reference and maintenance.

## Interfaces

### Modules

### [Components](./components/)

UI components organized by Atomic Design methodology:

- **Atoms** - StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState
- **Molecules** - Card, Notification, TrendMetricCard, ImageViewer, MdViewer, JsonViewer
- **Organisms** - DataTable, FormLayout, DrawerComponent, ToolbarComponent, FileViewerRouter, CsvViewer
- **Templates** - PageHeader, SummaryPanel, HeroSection

### [State Management](./state/)

- **useDataState Hook** - Async state hook with loading/success/error tracking
- **AppStateHandler** - Conditional UI router for Loading/Error/Empty/Success states

### [Repository Layer](./repository/)

- **ApiService** - HTTP client (GET, POST, PUT, DELETE) with error handling
- **ServerResponse** - Generic response wrapper with success/error factory methods
- **HttpStatusCode** - Status code enum (200/201/400/401/404/500/0/1000)

### [Localization](./localization/)

- **LanguageProvider** - Context-based i18n provider with runtime switching
- **useLanguage Hook** - Access to current language, translation dictionary, and language list
- **Translation Patterns** - Key naming conventions and best practices

### [Theming](./theming/)

- **ThemeProvider** - Light/dark mode with localStorage persistence
- **useTheme Hook** - Consume darkMode state and toggleDarkMode function
- **ThemeToggle** - Icon button for switching between light/dark themes
- **Design Tokens** - Colors, spacing, typography tokens

### [MVVM Architecture](./mvvm/)

- **Pattern** - Model-View-ViewModel separation using useDataState + AppStateHandler
- **Best Practices** - Do/Don't guidelines and common pitfalls

## Quick Links

| Feature          | Module                           |
| ---------------- | -------------------------------- |
| State Management | [state/](./state/)               |
| Theming          | [theming/](./theming/)           |
| Localization     | [localization/](./localization/) |
| API Service      | [repository/](./repository/)     |
| MVVM Pattern     | [mvvm/](./mvvm/)                 |
| UI Components    | [components/](./components/)     |

## Directory Structure

```
src/
├── common/
│   ├── components/            # UI component library
│   │   ├── atoms/             # 5 components
│   │   ├── molecules/         # 6 components
│   │   ├── organisms/         # Organisms (DataTable, FileViewerRouter, etc.)
│   │   └── templates/         # 3 components
│   ├── hooks/                 # useDataState
│   ├── localization/          # LanguageProvider, useLanguage
│   ├── repo/                  # ApiService, ServerResponse, HttpStatusCode
│   ├── state/                 # AppState types
│   └── theme/                 # ThemeProvider, ThemeToggle, themeContext
├── theme/
│   └── tokens/
│       ├── spacing.ts
│       ├── typography.ts
│   └── colors.ts

## Responsibilities

- **Feature Indexing:** Catalog all library features by domain for easy discovery
- **Navigation Structure:** Provide quick links and cross-references between modules
- **Module Organization:** Maintain consistent structure across all feature modules

## Non-Responsibilities

- **API Reference:** Does not replace detailed API or usage documentation
- **Implementation Guides:** Does not provide step-by-step implementation tutorials
- **Cross-Feature Integration:** Does not document patterns combining multiple features

## Edge Cases

- **Multi-Module Features:** Features whose implementation spans multiple documentation modules
- **Shared Concerns:** Documentation topics relevant to multiple features
- **Deprecated Features:** Features in transition that exist across module boundaries

## Core Concepts

- **Modularity:** Each feature is documented in an independent, self-contained module
- **Discoverability:** Navigation aids and quick links enable fast feature location
- **Consistency:** All modules follow the same structural conventions for predictability

## States

- **Documented** — Feature has complete, up-to-date documentation module
- **In-progress** — Documentation partially written or under active development
- **Deprecated** — Feature still documented but marked for removal or replacement

## Inputs/Outputs

- **Inputs:** Feature name or domain (components, state, theming, mvvm, localization, repository)
- **Outputs:** Module documentation with component listings, usage patterns, edge cases, and cross-references

## Error Conditions

- **Missing module** — Feature exists in codebase but has no documentation entry
- **Broken cross-reference** — Link to related module points to non-existent or moved document
- **Outdated documentation** — Module describes behavior that no longer matches implementation
- **Orphaned module** — Documentation exists for a feature that has been removed from codebase

## Future Enhancements

- Auto-generated documentation from TypeScript source annotations
- Searchable documentation portal with cross-module full-text search
- Versioned documentation that tracks feature changes across releases
- Integration diagram showing how all feature modules compose together

## Open Questions

- Should each feature doc include a changelog or version history section?
- How should experimental / beta features be marked in the documentation?
- Is there a need for a contributing guide specific to documentation updates?
```
