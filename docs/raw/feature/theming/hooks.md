<!-- generated-by: gsd-doc-writer -->

# useTheme Hook

The `useTheme` hook provides access to theme context values in any component.

## Overview

A React hook that consumes `ThemeContext` to expose the current theme state (`darkMode`) and a toggle function (`toggleDarkMode`). Must be called within a `ThemeProvider` subtree. Returns typed context values defined by `ThemeContextValue`.

## Usage

```tsx
import { useTheme } from "./common/theme/themeContext";

function MyComponent() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
```

## Return Value

| Property         | Type         | Description                   |
| ---------------- | ------------ | ----------------------------- |
| `darkMode`       | `boolean`    | `true` if dark mode is active |
| `toggleDarkMode` | `() => void` | Toggles between light/dark    |

## Context Type

Defined in `src/common/theme/themeData.ts`:

```ts
type ThemeContextValue = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
```

## Notes

- Must be used within a `ThemeProvider` wrapper
- Can be combined with `forceTheme` prop for testing
- Theme preference is persisted in `localStorage`

## Responsibilities

- Provide typed access to `darkMode` boolean from `ThemeContext`
- Provide `toggleDarkMode` callable function to consumers
- Throw a descriptive error if called outside `ThemeProvider`

## Non-Responsibilities

- Does not manage or mutate theme state directly
- Does not interact with `localStorage`
- Does not render any UI elements
- Does not subscribe to system theme changes

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| ThemeContext | React context created via `createContext<ThemeContextValue>` |
| ThemeContextValue | Type `{ darkMode: boolean; toggleDarkMode: () => void }` |
| useContext | React primitive used to consume the context |
| Null fallback | Hook throws if context is `undefined` (outside provider) |

## Edge Cases

- **Missing provider**: Throws `"useTheme must be used within a ThemeProvider"` error
- **Undefined context**: Checks for `undefined` explicitly; provides clear error message
- **Stale closure**: `toggleDarkMode` reference is stable across renders
- **Type narrowing**: Return value is typed; no runtime coercion needed

## States

- **Within provider** — Hook returns valid `{ darkMode, toggleDarkMode }`; ready for consumption
- **Outside provider** — Hook throws descriptive error; consumer must be wrapped in `ThemeProvider`

## Inputs/Outputs

- **Inputs:** None (hook has no parameters)
- **Outputs:** `{ darkMode: boolean, toggleDarkMode: () => void }` — current theme state and toggle callback

## Error Conditions

- **Called outside ThemeProvider** — Throws `"useTheme must be used within a ThemeProvider"` at runtime
- **Undefined context** — Explicit `undefined` check before returning; provides clear error message
- **Stale closure** — `toggleDarkMode` reference is stable across renders; no stale closure risk

## Future Enhancements

- Derived theme queries (e.g., `isDark`, `isLight` convenience booleans)
- Memoized selectors to prevent unnecessary re-renders in deeply nested components
- `useThemeValue(path)` hook for accessing individual design tokens by key

## Open Questions

- Should `useTheme` expose lower-level MUI theme object in addition to darkMode?
- Is there value in a `useColorMode` hook distinct from full theme context?
- How should theme-aware non-MUI libraries (e.g., Emotion styled) access the theme?

## Source

`src/common/theme/themeContext.ts`
