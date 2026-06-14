---
tier: organism
---

# ToolbarComponent

An app bar component with navigation toggle and theme switch.

## Overview

A top app bar that displays a mobile menu toggle button, a title, and a theme toggle control bound to the Astra theme context. Built on MUI AppBar.

## Responsibilities

- Render a fixed-position app bar at the top of the viewport
- Display a mobile menu toggle icon button (visible on small screens only)
- Render the title text with truncation for long strings
- Render the ThemeToggle component bound to the provided theme context

## API

### Props

| Prop                | Type              | Default   | Description                        |
| ------------------- | ----------------- | --------- | ---------------------------------- |
| `handleDrawerToggle` | `() => void`     | Required  | Menu icon click handler            |
| `title`             | `string`          | Required  | App bar title text                 |
| `themeContext`       | `ThemeContextValue` | Required | Theme context for toggle control |

### Interface

```typescript
interface ToolbarProps {
  handleDrawerToggle: () => void;
  title: string;
  themeContext: ThemeContextValue;
}
```

### Behavior

- Renders MUI AppBar with:
  - Mobile menu icon button (visible on small screens)
  - Title text
  - ThemeToggle bound to the provided `themeContext`

## Non-Responsibilities

- Does not handle navigation, routing, or page transitions
- Does not manage authentication or user session state
- Does not render content below the app bar
- Does not manage drawer open/close state — receives `handleDrawerToggle` as a prop
- Does not handle responsive layout beyond hiding the menu icon on larger screens

## Edge Cases

- All props are required: `title`, `handleDrawerToggle`, and `themeContext` must always be provided
- Long title: title text truncates with an ellipsis via MUI `noWrap` prop
- Menu icon is only visible on `sm` and smaller screens (hidden via `display: { sm: 'none' }`)
- Drawer toggle fires on every click regardless of screen size — parent should handle responsive behavior

## Usage Example

const AppToolbar = () => {
  const themeContext = useTheme();

  return (
    <ToolbarComponent
      title="Astra Admin"
      handleDrawerToggle={handleDrawerToggle}
      themeContext={themeContext}
    />
  );
};
```

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/ToolbarComponent.tsx`
