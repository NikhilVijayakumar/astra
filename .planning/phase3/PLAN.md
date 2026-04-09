# Phase 3 Plan: Security & Polish

**Project:** Astra
**Phase:** 3 of 3
**Status:** Planning

---

## Current Issues

| File                | Issue                         | Line   |
| ------------------- | ----------------------------- | ------ |
| `ThemeProvider.tsx` | No try-catch on localStorage  | 24, 37 |
| `ThemeProvider.tsx` | No validation of stored value | 24     |
| `ApiService.ts`     | Already fixed in Phase 1      | -      |

---

## Task 3.1: localStorage Error Handling

**File:** `src/common/theme/ThemeProvider.tsx`

**Changes:**

- Wrap `localStorage.getItem()` in try-catch
- Wrap `localStorage.setItem()` in try-catch
- Handle `QuotaExceededError`
- Handle private browsing mode (throws DOMException)
- Default to light theme on any error

---

## Task 3.2: Validate Stored Theme Values

**File:** `src/common/theme/ThemeProvider.tsx`

**Changes:**

- Only accept `'true'` or `'false'` as valid values
- Default to `false` for any other value
- Use strict equality check

---

## Task 3.3: Bundle Size Documentation

**Deliverable:** Document bundle size in CONCERNS.md or README

**Findings:**

- ESM bundle: 1.4MB (411KB gzipped)
- UMD bundle: 967KB (333KB gzipped)
- Tree-shaking: Works (verified - only imports used are bundled)

---

## Success Criteria

- [ ] ThemeProvider handles localStorage errors gracefully
- [ ] ThemeProvider validates stored values
- [ ] Bundle size documented
- [ ] Tests pass
- [ ] Build passes

---
