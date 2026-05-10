# Module Architecture Contract Generator

> Generates architecture governance contracts for Astra library modules.
> Chain: features → invariants → module-map → audit-governance

---

## Canonical Template

You MUST use the canonical template at:

```
docs/raw/data/template/runtime_map_template.md
```

The template is the authoritative structure definition.

You MUST:
- follow the template exactly
- preserve section ordering
- preserve headings
- preserve governance structure
- preserve verification sections
- preserve compliance sections
- respect @condition markers (component-only / data-module)
- use ✅ / ⚠️ / ❌ status markers consistently
- populate every field — leave no blank

Do NOT:
- invent new sections
- remove sections
- reorder sections
- collapse sections
- summarize sections
- mark N/A where actual data exists

---

## Astra-Specific Classification Rules

### Module Classification

| Pattern | Classification |
|---------|---------------|
| Files in `src/common/components/{atoms\|molecules\|organisms\|templates}/` | Component |
| Files in `src/common/hooks/` | Hook |
| Files in `src/common/repo/` | Repository |
| Files in `src/common/theme/` or `src/theme/tokens/` | Theme |
| Files in `src/common/localization/` | Localization |
| Token constant files in `src/theme/tokens/` | Token |
| `src/lib.ts`, `package.json` exports map | Export |
| Cross-cutting like `src/common/state/` | Capability |

### Layer Assignment

| Classification | Layer |
|---------------|-------|
| Theme, Localization, Token | Layer 0: Foundation |
| Hook (State), Repository | Layer 1: Data Architecture |
| Component (all tiers) | Layer 2: Component Library |
| Export | Layer 3: Public Surface |

---

## Conditional Section Handling

### Section 9 — Atomic Tier (`@condition: component-only`)

- Populate ONLY for Component-classified modules
- Check the appropriate tier: Atom / Molecule / Organism / Template
- Uncheck `[ ] Not a component`
- For ALL other classifications: check `[ ] Not a component`, leave tier unchecked
- Do NOT omit the section — always present

### Section 10 — MVVM Layer (`@condition: data-module`)

- Populate ONLY for Hook or Repository-classified modules
- For Hooks: check `[ ] ViewModel`, uncheck `[ ] Not a data module`
- For Repositories: check `[ ] Repository`, uncheck `[ ] Not a data module`
- For ALL other classifications: check `[ ] Not a data module`, leave layer unchecked
- Do NOT omit the section — always present

---

## Invariant Compliance Scoring

| Score | Meaning |
|-------|---------|
| P0 | Critical violation — must fix before release |
| P1 | High violation — must migrate next release |
| P2 | Transitional — documented tech debt with plan |
| P3 | Fully compliant — no action required |
| N/A | Invariant does not apply to this module type |

### Default Scoring Guidance

| Module Type | Invariant | Default | Notes |
|-------------|-----------|---------|-------|
| Component | Stateless UI | P3 | Verify no data/USE in component |
| Component | Theme Sovereignty | P3 | Verify no hardcoded values |
| Component | Localization | P3 | Verify no hardcoded strings |
| Component | Atomic Hierarchy | P3 | Verify tier bounds |
| Component | MVVM Separation | N/A | |
| Component | Repository Isolation | N/A | |
| Hook | MVVM Separation | P3 | Verify no JSX / UI imports |
| Hook | Stateless UI | N/A | |
| Hook | Atomic Hierarchy | N/A | |
| Repository | Repository Isolation | P3 | |
| Repository | MVVM Separation | P3 | Verify no presentation formatting |
| Repository | Stateless UI | N/A | |
| All | Dependency Safety | P3 | Verify deps |
| All | Public API Stability | P3 | Check exports |
| All | Deterministic Build | P3 | |
| All | Platform Neutrality | P3 | Check no Electron/Node/window |

---

## Evidence Requirements

Every score in Compliance Analysis (section 13) MUST have:
- At least one sentence of evidence
- Reference to specific file patterns or line ranges
- Reference to the invariant document section violated (if non-compliant)

### Evidence Format

```
P3 — Stateless UI: All data arrives via props. No useState, useEffect, or API calls found.
Source verified against stateless-ui.md §Allowed Patterns (Props-Only Rendering).
```

```
P1 — Theme Sovereignty: Hardcoded `#1976d2` found in Button.tsx:42.
Violates theme-sovereignty.md §Forbidden Patterns — Hardcoded Color Values.
```

```
N/A — Atomic Hierarchy: Module is classified as Hook, not Component.
```

---

## Verification Commands

Each command in section 17 MUST:
- use `rg` (ripgrep) for pattern matching
- target the specific module implementation path
- be executable against the codebase
- cover the most likely violations for that module type

### Default Commands by Module Type

**Components:**
```
rg "useState<[A-Z]" src/common/components/{tier}/{module}.tsx
rg "'#[0-9a-fA-F]{6}'" src/common/components/{tier}/{module}.tsx
rg ">[A-Z][a-z].*[a-z]<" src/common/components/{tier}/{module}.tsx --include "*.tsx"
```

**Hooks:**
```
rg "import.*from.*components\|import.*from.*views" src/common/hooks/{module}.ts
rg "return\s*<\|return\s*\(" src/common/hooks/{module}.ts
```

**Repositories:**
```
rg "import.*from.*components\|import.*from.*hooks\|import.*from.*view" src/common/repo/{module}.ts
```

**Theme / Tokens:**
```
rg "import.*electron\|import.*fs\|process\." src/{module-path}
```

**Exports:**
```
rg "export.*from.*internal\|export.*from.*private" src/lib.ts
```

---

## Invariant Mapping

| Template Section | Invariant Document | Applies To |
|-----------------|-------------------|------------|
| 6. State Rules | `docs/raw/architecture/invariants/stateless-ui.md` | All modules |
| 7. Theme Rules | `docs/raw/architecture/invariants/theme-sovereignty.md` | All modules |
| 8. Localization Rules | `docs/raw/architecture/invariants/localization.md` | All modules |
| 9. Atomic Tier | `docs/raw/architecture/invariants/atomic-hierarchy.md` | Components only |
| 10. MVVM Layer | `docs/raw/architecture/invariants/mvvm-separation.md` | Hooks, Repos only |
| 11. Dependency Rules | `docs/raw/architecture/invariants/dependency-safety.md` | All modules |
| 12. Platform Assumptions | `docs/raw/architecture/invariants/platform-neutrality.md` | All modules |

---

## Invariant Document Authority

When checking compliance:

- The invariant documents are the source of truth
- The module map records compliance against invariant rules
- If an invariant document is ambiguous, re-read its Allowed / Forbidden patterns and Detection Heuristics
- Do NOT override invariant rules based on module convenience
- Code that violates an invariant MUST be recorded as a Transitional Violation (§16)
- Severity follows the invariant document's severity definitions (P0—P3)

### Conflict Resolution

| Conflict | Resolution |
|----------|-----------|
| Code differs from invariant | Code wins — flag as violation in the map |
| Module map differs from code | Map must be updated to reflect actual code |
| Two invariants contradict | Flag in Compliance Analysis as architecture decision |
| Module classification ambiguous | Use Implementation path as tiebreaker |

---

## Output Validation

Generated module maps are considered INVALID if they:

- diverge from the canonical template
- omit required sections
- modify governance structure
- alter verification structure
- remove invariant mappings
- have blank fields where data exists
- mark P0 or P1 violations without corresponding Transitional Violation entries (§16)
- have P0 or P1 violations without evidence strings (§13)
- mark N/A for an invariant that applies to the module's classification
- omit conditional sections (§9 or §10)
- use inconsistent status markers (mix of text and symbols)

---

## Update Requirements

When updating existing module maps:

- preserve existing valid structure
- preserve historical governance data when still valid
- update only changed implementation behavior
- append new Transitional Violations instead of replacing historical drift
- do NOT downgrade severity without code change evidence
- update Last Reviewed date on every pass
- if a previous violation is fixed, move it to a "Resolved Violations" note within §16

---

## Read-Before-Generate Checklist

Before generating a module map, read ALL of these:

1. `docs/raw/data/template/runtime_map_template.md` — the canonical template
2. The relevant feature doc at `docs/raw/feature/{domain}/{feature}.md`
3. The implementation files at `src/{module-path}`
4. All 10 invariant documents at `docs/raw/architecture/invariants/*.md`
5. The module's tier classification in `src/common/components/{tier}/` (if component)

---

## Output Format

The generated module map MUST be written to:

```
docs/raw/architecture/module-map/module-{module-name}.md
```

One `.md` file per module.

The module map file name MUST be lowercase with hyphens.

---

## Prompt Metadata

| Field | Value |
|-------|-------|
| Prompt Version | `1.0` |
| Generated For | `Astra Module Map System` |
| Template Source | `docs/raw/data/template/runtime_map_template.md` |
| Last Updated | `2026-05-10` |
| Architecture Model | `Token-Driven Atomic MVVM Component Library` |
