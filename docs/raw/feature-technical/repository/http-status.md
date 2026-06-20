# HttpStatusCode

---

# Feature Summary

Typed numeric enum of HTTP status codes used throughout the repository layer, plus a `getStatusMessage` helper that resolves localized messages from a literal dictionary. Covers standard statuses (200, 201, 400, 401, 404, 500) plus `INTERNET_ERROR` (0) for network failures. `IDLE` (1000) is deprecated — use `StateCode.IDLE` from `state/AppState` for uninitialized state status.

---

# Implementation Reference
## Status
Implemented
## Source Files
| File | Role |
|------|------|
| `src/common/repo/HttpStatusCode.ts` | Enum definition and `getStatusMessage` function |
| `src/common/repo/index.ts` | Barrel re-export |
## Public API
```typescript
enum HttpStatusCode {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  INTERNET_ERROR = 0,
  /** @deprecated Use StateCode.IDLE from state/AppState instead. */
  IDLE = 1000,
}

function getStatusMessage(
  status: HttpStatusCode,
  literal: Record<string, string>
): string;
```

Expected `literal` keys consumed by `getStatusMessage`:
| Enum Value | Literal Key |
|------------|-------------|
| `SUCCESS` | `success_message` |
| `CREATED` | `created_message` |
| `BAD_REQUEST` | `bad_request_message` |
| `UNAUTHORIZED` | `unauthorized_message` |
| `NOT_FOUND` | `not_found_message` |
| `INTERNAL_SERVER_ERROR` | `internal_server_error` |
| `INTERNET_ERROR` | `internet_error` |
| `IDLE` (deprecated) | `idle_message` |
| (default / unknown) | `''` (empty string) |

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Numeric Enum | `HttpStatusCode` is a `const enum`-like numeric enum | Compile-time constant values; switch-case optimization; zero runtime overhead |
| Switch Mapping | `getStatusMessage` uses exhaustive switch over enum values | Guarantees all enum variants are handled; default clause provides fallback |
| Localization Binding | Status messages resolved from `Record<string, string>` literal map | Aligns with `localization.md` — no hardcoded strings in repository layer |
| Synthetic Codes | `INTERNET_ERROR` (0) and `IDLE` (1000) extend HTTP spec | Network failures and uninitialized state are first-class status values |

---

# Technical Structure

## Services table
| Service | File Path | Purpose | Dependencies |
|---------|-----------|---------|--------------|
| `getStatusMessage()` | `src/common/repo/HttpStatusCode.ts:14` | Resolves localized message for status code | `HttpStatusCode` enum, `literal: Record<string, string>` |
| `HttpStatusCode` enum | `src/common/repo/HttpStatusCode.ts:2` | Typed status code constants | none |

## State Model table
| Status | Value | Domain | Semantic |
|--------|-------|--------|----------|
| `SUCCESS` | 200 | HTTP | Request succeeded |
| `CREATED` | 201 | HTTP | Resource created |
| `BAD_REQUEST` | 400 | HTTP | Invalid request |
| `UNAUTHORIZED` | 401 | HTTP | Authentication failure |
| `NOT_FOUND` | 404 | HTTP | Resource missing |
| `INTERNAL_SERVER_ERROR` | 500 | HTTP | Server failure |
| `INTERNET_ERROR` | 0 | Synthetic | Network connectivity failure |
| `IDLE` (deprecated) | 1000 | Synthetic | Uninitialized state placeholder — use `StateCode.IDLE` instead |

---

# Integration Design

Used by `ServerResponse` instances as the `status` field type. Used by `ApiService` to normalize axios error status codes. Used by `AppState<T>` (state management) to indicate `INIT`/`LOADING`/`COMPLETED` state transitions via `IDLE` and `SUCCESS` codes. Consumed by `getStatusMessage` for UI-facing status display in `AppStateHandler`.

```
HttpStatusCode enum
  ↓ consumed by
ServerResponse.status: HttpStatusCode
  ↓ consumed by
ApiService.request() — maps axios response/error status → HttpStatusCode
  ↓ consumed by
useDataState → AppState.status
  ↓ consumed by
AppStateHandler / UI — renders via getStatusMessage(literal)
```

---

# Error Handling

| Error Type | Cause | System Response | Consumer Response |
|------------|-------|-----------------|-------------------|
| Missing literal key | `getStatusMessage` called with key not in `literal` map | Returns the literal value for the matching key, or `''` (empty string) for unknown codes | Ensure status keys are present for expected codes |
| Unknown numeric value | Caller casts arbitrary number to `HttpStatusCode` | Compiles — no runtime validation | Always reference enum members by name |
| `IDLE` (1000) in HTTP context | Code reaches an API response parser | Treated as `IDLE` — no match for any real HTTP response | Safe — `IDLE` only used in state management internal paths |

---

# Non-Functional Requirements

| Requirement | Constraint |
|-------------|------------|
| Performance | Enum switch is O(1) — no allocations in `getStatusMessage` |
| Type Safety | Enum members are the only valid values at compile time; no runtime validation |
| Bundle Size | Minimal — single enum (8 members) + one switch function |
| Maintainability | Adding a new status requires: enum member, `getStatusMessage` case, literal key contract |

---

# Architecture Compliance Review

## Applied Patterns
- **Typed Enum over Magic Numbers**: `repository.md` explicitly requires proper status codes — compliant
- **Localized Messages**: No hardcoded strings in enum — all messages flow through `localization.md` pattern
- **Public API**: Re-exported through repo barrel and `lib.ts` — compliant with `public-api-stability.md`

## Risks
- `IDLE` (1000) in `HttpStatusCode` is `@deprecated` — `StateCode.IDLE` is the canonical initial status; `HttpStatusCode.IDLE` retained for backward compatibility only
- No `isError`/`isClientError`/`isServerError` classification helpers — consumers must manually interpret ranges
- Missing 3xx redirect codes — not handled, may cause confusion if redirect responses reach the enum

## Gaps
- No 3xx status codes (redirect handling)
- No `RATE_LIMITED` (429) or `DUPLICATE_ENTRY` (409) business-level codes
- No machine-readable error code alongside human-readable message

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `HttpStatusCode` | `src/common/repo/HttpStatusCode.ts` | `HttpStatusCode` (enum), `getStatusMessage` (function) | none |
| `index` (repo) | `src/common/repo/index.ts` | Re-exports all repo modules | `./HttpStatusCode` |
| `ServerResponse` | `src/common/repo/ServerResponse.ts` | `ServerResponse` (class) | `./HttpStatusCode` |

---

# Final Rule

Magic number status codes are forbidden. All status comparisons and assignments must use `HttpStatusCode` enum members. Every status code must have a corresponding literal key in the localization map. Synthetic codes `INTERNET_ERROR` (0) and `IDLE` (1000) are reserved for network-layer and state-management-layer respectively — never emit them from business logic.

## Authorization

**Visibility:** Public — stateless Astra library primitive. No authentication or role requirement enforced by Astra. Authorization enforcement is consumer-managed at the application layer.
