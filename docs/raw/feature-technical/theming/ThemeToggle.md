# Overview

`ThemeToggle` is a presentational React component — an MUI `IconButton` that visually indicates and toggles between light and dark theme modes. It is stateless: it receives the full theme context as a required prop and delegates theme switching to the parent.

---

# Feature Summary

| Attribute | Value |
|-----------|-------|
| **Module** | Theming — ThemeToggle Component |
| **Status** | Implemented |
| **Primary Concern** | Render an accessible icon button that toggles theme mode |
| **Consumers** | Any toolbar, header, or settings panel that needs light/dark switching |
| **Localization** | `aria-label` is hardcoded English ("Toggle theme") — not yet localized |

---

# Implementation Reference

## Status

Implemented — single production file at `src/common/theme/ThemeToggle.tsx`.

## Source Files

| File | Purpose |
|------|---------|
| `src/common/theme/ThemeToggle.tsx` | Component implementation |
| `src/common/theme/themeData.ts` | `ThemeContextValue` type consumed as a prop |

## Public API

Exported from `src/common/theme/index.ts` → `src/common/index.ts` → `src/lib.ts`:

| Export | Kind | Description |
|--------|------|-------------|
| `ThemeToggle` | `FC<{ themeContext: ThemeContextValue }>` | Icon button toggling light/dark mode |

### Import Contract

```tsx
import { ThemeToggle } from 'astra';
// or
import { ThemeToggle } from 'astra/common/theme';
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `themeContext` | `ThemeContextValue` | Yes | — | Context object containing `darkMode` and `toggleDarkMode` |

### Dependencies (external packages)

| Package | Import | Usage |
|---------|--------|-------|
| `@mui/material` | `IconButton` | Circular icon-only button wrapper |
| `@mui/icons-material` | `DarkModeRounded` | Moon icon shown when `darkMode === true` |
| `@mui/icons-material` | `LightModeRounded` | Sun icon shown when `darkMode === false` |

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Stateless UI | ✅ Fully compliant | Component receives all data via props; manages zero state; delegates to `toggleDarkMode` callback |
| Theme Sovereignty | ✅ Compliant | No hardcoded colors or styling; uses MUI `IconButton` which resolves from theme |
| Public API Stability | ✅ Compliant | Exported through `src/lib.ts`; props interface is stable |
| Dependency Safety | ✅ Compliant | Three MUI sub-imports, all tree-shakeable |
| MVVM | N/A | Pure View component — no data fetching, no ViewModel |

---

# Technical Structure

## View

| Name | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| `ThemeToggle` | `src/common/theme/ThemeToggle.tsx` | Render light/dark toggle icon button | Show correct icon per `darkMode`; call `toggleDarkMode()` on click; set `aria-label` | `themeData.ts` (`ThemeContextValue`), MUI `IconButton`, MUI icons `DarkModeRounded`, `LightModeRounded` |

## Data Flow

```
Parent component calls useTheme()
  → obtains { darkMode, toggleDarkMode } as ThemeContextValue
  → passes to <ThemeToggle themeContext={...} />
    → ThemeToggle reads darkMode to select icon
    → On click: calls themeContext.toggleDarkMode()
      → ThemeProvider updates internal state → re-render
```

---

# Error Handling

| Condition | Behavior | Severity |
|-----------|----------|----------|
| Missing `themeContext` prop | TypeScript compile-time error | Compile-time (caught) |
| `themeContext` is structurally valid but wrong values | Component renders incorrect icon | UI logic error (caller responsibility) |
| `toggleDarkMode` is undefined | Runtime error on click | Logic error (caller responsibility) |

---

# Non-Functional Requirements

| Requirement | Target | Enforcement |
|-------------|--------|-------------|
| Accessibility | `aria-label="Toggle theme"` present | Manual review |
| Type safety | Props typed via `ThemeContextValue` | TypeScript strict |
| SSR compatibility | Client-only render; no hydration mismatch | Runtime |
| Performance | No state, no effects — O(1) render | Architectural |
| Bundle size | ~0.5KB gzipped (depends on icon imports) | Tree-shakeable MUI icons |

---

# Architecture Compliance Review

## Applied Patterns

| Invariant | Compliance | Evidence |
|-----------|------------|----------|
| Stateless UI | ✅ Full | Zero local state; all data via `themeContext` prop |
| Theme Sovereignty | ✅ Full | No hardcoded colors or spacing; uses MUI `IconButton` |
| Public API Stability | ✅ Full | Exported through canonical barrel files |
| Dependency Safety | ✅ Full | All imports from `@mui/*` (peer dependencies) |

## Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Hardcoded `aria-label` | Not localized for i18n | Future enhancement: integrate `useLanguage()` |
| No icon transition animation | Abrupt visual switch | Future enhancement: add rotation/fade animation |
| Fixed icon size | No `size` prop for customization | Future enhancement: add optional size prop |

## Gaps

- `aria-label` is hardcoded to English string — should use the localization system
- No animation between icon transitions
- No keyboard shortcut support (`Ctrl+Shift+T`)
- No tooltip showing current/next mode

---

# Module Map

```
themeData.ts (ThemeContextValue type)
       │
       ▼
ThemeToggle.tsx ──→ src/common/theme/index.ts ──→ src/common/index.ts ──→ src/lib.ts
       │
       ▼
  @mui/material/IconButton
  @mui/icons-material/DarkModeRounded
  @mui/icons-material/LightModeRounded
```

**Dependencies:** `ThemeToggle.tsx` imports from `themeData.ts` (internal) and three MUI packages (external). Zero other Astra modules.

---

# Final Rule

`ThemeToggle` must remain a pure presentational component. It must never manage theme state, access `localStorage`, or contain business logic. All theme context must arrive via the `themeContext` prop. The component must always provide an `aria-label` for accessibility.
