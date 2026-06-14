# AppStateHandler Component

A conditional UI router that renders Loading, Error, Empty, or Success states.

## Props

| Prop               | Type                   | Required | Description                     |
| ------------------ | ---------------------- | -------- | ------------------------------- |
| `appState`         | `AppState<T>`          | Yes      | State object from useDataState  |
| `SuccessComponent` | `FC<{ appState: S }>`  | No       | Component to render on success  |
| `emptyCondition`   | `(data: T) => boolean` | No       | Function to detect empty data   |
| `errorMessage`     | `string`               | No       | Custom error message            |
| `children`         | `ReactNode`            | No       | Alternative to SuccessComponent |

## State Flow

AppStateHandler evaluates `appState` in this order:

1. `state === LOADING` → renders `<LoadingState />`
2. `isError || status === INTERNET_ERROR` → renders `<ErrorState />`
3. `isSuccess && data !== null`:
   - if `emptyCondition(data)` is true → renders `<EmptyState />`
   - else if `children` provided → renders children
   - else if `SuccessComponent` provided → renders SuccessComponent
4. fallback → renders `<EmptyState />`

## Usage

### Children Pattern (Recommended)

```tsx
const [userState, loadUsers] = useDataState<User[]>();

return (
  <AppStateHandler
    appState={userState}
    emptyCondition={(data) => data.length === 0}
    errorMessage="Failed to load users"
  >
    <UserList users={userState.data ?? []} onReload={loadUsers} />
  </AppStateHandler>
);
```

### Alternate SuccessComponent Pattern

```tsx
<AppStateHandler
  appState={userState}
  SuccessComponent={({ appState }) => (
    <UserList users={appState.data ?? []} onReload={loadUsers} />
  )}
/>
```

## Non-Responsibilities

- Does not fetch or manage data — state must be provided via `appState` prop
- Does not handle business logic or side effects
- Does not persist state across sessions
- Does not handle routing or navigation

## Standards

1. Use AppStateHandler at feature container boundaries.
2. Keep emptyCondition feature-specific and explicit.
3. Prefer children pattern for readability.
4. Do not duplicate loading/error/empty conditional trees in each container.

## Source

`src/common/components/organisms/AppStateHandler.tsx`
