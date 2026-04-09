# Templates

**Tier:** Templates — Page-Level Layouts

## Definition

Templates define the structure and composition rules for page-level layouts. They arrange organisms into cohesive pages, establishing how UI sections fit together without containing page-specific content.

### Characteristics

- **Layout focused:** Define structure, not content
- **Composition rules:** Specify how organisms are arranged
- **No business logic:** Layout logic only
- **Reusable layouts:** Multiple pages share the same template
- **Content slots:** Accept content via composition (children)

## Template Components in Astra

| Component          | Purpose                   | Layout Pattern        | File                                                   |
| ------------------ | ------------------------- | --------------------- | ------------------------------------------------------ |
| `PageHeader`       | Page title and actions    | Vertical stack        | `src/common/components/templates/PageHeader.tsx`       |
| `SummaryPanel`     | Summary metrics display   | Grid layout           | `src/common/components/templates/SummaryPanel.tsx`     |
| `HeroSection`      | Hero/intro section        | Centered content      | `src/common/components/templates/HeroSection.tsx`      |
| `FileViewerRouter` | File viewer orchestration | Conditional rendering | `src/common/components/templates/FileViewerRouter.tsx` |
| `CsvViewer`        | CSV file display          | Table layout          | `src/common/components/templates/CsvViewer.tsx`        |
| `JsonViewer`       | JSON file display         | Code block            | `src/common/components/templates/JsonViewer.tsx`       |

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
           Units       Sections
```
