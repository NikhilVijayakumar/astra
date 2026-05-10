# Repository Layer

Provides a unified API client abstraction using the Repository pattern.

## Overview

The repository layer wraps HTTP communication with axios, providing:

- **Type-safe responses** via `ServerResponse<T>` wrapper
- **Standardized status codes** via `HttpStatusCode` enum
- **Error handling** with localized error messages
- **CRUD operations** (GET, POST, PUT, DELETE)

## Modules

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
