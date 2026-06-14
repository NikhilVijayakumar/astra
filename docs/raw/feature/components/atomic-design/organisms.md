# Organisms

**Tier:** Organisms — Complex UI Sections

## Overview

Organisms are complex UI sections composed of multiple molecules and atoms. They represent discrete, recognizable pieces of an interface with significant logic, state management, or data interactions.

## Definition

Organisms are complex UI sections composed of multiple molecules and atoms. They represent discrete, recognizable pieces of an interface with significant logic, state, or data interactions.

### Characteristics

- **Complex composition:** Multiple molecules and/or atoms
- **Significant state/logic:** Internal data processing or complex interactions
- **Data interactions:** May fetch, display, or manipulate data
- **Discrete sections:** Form recognizable interface pieces
- **Self-contained:** Complete functional units within a page

## Organism Components in Astra

The organism tier contains complex components including:

| Component              | Purpose                                     | Complexity |
| ---------------------- | ------------------------------------------- | ---------- |
| `DataTable`            | Tabular data display with sorting/filtering | High       |
| `TimelineNode`         | Chronological event display                 | Medium     |
| `FileTree`             | Hierarchical file navigation                | Medium     |
| `StatusListRow`        | Status display with actions                 | Low        |
| `AlertListItem`        | Alert item with interactions                | Low        |
| `OperationHealthPanel` | Health status dashboard                     | High       |
| `SummaryListItem`      | Summary item display                        | Low        |

## Classification Rules

A component qualifies as an **organism** if it:

1. Contains 3+ molecules OR multiple atom types
2. Has significant state management or data logic
3. May perform data fetching or API calls
4. Represents a discrete UI section
5. Is self-contained within a page context

## Anti-Patterns

### ❌ Organisms Doing Too Much

An organism managing user management, settings, notifications, file uploads, and analytics has too many responsibilities and should be split into multiple organisms.

### ❌ Organisms Should Be Molecules

A simple card with a value and label is a molecule, not an organism.

### ❌ Organisms With Layout

A component rendering a full page section with header and footer is a template, not an organism.

## Design Checklist

Before creating an organism, verify:

- [ ] Does it compose 3+ molecules or multiple atom types?
- [ ] Does it have significant state or data logic?
- [ ] Does it interact with data (fetch, display, manipulate)?
- [ ] Does it represent a discrete UI section?
- [ ] Is it self-contained within page context?
- [ ] Is it NOT just a larger molecule or a layout?

## Performance Considerations

- Organisms may use memoization to prevent unnecessary re-renders
- Complex interactions may need debouncing or throttling

## Related Tiers

- **Composed from:** [Molecules](./molecules.md) + [Atoms](./atoms.md)
- **Composed into:** [Templates](./templates.md)

## Edge Cases

- **Organism-vs-Template boundary:** An organism that defines page layout structure should be a template instead
- **Single-use organisms:** Organisms designed for exactly one page context should be evaluated for refactoring
- **Performance-sensitive organisms:** Organisms with expensive renders or frequent data updates should consider memoization
- **Empty data state:** Organisms that fetch data must handle loading, error, and empty states

## Responsibilities

- **Complex Assembly:** Assemble molecules and atoms into feature-complete UI sections
- **State Management:** Manage significant local state and data processing logic
- **Data Interaction:** Perform data fetching, manipulation, and display as needed
- **Section Completeness:** Form self-contained, discrete sections within a page layout

## Non-Responsibilities

- **Page Layout:** Organisms must not define overall page or section layout structure
- **Page Specificity:** Organisms must not be written for a single page context
- **Over-Simplification:** Organisms that compose only 1-2 atoms should be molecules

## States

- **Idle** — Mounted, awaiting user interaction or data trigger
- **Loading** — Data fetching in progress
- **Error** — Fetch failed; error state displayed
- **Success** — Data loaded; full organism rendered
- **Empty** — Success with no data; empty state shown

## Error Conditions

- **Data fetch failure** — Network error or API rejection; organism must handle via error state
- **Missing required data** — Prop or context dependency is undefined at render time
- **Performance degradation** — Large datasets cause slow renders; memoization may be needed
- **Over-composition** — Too many responsibilities makes organism unmaintainable; should be split

## Future Enhancements

- Performance monitoring dashboard for organism render times
- Lazy-loading pattern documentation for below-the-fold organisms
- Organism-level error boundary integration with standardized fallback UI

## Open Questions

- Should organisms own their data-fetching logic or receive data via props?
- How should organisms communicate sibling state changes without a shared parent?
- Is there a maximum composition depth before an organism should be split?
