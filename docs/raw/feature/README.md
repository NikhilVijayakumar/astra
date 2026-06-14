# Feature Documentation

Modular documentation for Astra library features. Each module contains focused, atomic documents.

## Modules

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
│       └── colors.ts
```
