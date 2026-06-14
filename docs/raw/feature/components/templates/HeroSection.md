---
tier: template
---

# HeroSection

A layout component that displays a prominent headline section with optional description and action button.

## Overview

A high-impact landing-style component for displaying primary page content with headline, description, and call-to-action button.

## Responsibilities

- Render a prominent headline with optional description and call-to-action button
- Support entrance animations with 7 animation variants (fade-up, fade-in, slide-left, slide-right, scale-up, stagger-fade, typewriter)
- Sequentially stagger animation timing across headline, description, button, and children
- Provide typewriter effect for headline text

## API

### Props

| Prop                 | Type              | Default    | Description                             |
| -------------------- | ----------------- | ---------- | --------------------------------------- |
| `headline`           | `string`          | Required   | Main heading text                       |
| `description`        | `string`          | `undefined`| Supporting description text             |
| `primaryActionLabel` | `string`          | `undefined`| Button text for primary action          |
| `onPrimaryAction`    | `() => void`      | `undefined`| Click handler for primary action        |
| `children`           | `ReactNode`       | `undefined`| Additional content below actions        |
| `enableAnimation`    | `boolean`         | `true`     | Enable entrance animations              |
| `animationVariant`   | `AnimationVariant`| `'fade-up'`| Animation preset                        |
| `animationDuration`  | `number`          | `600`      | Animation duration in milliseconds      |
| `animationDelay`     | `number`          | `0`        | Delay before animation starts (ms)      |
| `animationStagger`   | `number`          | `100`      | Stagger delay between elements (ms)     |

### Interfaces

```typescript
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
  animationDuration?: number;
  animationDelay?: number;
  animationStagger?: number;
}
```

### Animation Behaviors

- `fade-up`: Opacity 0→1, translateY 20→0
- `fade-in`: Opacity 0→1 only
- `slide-left`: TranslateX 20→0
- `slide-right`: TranslateX -20→0
- `scale-up`: Scale 0.95→1
- `stagger-fade`: Fade with staggered timing
- `typewriter`: Headline revealed character by character with blinking cursor

Description and action button are sequentially delayed: description at `delay + duration`, action at `delay + duration * 1.5`, children at `delay + duration * 2`.

### Styling Details

- Headline: `variant="h2"`, font weight `700`, letter spacing `-0.02em`
- Description: `variant="h6"`, font weight `400`, max width `600px`, line height `1.6`
- Button: `variant="contained"`, `color="primary"`, `size="large"`, `disableElevation`
- Padding: `py: 8`, `px: 4`
- Max width: `800px`
- Flex column with `alignItems: 'flex-start'`
- Gap between elements: `3`

## Validation Rules

- `headline` is required — TypeScript compilation fails if omitted
- All other props are optional
- `animationDuration` defaults to `600`, `animationDelay` to `0`, `animationStagger` to `100`
- `enableAnimation` defaults to `true`
- `animationVariant` defaults to `'fade-up'`

## Error Handling

- `enableAnimation=false`: all animations are disabled; content renders statically with no motion
- Empty or missing `headline`: renders an empty Typography element
- Typewriter variant with empty `headline`: cursor blinks with no characters to type
- No `description`, `action`, or `children`: respective slots are omitted
- No error boundary is provided — errors propagate to the parent

## Non-Responsibilities

- Does not fetch data or manage server state
- Does not handle navigation routing — `onPrimaryAction` is a void callback
- Does not manage scroll behavior beyond its own content area
- Does not render outside the hero section boundary
- Does not support multiple action buttons — only one primary action

## Edge Cases

- `enableAnimation` set to `false`: all motion animations are disabled; content renders statically with no framer-motion wrappers
- `animationVariant="typewriter"`: only the headline animates character-by-character; description, action button, and children render without animation
- No `description` provided: description slot is omitted entirely
- No `primaryActionLabel`/`onPrimaryAction` provided: action button is omitted
- No `children` provided: children slot is omitted
- Empty `headline`: headline renders as an empty Typography element (headline is required but could be an empty string)
- Very long headline: text wraps within max-width 800px container
- Typewriter variant with empty headline: TypewriterHeadline component renders with no characters and cursor only

## Usage Example

```tsx
import { HeroSection } from "@/common/components/templates/HeroSection";

const LandingPage = () => (
  <HeroSection
    headline="Build Better Applications"
    description="A comprehensive toolkit for modern development. Accelerate your workflow with powerful tools and intuitive interfaces."
    primaryActionLabel="Get Started"
    onPrimaryAction={() => navigate("/signup")}
  />
);

// With additional content
const FeatureLanding = () => (
  <HeroSection
    headline="Advanced Analytics"
    description="Gain deep insights into your data with our powerful analytics platform."
    primaryActionLabel="View Demo"
    onPrimaryAction={() => setShowDemo(true)}
  >
    <div style={{ display: "flex", gap: "16px" }}>
      <img src="/chart1.png" alt="Chart 1" />
      <img src="/chart2.png" alt="Chart 2" />
    </div>
  </HeroSection>
);
```

## States

- **Idle (animated)**: Default state with entrance animation enabled — content animates in
- **Idle (static)**: `enableAnimation` set to `false` — content renders statically
- **Typewriter**: Headline typing in progress; cursor blinks after completion
- **Partial content**: Any combination of description, action, and children present or omitted independently

## Inputs/Outputs

- **Inputs**: `headline` (required), `description`, `primaryActionLabel`, `onPrimaryAction`, `children` (optional), plus animation config props
- **Outputs**: Renders headline, description, action button, and children in flex column layout with optional entrance animations
- **Side effects**: Fires `onPrimaryAction` callback on button click; animation refs managed internally by framer-motion

## Error Conditions

- **Empty `headline`**: Renders empty Typography element; typewriter variant blinks cursor with no characters
- **Missing `headline`**: TypeScript compilation error
- **Animation with missing elements**: Respective slots omitted — no animation errors for absent elements

## Future Enhancements

- Add a secondary action button slot for multi-CTA hero sections
- Support background image or gradient overlay as a prop
- Provide a reduced-motion variant that respects `prefers-reduced-motion` OS setting
- Add scroll-down indicator or chevron at the bottom of the section

## Open Questions

- Should animation defaults be configurable at the theme or provider level rather than per-instance?
- What is the expected behavior when the typewriter variant is combined with `enableAnimation=false`?
- Should the component expose refs or callbacks for animation lifecycle events (start, complete)?

## Core Concepts

- **Animation orchestration pattern**: Uses framer-motion `motion` components with staggered delays — headline animates first, then description (at `delay + duration`), then button (`delay + duration * 1.5`), then children (`delay + duration * 2`).
- **Typewriter effect mechanism**: The `typewriter` variant renders headline characters one-by-one via a state machine that appends characters on `setInterval` — a specialized animation path that's fundamentally different from the other CSS-transition-based variants.
- **Slot-based composable sections**: Headline, description, action, and children are all optional slots — the component gracefully renders any subset, making it reusable across landing pages, feature sections, and error pages.
- **Animation configuration as component props**: Seven animation variants, duration, delay, and stagger are all controllable via props rather than CSS classes — enables per-instance animation tuning without modifying stylesheets.

## Design Principles

This component is a template — a page-level layout component.

See [Templates](../atomic-design/templates.md) for classification guidelines and usage patterns.

## Source

`src/common/components/templates/HeroSection.tsx`
