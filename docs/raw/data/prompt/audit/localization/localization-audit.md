# Localization Audit Prompt

You are acting as:

- Localization Compliance Auditor
- Internationalization Reviewer
- Hardcoded String Inspector

Your task is to audit Astra components for violations of:

1. Localization

You MUST follow the invariant document exactly.

Do not invent architectural rules.

The invariant document is the source of truth.

---

## Mental Model

| Text Source | Authority | Example |
|-------------|-----------|---------|
| `t('domain.key')` | Authoritative — locale-driven | `t('button.save')` |
| Props-driven text | Authoritative — consumer provides translated | `<Button label={t('save')} />` |
| Dynamic non-text content | Allowed — not user-facing | `{itemCount}`, `{new Date().getFullYear()}` |
| String literals in JSX | Forbidden — hardcoded text | `<div>Save</div>` |
| String concatenation | Forbidden — breaks translation order | `{var1 + ' ' + var2}` |
| Template literals with text | Forbidden — embedded phrasing | `` {`Hello ${name}`} `` |
| Inline pluralization | Forbidden — locale-specific grammar | `{count === 1 ? 'item' : 'items'}` |
| Locale-specific formatting | Forbidden — assumes locale | `toLocaleDateString('en-US')` |

---

## Inputs

You will receive:

- Component files from `src/common/components/{atoms|molecules|organisms|templates}/`
- Localization files from `src/common/localization/`
- Hook files from `src/common/hooks/`
- Invariant document:
  - `docs/raw/architecture/invariants/localization.md`

The invariant document overrides all assumptions.

---

## Audit Goal

Determine whether components behave as:

- locale-agnostic text containers with no hardcoded user-facing strings
- fully internationalized where all user-facing text passes through `t()` calls or arrives via props

OR whether they have drifted into:

- hardcoded string literals in JSX (`<div>some text</div>`)
- string concatenation for display text (`{var1 + ' ' + var2}`)
- template literals with embedded phrasing (`{`Hello ${name}`}`)
- inline singular/plural branching (`=== 1 ? 'item' : 'items'`)
- locale-specific formatting (`toLocaleDateString('en-US')`)
- local message objects (`const LABELS = { save: 'Save' }`)
- defaultProps with user-facing strings
- fallback strings in JSX
- aria-label or alt text with hardcoded strings

---

## Audit Scope

Focus ONLY on localization compliance.

Ignore:
- visual design and styling
- business logic
- data fetching
- feature completeness
- test coverage
- theme/token usage

unless they intersect with user-facing text.

---

## Required Audit Dimensions

Analyze ALL of the following:

---

### 1. Hardcoded Strings

Detect:
- string literals inside JSX tags: `<div>text</div>`, `<span>text</span>`, `<p>text</p>`
- string literals in component attributes: `aria-label="text"`, `alt="text"`, `placeholder="text"`
- string literals in button labels: `<Button>text</Button>`
- string literals in heading/title props: `title="text"`, `header="text"`
- string literals in tooltip props: `Tooltip title="text"`
- string literals in alert/notification message props
- string literals in table column headers, list empty states, error messages
- concatenated strings for display: `{firstName + ' ' + lastName}`

Allowed:
- [ ] `t('domain.key')` reference for all user-facing text
- [ ] Props-driven translated text (consumer provides already-translated strings)
- [ ] Dynamic non-text content (numbers, dates, data values — not user-facing copy)

Forbidden:
- [ ] No hardcoded string literals in JSX
- [ ] No hardcoded aria-labels or alt text
- [ ] No hardcoded placeholder text
- [ ] No hardcoded tooltip text
- [ ] No hardcoded error messages or empty state text

Severity mapping:
- P0: hardcoded string literal in JSX, hardcoded button/text label, hardcoded aria-label
- P1: concatenated display strings, defaultProps with user-facing strings, fallback strings
- P2: string prop without key alternative (documented)
- P3: all user-facing text localization-driven

---

### 2. Untranslated Paths

Detect:
- `t()` calls referencing keys that don't exist in locale files
- `t()` calls with inconsistent key naming patterns across components
- missing locale entries for keys used in components
- locale files missing translations for some supported languages
- `t()` calls with dynamic key construction (non-debuggable)

Allowed:
- [ ] All `t('domain.key')` keys exist in locale files for all supported languages
- [ ] Consistent key naming: `domain.element.modifier`
- [ ] Static key strings (not dynamically constructed)

Forbidden:
- [ ] No missing locale keys
- [ ] No inconsistent key patterns
- [ ] No dynamic key construction
- [ ] No incomplete language translations

Severity mapping:
- P0: components using keys that don't exist in any locale file
- P1: inconsistent key patterns across codebase, missing translations in one language
- P2: dynamic key construction with fallback (documented)
- P3: all keys exist and consistent

---

### 3. Locale Assumptions

Detect:
- `toLocaleDateString()`, `toLocaleTimeString()`, `toLocaleString()` without active language context
- `Intl.DateTimeFormat` with hardcoded locale
- `Intl.NumberFormat` with hardcoded locale
- currency formatting with hardcoded currency code
- date formatting assuming month/day order or specific format
- pluralization logic inline (`=== 1 ? 'item' : 'items'`)
- gender-specific text branching
- text case transformations (`toUpperCase()`, `toLowerCase()`) for display
- RTL-specific layout values hardcoded (not theme-driven)

Allowed:
- [ ] Date/number formatting through a locale-aware utility
- [ ] Pluralization through i18n library (ICU messages)
- [ ] RTL layout through theme direction toggle

Forbidden:
- [ ] No hardcoded locale in formatting calls
- [ ] No inline pluralization
- [ ] No gender-specific text branching
- [ ] No hardcoded date format strings
- [ ] No locale-specific assumptions in formatting

Severity mapping:
- P0: inline pluralization, hardcoded locale in date/number formatting
- P1: RTL assumptions without theme toggle, text case transformations for display
- P2: documented formatting with active language context
- P3: all locale-specific behavior through i18n system

---

## Finding Format

Each finding MUST include:

```
### Finding ID
LOC-{nnn}

### File
{file-path}

### Category
Hardcoded Strings / Untranslated Paths / Locale Assumptions

### Invariant Violated
docs/raw/architecture/invariants/localization.md

### Severity
P0 / P1 / P2 / P3

### Violation Type
{short description}

### Evidence
{exact code snippet showing hardcoded string or locale assumption}

### Invariant Rule Violated
localization.md §{Section} — {rule}

### Recommendation
{actionable remediation — replace with t() call or locale utility}

### Impact
{what breaks if not fixed — untranslated UI, broken i18n}
```

---

## Severity Classification

| Severity | Meaning | Action |
|----------|---------|--------|
| P0 | Critical — hardcoded user-facing strings | Must extract to locale key before release |
| P1 | High — locale assumption or missing key | Must fix next release |
| P2 | Transitional — documented localization gap | Allowed temporarily with plan |
| P3 | Compliant — all text localization-driven | No action required |

---

## Output Specification

The audit report MUST include:

1. **Audit Metadata** — timestamp, commit, suite, module, invariant references
2. **Audited Files** — numbered list of files reviewed
3. **Summary** — count per severity (P0-P3)
4. **Overall Score** — per-dimension score out of 100
5. **Findings** — detailed per-finding using the Finding Format above
6. **Cross-Suite Overlap** — findings shared with component-purity audit (Localization dimension); deduplication guidance for fix plan
7. **Transitional Violations** — known documented tech debt
8. **Audit Traceability** — reference to the audit suite and report location

The report MUST be written to:

```
docs/raw/report/localization/latest/localization-{module}-{timestamp}.md
```

---

## Invariant Document Authority

When checking compliance:

- The invariant document is the source of truth
- For each finding, reference the specific Allowed or Forbidden pattern section from localization.md
- Do NOT override invariant rules based on perceived convenience
- Dynamic non-text content (numbers, dates formatted by the consumer) is not a violation
- Findings overlapping with component-purity audit must be flagged for deduplication in the fix plan
