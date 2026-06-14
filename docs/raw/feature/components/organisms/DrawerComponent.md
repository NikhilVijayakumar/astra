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

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/DrawerComponent.tsx`
