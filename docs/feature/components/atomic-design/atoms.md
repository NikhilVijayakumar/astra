# Atoms

**Tier:** Atoms — Fundamental UI Primitives

## Definition

Atoms are the smallest, most fundamental building blocks in the Atomic Design system. They represent single UI primitives that cannot be broken down further without losing meaning.

### Characteristics

- **Single responsibility:** One visual or behavioral primitive
- **No child components:** Do not render other components
- **Minimal props:** Typically 1-3 configuration options
- **No state logic:** Presentational only, no business logic
- **Composable:** Combine to form molecules

## Atom Components in Astra

| Component       | Purpose                                              | File                                            |
| --------------- | ---------------------------------------------------- | ----------------------------------------------- |
| `StatusDot`     | Visual status indicator (online/offline/error)       | `src/common/components/atoms/StatusDot.tsx`     |
| `SeverityBadge` | Severity level display (info/warning/error/critical) | `src/common/components/atoms/SeverityBadge.tsx` |
| `LoadingState`  | Loading indicator with optional message              | `src/common/components/atoms/LoadingState.tsx`  |
| `ErrorState`    | Error display with retry action                      | `src/common/components/atoms/ErrorState.tsx`    |
| `EmptyState`    | Empty state display with optional illustration       | `src/common/components/atoms/EmptyState.tsx`    |

## Classification Rules

A component qualifies as an **atom** if it:

1. Renders a single visual primitive
2. Accepts only presentation configuration (color, size, label)
3. Contains no other component imports (except MUI primitives)
4. Has no internal state or lifecycle logic
5. Is used by multiple molecule/organism components

## Usage Patterns

### Direct Import

```typescript
import { StatusDot } from '@/common/components/atoms/StatusDot';
import { StatusDotTone } from '@/common/components/atoms/StatusDot';

<StatusDot tone={StatusDotTone.ONLINE} />
```

### Composition in Molecules

```typescript
// Card.tsx uses StatusDot
import { StatusDot } from '@/common/components/atoms/StatusDot';
import { StatusDotTone } from '@/common/components/atoms/StatusDot';

const Card = ({ status, children }) => (
  <Box>
    <StatusDot tone={status} />
    {children}
  </Box>
);
```

## Anti-Patterns

### ❌ Over-Complicated Atoms

```typescript
// ✗ BAD: Too many props
interface BadgeProps {
  text: string;
  color: string;
  size: "sm" | "md" | "lg";
  variant: "outlined" | "filled";
  icon?: ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}
```

### ✅ Focused Atoms

```typescript
// ✓ GOOD: Single responsibility
interface SeverityBadgeProps {
  severity: SeverityLevel;
}
```

### ❌ Atoms With State

```typescript
// ✗ BAD: Atoms with internal state
const StatusIndicator = () => {
  const [state, setState] = useState();
  // This belongs in a molecule or organism
};
```

## Design Checklist

Before creating an atom, verify:

- [ ] Does it render a single visual primitive?
- [ ] Does it have 3 or fewer props?
- [ ] Does it contain no child components?
- [ ] Does it have no internal state?
- [ ] Will multiple molecules/organisms use it?

## Related Tiers

- **Composes into:** [Molecules](./molecules.md)
- **Built from:** MUI primitives (Box, Typography, etc.)

## Next: Molecules

Molecules compose atoms into functional units with single purposes.
