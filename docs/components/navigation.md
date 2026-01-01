# Navigation Components

The `astra` library provides pre-built navigation components that integrate seamlessly with Material-UI and the application's theme/localization systems.

## DrawerComponent

A responsive navigation drawer that supports both mobile (temporary) and desktop (permanent) modes.

### Props

`DrawerComponent` is a generic component `<T extends Features>` accepting the following props:

-   `sortedFeatures`: `T[] | null` - An array of feature objects defining the navigation items.
-   `UiFeatureList`: `Record<string, UiFeature>` - A mapping of feature names to UI configurations (e.g., icons, routes).
-   `container`: `(() => HTMLElement) | undefined` - Optional container for the drawer portal (useful for testing or specific DOM structures).
-   `onMenuItemClick`: `(index: number) => void` - Callback fired when a navigation item is clicked.
-   `mobileOpen`: `boolean` - Controls the open state of the temporary drawer on mobile.
-   `handleDrawerToggle`: `() => void` - Callback to toggle the mobile drawer.

### Usage

```tsx
<DrawerComponent
  sortedFeatures={features}
  UiFeatureList={uiFeatures}
  onMenuItemClick={handleNavigate}
  mobileOpen={mobileOpen}
  handleDrawerToggle={toggleDrawer}
/>
```

## ToolbarComponent

A standard application toolbar (AppBar) that includes a hamburger menu trigger (for mobile), a title, and a theme toggle switch.

### Props

-   `handleDrawerToggle`: `() => void` - Callback to open the mobile drawer.
-   `title`: `string` - The application title displayed in the toolbar.
-   `themeContext`: `ThemeContextValue` - The theme context object required by the internal `ThemeToggle`.

### Usage

```tsx
<ToolbarComponent
  title="My App"
  handleDrawerToggle={toggleDrawer}
  themeContext={themeContext}
/>
```
