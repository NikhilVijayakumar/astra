# ToolbarComponent

---

# Feature Summary

A top app bar organism that renders a fixed-position MUI AppBar with a responsive mobile menu toggle icon, a truncated title, and a ThemeToggle bound to an externally-resolved theme context. Acts as the application shell's primary header slot.

---

# Implementation Reference

## Status

Implemented

## Source Files

| File | Path | Role |
|------|------|------|
| Component | `src/common/components/organisms/ToolbarComponent.tsx` | View — pure presentational |
| Data types | `src/common/components/organisms/ToolbarData.ts` | Public prop interface |
| Barrel | `src/common/components/organisms/index.ts` | Re-exports `ToolbarComponent` |
| Theme toggle | `src/common/theme/ThemeToggle.tsx` | Child molecule consumed by component |
| Theme types | `src/common/theme/themeData.ts` | Defines `ThemeContextValue` |
| Spacing tokens | `src/theme/tokens/spacing.ts` | Token imports |

No test or story files exist.

## Public API

### Exports

```
ToolbarComponent  (component)
ToolbarProps      (interface) — from ToolbarData.ts
```

### Import Path

```typescript
import { ToolbarComponent } from "src/common/components/organisms/ToolbarComponent";
// or via barrel:
import { ToolbarComponent } from "src/common/components/organisms";
```

### Props Interface

```typescript
import { ThemeContextValue } from "../../theme/themeData";

interface ToolbarProps {
  handleDrawerToggle: () => void;    // required — menu icon click handler
  title: string;                      // required — app bar title
  themeContext: ThemeContextValue;     // required — theme context for ThemeToggle
}
```

### Contract

- All three props are required — TypeScript compilation fails if any are omitted
- No runtime validation is performed
- No default values for any prop

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Stateless UI | Component owns no state | All data arrives via props; no useState/useEffect |
| Atomic Hierarchy | Organism | Composes IconButton (atom), Typography (atom), ThemeToggle (molecule) |
| Theme Sovereignty | All styling via theme tokens | `spacing.md`, `theme.zIndex`, `theme.palette` — no hardcoded values |
| MVVM Separation | Pure View | No data fetching, no business logic, no ViewModel hook |
| Dependency Safety | Minimal imports | Only MUI, ThemeToggle, spacing tokens, ToolbarData |
| Public API Stability | Export via barrel | Re-exported from `organisms/index.ts` |

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|-----------------|--------------|
| `ToolbarComponent` | `src/common/components/organisms/ToolbarComponent.tsx` | App bar header | Render fixed AppBar, responsive menu icon, title, ThemeToggle | MUI (`AppBar`, `Toolbar`, `IconButton`, `Typography`), `@mui/icons-material/Menu`, `ThemeToggle`, `ToolbarProps`, `spacing` |

No ViewModel — component receives fully-resolved props from parent.

## State Model

No ViewModel or domain state. Component is stateless — all data arrives via props.

## Workflow Design

No workflows — component is a pure presentational shell element.

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `handleDrawerToggle` required | TypeScript compilation | TS error: missing required prop | N/A — compile-time |
| `title` required | TypeScript compilation | TS error: missing required prop | N/A — compile-time |
| `themeContext` required | TypeScript compilation | TS error: missing required prop | N/A — compile-time |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|-----------|-------|----------------|---------------|
| Missing theme context | `ThemeProvider` not in ancestor tree | `useTheme()` throws invariant error | Error propagates to parent — no fallback |
| Long title | Title string exceeds container width | MUI `noWrap` truncates with ellipsis | Title visually truncated |
| Missing prop | Consumer omits required prop | TypeScript compilation error | Developer fixes type error |

---

# Non-Functional Requirements

## Performance

- Single-pass render — no async operations
- Minimal re-renders: only when `title`, `handleDrawerToggle`, or `themeContext` reference changes

## Reliability

- Fixed-position layout invariant: uses `position="fixed"` with `zIndex: drawer + 1`
- Responsive menu icon visibility: CSS-based breakpoint at `sm` — no JS breakpoint detection, no CLS on resize

## Maintainability

- Props interface isolated in `ToolbarData.ts` — one source of truth
- No internal state — trivially testable via props assertion
- Single responsibility: app bar header only

---

# Architecture Compliance Review

## Applied Patterns

- **Stateless UI**: Full compliance — component is a pure rendering function
- **Atomic Hierarchy**: Full compliance — organism tier, composes atoms and molecules only
- **Theme Sovereignty**: Full compliance — no hardcoded values
- **MVVM Separation**: Full compliance — pure View, no data layer access
- **Repository Isolation**: N/A — no data access
- **Localization**: N/A — `title` is a prop passed from parent; no hardcoded strings
- **Public API Stability**: Full compliance — exported via barrel with typed interface

## Risks

- `themeContext` prop creates tight coupling to the `ThemeContextValue` shape — any change to that type requires updating all consumers
- No error boundary — invariant errors from `useTheme()` inside `ThemeToggle` propagate to parent uncaught

## Gaps

- No localization support for the title — title is received as a pre-translated string prop, which is compliant but shifts localization responsibility entirely to the parent
- No accessibility aria-label on the ThemeToggle (noted as open question in spec)

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `ToolbarComponent` | `src/common/components/organisms/ToolbarComponent.tsx` | `ToolbarComponent` | `react`, `@mui/material/*`, `@mui/icons-material/Menu`, `ThemeToggle`, `ToolbarData`, `spacing` |
| `ToolbarData` | `src/common/components/organisms/ToolbarData.ts` | `ToolbarProps` | `themeData` |
| Barrel | `src/common/components/organisms/index.ts` | `ToolbarComponent` | re-exports from `ToolbarComponent` |

---

# Final Rule

All user-facing text must be received as a pre-translated prop from the parent — the component itself must not call `useLanguage()`. The `themeContext` prop must always be resolved by the parent via `useTheme()` at the App shell level. Any change to `ToolbarProps` is a breaking API change requiring a major version bump.
