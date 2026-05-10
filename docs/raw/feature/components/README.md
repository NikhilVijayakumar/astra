---
tier_index:
  atoms: ./atoms/
  molecules: ./molecules/
  organisms: ./organisms/
  templates: ./templates/
---

# Component Library

This document provides an overview of the UI component library organized by atomic design principles.

## Overview

The component library is organized into four tiers following atomic design methodology:

| Tier          | Components                                                                        | Description                                                     |
| ------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Atoms**     | StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState                    | Small, reusable primitives representing basic states            |
| **Molecules** | Card, Notification, TrendMetricCard, ImageViewer, MdViewer, JsonViewer            | Composed components that combine atoms for specific UI patterns |
| **Organisms** | 33 complex components (DataTable, TimelineNode, FileTree, FileViewerRouter, etc.) | Complex UI sections composed of molecules and atoms             |
| **Templates** | PageHeader, SummaryPanel, HeroSection                                             | Page structure components                                       |

## Directory Structure

```
src/common/components/
├── atoms/                # Primitive UI elements (5 components)
│   ├── StatusDot.tsx
│   ├── SeverityBadge.tsx
│   ├── LoadingState.tsx
│   ├── ErrorState.tsx
│   └── EmptyState.tsx
├── molecules/            # Composite components (6 components)
│   ├── Card.tsx
│   ├── Notification.tsx
│   ├── TrendMetricCard.tsx
│   ├── ImageViewer.tsx
│   ├── MdViewer.tsx
│   └── JsonViewer.tsx
├── organisms/            # Complex UI sections (33 components)
│   ├── DataTable.tsx
│   ├── TimelineNode.tsx
│   ├── FileTree.tsx
│   ├── FileViewerRouter.tsx
│   ├── CsvViewer.tsx
│   └── ... (28 more)
└── templates/            # Page structure components (3 components)
    ├── PageHeader.tsx
    ├── SummaryPanel.tsx
    └── HeroSection.tsx
```

## Import Patterns

### Barrel Exports

All components are exported through barrel files for cleaner imports:

```typescript
// Import everything
import * as Components from "@/common/components";

// Or specific tiers
import { StatusDot, SeverityBadge } from "@/common/components/atoms";
import { Card, Notification } from "@/common/components/molecules";
```

### Direct Imports

```typescript
// Atoms
import { StatusDot, StatusDotTone } from "@/common/components/atoms/StatusDot";
import {
  SeverityBadge,
  SeverityLevel,
} from "@/common/components/atoms/SeverityBadge";

// Molecules
import { Card, CardProps } from "@/common/components/molecules/Card";
import { Notification } from "@/common/components/molecules/Notification";
import {
  TrendMetricCard,
  MetricTrend,
} from "@/common/components/molecules/TrendMetricCard";

// Organisms
import { DataTable } from "@/common/components/organisms/DataTable";
import { TimelineNode } from "@/common/components/organisms/TimelineNode";

// Templates
import {
  PageHeader,
  PageHeaderProps,
} from "@/common/components/templates/PageHeader";
import {
  SummaryPanel,
  SummaryPanelProps,
} from "@/common/components/templates/SummaryPanel";
import { HeroSection } from "@/common/components/templates/HeroSection";

// File Viewers (organized by atomic tier)
import { FileViewerRouter } from "@/common/components/organisms/FileViewerRouter";
import { CsvViewer } from "@/common/components/organisms/CsvViewer";
import { JsonViewer } from "@/common/components/molecules/JsonViewer";
import { ImageViewer } from "@/common/components/molecules/ImageViewer";
import { MdViewer } from "@/common/components/molecules/MdViewer";
```

## Theme Integration

All components use MUI's theme system for styling. They automatically adapt to:

- Light/dark mode via `useMuiTheme()`
- Theme colors (success, warning, error, info)
- Spacing tokens from `src/theme/tokens/spacing.ts`

## Testing

Components have corresponding test files with comprehensive coverage:

```bash
npm test -- --run
```

Test files follow the pattern `*.test.tsx` and use Vitest + Testing Library.

## Atomic Design Methodology

For detailed methodology on component classification and design principles, see [Atomic Design](./atomic-design/README.md).
