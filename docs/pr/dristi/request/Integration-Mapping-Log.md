# Integration Mapping Log (Drishti <-> Astra)

Created: 2026-03-31
Status: Awaiting Astra response

## Purpose
Live tracking document for the Drishti → Astra component promotion lifecycle. Updated at each phase transition.

## Phase Tracker

| Phase | Description | Status | Date Started | Date Completed |
|---|---|---|---|---|
| Pre-Handover | Local stateless refactor in Drishti | ✅ Complete | 2026-03-31 | 2026-03-31 |
| Request Submitted | PR request docs sent to Astra | ✅ Complete | 2026-03-31 | 2026-03-31 |
| Astra Review | Astra evaluates candidates | ⏳ Pending | — | — |
| Astra Response | Mapping report returned | ⏳ Pending | — | — |
| Phase A | Rename-only import swaps | ⏳ Pending | — | — |
| Phase B | Breaking-contract migration | ⏳ Pending | — | — |
| Phase C | Duplicate replacements | ⏳ Pending | — | — |
| Phase D | Cleanup and shim retirement | ⏳ Pending | — | — |

## Component Status Matrix

| # | Drishti Component | Astra Decision | Astra Name | Phase | Import Updated | Local Removed | Verified |
|---|---|---|---|---|---|---|---|
| 1 | ScrollProgress | ⏳ | — | — | ☐ | ☐ | ☐ |
| 2 | FlowStep | ⏳ | — | — | ☐ | ☐ | ☐ |
| 3 | HeritageLetter | ⏳ | — | — | ☐ | ☐ | ☐ |
| 4 | ThemeToggle | ⏳ | — | — | ☐ | ☐ | ☐ |
| 5 | SegmentCard | ⏳ | — | — | ☐ | ☐ | ☐ |
| 6 | TrackCard | ⏳ | — | — | ☐ | ☐ | ☐ |
| 7 | PrincipleItem | ⏳ | — | — | ☐ | ☐ | ☐ |
| 8 | PersonaCard | ⏳ | — | — | ☐ | ☐ | ☐ |
| 9 | TimelineNode | ⏳ | — | — | ☐ | ☐ | ☐ |
| 10 | AudioPlayer | ⏳ | — | — | ☐ | ☐ | ☐ |
| 11 | FlowVisualizer | ⏳ | — | — | ☐ | ☐ | ☐ |

## Name Change Log

_To be filled when Astra returns mapping report._

| Drishti Name | Astra Name | Breaking Changes | Notes |
|---|---|---|---|
| — | — | — | — |

## Validation Checkpoints

### Pre-Handover (Complete)
- [x] All 11 components relocated to `src/common/components/`
- [x] All domain imports removed
- [x] All `useSettings()` replaced with `t` prop
- [x] All hardcoded icon maps externalized
- [x] All internal state externalized (AudioPlayer, FlowVisualizer)
- [x] All 7 consuming files updated
- [x] `tsc -b && vite build` passes

### Post-Astra Integration (Pending)
- [ ] Astra mapping report received
- [ ] Phase A imports swapped
- [ ] Phase B contract migrations applied
- [ ] Phase C duplicate replacements done
- [ ] Phase D local cleanup completed
- [ ] Final `tsc -b && vite build` passes
- [ ] Playwright e2e tests pass
- [ ] Local `src/common/components/` cleared (promoted only)

## Astra Response Metadata

_To be filled when Astra responds._

- Astra package version: —
- Astra commit/tag: —
- Response date: —
- PR reference: —
