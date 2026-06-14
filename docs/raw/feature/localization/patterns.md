<!-- generated-by: gsd-doc-writer -->

# Translation Patterns

Guidelines for organizing translations and accessing localized strings in Astra.

## Overview

Translation Patterns defines the conventions for structuring translation dictionaries, naming keys, and accessing localized strings throughout the Astra application. Following these patterns ensures consistency across features and simplifies adding new languages.

## Translation Structure

Organize translations as a flat key-value object per language:

```ts
const translations = {
  en: {
    // UI Labels
    "ui.save": "Save",
    "ui.cancel": "Cancel",
    "ui.delete": "Delete",
    // Messages
    "msg.welcome": "Welcome back",
    "msg.saved": "Changes saved",
    // Forms
    "form.name.label": "Name",
    "form.email.placeholder": "Enter your email",
  },
  es: {
    "ui.save": "Guardar",
    "ui.cancel": "Cancelar",
    "msg.welcome": "Bienvenido de nuevo",
  },
};
```

## Key Naming Conventions

| Pattern         | Example                            | Use Case               |
| --------------- | ---------------------------------- | ---------------------- |
| `category.key`  | `ui.save`, `msg.error`             | Groups related strings |
| `component.key` | `header.title`, `footer.copyright` | Component-scoped       |
| `screen.action` | `login.submit`, `settings.reset`   | Page-specific          |

## Accessing Translations

```tsx
// Via useLanguage hook
const { literal } = useLanguage();

// Template string in component
<h1>{literal['header.title']}</h1>
<button>{literal['ui.save']}</button>
```

## Best Practices

1. **Prefix keys by category** — `ui.*`, `msg.*`, `form.*`, `validation.*`
2. **Use consistent naming** — snake_case for keys, camelCase for structure
3. **Provide fallbacks** — handle missing keys gracefully in UI
4. **Keep translations flat** — avoid nested objects, use dot notation instead

## Adding New Language

```ts
const translations = {
  // ...existing languages
  de: {
    "ui.save": "Speichern",
    "ui.cancel": "Abbrechen",
  },
};

const languages = [
  // ...existing
  { code: "de", label: "Deutsch" },
];
```

Then add to provider:

```tsx
<LanguageProvider translations={translations} availableLanguages={languages}>
```

## Responsibilities

- Define a consistent key-naming convention for all translations
- Provide guidance on flat dictionary structure per language
- Document patterns for accessing translations in components
- Establish conventions for adding new languages

## Non-Responsibilities

- Not a replacement for full i18n library (pluralization, interpolation, date/number formatting)
- Does not enforce patterns via tooling or lint rules (convention-only)
- Does not cover runtime key fallback or merging strategies
- Does not specify file-splitting or lazy-loading strategies for large translation sets

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| **Dot-notation keys** | Keys like `ui.save` create a namespaced flat structure instead of nested objects |
| **Category prefixing** | `ui.*`, `msg.*`, `form.*` group related keys for maintainability |
| **Per-language dictionary** | Each language is an independent flat `Record<string, string>` |
| **Partial coverage** | Languages may define a subset of keys — missing keys surface as `undefined` at runtime |

## Edge Cases

- **Missing key in active language**: The hook returns `undefined` — consuming code must handle with fallback or optional chaining
- **Language with no keys**: An empty dictionary `{}` is valid but produces no translated strings
- **Dot key collision**: Keys like `form.name` and `form.name.label` can collide if mixed — keep keys at one depth level
- **Non-string values**: Translation values must be strings — inserting objects or numbers will cause rendering issues

## States

- **Defined:** Translation structure is fully specified with conventions and examples
- **Undefined:** Patterns are convention-only — no runtime enforcement via tooling or lint rules
- **Extended:** Adding a new language following the documented pattern

## Inputs/Outputs

| Input | Output |
|-------|--------|
| Flat `Record<string, string>` per language | Dot-notation keys resolved at runtime via `literal["key"]` |
| Category prefix (`ui.*`, `msg.*`, `form.*`) | Namespaced, maintainable translation structure |
| New language `{ code, translations }` | Extended `translationMap` and `availableLanguages` array |

## Error Conditions

- **Missing key in active language**: `literal["key"]` returns `undefined` — component must handle with `?? key` fallback or optional chaining
- **Dot key collision**: Mixing `form.name` and `form.name.label` at different depths causes ambiguous lookups
- **Non-string values**: Objects or numbers in translation values produce React rendering errors at runtime
- **Partial language coverage**: Languages with subset of keys render missing text as `undefined` in UI

## Future Enhancements

- Automated key-coverage reporting in CI to flag missing translations
- Namespace-based file splitting with lazy loading per route or feature
- Parameterized keys with runtime variable interpolation
- Shared translation key library consumable by mobile apps or backend emails

## Open Questions

- Should keys follow a strict hierarchical namespace or remain flat with prefixes?
- How should translation memory or machine-translated fallbacks be integrated?
- Is a codemod needed to migrate from hardcoded strings to `literal["key"]` usage?
