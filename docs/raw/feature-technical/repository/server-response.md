# ServerResponse\<T\>

---

# Feature Summary

Generic wrapper that standardizes all API responses into a success/error discriminated type with typed data and localized status messages. Every API call through Astra's repository layer returns `ServerResponse<T>` — never raw axios responses or thrown exceptions.

---

# Implementation Reference
## Status
Implemented
## Source Files
| File | Role |
|------|------|
| `src/common/repo/ServerResponse.ts` | Class definition with factory methods |
| `src/common/repo/APITypes.ts` | Input type definitions `ResponseSucess<T>` and `ResponseError` |
| `src/common/repo/HttpStatusCode.ts` | Status code enum consumed by `status` field |
| `src/common/repo/index.ts` | Barrel re-export |
| `src/common/index.ts` | Upstream barrel re-export |
| `src/lib.ts` | Public entry point (via `src/common/index.ts` → `src/common/repo/index.ts`) |
## Public API
```typescript
class ServerResponse<T> {
  isError: boolean;       // default false
  isSuccess: boolean;     // default false
  status: HttpStatusCode; // default INTERNAL_SERVER_ERROR
  statusMessage: String;  // default ''
  data?: T;

  static success<T>(success: ResponseSucess<T>): ServerResponse<T>;
  static error<T>(error: ResponseError): ServerResponse<T>;
}
```

```typescript
// Input types (APITypes.ts)
type ResponseSucess<T> = {
  status: HttpStatusCode;
  statusMessage: string;
  data: T;
};

type ResponseError = {
  status: HttpStatusCode;
  statusMessage: string;
};
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Sum Type | `ServerResponse<T>` models success/error as a single type discriminated by boolean flags | Errors are values, not exceptions — aligns with `dependency-safety.md` error handling principle |
| Factory Method | `ServerResponse.success()` / `ServerResponse.error()` are static factories | Encapsulates construction logic; private constructor prevents invalid instances |
| Generic Type Parameter | `<T>` preserves type safety of response payload | Consumers receive typed data without casting |
| Value Object | Instance fields are publicly readable, not mutable after construction | Immutable-by-contract pattern; no setters exposed |

---

# Technical Structure

## Services table
| Service | File Path | Purpose | Dependencies |
|---------|-----------|---------|--------------|
| `ServerResponse.success()` | `src/common/repo/ServerResponse.ts:33` | Creates success response with typed data | `ResponseSucess<T>` from `APITypes.ts` |
| `ServerResponse.error()` | `src/common/repo/ServerResponse.ts:37` | Creates error response with status and message | `ResponseError` from `APITypes.ts` |

## State Model table
| State | Condition | `isError` | `isSuccess` | `data` |
|-------|-----------|-----------|-------------|--------|
| Success | After `success()` factory | `false` | `true` | `T` |
| Error | After `error()` factory | `true` | `false` | `undefined` |
| Uninitialized | Default instance (never happens — constructor is private) | `false` | `false` | `undefined` |

---

# Integration Design

Consumed by `ApiService.request()` as return type of all HTTP methods. Consumed by `useDataState` hook as the data source for `AppState<T>` transitions. Repository modules (e.g. `src/features/*/repo/*Api.ts`) call `ApiService` methods and forward the `ServerResponse<T>` up to ViewModel hooks.

```
ApiService.request() → ServerResponse<T>
  ↓
ViewModel hook (useDataState) receives ServerResponse<T>
  ↓
AppState<T>.data / AppState<T>.status / AppState<T>.isError populated from ServerResponse
  ↓
Page component reads AppState for conditional rendering
```

---

# Error Handling

| Error Type | Cause | System Response | Consumer Response |
|------------|-------|-----------------|-------------------|
| Missing data in success | `success()` called without data (should not happen — `ResponseSucess<T>` requires `data: T`) | Instance created with `data: undefined` | Check `data` with optional chaining before access |
| Type mismatch on error | `error()` called but consumer treats `data` as `T` | `data` is `undefined` at runtime | Check `isError` before accessing `data` |
| Non-HttpStatusCode | Caller passes invalid numeric value as status | Compiles but runtime status is unexpected | Use `HttpStatusCode` enum values only |
| Uninitialized usage | `ServerResponse` used outside its lifecycle | Private constructor prevents direct instantiation | Always use factory methods |

---

# Non-Functional Requirements

| Requirement | Constraint |
|-------------|------------|
| Memory | No instance pooling; each factory call allocates a new `ServerResponse<T>` — acceptable for request-scoped usage |
| Type Safety | Generic `<T>` provides compile-time type checking; runtime `data` may be `undefined` |
| Bundle Size | No external dependencies beyond `HttpStatusCode` enum; negligible |
| Error Contract | Errors are returned, never thrown — aligns with `stateless-ui.md` separation of concerns |

---

# Architecture Compliance Review

## Applied Patterns
- **Sum Type / Result Object**: `repository.md` mandates `ServerResponse` for all API returns — fully compliant
- **Value Error Handling**: `dependency-safety.md` prefers returned errors over exceptions — compliant
- **Public API Stability**: Exported through barrel (`index.ts` → `common/index.ts` → `lib.ts`) — compliant with `public-api-stability.md`
- **Stateless**: `ServerResponse` is a passive data carrier — compliant with `stateless-ui.md`

## Risks
- `statusMessage` typed as `String` (object wrapper) instead of `string` (primitive) — inconsistent with `ResponseSucess.statusMessage: string` and may cause unexpected comparison behavior
- Private constructor pattern prevents extension via subclassing — intentional, but limits future polymorphic response types
- `isSuccess` and `isError` are independent booleans (not a discriminated union) — both could theoretically be set to the same value, though factory methods prevent this

## Gaps
- No `.map()` or `.flatMap()` chaining methods (noted in feature spec as future enhancement)
- No response metadata (timestamp, requestId)
- No payload validation or schema parsing
- No pagination metadata carrier

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `ServerResponse` | `src/common/repo/ServerResponse.ts` | `ServerResponse` (class) | `./APITypes` (`ResponseSucess`, `ResponseError`), `./HttpStatusCode` (`HttpStatusCode`) |
| `APITypes` | `src/common/repo/APITypes.ts` | `ResponseSucess<T>`, `ResponseError` | `./HttpStatusCode` (`HttpStatusCode`) |
| `HttpStatusCode` | `src/common/repo/HttpStatusCode.ts` | `HttpStatusCode`, `getStatusMessage` | none |
| `index` (repo) | `src/common/repo/index.ts` | Re-exports all repo modules | `./APITypes`, `./ApiService`, `./apiServiceFactory`, `./HttpStatusCode`, `./ServerResponse` |
| `index` (common) | `src/common/index.ts` | Re-exports common modules | `./repo` |

---

# Final Rule

Every API interaction must go through `ServerResponse<T>`. Raw axios responses must never escape the `ApiService` layer. Consumers must always check `isError` before accessing `data`. Errors are values — never catch and rethrow outside `ApiService`.
