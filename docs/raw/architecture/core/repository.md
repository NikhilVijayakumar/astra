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
  data: T | null;
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
import { ApiService, ServerResponse, HttpStatusCode } from 'astra';

export const ModelRepo = {
  getAll: async (): Promise<ServerResponse<Model[]>> => {
    try {
      const response = await api.get<Model[]>('/models');
      return response;
    } catch (error) {
      return ServerResponse.error({
        status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        statusMessage: error instanceof Error ? error.message : 'Failed to load',
      });
    }
  },
};
```

## Using Repository with useDataState

```typescript
import { useDataState, StateType } from 'astra';
import { ModelRepo } from '../repo/modelRepo';

function ListContainer() {
  const [appState, execute] = useDataState<Model[]>();

  useEffect(() => {
    execute(() => ModelRepo.getAll());
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

const api = new ApiService(API_BASE_URL, literals);

const ModelRepo = {
  list: () => api.get<Model[]>('/models'),
  get: (id) => api.get<Model>(`/models/${id}`),
};
```

### 2. Electron IPC (Desktop)
```typescript
// Consumer-managed IPC abstraction
const ModelRepo = {
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
export const ModelRepo = {
  getAll: async () => {
    try {
      const data = await api.get<Model[]>('/models');
      return data;
    } catch (error) {
      return ServerResponse.error({
        status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        statusMessage: 'Failed to load',
      });
    }
  },
};
```

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
- **Handle errors** in repository layer
- **Return proper status codes** for all operations

## Related

- [Feature Structure](feature-structure.md) — Canonical feature folder layout
- [MVVM Pattern](mvvm-pattern.md)
- [State Management](state-management.md)
- [Theming](theming.md)
- [Localization](localization.md)
