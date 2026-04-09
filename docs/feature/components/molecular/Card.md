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

- Elevation: `1` (subtle shadow)
- Padding: `3` (24px)
- Border radius: `8px`
- Background: `background.paper` from theme
- Gap between elements: `2` (16px)

## Usage Example

```tsx
import { Card } from "@/components/ui/Card";
import { Button } from "@mui/material";

const DashboardCard = () => (
  <Card
    title="System Status"
    supportingText="Current health metrics"
    action={<Button size="small">View Details</Button>}
  >
    <div>Card content goes here...</div>
  </Card>
);

// Without header
const SimpleCard = () => (
  <Card>
    <p>Just content with no header</p>
  </Card>
);
```

## Source

`src/components/ui/Card.tsx`
