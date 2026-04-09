# Technology Stack: Atomic Design Documentation

**Project:** Astra React Component Library Documentation
**Analysis Date:** 2026-04-09

## Summary

Astra already has a solid foundation for component documentation with Storybook 9.0.18. This research identifies the additional tools and configurations needed to document Atomic Design methodology (atoms/molecules/organisms/templates) with usage patterns and design principles.

**Recommendation:** Extend existing Storybook infrastructure with MDX documentation, organized story naming, and Doc Blocks. No new tool adoption required.

---

## Current Stack Analysis

### Existing Documentation Tools

| Tool                    | Version          | Status       | Purpose                               |
| ----------------------- | ---------------- | ------------ | ------------------------------------- |
| Storybook               | 9.0.18           | ✅ Active    | Component development & documentation |
| @storybook/addon-docs   | 9.0.18           | ✅ Active    | Auto-generated docs (DocsPage)        |
| @storybook/addon-themes | 9.0.18           | ✅ Active    | Light/dark theme switching            |
| @storybook/addon-a11y   | 9.0.18           | ✅ Active    | Accessibility testing                 |
| storybook-i18n          | 4.0.5            | ✅ Installed | Documentation localization            |
| MDX                     | (via addon-docs) | ✅ Available | Rich documentation authoring          |

### Existing Storybook Configuration

The `.storybook/` directory is already configured with:

- Theme decorator with light/dark toggle
- Language provider decorator with locale selector
- Autodocs enabled (`tags: ['autodocs']` in story files)
- MSW integration for API mocking

---

## Recommended Additions

### 1. Storybook Organization (No New Dependencies)

**Pattern:** Use Storybook's `title` hierarchy to mirror Atomic Design structure.

```
Components/
├── Atoms/
│   ├── StatusDot
│   └── SeverityBadge
├── Molecules/
│   ├── TrendMetricCard
│   ├── Notification
│   └── Card
├── Organisms/
│   ├── DataTable
│   ├── OperationHealthPanel
│   └── ...
└── Templates/
    ├── HeroSection
    ├── PageHeader
    └── SummaryPanel
```

**Implementation:**

- Update story `title` properties to follow `Components/Atomic Design Level/ComponentName` pattern
- Example: `title: 'Components/Atoms/StatusDot'`

**Why:** Storybook's sidebar already supports folder-based navigation. This approach is native to Storybook and requires no additional configuration or dependencies.

---

### 2. MDX Documentation Files (No New Dependencies)

**Use Case:** Create design principle documentation alongside component stories.

**Implementation:** Add `.mdx` files in `src/common/components/` matching each atomic level:

| File            | Purpose                                            |
| --------------- | -------------------------------------------------- |
| `atoms.mdx`     | Design principles for atoms, when to use, examples |
| `molecules.mdx` | How atoms combine into molecules                   |
| `organisms.mdx` | Molecule composition patterns                      |
| `templates.mdx` | Page-level composition guidance                    |

**Example structure:**

```mdx
import { Meta, Primary, Controls, Canvas } from "@storybook/blocks";
import * as StatusDotStories from "./atoms/StatusDot.stories";

<Meta of={StatusDotStories} />

# Atoms

Atoms are the basic building blocks. They include...

## When to Use

- Need simple visual indicators
- No complex interaction required

## Examples

<Canvas>
  <Primary />
  <Controls />
</Canvas>
```

**Why:** MDX is already supported via `@storybook/addon-docs`. It enables mixing prose with live component examples.

---

### 3. Doc Blocks for Enhanced Documentation

**Available via Storybook 9:** `@storybook/blocks` package (included with addon-docs)

| Doc Block                | Use                                 |
| ------------------------ | ----------------------------------- |
| `Meta`                   | Attach documentation to a component |
| `Title`                  | Custom section headings             |
| `Primary`                | Render the primary/default story    |
| `Controls`               | Interactive props playground        |
| `Canvas`                 | Multi-story display                 |
| `ArgsTable` / `Controls` | API documentation                   |
| `Source`                 | Code snippets                       |
| `Markdown`               | Embedded markdown                   |

**Why:** Doc Blocks provide professional-grade documentation components without additional installation. They integrate automatically with Storybook's documentation system.

---

### 4. Storybook-i18n Integration (Already Installed)

The `storybook-i18n` package (v4.0.5) is already installed but may need configuration for documentation content.

**Current status:** Language decorator exists in `.storybook/preview.tsx` but targets runtime localization, not documentation.

**Recommendation:** Evaluate if documentation content needs separate i18n (likely not needed for initial release—documentation can be English-only).

---

## Alternative Tools Considered

### Not Recommended

| Tool                                | Why Not                                                           |
| ----------------------------------- | ----------------------------------------------------------------- |
| **Styleguidist**                    | Deprecated in favor of Storybook MDX                              |
| **Docz**                            | No longer maintained                                              |
| **react-styleguidist**              | Alternative to Storybook, but Astra already invested in Storybook |
| **Docusaurus**                      | For standalone docs sites, not component-level docs               |
| **Storybook CSF3 + play functions** | Already supported by current version                              |

---

## Integration with Existing Docs

### Current Documentation Structure

```
docs/
├── feature/
│   ├── components/
│   │   ├── atomic/       # Markdown docs for atoms
│   │   ├── molecular/    # Markdown docs for molecules
│   │   └── layout/       # Markdown docs for templates
│   ├── theming/
│   ├── localization/
│   └── state/
├── integration-guide/    # Getting started, React, Electron
└── components/          # Legacy component docs
```

### Recommended Approach

1. **Keep existing Markdown docs** in `docs/feature/components/` for high-level usage guides
2. **Add Storybook stories** for each component with interactive examples
3. **Add MDX docs** for atomic design methodology (design principles)
4. **Cross-reference** between markdown docs and Storybook

**Rationale:**

- Existing markdown docs provide conceptual understanding
- Storybook provides interactive playground and API reference
- MDX bridges concept and implementation with live examples

---

## Implementation Recommendations

### Phase 1: Story Organization (Low Effort)

1. Update existing story `title` properties to reflect Atomic Design hierarchy
2. Add missing stories for components without them
3. Enable `autodocs` tag on all stories

### Phase 2: MDX Documentation (Medium Effort)

1. Create `atoms.mdx`, `molecules.mdx`, `organisms.mdx`, `templates.mdx`
2. Document design principles for each level
3. Embed relevant component stories as examples

### Phase 3: Design Token Documentation (Future)

1. Document theme tokens in Storybook
2. Add color palette, typography displays
3. Consider `@storybook/addon-design-tokens` if needed

---

## Installation

No new packages required. The current installation includes:

```bash
# Already installed
npm list storybook @storybook/addon-docs @storybook/addon-themes @storybook/addon-a11y storybook-i18n

# If starting fresh:
npm install -D storybook @storybook/addon-docs @storybook/addon-themes @storybook/addon-a11y storybook-i18n
```

---

## Configuration Files

### `.storybook/main.ts` (already configured)

```typescript
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx", // Already includes MDX
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    "msw-storybook-addon",
    "@storybook/addon-onboarding",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
```

### `.storybook/preview.tsx` (already configured)

Theme and language decorators already present for component documentation.

---

## Sources

- **Storybook Docs (v9):** https://storybook.js.org/docs/9/writing-docs
- **MDX in Storybook:** https://storybook.js.org/docs/react/api/mdx
- **Structuring Storybook:** https://storybook.js.org/blog/structuring-your-storybook
- **Atomic Design (Brad Frost):** https://atomicdesign.bradfrost.com/
- **Component-Driven Development:** https://namastedev.com/blog/component-driven-development-with-storybook/

---

## Confidence Assessment

| Area                       | Confidence | Notes                                                |
| -------------------------- | ---------- | ---------------------------------------------------- |
| Stack recommendation       | HIGH       | Storybook 9 already installed and configured         |
| MDX integration            | HIGH       | Already supported via addon-docs                     |
| Atomic Design organization | HIGH       | Native Storybook feature (title hierarchy)           |
| Existing docs integration  | MEDIUM     | Requires coordination with `docs/feature/` structure |

---

_Stack analysis: 2026-04-09_
