# Templates

**Tier:** Templates — Page-Level Layouts

## Overview

Templates define page-level layout structures and composition rules. They arrange organisms into cohesive page layouts without containing page-specific content, business logic, or data dependencies.

## Definition

Templates define the structure and composition rules for page-level layouts. They arrange organisms into cohesive pages, establishing how UI sections fit together without containing page-specific content.

### Characteristics

- **Layout focused:** Define structure, not content
- **Composition rules:** Specify how organisms are arranged
- **No business logic:** Layout logic only
- **Reusable layouts:** Multiple pages share the same template
- **Content slots:** Accept content via composition (children)

## Template Components in Astra

| Component      | Purpose                 | Layout Pattern   | File                                               |
| -------------- | ----------------------- | ---------------- | -------------------------------------------------- |
| `PageHeader`   | Page title and actions  | Vertical stack   | `src/common/components/templates/PageHeader.tsx`   |
| `SummaryPanel` | Summary metrics display | Grid layout      | `src/common/components/templates/SummaryPanel.tsx` |
| `HeroSection`  | Hero/intro section      | Centered content | `src/common/components/templates/HeroSection.tsx`  |

**Note:** File viewers (FileViewerRouter, CsvViewer, JsonViewer, ImageViewer, MdViewer) are organisms/molecules, not templates. See [organisms](./organisms.md) and [molecules](./molecules.md) documentation.

## Classification Rules

A component qualifies as a **template** if it:

1. Defines page or section structure
2. Arranges organisms into layout
3. Contains no business logic or data fetching
4. Uses children prop or slots for content
5. Is reusable across multiple pages

## Usage Patterns

### Basic Composition

```typescript
import { PageHeader } from '@/common/components/templates/PageHeader';
import { SummaryPanel } from '@/common/components/templates/SummaryPanel';

// Templates define structure, pages provide content
const MyPage = () => (
  <Box>
    <PageHeader title="Dashboard" actions={<ActionButtons />} />
    <SummaryPanel metrics={data} />
    <DataTable data={records} />
  </Box>
);
```

### Layout Composition Pattern

```typescript
// PageHeader defines layout structure
const PageHeader = ({ title, subtitle, actions, breadcrumb }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    {breadcrumb && <Breadcrumbs>{breadcrumb}</Breadcrumbs>}
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="h4">{title}</Typography>
        {subtitle && <Typography>{subtitle}</Typography>}
      </Box>
      {actions && <Box>{actions}</Box>}
    </Box>
  </Box>
);
```

## Anti-Patterns

### ❌ Templates With Content

```typescript
// ✗ BAD: Templates should not have content
const PageLayout = () => (
  <Box>
    <PageHeader title="Users" />  // Hard-coded content
    <DataTable data={users} />     // Data-specific
    <Footer copyright="2024" />    // Page-specific
  </Box>
);
// This is a page, not a template
```

### ❌ Templates With Business Logic

```typescript
// ✗ BAD: Business logic belongs in pages or organisms
const DashboardTemplate = () => {
  const { data } = useQuery(...);  // Data fetching
  const user = useUser();          // Context dependency
  const dispatch = useDispatch();   // State management
  // This belongs in an organism or page
};
```

### ❌ Page-Specific Templates

```typescript
// ✗ BAD: Single-page specific templates
const UserProfilePageTemplate = () => (
  <Box>
    <Avatar userId={42} />           // Page-specific
    <UserDetails userId={42} />     // Page-specific
    <UserPosts userId={42} />        // Page-specific
  </Box>
);
// Make organisms, then compose in pages
```

## Template vs Organism Decision

Use this checklist to decide:

| Question                            | Template | Organism |
| ----------------------------------- | -------- | -------- |
| Does it define layout structure?    | ✓        |          |
| Does it arrange multiple organisms? | ✓        |          |
| Does it contain business logic?     | ✗        |          |
| Does it fetch or manipulate data?   | ✗        |          |
| Is it reusable across pages?        | ✓        |          |

## Design Checklist

Before creating a template, verify:

- [ ] Does it define page or section structure?
- [ ] Does it arrange organisms into layout?
- [ ] Does it contain no business logic or data fetching?
- [ ] Does it use children prop or slots for content?
- [ ] Is it reusable across multiple pages?

## Layout Patterns

### Vertical Stack

```typescript
<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
  {children}
</Box>
```

### Grid Layout

```typescript
<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2 }}>
  {children}
</Box>
```

### Conditional Layout

```typescript
const FileViewerRouter = ({ fileType, content }) => {
  if (fileType === 'json') return <JsonViewer content={content} />;
  if (fileType === 'csv') return <CsvViewer content={content} />;
  return <TextViewer content={content} />;
};
```

## Related Tiers

- **Composed from:** [Organisms](./organisms.md)
- **Used by:** Page components

## Tier Summary

Templates complete the Atomic Design hierarchy:

```
Atoms → Molecules → Organisms → Templates
  ↓        ↓          ↓           ↓
Primitives Functional  Complex    Layout
            Units                   Sections       
```
 
## Edge Cases

- **Template-vs-Organism boundary:** A template with specific content or business logic should be downgraded to an organism
- **Single-page templates:** A template used by only one page component should be evaluated — consider merging into the page
- **Nested templates:** Templates should not render other templates; compose organisms only
- **Empty slot states:** Templates with optional children slots should handle missing children gracefully (no-throw)
- **Responsive breakpoints:** Templates should define layout breakpoints; organisms and molecules should not

## Responsibilities

- **Layout Definition:** Define reusable page and section layout structures
- **Organism Arrangement:** Arrange organisms into cohesive, structured compositions
- **Content Slots:** Provide composition slots via children props or named slots
- **Reusability:** Support multiple pages sharing the same layout template

## Non-Responsibilities

- **Content:** Templates must not contain page-specific content or hard-coded data
- **Business Logic:** Templates must not contain business logic or application state
- **Data Fetching:** Templates must not perform data fetching or API calls
- **Page Specificity:** Templates must not be designed for a single page only

## States

- **Empty** — Template rendered with no children or empty slots; renders layout shell only
- **Populated** — Template rendered with organisms/molecules in content slots
- **Responsive** — Layout adapts to viewport breakpoints defined in the template

## Inputs/Outputs

- **Inputs:** `children` prop, named slots (`title`, `subtitle`, `actions`, `breadcrumb`), layout configuration
- **Outputs:** Rendered page/section layout structure; no business logic, no data, no side effects

## Error Conditions

- **Missing children** — Template with all optional slots renders empty layout; may confuse consumers
- **Invalid slot arrangement** — Organisms placed in wrong slots cause layout breakage
- **Responsive breakpoint mismatch** — Template defines breakpoints inconsistent with organism content requirements
- **Business logic leak** — Data fetching or state management accidentally added to template

## Future Enhancements

- Template composition API — named slot components for stricter layout contracts
- Responsive template variants for mobile, tablet, and desktop viewports
- Template playground in Storybook with resizable containers
- Layout testing utilities to verify template slot placement across breakpoints

## Open Questions

- Should templates support SSR-specific layout variants for hydration optimization?
- How should nested templates (template within a template) be classified?
- Is there value in a template registry that maps routes to template components?
```
