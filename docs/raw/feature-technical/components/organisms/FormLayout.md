# FormLayout

---

# Feature Summary

A presentational form layout organism that provides consistent vertical stacking for form pages. Defines three vertical slots — header (title), body (children), and footer (actions) — with a max-width constraint of 600px for readability.

---

# Implementation Reference

## Status

Implemented

## Source Files

| File | Path | Role |
|------|------|------|
| Component | `src/common/components/organisms/FormLayout.tsx` | View — pure presentational |
| Barrel | `src/common/components/organisms/index.ts` | Re-exports `FormLayout` |
| Spacing tokens | `src/theme/tokens/spacing.ts` | Token imports |

No test or story files exist.

## Public API

### Exports

```
FormLayout        (component)
FormLayoutProps   (interface)
```

### Import Path

```typescript
import { FormLayout } from "src/common/components/organisms/FormLayout";
// or via barrel:
import { FormLayout } from "src/common/components/organisms";
```

### Props Interface

```typescript
interface FormLayoutProps {
  title?: string;                  // optional — rendered as h5 typography header
  children: React.ReactNode;       // required — form body content
  actions?: React.ReactNode;       // optional — rendered in footer row
}
```

### Contract

- `children` is required — TypeScript compilation fails if omitted
- `title` and `actions` are optional — omitted sections produce no DOM
- No runtime validation
- No default values

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Stateless UI | Component owns no state | Pure function of props — no useState/useEffect |
| Atomic Hierarchy | Organism | Composes Typography (atom), Box (layout primitive) |
| Theme Sovereignty | All styling via theme tokens | `spacing.xl/lg/md`, `palette.text.primary`, `borderColor: 'divider'` |
| MVVM Separation | Pure View | No data fetching, no business logic |
| Dependency Safety | Minimal imports | Only MUI `Box`, `Typography`, and spacing tokens |

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|-----------------|--------------|
| `FormLayout` | `src/common/components/organisms/FormLayout.tsx` | Form page layout wrapper | Render optional title header, required children body, optional actions footer with consistent spacing | MUI (`Box`, `Typography`), `spacing` |

No ViewModel — component is purely presentational.

## State Model

No state — stateless layout wrapper.

## Workflow Design

No workflows — component is a structural layout element.

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `children` required | TypeScript compilation | TS error: missing required prop | N/A — compile-time |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|-----------|-------|----------------|---------------|
| No `title` | Prop omitted | Header section not rendered | Form appears without title |
| No `actions` | Prop omitted | Footer row not rendered | Form appears without action buttons |
| Empty `children` | `<FormLayout></FormLayout>` | Empty flex column rendered — invisible to user | Page appears blank |
| Single child | One ReactNode as children | Renders normally without extra spacing | No visible issue |

---

# Non-Functional Requirements

## Performance

- Single-pass render — no effects, no state
- Conditional rendering of header/footer via `&&` — minimal DOM when slots omitted

## Reliability

- Max-width constraint (`600px`) enforced via `Box` wrapper — prevents line-length readability degradation
- Border-top separator on actions slot uses theme `divider` color — automatically adapts to light/dark mode

## Maintainability

- Three clearly defined slots with independent conditional rendering
- No internal state — trivially testable via props assertion
- Single file — no supporting data types file needed

---

# Architecture Compliance Review

## Applied Patterns

- **Stateless UI**: Full compliance
- **Atomic Hierarchy**: Full compliance — organism tier, composes atoms only
- **Theme Sovereignty**: Full compliance — no hardcoded values
- **MVVM Separation**: Full compliance — pure View
- **Repository Isolation**: N/A
- **Localization**: N/A — `title` is a pre-translated string prop from parent

## Risks

- Max-width is hardcoded at 600px — not configurable. Future enhancement: add `maxWidth` prop
- No `id` or `aria-label` on any rendered section — accessibility gap

## Gaps

- No localization — title is received as pre-translated string, which is compliant but shifts responsibility to parent
- No form-level validation summary slot (noted as open question in spec)

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `FormLayout` | `src/common/components/organisms/FormLayout.tsx` | `FormLayout`, `FormLayoutProps` | `react`, `@mui/material`, `spacing` |
| Barrel | `src/common/components/organisms/index.ts` | `FormLayout` | re-exports from `FormLayout` |

---

# Final Rule

The component must never manage form state, validation, submission, or lifecycle events — it is a structural layout slot machine only. Any additional visual behavior (loading skeletons, sticky actions footer) must be added via new props as optional features, never as mandatory behaviors.
