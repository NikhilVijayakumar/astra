# Documentation review findings and recommendations

This is a draft review of selected high-impact claims. Source inspection describes current behavior; it does not establish stakeholder approval or exhaustive verification. The [section queue](section-review.md) remains open and the [requirements inventory](raw-inventory.md) tracks source links and IDs.

| Finding | Evidence | Recommendation |
|---|---|---|
| Overlapping calls can overwrite state in completion order. Earlier raw documents said an earlier call was discarded. | `src/common/hooks/useDataState.ts` has no request identity or cancellation guard. REQ-STATE-003 describes current behavior. | Document current behavior. If latest-invocation wins is desired, make a separate behavioral change with concurrency tests. |
| Strict Mode effect replay may leave the mount flag false after the development-only cleanup. | The hook initializes the ref once and cleanup sets it false; effect setup never resets it. REQ-STATE-006. | Add a focused Strict Mode regression test before deciding a code fix; do not claim the unmount guard works in every lifecycle without that evidence. |
| HTTP and IPC error callbacks can throw before normalization. | Both services call `onError` inside their catch blocks without guarding the callback. REQ-HTTP-001 and REQ-IPC-004. | Specify callback failure policy and test it separately before promising all failures are normalized. |
| IPC response objects may lose their class identity across a preload bridge. | `IpcService.invoke` checks `instanceof ServerResponse`; other results are wrapped as success. REQ-IPC-002. | Verify the actual Electron bridge serialization with an integration test; define a wire format if errors must cross the bridge. |
| The build documentation calls for a committed lockfile but the repository ignores it. | Raw build and dependency documents conflict with `.gitignore`. REQ-BUILD-001. | Decide lockfile and dependency policy before changing Git tracking; validate reproducibility using a clean install. |
| Raw API and status documentation includes stale assertions. | Current package exports include common subpaths; `HttpStatusCode.IDLE` still exists as deprecated; known status with a missing literal can return undefined. REQ-API-002, REQ-STATE-007 and REQ-HTTP-004. | Use the actual exports and code in current guidance; handle deprecation and fallback changes through explicit compatibility decisions. |
| HTTP options do not override the service URL or method. | `ApiService` spreads config first and sets URL and method afterward. REQ-HTTP-003. | Document that precedence precisely; avoid saying all options pass through unchanged. |
| Existing spec scenarios are examples, not proof of full requirements coverage. | The main specification and active delta cover selected IDs, while the inventory contains additional decisions and recommendations. | Add scenarios only when behavior and scope are agreed; trace unresolved items explicitly and do not archive the incomplete review as comprehensive. |

## Verification gaps

The focused suite previously passed 51 tests, but it did not prove every scenario or every claim in the raw sources. In particular, concurrency ordering, Strict Mode lifecycle, cross-process IPC serialization and throwing callbacks need targeted tests or decisions. The graph is a navigation aid, not a substitute for source review.
