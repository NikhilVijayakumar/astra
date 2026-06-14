# Translation Patterns

---

# Feature Summary

Conventions for structuring translation dictionaries, naming keys, and accessing localized strings. Defines the dot-notation key format (`domain.element.key`), prefix categories (`ui.*`, `msg.*`, `form.*`, `validation.*`), and per-language flat `Record<string, string>` structure. These patterns are convention-only — no runtime enforcement via tooling or lint rules.

---

# Implementation Reference
## Status
Not Yet Implementated (convention-only; no source module enforces these patterns)
## Source Files
| File | Role |
|------|------|
| `src/common/localization/LanguageProvider.tsx` | `TranslationMap` type definition consumes pattern |
| `src/common/localization/LanguageContext.ts` | `literal: Record<string, string>` is the runtime shape |
| `docs/raw/architecture/core/localization.md` | Architecture spec defining key naming convention |
| `docs/raw/architecture/invariants/localization.md` | Invariant rules prohibiting hardcoded strings |
## Public API
```typescript
// TranslationMap shape (from LanguageProvider.tsx)
type TranslationMap = {
  [key: string]: Record<string, string>;  // language code → flat dictionary
};

// Consumed via LanguageContextValue.literal (from LanguageContext.ts)
type LanguageContextValue = {
  literal: Record<string, string>;  // dot-notation keys → translated values
  // ... other fields
};
```

Expected key structure (convention):
```
category.element.identifier      →  "ui.save"
component.element.action         →  "header.title"
screen.action                    →  "login.submit"
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Dot-Notation Keys | `"ui.save"`, `"msg.welcome"` — flat keys with semantic delimiters | Avoids nested object ambiguity; enables simple `Record<string, string>` lookup |
| Category Prefixing | `ui.*`, `msg.*`, `form.*`, `validation.*` | Groups related keys for maintainability and enables future namespace-based code splitting |
| Per-Language Dictionary | Each language is an independent `Record<string, string>` | Languages may have partial coverage; missing keys surface as `undefined` |
| Flat Structure | No nested objects — strictly `{ "dot.key": "value" }` | Consistent lookup (`literal["key"]`); no traversal or deep merge needed |
| Convention Over Configuration | Patterns documented but not enforced | Teams adopt at their own pace; no runtime dependency on lint tooling |

---

# Technical Structure

## Data format
```typescript
// Per-language translation dictionary (flat, dot-notation)
const translations = {
  en: {
    "ui.save": "Save",
    "ui.cancel": "Cancel",
    "ui.delete": "Delete",
    "msg.welcome": "Welcome back",
    "msg.saved": "Changes saved",
    "form.name.label": "Name",
    "form.email.placeholder": "Enter your email",
  },
  es: {
    "ui.save": "Guardar",
    "ui.cancel": "Cancelar",
    "msg.welcome": "Bienvenido de nuevo",
    // "ui.delete" and others intentionally omitted — partial coverage
  },
};
```

## Inputs/Outputs
| Input | Output |
|-------|--------|
| `literal["category.key"]` | Translated string or `undefined` if missing |
| `TranslationMap` with `en`, `es`, etc. | Provider's `literal` switches on language change |
| New language entry | Extended `TranslationMap` + `LanguageDefinition[]` |

---

# Error Handling

| Error Type | Cause | System Response | Consumer Response |
|------------|-------|-----------------|-------------------|
| Missing key | `literal["ui.save"]` not defined for active language | Returns `undefined` | Use `??` fallback or conditional render |
| Dot key collision | `form.name` and `form.name.label` both exist | Last one wins in `Record` — but semantically ambiguous | Keep keys at one depth level |
| Non-string value | Object or number stored in translation value | `React` renders `[object Object]` or nothing | Only store string values in `Record<string, string>` |
| Partial language coverage | Language has subset of keys | Missing keys return `undefined` | Validate coverage in CI or handle per-key |
| Empty dictionary | Language `{}` in `TranslationMap` | All lookups return `undefined` | Provide at minimum all required keys |

---

# Non-Functional Requirements

| Requirement | Constraint |
|-------------|------------|
| Lookup Performance | O(1) — `Record<string, string>` access |
| Memory | Full dictionary per language in memory simultaneously |
| Scalability | Flat keys work to ~1000 entries before maintenance becomes unwieldy |
| No Runtime Cost | Patterns are documentation-only — zero bundle impact |
| CI Opportunity | Key coverage can be validated in CI via script (not implemented) |

---

# Architecture Compliance Review

## Applied Patterns
- **No Hardcoded Strings**: `localization-invariant.md` — patterns explicitly document key-based access
- **Flat Key Structure**: `localization.md` key format `{domain}.{page}.{element}` — compliant
- **Partial Coverage**: Documented as valid — languages may define subsets, aligns with `localization-invariant.md` fallback behavior

## Risks
- **No enforcement**: Pattern violations compile silently — no tooling catches hardcoded strings or non-standard key formats
- **Partial coverage silent**: Missing keys produce `undefined` in UI with no warning — consumers must remember to provide fallback
- **Dot key collision**: Not prevented by type system — `form.name` and `form.name.label` can coexist ambiguously
- **No interpolation standard**: Variable substitution (`{count} items`) not defined — each component invents its own format

## Gaps
- No parameterized/interpolated key support (e.g., `t("item.count", { count })`)
- No pluralization rules (singular/dual/plural by locale)
- No date/number formatting integration with locale
- No file-splitting or lazy-loading strategy for large translation sets
- No automated key-coverage reporting in CI
- No TypeScript template literal autocompletion for keys

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `LanguageProvider` | `src/common/localization/LanguageProvider.tsx` | `LanguageProvider`, `TranslationMap` | `react`, `./LanguageContext` |
| `LanguageContext` | `src/common/localization/LanguageContext.ts` | `LanguageContext`, `LanguageContextValue`, `LanguageDefinition`, `useLanguage` | `react` |

---

# Final Rule

All translation keys must use dot-notation format `domain.element.action`. All languages must follow the same key structure — a key defined in one language must exist in all others (or be handled with explicit fallback). No nested translation objects. No hardcoded user-facing strings outside the translation dictionary.
