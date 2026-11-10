# Raw source review and draft requirements

Scope: all Markdown files under `docs/raw/architecture`, `feature`, `feature-technical` and `external-context`, initially inventoried at revision `4a4579e064e2ee1240ba897c1db52e72ba5ad591`. Knowledge provenance URLs identify that source revision; later source edits may differ. PR and report directories are excluded. Prompt and template data are excluded as requirements sources; their audit approach informed the separate skill. Mapping a source to a topic is not proof every statement has been independently validated or extracted. All requirements below are draft documented intent; evidence notes identify selected source-code observations, not comprehensive test results.

## Draft requirements

| ID | Requirement or documented intent | Source | Evidence and questions |
|---|---|---|---|
| REQ-MVVM-001 | Consumers organize asynchronous features around repository, ViewModel hook and View responsibilities. | [MVVM wiring](../raw/feature/mvvm-wiring.md), [separation](../raw/architecture/invariants/mvvm-separation.md) | Guidance to consumers; Astra cannot enforce their application architecture. |
| REQ-STATE-001 | Async state exposes INIT, LOADING and COMPLETED, result flags, status, message and data; loading preserves existing data. | [state](../raw/feature/state-management.md), [hook](../raw/feature/use-data-state.md) | `src/common/hooks/useDataState.ts` implements these transitions. |
| REQ-STATE-002 | Completion maps a response into state; a thrown operation yields a 500 error and caller-provided fallback message. | [hook](../raw/feature/use-data-state.md) | Current hook maps fields and catches exceptions; it does not validate that a resolved object is a ServerResponse instance. |
| REQ-STATE-003 | Document that overlapping calls can apply results in completion order; no latest-invocation guard is present. | [hook](../raw/feature/use-data-state.md) | Code inspection confirms no request ordering guard. Earlier raw documentation incorrectly claimed older responses were discarded; a behavioral change would require separate consideration. |
| REQ-UI-001 | Route loading before error, success/empty and fallback; use slots before context and leave UI ownership to consumers. | [handler](../raw/feature/app-state-handler.md) | `AppStateHandler.tsx` follows that order; its children check is truthiness-based. |
| REQ-HTTP-001 | Normalize HTTP success and failures into ServerResponse; distinguish HTTP status, network 0 and unexpected 500. | [repository](../raw/feature/repository.md) | `ApiService.ts` does so unless an optional `onError` callback throws; the raw claim that errors never throw is too broad. |
| REQ-HTTP-002 | Cache API service instances by base URL. | [repository](../raw/feature/repository.md) | `apiServiceFactory.ts` reuses the first literal and callback for the same URL; review whether this is intended. |
| REQ-IPC-001 | Support invoke, fire-and-forget send and receive with unsubscribe through a preload bridge. | [IPC](../raw/feature/ipc-service.md) | `IpcService.ts` shows these paths; behavior without a browser `window` and callback failures needs separate verification. |
| REQ-API-001 | Preserve documented public exports and assess compatibility, peer dependencies and declaration output. | [API](../raw/architecture/core/api-surface.md), [stability](../raw/architecture/invariants/public-api-stability.md) | `src/lib.ts` and `package.json` define the actual current surface. Raw import maps contain stale paths and incomplete package exports. |
| REQ-BUILD-001 | Use a committed lockfile to support reproducible installation. | [build](../raw/architecture/core/build.md), [dependencies](../raw/architecture/core/dependencies.md) | **Conflict:** `.gitignore` excludes `/package-lock.json`. Decide repository policy before changing it. |
| REQ-BOUNDARY-001 | Keep theming, localization, visual components and runtime bridge ownership outside Astra's core library. | [runtime boundary](../raw/architecture/invariants/runtime-boundary.md), [Prati context](../raw/external-context/prati.md) | README states Astra is not a design system; external ownership claims require confirmation in that project. |

## Additional draft requirements and discrepancies

Each item remains draft. ?Code observation? means inspection, not an independently executed acceptance scenario.

| ID | Draft requirement or decision | Source | Evidence / status |
|---|---|---|---|
| REQ-STATE-004 | Initial state uses INIT, false result flags, IDLE 1000, empty message and null data, with partial overrides. | [State contract](../raw/feature/state-management.md), [hook](../raw/feature/use-data-state.md) | Code and existing tests support default and partial initialization. |
| REQ-STATE-005 | Loading preserves previous state fields except phase. | [Hook technical](../raw/feature-technical/use-data-state.md) | Code preserves flags as well as data; the technical transition table claiming false flags is inconsistent. |
| REQ-STATE-006 | A completion after unmount does not update hook state. | [Hook](../raw/feature/use-data-state.md) | Guard exists; React Strict Mode effect replay risk requires verification. |
| REQ-STATE-007 | Preserve the deprecated HttpStatusCode.IDLE alias until compatibility policy changes. | [Technical repository](../raw/feature-technical/repository.md) | Feature state document claims the alias was removed, but current enum still exports it. |
| REQ-STATE-008 | Determine how malformed or non-instance resolved responses are handled. | [Hook](../raw/feature/use-data-state.md) | Code reads properties without an instance check; the source claim that every non-instance response throws is unsupported. |
| REQ-UI-002 | Evaluate empty predicates only for successful non-null data; propagate the explicit errorMessage to the context error component. | [Handler](../raw/feature/app-state-handler.md) | Code observation and existing component tests. |
| REQ-UI-003 | Define fallback behavior for missing slots and context and clarify falsy children. | [Handler](../raw/feature/app-state-handler.md) | Null slot suppresses context; code uses truthiness for children, while raw says children provided take precedence. |
| REQ-HTTP-003 | Provide GET, POST, PUT and DELETE operations and apply request config before setting the service URL and method; POST and PUT also set their data argument afterward. | [HTTP repository](../raw/feature/repository.md) | Code uses a literal slash with no normalization; double slash does not necessarily cause server failure. Config cannot override the service URL or method. |
| REQ-HTTP-004 | Determine missing-literal behavior in getStatusMessage. | [HTTP repository](../raw/feature/repository.md), [technical repository](../raw/feature-technical/repository.md) | Raw feature claims empty string for missing key; code returns undefined for known status with absent key, empty only for unknown status. |
| REQ-IPC-002 | Forward an actual ServerResponse instance from IPC invoke and wrap other returned values as success. | [Technical repository](../raw/feature-technical/repository.md) | Code uses instanceof; behavior across bridge serialization needs runtime verification. |
| REQ-IPC-003 | Suppress send failures and return unsubscribe for receive; consumers dispose listeners. | [IPC](../raw/feature/ipc-service.md) | Code catches send exceptions; receive registration or callback exceptions can propagate. |
| REQ-IPC-004 | Define IPC service behavior in an environment without window and when an error callback throws. | [IPC](../raw/feature/ipc-service.md) | invoke catches missing-window ReferenceError, send suppresses it, receive can throw; callback exceptions can escape invoke. |
| REQ-MVVM-002 | Clearly distinguish recommended consumer layering from enforceable package behavior. | [Architecture](../raw/architecture/core/feature-structure.md), [isolation](../raw/architecture/invariants/repository-isolation.md) | No enforcement mechanism observed; consumer conventions need owner confirmation. |
| REQ-API-002 | Review root and common package export paths, declaration output and deprecated API compatibility when changing the package. | [API surface](../raw/architecture/core/api-surface.md), [import map](../raw/architecture/runtime-maps/import-resolution.md) | Actual package exports include common subpaths and built files; raw examples are incomplete and contain stale paths. |
| REQ-BUILD-002 | Evaluate reproducible builds and dependency policy before release. | [Build](../raw/architecture/invariants/deterministic-build.md), [dependency safety](../raw/architecture/invariants/dependency-safety.md) | Lockfile policy and specific pinning/license claims require a project decision; no compliance asserted. |

## Additional review questions

6. Should loading clear result flags, or preserve the entire prior state as implemented?
7. Should a null render slot deliberately suppress its context fallback, and should falsy children suppress SuccessComponent?
8. Should `getStatusMessage` provide a default for a known status with a missing literal key?
9. How should response-shaped IPC payloads be recognized across the Electron context bridge?
10. Does the hook behave correctly under React Strict Mode effect replay and after unmount?

## Source inventory

Each source is mapped to the closest topic for review. The inventory is a navigation aid, not claim-level completeness.

| Raw source | Topic | Knowledge |
|---|---|---|
| [architecture/core/feature-structure.md](../raw/architecture/core/feature-structure.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/core/mvvm-pattern.md](../raw/architecture/core/mvvm-pattern.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/core/platform-abstraction.md](../raw/architecture/core/platform-abstraction.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/invariants/boilerplate-ownership.md](../raw/architecture/invariants/boilerplate-ownership.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/invariants/mvvm-separation.md](../raw/architecture/invariants/mvvm-separation.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/invariants/repository-isolation.md](../raw/architecture/invariants/repository-isolation.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/invariants/runtime-boundary.md](../raw/architecture/invariants/runtime-boundary.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/invariants/target-consistency.md](../raw/architecture/invariants/target-consistency.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/runtime-maps/data-flow.md](../raw/architecture/runtime-maps/data-flow.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/runtime-maps/platform-runtimes.md](../raw/architecture/runtime-maps/platform-runtimes.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/integration-contracts/react.md](../raw/architecture/integration-contracts/react.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/integration-contracts/electron.md](../raw/architecture/integration-contracts/electron.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/integration-contracts/getting-started.md](../raw/architecture/integration-contracts/getting-started.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [feature/mvvm-wiring.md](../raw/feature/mvvm-wiring.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [feature-technical/mvvm-wiring.md](../raw/feature-technical/mvvm-wiring.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [external-context/prati.md](../raw/external-context/prati.md) | MVVM and runtime boundaries | [Knowledge](../../knowledge/architecture/mvvm-boundaries.md) |
| [architecture/core/hooks.md](../raw/architecture/core/hooks.md) | Async state and execution | [Knowledge](../../knowledge/concepts/async-state.md) |
| [architecture/core/state-management.md](../raw/architecture/core/state-management.md) | Async state and execution | [Knowledge](../../knowledge/concepts/async-state.md) |
| [architecture/runtime-maps/state-flow.md](../raw/architecture/runtime-maps/state-flow.md) | Async state and execution | [Knowledge](../../knowledge/concepts/async-state.md) |
| [feature/state-management.md](../raw/feature/state-management.md) | Async state and execution | [Knowledge](../../knowledge/concepts/async-state.md) |
| [feature/use-data-state.md](../raw/feature/use-data-state.md) | Async state and execution | [Knowledge](../../knowledge/concepts/async-state.md) |
| [feature-technical/state-management.md](../raw/feature-technical/state-management.md) | Async state and execution | [Knowledge](../../knowledge/concepts/async-state.md) |
| [feature-technical/use-data-state.md](../raw/feature-technical/use-data-state.md) | Async state and execution | [Knowledge](../../knowledge/concepts/async-state.md) |
| [feature/app-state-handler.md](../raw/feature/app-state-handler.md) | State rendering | [Knowledge](../../knowledge/concepts/state-rendering.md) |
| [feature-technical/app-state-handler.md](../raw/feature-technical/app-state-handler.md) | State rendering | [Knowledge](../../knowledge/concepts/state-rendering.md) |
| [architecture/core/repository.md](../raw/architecture/core/repository.md) | HTTP and IPC transports | [Knowledge](../../knowledge/concepts/transports.md) |
| [feature/repository.md](../raw/feature/repository.md) | HTTP and IPC transports | [Knowledge](../../knowledge/concepts/transports.md) |
| [feature/ipc-service.md](../raw/feature/ipc-service.md) | HTTP and IPC transports | [Knowledge](../../knowledge/concepts/transports.md) |
| [feature-technical/repository.md](../raw/feature-technical/repository.md) | HTTP and IPC transports | [Knowledge](../../knowledge/concepts/transports.md) |
| [architecture/core/api-surface.md](../raw/architecture/core/api-surface.md) | Public API and build | [Knowledge](../../knowledge/architecture/public-api-build.md) |
| [architecture/core/build.md](../raw/architecture/core/build.md) | Public API and build | [Knowledge](../../knowledge/architecture/public-api-build.md) |
| [architecture/core/dependencies.md](../raw/architecture/core/dependencies.md) | Public API and build | [Knowledge](../../knowledge/architecture/public-api-build.md) |
| [architecture/invariants/dependency-safety.md](../raw/architecture/invariants/dependency-safety.md) | Public API and build | [Knowledge](../../knowledge/architecture/public-api-build.md) |
| [architecture/invariants/deterministic-build.md](../raw/architecture/invariants/deterministic-build.md) | Public API and build | [Knowledge](../../knowledge/architecture/public-api-build.md) |
| [architecture/invariants/public-api-stability.md](../raw/architecture/invariants/public-api-stability.md) | Public API and build | [Knowledge](../../knowledge/architecture/public-api-build.md) |
| [architecture/runtime-maps/build-pipeline.md](../raw/architecture/runtime-maps/build-pipeline.md) | Public API and build | [Knowledge](../../knowledge/architecture/public-api-build.md) |
| [architecture/runtime-maps/dependency-graph.md](../raw/architecture/runtime-maps/dependency-graph.md) | Public API and build | [Knowledge](../../knowledge/architecture/public-api-build.md) |
| [architecture/runtime-maps/import-resolution.md](../raw/architecture/runtime-maps/import-resolution.md) | Public API and build | [Knowledge](../../knowledge/architecture/public-api-build.md) |

## Review questions

1. Should a future behavioral change add latest-invocation ordering? The current documentation describes completion-order behavior.
2. Should the npm lockfile be tracked and dependency ranges pinned to support the documented build policy?
3. Should transport error callbacks be allowed to throw, or must all errors be normalized?
4. Which raw rules are mandatory consumer obligations versus recommended architecture patterns?
5. Are raw API paths, package export mappings, and Prati ownership claims still current?
