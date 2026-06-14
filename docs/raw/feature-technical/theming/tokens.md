# Overview

Design tokens define the visual foundation of Astra's theming system: colors, spacing, and typography. They are static typed constants consumed by the theme factory (`appTheme.ts`) to produce MUI theme objects for light and dark modes. Tokens are the single source of truth for every visual property across all components.

---

# Feature Summary

| Attribute | Value |
|-----------|-------|
| **Module** | Theming — Tokens |
| **Status** | Implemented |
| **Primary Concern** | Define and export all visual primitives (color, spacing, typography) as typed constants |
| **Consumers** | `appTheme.ts`, MUI theme factory, any component importing from `astra` |
| **Localization** | None — tokens are locale-agnostic |

---

# Implementation Reference

## Status

Implemented — all three token modules are present and exported via `src/theme/index.ts`.

## Source Files

| File | Purpose |
|------|---------|
| `src/theme/tokens/colors.ts` | Brand, background, text, border, and status color hex values for light and dark modes |
| `src/theme/tokens/spacing.ts` | Spacing scale based on 4px base unit (internal through page) |
| `src/theme/tokens/typography.ts` | Font families, MUI typography variant definitions, and 8 custom variant module augmentations |
| `src/theme/appTheme.ts` | Theme factory — consumes tokens to produce `lightTheme`, `darkTheme`, and `createAstraTheme()` |
| `src/theme/index.ts` | Barrel re-export — makes all token symbols part of the public API |

## Public API

All exports from `src/theme/index.ts` are re-exported through `src/lib.ts` and available as `astra` root imports:

| Export | Type | Source | Description |
|--------|------|--------|-------------|
| `colors` | `object` | `tokens/colors.ts` | Nested color palette: `primary`, `secondary`, `background`, `border`, `text`, `status` |
| `spacing` | `object` | `tokens/spacing.ts` | Spacing multipliers: `internal`(0.5) through `page`(12) |
| `fonts` | `object` | `tokens/typography.ts` | `sans` and `mono` font-family strings |
| `typography` | `object` | `tokens/typography.ts` | MUI-compatible typography variant definitions (h1–h6, body1–2, button, caption, 8 custom variants) |
| `lightTheme` | `Theme` | `appTheme.ts` | Pre-built light MUI theme |
| `darkTheme` | `Theme` | `appTheme.ts` | Pre-built dark MUI theme |
| `createAstraTheme` | `function` | `appTheme.ts` | `(lightOverrides?, darkOverrides?) => { lightTheme, darkTheme }` |

### Import Contract

```ts
// Import from public entry point
import { colors, spacing, fonts, typography, lightTheme, darkTheme, createAstraTheme } from 'astra';
```

### Type Shapes

```ts
// colors.ts
interface Colors {
  primary: string;          // '#5A60F5'
  primaryHover: string;     // '#5255DF'
  secondary: string;
  background: { light: string; paperLight: string; dark: string; paperDark: string; panelDark: string };
  border: { light: string; dark: string };
  text: { primaryLight: string; secondaryLight: string; primaryDark: string; secondaryDark: string };
  status: { error: string; warning: string; success: string; info: string; crisis: string };
}

// spacing.ts
interface Spacing {
  internal: 0.5; xs: 1; sm: 1.5; md: 2; lg: 3; xl: 4; xxl: 6; section: 8; page: 12;
}

// typography.ts — fonts
interface Fonts { sans: string; mono: string; }

// appTheme.ts
function createAstraTheme(
  lightOverrides?: ThemeOptions,
  darkOverrides?: ThemeOptions
): { lightTheme: Theme; darkTheme: Theme };
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Theme Sovereignty | Tokens are the **single source of truth** for all visual primitives | Every component's appearance must derive from these constants |
| Public API Stability | Token exports are declared through `src/theme/index.ts` and `src/lib.ts` | Consumers import from `astra`, never from `src/theme/tokens/*` directly |
| Dependency Safety | Tokens have zero runtime dependencies | No external packages required for color/spacing/typography constants |
| Stateless UI | Tokens are pure constant objects with no state or side effects | They never change at runtime; theme switching is handled by ThemeProvider |
| MVVM | Tokens belong to the **Model** layer | They are data definitions, not UI or logic |

---

# Technical Structure

## Constants Table — Colors

| Category | Light Value | Dark Value |
|----------|-------------|------------|
| Primary | `#5A60F5` | `#5A60F5` (shared) |
| Background default | `#F5F5F7` | `#0e1015` |
| Background paper | `#FFFFFF` | `#16181D` |
| Background panel | — | `#1E2028` |
| Text primary | `#111318` | `#EDEDEF` |
| Text secondary | `#687076` | `#8A8F98` |
| Border | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` |
| Status error | `#ED5F74` | `#ED5F74` (shared) |
| Status success | `#34C759` | `#34C759` (shared) |

## Constants Table — Spacing

| Token | Multiplier | Pixels |
|-------|-----------|--------|
| internal | 0.5 | 4px |
| xs | 1 | 8px |
| sm | 1.5 | 12px |
| md | 2 | 16px |
| lg | 3 | 24px |
| xl | 4 | 32px |
| xxl | 6 | 48px |
| section | 8 | 64px |
| page | 12 | 96px |

Base unit: 4px. Applied via MUI `spacing` function: `theme.spacing(tokenValue * 2)` — the `appTheme.ts` factory converts the multiplier to `Math.round(factor * 8)px`.

## Constants Table — Typography

| Variant | Size | Weight | Purpose |
|---------|------|--------|---------|
| h1 | 2rem | 600 | Page title |
| h2 | 1.5rem | 600 | Section heading |
| h3 | 1.25rem | 600 | Subsection heading |
| h4 | 1.125rem | 600 | Card heading |
| h5 | 1rem | 600 | Item heading |
| h6 | 0.875rem | 600 | Uppercase label |
| body1 | 0.9375rem | 400 | Default body (15px) |
| body2 | 0.8125rem | 400 | Secondary body (13px) |
| button | 0.875rem | 500 | Button text |
| caption | 0.75rem | 500 | Caption (12px) |
| monoBody | 0.8125rem | 400 | Monospace body |
| splashTitle | 0.875rem | 600 | Uppercase splash heading |
| splashSubtitle | 0.75rem | 500 | Splash subtitle |
| micro | 0.625rem | 600 | Uppercase badge (10px) |

## Data Flow

```
src/theme/tokens/{colors,spacing,typography}.ts
  → src/theme/appTheme.ts (consumes via import)
    → createTheme() merges into MUI Theme objects
      → ThemeProvider injects via MUI ThemeProvider
        → Components consume via sx, styled, useTheme
```

---

# Error Handling

| Condition | Behavior | Severity |
|-----------|----------|----------|
| Missing token reference | `undefined` at runtime | Runtime error |
| Token collision | Silent override (last wins) | Logic error |
| Dark variant missing | Incorrect dark-mode rendering | Visual regression |
| WCAG contrast failure | Not automatically detected | Gap (no validation) |
| Invalid theme override passed to `createAstraTheme` | MUI `createTheme` may throw | Runtime error |

---

# Non-Functional Requirements

| Requirement | Target | Enforcement |
|-------------|--------|-------------|
| Bundle size | Tokens are tree-shakeable static objects | No runtime computation |
| Type safety | All token objects are fully typed | TypeScript strict mode |
| Immutability | Token objects must never be mutated | `const` exports, `as const` recommended |
| Backward compatibility | New tokens must be additive only | Semver major for breaking changes |
| Accessibility | Color contrast not automatically verified | Gap — manual audit required |

---

# Architecture Compliance Review

## Applied Patterns

| Invariant | Compliance | Evidence |
|-----------|------------|----------|
| Theme Sovereignty | ✅ Full | All visual values defined once in tokens; no hardcoded values in `appTheme.ts` |
| Public API Stability | ✅ Full | All tokens exported through `src/theme/index.ts` → `src/lib.ts` |
| Dependency Safety | ✅ Full | Token files import zero external packages |
| Stateless UI | ✅ Full | Tokens are static constants with no state |

## Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Token/consumer drift | Components bypass tokens and hardcode values | Theme Sovereignty lint rules |
| Missing dark variant | Visual regression in dark mode | Code review checklist |
| No WCAG validation | Accessibility issues in custom themes | Future enhancement: automated contrast checks |

## Gaps

- No automated WCAG contrast ratio verification for color token pairings
- No responsive spacing tokens (viewport-aware scaling)
- No motion/duration/easing tokens (animation system not yet integrated)
- Token values are not exported in a cross-platform format (Style Dictionary JSON)

---

# Module Map

```
src/theme/tokens/colors.ts ─┐
src/theme/tokens/spacing.ts ─┤──→ src/theme/appTheme.ts ──→ src/theme/index.ts ──→ src/lib.ts
src/theme/tokens/typography.ts ─┘       │
                                         └── createTheme() → MUI Theme objects
```

**Dependencies:**
- `appTheme.ts` imports from: `@mui/material/styles` (createTheme, ThemeOptions)
- Token files have zero imports

---

# Final Rule

Tokens must be the exclusive source of all visual primitives. No component may define its own color, spacing, or typography values outside these constants. Additive-only changes to the token set are permitted within a major version; breaking renames require a deprecation cycle.
