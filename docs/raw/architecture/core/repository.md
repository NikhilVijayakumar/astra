# Architecture: Repository Pattern

Astra provides a **Repository pattern** for API and data access, built on `ApiService` (Axios wrapper) with typed response contracts.

## Repository Structure

```
Repository Pattern
├── ApiService        # HTTP client wrapper
├── ServerResponse    # Response wrapper
├── HttpStatusCode    # Status enum
└── Repository        # Feature-specific repos
```

## ApiService Setup

Astra's `ApiService` wraps Axios with error handling and localization:

```typescript
import { ApiService, ServerResponse, HttpStatusCode } from 'astra';

const api = new ApiService('https://api.example.com', {
  internal_server_error: 'Something went wrong.',
  unauthorized: 'Please sign in.',
});
```

## ServerResponse Pattern

All API calls return `ServerResponse<T>`:

```typescript
interface ServerResponse<T> {
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode;
  statusMessage: string;
  data?: T;
}

// Success:
ServerResponse.success({ status: 200, statusMessage: 'OK', data: items });

// Error:
ServerResponse.error({ status: 500, statusMessage: 'Failed to load' });
```

## Repository Pattern

### Structure

Within the canonical feature structure (see [Feature Structure](feature-structure.md)):

```
src/
└── features/
    └── [feature]/
        ├── model/       # Domain types
        │   └── <feature>.types.ts
        └── repo/        # Feature-specific repos
            └── <feature>Api.ts
```

### Repository Example

```typescript
import { ApiService, ServerResponse } from 'astra';

const api = new ApiService('https://api.example.com', {});

export const modelApi = {
  getAll: async (): Promise<ServerResponse<Model[]>> => {
    return api.get<Model[]>('/models');
  },
};
```

## Using Repository with useDataState

```typescript
import { useDataState, StateType } from 'astra';
import { modelApi } from '../repo/modelApi';

function ListContainer() {
  const [appState, execute] = useDataState<Model[]>();

  useEffect(() => {
    execute(() => modelApi.getAll());
  }, []);

  if (appState.state === StateType.LOADING) {
    return <LoadingSpinner />;
  }

  if (appState.isError) {
    return <Alert severity="error">{appState.statusMessage}</Alert>;
  }

  return <Grid items={appState.data || []} />;
}
```

## Data Source Abstraction

Astra's Repository pattern supports multiple data source strategies:

### 1. HTTP API (Browser/Node)
```typescript
import { ApiService } from 'astra';

const api = new ApiService('https://api.example.com', { internal_server_error: 'Server unavailable' });

const modelApi = {
  list: () => api.get<Model[]>('/models'),
  get: (id) => api.get<Model>(`/models/${id}`),
};
```

### 2. Electron IPC (Desktop)
```typescript
// Consumer-managed IPC abstraction
const modelApi = {
  list: () => window.electronAPI.invoke('resource:list'),
  get: (id) => window.electronAPI.invoke('resource:get', id),
};
```

## HttpStatusCode

```typescript
enum HttpStatusCode {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  INTERNET_ERROR = 0,
  IDLE = 1000,
}
```

## Error Handling

### Repository Error Pattern
```typescript
export const modelApi = {
  getAll: async () => {
    const data = await api.get<Model[]>('/models');
    return data;
  },
};
```

ApiService already handles errors internally — repositories should not add redundant try/catch wrapping.

### UI Error Display
```typescript
const [appState, execute] = useDataState<Model[]>();

if (appState.isError) {
  return (
    <Alert severity="error">
      {appState.statusMessage}
    </Alert>
  );
}
```

## Rules

- **Always use ServerResponse** for API returns
- **Use ApiService** for HTTP calls
- **Use IPC abstractions** for Electron calls (consumer-managed)
- **Return errors via ServerResponse** — do not use try/catch (ApiService handles that)
- **Return proper status codes** for all operations

## Related

- [Feature Structure](feature-structure.md) — Canonical feature folder layout
- [MVVM Pattern](mvvm-pattern.md)
- [State Management](state-management.md)
- [Theming](theming.md)
- [Localization](localization.md)
