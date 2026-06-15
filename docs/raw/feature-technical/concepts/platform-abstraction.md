# Platform Abstraction: Feature Technical

## 1. Technical Overview

Astra runs on two platforms: web (Axios HTTP) and desktop (Electron IPC). The platform abstraction is realized by `ApiService` — the same interface, different transport. `getApiService(baseUrl, literal)` returns an HTTP-backed `ApiService` for web. For Electron IPC, a consumer-provided `ApiService` subclass or wrapper substitutes the axios layer with `ipcRenderer.invoke`. All components and ViewModels are platform-neutral — they consume `ServerResponse<T>` regardless of transport. See `docs/raw/architecture/core/platform-abstraction.md`.

## 2. Architecture Realization

| Platform | Transport | Factory |
|---|---|---|
| Web (browser) | Axios HTTP → `ServerResponse<T>` | `getApiService(baseUrl, literal)` from `apiServiceFactory.ts` |
| Desktop (Electron) | `ipcRenderer.invoke()` → `ServerResponse<T>` | Consumer-implemented wrapper matching `ApiService` interface |

**Abstraction boundary:**

```
ViewModel (hooks/)
  ↓ calls
Repository (repo/*Api.ts)
  ↓ calls
ApiService.get/post/put/delete  ← platform boundary here
  ↓
  ├── Web: axios(config) → HTTP response
  └── Electron: ipcRenderer.invoke(channel, args) → IPC response
```

Both paths return `ServerResponse<T>`. ViewModels and components never reference platform-specific APIs.

## 3. Data Flow

**Web path:**
```
ViewModel.execute(() => api.get<T>(url))
  → ApiService.request({ method: 'GET', url })
  → axios(config)
  → HTTP 2xx → ServerResponse.success<T>
  → HTTP 4xx/5xx → ServerResponse.error<T>
  → Network failure → ServerResponse.error({ status: INTERNET_ERROR })
```

**Electron IPC path (consumer-implemented):**
```
ViewModel.execute(() => ipcApi.invoke<T>(channel, args))
  → consumer wrapper calls ipcRenderer.invoke(channel, args)
  → IPC success → ServerResponse.success<T>
  → IPC error → ServerResponse.error<T>
```

## 4. State Management

Platform selection has no runtime state in Astra. The platform is determined at app initialization when `ApiService` (or its IPC wrapper) is constructed. After construction, `AppState<T>` management is identical across platforms.

## 5. Styling Implementation

No styling impact. Platform abstraction operates entirely below the ViewModel layer — no UI components reference platform APIs.

## 6. Interaction Design

No interaction design differences across platforms. All interaction patterns (loading states, error messages, empty states) are identical regardless of transport.

## 7. Accessibility Implementation

No accessibility differences. The `role="status"`, `aria-live`, and `role="alert"` patterns are consistent across platforms.

## 8. Error Handling

| Error | Web | Electron IPC |
|---|---|---|
| Network unavailable | `ServerResponse.error({ status: INTERNET_ERROR })` | Consumer maps IPC connection error to `INTERNET_ERROR` |
| Server error (5xx) | `ServerResponse.error({ status: INTERNAL_SERVER_ERROR })` | Consumer maps IPC rejection to `INTERNAL_SERVER_ERROR` |
| Auth failure (401) | `ServerResponse.error({ status: UNAUTHORIZED })` | Consumer maps IPC auth rejection to `UNAUTHORIZED` |
| Timeout | Axios default timeout → network error | Consumer implements IPC timeout via Promise.race |

## 9. Performance Considerations

- Web: HTTP overhead per request; mitigated by connection pooling in axios
- Electron: IPC is in-process — lower latency than HTTP; no network round-trip
- `ApiService` singleton per `baseUrl` prevents duplicate connection setup
- Platform detection is at initialization time — no per-request overhead

## 10. Integration Points

| Integration | Mechanism | File |
|---|---|---|
| Web factory | `getApiService(baseUrl, literal)` | `src/common/repo/apiServiceFactory.ts` |
| Electron wrapper | Consumer-implemented; matches `ApiService` public interface | Consumer app |
| ViewModel layer | Consumes `ApiService` via repository — platform-neutral | `src/features/*/repo/*Api.ts` |
| Architecture reference | `docs/raw/architecture/core/platform-abstraction.md` | Architecture |

## 11. Open Questions

- Should Astra provide an `IpcApiService` class implementing the same interface as `ApiService`?
- Should the platform be detectable at runtime (e.g., `typeof window !== 'undefined'`) for auto-selection?
- Should `apiServiceFactory.ts` accept a platform discriminant to return the correct implementation?

## 12. Authorization

**Visibility:** Public — platform abstraction is infrastructure with no authentication requirement. Authentication is consumer-managed at the request layer (auth headers in web, IPC message signing in Electron).
