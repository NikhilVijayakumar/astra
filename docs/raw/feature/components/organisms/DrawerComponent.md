---
tier: organism
---

# DrawerComponent

A responsive navigation drawer with generic feature menu items.

## Overview

A generic drawer component that renders a responsive side navigation menu. Displays a temporary drawer on extra-small screens and a permanent drawer on small+ screens. Filters menu items by matching feature names against a provided feature list map.

## Responsibilities

- Render a responsive side navigation drawer (temporary on xs, permanent on sm+)
- Filter menu items by matching feature names against the provided UiFeatureList
- Call onMenuItemClick handler with 0-based index on item click
- Keep mobile drawer content mounted when closed

## API

### Props

| Prop                | Type                        | Default   | Description                              |
| ------------------- | --------------------------- | --------- | ---------------------------------------- |
| `sortedFeatures`    | `T[]`                       | Required  | Feature items sorted by display order    |
| `UiFeatureList`     | `Record<string, UiFeature>` | Required  | Feature key to route mapping             |
| `container`         | `(() => HTMLElement)`       | undefined | Scroll container for mobile drawer       |
| `onMenuItemClick`   | `(index: number) => void`   | Required  | Menu item click handler                  |
| `mobileOpen`        | `boolean`                   | Required  | Mobile drawer open state                 |
| `handleDrawerToggle` | `() => void`               | Required  | Drawer toggle handler for mobile         |

### Types

```typescript
type UiFeature = {
  url: string;
};

interface Features {
  id: number;
  name: string;
  display_order: number;
  icon: SvgIconComponent;
}
```

### Behavior

- Responsive drawer:
  - Temporary drawer on `xs` screens
  - Permanent drawer on `sm+` screens
- Filters display by matching `feature.name` against `UiFeatureList` keys
- Calls `onMenuItemClick(display_order - 1)` on item click
- 240px drawer width

## Validation Rules

- `sortedFeatures`, `UiFeatureList`, `onMenuItemClick`, `mobileOpen`, `handleDrawerToggle` are all required — TypeScript compilation fails if any are omitted
- `container` is optional
- `sortedFeatures` items are filtered by matching `name` against `UiFeatureList` keys — items with no matching key are silently excluded
- Menu item index is computed as `display_order - 1`

## Error Handling

- All features filtered out (no matches in `UiFeatureList`): renders an empty `List`
- Empty `sortedFeatures`: guard clause returns `<List />` with no children
- Null `container`: uses the default portal target (document body)
- Missing feature name in `UiFeatureList`: the item is filtered out silently with no log or error
- No error boundary is provided — errors propagate to the parent

## Non-Responsibilities

- Does not manage navigation, routing, or page transitions
- Does not authenticate users or control access to menu items
- Does not manage mobile menu open/close state — receives `mobileOpen` and `handleDrawerToggle` as props
- Does not handle deep linking or active state highlighting
- Does not fetch feature data — receives `sortedFeatures` and `UiFeatureList` as props

## Edge Cases

- All features filtered out by `UiFeatureList` lookup: renders an empty `List` with no items
- Empty `sortedFeatures` array: returns `<List />` with no children via the `!sortedFeatures || sortedFeatures.length === 0` guard
- Null `container`: mobile drawer uses the default portal target (document body)
- Missing feature name in `UiFeatureList`: the feature's menu item returns `null` and is filtered out
- Very long feature names: truncated by MUI `ListItemText` with ellipsis
- Drawer width is fixed at 240px (`drawerWidth`) and does not resize with viewport
- Mobile drawer uses `keepMounted: true` — drawer content stays in DOM even when closed

## Usage Example

```tsx
import { DrawerComponent } from "@/common/components/organisms/DrawerComponent";

<DrawerComponent
  sortedFeatures={sortedFeatures}
  UiFeatureList={uiFeatureList}
  container={container}
  onMenuItemClick={handleMenuClick}
  mobileOpen={mobileOpen}
  handleDrawerToggle={handleDrawerToggle}
/>
```

## States

- **Open (mobile)**: Temporary drawer visible on xs screens — overlay active
- **Closed (mobile)**: Drawer hidden; content remains mounted via `keepMounted`
- **Open (desktop)**: Permanent drawer visible on sm+ screens — no overlay
- **Empty**: All features filtered out or empty `sortedFeatures` — renders empty `<List />`
- **Filtered**: Some features excluded due to missing `UiFeatureList` entries — only matching items render

## Inputs/Outputs

- **Inputs**: `sortedFeatures`, `UiFeatureList`, `onMenuItemClick`, `mobileOpen`, `handleDrawerToggle` (all required), `container` (optional)
- **Outputs**: Renders a responsive MUI Drawer with filtered List items; calls `onMenuItemClick(index)` on item click
- **Side effects**: None — controlled component (parent manages open state)

## Error Conditions

- **Empty `sortedFeatures`**: Guard clause returns `<List />` with no children
- **No matching features**: All items filtered out — renders empty `<List />`
- **Null `container`**: Falls back to document body for mobile drawer portal
- **Missing feature key**: Item silently excluded with no error log

## Future Enhancements

- Add section headers or dividers to group related menu items
- Support nested/expandable sub-menus for multi-level navigation
- Implement keyboard navigation with arrow keys and focus trapping for accessibility
- Add a collapse/expand toggle for the permanent drawer on desktop

## Open Questions

- Should the drawer persist its open/closed state across navigation (e.g., via localStorage)?
- What is the expected behavior when `UiFeatureList` is empty but `sortedFeatures` has items — show nothing or disable the drawer entirely?
- Should the drawer support a "mini" collapsed variant on desktop showing only icons?

## Core Concepts

- **Responsive breakpoint pattern**: Renders a temporary drawer on `xs` screens (overlay with backdrop) and a permanent drawer on `sm+` screens (always visible, no overlay) — a single component adapts its navigation paradigm to viewport size.
- **Feature-based filtering**: Menu items are filtered by matching `feature.name` against `UiFeatureList` keys — items without a matching key are silently excluded, enabling feature-flag-driven navigation without conditional logic at call sites.
- **Controlled component pattern**: `mobileOpen` and `handleDrawerToggle` are parent-owned — the drawer has no internal open/close state, keeping the mobile toggle decision in the parent's responsive logic.
- **Content keep-mounted on mobile**: Uses `keepMounted: true` for the mobile drawer — drawer content stays in the DOM when closed, preserving scroll position and avoiding remount animations on toggle.

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/DrawerComponent.tsx`
