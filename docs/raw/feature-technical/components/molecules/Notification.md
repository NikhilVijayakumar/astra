# Notification

---

# Feature Summary

A controlled snackbar-style toast notification molecule using MUI Snackbar + Alert composition. The parent owns visibility state via `open` prop and receives `onClose` callbacks on dismiss or auto-hide. Supports severity-based styling (success, info, warning, error) and configurable auto-dismiss duration.

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Role |
|------|------|
| `src/common/components/molecules/Notification.tsx` | Component implementation |
| `src/common/components/molecules/Notification.test.tsx` | Unit tests (vitest, 5 tests, Snackbar/Alert mocked) |
| `src/common/components/molecules/index.ts` | Barrel re-export |

## Public API
```typescript
import { Notification, NotificationProps } from "astra";
import { Notification, NotificationProps } from "@/common/components/molecules/Notification";
import { AlertColor } from "@mui/material";

export interface NotificationProps {
  open: boolean;
  message: string;
  severity?: AlertColor;      // default: 'info'
  onClose: () => void;
  autoHideDuration?: number;   // default: 4000
}
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Molecule (Atomic Design) | Composes two MUI atoms (Snackbar, Alert) into one cohesive notification unit | No imports from organism/template tiers; composes only MUI primitive-level components |
| Stateless UI | Visibility controlled by external `open` prop; no internal visibility state | Strict controlled component — `open` flows in, `onClose` flows out. The component never manages its own visibility |
| Theme Sovereignty | All visual values derive from MUI theme context | `Alert` severity maps to theme palette colors internally; `boxShadow: 3` uses MUI shadow scale; `borderRadius: 1` uses theme shape |
| Localization | No hardcoded user-facing strings | `message` prop is caller-provided (already translated); no internal text |
| Dependency Safety | Minimal surface — `@mui/material` (Snackbar, Alert, AlertColor) only | No additional dependencies beyond core MUI |

---

# Technical Structure

## Views table

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| Notification (root) | `src/common/components/molecules/Notification.tsx` | Renders Snackbar-anchored toast notification | Anchor at bottom-center; wrap Alert inside Snackbar; pass autoHideDuration to Snackbar; fire onClose on Alert close and Snackbar dismiss | `react` (FC), `@mui/material` (Snackbar, Alert, AlertColor) |

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `open` is required | Not provided | TypeScript compile error | N/A — consumer must fix |
| `message` is required | Not provided | TypeScript compile error | N/A — consumer must fix |
| `onClose` is required | Not provided | TypeScript compile error | N/A — consumer must fix |
| `severity` defaults | Not provided | Defaults to `'info'` | Renders with info-styled Alert |
| `autoHideDuration` defaults | Not provided | Defaults to `4000` | Snackbar auto-hides after 4s |
| `autoHideDuration=null` | Explicit null | Snackbar auto-hide disabled | Notification stays visible until `onClose` called manually |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Closed state | `open=false` | Snackbar renders nothing — no DOM content | No visible notification |
| Persistent notification | `autoHideDuration=null` | Snackbar's internal timer disabled | User must manually dismiss — `onClose` callback expected |
| Thrown onClose | `onClose` callback throws | Error propagates to parent — no error boundary in component | Parent's error boundary catches (if any) |
| Rapid open/close toggles | Consumer toggles `open` frequently | Snackbar transition may flicker | UX concern — no debounce/queue implemented |

---

# Non-Functional Requirements
## Performance
- Single render pass — no effects, no internal useState
- Snackbar handles animation transitions internally via MUI

## Reliability
- Controlled pattern ensures predictable behavior
- Mock-safe in tests — Snackbar and Alert are testable via mocks
- Deterministic rendering for given props

## Maintainability
- ~39 lines, single file
- Default values at destructuring (`severity = 'info'`, `autoHideDuration = 4000`)
- Only one layout anchor position (bottom-center) — no configurability to maintain

---

# Architecture Compliance Review
## Applied Patterns
- **Controlled component**: Strict unidirectional data flow — `open` and `onClose` form the closed loop
- **MUI composition**: Two MUI components (Snackbar + Alert) composed into one molecule
- **Destructured defaults**: All optional props have explicit defaults at the destructuring site — no fallback logic in render
- **Molecule tier compliance**: No data fetching, no business logic, no organism/template imports

## Risks
- No support for notification queuing — multiple rapid notifications overwrite each other
- Single anchor position cannot be customized — hardcoded `anchorOrigin`

## Gaps
- No gap identified — component is fully compliant with all invariants

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| Notification | `src/common/components/molecules/Notification.tsx` | `NotificationProps` (interface), `Notification` (component) | `react`, `@mui/material` |
| molecules index | `src/common/components/molecules/index.ts` | Re-exports `Notification` | `./Notification` |

---

# Final Rule

Strict controlled component. Parent owns visibility. No internal state. Single instance only — notification queue is consumer responsibility.
