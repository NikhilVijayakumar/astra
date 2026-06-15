# Validation Patterns: Feature Technical

## 1. Technical Overview

Astra is a stateless UI library — business-rule validation is consumer-managed. Astra provides three passive validation surfaces: TypeScript compile-time prop checking (required props), `ServerResponse<T>` runtime discrimination (`isError`/`isSuccess` checks before accessing `data`), and `HttpStatusCode` enum enforcement (named members over numeric literals). Form validation, schema parsing, and input sanitization are consumer responsibilities implemented in ViewModel hooks.

## 2. Architecture Realization

| Validation Layer | Mechanism | Owner |
|---|---|---|
| Prop type checking | TypeScript `interface` on component props — required props produce compile error if omitted | Astra (compile-time) |
| API response discrimination | `ServerResponse.isError` / `isSuccess` check before `.data` access | Consumer ViewModel |
| Status code contracts | `HttpStatusCode` enum — named members prevent magic-number bugs | Astra (compile-time) |
| Translation key existence | `literal['key']` returns `undefined` if key missing — consumer uses optional chaining | Consumer |
| Form input validation | Not in Astra scope — consumer implements in ViewModel layer | Consumer |
| Schema / runtime type validation | Not in Astra scope — consumer adds zod/yup/valibot layer | Consumer |

## 3. Data Flow

```
External API response
  ↓
ApiService.request() → ServerResponse<T>
  ↓
Consumer checks: if (response.isError) { handle } else { use response.data }
  ↓
ViewModel sets AppState via useDataState.execute()
  ↓
AppStateHandler renders based on AppState flags — no further validation
```

**Consumer validation pattern (ViewModel layer):**

```typescript
// hooks/useUserList.ts
const [state, execute] = useDataState<User[]>({}, {
  unexpectedErrorMessage: literal['common.errors.unexpected'],
});

const loadUsers = () => execute(async () => {
  const response = await api.get<User[]>('users');
  // validate shape before returning — Astra doesn't do this
  if (response.isSuccess && !Array.isArray(response.data)) {
    return ServerResponse.error({
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      statusMessage: literal['errors.invalid_response'],
    });
  }
  return response;
});
```

## 4. State Management

Validation has no dedicated state in Astra. Validation outcomes map to `AppState` fields:

| Outcome | `isError` | `isSuccess` | `status` | `statusMessage` |
|---|---|---|---|---|
| Valid API response | `false` | `true` | `HttpStatusCode.SUCCESS` | Localized success |
| Invalid/missing data | `true` | `false` | `HttpStatusCode.BAD_REQUEST` | Localized error |
| Schema mismatch | `true` | `false` | `HttpStatusCode.INTERNAL_SERVER_ERROR` | Localized error |
| Missing translation key | — | — | — | `undefined` (consumer fallback) |

## 5. Styling Implementation

No validation-specific styling. Validation errors surface through `ErrorState` atom (consumer passes localized `errorMessage` to `AppStateHandler`). Form field validation errors are consumer-styled per the design system token rules.

## 6. Interaction Design

No interaction logic in Astra validation layer. Consumer patterns:

| Validation Point | Interaction |
|---|---|
| Field blur | Consumer triggers `onBlur` validation; ViewModel updates field error state |
| Form submit | Consumer validates all fields before calling `execute()` |
| API error | `AppStateHandler` renders `ErrorState` with localized message from `statusMessage` |
| Empty data | `AppStateHandler` renders `EmptyState` via `emptyCondition` prop |

## 7. Accessibility Implementation

- Validation errors must be announced via `role="alert"` or `aria-live="polite"` — consumer-managed
- Field-level errors must be linked to their input via `aria-describedby` — consumer-managed
- Error messages must come from `literal['key']` — no hardcoded English validation strings

## 8. Error Handling

| Condition | Behavior | Consumer Action |
|---|---|---|
| `ServerResponse.isError && !isSuccess` | `execute()` sets `AppState.isError = true` | Check `isError` before accessing `data` |
| `literal['key']` returns `undefined` | Missing translation key — undefined rendered | Use `literal['key'] ?? fallback` |
| `HttpStatusCode` numeric cast | Non-enum value compiles but has undefined behavior | Always use enum members by name |
| `data` accessed on error state | `data` is `null` when `isError` | Guard: `if (appState.isSuccess && appState.data !== null)` |
| `getStatusMessage` missing literal key | Returns `literal['unknown_message']` or `undefined` | Ensure all status keys in literal map |

## 9. Performance Considerations

- Compile-time validation (TypeScript) has zero runtime cost
- `isError`/`isSuccess` checks are O(1) boolean reads
- `literal['key']` access is O(1) object property lookup
- Runtime schema validation (consumer-added) adds per-call parsing cost — memoize if expensive

## 10. Integration Points

| Integration | Mechanism |
|---|---|
| TypeScript prop validation | Component `interface` definitions — enforced by compiler |
| API response validation | `ServerResponse` discrimination pattern — consumer checks `isError`/`isSuccess` |
| Status code contracts | `HttpStatusCode` enum in `src/common/repo/HttpStatusCode.ts` |
| Error display | `AppStateHandler.errorMessage` prop — consumer passes localized `statusMessage` |
| Translation validation | `literal['key'] ?? fallback` — consumer handles undefined keys |

## 11. Open Questions

- Should Astra provide a `validate()` utility that wraps `ServerResponse` with schema checks?
- Should `AppStateHandler` support a `validationError` prop separate from `errorMessage`?
- Should missing translation keys produce a console warning in development mode?

## 12. Authorization

**Visibility:** Public — validation patterns are documentation and compile-time contracts. No authentication or role requirement. Consumer implements auth-aware validation (e.g., rejecting 401 responses) at the ViewModel layer.
