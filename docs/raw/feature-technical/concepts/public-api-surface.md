# Public API Surface: Feature Technical

## 1. Technical Overview

Astra's public API is the set of symbols accessible via `import { X } from 'astra'`. The entry point is `src/lib.ts`, which re-exports from `src/common` (components, hooks, localization, repo, state, theme). Every symbol in the public API must be intentionally exported — no accidental leaks of internal implementation details. Internal symbols (private class members, internal utilities, stories, test helpers) are never re-exported from `src/lib.ts`. See `docs/raw/architecture/core/api-surface.md`.

## 2. Architecture Realization

**Export chain:**

```
src/lib.ts
  ├── export * from './common'
  │     ├── export * from './components'         → atoms, molecules, organisms, templates
  │     ├── export * from './hooks'               → useDataState
  │     ├── export * from './localization'        → LanguageProvider, useLanguage
  │     ├── export * from './repo'                → ApiService, ServerResponse, HttpStatusCode, getApiService
  │     ├── export * from './state'               → AppState, StateType, StateCode, AppStateHandler
  │     └── export * from './theme'               → ThemeProvider, useTheme
  ├── export * from './theme'                     → theme tokens
  └── export * from './types/template.types'      → shared template types
```

**Public vs internal boundary:**

| Symbol type | Export rule |
|---|---|
| Components (`Card`, `DataTable`, `AppStateHandler`) | Public — exported via tier barrel → `components/index.ts` → `lib.ts` |
| Hooks (`useDataState`) | Public — exported via `hooks/index.ts` → `lib.ts` |
| Type interfaces (`CardProps`, `DataTableProps`, `AppState<T>`) | Public — exported via same barrel as their component |
| Private class members (`ApiService.request`, `ServerResponse` constructor) | Private — TypeScript `private` keyword |
| Stories (`.stories.tsx`) | Never exported — test-only files |
| Internal utilities (`drawerData.ts`, `ToolbarData.ts`) | Internal — not re-exported from barrel |

## 3. Data Flow

```
Consumer writes: import { Card, useDataState, AppStateHandler } from 'astra'
  → Node/bundler resolves 'astra' → package.json main: 'src/lib.ts'
  → lib.ts re-exports from common/index.ts
  → common/index.ts re-exports from tier barrels
  → Tree-shaker eliminates unused exports from final bundle
```

## 4. State Management

The public API surface is static — it does not change at runtime. Breaking changes to exported symbol names, types, or behaviors require a semver major version bump. Additive changes (new exports, optional props) are minor version bumps.

**Stability contract:**

| Change type | Version impact | Example |
|---|---|---|
| New optional prop | Minor | Add `aria-label?: string` to `DataTableProps` |
| New export | Minor | Add `AppStateHandler` to `state/index.ts` |
| Rename export | Major | `ServerResponse` → `ApiResponse` |
| Remove export | Major | Remove `getApiService` from public API |
| Change prop type (narrowing) | Major | `status: HttpStatusCode` → `status: HttpStatusCode.SUCCESS` |
| Change prop type (widening) | Minor | `status: HttpStatusCode` → `status: HttpStatusCode \| StateCode` |

## 5. Styling Implementation

No styling impact. Public API surface is a TypeScript/module concern.

## 6. Interaction Design

No interaction design impact. Consumers interact with the public API at development time (imports, TypeScript types), not at runtime.

## 7. Accessibility Implementation

No direct accessibility impact. However, accessibility-related prop additions (e.g., `aria-label` on `DataTable`) are additive public API changes.

## 8. Error Handling

| Error | Cause | Prevention |
|---|---|---|
| `Module not found: 'astra'` | Package not installed or `main` misconfigured | Verify `package.json` main field points to `src/lib.ts` |
| `Named export X not found` | Symbol not re-exported up the barrel chain | Trace: component → tier barrel → `components/index.ts` → `common/index.ts` → `lib.ts` |
| TypeScript `type-only` error | `export type` vs `export` mismatch | Use `export type` for interface-only symbols; `export` for values |
| Accidental internal export | Internal utility appears in public API | Audit `lib.ts` re-export chain; use `export { only, named, symbols }` over `export *` where needed |

## 9. Performance Considerations

- `export *` chains are resolved at build time — no runtime cost
- Tree-shaking requires named exports and ES module format — `export *` with side-effect-free modules is tree-shakeable
- Barrel files (`index.ts`) can defeat tree-shaking if they import side-effectful modules — audit with `sideEffects: false` in `package.json`
- Circular re-exports (A → B → A) cause bundler warnings and may prevent tree-shaking

## 10. Integration Points

| Integration | Mechanism |
|---|---|
| Entry point | `src/lib.ts` — single public API entry |
| Component barrel | `src/common/components/index.ts` → tier barrels |
| State barrel | `src/common/state/index.ts` → `AppState`, `StateType`, `StateCode`, `AppStateHandler` |
| Repo barrel | `src/common/repo/index.ts` → `ApiService`, `ServerResponse`, `HttpStatusCode` |
| Type re-exports | Every component exports `ComponentProps` type alongside default component |

## 11. Open Questions

- Should `export *` be replaced with explicit named exports in `lib.ts` to prevent accidental leaks?
- Should a public API snapshot test (API Extractor, `tsd`) be added to CI to catch unintentional breaking changes?
- Should internal utilities (`drawerData.ts`, `ToolbarData.ts`) be moved outside `src/common` to prevent accidental barrel inclusion?

## 12. Authorization

**Visibility:** Public — the public API surface is a development-time contract. No authentication or role requirement.
