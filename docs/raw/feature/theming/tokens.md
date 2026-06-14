<!-- generated-by: gsd-doc-writer -->

# Design Tokens

Design tokens define the visual foundation of the theming system: colors, spacing, and typography.

## Overview

A centralized set of design tokens — colors, spacing, and typography — that drive the light and dark MUI themes. Tokens are defined as typed constants in `src/theme/tokens/` and consumed by theme factory functions to produce consistent visual output across all components.

## Spacing

Base unit: 4px

| Token      | Value | Pixels |
| ---------- | ----- | ------ |
| `internal` | 0.5   | 4px    |
| `xs`       | 1     | 8px    |
| `sm`       | 1.5   | 12px   |
| `md`       | 2     | 16px   |
| `lg`       | 3     | 24px   |
| `xl`       | 4     | 32px   |
| `xxl`      | 6     | 48px   |
| `section`  | 8     | 64px   |
| `page`     | 12    | 96px   |

**Source**: `src/theme/tokens/spacing.ts`

## Colors

### Brand

- `primary`: `#5A60F5` (soft indigo)
- `secondary`: `#8a8f98`

### Background

- Light: `#F5F5F7` (base), `#FFFFFF` (paper)
- Dark: `#0e1015` (base), `#16181D` (paper), `#1E2028` (panel)

### Text

- Light: `#111318` (primary), `#687076` (secondary)
- Dark: `#EDEDEF` (primary), `#8A8F98` (secondary)

### Status

- Error: `#ED5F74`
- Warning: `#F5A623`
- Success: `#34C759`
- Info: `#5A60F5`

**Source**: `src/theme/tokens/colors.ts`

## Typography

### Fonts

- Sans: `"Inter", "Segoe UI", "Helvetica Neue", sans-serif`
- Mono: `"IBM Plex Mono", "Menlo", "Courier New", monospace`

### Custom Variants

- `monoBody` — Monospace body text
- `monoCaption` — Monospace captions
- `body2Medium`, `body2Bold` — Weighted body text
- `captionBold` — Bold captions
- `micro` — 10px uppercase badges
- `splashTitle`, `splashSubtitle` — Display variants

**Source**: `src/theme/tokens/typography.ts`

## Responsibilities

- Define the complete set of spacing, color, and typography values
- Serve as the single source of truth for visual primitives
- Enable consistent theme object construction for light and dark modes
- Provide TypeScript types for token consumption

## Non-Responsibilities

- Does not define component-level styles or overrides
- Does not handle theme switching or state management
- Does not implement responsive breakpoint values
- Does not define animation durations or easing curves

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| Base unit | 4px grid used for all spacing tokens |
| Semantic tokens | Named values (`xs`, `sm`, `md`) mapped to multiplier of base unit |
| Color roles | Brand, background, text, and status color groups |
| Typography system | Font families and custom MUI variants beyond defaults |

## Edge Cases

- **Missing tokens**: Consumers referencing undefined tokens get `undefined` at runtime
- **Token collision**: Semantic names must be unique across all token categories
- **Contrast accessibility**: Color tokens are not verified for WCAG contrast automatically
- **Dark mode color mapping**: Each color category must define both light and dark variants

## States

- **Defined Set:** Tokens are static constants — no runtime state transitions
- **Light/Dark Variants:** Each color category defines both light and dark mode values
- **Extended Set:** Custom typography variants (e.g. `monoBody`, `splashTitle`) augment MUI defaults

## Inputs/Outputs

- **Inputs:** Token name (e.g. `spacing.md`, `colors.primary`), theme mode (`light`/`dark`)
- **Outputs:** Token value (pixel multiplier, hex color, font-family string), TypeScript type exports

## Error Conditions

- **Missing token** — Consumers referencing undefined token names receive `undefined` at runtime
- **Token collision** — Duplicate semantic names across categories cause silent override
- **WCAG contrast failure** — Color tokens are not automatically verified for contrast accessibility
- **Missing dark variant** — Color categories missing dark-mode values render incorrect colors in dark mode

## Future Enhancements

- Automated WCAG contrast ratio verification for all color token pairings
- Responsive spacing tokens that scale with viewport breakpoints
- Motion tokens (durations, easings) for animation system integration
- Token theme generator — derive dark-mode colors from light-mode tokens algorithmically

## Open Questions

- Should tokens include shadow/elevation values, or is that component-specific?
- How should brand tokens be versioned to support multi-brand deployments?
- Is a design-token export format (e.g., Style Dictionary JSON) needed for cross-platform use?
