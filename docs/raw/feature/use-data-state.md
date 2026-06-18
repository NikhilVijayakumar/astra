# useDataState

React hook that manages `AppState<T>` transitions for async data operations. The ViewModel primitive — keeps UI components stateless by owning all async state.

## Signature

```typescript
const [appState, execute, setAppState] = useDataState<T>(
  customInitialState?: Partial<AppState<T>>,
  options?: { unexpectedErrorMessage?: string },
)
```

- `appState` — current `AppState<T>`, drives all rendering
- `execute(apiCall)` — wraps an async call, manages state transitions automatically
- `setAppState` — direct setter for manual overrides (optimistic updates, resets)

## What `execute` does

```
1. setAppState({ state: LOADING })
2. await apiCall()
3. success  → setAppState({ state: COMPLETED, isSuccess: true, data: response.data, ... })
   error    → setAppState({ state: COMPLETED, isError: true, status: response.status, ... })
   throw    → setAppState({ state: COMPLETED, isError: true, status: 500, statusMessage: options.unexpectedErrorMessage ?? '' })
4. skips update if component unmounted during request (mountedRef guard)
```

LOADING preserves `prev.data` — supports stale-while-reloading UX.

## Basic Usage

```typescript
export function useUserViewModel(id: string) {
  const [userState, fetchUser] = useDataState<User>();

  useEffect(() => {
    fetchUser(() => userRepo.getUser(id));
  }, [id]);

  return { userState };
}
```

## Custom Initial State

```typescript
// Start with partial data already available (e.g. rehydrated from cache)
const [state, execute] = useDataState<User>({ data: cachedUser });
```

## Localization

Pass `options.unexpectedErrorMessage` from the localization hook to satisfy the localization invariant:

```typescript
const { literal } = useLanguage();
const [state, execute] = useDataState<User>(
  {},
  { unexpectedErrorMessage: literal['common.errors.unexpected'] }
);
```

## Invariants

- `apiCall` must return `Promise<ServerResponse<T>>` — non-conforming returns trigger the exception catch branch
- Concurrent `execute()` calls race — last one wins; debounce or abort if ordering matters
- `setAppState` is a React dispatch — avoid calling it after unmount (the mountedRef guard inside `execute` covers the async path; direct calls do not have this protection)

## See Also

- [state-management.md](./state-management.md) — `AppState<T>` shape and `StateType` enum
- [repository.md](./repository.md) — `ServerResponse<T>` that `execute` consumes
- [app-state-handler.md](./app-state-handler.md) — component that renders UI from `appState`
- [mvvm-wiring.md](./mvvm-wiring.md) — full Repository → ViewModel → View pattern
