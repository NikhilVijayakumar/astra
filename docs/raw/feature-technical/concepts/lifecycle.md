# Lifecycle Ordering: Feature Technical

## 1. Technical Overview

Lifecycle ordering defines the initialization, render, and teardown sequence for all features. Theming initializes first (all components depend on theme context), localization initializes before components display text (can be concurrent with theming), state management initializes per-component on mount, and components render after both theming and localization are available. The failure model is non-cascading — a failure in one feature must not affect unrelated features. Cross-cutting features (authorization, dependency contracts) are configuration contracts with no initialization dependencies.

## 2. Architecture Realization

| Feature Spec Concept | Architecture Implementation |
|---|---|
| Theming first | `ThemeProvider` outermost in provider hierarchy — `core/theming.md`, `runtime-maps/provider-hierarchy.md` |
| Localization second | `LanguageProvider` inside `ThemeProvider` — `core/localization.md` |
| State per-component | `useDataState<T>` called in ViewModel hooks on component mount — `core/hooks.md` |
| Components render after | Page components use `AppStateHandler` for conditional rendering — `core/mvvm-pattern.md` |
| No cascading failure | Each invariant (`theme-sovereignty.md`, `localization.md`, `stateless-ui.md`) is independently enforced |
| Cross-cutting features | No runtime — configuration contracts referenced by feature docs |

**Provider initialization order:**

```
ErrorBoundary
  └── ThemeProvider              ← creates ThemeContext
        └── LanguageProvider     ← reads ThemeContext for locale UI
              └── AuthProvider   ← consumer-managed
                    └── Router
                          └── Page
                                ├── useTheme()
                                ├── useLanguage()
                                └── useDataState() // per-component mount
```

**MVVM initialization per feature:**

```
Page mounts → calls ViewModel hook (use<Feature>)
       ↓
ViewModel calls useDataState<T>() → AppState.INIT
       ↓
useEffect triggers execute(() => repo.get()) → LOADING
       ↓
Repository returns ServerResponse<T> → COMPLETED or ERROR
```

## 3. Data Flow

```
Application start
       ↓
ThemeProvider reads localStorage (SSR-guarded) → sets darkMode
       ↓
LanguageProvider loads translation dictionaries → sets currentLanguage
       ↓
Router renders Page component
       ↓
Page calls ViewModel hook
       ↓
ViewModel.execute() → repository → ApiService → external API
       ↓
Response flows back: ServerResponse<T> → AppState<T> → AppStateHandler → View
```

## 4. State Management

**Initialization state transitions:**

| Feature | Init | Ready | Failure |
|---|---|---|---|
| Theming | `darkMode = false` (default) | `useTheme()` returns context | Falls back to light theme |
| Localization | `currentLanguage = defaultLanguage` | `useLanguage()` returns translations | Falls back to empty dictionary |
| Component state | `AppState.INIT` | `AppState.COMPLETED` with data | `AppState.isError = true` |

**Per-component state lifecycle (useDataState):**

```
[INIT] ────────→ [LOADING] ────────→ [COMPLETED]
   ↑                ↓                    ↓
   ↑                ↓                isError = true
   ↑                ↓                isError = false
   ←────────────────                   [ERROR]
```

## 5. Styling Implementation

No lifecycle-specific styling. Components access theme tokens after `ThemeProvider` initialization. Before theming is initialized, components render in default light theme. Localization has no styling impact — layout uses logical CSS properties regardless of lifecycle state.

## 6. Interaction Design

No interaction design in lifecycle ordering. Interactions follow per-component patterns described in their respective feature docs. Lifecycle guarantees:
- Theme is stable during component render (no mid-render theme switching)
- Language is stable during component render (no mid-render language switching)
- State transitions are predictable (INIT → LOADING → COMPLETED/ERROR)

## 7. Accessibility Implementation

- Initial loading state must not produce unlabeled UI regions
- Error states must be communicated to screen readers via `aria-live` regions
- Fallback text (when localization is unavailable) must still be accessible
- Theme initialization failure defaults to light mode — all contrast ratios maintained
- Component loading states should announce to assistive technology

## 8. Error Handling

| Failure | Effect | Recovery |
|---|---|---|
| Theming fails | Components render in default light theme | Components re-render when theming becomes available |
| Localization fails | Components display untranslated fallback text | Components update when localization becomes available |
| State management fails | Individual component fails to load data | Component-level retry or error state via `AppStateHandler` |
| Component fails | Only that component is affected | Parent error boundary catches and removes component |
| Circular initialization | Fallback to default behavior for all features | Resolve at architecture level |

**No-cascade rule (enforced by architecture invariants):**
- Theming failure does NOT affect localization
- Localization failure does NOT affect theming
- Component failure does NOT affect siblings
- State failure does NOT affect theming or localization

## 9. Performance Considerations

- Theming and localization initialize once at app root — no repeated cost
- `useDataState` initializes per-component mount — lazy initialization by default
- Theme object creation on every mode switch — MUI memoizes internally
- Translation dictionary is loaded eagerly — no lazy chunks
- Component lifecycle is standard React mount/unmount — no framework overhead
- Error boundaries add minimal per-boundary overhead

## 10. Integration Points

| Integration | Mechanism | Architecture Doc |
|---|---|---|
| Provider hierarchy | Nesting order enforced in `App.tsx` | `runtime-maps/provider-hierarchy.md` |
| Theme → Components | `ThemeContext` via `useTheme()` | `core/theming.md` |
| Localization → Components | `LanguageContext` via `useLanguage()` | `core/localization.md` |
| State → Components | `useDataState` → props via ViewModel | `core/hooks.md`, `core/mvvm-pattern.md` |
| Cross-cutting features | No runtime initialization | `concepts/authorization.md`, `concepts/dependency-contracts.md` |

## 11. Open Questions

- Should there be lifecycle hooks for features to react to initialization completion?
- Should initialization timeout be configurable per feature?
- Should health-check reporting be added for each feature's initialization state?
