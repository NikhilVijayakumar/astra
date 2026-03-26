# DHI → Astra Component Mapping (PR1)

**Status**: ✅ Ready for Integration  
**Astra Package Version**: 0.0.8  
**Date**: 2026-03-26  
**Owner**: Astra Integration Review  

## Quick Links
- [Full Handover Contract](./HANDOVER_CONTRACT.md) — Comprehensive integration guide with phases and examples
- [Machine-Readable Mapping](./mapping-report.dhi.json) — JSON artifact for tooling/CI/CD
- [Astra PR1 Plan](./plan.md) — Feasibility audit and phase-by-phase execution

---

## Mapping Table

| Old Component | New Component | Old Import | New Import | Breaking Prop Changes | Migration Notes | Priority |
|---|---|---|---|---|---|
| StatusIndicatorDot | StatusDot | `import { StatusIndicatorDot }...` | `import { StatusDot }...` | Rename only | Replace symbol name only. | **LOW** |
| SeverityStatusBadge | SeverityBadge | `import { SeverityStatusBadge }...` | `import { SeverityBadge }...` | Rename only | Keep same severity values; rename component. | **LOW** |
| MetricCardWithTrend | TrendMetricCard | `import { MetricCardWithTrend }...` | `import { TrendMetricCard }...` | Rename only | No behavioral change. | **LOW** |
| PlaceholderPage | HeroSection (duplicate) | `import { PlaceholderPage }...` | `import { HeroSection }...` | Yes: API change | Replace `headline/code` with `headline/description`; compose in container. | **MEDIUM** |
| HeaderWithPageControls | PageHeader | `import { HeaderWithPageControls }...` | `import { PageHeader }...` | Rename only | Keep action callbacks from container/viewmodel. | **LOW** |
| InfoSummaryPanel | SummaryPanel | `import { InfoSummaryPanel }...` | `import { SummaryPanel }...` | Rename only | Keep list line payload via props. | **LOW** |
| FunctionStatusRow | StatusListRow | `import { FunctionStatusRow }...` | `import { StatusListRow }...` | Rename only | Keep `health` mapped to status tone. | **LOW** |
| InvestorLeadRow | EntityConfidenceRow | `import { InvestorLeadRow }...` | `import { EntityConfidenceRow }...` | Yes: prop rename | `name`→`title`, `firm`→`secondaryLabel`, `stage`→`statusTag`. | **HIGH** |
| NotificationItemCard | AlertListItem | `import { NotificationItemCard }...` | `import { AlertListItem }...` | Rename only | Keep severity/read data controlled by parent. | **LOW** |
| RequestSummaryItem | SummaryListItem | `import { RequestSummaryItem }...` | `import { SummaryListItem }...` | Rename only | No behavior change. | **LOW** |
| DecisionQueueCard | DecisionActionCard | `import { DecisionQueueCard }...` | `import { DecisionActionCard }...` | Yes: color tightening | `color='inherit'` → `color='primary'` or omit. | **MEDIUM** |
| AgentWeeklyReportCard | WeeklyReportCard | `import { AgentWeeklyReportCard }...` | `import { WeeklyReportCard }...` | Rename only | `agent` → `owner` prop rename. | **LOW** |
| ReviewActionModal | ReviewDecisionDialog | `import { ReviewActionModal }...` | `import { ReviewDecisionDialog }...` | Yes: controlled state | Convert to controlled props; extract modal state into ViewModel. | **CRITICAL** |
| SyncHealthWidget | ⛔ Not promoted | `import { SyncHealthWidget }...` | Keep local in DHI | N/A | Deferred: keep local until domain decomposition. | **N/A** |

## Duplicate Marking

- `PlaceholderPage` is marked as **duplicate** of Astra `HeroSection` use case and should not be promoted as a new shared component.

## Migration Execution Summary

**Total Effort**: 6-9 hours (1-2 developer days)

### Phase A: Rename-Only Components (Tier 1) — 40 minutes
8 components requiring only import/symbol rename:
- StatusDot, SeverityBadge, TrendMetricCard, PageHeader, SummaryPanel, StatusListRow, AlertListItem, SummaryListItem
- Action: Find-replace all imports and usages
- Exit: TypeScript clean, smoke test passed

### Phase B: Prop Contract Refactoring (Tier 2) — 4-8 hours
4 components with breaking prop changes (start easier first):
1. **DecisionActionCard** (30 min) — `color='inherit'` → `color='primary'`
2. **WeeklyReportCard** (20 min) — `agent` → `owner`
3. **EntityConfidenceRow** (1-2 hrs) — `name/firm/stage` → `title/secondaryLabel/statusTag`
4. **ReviewDecisionDialog** (4-6 hrs) — Full controlled state refactor (ViewModel + container changes)

### Phase C: PlaceholderPage Replacement (Tier 3) — 30 minutes
- Replace all `<PlaceholderPage>` with `<HeroSection>` + composed description
- Remove DHI PlaceholderPage local component

### Phase D: Cleanup & Validation — 30 minutes
- Remove all local DHI components from `src/renderer/src/common/components/`
- Run full validation: `npm run typecheck && npm run build && npm run test`
- Smoke test all affected features in DEV

**Do NOT migrate**: Keep `SyncHealthWidget` local in DHI feature module (deferred for domain decomposition)

---

## Breaking Changes Detailed Guide

### 🔴 CRITICAL: ReviewDecisionDialog (4-6 hours)
Modal converted from internal state to **fully controlled component**.

**Old** (DHI local, stateful):
```typescript
const [actionMode, setActionMode] = useState<'idle' | 'approve' | 'reject'>('idle');
const [approveNote, setApproveNote] = useState('');
const [rejectNote, setRejectNote] = useState('');

<ReviewActionModal
  isOpen={isOpen}
  entityType="Decision"
  onApprove={() => handleApproveDecision(approveNote)}
  onReject={() => handleRejectDecision(rejectNote)}
  onCancel={() => setActionMode('idle')}
/>
```

**New** (Astra, controlled via props):
```typescript
// Extract state into ViewModel hook
const { mode, approveNote, rejectNote, setMode, setApproveNote, setRejectNote } = useReviewDecisionState();

<ReviewDecisionDialog
  isOpen={isOpen}
  mode={mode}
  approveNote={approveNote}
  rejectNote={rejectNote}
  onModeChange={setMode}
  onApproveNoteChange={setApproveNote}
  onRejectNoteChange={setRejectNote}
  onApprove={() => handleApproveDecision(approveNote)}
  onReject={() => handleRejectDecision(rejectNote)}
  onCancel={() => setMode('idle')}
/>
```

**Action**: Create new ViewModel hook, refactor decision containers to manage modal state

---

### 🟠 HIGH: EntityConfidenceRow (1-2 hours)
Domain-specific prop names renamed to generic terms.

**Old** → **New**:
- `name` → `title`
- `firm` → `secondaryLabel`
- `stage` → `statusTag`

Update all data-binding expressions in affected containers.

---

### 🟡 MEDIUM: DecisionActionCard (30 min)
Action button `color='inherit'` no longer supported.

**Replace**: `color='inherit'` → `color='primary'` or omit

---

### 🟢 LOW: Rename-Only (40 min total)
Simple find-replace for 8 components. No logic changes needed.
