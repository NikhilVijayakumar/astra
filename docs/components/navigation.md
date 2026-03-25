# Navigation Components

Source:
- src/common/components/navigation/DrawerComponent.tsx
- src/common/components/navigation/ToolbarComponent.tsx
- src/common/components/navigation/drawerData.ts
- src/common/components/navigation/Toolbardata.ts

## Shared Types

```ts
type UiFeature = {
  url: string;
};

interface Features {
  id: number;
  name: string;
  display_order: number;
  icon: SvgIconComponent;
}

const drawerWidth = 240;
```

## DrawerComponent

Generic component:

```ts
DrawerComponent<T extends Features>
```

Props:

```ts
type DrawerProps<T extends Features> = {
  sortedFeatures: T[] | null;
  UiFeatureList: Record<string, UiFeature>;
  container: (() => HTMLElement) | undefined;
  onMenuItemClick: (index: number) => void;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};
```

Behavior:
- Renders temporary drawer on xs screens.
- Renders permanent drawer on sm+ screens.
- Filters display by matching feature.name against UiFeatureList keys.
- Calls onMenuItemClick(display_order - 1) on item click.

```tsx
<DrawerComponent
  sortedFeatures={sortedFeatures}
  UiFeatureList={uiFeatureList}
  container={container}
  onMenuItemClick={handleMenuClick}
  mobileOpen={mobileOpen}
  handleDrawerToggle={handleDrawerToggle}
/>
```

## ToolbarComponent

Props:

```ts
type ToolbarProps = {
  handleDrawerToggle: () => void;
  title: string;
  themeContext: ThemeContextValue;
};
```

Behavior:
- Renders AppBar with:
  - mobile menu icon button
  - title
  - ThemeToggle bound to provided themeContext

```tsx
<ToolbarComponent
  title="Astra Admin"
  handleDrawerToggle={handleDrawerToggle}
  themeContext={themeContext}
/>
```

## Integration Notes

1. Keep sortedFeatures in ViewModel/container layer.
2. Keep UiFeatureList as stable map keyed by feature name.
3. Use ToolbarComponent with Astra ThemeContextValue from useTheme().

## Related Docs

- ../MVVM_Clean_Architecture.md
- ../Theming.md

