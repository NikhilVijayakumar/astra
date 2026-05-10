# Feature Documentation

Modular documentation for Astra library features. Each module contains focused, atomic documents.

## Modules

### [Components](./components/)

UI components organized by Atomic Design methodology:

- **Atoms** - StatusDot, SeverityBadge
- **Molecules** - Card, Notification, TrendMetricCard
- **Organisms** - 27 complex UI components (DataTable, TimelineNode, FileTree, etc.)
- **Layout/Templates** - PageHeader, SummaryPanel, HeroSection
- **File Viewers** - FileViewerRouter, CsvViewer, JsonViewer, ImageViewer, MdViewer

### [State Management](./state/)

- **AppStateHandler** - Centralized state management
- **useDataState Hook** - Reactive state for components

### [Repository Layer](./repository/)

- **ApiService** - HTTP client with error handling
- **Data access patterns** - Clean separation of concerns

### [Localization](./localization/)

- **LanguageProvider** - Context-based i18n
- **Translation utilities** - Multi-language support

### [Theming](./theming/)

- **ThemeProvider** - Light/dark mode support
- **Design tokens** - Spacing, typography, colors

### [MVVM Architecture](./mvvm/)

- **Model-View-ViewModel** - Separation of concerns
- **Application structure** - Best practices for Electron + React apps

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
│   └── components/           # UI component library
│       ├── atoms/             # StatusDot, SeverityBadge
│       ├── molecules/         # Card, Notification, TrendMetricCard
│       ├── organisms/          # 27 complex components
│       ├── templates/         # PageHeader, SummaryPanel, HeroSection
│       ├── file-viewers/      # ImageViewer, MdViewer
│       ├── navigation/        # Navigation components
│       └── wrapper/           # Wrapper components
├── theme/                     # Design tokens
│   └── tokens/
│       ├── spacing.ts
│       ├── typography.ts
│       └── colors.ts
├── services/                  # ApiService
├── state/                     # AppStateHandler
└── context/                   # ThemeProvider, LanguageProvider
```
