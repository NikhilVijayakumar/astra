# Atoms

**Tier:** Atoms — Fundamental UI Primitives

## Overview

Atoms are the smallest, most fundamental UI elements in the Atomic Design system. They represent single visual primitives — such as status indicators, badges, and state displays — that serve as the foundational building blocks for all higher-tier components.

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

## Edge Cases

- **Atom-vs-Molecule boundary:** A component with 4+ props or that composes one other component may be a molecule, not an atom
- **MUI imports:** MUI primitives (Box, Typography) are permitted in atoms; any other component import disqualifies the atom classification
- **Style-only logic:** Minimal style computation (e.g. determining color from a tone prop) is acceptable; business logic or data transformation is not
- **Ref forwarding:** Atoms that require `ref` forwarding remain atoms if they meet all other criteria

## Responsibilities

- **Primitive Rendering:** Render a single visual primitive with consistent presentation
- **Configuration Surface:** Expose minimal, focused props for visual configuration
- **Reusability:** Serve as drop-in building blocks across molecules and organisms
- **Consistency:** Maintain uniform visual language across all atom instances

## Non-Responsibilities

- **Composition:** Atoms must not contain or render child components
- **Business Logic:** Atoms must not contain business logic or application state
- **Data Fetching:** Atoms must not perform API calls or data retrieval
- **Side Effects:** Atoms must not produce side effects outside rendering

## States

- **Compliant** — Meets all atom criteria (1-3 props, no children, no state, no side effects)
- **Borderline** — 4+ props or uses MUI-only child; should be evaluated as potential molecule
- **Degraded** — Contains internal state, business logic, or non-MUI component imports

## Inputs/Outputs

- **Inputs:** Props (1-3), typically tone/severity/color/size/label configuration
- **Outputs:** Rendered primitive UI element (dot, badge, text, icon); no side effects or return values

## Error Conditions

- **Invalid prop combination** — Mutually exclusive or contradictory props (e.g. error + success simultaneously)
- **Missing required prop** — Atom renders incorrectly or not at all if required props are omitted
- **Wrong tone/severity value** — Enum mismatch passes TypeScript but renders incorrect visual state

## Future Enhancements

- Atom component generator CLI for scaffolding new primitives with tests
- Visual regression tests for each atom in light and dark mode
- Polymorphic `as` prop support on atoms that render different base elements
- Atom-specific design token playground in Storybook

## Open Questions

- Should atoms support `sx`-like override props, or would that violate the minimal-props principle?
- How should atoms expose refs — forwardRef on every atom or only when needed?
- Is a `size` scale (sm/md/lg) acceptable on atoms, or does that invite scope creep?
