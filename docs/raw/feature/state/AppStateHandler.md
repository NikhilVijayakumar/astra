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

## Responsibilities

- Render the correct UI state (Loading, Error, Empty, or Success) based on `appState` transitions
- Provide a declarative boundary that eliminates repetitive loading/error/empty conditionals across feature containers
- Support both `children` and `SuccessComponent` patterns for flexible content rendering

## Non-Responsibilities

- Does not fetch or manage data — state must be provided via `appState` prop
- Does not handle business logic or side effects
- Does not persist state across sessions
- Does not handle routing or navigation

## Core Concepts

- **State routing**: Evaluates `appState` in a fixed priority order (LOADING → ERROR → EMPTY → SUCCESS) to guarantee deterministic rendering
- **Empty detection**: Delegates empty-state logic to the consumer via `emptyCondition`, keeping the component generic
- **Children vs. Component**: `children` is the recommended pattern for readability; `SuccessComponent` is available when the success view needs explicit `appState` access

## Edge Cases

- All states false (INIT): falls through to `<EmptyState />` rather than showing a blank screen
- `emptyCondition` not provided when data is empty: defaults to showing SuccessComponent/children with null/empty data
- Both `children` and `SuccessComponent` provided: `children` takes precedence (documented behavior)

## Standards

1. Use AppStateHandler at feature container boundaries.
2. Keep emptyCondition feature-specific and explicit.
3. Prefer children pattern for readability.
4. Do not duplicate loading/error/empty conditional trees in each container.

## States

- **Loading**: `appState.state === LOADING` → renders `<LoadingState />`
- **Error**: `appState.isError === true` or `status === INTERNET_ERROR` → renders `<ErrorState />`
- **Empty**: `appState.isSuccess && emptyCondition(data)` → renders `<EmptyState />`
- **Success**: `appState.isSuccess && data !== null` and not empty → renders children or `SuccessComponent`
- **Init/Fallback**: All other conditions → renders `<EmptyState />`

## Inputs/Outputs

| Input | Output |
|-------|--------|
| `appState: AppState<T>` | Rendered UI: LoadingState, ErrorState, EmptyState, or Success content |
| `SuccessComponent?: FC` | Optional success view component |
| `emptyCondition?: (data) => boolean` | Determines whether data is empty |
| `errorMessage?: string` | Overrides default error display message |
| `children?: ReactNode` | Success content rendered when not empty |

## Error Conditions

- **Missing error message**: Falls back to `appState.statusMessage` if `errorMessage` prop is not provided
- **Invalid `emptyCondition`**: Returns `false` by default, so empty data renders as success with `null` content
- **Both `children` and `SuccessComponent`**: `children` takes precedence — config ambiguity may confuse maintainers
- **All flags false (INIT)**: Falls through to `<EmptyState />` instead of showing a blank screen

## Future Enhancements

- Optional retry button in the ErrorState component for one-click reload
- Customizable loading skeleton via a `LoadingComponent` prop
- Animated state transitions between Loading → Success for smoother UX
- Support for `ErrorBoundary`-style fallback rendering when Component throws

## Open Questions

- Should `AppStateHandler` support fallback chains (e.g., stale-while-revalidate)?
- How should multiple simultaneous errors be displayed?
- Is the INIT → Empty fallback correct, or should INIT render nothing at all?

## Source

`src/common/components/organisms/AppStateHandler.tsx`
