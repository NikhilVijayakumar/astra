# ApiService

---

# Feature Summary

HTTP client wrapper class that implements the Repository pattern. Wraps axios to provide type-safe GET, POST, PUT, DELETE methods. Catches and normalizes all axios errors into `ServerResponse<T>` error responses. Injects localization strings into error messages. Request paths are resolved relative to a configured `baseUrl`.

---

# Implementation Reference
## Status
Implemented
## Source Files
| File | Role |
|------|------|
| `src/common/repo/ApiService.ts` | Class definition with private `request` method and four public HTTP methods |
| `src/common/repo/apiServiceFactory.ts` | Singleton factory with instance cache per `baseUrl` |
| `src/common/repo/APITypes.ts` | Type definitions for success/error shapes |
| `src/common/repo/ServerResponse.ts` | Return type of all methods |
| `src/common/repo/HttpStatusCode.ts` | Status codes for error normalization |
| `src/common/repo/ApiService.test.ts` | Unit tests |
| `src/common/repo/index.ts` | Barrel re-export |
## Public API
```typescript
class ApiService {
  constructor(baseUrl: string, literal: Record<string, string>);

  get<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>>;
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ServerResponse<T>>;
  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ServerResponse<T>>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>>;
}

// Factory (apiServiceFactory.ts)
function getApiService(baseUrl: string, literal: Record<string, string>): ApiService;
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Facade | Wraps axios behind a simplified interface with four HTTP methods | Consumers never interact with axios directly — `dependency-safety.md` |
| Adapter | Normalizes axios error types into uniform `ServerResponse.error` | Repository layer has one error contract regardless of transport |
| Singleton Factory | `getApiService` caches one instance per `baseUrl` | Prevents duplicate connections and config for the same endpoint |
| Generic Method | Each method is generic `<T>` over response data type | Type-safe responses without per-endpoint subclasses |
| Template Method | Private `request()` defines the request lifecycle; public methods fill in HTTP verb | Single error handling path — reduce duplication |

Internal `HTTPMethod` enum (private, not exported):
```typescript
enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
```

---

# Technical Structure

## Services table
| Service | File Path | Purpose | Dependencies |
|---------|-----------|---------|--------------|
| `ApiService.request()` | `src/common/repo/ApiService.ts:23` | Private — executes axios call, normalizes response/error | `axios`, `ServerResponse`, `HttpStatusCode`, `APITypes` |
| `ApiService.get()` | `src/common/repo/ApiService.ts:59` | Public GET request | `request()` |
| `ApiService.post()` | `src/common/repo/ApiService.ts:70` | Public POST request | `request()` |
| `ApiService.put()` | `src/common/repo/ApiService.ts:83` | Public PUT request | `request()` |
| `ApiService.delete()` | `src/common/repo/ApiService.ts:96` | Public DELETE request | `request()` |
| `getApiService()` | `src/common/repo/apiServiceFactory.ts:7` | Cached singleton factory | `ApiService` |

## State Model table
| State | Condition | Fields |
|-------|-----------|--------|
| Initialized | After constructor | `baseUrl`, `literal` set |
| In-flight | During `request()` | Promise pending |
| Resolved (success) | Axios 2xx response | Returns `ServerResponse.success<T>` |
| Resolved (error) | Axios error or non-axios exception | Returns `ServerResponse.error<T>` |

---

# Integration Design

```
Consumer (feature repo)
  ↓ calls
ApiService.get<T>(url) / post<T>(url, data) / put<T>(url, data) / delete<T>(url)
  ↓ delegates to
ApiService.request<T>(config)
  ↓ uses
axios(config)
  ↓ axios resolves
2xx → ServerResponse.success({ status, statusMessage, data })
4xx/5xx → ServerResponse.error({ status, statusMessage })
Network error → ServerResponse.error({ status: INTERNET_ERROR, statusMessage })
Non-axios error → ServerResponse.error({ status: INTERNAL_SERVER_ERROR, statusMessage })
  ↓ returns
Promise<ServerResponse<T>>  →  consumer pattern-matches on isSuccess/isError
```

URL construction: `` `${this.baseUrl}/${url}` `` — baseUrl and url are concatenated with a single slash separator.

---

# Error Handling

| Error Type | Cause | System Response | Consumer Response |
|------------|-------|-----------------|-------------------|
| Axios HTTP error | 4xx/5xx response | `ServerResponse.error` with actual HTTP status code | Check `isError`, display `statusMessage` |
| Axios network error | No response received (DNS, timeout, CORS) | `ServerResponse.error` with `INTERNET_ERROR` (0) | Check `isError`, display `statusMessage` |
| Non-axios exception | Code bug, runtime error | `ServerResponse.error` with `INTERNAL_SERVER_ERROR` (500) | Check `isError`, log error detail from console |
| Missing literal key | `this.literal` missing expected key | `ServerResponse.error` with `undefined` statusMessage | Ensure all required keys present in literal map |
| Empty baseUrl | Constructor called with `""` | Request URL becomes `"/path"` (absolute) | Valid use case — absolute paths allowed |
| Trailing slash in baseUrl | Constructor called with `"https://api.com/"` | Double slash possible: `"https://api.com//path"` | Strip trailing slash before passing to constructor |

---

# Non-Functional Requirements

| Requirement | Constraint |
|-------------|------------|
| Error Location | Error logged via `console.error` before returning — provides traceability without crashing |
| Thread Safety | Single-threaded (JS); concurrent calls create independent promise chains |
| Bundle Size | Depends on `axios` transitive tree — must be audited per `dependency-safety.md` |
| Factory Cache | `Map<string, ApiService>` grows unbounded per unique `baseUrl` — acceptable for typical app (1-3 endpoints) |
| Type Safety | All methods generic `<T>`; no runtime type enforcement on response data |

---

# Architecture Compliance Review

## Applied Patterns
- **Repository Abstraction**: `repository.md` requires `ApiService` for HTTP calls — compliant
- **Stateless**: `ApiService` holds only configuration (`baseUrl`, `literal`) — no mutable request state — compliant with `stateless-ui.md`
- **Error Normalization**: All axios errors surface as `ServerResponse.error` — aligns with `dependency-safety.md` value error pattern
- **Localization**: Error messages use `this.literal` dictionary — compliant with `localization.md`

## Risks
- `console.error` in production — may leak sensitive request details to browser console; should be gated by environment or delegated to a logger
- No request cancellation (AbortController) — in-flight requests on unmounted components may cause state updates on unmounted component
- No interceptors — consumers who need auth token injection, request/response logging, or CSRF tokens must extend or wrap ApiService
- Base URL concatenation with `/${url}` always inserts a leading slash — may produce `https://api.com//path` if baseUrl ends with `/`

## Gaps
- No AbortController / signal support for request cancellation
- No request/response interceptors
- No timeout configuration exposed (axios default)
- No retry logic
- No file download progress (blob streaming)
- No dynamic base URL per-request (tenancy)

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `ApiService` | `src/common/repo/ApiService.ts` | `ApiService` (class) | `axios`, `./ServerResponse`, `./HttpStatusCode`, `./APITypes` |
| `apiServiceFactory` | `src/common/repo/apiServiceFactory.ts` | `getApiService` (function) | `./ApiService` |
| `ServerResponse` | `src/common/repo/ServerResponse.ts` | `ServerResponse` (class) | `./APITypes`, `./HttpStatusCode` |
| `APITypes` | `src/common/repo/APITypes.ts` | `ResponseSucess<T>`, `ResponseError` | `./HttpStatusCode` |
| `HttpStatusCode` | `src/common/repo/HttpStatusCode.ts` | `HttpStatusCode`, `getStatusMessage` | none |
| `index` (repo) | `src/common/repo/index.ts` | Re-exports all repo modules | `./APITypes`, `./ApiService`, `./apiServiceFactory`, `./HttpStatusCode`, `./ServerResponse` |

---

# Final Rule

`ApiService` is the only layer that touches axios. Feature repositories must never import axios directly — they depend on `ApiService` methods exclusively. All errors must be caught and returned as `ServerResponse.error`. Never let an axios exception propagate uncaught beyond the repository layer.

## Authorization

**Visibility:** Public — stateless Astra library primitive. No authentication or role requirement enforced by Astra. Authorization enforcement is consumer-managed at the application layer.
