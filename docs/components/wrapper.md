# Wrapper Components

Wrapper components in `astra` are designed to simplify common UI patterns, such as handling different states of a data view (loading, error, empty, success).

## AppStateHandler

The `AppStateHandler` is a generic controller component that renders specific UI based on the current `AppState`. It eliminates repetitive conditional logic in your components.

### Logic Flow

1.  **Loading**: If `state === StateType.LOADING`, renders `<LoadingState />`.
2.  **Error**: If `isError` is true or status is `INTERNET_ERROR`, renders `<ErrorState />`.
3.  **Success**: If `isSuccess` is true and data exists:
    -   It checks the `emptyCondition` (if provided). If true, renders `<EmptyState />`.
    -   Otherwise, renders the provided `SuccessComponent`.
4.  **Fallback**: Renders `<EmptyState />` for idle or unhandled states.

### Props

`AppStateHandler` is a generic component `<T, S extends AppState<T>>` accepting:

-   `appState`: `S` - The state object to inspect.
-   `SuccessComponent`: `FC<{ appState: S }>` (Optional) - The component to render when data is successfully loaded.
-   `children`: `ReactNode` (Optional) - Alternative to `SuccessComponent`. Content to render on success.
-   `emptyCondition`: `(data: T) => boolean` (Optional) - Predicate to determine if the data should be considered "empty" (e.g., empty array).
-   `errorMessage`: `string` (Optional) - Custom error message.

### Usage

### Usage

#### Using Children (Recommended)

```tsx
<AppStateHandler 
    appState={state}
    emptyCondition={(data) => data.length === 0}
>
    <MySuccessView data={state.data} />
</AppStateHandler>
```

#### Using SuccessComponent (Legacy)

```tsx
<AppStateHandler
    appState={state}
    SuccessComponent={MySuccessView}
/>
```


## State Components

These are simple display components used internally by `AppStateHandler`, but can also be used directly.

-   **`LoadingState`**: Renders a centered circular loading spinner.
-   **`ErrorState`**: Renders an error message with an optional retry button (if extended).
-   **`EmptyState`**: Renders a placeholder indicating no data is available.
