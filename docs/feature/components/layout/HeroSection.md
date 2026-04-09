# HeroSection

A layout component that displays a prominent headline section with optional description and action button.

## Overview

A high-impact landing-style component for displaying primary page content with headline, description, and call-to-action button.

## API

### Props

| Prop                 | Type         | Default   | Description                      |
| -------------------- | ------------ | --------- | -------------------------------- |
| `headline`           | `string`     | Required  | Main heading text                |
| `description`        | `string`     | undefined | Supporting description text      |
| `primaryActionLabel` | `string`     | undefined | Button text for primary action   |
| `onPrimaryAction`    | `() => void` | undefined | Click handler for primary action |
| `children`           | `ReactNode`  | undefined | Additional content below actions |

### Interface

```typescript
export interface HeroSectionProps {
  headline: string;
  description?: string;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  children?: ReactNode;
}
```

### Styling Details

- Headline: `variant="h2"`, font weight `700`, letter spacing `-0.02em`
- Description: `variant="h6"`, font weight `400`, max width `600px`, line height `1.6`
- Button: `variant="contained"`, `color="primary"`, `size="large"`, `disableElevation`
- Padding: `py: 8`, `px: 4`
- Max width: `800px`
- Flex column with `alignItems: 'flex-start'`
- Gap between elements: `3`

## Usage Example

```tsx
import { HeroSection } from "@/components/ui/HeroSection";

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

## Source

`src/components/ui/HeroSection.tsx`
