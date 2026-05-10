<!-- generated-by: gsd-doc-writer -->

# Design Tokens

Design tokens define the visual foundation of the theming system: colors, spacing, and typography.

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
