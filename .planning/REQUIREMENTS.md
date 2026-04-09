# Requirements: Astra Quality Improvements

**Date:** 2026-04-09
**Goal:** Improve library quality without breaking changes
**Type:** Boilerplate Library (not application)

---

## Phase 1: Type Safety & Exports

### R1.1: Fix ApiService Type Gaps

- **Description:** Replace `data?: any` with generic types
- **Acceptance Criteria:**
  - `post<T>()` and `put<T>()` use generic type parameters
  - No `any` types in public API methods
  - Backward compatible with existing consumers
- **Files:** `src/common/repo/ApiService.ts`
- **Priority:** Critical
- **Effort:** Low

### R1.2: Remove console.log from ApiService

- **Description:** Replace verbose logging with structured approach
- **Acceptance Criteria:**
  - No `console.log` calls in production code
  - Errors logged to console.error with sanitized message
  - Stack traces never exposed to consumers
- **Files:** `src/common/repo/ApiService.ts`
- **Priority:** High
- **Effort:** Low

### R1.3: Export Surface Audit

- **Description:** Ensure all required exports are in main bundle
- **Acceptance Criteria:**
  - `useOnboardingActionGate` exportable
  - `OnboardingActionGate` exportable
  - `DynamicProfileRenderer` exportable
  - All documented subpath exports work (`astra/theme`, `astra/components`, etc.)
  - No TypeScript errors for known consumers
- **Files:** `src/common/index.ts`, `src/components/index.ts`, `package.json`
- **Priority:** High
- **Effort:** Medium

---

## Phase 2: Testing & Coverage

### R2.1: Increase Component Test Coverage

- **Description:** Add tests for UI components
- **Acceptance Criteria:**
  - Critical components have >80% coverage
  - All stateful components tested
  - Storybook interactions used where appropriate
- **Files:** `src/components/**/*.test.tsx`
- **Priority:** High
- **Effort:** High

### R2.2: Hook Tests

- **Description:** Test core hooks thoroughly
- **Acceptance Criteria:**
  - useDataState all state transitions tested
  - LanguageProvider context tested
  - ThemeProvider context tested
- **Files:** `src/common/hooks/**/*.test.tsx`
- **Priority:** High
- **Effort:** Medium

### R2.3: Integration Test for Repository Layer

- **Description:** Add integration tests for ApiService
- **Acceptance Criteria:**
  - Mocked HTTP responses tested
  - Error handling paths tested
  - Timeout behavior verified
- **Files:** `src/common/repo/*.test.ts`
- **Priority:** Medium
- **Effort:** Medium

---

## Phase 3: Security & Robustness

### R3.1: localStorage Error Handling

- **Description:** Add try-catch for storage operations in ThemeProvider
- **Acceptance Criteria:**
  - ThemeProvider handles `QuotaExceededError`
  - ThemeProvider handles private browsing mode
  - Graceful fallback to default theme on error
- **Files:** `src/common/theme/ThemeProvider.tsx`
- **Priority:** High
- **Effort:** Low

### R3.2: Validate Stored Theme Values

- **Description:** Sanitize localStorage reads
- **Acceptance Criteria:**
  - Only accept valid theme values from storage
  - Ignore malformed/corrupted storage data
  - Default to light theme on invalid input
- **Files:** `src/common/theme/ThemeProvider.tsx`
- **Priority:** Medium
- **Effort:** Low

### R3.3: Bundle Size Baseline

- **Description:** Document and analyze bundle size
- **Acceptance Criteria:**
  - Report identifies size contributors
  - Tree-shaking verified working
  - Recommendations documented
- **Priority:** Low
- **Effort:** Low

---

## Out of Scope

- CI/CD pipeline (library, not app)
- React Native support
- IE11 browser support
- Major API changes
- Breaking changes to exports
- New component development

---

## Success Metrics

| Metric          | Current | Target   |
| --------------- | ------- | -------- |
| Test Coverage   | ~15%    | >60%     |
| Type Errors     | 0       | 0        |
| Security Issues | 2       | 0        |
| Export Surface  | Gaps    | Complete |

---

_Draft requirements: 2026-04-09_
