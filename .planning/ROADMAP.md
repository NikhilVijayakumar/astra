# Roadmap: Astra v1.1.0

**Project:** Astra
**Version:** 1.1.0
**Goal:** Document Atomic Design methodology as official design principle
**Phases:** 3
**Granularity:** Standard

---

## Phases

- [ ] **Phase 1: Methodology Foundation** - Create atomic design methodology and verify compliance
- [ ] **Phase 2: Component Doc Enhancement** - Update component docs with tier classification
- [ ] **Phase 3: Integration Guide Updates** - Add context to integration guides

---

## Phase Details

### Phase 1: Methodology Foundation

**Goal:** Establish atomic design methodology documentation and verify component compliance

**Depends on:** Nothing (first phase)

**Requirements:** DOCS-01, DOCS-02, DOCS-05, REFA-01

**Success Criteria** (what must be TRUE):

1. Users can read a comprehensive methodology document explaining atoms, molecules, organisms, templates definitions
2. Users can access tier-specific guides for each component level (atoms, molecules, organisms, templates)
3. All components in src/common/components/ have been verified for atomic design compliance
4. The methodology directory exists with all 5 files (README + 4 tier guides) in docs/feature/components/atomic-design/

**Plans:** TBD

**UI hint:** no

---

### Phase 2: Component Doc Enhancement

**Goal:** Update existing component documentation with tier classification and methodology links

**Depends on:** Phase 1

**Requirements:** DOCS-03, DOCS-04

**Success Criteria** (what must be TRUE):

1. docs/feature/components/README.md includes atomic design structure overview and links to tier guides
2. All component documentation pages display their tier classification (atoms/molecules/organisms/templates)
3. Each component doc includes "Design Principles" section linking to relevant tier guide

**Plans:** TBD

**UI hint:** yes

---

### Phase 3: Integration Guide Updates

**Goal:** Provide component architecture context in integration guides

**Depends on:** Phase 2

**Requirements:** DOCS-06, DOCS-07

**Success Criteria** (what must be TRUE):

1. docs/integration-guide/getting-started.md contains component structure overview and references atomic design methodology
2. docs/integration-guide/react.md explains "why" context for component architecture and links to component docs
3. Both guides provide clear path to component documentation for developers learning the library

**Plans:** TBD

---

## Progress

| Phase                        | Plans Complete | Status      | Completed |
| ---------------------------- | -------------- | ----------- | --------- |
| 1. Methodology Foundation    | 0/1            | Not started | -         |
| 2. Component Doc Enhancement | 0/1            | Not started | -         |
| 3. Integration Guide Updates | 0/1            | Not started | -         |

---

## Coverage

- v1 requirements: 8 total
- Mapped to phases: 8
- Unmapped: 0 ✓

---

## Next Phase

Run `/gsd-plan-phase 1` to start Phase 1 execution.

---
