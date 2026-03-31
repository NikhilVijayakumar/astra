# Handover Contract (Drishti -> Astra)

## Purpose
Define responsibilities and safety gates for promoting reusable UI from Drishti common surfaces into Astra, then re-importing mapped Astra components back into Drishti with controlled cleanup.

## 1. Inputs from Drishti (Mandatory)
Drishti provides:
- Candidate inventory and lane decisioning:
  - `docs/pr/astra/request/Component-Inventory.md`
- Layered component contracts:
  - `docs/pr/astra/request/01-Atomic-Elements.md`
  - `docs/pr/astra/request/02-Molecular-Layouts.md`
  - `docs/pr/astra/request/03-Organism-Complex-UI.md`
- Mapping templates to be returned by Astra:
  - `docs/pr/astra/request/Mapping-Template.md`
  - `docs/pr/astra/request/mapping-report.template.json`
- Validation intent:
  - atomic/stateless-first policy
  - no business behavior change request
  - all candidates pre-refactored with zero domain coupling

## 2. Astra Responsibilities
Astra may:
- Rename components to Astra naming conventions.
- Reorganize file topology.
- Replace internal implementation details.

Astra must preserve:
- Behavioral intent described in user stories.
- Equivalent public behavior or explicit migration guidance when contracts change.
- Accessibility and localization compatibility.
- Stateless business contract for promoted shared UI.

## 3. Astra Return Obligations (Mandatory)
Astra must return completed mapping artifacts in at least one format:
- `docs/pr/astra/response/Mapping-Drishti.md`
- `docs/pr/astra/response/mapping-report.drishti.json`

Required return fields per component:
1. old component name
2. new Astra component name
3. old import
4. new import
5. status: mapped | duplicate | deferred | rejected | blocked
6. execution phase (A/B/C/D)
7. priority (LOW/MEDIUM/HIGH/CRITICAL)
8. effort estimate
9. breaking changes taxonomy
10. migration notes
11. Astra package version and commit/tag metadata
12. rationale for any dropped/deferred candidate

## 4. Review States and Decision Semantics
Each candidate must be marked by Astra as one of:
- **Approved**: direct promotion accepted.
- **Approved with rename**: promotion accepted with symbol/path rename.
- **Approved with breaking change**: accepted but requires consuming-app refactor.
- **Duplicate mapped**: no new component added; map to existing Astra component.
- **Deferred/Rejected**: not integrated now; include explicit reason and future path.

## 5. Re-import Contract for Drishti (Post-Astra)
Drishti follows deterministic phases:

### Phase A - Rename-only import swaps
- Replace imports and symbols where no contract delta exists.
- Run typecheck after batch.

### Phase B - Breaking-contract migration
- Apply container/viewmodel updates for controlled state or prop changes.
- Validate behavior on impacted routes.

### Phase C - Duplicate replacements
- Replace local/common component usages with mapped Astra equivalents.

### Phase D - Cleanup and shim retirement
- Remove local/common promoted components only after parity checks pass.
- Keep temporary wrappers only for controlled rollout and remove in follow-up cleanup.

## 6. Safety Gates (Go/No-Go)
Progress to next phase only when current phase passes:
1. Typecheck clean for impacted modules.
2. Build validation passes (or baseline known issue documented separately).
3. UI smoke checks pass for affected routes.
4. No unresolved imports to removed local/common components.

## 7. Acceptance Checklist
Promotion cycle is complete when:
- Approved candidates import from Astra in Drishti.
- Mapping artifacts are archived with versioned metadata.
- Deferred/rejected items include rationale and revisit trigger.
- Local/common duplicates are removed where mapped.
- Validation gates pass.
