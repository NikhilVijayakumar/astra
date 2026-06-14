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

## Responsibilities

- Manage light/dark theme state across the application
- Persist theme preference to `localStorage`
- Provide theme context to all descendant components
- Apply MUI theme object and CSS baseline

## Non-Responsibilities

- Does not manage per-component theming or CSS-in-JS overrides
- Does not handle system-level theme preferences (`prefers-color-scheme`)
- Does not synchronize theme across multiple browser tabs
- Does not provide animation or transition theme values

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| Theme Context | React context providing `darkMode` state and toggle function |
| MUI Theme | Material UI theme object with palette, typography, and shape |
| CSS Baseline | MUI's `CssBaseline` for consistent browser default styling |
| localStorage | Persistence layer for theme preference across sessions |

## Edge Cases

- **Missing localStorage**: Falls back to light mode if `localStorage` is unavailable or throws
- **SSR rendering**: Theme cannot read `localStorage` during server render; defaults to light mode
- **forceTheme override**: Storybook or test environments bypass internal state entirely
- **Rapid toggling**: Toggle is synchronous; no debounce required
- **Nested providers**: Only the outermost `ThemeProvider` should manage theme state

## States

- **Uninitialized** — On SSR or before `localStorage` is read; defaults to light mode
- **Light mode** — `darkMode = false`; light MUI theme applied
- **Dark mode** — `darkMode = true`; dark MUI theme applied
- **Forced mode** — `forceTheme` override active (Storybook/test); bypasses persisted state

## Inputs/Outputs

- **Inputs:** `forceTheme` prop, `localStorage` key `darkMode`, light/dark MUI theme objects
- **Outputs:** `ThemeContext` value `{ darkMode, toggleDarkMode }`, MUI `ThemeProvider` + `CssBaseline` wrapping

## Error Conditions

- **localStorage unavailable** — `localStorage.getItem`/`setItem` throws; fallback to light mode
- **SSR rendering** — No `window` or `localStorage`; renders light theme, hydration may flicker
- **Invalid theme objects** — MUI `ThemeProvider` may throw if `lightTheme`/`darkTheme` are malformed
- **Nested providers** — Multiple `ThemeProvider` instances cause conflicting context; only root should manage state

## Future Enhancements

- System `prefers-color-scheme` detection with opt-in auto mode
- Theme transition animations for palette changes
- High-contrast accessibility theme variant
- Per-component theme overrides via CSS variables instead of MUI theme

## Open Questions

- Should theme preference be synced across browser tabs?
- How should embedded widgets or micro-frontends participate in theming?
- Is CSS variable-based theming a better long-term approach than MUI theme objects?

## Related Docs

- [ThemeProvider](provider.md) — Context provider setup
- [useTheme hook](hooks.md) — Consuming theme in components
- [ThemeToggle](ThemeToggle.md) — Toggle button component
- [Design Tokens](tokens.md) — Spacing, colors, typography
