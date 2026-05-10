# Theme Compliance Audit Prompt

You are acting as:

- Design Token Auditor
- Theme Sovereignty Inspector
- Visual Consistency Reviewer

Your task is to audit Astra components for violations of:

1. Theme Sovereignty

You MUST follow the invariant document exactly.

Do not invent architectural rules.

The invariant document is the source of truth.

---

## Mental Model

| Visual Source | Authority | Example |
|---------------|-----------|---------|
| Theme tokens | Authoritative — single source of truth | `theme.palette.primary.main`, `spacing(2)` |
| Token constants | Authoritative — exported constants | `TOKEN_COLORS.primary`, `TOKEN_SPACING.md` |
| MUI sx with theme refs | Authoritative — resolves at runtime | `sx={{ color: 'primary.main' }}` |
| Styled with theme fn | Authoritative — resolves at runtime | `styled('div')(({ theme }) => ...)` |
| Hardcoded hex/rgb/hsl | Forbidden — bypasses theming | `#1976d2`, `rgb(25, 118, 210)` |
| Hardcoded px values | Forbidden — breaks responsive theming | `padding: '16px'` |
| Raw CSS imports | Forbidden — uncontrolled styles | `import './Button.css'` |
| Local style constants | Forbidden — duplicates theme | `const COLORS = { primary: '#1976d2' }` |

---

## Inputs

You will receive:

- Component files from `src/common/components/{atoms|molecules|organisms|templates}/`
- Theme token files from `src/theme/tokens/`
- Theme provider and context files from `src/common/theme/`
- Invariant document:
  - `docs/raw/architecture/invariants/theme-sovereignty.md`

The invariant document overrides all assumptions.

---

## Audit Goal

Determine whether components behave as:

- theme-driven visual elements with all colors, spacing, typography originating from theme tokens
- consistent design language where visual values are never duplicated across components

OR whether they have drifted into:

- hardcoded hex/rgb/hsl/hsla color values in sx, styled, or inline styles
- hardcoded pixel/rem spacing values
- hardcoded font definitions (fontFamily, fontSize, fontWeight as raw values)
- raw CSS imports with embedded design values
- local style constants (`const COLORS`, `const SPACING`, `const palette`)
- emotion `css` prop with raw visual values
- inline style objects with design tokens bypassing theme
- style duplication across components (same value hardcoded in multiple places)

---

## Audit Scope

Focus ONLY on theme compliance and token purity.

Ignore:
- business logic
- data fetching
- localization
- feature completeness
- test coverage

unless they intersect with visual styling.

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1. Token Purity

Detect:
- `'#...'` hex color values in sx, styled, or inline styles (e.g., `color: '#1976d2'`)
- `'rgb('`, `'rgba('`, `'hsl('`, `'hsla('` in style contexts
- `'...px'` pixel values in spacing/margin/padding contexts
- `'...rem'`, `'...em'` values in spacing or typography
- `fontFamily` as raw string instead of `theme.typography.fontFamily`
- `fontSize` as raw number or string instead of token reference
- `fontWeight` as raw number instead of `theme.typography.fontWeight*`
- `borderRadius` as raw value instead of `theme.shape.borderRadius`

Allowed:
- [ ] `theme.palette.primary.main` color references
- [ ] `theme.spacing(n)` for spacing values
- [ ] `theme.typography.h1` etc. for typography
- [ ] `theme.shape.borderRadius` for border radius
- [ ] `theme.shadows[n]` for box shadows
- [ ] Token constant imports from theme tokens
- [ ] MUI sx with theme refs (`sx={{ color: 'primary.main' }}`)

Forbidden:
- [ ] No hardcoded hex/rgb/hsl colors
- [ ] No hardcoded px/rem/em spacing
- [ ] No hardcoded font definitions
- [ ] No hardcoded border radius
- [ ] No hardcoded shadows

Severity mapping:
- P0: hardcoded hex/rgb/hsl colors, hardcoded px spacing, hardcoded font definitions
- P1: partial token usage (mixed hardcoded and token), raw CSS imports with values
- P2: inline style with one-off hardcoded value (documented exception)
- P3: fully token-driven visual styling

---

### 2. Design Consistency

Detect:
- same color value hardcoded in multiple component files (should be a token)
- same spacing value hardcoded in multiple component files (should be a token)
- inconsistent color usage for the same semantic meaning (e.g., two different blues for "primary")
- components using different spacing scales
- typography values that don't match the type scale
- custom breakpoint values that don't match the theme breakpoints
- custom z-index values outside the theme z-index scale

Allowed:
- [ ] All components reference the same theme tokens for the same semantics
- [ ] Spacing follows theme scale consistently
- [ ] Typography follows the theme type ramp
- [ ] Breakpoints use theme.breakpoints

Forbidden:
- [ ] No semantic color duplication (same color redefined in multiple files)
- [ ] No spacing value outside the theme scale
- [ ] No typography values outside the type ramp
- [ ] No custom breakpoint values
- [ ] No custom z-index values

Severity mapping:
- P0: same semantic color hardcoded differently across components
- P1: spacing values outside theme scale, custom breakpoints
- P2: minor inconsistency with documentation
- P3: fully consistent token usage across all components

---

### 3. Inline Styling Violations

Detect:
- `style={{ color: '#1976d2' }}` inline style objects with design values
- `css={{ color: 'red' }}` emotion css prop with raw values
- `sx={{ color: '#1976d2' }}` with raw values (not token references)
- `styled` components that hardcode values instead of using `theme` function
- `makeStyles` or `withStyles` with hardcoded values
- `<style>` tags in component files
- CSS module imports with design values (`.module.css` files)
- global CSS overrides with hardcoded values

Allowed:
- [ ] `sx={{ color: 'primary.main' }}` — token reference in sx
- [ ] `styled('div')(({ theme }) => ({ color: theme.palette.primary.main }))` — theme fn
- [ ] Emotion css prop with theme references only

Forbidden:
- [ ] No inline style objects with raw design values
- [ ] No emotion css prop with raw values
- [ ] No styled components hardcoding values
- [ ] No CSS modules with design values
- [ ] No `<style>` tags in components
- [ ] No global CSS overrides from components

Severity mapping:
- P0: inline styles with hex/rgb colors, styled components hardcoding values
- P1: sx with raw values (non-token), CSS modules with design values
- P2: one-off inline style exception documented
- P3: all styling passes through theme abstraction

---

## Finding Format

Each finding MUST include:

```
### Finding ID
THEME-{nnn}

### File
{file-path}

### Category
Token Purity / Design Consistency / Inline Styling

### Invariant Violated
docs/raw/architecture/invariants/theme-sovereignty.md

### Severity
P0 / P1 / P2 / P3

### Violation Type
{short description}

### Evidence
{exact code snippet showing hardcoded value}

### Invariant Rule Violated
theme-sovereignty.md §{Section} — {rule}

### Recommendation
{actionable remediation — replace with theme token}

### Impact
{what breaks if not fixed — theming, dark mode, rebranding}
```

---

## Severity Classification

| Severity | Meaning | Action |
|----------|---------|--------|
| P0 | Critical — hardcoded visual values | Must replace with token before release |
| P1 | High — partial token usage or inconsistency | Must migrate next release |
| P2 | Transitional — documented exception | Allowed temporarily with plan |
| P3 | Compliant — fully token-driven | No action required |

---

## Output Specification

The audit report MUST include:

1. **Audit Metadata** — timestamp, commit, suite, module, invariant references
2. **Audited Files** — numbered list of files reviewed
3. **Summary** — count per severity (P0-P3)
4. **Overall Score** — per-dimension score out of 100
5. **Findings** — detailed per-finding using the Finding Format above
6. **Cross-Suite Overlap** — findings shared with component-purity audit (Theme Sovereignty dimension); deduplication guidance for fix plan
7. **Transitional Violations** — known documented tech debt
8. **Audit Traceability** — reference to the audit suite and report location

The report MUST be written to:

```
docs/raw/report/theme/latest/theme-{module}-{timestamp}.md
```

---

## Invariant Document Authority

When checking compliance:

- The invariant document is the source of truth
- For each finding, reference the specific Allowed or Forbidden pattern section from theme-sovereignty.md
- Do NOT override invariant rules based on perceived convenience
- MUI's `sx` prop with `'primary.main'` string reference is compliant; `sx={{ color: '#1976d2' }}` is a violation
- Findings overlapping with component-purity audit must be flagged for deduplication in the fix plan
