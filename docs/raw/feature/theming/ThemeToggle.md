<!-- generated-by: gsd-doc-writer -->

# ThemeToggle Component

A Material UI icon button that toggles between light and dark themes.

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

## Source

`src/common/theme/ThemeToggle.tsx`
