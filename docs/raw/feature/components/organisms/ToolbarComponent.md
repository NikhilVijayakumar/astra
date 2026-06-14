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

## Validation Rules

- `handleDrawerToggle`, `title`, `themeContext` are all required — TypeScript compilation fails if any are omitted
- No runtime validation is performed

## Error Handling

- Missing theme context: `useTheme()` throws (must be wrapped in `ThemeProvider`) — this is an invariant violation, not a runtime fallback
- Long `title`: truncated with ellipsis via MUI `noWrap` Typography prop
- Menu icon is hidden on `sm+` screens via CSS `display` — no breakpoint-related errors
- No error boundary is provided — errors propagate to the parent

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

## States

- **Idle**: Default rendered state — title, menu button (mobile), and theme toggle visible
- **Mobile**: Menu icon button visible (screens sm and below)
- **Desktop**: Menu icon hidden (screens sm+, CSS `display: none`)

## Inputs/Outputs

- **Inputs**: `handleDrawerToggle` (required callback), `title` (required string), `themeContext` (required ThemeContextValue)
- **Outputs**: Renders MUI AppBar with menu toggle, title (truncated with ellipsis), and ThemeToggle
- **Side effects**: None — controlled component; `handleDrawerToggle` fired on menu icon click

## Error Conditions

- **Missing theme context**: `useTheme()` throws invariant error — must be wrapped in `ThemeProvider`
- **All props required**: TypeScript compilation fails if any prop is omitted

## Future Enhancements

- Add a search bar slot that expands inline on focus
- Support additional action slots (notifications, user avatar, settings gear)
- Implement scroll-aware behavior that hides the toolbar on scroll down and reveals on scroll up
- Add a breadcrumb slot for nested page navigation context

## Open Questions

- Should the toolbar support dynamic title updates without remounting?
- What is the correct accessibility role and aria label for the theme toggle button?
- Should the mobile menu icon be configurable (hamburger vs arrow vs custom icon)?

## Core Concepts

- **Fixed-position AppBar pattern**: Uses MUI `AppBar` with `position: 'fixed'` — the toolbar stays at the top of the viewport during scroll, providing persistent access to navigation and theme controls.
- **Responsive visibility strategy**: The mobile menu toggle icon is hidden on `sm+` screens via `sx={{ display: { sm: 'none' } }}` — a CSS-based responsive pattern that avoids JavaScript breakpoint detection.
- **Context-driven theme toggle**: The `ThemeToggle` component receives `themeContext` as a prop rather than reading it internally — the parent (App) resolves the context, keeping the toolbar agnostic to theme provider structure.
- **Controlled callback pattern**: `handleDrawerToggle` is a required prop callback — the toolbar fires the event but the parent decides what happens, following the controlled component convention.

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/ToolbarComponent.tsx`
