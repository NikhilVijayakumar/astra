# Phase 1 Plan: Type Safety & Exports

**Project:** Astra
**Phase:** 1 of 3
**Status:** Planning

---

## Task 1.1: Fix ApiService Generics

**Files:** `src/common/repo/ApiService.ts`

**Changes:**

- Line 73: `data?: any` → `data?: unknown`
- Line 86: `data?: any` → `data?: unknown`

**Verification:**

- `npm run build` succeeds
- `npm run lint` passes
- No TypeScript errors

---

## Task 1.2: Remove console.log

**Files:** `src/common/repo/ApiService.ts`

**Changes:**

- Line 39: `console.log(error)` → `console.error('API Error:', error.message)`

**Verification:**

- No `console.log` in production code
- `npm run lint` passes

---

## Task 1.3: Export Surface Audit

**Finding:** Missing exports do NOT exist in codebase

| Export                    | Status         | Action                                 |
| ------------------------- | -------------- | -------------------------------------- |
| `useOnboardingActionGate` | Does not exist | Document as unsupported OR create stub |
| `OnboardingActionGate`    | Does not exist | Document as unsupported OR create stub |
| `DynamicProfileRenderer`  | Does not exist | Document as unsupported OR create stub |

**Recommendation:** Add note to README that these are internal/experimental and not part of public API.

**Verification:**

- README updated with export contract
- `npm run build` succeeds

---

## Execution Order

1. Fix ApiService generics (`data?: any` → `data?: unknown`)
2. Remove console.log
3. Update README export documentation
4. Run tests and build verification
5. Create commit

---

## Success Criteria

- [ ] `data?: any` replaced with `data?: unknown` in ApiService
- [ ] No `console.log` in ApiService
- [ ] README documents actual export surface
- [ ] `npm run build` passes
- [ ] `npm run lint` passes

---
