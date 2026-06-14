# Repository Layer

Provides a unified API client abstraction using the Repository pattern.

## Overview

The repository layer wraps HTTP communication with axios, providing:

- **Type-safe responses** via `ServerResponse<T>` wrapper
- **Standardized status codes** via `HttpStatusCode` enum
- **Error handling** with localized error messages
- **CRUD operations** (GET, POST, PUT, DELETE)

## Interfaces

### Modules

| File                                 | Description                                  |
| ------------------------------------ | -------------------------------------------- |
| [ApiService](api-service.md)         | HTTP client with base URL and error handling |
| [ServerResponse](server-response.md) | Result wrapper for success/error states      |
| [HttpStatusCode](http-status.md)     | Enum for HTTP status codes                   |

## Quick Usage

```typescript
const api = new ApiService("https://api.example.com", literals);

const response = await api.get<User[]>("users");
if (response.isSuccess) {
  console.log(response.data);
}
```

## Dependencies

- **axios** - HTTP client library
- **APITypes** - Type definitions for responses

## Responsibilities

- Provide a unified HTTP communication layer for the application
- Wrap axios with type-safe request/response handling
- Standardize error handling with localized messages
- Expose CRUD operations through a consistent interface

## Non-Responsibilities

- Does not manage authentication tokens or session state
- Does not cache responses or implement retry logic
- Does not handle routing or navigation
- Does not transform request/response data beyond serialization

## Core Concepts

- **Repository Pattern**: Abstracts data access behind a consistent interface
- **ServerResponse\<T\>**: Generic wrapper ensuring every response has a status and message
- **HttpStatusCode**: Typed enum preventing magic number usage
- **Localization**: Error messages are resolved via injected literals object

## Edge Cases

- Network failures return `INTERNET_ERROR` (code 0) instead of throwing
- Non-HTTP errors fall back to `INTERNAL_SERVER_ERROR` (500)
- Empty response bodies are handled gracefully with `undefined` data
- Concurrent requests are not queued or deduplicated

## States

- **Idle**: No request has been made; repository layer is initialized and waiting
- **In-flight**: A request is pending; returned `Promise` is unresolved
- **Success**: Request completed with `isSuccess: true` and typed `data`
- **Error**: Request completed with `isError: true` and error `status`/`statusMessage`
- **Network failure**: No response received; status resolves to `INTERNET_ERROR` (0)

## Inputs/Outputs

| Input | Output |
|-------|--------|
| `baseUrl: string` + `literal: Record<string, string>` | `ApiService` instance with typed CRUD methods |
| `get<T>(url, config?)` | `Promise<ServerResponse<T>>` |
| `post<T>(url, data?, config?)` | `Promise<ServerResponse<T>>` |
| `put<T>(url, data?, config?)` | `Promise<ServerResponse<T>>` |
| `delete<T>(url, config?)` | `Promise<ServerResponse<T>>` |

## Error Conditions

- **Network outage**: Axios throws without response → `INTERNET_ERROR` (0) returned
- **Invalid URL/endpoint**: Axios receives 4xx/5xx → error status propagated via `ServerResponse.error`
- **Localization key missing**: `getStatusMessage` returns fallback string when literal key is absent
- **Concurrent request collision**: No deduplication — two identical requests may produce different responses

## Future Enhancements

- Automatic request retry with configurable backoff for transient failures
- Request/response interceptors for auth token injection and logging
- Offline request queue that replays when connectivity returns
- Configurable request timeout per-method or per-endpoint

## Open Questions

- Should the repository layer support GraphQL in addition to REST?
- How should multipart upload progress be reported to consumers?
- Is there a need for a mock/interceptor layer for testing without network?
