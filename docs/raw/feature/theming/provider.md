<!-- generated-by: gsd-doc-writer -->

# ThemeProvider

The `ThemeProvider` component wraps your application to provide theme context and MUI theming.

## Overview

Wraps the application tree with theme context and MUI's `ThemeProvider`. Reads persisted theme preference from `localStorage` on mount and selects the appropriate light or dark MUI theme object. Exposes `darkMode` state and `toggleDarkMode` to all descendants via React context.

## Usage

```tsx
import { ThemeProvider } from "./common/theme/ThemeProvider";
import { lightTheme, darkTheme } from "./theme";

function App() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Props

| Prop         | Type                | Required | Description                |
| ------------ | ------------------- | -------- | -------------------------- |
| `children`   | `ReactNode`         | Yes      | Application content        |
| `lightTheme` | `Theme`             | Yes      | MUI theme for light mode   |
| `darkTheme`  | `Theme`             | Yes      | MUI theme for dark mode    |
| `forceTheme` | `'light' \| 'dark'` | No       | Override theme (Storybook) |

## State Management

- **Internal state**: `darkMode` boolean stored in `localStorage` under key `darkMode`
- **Persistence**: Theme preference persists across sessions
- **Override**: `forceTheme` prop overrides internal state (useful for Storybook)

## How It Works

1. Reads `darkMode` from `localStorage` on mount
2. Selects theme based on `darkMode` value
3. Provides `ThemeContext` with `{ darkMode, toggleDarkMode }`
4. Wraps children with MUI's `ThemeProvider` + `CssBaseline`

## Responsibilities

- Initialize theme state from `localStorage` on mount
- Select and apply the correct MUI theme object (light/dark)
- Provide `darkMode` and `toggleDarkMode` via React context
- Wrap children with MUI `ThemeProvider` and `CssBaseline`
- Support `forceTheme` override for Storybook and testing

## Non-Responsibilities

- Does not render UI controls for theme switching
- Does not handle system-level `prefers-color-scheme` media query
- Does not manage per-component theme overrides
- Does not validate theme object shape or missing tokens

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| MUI ThemeProvider | Material UI's provider that injects theme into the component tree |
| CssBaseline | MUI component that normalizes browser styles |
| ThemeContext | Custom React context for exposing theme state |
| localStorage | Browser storage keyed by `darkMode` for persistence |

## Edge Cases

- **localStorage unavailable**: Catches exceptions; defaults to light mode
- **forceTheme active**: Overrides internal `darkMode` state entirely; useful for Storybook
- **SSR**: `localStorage` is not available on the server; component renders light theme
- **Missing themes**: If `lightTheme`/`darkTheme` props are invalid, MUI `ThemeProvider` may throw
- **Nested mount**: Only one `ThemeProvider` should manage theme at the root level

## States

- **Initializing** — On mount, reading `darkMode` from `localStorage`; no theme applied yet
- **Light mode** — `darkMode = false`; `lightTheme` applied via MUI `ThemeProvider`
- **Dark mode** — `darkMode = true`; `darkTheme` applied via MUI `ThemeProvider`
- **Forced** — `forceTheme` prop overrides internal state; used in Storybook/test

## Inputs/Outputs

- **Inputs:** `children`, `lightTheme`, `darkTheme` (required); `forceTheme` (optional)
- **Outputs:** `ThemeContext` with `{ darkMode, toggleDarkMode }`; MUI theme injected into component tree; `CssBaseline` applied

## Error Conditions

- **localStorage throws** — Exception caught; defaults to light mode; preference not persisted
- **Invalid theme prop** — MUI `ThemeProvider` may throw if theme object is malformed or missing keys
- **Missing `forceTheme` value** — If provided with incorrect type, TypeScript catches at compile time

## Future Enhancements

- System-level `prefers-color-scheme` media query detection for automatic mode
- Cross-tab theme sync via `BroadcastChannel` or `storage` event listener
- Transition animations when switching between light and dark themes
- Multiple named themes beyond light/dark (e.g., high-contrast, sepia)

## Open Questions

- Should theme preference be synced to a backend for authenticated users?
- How should third-party iframes or embedded content respect the theme?
- Is a gradual migration path needed for consumers still on the old theming system?

## Source

`src/common/theme/ThemeProvider.tsx`
