# HttpStatusCode

Enum of HTTP status codes used throughout the repository layer.

## Overview

Typed enum mapping logical status names to numeric HTTP codes, plus a helper function for localized status messages.

## Enum Values

| Code                    | Value | Description                   |
| ----------------------- | ----- | ----------------------------- |
| `SUCCESS`               | 200   | Request succeeded             |
| `CREATED`               | 201   | Resource created successfully |
| `BAD_REQUEST`           | 400   | Invalid request parameters    |
| `UNAUTHORIZED`          | 401   | Authentication required       |
| `NOT_FOUND`             | 404   | Resource not found            |
| `INTERNAL_SERVER_ERROR` | 500   | Server-side error             |
| `INTERNET_ERROR`        | 0     | Network connectivity issue    |
| `IDLE`                  | 1000  | State management placeholder  |

## Helper Function

### `getStatusMessage(status: HttpStatusCode, literal: Record<string, string>): string`

Returns localized message for a given status code.

```typescript
const msg = getStatusMessage(HttpStatusCode.SUCCESS, literals);
// Returns: literals['success_message']
```

## Usage

```typescript
import { HttpStatusCode } from "./HttpStatusCode";

if (response.status === HttpStatusCode.SUCCESS) {
  // Handle success
}
```

## Responsibilities

- Provide a canonical set of HTTP status codes used across the repository layer
- Supply a `getStatusMessage` helper for localized status descriptions
- Eliminate magic number status codes throughout the codebase

## Non-Responsibilities

- Does not cover every standard HTTP status code (only those used by the application)
- Does not perform any HTTP communication itself
- Does not map status codes to actions or retry policies

## Core Concepts

- **Typed Enum**: `HttpStatusCode` is a numeric enum ensuring type-safe comparisons
- **Idle State**: Code `1000` (`IDLE`) is a placeholder for uninitialized state management, not a real HTTP status
- **Localization**: Messages are resolved from a `Record<string, string>` literal map at runtime

## Edge Cases

- `INTERNET_ERROR` (0) represents network failures, not a real HTTP status
- `IDLE` (1000) is outside the HTTP spec and used only for internal state
- `getStatusMessage` returns a fallback string if the literal key is missing

## States

- **Static Enum:** `HttpStatusCode` is a compile-time constant — no runtime state transitions
- **Usage states:** Codes are used in `INIT`, `LOADING`, `COMPLETED`, and `ERROR` contexts as data, not as state machines themselves

## Inputs/Outputs

| Input | Output |
|-------|--------|
| `HttpStatusCode.SUCCESS \| CREATED \| BAD_REQUEST \| UNAUTHORIZED \| NOT_FOUND \| INTERNAL_SERVER_ERROR \| INTERNET_ERROR \| IDLE` | Corresponding numeric value (`200`–`1000`) |
| `getStatusMessage(status: HttpStatusCode, literal)` | Localized `string` message for the given status code |

## Error Conditions

- **Missing literal key**: `getStatusMessage` returns a fallback string instead of throwing
- **Unknown numeric value**: Casting arbitrary numbers to `HttpStatusCode` compiles but yields no matching enum member at runtime
- **`IDLE` (1000) outside HTTP spec**: Safe for internal state but will not match any real HTTP response

## Future Enhancements

- Extended status codes for business-level errors (e.g., `RATE_LIMITED`, `DUPLICATE_ENTRY`)
- Custom status code ranges for domain-specific error categories
- Machine-readable error codes alongside human-readable messages
- Integration with OpenAPI-generated status code definitions

## Open Questions

- Should `IDLE` (1000) be moved to a separate state enum rather than living in HttpStatusCode?
- How should 3xx redirect statuses be handled — followed automatically or surfaced to callers?
- Is there value in a `isError` vs `isClientError` vs `isServerError` classification helper?
