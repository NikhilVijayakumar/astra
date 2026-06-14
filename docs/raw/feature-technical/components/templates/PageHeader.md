# PageHeader — Technical Blueprint

---

# Feature Summary

A responsive page-level header template with a title, optional subtitle, leading/trailing meta content slots, and up to two action buttons (primary/secondary). Uses `flexWrap: wrap` for narrow viewport adaptation.

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Purpose |
|------|---------|
| `src/common/components/templates/PageHeader.tsx` | Component implementation |
| `src/common/components/templates/PageHeader.test.tsx` | Unit tests (vitest) |
| `src/common/components/templates/index.ts` | Barrel re-export |
| `src/theme/tokens/spacing.ts` | Token dependency |

## Public API

```typescript
// Exported from src/common/components/templates/index.ts → lib.ts
export interface HeaderActionConfig {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  primaryAction?: HeaderActionConfig;
  secondaryAction?: HeaderActionConfig;
  leadingMeta?: ReactNode;
  trailingMeta?: ReactNode;
}

export const PageHeader: FC<PageHeaderProps>;
```

---

# Architecture Mapping
| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Atomic Hierarchy | Template tier | Composes MUI atoms (Box, Button, Typography). Defines page-level header layout with flex. No business logic. No data access. |
| Stateless UI | Fully compliant | Props-only component. No useState, no effects. Actions emit callbacks (`onClick`). |
| Theme Sovereignty | Token-based | Spacing via `spacing.xl`, `spacing.md`, `spacing.xs` theme tokens. Colors via MUI sx theme paths (`text.primary`, `text.secondary`). Button variants use MUI theme defaults. |
| Localization | Not yet applied | `title`, `subtitle`, and `HeaderActionConfig.label` are raw string props — consumer must pass translated strings. |
| Dependency Safety | Minimal | Depends on React, MUI (Box, Button, Typography), internal spacing token. |
| Public API Stability | Stable | Exported via barrel from `templates/index.ts`. `PageHeaderProps` and `HeaderActionConfig` are public types. |

---

# Technical Structure

## Views
| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| PageHeader | `src/common/components/templates/PageHeader.tsx` | Render page-level header | Responsive flex layout (space-between, wrap), conditional render of subtitle, action buttons, leadingMeta, trailingMeta | `react`, `@mui/material`, `theme/tokens/spacing` |

## Data Flow Sequence
```
Consumer passes props
  → PageHeader renders outer Box (flex, wrap, space-between)
    → Left group: leadingMeta, title, conditional subtitle
    → Right group: trailingMeta, conditional secondaryAction (Button), conditional primaryAction (Button)
```

## Rendering Logic
- `renderAction(action)`: internal helper that renders MUI Button with defaults: `variant="outlined"`, `size="small"`, `borderRadius: 1`, `textTransform: 'none'`
- Right group renders in visual order (right-to-left in DOM): trailingMeta → secondaryAction → primaryAction
- Each section (leadingMeta, subtitle, actions, trailingMeta) renders independently via conditional checks

## Invariant Rules
- `title` is required string — TypeScript enforced
- All other props optional — each omitted section renders nothing
- Action button defaults: `variant ?? "outlined"`, `size ?? "small"`
- No internal state, effects, or data fetching
- All spacing via theme token constants
- Leading meta placed inside left Box (below subtitle)
- Actions render in reversed DOM order (primary rightmost visually)

---

# Validation Design
| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `title` is string | TypeScript | Compilation error | Fix call-site |
| Missing `subtitle` | Runtime conditional | Subtitle `<Typography>` omitted | N/A — valid state |
| Missing all actions/meta | Runtime conditionals | Right-side Box renders with no children | N/A — valid state |
| Action missing `onClick` | Runtime click | Button renders but does nothing | Consumer must provide callback |
| Action missing `variant` | `?? "outlined"` | Defaults to `outlined` | Automatic grace |
| Action missing `size` | `?? "small"` | Defaults to `small` | Automatic grace |

---

# Error Handling
| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Missing `title` | Consumer omits required prop | TypeScript compilation error | Provide `title` |
| Empty `title` string | Consumer passes `""` | Renders empty Typography | Pass non-empty string |
| Action `disabled` set | Consumer sets `true` | Renders `<Button disabled>` | Visual gray + no click |
| Narrow viewport | Browser width small | Flex container wraps via `flexWrap: "wrap"` | CSS handles |

---

# Non-Functional Requirements
- **Performance**: Single render pass. No state-driven re-renders.
- **Responsive**: `flexWrap: "wrap"` on outer Box enables natural wrapping. Left and right groups each wrap independently.
- **Accessibility**: Buttons are native MUI Button (keyboard-focusable, aria-enabled). Typography hierarchy via MUI variant mapping.
- **Bundle**: Depends on MUI Box, Button, Typography. No added runtime or animation libs.
- **Testability**: 8 tests cover title, subtitle, actions, meta, click handler, disabled state.

---

# Architecture Compliance Review
## Applied Patterns
- Template tier layout composition with flex
- Slot-based pattern (5 independent content slots)
- Action config objects vs raw React nodes for simple button cases
- Reverse-order action rendering for visual hierarchy

## Risks
- `title`, `subtitle`, and `HeaderActionConfig.label` are raw strings — localization burden on consumer
- Action buttons use MUI `Button` directly with minimal theming — not full design system customization
- No sticky/scroll-aware behavior — header scrolls with page content

## Gaps
- Localization invariant not enforced internally
- No `aria-label` on action buttons (uses `label` as visible text, not a11y label)
- No loading state for action buttons (async operations have no spinner)
- Responsive breakpoint strategy is minimal — no collapse-to-menu behavior at specific widths

---

# Module Map
| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| PageHeader | `src/common/components/templates/PageHeader.tsx` | `PageHeader`, `HeaderActionConfig`, `PageHeaderProps` | `react`, `@mui/material` (`Box`, `Button`, `Typography`), `theme/tokens/spacing` |
| templates barrel | `src/common/components/templates/index.ts` | `PageHeader`, `SummaryPanel`, `HeroSection`, all related types | re-exports from individual modules |

---

# Final Rule

PageHeader must remain a stateless, props-driven template tier component. It receives pre-translated text and optional action configs. No internal state, effects, data fetching, or navigation routing may be added. All visual properties must derive from theme tokens only.
