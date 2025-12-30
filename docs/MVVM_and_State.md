# MVVM & State Management

Astra implements the Model-View-ViewModel (MVVM) pattern to separate business logic from UI components. This is achieved through a combination of tailored hooks and strict state definitions.

## Core Concepts

### 1. AppState (`src/common/state/AppState.ts`)

The `AppState` interface is the single source of truth for any asynchronous operation's status. It eliminates the need for managing separate booleans like `isLoading`, `isError`, etc., by grouping them into a predictable object.

#### StateType Enum
```typescript
export enum StateType {
  INIT = 0,      // Initial state, no action taken yet
  LOADING = 1,   // Operation in progress
  COMPLETED = 2, // Operation finished (success or failure)
}
```

#### AppState Interface
```typescript
export interface AppState<T> {
  state: StateType;
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode; // HTTP Status code of the response
  statusMessage: string;  // Readable message or error description
  data: T | null;         // The actual payload if successful
}
```

---

### 2. useDataState Hook (`src/common/hooks/useDataState.ts`)

This hook acts as the **ViewModel**. It connects your View (React Component) to your Model (ApiService/Repository).

#### Usage
```typescript
const [appState, execute, setAppState] = useDataState<DataType>(customInitialState);
```

- **`appState`**: The current `AppState` object.
- **`execute`**: A function to trigger an async operation. It handles the transition from `LOADING` -> `COMPLETED` automatically.
- **`setAppState`**: Manual state setter if needed.

#### Internal Workflow of `execute`
1.  Sets `state` to `StateType.LOADING`.
2.  Awaits the provided `Promise<ServerResponse<T>>`.
3.  On resolution:
    -   Sets `state` to `StateType.COMPLETED`.
    -   Updates `isError`, `isSuccess`, `status`, and `data` based on the response.
4.  On exception (unexpected crash):
    -   Sets `state` to `StateType.COMPLETED`.
    -   Sets fatal error flags (`isError: true`, status 500).

---

## Example Scenario

**Repository (Model)**
```typescript
// repo/UserRepo.ts
const getUsers = () => api.get<User[]>('users');
```

**Component (View)**
```tsx
// components/UserList.tsx
import { useDataState, StateType } from 'astra';

export function UserList() {
  // ViewModel Binding
  const [userState, fetchUsers] = useDataState<User[]>();

  useEffect(() => {
    fetchUsers(UserRepo.getUsers);
  }, []);

  if (userState.state === StateType.LOADING) return <Spinner />;
  if (userState.isError) return <ErrorDisplay msg={userState.statusMessage} />;

  return (
    <div>
      {/* Safe to access data here */}
      {userState.data?.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
}
```

---

### 3. AppStateHandler Component (`src/common/components/wrapper/AppStateHandler.tsx`)

`AppStateHandler` is a higher-order component that standardizes how different state transitions are rendered in the UI. Instead of writing multiple `if` statements in every component, you can delegate that logic to `AppStateHandler`.

#### Props

-   **`appState`**: The `AppState` object from `useDataState`.
-   **`SuccessComponent`**: A React Component to render when the state is `COMPLETED` (success) and data is present. It receives the full `appState` as a prop.
-   **`emptyCondition`** *(Optional)*: A function `(data: T) => boolean`. If it returns `true`, the `EmptyState` component is rendered instead of the `SuccessComponent`.
-   **`errorMessage`** *(Optional)*: Custom error message to display in the `ErrorState` view.

#### Internal Logic

1.  **Loading**: Checks `state === StateType.LOADING`. Renders `<LoadingState />`.
2.  **Error**: Checks `isError` or `status === INTERNET_ERROR`. Renders `<ErrorState />`.
3.  **Success**: Checks `isSuccess` and `data !== null`.
    -   If `emptyCondition(data)` is true -> Renders `<EmptyState />`.
    -   Otherwise -> Renders `<SuccessComponent />`.
4.  **Fallback**: Renders `<EmptyState />` for idle or unhandled states.


---

### 4. Other State Components

Astra provides standalone components for each state, which can be used independently if `AppStateHandler` doesn't fit your needs.

#### EmptyState (`src/common/components/wrapper/EmptyState.tsx`)
Displays a localized "No data found" message.
- **Usage**: `<EmptyState />`

#### ErrorState (`src/common/components/wrapper/ErrorState.tsx`)
Displays an error alert.
- **Props**: `message?: string`
- **Usage**:
  ```tsx
  <ErrorState message="Something went wrong" />
  // or for default localized message
  <ErrorState />
  ```

#### LoadingState (`src/common/components/wrapper/LoadingState.tsx`)
Displays a circular progress indicator with a localized "Loading" message.
- **Usage**: `<LoadingState />`
