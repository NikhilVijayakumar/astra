# Atoms

**Tier:** Atoms — Fundamental UI Primitives

## Overview

Atoms are the smallest, most fundamental UI elements in the Atomic Design system. They represent single visual primitives — such as status indicators, badges, and state displays — that serve as the foundational building blocks for all higher-tier components.

## Definition

Atoms are the smallest building blocks in the Atomic Design system. They represent single UI primitives that cannot be broken down further without losing meaning.

### Characteristics

- **Single responsibility:** One visual or behavioral primitive
- **No child components:** Do not render other components
- **Minimal props:** Typically 1-3 configuration options
- **No state logic:** Presentational only, no business logic
- **Composable:** Combine to form molecules

## Atom Components in Astra

| Component       | Purpose                                              |
| --------------- | ---------------------------------------------------- |
| `StatusDot`     | Visual status indicator (online/offline/error)       |
| `SeverityBadge` | Severity level display (info/warning/error/critical) |
| `LoadingState`  | Loading indicator with optional message              |
| `ErrorState`    | Error display with retry action                      |
| `EmptyState`    | Empty state display with optional illustration       |

## Classification Rules

A component qualifies as an **atom** if it:

1. Renders a single visual primitive
2. Accepts only presentation configuration (color, size, label)
3. Contains no other component imports
4. Has no internal state or lifecycle logic
5. Is used by multiple molecule/organism components

## Anti-Patterns

### ❌ Over-Complicated Atoms

A component with too many props (text, color, size, variant, icon, onClick, loading, disabled) suggests it should be a molecule, not an atom.

### ✅ Focused Atoms

A component with a single prop for its configuration value is a well-designed atom.

### ❌ Atoms With State

Atoms should not manage internal state. State management belongs in molecules or organisms.

## Design Checklist

Before creating an atom, verify:

- [ ] Does it render a single visual primitive?
- [ ] Does it have 3 or fewer props?
- [ ] Does it contain no child components?
- [ ] Does it have no internal state?
- [ ] Will multiple molecules/organisms use it?

## Related Tiers

- **Composes into:** [Molecules](./molecules.md)

## Edge Cases

- **Atom-vs-Molecule boundary:** A component with 4+ props or that composes one other component may be a molecule, not an atom
- **Style-only logic:** Minimal style computation (e.g. determining color from a tone prop) is acceptable; business logic or data transformation is not

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
- **Borderline** — 4+ props; should be evaluated as potential molecule
- **Degraded** — Contains internal state, business logic, or component imports

## Error Conditions

- **Invalid prop combination** — Mutually exclusive or contradictory props (e.g. error + success simultaneously)
- **Missing required prop** — Atom renders incorrectly or not at all if required props are omitted
- **Wrong value** — Incorrect value renders incorrect visual state

## Future Enhancements

- Atom component generator CLI for scaffolding new primitives
- Visual regression tests for each atom in light and dark mode

## Open Questions

- Should atoms support style override props, or would that violate the minimal-props principle?
- Is a size scale (sm/md/lg) acceptable on atoms, or does that invite scope creep?
