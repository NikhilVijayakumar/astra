# Component Library

This document provides an overview of the UI component library organized by atomic design principles.

## Overview

The component library is organized into four tiers following atomic design methodology:

| Tier          | Components                                                                     | Description                                                     |
| ------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **Atoms**     | StatusDot, SeverityBadge                                                       | Small, reusable primitives representing basic states            |
| **Molecules** | Card, Notification, TrendMetricCard                                            | Composed components that combine atoms for specific UI patterns |
| **Organisms** | 27 complex components (DataTable, TimelineNode, FileTree, etc.)                | Complex UI sections composed of molecules and atoms             |
| **Templates** | PageHeader, SummaryPanel, HeroSection, FileViewerRouter, CsvViewer, JsonViewer | Page structure and file rendering components                    |

## Directory Structure

```
src/common/components/
├── atoms/                # Primitive UI elements
│   ├── StatusDot.tsx
│   └── SeverityBadge.tsx
├── molecules/            # Composite components
│   ├── Card.tsx
│   ├── Notification.tsx
│   └── TrendMetricCard.tsx
├── organisms/            # Complex UI sections (27 components)
│   ├── DataTable.tsx
│   ├── TimelineNode.tsx
│   ├── FileTree.tsx
│   └── ... (24 more)
├── templates/            # Page structure + file viewers
│   ├── PageHeader.tsx
│   ├── SummaryPanel.tsx
│   ├── HeroSection.tsx
│   ├── FileViewerRouter.tsx
│   ├── CsvViewer.tsx
│   └── JsonViewer.tsx
├── file-viewers/         # Specialized file viewers
│   ├── ImageViewer.tsx
│   └── MdViewer.tsx
├── navigation/           # Navigation components
└── wrapper/             # Wrapper components
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
import { FileViewerRouter } from "@/common/components/templates/FileViewerRouter";
import { CsvViewer } from "@/common/components/templates/CsvViewer";
import { JsonViewer } from "@/common/components/templates/JsonViewer";

// File Viewers
import { ImageViewer } from "@/common/components/file-viewers/ImageViewer";
import { MdViewer } from "@/common/components/file-viewers/MdViewer";
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
