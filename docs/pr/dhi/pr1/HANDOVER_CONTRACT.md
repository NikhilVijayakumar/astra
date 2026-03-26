# DHI ← Astra PR1 Component Promotion: Handover Contract

**Date**: 2026-03-26  
**Astra Package Version**: 0.0.8  
**Status**: Ready for DHI Integration  
**Owner**: Astra Integration Review  

---

## Executive Summary

This document serves as the **handover contract** for DHI to consume 12 promoted UI components now available in the Astra shared component library.

**What DHI receives**:
- 12 generic, stateless UI components (previously DHI-local)
- Type-safe TypeScript contracts
- Generic naming aligned to Astra standards
- Comprehensive prop documentation
- Migration path with prop breaking-change details

**What DHI must do**:
1. Update imports from DHI local paths to `astra/components` barrel
2. Rename component symbols (generics replace domain-specific names)
3. Refactor prop contracts for 4 components with breaking changes
4. Validate types with `tsc` after migration
5. Smoke test affected features

**Timeline**: Estimated 1-2 developer days for full integration + validation

---

## Component Inventory & Migration Path

### Tier 1: Simple Rename (No Prop Changes) — 8 Components

These components are **drop-in replacements** requiring only import/symbol renaming:

| Component | Old Name | New Name | Old Import | New Import | Migration Effort | Status |
|---|---|---|---|---|---|---|
| Status Dot | `StatusIndicatorDot` | `StatusDot` | `@/common/components` | `astra/components` | < 5 min | ✅ Ready |
| Severity Badge | `SeverityStatusBadge` | `SeverityBadge` | `@/common/components` | `astra/components` | < 5 min | ✅ Ready |
| Trend Metric | `MetricCardWithTrend` | `TrendMetricCard` | `@/common/components` | `astra/components` | < 5 min | ✅ Ready |
| Page Header | `HeaderWithPageControls` | `PageHeader` | `@/common/components` | `astra/components` | < 5 min | ✅ Ready |
| Summary Panel | `InfoSummaryPanel` | `SummaryPanel` | `@/common/components` | `astra/components` | < 5 min | ✅ Ready |
| Status List Row | `FunctionStatusRow` | `StatusListRow` | `@/common/components` | `astra/components` | < 5 min | ✅ Ready |
| Alert List Item | `NotificationItemCard` | `AlertListItem` | `@/common/components` | `astra/components` | < 5 min | ✅ Ready |
| Summary List Item | `RequestSummaryItem` | `SummaryListItem` | `@/common/components` | `astra/components` | < 5 min | ✅ Ready |

**Migration template** (rename-only):
```typescript
// BEFORE:
import { StatusIndicatorDot } from '@/common/components';
<StatusIndicatorDot state="success" />

// AFTER:
import { StatusDot } from 'astra/components';
<StatusDot tone="success" />
```

**Effort**: ~40 minutes for all 8 components if using find-replace

---

### Tier 2: Prop Contract Refactoring (Breaking Changes) — 4 Components

These components require **prop name/contract changes** and container state refactoring:

#### 1️⃣ **EntityConfidenceRow** (replaces `InvestorLeadRow`)

**Breaking Changes**:
- `firm` → `secondaryLabel` (generic domain noun removal)
- `stage` → `statusTag` (status value representation)  
- `name` → `title` (universal naming)

**Before** (DHI local):
```typescript
import { InvestorLeadRow } from '@/common/components';

<InvestorLeadRow
  name="Acme Corp"
  firm="Tech"
  stage="Series A"
  confidence={87}
/>
```

**After** (Astra):
```typescript
import { EntityConfidenceRow } from 'astra/components';

<EntityConfidenceRow
  title="Acme Corp"
  secondaryLabel="Tech"
  statusTag="Series A"
  confidence={87}
/>
```

**Effort**: 30 min per usage site + validation

**Search pattern** (find all usages): `<InvestorLeadRow`

---

#### 2️⃣ **DecisionActionCard** (replaces `DecisionQueueCard`)

**Breaking Changes**:
- Action `color='inherit'` no longer supported
- Use `color='primary'` (default) or omit for themed button

**Before** (DHI local):
```typescript
import { DecisionQueueCard } from '@/common/components';

<DecisionQueueCard
  actions={[
    { label: 'Approve', onClick: onApprove, color: 'inherit' },
    { label: 'Reject', onClick: onReject, color: 'inherit' }
  ]}
/>
```

**After** (Astra):
```typescript
import { DecisionActionCard } from 'astra/components';

<DecisionActionCard
  actions={[
    { label: 'Approve', onClick: onApprove, color: 'primary' },
    { label: 'Reject', onClick: onReject }  // omit if not needed
  ]}
/>
```

**Effort**: 15 min per usage site (simple find-replace `color="inherit"` → `color="primary"`)

**Search pattern**: `<DecisionQueueCard` OR `color="inherit"`

---

#### 3️⃣ **WeeklyReportCard** (replaces `AgentWeeklyReportCard`)

**Breaking Changes**:
- `agent` prop → `owner` (remove domain coupling)
- All other props unchanged

**Before** (DHI local):
```typescript
import { AgentWeeklyReportCard } from '@/common/components';

<AgentWeeklyReportCard
  agent="Alice Chen"
  improvements={[...]}
  slips={[...]}
  risks={[...]}
/>
```

**After** (Astra):
```typescript
import { WeeklyReportCard } from 'astra/components';

<WeeklyReportCard
  owner="Alice Chen"
  improvements={[...]}
  slips={[...]}
  risks={[...]}
/>
```

**Effort**: 20 min (simple prop rename in affected containers)

**Search pattern**: `<AgentWeeklyReportCard` OR `agent=`

---

#### 4️⃣ **ReviewDecisionDialog** (replaces `ReviewActionModal`) ⚠️ **MAJOR REFACTORING**

**Breaking Changes** (Full controlled component migration):
- Modal now **fully controlled** by container/ViewModel
- Internal state removed; all state via props
- New prop contract for mode, notes, and change callbacks

**Key Prop Changes**:
| Old Prop | New Prop | Type | Notes |
|---|---|---|---|
| `isOpen` | `isOpen` | boolean | ✅ Same |
| `entityType` | `entityType` | string | ✅ Same |
| `entityName` | `entityName` | string | ✅ Same |
| `entitySummary` | `entitySummary` | string | ✅ Same |
| `(internal state)` | `mode` | 'idle' \| 'approve' \| 'reject' | 🔴 **Must manage in ViewModel** |
| `(internal state)` | `approveNote` | string | 🔴 **Must manage in ViewModel** |
| `(internal state)` | `rejectNote` | string | 🔴 **Must manage in ViewModel** |
| `onApprove(note)` | `onApprove()` + `onModeChange('approve')` | callbacks | 🔴 **Refactored** |
| `onReject(note)` | `onReject()` + `onModeChange('reject')` | callbacks | 🔴 **Refactored** |
| `(internal)` | `onModeChange(mode)` | callback | 🟡 **New** |
| `(internal)` | `onApproveNoteChange(note)` | callback | 🟡 **New** |
| `(internal)` | `onRejectNoteChange(note)` | callback | 🟡 **New** |

**Before** (DHI local — internal state):
```typescript
// ReviewActionModal.tsx (DHI local, stateful)
const [actionMode, setActionMode] = useState<'idle' | 'approve' | 'reject'>('idle');
const [approveNote, setApproveNote] = useState('');
const [rejectNote, setRejectNote] = useState('');

<ReviewActionModal
  isOpen={isOpen}
  entityType="Decision"
  entityName={decisionTitle}
  onApprove={() => handleApproveDecision(approveNote)}
  onReject={() => handleRejectDecision(rejectNote)}
  onCancel={() => setActionMode('idle')}
/>
```

**After** (Astra — fully controlled):
```typescript
// ReviewDecisionViewModel.ts (new hook — manages modal state)
const useReviewDecisionState = () => {
  const [mode, setMode] = useState<'idle' | 'approve' | 'reject'>('idle');
  const [approveNote, setApproveNote] = useState('');
  const [rejectNote, setRejectNote] = useState('');
  
  return { mode, approveNote, rejectNote, setMode, setApproveNote, setRejectNote };
};

// DecisionContainer.tsx (container — orchestrates ViewModel)
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

**Effort**: 4-6 hours per integration point (new ViewModel + container refactor)

**Search pattern**: `<ReviewActionModal` + review all decision flows

**Steps**:
1. Extract modal state into new ViewModel hook or container state
2. Pass all modal state + setters as controlled props
3. Update callback handlers to work with controlled state
4. Test approval/rejection flows in DEV environment

---

### Tier 3: Direct Replacement (No Code Changes) — 1 Component

#### **HeroSection** (replaces `PlaceholderPage`)

**No new component created** (mapped to existing Astra `HeroSection`).

**Before** (DHI local):
```typescript
import { PlaceholderPage } from '@/common/components';

<PlaceholderPage 
  headline="No Data" 
  code="ERR_NO_RECORDS" 
/>
```

**After** (Astra):
```typescript
import { HeroSection } from 'astra/components';

<HeroSection 
  headline="No Data" 
  description={getPlaceholderMessage('ERR_NO_RECORDS')}  // compose in container
/>
```

**Effort**: < 10 min per usage (prop rename + optional description composition in container)

**Search pattern**: `<PlaceholderPage`

---

### Tier 4: Keep Local (Not Promoted) — 1 Component

#### **SyncHealthWidget** ⛔ **Do NOT migrate**

**Status**: Intentionally deferred from Astra (too domain-specific).

**Reason**: Tightly coupled to DHI sync orchestration and product localization keys.

**Action**: Keep local in DHI feature module until:
1. Sync orchestration decomposed into reusable state contract
2. All labels become prop-driven (no internal translation key coupling)
3. Separation of concerns: display primitives ← data orchestration

**Timeline**: Review for next Astra promotion cycle (post DHI refactor).

---

## Migration Execution Plan

### Phase A: Rename-Only Components (Tier 1) — 40 minutes

**Steps**:
1. Search-replace: `import { StatusIndicatorDot }` → `import { StatusDot }`
2. Repeat for all 8 Tier 1 components
3. Validate: `npm run typecheck`
4. Smoke test: Run dev server, visually verify renamed components render

**Commands**:
```bash
# Find all usages
grep -r "StatusIndicatorDot\|SeverityStatusBadge\|MetricCardWithTrend\|HeaderWithPageControls\|InfoSummaryPanel\|FunctionStatusRow\|NotificationItemCard\|RequestSummaryItem" src/

# Bulk rename (use editor find-replace or sed script)
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/StatusIndicatorDot/StatusDot/g'
# Repeat for each component...
```

**Exit Criteria**:
- All imports updated ✅
- TypeScript clean ✅
- Visual smoke test passed ✅

---

### Phase B: Prop Contract Refactoring (Tier 2) — 4-8 hours

**Order of execution** (risk-based, easier first):

1. **DecisionActionCard** (30 min)
   - Find: `<DecisionQueueCard`
   - Rename: `color="inherit"` → `color="primary"`
   
2. **WeeklyReportCard** (20 min)
   - Find: `<AgentWeeklyReportCard`
   - Rename: `agent={` → `owner={`

3. **EntityConfidenceRow** (1-2 hours)
   - Find: `<InvestorLeadRow`
   - Refactor props: `name`→`title`, `firm`→`secondaryLabel`, `stage`→`statusTag`
   - Update all data-binding expressions

4. **ReviewDecisionDialog** (4-6 hours) ⚠️ **Do this last**
   - Extract modal state into ViewModel hook
   - Convert all modals from internal state to controlled props
   - Test approval/rejection flows end-to-end
   - Validate with integration tests

**Exit Criteria**:
- All prop renames applied ✅
- Container/ViewModel state management refactored ✅
- TypeScript clean ✅
- All affected features tested in DEV ✅

---

### Phase C: PlaceholderPage → HeroSection (Tier 3) — 30 minutes

**Steps**:
1. Find all: `<PlaceholderPage`
2. Replace with: `<HeroSection headline="..." description={getPlaceholderMessage(...)}`
3. Remove DHI PlaceholderPage import and local component usage

**Exit Criteria**:
- All PlaceholderPage usages replaced ✅
- TypeScript clean ✅
- Placeholder screens render correctly ✅

---

### Phase D: Cleanup & Validation — 30 minutes

**Steps**:
1. **Remove local DHI components** from `src/renderer/src/common/components/`:
   - `StatusIndicatorDot.tsx`
   - `SeverityStatusBadge.tsx`
   - `MetricCardWithTrend.tsx`
   - `HeaderWithPageControls.tsx`
   - `InfoSummaryPanel.tsx`
   - `FunctionStatusRow.tsx`
   - `InvestorLeadRow.tsx`
   - `NotificationItemCard.tsx`
   - `RequestSummaryItem.tsx`
   - `DecisionQueueCard.tsx`
   - `AgentWeeklyReportCard.tsx`
   - `ReviewActionModal.tsx`
   - `PlaceholderPage.tsx`

2. **Update export barrels**: Remove exports from DHI local barrel files

3. **Run full validation**:
   ```bash
   npm run typecheck      # TypeScript validation
   npm run lint           # Linting
   npm run build          # Build validation
   npm run test           # Unit tests (if any)
   ```

4. **Smoke test**:
   - Launch dev server
   - Navigate all affected features
   - Verify no console errors
   - Check component rendering

**Exit Criteria**:
- All local components removed ✅
- TypeScript clean ✅
- Build succeeds ✅
- No console errors in DEV ✅
- Smoke tests passed ✅

---

## Prop Contract Reference

### Breaking Changes Summary Table

| Component | Breaking Change | Mitigation | Priority |
|---|---|---|---|
| `EntityConfidenceRow` | `firm`→`secondaryLabel`, `stage`→`statusTag`, `name`→`title` | Update all data-binding in affected containers | **HIGH** |
| `DecisionActionCard` | `color='inherit'` unsupported | Replace with `color='primary'` or omit | **MEDIUM** |
| `ReviewDecisionDialog` | Full controlled state refactor | Extract modal state into ViewModel; pass as controlled props | **CRITICAL** |
| `WeeklyReportCard` | `agent`→`owner` | Simple prop rename in data-binding | **LOW** |
| `PlaceholderPage` | Mapped to `HeroSection`; props renamed | Compose description in container instead of using code | **MEDIUM** |

---

## Import Locations Reference

**Astra export barrel** (single source of truth for new components):
```typescript
// astra/components
export * from './ui/StatusDot';
export * from './ui/SeverityBadge';
export * from './ui/TrendMetricCard';
export * from './ui/PageHeader';
export * from './ui/SummaryPanel';
export * from './ui/StatusListRow';
export * from './ui/EntityConfidenceRow';
export * from './ui/AlertListItem';
export * from './ui/SummaryListItem';
export * from './ui/DecisionActionCard';
export * from './ui/WeeklyReportCard';
export * from './ui/ReviewDecisionDialog';
export * from './ui/HeroSection';  // (existing)
```

**All imports from DHI should use**:
```typescript
import { StatusDot, SeverityBadge, ... } from 'astra/components';
```

**NOT**:
```typescript
// ❌ WRONG: direct file imports bypass barrel
import { StatusDot } from 'astra/src/components/ui/StatusDot';

// ❌ WRONG: old local paths
import { StatusIndicatorDot } from '@/common/components';
```

---

## Validation Checklist

- [ ] All Tier 1 (rename-only) components migrated
- [ ] All Tier 2 (prop changes) refactored and tested
- [ ] All Tier 3 (PlaceholderPage) replaced with HeroSection
- [ ] SyncHealthWidget confirmed kept local (not migrated)
- [ ] Local DHI components removed from codebase
- [ ] `npm run typecheck` passes
- [ ] `npm run build` succeeds
- [ ] Dev server launches without errors
- [ ] All affected features smoke-tested in DEV
- [ ] No console errors in browser DevTools
- [ ] Code review completed and approved

---

## Support & Questions

**Mapping reference** (detailed component-by-component):
- Human-readable: [Mapping-DHI.md](./Mapping-DHI.md)
- Machine-readable JSON: [mapping-report.dhi.json](./mapping-report.dhi.json)

**Implementation details** (Astra components):
- Location: `src/components/ui/` in Astra repository
- TypeScript types: Fully exported from each component file
- Styling: All theme/token driven (MUI palette, Astra spacing tokens)

**Review & feedback**:
- Component type definitions and prop contracts finalized
- Backward compatibility reviewed for each breaking change
- Build validation passed (Astra side)
- Ready for DHI production integration

---

## Timeline Estimate

| Phase | Components | Effort | Owner |
|---|---|---|---|
| **A: Rename-Only** | 8 components | 40 min | One developer |
| **B: Prop Refactoring** | 4 components | 4-8 hours | One developer (ReviewDecisionDialog extends timeline) |
| **C: PlaceholderPage** | 1 component | 30 min | One developer |
| **D: Cleanup & Validation** | All | 30 min | One developer |
| **Total** | **14 components** | **6-9 hours** | **1 developer** |

**Recommended sequence**: Parallel rename (Tier 1) + prop refactoring (Tier 2) over 1-2 days, then cleanup.

---

## Go/No-Go Criteria

✅ **Go conditions**:
- Astra build passes (TypeScript + declaration files) ✅
- All 12 promoted components exported cleanly ✅
- Mapping documentation complete and reviewed ✅
- No regressions in Astra package ✅

✅ **DHI readiness**:
- Type-safe TypeScript contracts available ✅
- Prop contract changes documented with examples ✅
- Migration sequence clear and prioritized ✅
- Rollback plan (keep local copies until validated) ✅

**Ready for DHI integration**: **2026-03-26**

---

## Appendix: Quick Ref Commands

**Find all old component usages** (grep pattern):
```bash
grep -r "StatusIndicatorDot\|SeverityStatusBadge\|MetricCardWithTrend\|HeaderWithPageControls\|InfoSummaryPanel\|FunctionStatusRow\|InvestorLeadRow\|NotificationItemCard\|RequestSummaryItem\|DecisionQueueCard\|AgentWeeklyReportCard\|ReviewActionModal\|PlaceholderPage" src/ --include="*.tsx" --include="*.ts"
```

**Bulk rename example** (StatusIndicatorDot → StatusDot):
```bash
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/StatusIndicatorDot/StatusDot/g' {} \;
```

**TypeScript validation**:
```bash
npm run typecheck
```

**Full build validation**:
```bash
npm run build
```

**Dev environment**:
```bash
npm run dev
```

---

**End of Handover Contract**
