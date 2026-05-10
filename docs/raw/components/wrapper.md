# Wrapper Components

Source:
- src/common/components/wrapper/AppStateHandler.tsx
- src/common/components/wrapper/LoadingState.tsx
- src/common/components/wrapper/ErrorState.tsx
- src/common/components/wrapper/EmptyState.tsx

## AppStateHandler

AppStateHandler is Astra's standard state-rendering controller for feature screens.

### Generic Contract

```ts
AppStateHandlerProps<T, S extends AppState<T> = AppState<T>> {
    appState: S;
    SuccessComponent?: FC<{ appState: S }>;
    emptyCondition?: (data: T) => boolean;
    errorMessage?: string;
    children?: ReactNode;
}
```

### Runtime Logic

AppStateHandler evaluates appState in this order:

1. state === LOADING -> LoadingState
2. isError OR status === INTERNET_ERROR -> ErrorState
3. isSuccess && data !== null:
     - if emptyCondition(data) is true -> EmptyState
     - else if children provided -> render children
     - else if SuccessComponent provided -> render SuccessComponent
4. fallback -> EmptyState

### Usage Pattern (Recommended)

```tsx
<AppStateHandler
    appState={usersState}
    emptyCondition={(data) => data.length === 0}
    errorMessage={literal.unknown_message}
>
    <UsersList users={usersState.data ?? []} onReload={loadUsers} />
</AppStateHandler>
```

### Alternate SuccessComponent Pattern

```tsx
<AppStateHandler
    appState={usersState}
    SuccessComponent={({ appState }) => (
        <UsersList users={appState.data ?? []} onReload={loadUsers} />
    )}
/>
```

## Subcomponents

### LoadingState
- Used for asynchronous loading feedback.
- Controlled by AppStateHandler during LOADING.

### ErrorState
- Displays an error message.
- Uses passed errorMessage or localized fallback behavior from implementation.

### EmptyState
- Displays no-data UI.
- Used for empty success datasets and fallback states.

## Standards

1. Use AppStateHandler at feature container boundaries.
2. Keep emptyCondition feature-specific and explicit.
3. Prefer children pattern for readability.
4. Do not duplicate loading/error/empty conditional trees in each container.

## Related Docs

- ../state.md
- ../hooks.md
- ../MVVM_Clean_Architecture.md

