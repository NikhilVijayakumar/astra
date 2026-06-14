<!-- generated-by: gsd-doc-writer -->

# ThemeToggle Component

A Material UI icon button that toggles between light and dark themes.

## Overview

Renders an `IconButton` that switches between `DarkModeRoundedIcon` and `LightModeRoundedIcon` based on current theme state. Receives the theme context via a `themeContext` prop and calls `toggleDarkMode()` on click. Accessible with `aria-label="Toggle theme"`.

## Usage

```tsx
import { ThemeToggle } from "./common/theme/ThemeToggle";
import { useTheme } from "./common/theme/themeContext";

function Toolbar() {
  const themeContext = useTheme();

  return <ThemeToggle themeContext={themeContext} />;
}
```

## Props

| Prop           | Type                | Required | Description                     |
| -------------- | ------------------- | -------- | ------------------------------- |
| `themeContext` | `ThemeContextValue` | Yes      | Theme context from `useTheme()` |

## Behavior

- Shows `DarkModeRoundedIcon` when dark mode is active
- Shows `LightModeRoundedIcon` when light mode is active
- Calls `toggleDarkMode()` on click
- Accessible with `aria-label="Toggle theme"`

## Dependencies

- `@mui/material/IconButton`
- `@mui/icons-material/DarkModeRounded`
- `@mui/icons-material/LightModeRounded`

## Responsibilities

- Render an accessible icon button for theme switching
- Display the correct icon based on current `darkMode` state
- Call `toggleDarkMode()` on user click
- Provide appropriate `aria-label` for screen readers

## Non-Responsibilities

- Does not manage theme state or persistence
- Does not handle keyboard shortcut toggling
- Does not render tooltips or labels for theme state
- Does not animate icon transitions

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| IconButton | MUI's `IconButton` component for a circular, icon-only button |
| DarkModeRoundedIcon | MUI icon displayed in dark mode |
| LightModeRoundedIcon | MUI icon displayed in light mode |
| themeContext prop | Injected theme context with `darkMode` and `toggleDarkMode` |

## Edge Cases

- **Missing themeContext**: Component will throw — `themeContext` is a required prop
- **Rapid clicks**: `toggleDarkMode` is synchronous; no race condition
- **SSR**: Component renders on client only; no SSR hydration mismatch
- **Null/undefined context**: TypeScript catches missing prop at compile time

## States

- **Light icon** — `darkMode = false`; renders `LightModeRoundedIcon`
- **Dark icon** — `darkMode = true`; renders `DarkModeRoundedIcon`

## Inputs/Outputs

- **Inputs:** `themeContext: ThemeContextValue` (required) — provides `darkMode` and `toggleDarkMode`
- **Outputs:** Rendered `IconButton` with appropriate icon; `toggleDarkMode()` called on click

## Error Conditions

- **Missing `themeContext` prop** — Component throws; TypeScript catches missing required prop at compile time
- **Null/undefined `themeContext`** — Runtime error when accessing `themeContext.darkMode` or `themeContext.toggleDarkMode`
- **SSR rendering** — Component renders on client only; no SSR hydration mismatch expected

## Future Enhancements

- Animated icon transition (rotate/fade) between sun and moon icons
- Keyboard shortcut (`Ctrl+Shift+T`) for power users
- Tooltip showing current mode and next mode on hover
- Dropdown variant with multiple theme options (light, dark, system)

## Open Questions

- Should the toggle accept a `size` prop, or remain fixed-size for consistency?
- Should the aria-label be localized via the i18n system?
- Is a separate `ThemeMenu` component warranted for multi-theme support?

## Source

`src/common/theme/ThemeToggle.tsx`
