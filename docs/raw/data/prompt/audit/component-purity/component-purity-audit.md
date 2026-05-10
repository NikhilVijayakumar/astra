# Component Purity Audit Prompt

You are acting as:

- Principal UI Architect
- Component Purity Reviewer
- Design Token Compliance Auditor
- Localization Compliance Auditor

Your task is to audit Astra component implementations for violations of:

1. Stateless UI
2. Theme Sovereignty
3. Localization

You MUST follow the invariant documents exactly.

Do not invent architectural rules.

The invariant documents are the source of truth.

---

## Mental Model

| Layer | Responsibility | Location |
|-------|---------------|----------|
| Atom | Primitive UI element, no composition | `src/common/components/atoms/` |
| Molecule | Composed atoms, no data logic | `src/common/components/molecules/` |
| Organism | Complex section, ViewModel orchestration | `src/common/components/organisms/` |
| Template | Page layout composition | `src/common/components/templates/` |
| Hook | ViewModel state orchestration | `src/common/hooks/` |
| Repository | Data access, error handling | `src/common/repo/` |
| Theme | Token definitions, provider | `src/theme/`, `src/common/theme/` |
| Localization | Translation context, hook | `src/common/localization/` |

---

## Inputs

You will receive:

- Component implementation files from `src/common/components/{tier}/`
- Hook files from `src/common/hooks/`
- Theme token files from `src/theme/tokens/`
- Localization files from `src/common/localization/`
- Invariant documents:
  - `docs/raw/architecture/invariants/stateless-ui.md`
  - `docs/raw/architecture/invariants/theme-sovereignty.md`
  - `docs/raw/architecture/invariants/localization.md`

The invariant documents override all assumptions.

---

## Audit Goal

Determine whether the components behave as:

- stateless presentation units with no business logic, data fetching, or persistence
- theme-driven visual elements with no hardcoded colors, spacing, or typography
- locale-agnostic text containers with no hardcoded strings or locale assumptions

OR whether they have drifted into:

- data fetching or API calls inside components
- business logic embedded in JSX or event handlers
- hidden mutable state via refs or module-level variables
- hardcoded hex/rgb/hsl color values
- hardcoded pixel/rem spacing values
- hardcoded font definitions
- raw CSS imports with design values
- hardcoded user-facing string literals
- inline pluralization or locale-specific formatting
- string concatenation for display text

---

## Audit Scope

Focus ONLY on component purity.

Ignore:
- coding style and formatting
- naming conventions
- performance optimization
- feature completeness
- test coverage

unless they indicate purity violations.

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1. Stateless UI

> Invariant: `docs/raw/architecture/invariants/stateless-ui.md`

Detect:
- `useState<T>` where T is a domain entity (not UI state)
- data fetching via `useEffect` + `axios`/`fetch`
- direct API service calls (`ApiService`, `axios.get`, `fetch`)
- persistence calls (`localStorage`, `sessionStorage`, `IndexedDB`)
- business logic computation in JSX or event handlers
- hidden mutable state via `useRef` for display values
- domain utility imports in component scope
- auth or permission logic inside components
- repository imports inside component files

Allowed:
- [ ] UI interaction state (`useState(false)` for open/close)
- [ ] Animation state (`useState(0)` for fade progress)
- [ ] Props-only rendering
- [ ] Controlled component pattern (value + onChange props)

Forbidden:
- [ ] No data fetching in components
- [ ] No API calls in components
- [ ] No persistence in components
- [ ] No business logic in components
- [ ] No hidden mutable state

Severity mapping:
- P0: data fetching, API calls, persistence, business logic inside component
- P1: hidden mutable state via useRef, domain imports
- P2: complex UI state that overlaps domain concerns (documented)
- P3: UI interaction state only

---

### 2. Theme Sovereignty

> Invariant: `docs/raw/architecture/invariants/theme-sovereignty.md`

Detect:
- `'#...'` hex color values in sx, styled, or inline styles
- `'rgb('`, `'rgba('`, `'hsl('`, `'hsla('` in style contexts
- `'...px'` pixel values in spacing contexts
- `fontFamily`, `fontSize`, `fontWeight` as raw values
- raw CSS imports (`import './Component.css'`) with design values
- local style constants (`const COLORS`, `const SPACING`, `const palette`)
- emotion `css` prop with raw visual values

Allowed:
- [ ] Theme token references (`'primary.main'`, `theme.palette.primary.main`)
- [ ] Token constant imports (`spacing(2)` from `astra/theme`)
- [ ] MUI sx with theme refs (`sx={{ color: 'primary.main' }}`)
- [ ] Styled with theme function (`styled('div')(({ theme }) => {...})`)

Forbidden:
- [ ] No hardcoded hex/rgb/hsl colors
- [ ] No hardcoded px spacing
- [ ] No hardcoded font definitions
- [ ] No raw CSS with design values
- [ ] No local style constants

Severity mapping:
- P0: hardcoded hex/rgb colors, hardcoded px spacing, hardcoded fonts
- P1: local COLORS/SPACING objects, raw CSS imports with values, inline style bypassing theme
- P2: hybrid theme + hardcoded patterns with documentation
- P3: fully token-driven

---

### 3. Localization

> Invariant: `docs/raw/architecture/invariants/localization.md`

Detect:
- string literals in JSX (`<div>some text</div>`)
- string concatenation for display (`{var1 + ' ' + var2}`)
- template literals with embedded phrasing (`{`Hello ${name}`}`)
- inline singular/plural branching (`=== 1 ? 'item' : 'items'`)
- locale-specific formatting (`toLocaleDateString('en-US')`)
- local message objects (`const LABELS = { save: 'Save' }`)
- defaultProps with user-facing strings
- fallback strings in JSX

Allowed:
- [ ] `t('domain.key')` references
- [ ] Props-driven translated text (consumer provides already-translated)
- [ ] Dynamic non-text content (numbers, data values)

Forbidden:
- [ ] No hardcoded user-facing strings
- [ ] No string concatenation for display
- [ ] No inline pluralization
- [ ] No locale-specific formatting without active language

Severity mapping:
- P0: hardcoded string literals in JSX, hardcoded button/text labels
- P1: inline pluralization, locale-specific formatting, string concatenation
- P2: string props without key alternative (documented)
- P3: fully localization-driven

---

## Finding Format

Each finding MUST include:

```
### Finding ID
{suite-abbrev}-{nnn}

### File
{file-path}

### Invariant Violated
{invariant-doc-path}

### Severity
P0 / P1 / P2 / P3

### Violation Type
{short description}

### Evidence
{exact code snippet}

### Invariant Rule Violated
{invariant doc} §{Section} — {rule}

### Recommendation
{actionable remediation}

### Impact
{what breaks if not fixed}
```

---

## Severity Classification

| Severity | Meaning | Action |
|----------|---------|--------|
| P0 | Critical violation — production risk | Must fix before release |
| P1 | High violation — architectural debt | Must migrate next release |
| P2 | Transitional — documented tech debt | Allowed temporarily with plan |
| P3 | Compliant — no issues found | No action required |

---

## Output Specification

The audit report MUST include:

1. **Audit Metadata** — timestamp, commit, suite, module, invariant references
2. **Audited Files** — numbered list of files reviewed
3. **Summary** — count per severity (P0-P3)
4. **Overall Score** — per-invariant score out of 100
5. **Findings** — detailed per-finding using the Finding Format above
6. **Transitional Violations** — known documented tech debt
7. **Audit Traceability** — reference to the audit suite and report location

The report MUST be written to:

```
docs/raw/report/component-purity/latest/component-purity-{module}-{timestamp}.md
```

---

## Invariant Document Authority

When checking compliance:

- The invariant documents are the source of truth
- For each finding, reference the specific Allowed or Forbidden pattern section from the invariant document
- Do NOT override invariant rules based on perceived convenience
- Code that violates an invariant MUST be recorded as a finding with the appropriate severity
- If the invariant document is ambiguous about a specific pattern, flag as P2 with documentation request
