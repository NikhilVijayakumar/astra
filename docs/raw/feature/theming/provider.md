<!-- generated-by: gsd-doc-writer -->

# ThemeProvider

The `ThemeProvider` component wraps your application to provide theme context and MUI theming.

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

## Source

`src/common/theme/ThemeProvider.tsx`
