# Molecules

**Tier:** Molecules — Composed Functional Units

## Overview

Molecules are self-contained components that compose two or more atoms into meaningful, reusable functional units. They bridge the gap between primitive elements and complex UI sections, each serving a single clear purpose.

## Definition

Molecules are self-contained components composed of 2+ atoms. They represent single functional units with a clear purpose, combining primitives into meaningful UI elements.

### Characteristics

- **Composed of atoms:** Built from 2+ atom components
- **Single functional purpose:** One clear use case
- **Self-contained:** No external data dependencies
- **Reusable:** Used across multiple organisms
- **Presentational or light state:** Props-driven or minimal local state

## Molecule Components in Astra

| Component         | Purpose                             | Composition               | File                                                  |
| ----------------- | ----------------------------------- | ------------------------- | ----------------------------------------------------- |
| `Card`            | Container with consistent styling   | Box, Typography atoms     | `src/common/components/molecules/Card.tsx`            |
| `Notification`    | Alert/message display               | SeverityBadge, Typography | `src/common/components/molecules/Notification.tsx`    |
| `TrendMetricCard` | Metric display with trend indicator | StatusDot, Typography     | `src/common/components/molecules/TrendMetricCard.tsx` |
| `ImageViewer`     | Image file display                  | Box, img atoms            | `src/common/components/molecules/ImageViewer.tsx`     |
| `MdViewer`        | Markdown file display               | Box, Typography atoms     | `src/common/components/molecules/MdViewer.tsx`        |
| `JsonViewer`      | JSON file display                   | Box, Typography atoms     | `src/common/components/molecules/JsonViewer.tsx`      |

## Classification Rules

A component qualifies as a **molecule** if it:

1. Composes 2+ atoms OR 1 atom + MUI primitives
2. Has a single, clear functional purpose
3. Contains no significant data fetching
4. Manages only local UI state (if any)
5. Is self-contained (no external context dependencies)

## Usage Patterns

### Direct Import

```typescript
import { Card } from '@/common/components/molecules/Card';
import { Notification } from '@/common/components/molecules/Notification';
import { TrendMetricCard } from '@/common/components/molecules/TrendMetricCard';

<Card>{content}</Card>
<Notification severity={SeverityLevel.WARNING} message="Alert" />
<TrendMetricCard value={42} trend={MetricTrend.UP} />
```

### Composition Patterns

#### Container + Content Pattern

```typescript
// Card wraps content
const Card = ({ children, title, actions }) => (
  <Box sx={cardStyles}>
    {title && <Typography variant="h6">{title}</Typography>}
    <Box>{children}</Box>
    {actions && <Box>{actions}</Box>}
  </Box>
);
```

#### Wrapper Pattern

```typescript
// Notification wraps severity display
const Notification = ({ message, severity }) => (
  <Alert severity={severity}>
    <SeverityBadge severity={severity} />
    {message}
  </Alert>
);
```

## Anti-Patterns

### ❌ Data Fetching in Molecules

```typescript
// ✗ BAD: Molecules should not fetch data
const MetricCard = ({ metricId }) => {
  const { data } = useQuery(["metric", metricId], fetchMetric);
  // Data fetching belongs in organisms
};
```

### ❌ Complex State Management

```typescript
// ✗ BAD: Complex state belongs in organisms
const Card = () => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState([]);
  const [filter, setFilter] = useState({});
  // This is organism-level complexity
};
```

### ❌ Side Effects

```typescript
// ✗ BAD: Side effects belong in hooks or organisms
useEffect(() => {
  trackEvent("card_viewed");
}, []);
```

## Design Checklist

Before creating a molecule, verify:

- [ ] Does it compose 2+ atoms or 1 atom + MUI primitives?
- [ ] Does it have a single, clear functional purpose?
- [ ] Does it contain no data fetching?
- [ ] Does it manage only local UI state (if any)?
- [ ] Is it self-contained with no external context dependencies?

## Related Tiers

- **Composed from:** [Atoms](./atoms.md)
- **Composes into:** [Organisms](./organisms.md)

## Next: Organisms

Organisms assemble molecules into complex UI sections with significant logic and state.

## Edge Cases

- **Molecule-vs-Organism boundary:** A component that performs data fetching or manages significant state is an organism, not a molecule
- **Single-atom molecules:** A component wrapping a single atom with no added behavior should remain an atom
- **Minimal state:** Local UI state (e.g. open/closed toggle) is acceptable in molecules; async state or external data is not
- **Context consumers:** A molecule reading from React Context shifts it toward organism territory — evaluate case by case

## Responsibilities

- **Composition:** Compose atoms into cohesive, purpose-driven functional units
- **Single Purpose:** Maintain one clear use case per molecule component
- **Props-Driven Interface:** Expose configuration through props rather than internal logic
- **Self-Containment:** Operate without external data or context dependencies

## Non-Responsibilities

- **Data Fetching:** Molecules must not fetch or manage external data
- **Complex State:** Molecules must not manage complex state beyond minimal local UI state
- **Side Effects:** Molecules must not produce side effects such as analytics tracking or logging
- **Page Layout:** Molecules must not define page-level layout or structure

## States

- **Compliant** — Composes 2+ atoms, single purpose, no data fetching, self-contained
- **Borderline** — Wraps single atom with minimal added behavior; consider keeping as atom
- **Degraded** — Contains data fetching, complex state, or side effects; should be promoted to organism

## Inputs/Outputs

- **Inputs:** Props for configuration (content, severity, value, trend, file source)
- **Outputs:** Rendered functional UI unit composed of atoms; no return values or side effects

## Error Conditions

- **Missing composed atom** — Required atom is not rendered or receives invalid props
- **Invalid content type** — Molecule designed for specific data shape receives incompatible input
- **Context dependency creep** — Reading React Context shifts molecule toward organism; may cause unexpected re-renders

## Future Enhancements

- Compound component pattern for molecules with multiple composition slots
- Accessibility audit checklist specific to molecule-level interactions
- Responsive variants for molecules that adapt layout at breakpoints
- Automated dependency check to ensure molecules only import from atoms, not organisms

## Open Questions

- Should molecules with 3+ atom compositions be automatically promoted to organisms?
- How should molecule-level error boundaries work without becoming organisms?
- Is there a performance budget (lines of code, prop count) enforced for molecules?
