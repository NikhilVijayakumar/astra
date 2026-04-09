# ApiService

HTTP client wrapper implementing the Repository pattern.

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
