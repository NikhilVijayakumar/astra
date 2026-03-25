# Theming & UI Standards

This document defines Astra's theming contract for client applications.

Goals:
- Keep visual consistency across apps built with Astra.
- Make light and dark mode behavior predictable.
- Provide a single token language for colors, spacing, and typography.
- Allow controlled customization through MUI ThemeOptions overrides.

## What Astra Exposes

From package root:
- ThemeProvider
- useTheme (Astra context hook)
- createAstraTheme
- lightTheme, darkTheme
- colors, spacing, typography

From theme subpath:
- createAstraTheme
- lightTheme, darkTheme
- colors, spacing, typography

Reference exports:
- src/common/theme/index.ts
- src/theme/index.ts

## Theming Architecture

### 1. Token Layer

Token source files:
- src/theme/tokens/colors.ts
- src/theme/tokens/spacing.ts
- src/theme/tokens/typography.ts

These are Astra design primitives. Client apps should treat them as the base visual contract.

### 2. Theme Composition Layer

Theme composition file:
- src/theme/appTheme.ts

This layer maps tokens into MUI ThemeOptions for:
- light mode palette
- dark mode palette
- typography
- spacing function
- component defaults

### 3. Runtime Theme Layer

Runtime provider files:
- src/common/theme/ThemeProvider.tsx
- src/common/theme/themeContext.ts
- src/common/theme/themeData.ts

This layer handles:
- dark mode state
- localStorage persistence key: darkMode
- optional forced mode for Storybook or visual tests

## Astra ThemeProvider API

ThemeProvider accepts:

```ts
type ThemeProviderProps = {
  children: ReactNode;
  lightTheme: Theme;
  darkTheme: Theme;
  forceTheme?: 'light' | 'dark';
};
```

Behavior:
- forceTheme is optional.
- If forceTheme is provided, user toggling is disabled intentionally.
- If forceTheme is not provided, mode is read from localStorage and can be toggled.

## Astra useTheme Hook vs MUI useTheme Hook

Astra and MUI both expose a hook named useTheme, but they serve different purposes:

- Astra useTheme: mode state and mode toggling.
  - returns darkMode and toggleDarkMode
- MUI useTheme from @mui/material/styles: resolved theme object.
  - use this for palette, typography, spacing, breakpoints

Recommended naming pattern to avoid confusion:

```tsx
import { useTheme as useAstraTheme } from 'astra';
import { useTheme as useMuiTheme } from '@mui/material/styles';

const { darkMode, toggleDarkMode } = useAstraTheme();
const muiTheme = useMuiTheme();
```

## Token Catalog

## Color Tokens

Source:
- src/theme/tokens/colors.ts

```ts
colors.primary
colors.primaryHover
colors.secondary

colors.background.light
colors.background.paperLight
colors.background.dark
colors.background.paperDark
colors.background.panelDark

colors.border.light
colors.border.dark

colors.text.primaryLight
colors.text.secondaryLight
colors.text.primaryDark
colors.text.secondaryDark

colors.status.error
colors.status.warning
colors.status.success
colors.status.info
colors.status.crisis
```

How Astra maps these to MUI:
- palette.primary.main = colors.primary
- palette.primary.light = colors.primaryHover
- palette.secondary.main = colors.secondary
- palette.background.default and paper depend on mode
- palette.text.primary and secondary depend on mode
- palette.divider depends on mode
- palette.error, warning, info, success map from colors.status

Standards:
- Do not hardcode status hex values in feature components.
- Use palette channels from the theme where possible.
- Use status.crisis only for critical workflow states (not generic errors).

## Spacing Tokens

Source:
- src/theme/tokens/spacing.ts

Spacing units are based on a 4px design rhythm and represented as factors:

```ts
spacing.internal = 0.5
spacing.xs = 1
spacing.sm = 1.5
spacing.md = 2
spacing.lg = 3
spacing.xl = 4
spacing.xxl = 6
spacing.section = 8
spacing.page = 12
```

In appTheme, spacing is converted to a custom MUI spacing function:
- muiSpacing(factor) => Math.round(factor * 8) + 'px'

Implication:
- MUI spacing unit is kept consistent with Astra's scale mapping.
- Prefer theme.spacing(...) in components over literal pixel strings.

Examples:

```tsx
sx={{ p: (theme) => theme.spacing(2) }}
sx={{ gap: (theme) => theme.spacing(1.5) }}
```

## Typography Tokens

Source:
- src/theme/tokens/typography.ts

Font families:
- fonts.sans
- fonts.mono

Standard variants:
- h1, h2, h3, h4, h5, h6
- body1, body2
- button
- caption

Astra custom variants:
- body2Medium
- body2Bold
- captionBold
- micro
- monoBody
- monoCaption
- splashTitle
- splashSubtitle

TypeScript module augmentation is already included in typography.ts so MUI Typography supports these variants.

Example usage:

```tsx
<Typography variant="body2Medium">Metadata</Typography>
<Typography variant="monoCaption">build-2026.03.25</Typography>
<Typography variant="micro">critical</Typography>
```

## Component Defaults Included by Astra

Defined in src/theme/appTheme.ts:
- MuiCssBaseline: custom scrollbar styling
- MuiPaper: removes elevation image and shadow
- MuiButton: default radius and no box shadow

Client guidance:
- Keep these defaults unless your brand system requires a different baseline.
- If overriding, do it once in createAstraTheme rather than per-component inline sx.

## Client Integration Patterns

### Pattern A: Zero customization

```tsx
import { ThemeProvider, lightTheme, darkTheme } from 'astra';

export function AppRoot() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <App />
    </ThemeProvider>
  );
}
```

### Pattern B: Controlled customization with createAstraTheme

```tsx
import { ThemeProvider } from 'astra';
import { createAstraTheme } from 'astra/theme';

const { lightTheme, darkTheme } = createAstraTheme(
  {
    palette: {
      primary: { main: '#0B6BCB' },
    },
  },
  {
    palette: {
      primary: { main: '#7AB7FF' },
    },
  }
);

export function AppRoot() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <App />
    </ThemeProvider>
  );
}
```

### Pattern C: Storybook forced mode

```tsx
import { ThemeProvider, lightTheme, darkTheme } from 'astra';

export const DarkStory = () => (
  <ThemeProvider
    lightTheme={lightTheme}
    darkTheme={darkTheme}
    forceTheme="dark"
  >
    <MyComponent />
  </ThemeProvider>
);
```

## Astra Standards for Client Apps

Use this checklist during implementation:

1. Wrap app root once with ThemeProvider.
2. Use createAstraTheme for all brand customization.
3. Keep light and dark overrides symmetrical unless intentionally different.
4. Use theme tokens through MUI theme access, not hardcoded values.
5. Use Astra custom typography variants where semantics match.
6. Use theme.spacing for layout rhythm.
7. Avoid component-level ad hoc color constants.
8. Reserve status.crisis for truly critical states.

## Common Mistakes and Fixes

Mistake:
- Using Astra useTheme to read palette values.

Fix:
- Use MUI useTheme from @mui/material/styles for theme object access.

Mistake:
- Mixing raw hex strings and token-based palette in the same feature.

Fix:
- Move custom color decisions to createAstraTheme override and consume from theme.

Mistake:
- Large per-screen style overrides that bypass theme defaults.

Fix:
- Consolidate shared styling into theme components overrides.

## Quick Token Consumption Examples

```tsx
import { colors, spacing } from 'astra/theme';

const styles = {
  panel: {
    border: `1px solid ${colors.border.light}`,
    padding: `${spacing.lg * 8}px`,
  },
};
```

Prefer theme-driven usage inside components:

```tsx
<Box
  sx={{
    bgcolor: (theme) => theme.palette.background.paper,
    color: (theme) => theme.palette.text.primary,
    p: (theme) => theme.spacing(3),
    borderColor: (theme) => theme.palette.divider,
    borderWidth: 1,
    borderStyle: 'solid',
  }}
/>
```

## Recommended Rollout for Existing Client Apps

1. Wrap app root with ThemeProvider using createAstraTheme output.
2. Replace hardcoded spacing and color constants with theme access.
3. Migrate typography to Astra variants.
4. Validate both light and dark mode for primary screens.
5. Add Storybook stories with forceTheme light and dark snapshots.

Following this contract gives predictable upgrades when Astra tokens evolve.
