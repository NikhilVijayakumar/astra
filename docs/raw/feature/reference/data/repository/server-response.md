# ServerResponse<T>

Generic wrapper for API responses with success/error states.

## Overview

Generic result wrapper that standardizes all API responses into success or error states with typed data and localized messages.

## Class Definition

```typescript
class ServerResponse<T> {
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode;
  statusMessage: string;
  data?: T;
}
```

## Factory Methods

### `ServerResponse.success(success: ResponseSucess<T>): ServerResponse<T>`

Creates a success response with typed data.

**ResponseSucess<T>**:

```typescript
{
  status: HttpStatusCode;
  statusMessage: string;
  data: T;
}
```

### `ServerResponse.error(error: ResponseError): ServerResponse<T>`

Creates an error response.

**ResponseError**:

```typescript
{
  status: HttpStatusCode;
  statusMessage: string;
}
```

## Usage Pattern

```typescript
const response = await api.get<User[]>("users");

if (response.isSuccess) {
  const users: User[] = response.data;
} else {
  console.error(response.status, response.statusMessage);
}
```

## Responsibilities

- Provide a consistent success/error contract for all API interactions
- Carry typed response data in success cases
- Carry status code and localized message in both success and error states
- Enable pattern matching via `isSuccess` / `isError` boolean flags

## Non-Responsibilities

- Does not log or report errors externally
- Does not throw exceptions (errors are returned as values)
- Does not transform or validate the `data` payload beyond its generic type parameter

## Core Concepts

- **Sum Type Pattern**: `ServerResponse<T>` models success and error variants as a single type discriminated by boolean flags
- **Factory Methods**: `ServerResponse.success()` and `ServerResponse.error()` provide a clear API for construction
- **Generic Data**: The type parameter `T` preserves type safety for the response data

## Edge Cases

- Success response with `data: undefined` is valid but callers must handle optional data
- Error responses always have `data: undefined` regardless of the generic type
- `status` may be `IDLE` (1000) if used in uninitialized state management contexts

## States

- **Success**: `isSuccess: true, isError: false` — contains typed `data` and status 2xx
- **Error**: `isSuccess: false, isError: true` — contains error `status` and `statusMessage`; `data` is `undefined`
- **Uninitialized**: When `ServerResponse` is used in state wrappers — `status` may be `IDLE` (1000) with no data

## Inputs/Outputs

| Input | Output |
|-------|--------|
| `ResponseSucess<T>` `{ status, statusMessage, data }` | `ServerResponse.success()` → `ServerResponse<T>` with `isSuccess: true` |
| `ResponseError` `{ status, statusMessage }` | `ServerResponse.error()` → `ServerResponse<T>` with `isError: true` |

## Error Conditions

- **Success response with missing `data`**: `data` is typed as `T \| undefined` — consumer must check before access
- **Error response with type mismatch**: `ServerResponse.error()` returns `ServerResponse<T>` but `data` is always `undefined`
- **Invalid `HttpStatusCode` cast**: Passing a non-enum value to factory methods compiles but produces unexpected `status` at runtime

## Future Enhancements

- Discriminated union type for exhaustive pattern matching on success vs error
- `.map()` and `.flatMap()` methods for chaining transformations
- Response metadata (timestamp, requestId, duration) for observability
- Validation helpers that parse `data` against a schema and surface structured errors

## Open Questions

- Should ServerResponse gain a `statusCode` alias for clearer HTTP semantics?
- How should pagination metadata be carried alongside the response data?
- Is a `Result`/`Either` monad importable from a library preferable to a custom class?
