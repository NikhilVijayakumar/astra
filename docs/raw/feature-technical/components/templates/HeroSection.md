# HeroSection — Technical Blueprint

---

# Feature Summary

A high-impact landing-style template with a prominent headline, optional description, optional primary action button, optional children slot, and 7 entrance animation variants powered by framer-motion. Includes a typewriter effect for headline text.

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Purpose |
|------|---------|
| `src/common/components/templates/HeroSection.tsx` | Component implementation |
| `src/common/components/templates/HeroSection.test.tsx` | Unit tests (vitest) |
| `src/common/components/templates/index.ts` | Barrel re-export |
| `src/theme/tokens/spacing.ts` | Spacing token dependency |
| `src/theme/tokens/colors.ts` | Color token dependency (Button styling) |

## Public API

```typescript
// Exported from src/common/components/templates/index.ts → lib.ts
export type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "stagger-fade"
  | "typewriter";

export interface HeroSectionProps {
  headline: string;
  description?: string;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  children?: ReactNode;
  enableAnimation?: boolean;
  animationVariant?: AnimationVariant;
  animationDuration?: number;    // default: 600
  animationDelay?: number;       // default: 0
  animationStagger?: number;     // default: 100
}

export const HeroSection: FC<HeroSectionProps>;
```

---

# Architecture Mapping
| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Atomic Hierarchy | Template tier | Composes MUI atoms (Box, Typography, Button) and framer-motion `motion` wrappers. Defines section-level flex layout. No business logic. |
| Stateless UI | Partially compliant | Uses `useState` + `useEffect` inside internal `TypewriterHeadline` sub-component for animation timing. This is UI-only presentation state (character reveal), not domain state. Framer-motion manages its own internal state for entrance animations. |
| Theme Sovereignty | Partially compliant | Spacing via `spacing.ts` tokens. Colors for headline/description via MUI theme paths. Button uses **hardcoded** `colors.primary` / `colors.primaryHover` from token constants — this violates theme sovereignty (should use `sx` theme path or `theme.palette.primary.main`). |
| Localization | Not yet applied | `headline`, `description`, `primaryActionLabel` are raw string props — consumer must pass translated strings. |
| Dependency Safety | Uses framer-motion | Imports `motion` from `framer-motion`. Must ensure peer dependency is declared. |
| Public API Stability | Stable | Exported via barrel from `templates/index.ts`. All 8 animation variant strings are public API. |

---

# Technical Structure

## Views
| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| HeroSection | `src/common/components/templates/HeroSection.tsx` | Render hero section | Flex column layout (800px max-width), headline + description + action button + children, 7 animation variants, typewriter sub-component | `react`, `@mui/material`, `framer-motion`, `theme/tokens/spacing`, `theme/tokens/colors` |

## Data Flow Sequence
```
Consumer passes props
  → HeroSection selects animation config from `animationConfigs` lookup
    → Headline: motion.div (animated) OR TypewriterHeadline OR static Typography
      → TypewriterHeadline manages useState for character reveal via setInterval
    → Description (optional): motion.div (animated) OR static, delay = duration
    → Button (optional): motion.div (animated) OR static, delay = duration * 1.5
    → Children (optional): motion.div (animated) OR static Box, delay = duration * 2
```

## Animation Timing
| Element | Delay Formula |
|---------|---------------|
| Headline | `animationDelay` |
| Description | `animationDelay + animationDuration` |
| Action Button | `animationDelay + animationDuration * 1.5` |
| Children | `animationDelay + animationDuration * 2` |

## `animationConfigs` (internal constant)
```typescript
const animationConfigs = {
  "fade-up":         { initial: { opacity: 0, y: 20 },    animate: { opacity: 1, y: 0 } },
  "fade-in":         { initial: { opacity: 0 },            animate: { opacity: 1 } },
  "slide-left":      { initial: { opacity: 0, x: -30 },   animate: { opacity: 1, x: 0 } },
  "slide-right":     { initial: { opacity: 0, x: 30 },   animate: { opacity: 1, x: 0 } },
  "scale-up":        { initial: { opacity: 0, scale: 0.9 },animate: { opacity: 1, scale: 1 } },
  "stagger-fade":    { initial: { opacity: 0, y: 10 },   animate: { opacity: 1, y: 0 } },
  typewriter:        { initial: { opacity: 0 },            animate: { opacity: 1 } },
};
```

## Invariant Rules
- `headline` is required string — TypeScript enforced
- `enableAnimation` defaults to `true`
- `animationVariant` defaults to `"fade-up"`
- `animationDuration` defaults to `600`, `animationDelay` to `0`, `animationStagger` to `100`
- Typewriter variant disables framer-motion on non-headline elements (description, button, children render static)
- `enableAnimation === false` renders all content static — no `motion.*` wrappers
- Button uses hardcoded theme token colors (`colors.primary`, `colors.primaryHover`) with `color="#fff"` hardcoded

---

# Validation Design
| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `headline` is string | TypeScript | Compilation error | Fix call-site |
| All other props optional | Runtime conditionals | Respective sections omitted | N/A — valid states |
| `enableAnimation=false` | Runtime check | All content renders statically | N/A — valid state |
| Typewriter + empty headline | Runtime | Cursor blinks with no characters | Consumer should provide text |
| Invalid `animationVariant` string | TypeScript | Compilation error (union type) | Use valid variant string |

---

# Error Handling
| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Missing `headline` | Consumer omits required prop | TypeScript compilation error | Provide `headline` |
| Empty `headline` string | Consumer passes `""` | Typewriter renders empty; static renders empty Typography | Pass non-empty string |
| Missing `onPrimaryAction` | Consumer omits callback | Button renders without click handler | Provide `onPrimaryAction` if interaction needed |
| Framer-motion animation error | Motion lib runtime | Component degrades to static render (motion.div wraps content regardless) | Check framer-motion peer dependency |
| All flag errors | — | Errors propagate to parent — no error boundary | Wrap with ErrorBoundary |

---

# Non-Functional Requirements
- **Performance**: `TypewriterHeadline` uses `setInterval` — Component unmounts during animation will leak interval if `useEffect` cleanup is missed (currently handles cleanup).
- **Accessibility**: `prefers-reduced-motion` not respected — `enableAnimation` must be set externally. Typewriter text is revealed visually only (no aria-live region).
- **Bundle**: Adds `framer-motion` as runtime dependency. MUI Box, Typography, Button.
- **Testability**: 11 tests cover render, conditional slots, animation toggle, all 7 variants, duration/delay props.
- **Responsive**: Max-width 800px container. No intrinsic wrap behavior — consumer must add responsive override via wrapper.

---

# Architecture Compliance Review
## Applied Patterns
- Template tier — section-level layout composition
- Animation orchestration with staggered delays
- Slot-based composable sections (headline, description, action, children)
- Animation config as component props pattern

## Risks
- **Theme sovereignty violation**: Button uses `colors.primary` hardcoded value and `color: "#fff"` instead of theme path — breaks dark mode and consumer theming. See `src/common/components/templates/HeroSection.tsx:201-207`.
- Framer-motion peer dependency must be declared in `package.json` — missing it causes runtime errors.
- Typewriter `setInterval` is an animation concern embedded inside a component — consider extracting to a dedicated animation utility.

## Gaps
- No `prefers-reduced-motion` OS-level media query respect
- No `aria-live="polite"` on typewriter-revealed text for screen readers
- No secondary action button slot
- No background image/gradient overlay support
- Localization invariant not enforced internally

---

# Module Map
| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| HeroSection | `src/common/components/templates/HeroSection.tsx` | `HeroSection`, `AnimationVariant`, `HeroSectionProps` | `react`, `@mui/material` (`Box`, `Typography`, `Button`), `framer-motion`, `theme/tokens/spacing`, `theme/tokens/colors` |
| templates barrel | `src/common/components/templates/index.ts` | `HeroSection`, `PageHeader`, `SummaryPanel`, all related types | re-exports from individual modules |

---

# Final Rule

HeroSection must remain a stateless (except UI animation state) template tier component. The `TypewriterHeadline` internal component is the only allowed stateful element, and its state is strictly presentation-scoped (character reveal timing). The Button's color values must be migrated from hardcoded token constants to MUI theme paths (`sx` with `backgroundColor: 'primary.main'`) to satisfy Theme Sovereignty. No data fetching, business logic, or domain state may be added.
