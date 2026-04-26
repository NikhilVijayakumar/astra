---
tier: molecule
---

# Card

A molecular component that provides a styled container with optional title, supporting text, and action button.

## Overview

A versatile card component that wraps content in a Paper component with elevation. Supports header configuration with title, subtitle, and action slot.

## API

### Props

| Prop             | Type        | Default   | Description                                   |
| ---------------- | ----------- | --------- | --------------------------------------------- |
| `title`          | `string`    | undefined | Card header title                             |
| `supportingText` | `string`    | undefined | Subtitle text below the title                 |
| `children`       | `ReactNode` | undefined | Card body content                             |
| `action`         | `ReactNode` | undefined | Action element (button, icon, etc.) in header |

### Interface

```typescript
export interface CardProps {
  title?: string;
  supportingText?: string;
  children?: ReactNode;
  action?: ReactNode;
}
```

### Styling Details

- Elevation: `0` (border-based, premium style)
- Padding: `spacing.lg` (24px)
- Border radius: `1` (8px)
- Background: `background.paper` from theme
- Gap between elements: `spacing.xs` (8px)
- Border: 1px solid divider

## Localization

This component uses props for text. Ensure parent passes localized strings:

```tsx
// Parent component provides localized titles
<Card
  title={literal["card.system_status"]}
  supportingText={literal["card.current_health"]}
>
  {children}
</Card>
```

Required translation keys:
- `card.system_status` - Card title
- `card.current_health` - Supporting text

## Premium UI

Follows premium-ui-patterns skill guidelines:
- Soft surface contrast
- Subtle border over elevation
- Clear content hierarchy

## Usage Example

```tsx
import { Card } from "@/common/components/molecules/Card";
import { Button } from "@mui/material";
import { useLanguage } from "@/common/localization/LanguageContext";

const DashboardCard = () => {
  const { literal } = useLanguage();
  
  return (
    <Card
      title={literal["card.system_status"]}
      supportingText={literal["card.current_health"]}
      action={<Button size="small">{literal["ui.view_details"]}</Button>}
    >
      <div>Card content goes here...</div>
    </Card>
  );
};

// Without header
const SimpleCard = () => (
  <Card>
    <p>Just content with no header</p>
  </Card>
);
```

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/Card.tsx`
