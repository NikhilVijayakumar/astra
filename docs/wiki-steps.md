# Documentation Enhancement Steps

**Purpose:** Track wiki/documentation improvements for iterative execution.
**Parent:** docs/index.md (documentation index)

---

## Completed

| Date | Step | Status | Notes |
|------|------|--------|-------|
| 2026-04-19 | Initial docs/index.md created | AI |
| 2026-04-19 | Add wiki-steps.md created | Tracking file |

---

## In Progress (Phase 1)

| # | Step | Description | Status |
|---|------|-------------|---------|
| A1 | Add Global Constants | ✅ Complete |
| A2 | Expand Component Inventory | ✅ Complete |
| A3 | Add External Integration Brief | ✅ Complete |
| A4 | Add Feature Details (expanded) | ✅ Complete |
| A5 | Remove legacy section from index | ✅ Complete |

---

## Planned (Phase 2+)

| # | Step | Priority | Notes |
|---|------|----------|-------|
| B1 | Component API detail (props table) | High | Expand from tier overview, add detailed props per component |
| B2 | Add Storybook integration docs | Medium | Storybook setup and stories |
| B3 | Add electron-example usage guide | Medium | Electron-specific usage |
| B4 | Add migration guides for v1→v2 | Low | Breaking changes guide |
| B5 | Add contribution guidelines | Low | How to contribute |

## Completed (This Session)

| Date | Step | Status | Notes |
|------|------|--------|-------|
| 2026-04-19 | Phase 1: Global Constants | ✅ Complete |
| 2026-04-19 | Phase 1: Component Inventory | ✅ Complete |
| 2026-04-19 | Phase 1: External Integrations | ✅ Complete |
| 2026-04-19 | Phase 1: Feature Details (expanded) | ✅ Complete |
| 2026-04-19 | Phase 1: Remove legacy from index | ✅ Complete |

---

## External Integrations (docs/pr*/)

| Project | Type | Summary | Location |
|---------|------|---------|----------|
| Dristi | Request/Response | Integration with Dristi system | docs/pr/dristi/ |
| Sangama | Request/Response | Integration with Sangama system | docs/pr/sangama/ |
| Prana | Request/Response | Integration with Prana system | docs/pr/prana/ |
| Dhi | Request/Response | Integration with Dhi system | docs/pr/dhi/ |

---

## Legacy Systems (docs/)

| File | Summary | Status |
|------|---------|--------|
| MVVM_Clean_Architecture.md | Architecture overview | Legacy |
| Theming.md | Theming guide | Legacy |
| Localization.md | i18n guide | Legacy |
| Repository_Layer.md | API layer | Legacy |
| state.md | State management | Legacy |
| hooks.md | Custom hooks | Legacy |

> Note: See docs/feature/ for current documentation. Legacy docs retained for reference.

---

## How to Execute Future Steps

```bash
# Run Phase 1 steps (when ready)
# 1. Edit docs/index.md
# 2. Add sections in order (A1→A4)
# 3. Update this file with completion dates
# 4. Commit with "docs: enhance wiki Phase 1"

# Run future steps (Phase 2+)
# 1. Update wiki-steps.md with step details
# 2. Execute enhancement
# 3. Mark complete in wiki-steps.md
# 4. Commit with "docs: [enhancement description]"
```

---

## Component Inventory Reference

### Atoms (5)
| Component | Key Props | Type |
|-----------|----------|------|
| StatusDot | tone, size | atom |
| SeverityBadge | severity, label | atom |
| LoadingState | status | atom |
| ErrorState | error | atom |
| EmptyState | data | atom |

### Molecules (6)
| Component | Key Props | Type |
|-----------|----------|------|
| Card | variant, children | molecule |
| Notification | severity, message | molecule |
| TrendMetricCard | value, trend | molecule |
| ImageViewer | src, alt | molecule |
| MdViewer | content | molecule |
| JsonViewer | data | molecule |

### Organisms (32)
| Component | Key Props | Type |
|-----------|----------|------|
| AlertListItem | alert, onAction | organism |
| AudioPlayerBar | src, controls | organism |
| DataTable | data, columns | organism |
| DecisionActionCard | decision, actions | organism |
| DrawerComponent | open, onClose | organism |
| ... (28 more) | ... | organism |

### Templates (3)
| Component | Key Props | Type |
|-----------|----------|------|
| PageHeader | title, subtitle | template |
| SummaryPanel | items, actions | template |
| HeroSection | title, description | template |

---

*Last updated: 2026-04-19*
*Tracking: docs/index.md enhancement roadmap*