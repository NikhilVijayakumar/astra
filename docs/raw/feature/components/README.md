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
| **Organisms** | DataTable, FormLayout, DrawerComponent, ToolbarComponent, FileViewerRouter, CsvViewer | Complex UI sections composed of molecules and atoms             |
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
├── organisms/            # Complex UI sections
│   ├── DataTable.tsx
│   ├── FormLayout.tsx
│   ├── DrawerComponent.tsx
│   ├── ToolbarComponent.tsx
│   ├── FileViewerRouter.tsx
│   ├── CsvViewer.tsx
│   ├── AppStateHandler.tsx
│   ├── TimelineNode.tsx
│   ├── FileTree.tsx
│   └── ...
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
import { FormLayout } from "@/common/components/organisms/FormLayout";
import { DrawerComponent } from "@/common/components/organisms/DrawerComponent";
import { ToolbarComponent } from "@/common/components/organisms/ToolbarComponent";
import { FileViewerRouter } from "@/common/components/organisms/FileViewerRouter";
import { CsvViewer } from "@/common/components/organisms/CsvViewer";
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

## Core Concepts

- **Atomic Design:** Components organized into Atoms → Molecules → Organisms → Templates hierarchy
- **Barrel Exports:** Each tier directory has an `index.ts` re-exporting all components for clean imports
- **MUI Theme Integration:** All components consume theme via `useTheme()` for consistent styling
- **Test Coverage:** Every component requires a corresponding `*.test.tsx` file with Vitest + Testing Library

## Atomic Design Methodology

For detailed methodology on component classification and design principles, see [Atomic Design](./atomic-design/README.md).

## Responsibilities

- **Component Housing:** Organize all UI components by atomic design tier
- **Import Management:** Maintain barrel exports and consistent import patterns
- **Theme Integration:** Ensure all components integrate with the MUI theme system
- **Test Coverage:** Maintain comprehensive test coverage for all components

## Non-Responsibilities

- **Application Layout:** Does not define application-level routing or page composition
- **Global State:** Does not manage global application state or context
- **Business Logic:** Does not implement domain-specific business logic

## Edge Cases

- **Cross-Tier Components:** Components that could logically fit multiple tiers (see [Atomic Design](./atomic-design/README.md) for classification)
- **Third-Party Wrappers:** External component wrappers that need custom tier assignment
- **Shared Utilities:** Helper or utility components used across multiple tiers

## States

- **Organized** — All components correctly filed by atomic tier with barrel exports
- **Unclassified** — New component exists in codebase but not yet assigned to a tier
- **Deprecated** — Component superseded by newer version; still exported but marked for removal

## Inputs/Outputs

- **Inputs:** Import path (tier barrel or direct file), component name
- **Outputs:** Rendered component integrated with MUI theme; test coverage via `*.test.tsx` files

## Error Conditions

- **Incorrect import path** — Importing from wrong tier directory causes build failure
- **Missing barrel export** — Component exists in directory but not re-exported from `index.ts`
- **Cross-tier dependency violation** — Atom imports from molecule/organism creates circular dependency
- **Missing test coverage** — Component added without corresponding `*.test.tsx` file

## Future Enhancements

- Component library published as a standalone npm package for external consumption
- Interactive component explorer with live prop-editing (Storybook 8)
- Automated bundle size reporting per component tier
- Visual snapshot testing integrated into CI pipeline

## Open Questions

- Should the component library remain internal or be open-sourced?
- How should cross-cutting concerns (analytics, theming) be injected without coupling components?
- Is a CSS-in-JS migration (e.g., Pigment CSS, Panda) worth considering over MUI's styled API?
