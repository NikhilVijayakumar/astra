# Phase 2 Plan: Testing Coverage

**Project:** Astra
**Phase:** 2 of 3
**Status:** Planning

---

## Current State

| Area              | Coverage               | Files | Tests    |
| ----------------- | ---------------------- | ----- | -------- |
| `src/common/`     | **90%**                | ~25   | 29 tests |
| `src/components/` | **0%**                 | 42    | 0 tests  |
| **Overall**       | **~90%** (common only) | 67    | 29       |

---

## Task 2.1: Add UI Component Tests

**Target:** Add tests for critical UI components

### Priority 1 (High Impact)

| Component     | File                                  | Reason                  |
| ------------- | ------------------------------------- | ----------------------- |
| HeroSection   | `src/components/ui/HeroSection.tsx`   | Key marketing component |
| Card          | `src/components/ui/Card.tsx`          | Base component          |
| Notification  | `src/components/ui/Notification.tsx`  | State display           |
| StatusDot     | `src/components/ui/StatusDot.tsx`     | Common UI element       |
| SeverityBadge | `src/components/ui/SeverityBadge.tsx` | Common UI element       |

### Priority 2 (Medium Impact)

| Component          | File                                       | Reason              |
| ------------------ | ------------------------------------------ | ------------------- |
| PageHeader         | `src/components/ui/PageHeader.tsx`         | Layout component    |
| SummaryPanel       | `src/components/ui/SummaryPanel.tsx`       | Data display        |
| DecisionActionCard | `src/components/ui/DecisionActionCard.tsx` | Interactive         |
| TrendMetricCard    | `src/components/ui/TrendMetricCard.tsx`    | Data display        |
| DataTable          | `src/components/ui/DataTable.tsx`          | Complex table logic |

### Priority 3 (File Viewers)

| Component        | File                                               | Reason        |
| ---------------- | -------------------------------------------------- | ------------- |
| FileViewerRouter | `src/components/file-viewers/FileViewerRouter.tsx` | Routing logic |
| JsonViewer       | `src/components/file-viewers/JsonViewer.tsx`       | Data display  |
| CsvViewer        | `src/components/file-viewers/CsvViewer.tsx`        | Data parsing  |

---

## Task 2.2: Enhance Existing Hook Tests

**Current:** `useDataState` at 100%, `LanguageProvider` at 90%, `ThemeProvider` at 93%

### Improvements Needed

- `LanguageContext.ts`: Add tests for language switching edge cases (line 23)
- `LanguageProvider.tsx`: Add tests for fallback language (lines 24-27)
- `ThemeProvider.tsx`: Add test for storage error handling (line 26)

---

## Task 2.3: Repository Layer Tests

**Current:** `ApiService.ts` at 100%, but `HttpStatusCode.ts` at 50%, `ServerResponse.ts` at 100%

### Improvements Needed

- `HttpStatusCode.ts`: Add tests for all HTTP status codes (lines 18-36)

---

## Execution Order

```
Week 1: Priority 1 components (5 tests)
Week 1: File viewer tests (3 tests)
Week 2: Priority 2 components (5 tests)
Week 2: Hook enhancements
Week 2: HttpStatusCode tests
```

---

## Test Patterns to Use

Based on existing tests in `src/common/`:

1. **Component Tests:** `@testing-library/react` with `userEvent`
2. **Mocking:** Use `vi.fn()` for callbacks, mock MUI components
3. **Assertions:** Use `@testing-library/jest-dom` matchers

Example pattern:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("renders title and description", () => {
    render(<HeroSection title="Test" description="Description" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("handles button click", async () => {
    const onClick = vi.fn();
    render(<HeroSection title="Test" onAction={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
```

---

## Success Criteria

- [ ] 13+ new component tests added
- [ ] Hook tests enhanced for edge cases
- [ ] HttpStatusCode tests added
- [ ] `npm test` passes with 100% of new tests
- [ ] Coverage report shows improvement

---

## Files to Create

```
src/components/ui/
├── HeroSection.test.tsx
├── Card.test.tsx
├── Notification.test.tsx
├── StatusDot.test.tsx
├── SeverityBadge.test.tsx
├── PageHeader.test.tsx
├── SummaryPanel.test.tsx
├── DecisionActionCard.test.tsx
├── TrendMetricCard.test.tsx
└── DataTable.test.tsx

src/components/file-viewers/
├── FileViewerRouter.test.tsx
├── JsonViewer.test.tsx
└── CsvViewer.test.tsx

src/common/repo/
└── HttpStatusCode.test.ts

src/common/localization/
└── (enhance existing tests)
```

---
