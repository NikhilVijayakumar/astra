# Molecules

**Tier:** Molecules — Composed Functional Units

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
