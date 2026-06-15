# Dependency Contracts: Feature Technical

## 1. Technical Overview

Dependency contracts define formal interfaces between features — what each feature provides, requires, and how it behaves when dependencies are unavailable. Contracts are configuration contracts, not runtime components — they have no initialization dependencies and are referenced by feature docs. Theming and localization have no direct dependency on each other; both provide context to components independently. State management initializes per-component on mount. Component failure must not cascade to unrelated features (no-cascade rule).

## 2. Architecture Realization

| Feature Spec Contract | Architecture Implementation |
|---|---|
| Theming → Components: provides active mode + tokens | `useTheme()` hook, MUI `ThemeProvider`, `src/theme/tokens/` |
| Localization → Components: provides lang + dictionary | `useLanguage()` hook, `LanguageProvider`, JSON translation files |
| State → Components: provides async lifecycle | `useDataState<T>()`, `AppState<T>`, `StateType` enum |
| Theming ↔ Localization: no direct dependency | Provider hierarchy: ThemeProvider → LanguageProvider (structural, not dependency) |
| Components → Theming: relies on theme context | `useTheme()` in View components, `sx` prop theme resolution |
| Components → Localization: relies on dictionary | `useLanguage()` in ViewModel, resolved strings as props |
| Components → State: relies on async lifecycle | `useDataState()` in ViewModel, `AppStateHandler` in View |

**Contract interface types:**

```typescript
// Theme contract
interface ThemeContract {
  provides: { darkMode: boolean; toggleDarkMode: () => void };
  requires: null;
  failureBehavior: 'default-light';
}

// Localization contract
interface LocalizationContract {
  provides: { currentLanguage: string; literal: Record<string, string>; availableLanguages: LangOption[] };
  requires: null;
  failureBehavior: 'empty-dictionary';
}

// State contract
interface StateContract<T> {
  provides: { state: StateType; isError: boolean; data: T | null };
  requires: null;
  failureBehavior: 'initial-state';
}
```

## 3. Data Flow

```
Dependency resolution at runtime:
       ↓
ThemeProvider provides ThemeContext
       ↓
LanguageProvider provides LanguageContext (reads ThemeContext for locale UI)
       ↓
Page component uses useTheme() and useLanguage()
       ↓
ViewModel hook uses useDataState<T>() with Repository
       ↓
Pure View component receives props + callbacks from container
```

**Feature interaction boundaries:**

| Interaction | Data Flow | Dependency |
|---|---|---|
| Theme read by component | `ThemeContext → useTheme() → sx prop / styled` | Strong |
| Language read by component | `LanguageContext → useLanguage() → literal['key']` | Strong |
| State managed by ViewModel | `useDataState<T>() → Repository → ApiService` | Strong |
| Theme read by LanguageProvider | `ThemeContext` for locale UI (structural only) | Weak (layout) |

## 4. State Management

Each feature manages its own state independently. No shared state across features.

**Contract states per feature:**

| Feature | Initial | Active | Failure |
|---|---|---|---|
| Theming | Light mode (no persisted pref) | Active mode + persistence | Light mode fallback |
| Localization | defaultLanguage dictionary | Current language active | Empty dictionary |
| State (per-component) | `AppState.INIT` | `AppState.COMPLETED` | `AppState.isError = true` |

**Cross-feature state independence:**

```
Theme state change (toggleDarkMode)
       ↓
Re-renders all useTheme() consumers
       ↓
Does NOT affect: currentLanguage, useDataState, component data
```

## 5. Styling Implementation

Styled according to Theme Sovereignty invariant. No hardcoded styling in dependency contract layer. Components use theme tokens for all visual properties. When theming is unavailable, components default to light mode tokens.

## 6. Interaction Design

No direct interaction logic in dependency contracts. Interaction behavior is governed by per-feature contracts:

| Interaction dependency | Contract guarantee |
|---|---|
| Theme toggle click | `toggleDarkMode()` available if theme context is active |
| Language switch | `setCurrentLanguage()` available if language context is active |
| Data load | `execute()` available if `useDataState` is initialized |
| Component click | Callback props available if parent provides them |

## 7. Accessibility Implementation

- Feature contract failures must not block accessibility features
- Language context failure → UI may show no text — aria-labels may also be empty
- Theme context failure → default light mode preserves contrast ratios
- State failure → error message must be accessible (role="alert", aria-live)
- Component failure captured by ErrorBoundary — must persist accessibility tree

## 8. Error Handling

| Contract Failure | Behavior | Documentation |
|---|---|---|
| Theming unavailable | Light mode default | `features/theming/README.md` |
| Localization unavailable | Untranslated/fallback text | `features/localization/README.md` |
| State unavailable | Component renders initial state | `features/state/README.md` |
| Circular dependency | Architecture resolution required | `concepts/dependency-contracts.md` |
| Version mismatch | Degraded behavior | `concepts/dependency-contracts.md` |

**No-cascade enforcer per invariant:**
- `stateless-ui.md`: Components own no data lifecycle — failure is isolated
- `theme-sovereignty.md`: Theme tokens are consumed independently per component
- `localization.md`: Translation context is consumed independently per component
- `dependency-safety.md`: No runtime coupling between independent dependencies

## 9. Performance Considerations

- Contract resolution is O(1) — context access from React tree
- No dependency validation cost at runtime — contracts are documented, not enforced in code
- Provider nesting adds minimal overhead per context boundary
- Feature isolation prevents cascading re-renders across unrelated features
- Each `useDataState` instance is independent — no centralized state watcher

## 10. Integration Points

| Contract | Providing Feature | Consuming Feature | Mechanism |
|---|---|---|---|
| Theme → Components | Theming System | All components | `useTheme()` hook |
| Localization → Components | Localization | All components | `useLanguage()` hook |
| State → Components | State Management | Data-driven components | `useDataState()` + ViewModel |
| Theming ↔ Localization | Independent | Independent | Provider nesting only |
| Cross-cutting (Auth, Contracts) | Configuration | Feature docs | Documentation reference only |

## 11. Open Questions

- Should dependency contracts be formalized as TypeScript interfaces with runtime validation?
- Should circular dependency detection be implemented at build time?
- How should contract versioning work across feature releases?
