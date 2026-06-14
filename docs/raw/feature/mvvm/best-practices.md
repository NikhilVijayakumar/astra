# MVVM Best Practices

## Overview

This guide covers recommended practices for implementing MVVM in Astra, including patterns to follow, anti-patterns to avoid, common mistakes, and testing strategies. Adhering to these conventions ensures consistency across feature implementations.

## Do

✅ **Use for async data flows** — API calls, file loading, computations  
✅ **Keep ViewModel in feature folders** — Co-locate with components  
✅ **Use AppStateHandler for consistent UI** — Standardizes loading/error states  
✅ **Type your state** — `AppState<User[]>` not `AppState<any>`  
✅ **Extract custom hooks** — For reusable state logic

## Don't

❌ **Don't put business logic in components** — Use ViewModel hooks  
❌ **Don't skip error states** — Always handle `isError`  
❌ **Don't mutate state directly** — Use `setAppState`  
❌ **Don't couple to specific components** — Keep ViewModel generic

## Common Pitfalls

1. **Forgetting `execute()` call** — State stays at INIT
2. **Not checking `data !== null`** — Success state can have null data
3. **Missing error boundaries** — Unhandled errors crash the app

## Testing

Test the ViewModel hook:

```typescript
const { result } = renderHook(() => useDataState<User>());
await act(async () => {
  await result.current[1](mockApiCall);
});
expect(result.current[0].isSuccess).toBe(true);
```

## Responsibilities

- Enforce consistent use of `useDataState`, `AppStateHandler`, and `AppState` across all features
- Provide patterns for type-safe state management
- Standardize error and loading state handling across the codebase

## Non-Responsibilities

- Does not prescribe a specific project folder structure beyond feature co-location
- Does not cover server-state caching strategies (handled by repositories)
- Does not dictate form state management or local UI state beyond async operations

## Edge Cases

- **Forgetting `execute()`:** The `execute` function must be called to transition from INIT to LOADING state — omitting it leaves the component stuck in the initial state
- **Null success data:** `AppState<T>` can enter COMPLETED state with `data === null` — always check `data !== null` before accessing
- **Missing error boundaries:** ViewModel hooks that throw uncaught errors crash the component tree — wrap with error boundaries at the organism or page level
- **Stale state on unmount:** Calling `execute` after component unmount triggers a React state update warning — hook internals handle this via cleanup, but consumers should not rely on post-unmount callbacks
- **State type mismatches:** Using `AppState<TypeA>` where `AppState<TypeB>` is expected causes no TypeScript error if the types share the same shape — use branded types for strict differentiation

## Core Concepts

- **Consistency** — Unified patterns reduce cognitive overhead and ensure predictable behavior across features
- **Type safety** — Generic typing of AppState prevents runtime type errors
- **Testability** — ViewModel hooks are pure logic that can be unit tested without rendering UI
- **Co-location** — ViewModels live in feature folders alongside their consuming components

## States

- **Correct implementation** — ViewModel manages state, View renders, Model provides data
- **Anti-pattern violation** — Business logic leaks into View, or state management bypasses `useDataState`
- **Test scenario** — ViewModel hook tested in isolation; state transitions verified without UI

## Inputs/Outputs

- **Inputs:** Development decisions (folder structure, hook extraction, error handling strategy)
- **Outputs:** Consistent code patterns across features; type-safe `AppState<T>` usage; standardized error/loading UI via `AppStateHandler`

## Error Conditions

- **Forgetting `execute()`** — Component stays in INIT state forever; no data loaded, no error shown
- **Not checking `data !== null`** — `isSuccess = true` with `data = null` leads to `Cannot read properties of null` errors
- **Missing error boundaries** — Unhandled exceptions in ViewModel hooks crash the entire component tree
- **State type mismatches** — `AppState<TypeA>` vs `AppState<TypeB>` with same shape causes silent logic errors

## Future Enhancements

- Automated lint rules to enforce MVVM patterns (no data fetching in components, required error handling)
- Scaffolding CLI that generates ViewModel + test boilerplate for new features
- Performance instrumentation to track re-render causes in ViewModel consumers
- Shared ViewModel library for cross-feature state coordination

## Open Questions

- Should best-practices enforcement move from documentation to automated linting?
- How should MVVM handle form state — separate hook or within useDataState?
- Is there a migration strategy for legacy components that violate MVVM separation?
