# Feature Documentation

Modular documentation for Astra library features. Each module describes WHAT the system does.

## Modules

### [Components](./components/)

UI components organized by Atomic Design methodology:

- **Atoms** - StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState
- **Molecules** - Card, Notification, TrendMetricCard, ImageViewer, MdViewer, JsonViewer
- **Organisms** - DataTable, FormLayout, DrawerComponent, ToolbarComponent, FileViewerRouter, CsvViewer
- **Templates** - PageHeader, SummaryPanel, HeroSection

### [State Management](./state/)

Async state lifecycle with loading/success/error tracking and state-driven UI routing.

### [Localization](./localization/)

Context-based i18n with runtime language switching, translation dictionaries, and naming conventions.

### [Theming](./theming/)

Light/dark mode with persistent theme preference, design tokens, and theme toggle.

### [Concepts](./concepts/)

Cross-cutting specifications that apply to all features:

- **Authorization** - Visibility rules, permissions, ownership, and delegation
- **Dependency Contracts** - Formal contracts between features
- **Lifecycle** - Initialization ordering and failure cascading
- **Glossary** - Concept-to-feature ownership mapping

## Quick Links

| Feature          | Module                       |
| ---------------- | ---------------------------- |
| State Management | [state/](./state/)           |
| Theming          | [theming/](./theming/)       |
| Localization     | [localization/](./localization/) |
| UI Components    | [components/](./components/) |

## Responsibilities

- **Feature Indexing:** Catalog all library features by domain for easy discovery
- **Navigation Structure:** Provide quick links and cross-references between modules
- **Module Organization:** Maintain consistent structure across all feature modules

## Non-Responsibilities

- **API Reference:** Does not replace detailed API or usage documentation
- **Implementation Guides:** Does not provide step-by-step implementation tutorials
- **Cross-Feature Integration:** Does not document patterns combining multiple features

## States

- **Documented** — Feature has complete, up-to-date documentation module
- **In-progress** — Documentation partially written or under active development
- **Deprecated** — Feature still documented but marked for removal or replacement

## Error Conditions

- **Missing module** — Feature exists in codebase but has no documentation entry
- **Broken cross-reference** — Link to related module points to non-existent or moved document
- **Orphaned module** — Documentation exists for a feature that has been removed from codebase

## Authorization

**Visibility:** Internal — developer reference document. No runtime access control applies.

## User Journey

### Entry Conditions
A developer navigates to the feature documentation to understand what modules are available.

### Primary Flow
The developer browses module listings and follows links to detailed docs for state, theming, localization, or components.

### Alternate Flows
A developer uses the quick-links table to jump directly to a specific module.

### Failure Flows
A module link points to a missing or moved file; the developer sees a broken page.

### Recovery Flows
The developer returns to the index and uses the directory structure or search to find the correct module.

### Exit Conditions
The developer finds the information needed and navigates away, or opens a specific module doc.

## Workflow

### Trigger
A developer opens the feature documentation index.

### Preconditions
The documentation directory exists and has content.

### Steps
The developer scans the module listing, identifies a relevant module, and opens its README or component doc.

### Outcomes
The developer understands what features are available and where to find their documentation.

### Exceptions
A module is marked deprecated or in-progress; the developer considers alternatives.

### Completion Criteria
The developer locates the documentation for the feature they need.

## See Also

- [Glossary](./concepts/glossary.md) — concept-to-feature ownership map
- [Authorization Model](./concepts/authorization.md) — cross-cutting permission rules
- [Dependency Contracts](./concepts/dependency-contracts.md) — formal contracts between features
- [Lifecycle Ordering](./concepts/lifecycle.md) — initialization ordering and failure cascading

## Future Enhancements

- Searchable documentation portal with cross-module full-text search
- Versioned documentation that tracks feature changes across releases
- Integration diagram showing how all feature modules compose together

## Open Questions

- Should each feature doc include a changelog or version history section?
- How should experimental or beta features be marked in the documentation?
