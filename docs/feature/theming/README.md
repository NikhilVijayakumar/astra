<!-- generated-by: gsd-doc-writer -->

# Theming System

The theming system provides light/dark mode support using MUI's theming infrastructure with custom design tokens.

## Overview

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  ThemeProvider  │────▶│   ThemeContext   │────▶│  useTheme hook  │
│  (wraps app)    │     │  (darkMode,     │     │  (consumes)     │
│                 │     │   toggle)        │     │                 │
└─────────────────┘     └──────────────────┘     └─────────────────┘
         │                                                │
         ▼                                                ▼
  ┌──────────────────┐                          ┌─────────────────┐
│  MUI Theme Object  │                          │  ThemeToggle   │
│  (light/dark)      │                          │  (UI component)│
└──────────────────┘                          └─────────────────┘
```

## Key Components

| Component       | Location            | Purpose                        |
| --------------- | ------------------- | ------------------------------ |
| `ThemeProvider` | `src/common/theme/` | Wraps app, manages theme state |
| `ThemeContext`  | `src/common/theme/` | React context for theme values |
| `useTheme()`    | `src/common/theme/` | Hook to consume theme context  |
| `ThemeToggle`   | `src/common/theme/` | UI button to switch themes     |
| Design Tokens   | `src/theme/tokens/` | Colors, spacing, typography    |

## Related Docs

- [ThemeProvider](provider.md) — Context provider setup
- [useTheme hook](hooks.md) — Consuming theme in components
- [ThemeToggle](ThemeToggle.md) — Toggle button component
- [Design Tokens](tokens.md) — Spacing, colors, typography
