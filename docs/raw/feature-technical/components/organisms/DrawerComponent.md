# DrawerComponent

---

# Feature Summary

A responsive navigation drawer organism that renders a temporary drawer on `xs` screens (with overlay) and a permanent drawer on `sm+` screens. Filters navigation items by matching feature names against an externally-provided feature flag map. Built on MUI Drawer with a generic type parameter for type-safe feature items.

---

# Implementation Reference

## Status

Implemented

## Source Files

| File | Path | Role |
|------|------|------|
| Component | `src/common/components/organisms/DrawerComponent.tsx` | View — responsive navigation drawer |
| Data types | `src/common/components/organisms/drawerData.ts` | Type definitions (`Features`, `UiFeature`, `DrawerProps`, `drawerWidth`) |
| Barrel | `src/common/components/organisms/index.ts` | Re-exports `DrawerComponent` |

No test or story files exist.

## Public API

### Exports

```
DrawerComponent       (generic component)
Features              (interface)
UiFeature             (type alias)
DrawerProps           (generic interface)
drawerWidth           (const = 240)
```

### Import Path

```typescript
import { DrawerComponent } from "src/common/components/organisms/DrawerComponent";
import type { Features, DrawerProps } from "src/common/components/organisms/drawerData";
// or via barrel:
import { DrawerComponent } from "src/common/components/organisms";
```

### Generic Constraint

```typescript
interface Features {
  id: number;
  name: string;
  display_order: number;
  icon: SvgIconComponent;
}

type UiFeature = {
  url: string;
};

// DrawerComponent is parameterized: <T extends Features>
```

### Props Interface

```typescript
interface DrawerProps<T extends Features> {
  sortedFeatures: T[] | null;                     // required — feature items sorted by display_order
  UiFeatureList: Record<string, UiFeature>;        // required — feature key to route mapping
  container: (() => HTMLElement) | undefined;      // optional — scroll container for mobile drawer
  onMenuItemClick: (index: number) => void;         // required — click handler (index = display_order - 1)
  mobileOpen: boolean;                              // required — mobile drawer open state
  handleDrawerToggle: () => void;                   // required — drawer toggle handler
}
```

### Contract

- `sortedFeatures`, `UiFeatureList`, `onMenuItemClick`, `mobileOpen`, `handleDrawerToggle` are required
- `container` is optional — defaults to document body
- Menu items filtered by matching `feature.name` against `UiFeatureList` keys — no match = item excluded silently
- Menu item click index computed as `display_order - 1`
- `drawerWidth` constant = 240px — not configurable
- Mobile drawer uses `keepMounted: true` — content stays in DOM when closed

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Stateless UI | Controlled component | `mobileOpen` and `handleDrawerToggle` owned by parent — component fires callbacks only |
| Atomic Hierarchy | Organism | Composes MUI Drawer, List, ListItem (molecules/atoms) |
| MVVM Separation | Pure View | No data fetching, no business logic, no ViewModel |
| Theme Sovereignty | Styling via MUI theme | `drawerWidth` used in `sx` width — no hardcoded breakpoint values beyond MUI defaults |
| Dependency Safety | Minimal imports | Only MUI components, `SvgIconComponent` type, `drawerData` |

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|-----------------|--------------|
| `DrawerComponent` | `src/common/components/organisms/DrawerComponent.tsx` | Responsive navigation drawer | Render dual-drawer (temporary + permanent), filter items by UiFeatureList, fire onMenuItemClick on selection | MUI (`Drawer`, `List`, `ListItem`, `ListItemButton`, `ListItemIcon`, `ListItemText`, `Divider`, `Toolbar`, `Box`), `drawerData` |

## State Model

No ViewModel or domain state. The component is fully controlled — parent owns `mobileOpen` and `handleDrawerToggle`.

### UI-Only Internal State

- `loadList()` — memoization-free render helper; not state
- `handleListItemClick` — event handler that delegates to `onMenuItemClick` prop

## State Machine (View States)

| State | Condition | Rendered Output |
|-------|-----------|----------------|
| Open (mobile) | `mobileOpen === true`, xs screen | Temporary Drawer visible with overlay |
| Closed (mobile) | `mobileOpen === false`, xs screen | Temporary Drawer hidden (content keptMounted) |
| Open (desktop) | sm+ screen | Permanent Drawer visible, no overlay |
| Empty | `sortedFeatures === null \|\| sortedFeatures.length === 0` | Empty `<List />` |
| Filtered | Some features excluded by UiFeatureList lookup | Only matching items render; unmatched items produce `null` |
| All filtered | No features match UiFeatureList keys | Empty `<List />` rendered |

## Workflow Design

```
Parent resolves sortedFeatures, UiFeatureList, mobileOpen
       ↓
DrawerComponent filters items: sortedFeatures.filter(f => UiFeatureList[f.name])
       ↓
Renders two Drawer elements:
  ├── Temporary (xs only, display: { xs: 'block', sm: 'none' })
  │     ├── open={mobileOpen}
  │     └── onClose={handleDrawerToggle}
  └── Permanent (sm+ only, display: { xs: 'none', sm: 'block' })
       └── open (always)
       ↓
User clicks menu item
       ↓
handleListItemClick(display_order - 1)
       ↓
onMenuItemClick(index) → parent handles navigation/drawer close
```

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `sortedFeatures`, `UiFeatureList`, `onMenuItemClick`, `mobileOpen`, `handleDrawerToggle` required | TypeScript compilation | TS error | N/A — compile-time |
| Feature name not in UiFeatureList | Runtime filter check | Item returns `null`, excluded from rendered list | Silent exclusion — no error log |
| Empty sortedFeatures | `!sortedFeatures \|\| sortedFeatures.length === 0` guard | Returns `<List />` with no children | Empty drawer rendered |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|-----------|-------|----------------|---------------|
| All features filtered out | No matching UiFeatureList keys | Renders empty `<List />` | Drawer appears blank |
| Empty sortedFeatures | Array is null or length 0 | Guard clause returns `<List />` | Drawer appears blank |
| Null container | `container` prop is undefined | Default portal target (document body) | Mobile drawer renders correctly |
| Missing feature key | `UiFeatureList[name]` is undefined | Item returns `null`, excluded silently | Feature not visible in drawer (silent) |
| Long feature names | Name string exceeds container | MUI `ListItemText` truncates with ellipsis | Text truncated |
| Duplicate display_order | Two features share display_order | `onMenuItemClick(display_order - 1)` fires with same index | Ambiguous navigation — parent must handle |

---

# Non-Functional Requirements

## Performance

- Two Drawer instances mounted simultaneously — one always hidden via `display: none`
- `keepMounted: true` on mobile drawer preserves DOM — avoids remount cost but increases baseline DOM size
- Filter pass is O(n) on `sortedFeatures` — no memoization; re-runs on every render

## Reliability

- CSS-based responsive visibility (`display: { xs: 'block', sm: 'none' }` / inverse) — no JS breakpoint listener, no hydration mismatch
- Guard clause on null/empty `sortedFeatures` prevents runtime iteration on null
- Fixed 240px width defined as exported constant — consistent across all drawer variants

## Maintainability

- Generic type parameter `<T extends Features>` allows type-safe feature items without casting
- Filter logic centralized in `loadList()` — single location for item inclusion/exclusion logic
- Two Drawer elements with complementary `display` rules — responsive behavior is explicit and CSS-driven

---

# Architecture Compliance Review

## Applied Patterns

- **Stateless UI**: Full compliance — parent manages open state
- **Atomic Hierarchy**: Full compliance — organism tier
- **MVVM Separation**: Full compliance — pure View
- **Theme Sovereignty**: Full compliance — no hardcoded values except `drawerWidth` (defined as exported constant)
- **Repository Isolation**: N/A — no data access

## Risks

- `drawerWidth` is a hardcoded constant (240px) — violates Theme Sovereignty if considered a design token; should derive from theme if theme-based drawer widths are needed
- Silent feature exclusion (no match in `UiFeatureList`) with no warning or log — debugging difficulty when expected items don't appear
- Two Drawer instances in DOM simultaneously increases DOM size on all viewports — permanent drawer is always mounted even if never visible (sm+ only display)
- `onMenuItemClick` uses `display_order - 1` as index — fragile; assumes `display_order` is 1-based and contiguous

## Gaps

- No active/highlighted state for current navigation item
- No aria `aria-current` or `aria-selected` on active item
- No keyboard navigation (arrow keys, focus trapping) — documented in future enhancements
- No collapsible/expandable desktop drawer variant

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `DrawerComponent` | `src/common/components/organisms/DrawerComponent.tsx` | `DrawerComponent` | MUI (`List`, `ListItem`, `ListItemButton`, `ListItemIcon`, `ListItemText`, `Divider`, `Toolbar`, `Box`, `Drawer`), `drawerData` |
| `drawerData` | `src/common/components/organisms/drawerData.ts` | `Features`, `UiFeature`, `DrawerProps`, `drawerWidth` | `@mui/icons-material` (type only: `SvgIconComponent`) |
| Barrel | `src/common/components/organisms/index.ts` | `DrawerComponent` | re-exports |

---

# Final Rule

The component must remain fully controlled — `mobileOpen` and `handleDrawerToggle` must never have internal state. Feature filtering via `UiFeatureList` is a runtime decision; items without a matching key are silently excluded. The `display_order` field must be treated as 1-based; the index passed to `onMenuItemClick` is `display_order - 1`. Any change to the `DrawerProps` generic constraint (`Features` interface) is a breaking API change.
