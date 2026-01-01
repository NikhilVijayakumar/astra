# Navigation Components Compliance Questionnaire

This questionnaire checks if Astra's navigation components are used effectively, as defined in `docs/components/navigation.md`.

*Note: Custom layouts are permitted, so "No" is acceptable if a custom design is required.*

## Components
- [ ] Is `DrawerComponent` used for side navigation?
    - [ ] If yes, are `sortedFeatures` and `UiFeatureList` passed correctly?
- [ ] Is `ToolbarComponent` used for the app header?
    - [ ] If yes, is the `themeContext` passed for the toggle?

## Structure
- [ ] Does the MainLayout correctly wrap the application content (via `Outlet` or `children`)?
