# AppStateHandler

Conditional-rendering component that routes UI based on `AppState<T>`. Eliminates boilerplate loading/error/empty branching in feature views.

## Props

```typescript
interface AppStateHandlerProps<T, S extends AppState<T> = AppState<T>> {
  appState: S;
  SuccessComponent?: FC<{ appState: S }>;   // rendered on success
  emptyCondition?: (data: T) => boolean;    // true → show EmptyState
  errorMessage?: string;                    // custom error text
  children?: ReactNode;                     // alternative to SuccessComponent
}
```

## Rendering Priority (fixed order)

```
1. state === LOADING              → <LoadingState />
2. isError || status === 0        → <ErrorState message={errorMessage} />
   (status 0 = INTERNET_ERROR — detects offline)
3. isSuccess && data !== null
   ├── emptyCondition?.(data)     → <EmptyState />
   ├── children provided          → children
   └── SuccessComponent provided  → <SuccessComponent appState={appState} />
4. fallback (INIT, no data)       → <EmptyState />
```

`LoadingState`, `ErrorState`, `EmptyState` come from `prati`.

`children` takes precedence over `SuccessComponent` when both provided.

## Usage

```typescript
// With children
<AppStateHandler appState={userState} emptyCondition={(u) => !u}>
  <UserDetail user={userState.data!} />
</AppStateHandler>

// With SuccessComponent
<AppStateHandler
  appState={listState}
  SuccessComponent={UserList}
  emptyCondition={(data) => data.length === 0}
  errorMessage="Failed to load users."
/>
```

## `SuccessComponent` vs `children`

| | `SuccessComponent` | `children` |
|--|-------------------|------------|
| Receives `appState` as prop | Yes | No — access parent scope |
| Reusable across features | Yes | No |
| Preferred when | Component is defined separately | Inline JSX is simpler |

## Invariants

- INIT state (never fetched) falls through to `<EmptyState />` — intentional; trigger `execute()` to start loading
- `emptyCondition` is only evaluated when `isSuccess && data !== null`
- No retry wiring — wrap in an `ErrorBoundary` or pass an `onRetry` handler to `ErrorState` via `errorMessage`

## See Also

- [state-management.md](./state-management.md) — `AppState<T>` shape
- [use-data-state.md](./use-data-state.md) — hook that produces `appState`
- [mvvm-wiring.md](./mvvm-wiring.md) — full end-to-end pattern
