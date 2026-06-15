# Translation Patterns: Feature Technical

## 1. Technical Overview

Translation Patterns defines the naming conventions and dictionary structure consumed by the `LanguageProvider` / `useLanguage` system. All translations are organized as per-language flat JSON files in `src/common/localization/{lang}.json` using dot-notation keys following `{domain}.{page}.{element}` pattern. Keys are category-prefixed (`ui.*`, `msg.*`, `form.*`, `validation.*`) for maintainability. Conventions are enforced via code review — no automated lint rules exist. Flat structure avoids nested object traversal ambiguity.

## 2. Architecture Realization

| Feature Spec Concept | Architecture Implementation |
|---|---|
| Dot-notation keys | `{domain}.{page}.{element}` — e.g. `app.list.title`, `common.save` |
| Category prefixing | `ui.*`, `msg.*`, `form.*`, `validation.*` — documented convention |
| Per-language dictionary | Flat JSON files: `en.json`, `es.json` in `src/common/localization/` |
| Partial coverage | Languages define subset of keys — missing keys surface as `undefined` at runtime |
| Key naming | snake_case for key segments, camelCase for structural grouping |

**Consumption pattern:**

```typescript
// ViewModel resolves translations:
import { useLanguage } from 'astra';
const { literal } = useLanguage();
const title = literal['app.list.title'];

// Pass resolved strings as props to pure components:
// <PageHeader title={title} />
```

## 3. Data Flow

```
Developer adds key to en.json: "ui.save": "Save"
       ↓
Key added to es.json: "ui.save": "Guardar"
       ↓
Translation files imported in src/common/localization/index.ts
       ↓
Passed as translations prop to LanguageProvider
       ↓
Component accesses literal['ui.save'] → resolved string
```

Adding a new language:

```
Create fr.json with same key structure
       ↓
Add { code: 'fr', label: 'Français' } to availableLanguages
       ↓
LanguageProvider exposes new option → users can select
```

## 4. State Management

No state transitions specific to patterns — patterns are conventions, not runtime constructs. The dictionary file content maps directly to the `literal` object exposed by `useLanguage()`.

| Pattern State | Description |
|---|---|
| Defined | Convention documented with examples |
| Extended | New language added following pattern |
| Degraded | Conventions diverge across features |

## 5. Styling Implementation

No styling impact. Translation patterns govern text content only. String length variance across languages must be considered in layout components — use `min-width` and `overflow` handling rather than fixed widths.

## 6. Interaction Design

No interaction logic in patterns — patterns are authoring conventions. The runtime behavior is dictated by `LanguageProvider`:

- Partial language coverage: missing keys render as `undefined` — consumer handles with fallback
- Empty dictionary: all keys return `undefined` — UI renders without text
- Non-string values in dictionary: causes rendering errors — must be validated at authoring time

## 7. Accessibility Implementation

- Translation keys for ARIA labels must follow the same `{domain}.{page}.{element}` pattern
- Screen reader text must be included in translation dictionaries, not hardcoded
- Alt text for images must use translation keys
- Translations must not contain HTML or markup — text-only values to prevent XSS in ARIA attributes

## 8. Error Handling

| Condition | Behavior | Mitigation |
|---|---|---|
| Missing key in active language | `literal['key']` returns `undefined` | Optional chaining or fallback component |
| Dot key collision | `form.name` and `form.name.label` cause ambiguous lookups | Keep all keys at one depth level |
| Non-string values | Objects/numbers in dictionary cause rendering errors | Validate at authoring time |
| Partial language coverage | Language missing keys renders empty text | CI coverage check (future) |
| No fallback string | Silent `undefined` in UI — no error thrown | Use key itself as visual fallback during development |

## 9. Performance Considerations

- Flat dictionary structure avoids deep object traversal on every key access
- Full dictionaries loaded at mount — no lazy-loading for pattern-defined files
- String length variance across locales impacts layout reflow — test with longest-translation placeholder
- Key lookup is O(1) property access on flat object — no nested traversal needed
- No interpolation runtime cost in pattern layer — resolved in ViewModel

## 10. Integration Points

| Integration | Mechanism |
|---|---|
| Translation files → LanguageProvider | `import en from './en.json'` → passed as `translations={{ en, es }}` |
| Key convention → Code review | Pattern adherence checked during PR review (no automated enforcement) |
| New language → Available languages | Add entry to `availableLanguages` array in `LanguageProvider` |
| Missing key detection → Development | Runtime `undefined` values visible in UI — no silent fallback |
| Interpolation → ViewModel | `literal['key']` returns raw template string; `interpolate()` in ViewModel |

## 11. Open Questions

- Should keys follow a strict hierarchical namespace or remain flat with prefixes?
- Is a codemod needed to migrate from hardcoded strings to translation key usage?
- Should automated key-coverage reporting be added to CI?
- Are namespace-based file splits with lazy loading needed per route?
