# Roadmap: Astra Quality Improvements

**Project:** Astra
**Goal:** Improve library quality for consumer applications
**Phases:** 3

---

## Phase 1: Type Safety & Exports ⏱ 1-2 days

**Goal:** Fix critical type gaps and export surface

### Tasks

1. Fix ApiService generics
   - Update `post<T>()` signature - no `any`
   - Update `put<T>()` signature - no `any`
   - Verify backward compatibility

2. Remove console.log from ApiService
   - Replace with console.error
   - Sanitize error messages for consumers

3. Export surface audit
   - Verify `useOnboardingActionGate` exports
   - Verify `OnboardingActionGate` exports
   - Verify `DynamicProfileRenderer` exports
   - Test subpath imports work

**Definition of Done:**

- [ ] No `any` types in ApiService public API
- [ ] No console.log in production code
- [ ] All required exports verified working

---

## Phase 2: Testing Coverage ⏱ 3-5 days

**Goal:** Increase test coverage for library reliability

### Tasks

1. Component tests
   - HeroSection, AppStateHandler tests
   - Form components (ReviewDecisionDialog, StatusActionCard)
   - Profile components

2. Hook tests
   - useDataState with all state transitions
   - LanguageProvider context tests

3. Integration tests
   - ApiService with mocked axios
   - ThemeProvider context

**Definition of Done:**

- [ ] > 60% overall coverage
- [ ] All critical paths tested
- [ ] Tests pass with `npm test`

---

## Phase 3: Security & Polish ⏱ 1-2 days

**Goal:** Fix security concerns and polish

### Tasks

1. localStorage robustness (ThemeProvider)
   - Add try-catch blocks
   - Handle private browsing mode
   - Validate stored values

2. Error message sanitization
   - Never expose stack traces to consumers
   - Structured error messages

3. Bundle size documentation
   - Document current size
   - Identify tree-shaking status

**Definition of Done:**

- [ ] ThemeProvider handles all storage errors
- [ ] No information leakage in errors
- [ ] Performance documented

---

## Timeline

```
Week 1: Phase 1 (Type Safety) + Phase 2 (Testing)
Week 2: Phase 2 (Testing continued)
Week 3: Phase 3 (Security & Polish)
```

**Total Estimated:** 5-9 days

---

## Next Phase

Run `/gsd-plan-phase 1` to start Phase 1 execution.

---
