<!-- generated-by: gsd-doc-writer -->

# useTheme Hook

The `useTheme` hook provides access to theme context values in any component.

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

## Source

`src/common/theme/themeContext.ts`
