# Design Tokens

Design tokens define the visual foundation: colors, spacing, and typography values that drive consistent rendering across all components.

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

## Colors

### Brand

| Token | Value |
|-------|-------|
| Primary | `#5A60F5` |
| Secondary | `#8a8f98` |

### Background

| Mode | Base | Paper | Panel |
|------|------|-------|-------|
| Light | `#F5F5F7` | `#FFFFFF` | — |
| Dark | `#0e1015` | `#16181D` | `#1E2028` |

### Text

| Mode | Primary | Secondary |
|------|---------|-----------|
| Light | `#111318` | `#687076` |
| Dark | `#EDEDEF` | `#8A8F98` |

### Status

| Severity | Value |
|----------|-------|
| Error | `#ED5F74` |
| Warning | `#F5A623` |
| Success | `#34C759` |
| Info | `#5A60F5` |

## Typography

### Fonts

| Role | Font |
|------|------|
| Sans | Inter, system sans-serif |
| Mono | IBM Plex Mono, system monospace |

### Custom Variants

| Variant | Purpose |
|---------|---------|
| `monoBody`, `monoCaption` | Monospace text |
| `body2Medium`, `body2Bold` | Weighted body text |
| `captionBold` | Bold captions |
| `micro` | 10px uppercase badges |
| `splashTitle`, `splashSubtitle` | Display variants |

## Responsibilities

- Define the complete set of spacing, color, and typography values
- Serve as the single source of truth for visual primitives
- Enable consistent theme object construction for light and dark modes

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
| Typography system | Font families and custom variants beyond defaults |

## States

- **Defined Set:** Tokens are static values — no runtime state transitions
- **Light/Dark Variants:** Each color category defines both light and dark mode values

## Edge Cases

- **Missing tokens**: Consumers referencing undefined tokens get no value at runtime
- **Token collision**: Semantic names must be unique across all token categories
- **Contrast accessibility**: Color tokens are not verified for WCAG contrast automatically
- **Dark mode color mapping**: Each color category must define both light and dark variants

## Error Conditions

- **Missing token** — Consumers referencing undefined token names receive no value
- **Token collision** — Duplicate semantic names across categories cause silent override
- **Missing dark variant** — Color categories missing dark-mode values render incorrect colors in dark mode

## Future Enhancements

- Automated WCAG contrast ratio verification for all color token pairings
- Responsive spacing tokens that scale with viewport breakpoints
- Motion tokens (durations, easings) for animation system integration

## Open Questions

- Should tokens include shadow/elevation values, or is that component-specific?
- How should brand tokens be versioned to support multi-brand deployments?
