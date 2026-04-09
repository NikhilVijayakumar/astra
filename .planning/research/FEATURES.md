# Design System Documentation Features

**Project:** Astra Component Library Documentation
**Researched:** 2026-04-09
**Confidence:** HIGH

This document outlines what component library documentation should include for a React + Electron boilerplate using atomic design methodology.

---

## Table of Contents

1. [Component Classification](#component-classification)
2. [Design Principles](#design-principles)
3. [Usage Patterns](#usage-patterns)
4. [Naming Conventions](#naming-conventions)

---

## 1. Component Classification

**Category:** Component Tier Definitions
**Complexity:** Medium
**Dependencies:** Existing `docs/feature/components/README.md`

### What to Document

Documentation must clearly define each tier with examples from the existing library.

| Tier         | Definition                                                                          | Astra Examples                                          | When to Use                                                   |
| ------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------- |
| **Atom**     | Smallest reusable primitive. Cannot be broken down further without losing meaning.  | `StatusDot`, `SeverityBadge`                            | Displaying single data points, state indicators, basic labels |
| **Molecule** | Simple group of atoms working together. Has a specific, single purpose.             | `Card`, `Notification`, `TrendMetricCard`               | Self-contained UI units with one clear function               |
| **Organism** | Complex component forming a distinct UI section. Combines multiple molecules/atoms. | 27 components (DataTable, TimelineNode, FileTree, etc.) | Discrete page sections with multiple responsibilities         |
| **Template** | Layout structure placing organisms in a page arrangement.                           | `PageHeader`, `SummaryPanel`, `HeroSection`             | Page scaffolding, file viewer layouts                         |

### Decision Framework

Provide a flowchart or decision tree for classifying new components:

```
Does the component render a single data point or state?
  YES → Atom
  NO ↓
Does the component have one clear purpose and combine 2+ atoms?
  YES → Molecule
  NO ↓
Does the component form a discrete section of a page?
  YES → Organism
  NO ↓
Does the component define page layout or structure?
  YES → Template
  NO → Reconsider component scope
```

### Documentation Requirements

- **For each tier:** Define the tier, show 2-3 examples, explain the "why"
- **Classification guide:** Decision tree for when to create each tier
- **Anti-patterns:** What NOT to do (e.g., building an organism when a molecule would suffice)

---

## 2. Design Principles

**Category:** Component Creation Guidelines
**Complexity:** Medium-High
**Dependencies:** `docs/feature/theming/tokens.md` (design tokens)

### What to Document

Rules for adding new components to the library.

### Core Principles

1. **Single Responsibility**
   - Each component does one thing well
   - If component handles both data display AND user interaction, consider splitting

2. **Composition Over Construction**
   - Build from existing atoms/molecules rather than creating from scratch
   - New organisms should compose existing molecules

3. **Theme Integration**
   - All components MUST use design tokens (colors, spacing, typography)
   - Never hardcode pixel values — use token references
   - Must support light/dark mode via theme system

4. **Accessibility Required**
   - ARIA roles where applicable
   - Keyboard navigation support
   - Screen reader compatibility

5. **Props Interface Design**
   - Prefer sensible defaults over required props
   - Use union types for constrained values (e.g., `SeverityLevel`)
   - Document all props with types and defaults

### Anti-Patterns

| Anti-Pattern           | Why Avoid                             | Instead                      |
| ---------------------- | ------------------------------------- | ---------------------------- |
| Hardcoded colors       | Breaks theming, no dark mode          | Use theme tokens             |
| Non-composed organisms | Reduced reusability                   | Compose from molecules       |
| Missing prop types     | Type errors, poor DX                  | Define TypeScript interfaces |
| No default props       | Forces consumer to specify everything | Provide sensible defaults    |

### Documentation Requirements

- **Principles section:** 5 core rules with explanations
- **Checklist:** Pre-flight checklist before adding new component
- **Example:** Walk through adding a new molecule using existing atoms
- **Reference:** Link to design tokens documentation

---

## 3. Usage Patterns

**Category:** Component Composition Patterns
**Complexity:** High
**Dependencies:** React documentation patterns

### What to Document

How to compose components together effectively.

### Primary Patterns

#### A. Children Prop (Most Common)

```tsx
// Container accepts any content
<Card>
  <Typography variant="h3">Title</Typography>
  <Typography>Content here</Typography>
</Card>
```

**When to use:** Generic containers, wrappers, cards

#### B. Slot-Based Composition

```tsx
// Named slots for specific areas
<Card header={<Header />} footer={<Footer />}>
  {children}
</Card>
```

**When to use:** Components with distinct regions (header, body, footer)

#### C. Compound Components

```tsx
// Related components sharing state
<Tabs>
  <Tabs.List>
    <Tabs.Tab>Tab 1</Tabs.Tab>
    <Tabs.Tab>Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Content 1</Tabs.Panel>
    <Tabs.Panel>Content 2</Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```

**When to use:** Components with multiple related parts requiring shared state

#### D. Render Props / Function as Children

```tsx
// Consumer controls rendering
<List items={data}>{(item) => <CustomItem>{item.name}</CustomItem>}</List>
```

**When to use:** Highly customizable data display, when consumer needs full control

#### E. Controlled vs Uncontrolled

```tsx
// Controlled: parent manages state
<Input value={value} onChange={handleChange} />

// Uncontrolled: component manages own state
<Input defaultValue="initial" />
```

**When to use:** Controlled when parent needs full control; Uncontrolled for simple forms

### Composition Examples from Astra

| Pattern       | Example                                         |
| ------------- | ----------------------------------------------- |
| Children prop | `Card` wrapping content                         |
| Slot-based    | `PageHeader` with title/subtitle/actions props  |
| Compound      | Not currently used (opportunity)                |
| Controlled    | `Input` components accepting `value`/`onChange` |

### Documentation Requirements

- **Pattern reference:** Each pattern with when-to-use guidance
- **Code examples:** Working examples for each pattern
- **Astra-specific:** Show how existing components use each pattern
- **Migration guidance:** When to switch patterns

---

## 4. Naming Conventions

**Category:** Component Naming Standards
**Complexity:** Low-Medium
**Dependencies:** Existing component names

### What to Document

How to name new components consistently.

### Component Naming Rules

| Rule                       | Example                        | Notes                                    |
| -------------------------- | ------------------------------ | ---------------------------------------- |
| **PascalCase**             | `StatusDot`, `DataTable`       | Standard React convention                |
| **Descriptive**            | `TrendMetricCard` not `CardV2` | Name describes purpose                   |
| **Tier prefixes optional** | No required prefix             | Components organized by folder, not name |
| **Verb-based for actions** | `handleSubmit`, `onClick`      | Callbacks useverb phrases                |
| **Noun-based for data**    | `items`, `data`                | Props holding content                    |

### Type Naming

| Type            | Convention             | Example         |
| --------------- | ---------------------- | --------------- |
| Component props | `{ComponentName}Props` | `CardProps`     |
| Enum types      | `{Purpose}Level`       | `SeverityLevel` |
| Return types    | `{Purpose}Result`      | `ApiResponse`   |
| Custom hooks    | `use{Purpose}`         | `useDataState`  |

### File Naming

```
ComponentName.tsx        # Component implementation
ComponentName.test.tsx   # Tests
ComponentName.stories.tsx # Storybook stories (if added)
index.ts                 # Barrel export
```

### Prop Naming

| Category       | Convention                                       | Example                  |
| -------------- | ------------------------------------------------ | ------------------------ |
| Boolean        | `is{Feature}`, `has{Feature}`, `can{Action}`     | `isDisabled`, `hasError` |
| Event handlers | `on{Event}`                                      | `onChange`, `onSubmit`   |
| Render props   | `{noun}Render`, `{noun}As`, children as function | `renderItem`, `emptyAs`  |
| Data           | Plural for arrays, singular for single           | `items`, `selectedItem`  |

### Documentation Requirements

- **Naming guide:** Quick reference for component, type, prop, file names
- **Examples:** Before/after examples of good vs poor naming
- **Reference:** Link to existing components demonstrating conventions

---

## Implementation Recommendations

### Phase 1: Core Documentation (Priority: High)

1. **Component Classification Guide** — Most valuable for onboarding
   - Update `docs/feature/components/README.md` with classification details
   - Add decision flowchart

2. **Usage Patterns Reference** — Practical guidance for developers
   - Document each pattern with Astra examples

### Phase 2: Governance Documentation (Priority: Medium)

3. **Design Principles** — For contributors adding components
   - Add to `docs/feature/components/README.md` or create `CONTRIBUTING.md`

4. **Naming Conventions** — Enforce consistency
   - Create quick reference in component README

### Phase 3: Advanced (Priority: Low)

5. **Pattern Catalog** — Document advanced composition patterns not yet used
   - Compound components
   - Headless components

---

## Dependencies Identified

| Doc File                            | Purpose                      | Used By                          |
| ----------------------------------- | ---------------------------- | -------------------------------- |
| `docs/feature/components/README.md` | Main component documentation | Classification, patterns, naming |
| `docs/feature/theming/tokens.md`    | Design token reference       | Design principles                |
| `docs/feature/theming/provider.md`  | Theme context                | Design principles                |

---

## Sources

- Brad Frost Atomic Design methodology (atomicdesign.bradfrost.com)
- Design system documentation best practices (2024-2025)
- React composition patterns (reactjs.org/docs)
- Component documentation standards (MUI, Radix UI, shadcn/ui)
