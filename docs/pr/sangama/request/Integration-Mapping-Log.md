# Integration Mapping Log (Sangama ↔ Astra)

Created: 2026-03-31
Status: Awaiting Astra response

## Purpose
Live tracking document for the Sangama → Astra component promotion lifecycle. Updated at each phase transition.

## Phase Tracker

| Phase | Description | Status | Date Started | Date Completed |
|---|---|---|---|---|
| Pre-Handover | Local stateless refactor in Sangama | ✅ Complete | 2026-03-31 | 2026-03-31 |
| Request Submitted | PR request docs sent to Astra | ✅ Complete | 2026-03-31 | 2026-03-31 |
| Astra Review | Astra evaluates candidates | ⏳ Pending | — | — |
| Astra Response | Mapping report returned | ⏳ Pending | — | — |
| Phase A | Rename-only import swaps | ⏳ Pending | — | — |
| Phase B | Breaking-contract migration | ⏳ Pending | — | — |
| Phase C | Duplicate replacements | ⏳ Pending | — | — |
| Phase D | Cleanup and shim retirement | ⏳ Pending | — | — |

## Component Status Matrix

| # | Sangama Component | Original Name | Astra Decision | Astra Name | Phase | Import Updated | Local Removed | Verified |
|---|---|---|---|---|---|---|---|---|
| 1 | DynamicForm | DynamicForm | ⏳ | — | — | ☐ | ☐ | ☐ |
| 2 | CanvasNote | NoteNode | ⏳ | — | — | ☐ | ☐ | ☐ |
| 3 | CanvasGroup | GroupNode | ⏳ | — | — | ☐ | ☐ | ☐ |
| 4 | ThemeToggle | ThemeToggle | ⏳ | — | — | ☐ | ☐ | ☐ |
| 5 | StatusCard | ConnectionCard | ⏳ | — | — | ☐ | ☐ | ☐ |
| 6 | HistoryDropdown | VersionSelector | ⏳ | — | — | ☐ | ☐ | ☐ |
| 7 | FileTree | StorageTree | ⏳ | — | — | ☐ | ☐ | ☐ |
| 8 | StatusTable | ExecutionList | ⏳ | — | — | ☐ | ☐ | ☐ |
| 9 | CodeViewer | FilePreview | ⏳ | — | — | ☐ | ☐ | ☐ |
| 10 | TerminalViewer | LogTerminal | ⏳ | — | — | ☐ | ☐ | ☐ |

## Name Change Log

_To be filled when Astra returns mapping report._

| Sangama Name | Astra Name | Breaking Changes | Notes |
|---|---|---|---|
| — | — | — | — |

## Validation Checkpoints

### Pre-Handover (Complete)
- [x] All 10 components relocated to `src/renderer/src/common/components/`
- [x] All domain imports removed
- [x] All `useLanguage()`/`useSettings()` calls replaced with props
- [x] All hardcoded data externalized
- [x] All internal state controlled (CanvasNote editing, StatusCard loading)
- [x] All 7 consuming files updated via thin wrappers
- [x] Feature-level wrappers preserve backward compatibility

### Post-Astra Integration (Pending)
- [ ] Astra mapping report received
- [ ] Phase A imports swapped
- [ ] Phase B contract migrations applied
- [ ] Phase C duplicate replacements done
- [ ] Phase D local cleanup completed
- [ ] Final typecheck passes
- [ ] Local `src/renderer/src/common/components/` cleared (promoted only)

## Astra Response Metadata

_To be filled when Astra responds._

- Astra package version: —
- Astra commit/tag: —
- Response date: —
- PR reference: —
