# Overview

This document codifies the recommended practices, anti-patterns, testing strategies, and common pitfalls for implementing MVVM in Astra. It is the companion to the MVVM pattern specification, translating the architectural abstractions (`useDataState`, `AppState`, `AppStateHandler`) into actionable development conventions.

---

# Feature Summary

| Attribute | Value |
|-----------|-------|
| **Module** | MVVM — Best Practices |
| **Status** | Implemented (conventions over code) |
| **Primary Concern** | Enforce consistent MVVM usage across all feature implementations |
| **Consumers** | All feature developers |
| **Localization** | N/A — document only |

---

# Implementation Reference

## Status

Implemented — all referenced APIs exist; conventions are documented for manual enforcement.

## Source Files

| File | Purpose |
|------|---------|
| `src/common/hooks/useDataState.ts` | ViewModel hook — core async state machine |
| `src/common/state/AppState.ts` | `AppState<T>` interface and `StateType` enum |
| `src/common/components/organisms/AppStateHandler.tsx` | Conditional rendering component |
| `src/common/repo/ServerResponse.ts` | Response type used by `execute()` |
| `src/common/repo/HttpStatusCode.ts` | Status codes used in `AppState` |

## Public API

Same as `pattern.md` — the best practices document does not define additional exports.

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| MVVM | ✅ Core | Best practices enforce MVVM separation with concrete dos/don'ts |
| Stateless UI | ✅ Enforced | Rule: "Don't put business logic in components" |
| Public API Stability | ✅ Advised | Always use `AppState<T>` not `AppState<any>` |
| Feature Structure | ✅ Advised | ViewModels co-located in feature folders |

---

# Technical Structure

## Rules Table — Do

| Rule | Rationale | Code Example |
|------|-----------|--------------|
| Use for async data flows | `useDataState` was designed for API calls, file loading, async computations | `execute(() => api.fetchUsers())` |
| Keep ViewModel in feature folders | Co-location with consuming components prevents cross-feature coupling | `features/users/hooks/useUsers.ts` |
| Use `AppStateHandler` for consistent UI | Standardizes loading/error/empty/success across all features | `<AppStateHandler appState={...}>` |
| Type your state generically | `AppState<User[]>` prevents accessing wrong shape | `useDataState<User[]>()` |
| Extract custom hooks | Reuse state logic without duplicating `useDataState` calls | Wrap `useDataState` in `useUsersViewModel()` |
| Pass `unexpectedErrorMessage` from `useLanguage()` | Prevents hardcoded English fallback on exception — required by Localization invariant | `useDataState<T>({}, { unexpectedErrorMessage: literal['common.errors.unexpected'] })` |
| Use LOADING's `prev.data` for stale-while-reloading | LOADING preserves previous data — display stale content with a spinner overlay instead of blanking the view | `data={appState.data ?? []}` while `state === LOADING` |

## Rules Table — Don't

| Anti-pattern | Why | Instead |
|--------------|-----|---------|
| Business logic in components | Violates MVVM; untestable | ViewModel hook |
| Skip error states | Users see blank UI on failure | Always handle `isError` |
| Mutate state directly | Bypasses state machine; inconsistent UI | Use `setAppState` or `execute` |
| Couple ViewModel to specific components | Reduces reusability | Return plain state + actions |

## Common Pitfalls

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| Forgetting `execute()` call | State stays at INIT forever; no data loaded | Call `execute()` in `useEffect` or event handler |
| Not checking `data !== null` | `Cannot read properties of null` on success path | Always guard: `if (data !== null) { ... }` |
| Missing error boundaries | Unhandled ViewModel exceptions crash entire tree | Wrap page with `<ErrorBoundary>` |
| Calling `execute()` on already-LOADING state | Duplicate requests, flickering UI | Guard with `if (appState.state !== StateType.LOADING)` |
| `AppState<TypeA>` where `AppState<TypeB>` expected | Silent logic errors if shapes are similar | Use branded types for strict differentiation |
| Blanking view on re-fetch | LOADING preserves `prev.data` — replacing content with spinner causes content flicker | Show stale data with overlay spinner: `appState.state === LOADING && appState.data !== null` |
| Omitting `unexpectedErrorMessage` | Exception catch produces empty `statusMessage` that `ErrorState` renders without text | Always pass `literal['common.errors.unexpected']` as `options.unexpectedErrorMessage` |
| Skipping retry guidance | `ErrorState` shows error but user cannot recover | Expose `execute` ref from ViewModel; pass as `onRetry` callback to error UI |

## Testing Strategy

| Test Target | Approach | Example |
|-------------|----------|---------|
| ViewModel hook (isolated) | `renderHook` + mock API | `const { result } = renderHook(() => useDataState<User>())` |
| State transitions | Call `execute` in `act`, assert state changes | `expect(result.current[0].isSuccess).toBe(true)` |
| Error handling | Mock API to reject | `expect(result.current[0].isError).toBe(true)` |
| AppStateHandler rendering | Pass different AppState values, assert rendered output | `render(<AppStateHandler appState={...}>...</>)` |

## Constructing Test AppState Values

```ts
// Success state
const successState: AppState<User[]> = {
  state: StateType.COMPLETED,
  isError: false,
  isSuccess: true,
  status: HttpStatusCode.SUCCESS,
  statusMessage: '',
  data: [{ id: '1', name: 'Test' }],
};

// Error state
const errorState: AppState<User[]> = {
  state: StateType.COMPLETED,
  isError: true,
  isSuccess: false,
  status: HttpStatusCode.INTERNAL_SERVER_ERROR,
  statusMessage: 'Failed to load',
  data: null,
};

// Loading state
const loadingState: AppState<User[]> = {
  state: StateType.LOADING,
  isError: false,
  isSuccess: false,
  status: HttpStatusCode.IDLE,
  statusMessage: '',
  data: null,
};
```

---

# Error Handling

| Violation | Detection | Severity |
|-----------|-----------|----------|
| Business logic in component | Code review, lint rules | High |
| `execute()` never called | Static analysis (unused variable) | High |
| `data` accessed without null check | Runtime `TypeError` | Critical |
| No error state handling | User sees infinite loading or blank UI | High |
| State type mismatch | Silent logic error at runtime | Medium |
| ViewModel calls imported inside component | Code review | High |

---

# Non-Functional Requirements

| Requirement | Target | Enforcement |
|-------------|--------|-------------|
| Consistency | Uniform MVVM pattern across all features | Code review |
| Testability | ViewModels testable without UI rendering | Architectural |
| Type safety | Generic `T` parameter on `AppState` | TypeScript |
| Co-location | ViewModel in `hooks/` next to feature | Feature structure |
| Reusability | ViewModels return plain interfaces | Code review |

---

# Architecture Compliance Review

## Applied Patterns

| Invariant | Compliance | Evidence |
|-----------|------------|----------|
| MVVM | ✅ Full | Clear separation: ViewModel (hooks), Model (state), View (components) |
| Stateless UI | ✅ Full | Rule: "Don't put business logic in components" |
| Public API Stability | ✅ Full | All APIs exported through `src/lib.ts` |
| Dependency Safety | ✅ Full | Zero additional dependencies beyond React |
| Feature Structure | ✅ Full | ViewModel co-located in feature, components in `view/`, types in `model/` |

## Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| No automated lint enforcement | Conventions rely on manual code review | Future enhancement: custom ESLint rules |
| No CLI scaffolding | Boilerplate inconsistency across features | Future enhancement: generator CLI |
| Cross-feature ViewModel coupling | Feature A imports ViewModel from feature B | Code review gate |

## Gaps

- No lint rules to automatically detect MVVM violations
- No scaffolding tool to generate ViewModel + test boilerplate
- No performance instrumentation for ViewModel re-render tracking
- No shared ViewModel library for cross-feature state coordination
- No guidance for form state management within MVVM

---

# Module Map

```
Best Practices (document)
       │
       ├── References: useDataState.ts, AppState.ts, AppStateHandler.tsx
       │
       ├── Enforced via: code review, manual lint
       │
       └── Applied in: every feature module at src/features/*/
             ├── hooks/use<Feature>.ts
             ├── model/<feature>.types.ts
             ├── repo/<feature>Api.ts
             └── view/
                   ├── components/<Name>Component.tsx
                   └── pages/<Feature>Page.tsx
```

---

# Final Rule

Every feature that performs async operations must follow the MVVM pattern exactly: `useDataState` in a ViewModel hook (never in a component), `AppState<T>` with a typed generic parameter, and `AppStateHandler` for conditional rendering. Business logic must live in the ViewModel or a domain utility — never in a component. Every async operation must handle all four states: INIT, LOADING, ERROR, and SUCCESS (with empty-data check). Violations are caught through code review until automated lint rules are introduced.

## Authorization

**Visibility:** Public — stateless Astra library primitive. No authentication or role requirement enforced by Astra. Authorization enforcement is consumer-managed at the application layer.
