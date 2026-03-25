# Repository & API Layer

This document describes Astra's data access contract implemented under src/common/repo.

## Source Modules

- ApiService.ts
- apiServiceFactory.ts
- ServerResponse.ts
- APITypes.ts
- HttpStatusCode.ts

## ApiService

ApiService is a thin HTTP wrapper over axios that always returns ServerResponse<T>.

Constructor:

```ts
new ApiService(baseUrl: string, literal: Record<string, string>)
```

Methods:

```ts
get<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>>
post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ServerResponse<T>>
put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ServerResponse<T>>
delete<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>>
```

Behavior:
- Uses baseUrl + "/" + url for request path.
- Converts success responses to ServerResponse.success(...).
- Converts axios errors and unknown errors to ServerResponse.error(...).
- Uses literal.internal_server_error as fallback message.

## ServerResponse Contract

ServerResponse<T> has stable shape:

```ts
{
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode;
  statusMessage: string;
  data?: T;
}
```

Creation helpers:
- ServerResponse.success<T>(responseSuccess)
- ServerResponse.error<T>(responseError)

## HttpStatusCode and Message Mapping

HttpStatusCode enum includes network and app lifecycle values:

```ts
SUCCESS = 200
CREATED = 201
BAD_REQUEST = 400
UNAUTHORIZED = 401
NOT_FOUND = 404
INTERNAL_SERVER_ERROR = 500
INTERNET_ERROR = 0
IDLE = 1000
```

Use getStatusMessage(status, literal) to map status to localized strings.

Required literal keys:
- success_message
- created_message
- bad_request_message
- unauthorized_message
- not_found_message
- internal_server_error
- internet_error
- idle_message
- unknown_message

## getApiService Factory

getApiService(baseUrl, literal) caches ApiService by baseUrl.

Important implication:
- If the same baseUrl is requested again with a new literal object, the cached instance is reused.
- For language-sensitive API messages, this means literal updates are not automatically reflected for the same baseUrl unless cache strategy is changed.

Current behavior is intentional for reuse/performance, but client apps should be aware.

## Repository Pattern Standard

Each feature should define repository methods with domain names, not HTTP names.

Good:

```ts
usersRepo.fetchUsers()
usersRepo.createUser(payload)
```

Avoid in ViewModel/View:

```ts
api.get('users')
api.post('users', payload)
```

## Example Repository

```ts
import { ApiService, ServerResponse } from 'astra';

type User = { id: string; name: string };

export class UsersRepo {
  constructor(private api: ApiService) {}

  fetchUsers(): Promise<ServerResponse<User[]>> {
    return this.api.get<User[]>('users');
  }

  createUser(payload: Pick<User, 'name'>): Promise<ServerResponse<User>> {
    return this.api.post<User>('users', payload);
  }
}
```

## Type Safety Standards

1. Always pass method generic type: api.get<User[]>('users').
2. Keep repository return type explicit: Promise<ServerResponse<T>>.
3. Do not expose axios-specific types outside repository layer.

## Error Handling Standards

1. UI should read isError/isSuccess and status from ServerResponse/AppState.
2. Do not throw repository errors for expected HTTP outcomes.
3. Keep toast/snackbar and retry logic in ViewModel/View, not ApiService.

## Related Docs

- MVVM_Clean_Architecture.md
- hooks.md
- state.md

