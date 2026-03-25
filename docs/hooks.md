# Hooks

## useDataState

Source: src/common/hooks/useDataState.ts

useDataState is Astra's standard async state orchestration hook.

### Signature

```ts
useDataState<T>(customInitialState?: Partial<AppState<T>>) =>
  readonly [
    appState: AppState<T>,
    execute: (apiCall: () => Promise<ServerResponse<T>>) => Promise<void>,
    setAppState: React.Dispatch<React.SetStateAction<AppState<T>>>
  ]
```

### Internal Behavior

execute(...) performs:

1. state -> LOADING
2. await apiCall()
3. map ServerResponse fields to AppState
4. on thrown error, set INTERNAL_SERVER_ERROR and generic message

### Basic Usage

```ts
const [usersState, executeUsers, setUsersState] = useDataState<User[]>();

const loadUsers = () => executeUsers(() => usersRepo.fetchUsers());
```

### Custom Initial State

```ts
const [state] = useDataState<User[]>({
  statusMessage: 'Preparing user list...',
});
```

## ViewModel Composition Pattern

Use one useDataState per independent async concern.

```ts
const [listState, executeList] = useDataState<User[]>();
const [detailState, executeDetail] = useDataState<User>();
const [deleteState, executeDelete] = useDataState<boolean>();
```

Benefits:
- clear loading indicators per action
- isolated errors
- predictable orchestration

## Correct Orchestration Pattern

Because state updates are asynchronous, branch using API response when sequencing actions.

Preferred:

```ts
const deleteUser = async (id: string) => {
  const response = await usersRepo.deleteUser(id);
  if (response.isSuccess) {
    await executeList(() => usersRepo.fetchUsers());
  }
};
```

Alternative with execute + state observation is possible, but direct response checks are usually clearer.

## Manual setAppState Usage

Use setAppState for local-only metadata transitions, not to re-implement execute.

```ts
setAppState((prev) => ({
  ...prev,
  statusMessage: 'Applying local filter...',
}));
```

## Hooks Standards

1. Keep useDataState in ViewModel hooks, not view components.
2. Repositories return ServerResponse<T> so execute can map reliably.
3. Expose stable ViewModel API:
   - state objects
   - computed booleans
   - handler functions
4. Avoid coupling one useDataState to multiple unrelated async workflows.

## Common Mistakes

- Calling execute in presentational components.
- Returning raw setAppState to view layer unnecessarily.
- Checking stale state immediately after execute for branching.

## Related Docs

- state.md
- MVVM_Clean_Architecture.md
- components/wrapper.md

