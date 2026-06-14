# ApiService

HTTP client wrapper implementing the Repository pattern.

## Overview

Wraps axios to provide type-safe HTTP methods (GET, POST, PUT, DELETE) with standardized error handling and localized status messages.

## Class Overview

```typescript
class ApiService {
  constructor(baseUrl: string, literal: Record<string, string>);
}
```

## Constructor Parameters

| Param     | Type                     | Description                             |
| --------- | ------------------------ | --------------------------------------- |
| `baseUrl` | `string`                 | Base URL for all API requests           |
| `literal` | `Record<string, string>` | Localization strings for error messages |

## Methods

### `get<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>>`

Makes a GET request to `${baseUrl}/${url}`.

### `post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ServerResponse<T>>`

Makes a POST request with optional body.

### `put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ServerResponse<T>>`

Makes a PUT request with optional body.

### `delete<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>>`

Makes a DELETE request.

## Error Handling

- Catches axios errors and extracts status code
- Returns `ServerResponse.error` with localized message
- Falls back to `INTERNAL_SERVER_ERROR` (500) if status unavailable

## Example

```typescript
const api = new ApiService("https://api.example.com", literals);

const users = await api.get<User[]>("users");
if (users.isError) {
  console.error(users.statusMessage);
}
```

## Responsibilities

- Execute HTTP requests via axios with the configured base URL
- Catch and normalize axios errors into `ServerResponse` error format
- Inject localization strings into error responses
- Propagate typed response data to callers

## Non-Responsibilities

- Does not handle authentication, token refresh, or re-authentication
- Does not implement request retry or timeout logic beyond axios defaults
- Does not validate request payloads or response schemas
- Does not manage connection pooling or keep-alive

## Core Concepts

- **Base URL**: All request paths are resolved relative to a single base URL
- **Error Normalization**: Axios errors are caught and converted to `ServerResponse.error` with a valid `HttpStatusCode`
- **Generic Methods**: Each HTTP method is generic over the response data type `T`

## Edge Cases

- Axios network errors without a response produce `INTERNET_ERROR` (0)
- Requests to invalid endpoints produce `NOT_FOUND` (404) via axios
- Base URL with trailing slash is concatenated safely with request path
- Empty base URL allows absolute request paths

## States

- **Initialized**: Constructor completed; instance ready with `baseUrl` and `literal`
- **In-flight**: A method (`get`/`post`/`put`/`delete`) has been called; promise is pending
- **Resolved (success)**: Request completed with 2xx status → `ServerResponse.success`
- **Resolved (error)**: Request completed with 4xx/5xx status or network failure → `ServerResponse.error`

## Inputs/Outputs

| Input | Output |
|-------|--------|
| `baseUrl: string, literal: Record<string, string>` | `new ApiService(baseUrl, literal)` — configured client instance |
| `get<T>(url, config?)` | `Promise<ServerResponse<T>>` — GET request |
| `post<T>(url, data?, config?)` | `Promise<ServerResponse<T>>` — POST request |
| `put<T>(url, data?, config?)` | `Promise<ServerResponse<T>>` — PUT request |
| `delete<T>(url, config?)` | `Promise<ServerResponse<T>>` — DELETE request |

## Error Conditions

- **Axios network error without response**: Caught → `ServerResponse.error` with `INTERNET_ERROR` (0)
- **Axios HTTP error with response**: Caught → `ServerResponse.error` with actual HTTP status code
- **Non-axios exception**: Catch-all falls back to `INTERNAL_SERVER_ERROR` (500)
- **Missing localization key**: `statusMessage` may contain a fallback literal string if the key is not found in `literal`

## Future Enhancements

- AbortController integration for request cancellation
- Dynamic base URL resolution per-request (tenancy support)
- Automatic CSRF token injection from cookie or meta tag
- Response caching layer with configurable TTL

## Open Questions

- Should ApiService support interceptors, or is that an orthogonal concern?
- How should file download progress (blob streams) be exposed to callers?
- Is there value in a typed error hierarchy beyond HttpStatusCode?
