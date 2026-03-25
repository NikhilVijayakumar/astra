# State Management

State primitives are implemented in src/common/state/AppState.ts and used by useDataState and AppStateHandler.

## AppState Interface

```ts
export interface AppState<T> {
  state: StateType;
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode;
  statusMessage: string;
  data: T | null;
}
```

This is the shared contract across Repository -> ViewModel -> View.

## StateType Lifecycle

```ts
INIT = 0
LOADING = 1
COMPLETED = 2
```

Transition model:

1. INIT: initial render before execution.
2. LOADING: execute(...) started.
3. COMPLETED: execute(...) finished with success or error.

There is no separate SUCCESS enum value; success/failure is represented by isSuccess/isError and status.

## Status Field Semantics

status uses HttpStatusCode, including network and idle values.

Common interpretations:
- status === IDLE with INIT: untouched state.
- status === INTERNET_ERROR: connectivity problem.
- status >= 400: server/client error returned by repository.

## Data Nullability

data is T | null.

Guidance:
- Treat null as "no successful payload yet".
- For list screens, use emptyCondition in AppStateHandler to handle [] as empty UI.
- Avoid forcing fallback [] at ViewModel boundary unless component contract requires it.

## State Ownership Standard

1. ViewModel owns AppState creation and transitions.
2. View reads AppState and renders via AppStateHandler.
3. Repository never reads or mutates AppState.

## Manual State Updates

When using setAppState directly from useDataState, always spread previous state:

```ts
setAppState((prev) => ({
  ...prev,
  statusMessage: 'Refreshing cache...',
}));
```

## Integration with AppStateHandler

AppStateHandler expects appState and applies this logic:
- LOADING -> LoadingState
- isError or INTERNET_ERROR -> ErrorState
- isSuccess + non-empty -> success view
- otherwise -> EmptyState

## Testing Guidance

For ViewModel tests, verify:
1. Initial state values.
2. LOADING transition before API promise resolves.
3. COMPLETED + success payload mapping.
4. COMPLETED + error mapping.

## Related Docs

- hooks.md
- components/wrapper.md

