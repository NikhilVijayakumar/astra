# Atomic Design Methodology

**Purpose:** Establishes classification rules for UI components in Astra, ensuring consistent composition patterns across the library.

## Overview

Atomic Design provides a methodology for constructing user interfaces by breaking them down into discrete, composable units. Originally developed by Brad Frost, this approach structures components from simple primitives to complex compositions.

### Why Atomic Design for Astra?

- **Predictability:** Components follow explicit classification rules
- **Reusability:** Clear boundaries enable confident composition
- **Maintainability:** Components are easier to locate and modify
- **Onboarding:** New contributors understand where to place new components

## Tier Definitions

| Tier          | Definition                                                                                             | Examples                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| **Atoms**     | The smallest, most fundamental UI elements. Single responsibility, no child components, minimal props. | Buttons, icons, labels, badges, status indicators         |
| **Molecules** | Composed of 2+ atoms. Single functional purpose, self-contained units.                                 | Cards, notifications, form inputs, metric displays        |
| **Organisms** | Complex UI sections. Multiple molecules/atoms, significant state or logic, discrete page sections.     | Data tables, timelines, file trees, forms                 |
| **Templates** | Page-level layouts. Define structure, composition rules, and how organisms fit together.               | Page headers, summary panels, hero sections, file viewers |

## Decision Flowchart

Use this flowchart to classify new components:

```mermaid
flowchart TD
    A[New Component] --> B{Does it have single responsibility?}
    B -->|No| Z[Break into smaller units]
    B -->|Yes| C{Does it compose 2+ atoms or molecules?}
    C -->|No| D{Is it a fundamental UI primitive?}
    C -->|Yes| E{Does it manage significant state or logic?}
    D -->|Yes| F[ATOM]
    D -->|No| Z
    E -->|Yes| G{Is it a page-level layout?}
    E -->|No| H[MOLECULE]
    G -->|Yes| I[TEMPLATE]
    G -->|No| J{Does it form a discrete page section?}
    J -->|Yes| K[ORGANISM]
    J -->|No| H

    F[ATOM] --> L[Place in atoms/]
    H[MOLECULE] --> M[Place in molecules/]
    K[ORGANISM] --> N[Place in organisms/]
    I[TEMPLATE] --> O[Place in templates/]
```

## Design Principles

### 1. Single Responsibility Per Tier

Each component has one job appropriate to its tier:

- **Atoms:** Render a single primitive (color, shape, label)
- **Molecules:** Compose atoms into functional units
- **Organisms:** Assemble molecules into coherent sections
- **Templates:** Arrange organisms into page layouts

### 2. Composition Over Inheritance

Build complex UI from simple pieces:

```typescript
// ✓ Correct: Composition
const Card = ({ children }) => (
  <Box sx={cardStyles}>
    {children}
  </Box>
);

// ✗ Avoid: Monolithic components
const Card = ({ title, body, actions, footer }) => (...)
```

### 3. Explicit Over Implicit

Classification must be obvious from component purpose:

- **Good:** `StatusDot` is an atom (single status indicator)
- **Ambiguous:** `MetricDisplay` (could be molecule or organism)
- **Rule:** When uncertain, prefer simpler tier

### 4. Documentation With Examples

Every component document links to:

- Its tier guide (`atomic-design/atoms.md`, etc.)
- Concrete examples of similar components
- Usage patterns for composition

### 5. Verification On Check-In

Before adding a component:

1. Identify its tier using the flowchart
2. Confirm similar components exist in that tier
3. Verify it follows tier-specific patterns
4. Add to appropriate index.ts barrel export

## Anti-Patterns

### Atoms Anti-Patterns

- Atoms with >5 props (likely needs composition)
- Atoms containing other components
- Atoms with complex state logic
- Atoms with side effects

### Molecules Anti-Patterns

- Molecules that don't compose atoms
- Molecules with significant data fetching
- Molecules managing complex state
- Molecules exceeding 200 lines

### Organisms Anti-Patterns

- Organisms that should be molecules (over-composition)
- Organisms doing too much (split into organisms)
- Organisms with no clear single purpose
- Organisms exceeding 500 lines

### Templates Anti-Patterns

- Templates with content (should be organisms)
- Templates managing application state
- Templates with business logic
- Templates specific to one page (make it an organism)

## Related Guides

- [Atoms](./atoms.md) — Fundamental UI primitives
- [Molecules](./molecules.md) — Composed functional units
- [Organisms](./organisms.md) — Complex UI sections
- [Templates](./templates.md) — Page-level layouts

## External Resources

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [Component Composition in React](https://react.dev/learn/composition)
