# Repository Layer

HTTP client and response normalization. All network access in Astra goes through this layer — feature repositories never import axios directly.

## `HttpStatusCode`

```typescript
enum HttpStatusCode {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  INTERNET_ERROR = 0,   // no network / connection refused
}
```

Helper: `getStatusMessage(status, literal)` maps a code to a localized string from a `literal` record.

## `ServerResponse<T>`

Normalized return type from all `ApiService` methods. Construct via static factories:

```typescript
ServerResponse.success<T>({ status, statusMessage, data })  // isSuccess=true, isError=false
ServerResponse.error<T>({ status, statusMessage })          // isError=true, isSuccess=false
```

Fields mirror `AppState<T>` — `useDataState.execute()` maps a `ServerResponse<T>` directly into `AppState<T>` on completion.

`APITypes.ts` defines the input shapes:
```typescript
type ResponseSucess<T> = { status: HttpStatusCode; statusMessage: string; data: T };
type ResponseError    = { status: HttpStatusCode; statusMessage: string };
```

## `ApiService`

Axios-based HTTP client. Requires `baseUrl` and a localization `literal` record.

```typescript
class ApiService {
  constructor(baseUrl: string, literal: Record<string, string>)

  get<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>>
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ServerResponse<T>>
  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ServerResponse<T>>
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>>
}
```

URL construction: `` `${baseUrl}/${url}` `` — strip trailing slash from `baseUrl` to avoid double slashes.

**Error normalization** — all errors are caught and returned as `ServerResponse.error(...)`, never thrown:

| Cause | `status` in response |
|-------|----------------------|
| Axios HTTP error (4xx/5xx) | Actual HTTP status code |
| Network failure / no response | `HttpStatusCode.INTERNET_ERROR` (0) |
| Non-axios exception | `HttpStatusCode.INTERNAL_SERVER_ERROR` (500) |

## `getApiService` — singleton factory

```typescript
import { getApiService } from 'astra';

const api = getApiService(baseUrl, literal);
```

Returns a cached `ApiService` keyed by `baseUrl`. Safe to call at module scope inside a repository class — repeated calls with the same `baseUrl` return the same instance.

## Usage in a Feature Repository

```typescript
import { getApiService, ServerResponse } from 'astra';

export class UserRepository {
  private api = getApiService(import.meta.env.VITE_API_URL, literal);

  getUser(id: string): Promise<ServerResponse<User>> {
    return this.api.get<User>(`users/${id}`);
  }

  updateUser(id: string, data: Partial<User>): Promise<ServerResponse<User>> {
    return this.api.put<User>(`users/${id}`, data);
  }
}
```

## See Also

- [state-management.md](./state-management.md) — `AppState<T>` contract that `ServerResponse` maps into
- [use-data-state.md](./use-data-state.md) — hook that calls the repository and updates `AppState`
