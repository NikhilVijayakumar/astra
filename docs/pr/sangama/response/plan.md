# Astra Plan and Deep Analysis (Sangama Request)

Date: 2026-04-01

## Analysis Method

1. Reviewed all Sangama request docs (Astra-PR-Specification, Component-Audit-Manifest, Integration-Mapping-Log).
2. Read all 9 submitted component source files (DynamicForm source was absent).
3. Audited current Astra component export surface: 30 UI components + 5 file-viewer components.
4. Applied statelessness, atomicity, theme compliance, and duplicate-overlap criteria.
5. Selected implementation targets where reusable boundaries were clear.
6. Rejected net-new duplicates where Astra already had equivalent or superior behavior.

## Fit Analysis By Candidate Group

### Atomic

- **CanvasNote**: Fit HIGH. Unique canvas note pattern. Internal `useState` for edit-mode toggle is acceptable UI presentation state, not business logic. Hardcoded colors (#fff9c4, #fbc02d, #f57f17) **violated Astra theme-token standard** — refactored to use `theme.palette.warning.*` and `theme.palette.grey` tokens.
- **CanvasGroup**: Fit HIGH. Unique canvas grouping container. Stateless (uses uncontrolled `defaultValue`). Hardcoded colors (#eee, #ccc, #666, rgba) **violated Astra theme-token standard** — refactored to use `theme.palette.grey`, `theme.palette.divider`, and mode-aware backgrounds.
- **ThemeToggle**: Fit NONE. Imports `useTheme` from Astra directly. This is a 10-line trivial wrapper, not a reusable library primitive. Rejected.
- **DynamicForm**: **CANNOT EVALUATE** — source file not included in `docs/pr/sangama/components/`. Specification lists it but no implementation was delivered. Deferred.

### Molecular

- **StatusCard**: Fit HIGH after renaming to StatusActionCard. Internal `useState` for async loading indicators is acceptable UI state. Well-structured with theme tokens. No Astra equivalent for this status-with-actions pattern.
- **HistoryDropdown**: Fit HIGH after renaming to VersionHistorySelector. Fully stateless, well-structured. No Astra equivalent for version history selection.
- **FileTree**: Fit HIGH. Already domain-neutral name and fully controlled state. No Astra equivalent for recursive file trees.
- **StatusTable**: Fit LOW — **duplicate** of Astra's `DataTable`. DataTable's generic `Column<T>` with `render` function is strictly more flexible. StatusTable's fixed `StatusTableRow` shape with hardcoded status chip is a specialized subset achievable via DataTable's render prop.

### Organism

- **CodeViewer**: Fit LOW — **duplicate** of Astra's file-viewer infrastructure. `FileViewerRouter` + `JsonViewer` + `MdViewer` covers JSON and Markdown rendering. YAML/TOML is not yet supported but should be added as an extension to FileViewerRouter, not as a parallel system.
- **TerminalViewer**: Fit HIGH. Unique log terminal display with level-colored entries. No Astra equivalent. Already domain-neutral.

## General Naming Outcomes

- CanvasNote → CanvasNote (kept — already generic to canvas domain)
- CanvasGroup → CanvasGroup (kept — already generic to canvas domain)
- StatusCard → StatusActionCard (clarify action-equipped status card vs basic status primitives)
- HistoryDropdown → VersionHistorySelector (more descriptive, domain-neutral)
- FileTree → FileTree (kept — standard naming)
- TerminalViewer → TerminalViewer (kept — standard naming)

## Implementation Footprint

- Added 6 new reusable components to Astra `src/components/ui/`.
- Updated `src/components/index.ts` export barrel.
- Produced complete response artifacts for Sangama mapping and migration.

## Quality Refactoring Applied

- CanvasNote: Replaced 3 hardcoded hex colors with MUI `warning.*` and `grey.*` theme tokens.
- CanvasGroup: Replaced 4 hardcoded colors with MUI `grey`, `divider`, and mode-aware opacity backgrounds.
- All accepted components: Verified import paths resolve to Astra's `../../theme/tokens/spacing`.
