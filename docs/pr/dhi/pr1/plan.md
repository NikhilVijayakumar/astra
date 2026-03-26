# DHI PR1 Integration Plan (Feasibility + Astra Alignment)

## Scope Reviewed
- Candidate inventory and contracts from PR1 docs.
- Existing Astra public component surface and architecture docs.

## Feasibility Verdict

Overall feasibility is **high**.

- **Ready for direct promotion**: 9 components
- **Promote with rename/refactor**: 3 components
- **Duplicate of existing Astra behavior**: 1 component
- **Keep in DHI feature layer (not Astra shared)**: 1 component

## Astra Standards Applied

All promoted components should follow:

1. Stateless/presentational implementation (no business state, no app orchestration).
2. Generic naming (no DHI-specific domain terms in exported names).
3. Theme/token driven styles (no hardcoded visual constants outside approved tokens).
4. Localization via props for reusable UI (avoid product-specific translation keys inside shared components).
5. Export through Astra barrels only (`src/components` or `src/common/components` as appropriate).

## Component-by-Component Feasibility and Decision

| Old Component | Feasibility | Duplicate? | Astra Decision | Proposed Generic Name |
|---|---|---|---|---|
| StatusIndicatorDot | High | No | Promote | StatusDot |
| SeverityStatusBadge | High | No | Promote | SeverityBadge |
| MetricCardWithTrend | High | No | Promote | TrendMetricCard |
| PlaceholderPage | High | Yes (`HeroSection`) | Do not promote new component; map to existing | HeroSection (existing) |
| HeaderWithPageControls | High | No | Promote | PageHeader |
| InfoSummaryPanel | High | No | Promote | SummaryPanel |
| FunctionStatusRow | High | No | Promote | StatusListRow |
| InvestorLeadRow | Medium | No | Promote after domain-neutral prop rename | EntityConfidenceRow |
| NotificationItemCard | High | No | Promote | AlertListItem |
| RequestSummaryItem | High | No | Promote | SummaryListItem |
| DecisionQueueCard | High | No (compose with Astra `Card`) | Promote | DecisionActionCard |
| AgentWeeklyReportCard | High | No (compose with Astra `Card`) | Promote | WeeklyReportCard |
| SyncHealthWidget | Medium | No | Keep in DHI feature layer (too domain-specific) | N/A |
| ReviewActionModal | Medium | No | Promote only after fully controlled/stateless refactor | ReviewDecisionDialog |

## Required Refactors Before Promotion

### 1) Remove local UI state from modal
- `ReviewActionModal` currently keeps `approveNote`, `rejectNote`, and `actionMode` internally.
- Convert to controlled props:
  - `mode`, `approveNote`, `rejectNote`
  - `onModeChange`, `onApproveNoteChange`, `onRejectNoteChange`
- Result: fully stateless reusable dialog.

### 2) Remove product-specific localization coupling
- `SyncHealthWidget` and `ReviewActionModal` currently read product translation keys internally.
- For shared Astra components, pass all labels/messages from caller props.
- If translation keys are product-specific (DHI-only), keep composition in DHI.

### 3) Domain-neutral naming and prop contracts
- Replace domain nouns in public API (example: `InvestorLeadRow` -> `EntityConfidenceRow`).
- Keep behavior same; update prop names to generic terms where needed.

## Phase-by-Phase Execution Plan

### Phase 1 — Foundation Promotion (Low risk) ✅ Implemented

Scope:
- `StatusDot`
- `SeverityBadge`
- `TrendMetricCard`
- `PageHeader`
- `SummaryPanel`
- `StatusListRow`
- `AlertListItem`
- `SummaryListItem`

Implementation done:
- Added stateless/generic components in `src/components/ui`.
- Exported all new components from `src/components/index.ts`.

Exit criteria:
1. All phase components exported via `astra/components`.
2. No product-specific imports inside shared components.
3. Type diagnostics clean for added files.

---

### Phase 2 — Composed Generic Cards (Moderate risk) ✅ Implemented

Scope:
- `DecisionActionCard`
- `WeeklyReportCard`
- `EntityConfidenceRow`

Implementation done:
- Added generic composed UI cards/rows in `src/components/ui`.
- Applied domain-neutral naming in public contracts.
- Tightened action color contract (`inherit` removed).

Exit criteria:
1. Public names are generic and reusable.
2. No business orchestration in component internals.
3. Backward migration path documented in mapping docs.

---

### Phase 3 — Special Cases (Mixed) ✅ Partially implemented by design

Scope:
- `PlaceholderPage` -> map as duplicate to Astra `HeroSection` (no new component)
- `ReviewActionModal` -> `ReviewDecisionDialog` (controlled/stateless)
- `SyncHealthWidget` -> keep local in DHI for now

Implementation done:
- Added `ReviewDecisionDialog` with controlled state contract.
- Marked `PlaceholderPage` as duplicate and mapped to existing `HeroSection`.
- Kept `SyncHealthWidget` out of Astra export intentionally (domain-specific coupling).

Exit criteria:
1. Modal contract is controlled by container/viewmodel.
2. Duplicate component avoided.
3. Deferred component has explicit decomposition plan.

## Implementation Artifacts

- Feasibility + execution plan: `docs/pr/dhi/pr1/plan.md`
- DHI mapping (human-readable): `docs/pr/dhi/pr1/Mapping-DHI.md`
- DHI mapping (machine-readable): `docs/pr/dhi/pr1/mapping-report.dhi.json`

## Code Integration Artifacts (Implemented)

- New Astra UI components added under:
  - `src/components/ui/StatusDot.tsx`
  - `src/components/ui/SeverityBadge.tsx`
  - `src/components/ui/TrendMetricCard.tsx`
  - `src/components/ui/PageHeader.tsx`
  - `src/components/ui/SummaryPanel.tsx`
  - `src/components/ui/StatusListRow.tsx`
  - `src/components/ui/EntityConfidenceRow.tsx`
  - `src/components/ui/AlertListItem.tsx`
  - `src/components/ui/SummaryListItem.tsx`
  - `src/components/ui/DecisionActionCard.tsx`
  - `src/components/ui/WeeklyReportCard.tsx`
  - `src/components/ui/ReviewDecisionDialog.tsx`

- Export surface updated:
  - `src/components/index.ts`

## Acceptance Criteria

1. DHI imports mapped components from Astra package exports only.
2. No promoted Astra component depends on DHI/Prana/Dharma modules.
3. Promoted components are stateless from business perspective.
4. Mapping report is delivered and consumed by DHI migration.
5. Typecheck and smoke validation pass in both Astra and DHI.
