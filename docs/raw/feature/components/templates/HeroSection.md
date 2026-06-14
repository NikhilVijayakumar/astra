---
tier: template
---

# HeroSection

A layout component that displays a prominent headline section with optional description and action button.

## Overview

A high-impact landing-style component for displaying primary page content with headline, description, and call-to-action button.

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

## Design Principles

This component is a template — a page-level layout component.

See [Templates](../atomic-design/templates.md) for classification guidelines and usage patterns.

## Source

`src/common/components/templates/HeroSection.tsx`
