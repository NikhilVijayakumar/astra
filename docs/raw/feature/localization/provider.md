<!-- generated-by: gsd-doc-writer -->

# LanguageProvider

The `LanguageProvider` component wraps your React application and provides i18n context to all descendant components.

## Overview

`LanguageProvider` is the root component of the localization system. It wraps the application tree with a React Context that holds the current language state and the full translation dictionary set. Any descendant component can access translations and switch languages via the `useLanguage` hook.

## Props

| Prop                 | Type                   | Required | Default | Description                         |
| -------------------- | ---------------------- | -------- | ------- | ----------------------------------- |
| `children`           | `ReactNode`            | Yes      | —       | Application content                 |
| `translations`       | `TranslationMap`       | Yes      | —       | Key-value dictionaries per language |
| `availableLanguages` | `LanguageDefinition[]` | Yes      | —       | Supported language list             |
| `defaultLanguage`    | `string`               | No       | `'en'`  | Initial language code               |

## TranslationMap Type

```ts
type TranslationMap = {
  [key: string]: Record<string, string>;
};
```

Example:

```ts
const translations: TranslationMap = {
  en: { greeting: "Hello", title: "Welcome" },
  es: { greeting: "Hola", title: "Bienvenido" },
  fr: { greeting: "Bonjour", title: "Bienvenue" },
};
```

## Example

```tsx
import { LanguageProvider } from "@astra/localization";

const App = () => (
  <LanguageProvider
    translations={translations}
    availableLanguages={[
      { code: "en", label: "English" },
      { code: "es", label: "Español" },
    ]}
    defaultLanguage="en"
  >
    <Dashboard />
  </LanguageProvider>
);
```

## Context Value

The provider exposes:

- `currentLanguage` — Active language code (string)
- `setCurrentLanguage` — Function to change language
- `literal` — Current translation dictionary
- `availableLanguages` — Language definition array

## Responsibilities

- Initialize and hold the current language state
- Provide the active translation dictionary to the context
- Validate the default language against available languages
- Re-render the tree when the language changes
- Expose `availableLanguages` metadata to consumers

## Non-Responsibilities

- Does not fetch translations asynchronously
- Does not persist the selected language across sessions
- Does not perform language detection or negotiation
- Does not apply RTL or locale-specific formatting

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| **Context value** | The object exposed via `LanguageContext` containing `currentLanguage`, `setCurrentLanguage`, `literal`, and `availableLanguages` |
| **Re-render trigger** | Calling `setCurrentLanguage` updates provider state, which triggers a re-render of all consuming descendants |
| **Translation fallback** | The provider does not merge missing keys — each language dictionary stands alone |

## Edge Cases

- **Missing default language**: If `defaultLanguage` does not exist in `translations`, the provider falls back to the first available language
- **Empty availableLanguages**: Behavior is undefined — always provide at least one entry
- **Late translation addition**: Adding keys dynamically after mount is not supported — pass the complete map initially
- **Null / undefined children**: The provider renders `children` as-is; consumers must guard against missing content

## States

- **Mounted (valid)**: Provider initialized with valid `translations` and `availableLanguages`; context exposed to subtree
- **Mounted (fallback)**: `defaultLanguage` not found in `translations` — falls back to first available language
- **Language switch**: `setCurrentLanguage` called — triggers re-render; new `literal` dict propagated
- **Degraded**: `translations` is missing the active language — `literal` is an empty `Record<string, string>`

## Inputs/Outputs

| Input | Output |
|-------|--------|
| `translations: TranslationMap` | Context value `{ currentLanguage, setCurrentLanguage, literal, availableLanguages }` |
| `availableLanguages: LanguageDefinition[]` | Renders nothing directly; metadata exposed for `LanguageSelector` |
| `defaultLanguage: string` | Initial `currentLanguage` value |
| `children: ReactNode` | Wrapped subtree with i18n context access |

## Error Conditions

- **Missing default language**: `defaultLanguage` not in `translations` — provider selects first available language silently
- **Empty `availableLanguages`**: Behavior is undefined — consumers may crash when iterating empty array
- **Late translation addition**: Dynamic key addition after mount is not supported — pass complete map upfront
- **Runtime key removal**: If `translations` reference is replaced, context updates but may cause missing-key issues

## Future Enhancements

- Deep-merge fallback chain for partial translations (language → region → default)
- Translation hot-reload during development without full page refresh
- Persisted language preference across sessions via localStorage
- Async translation loading with Suspense integration

## Open Questions

- Should the provider validate translation keys across all languages for parity?
- How should region-specific variants (en-US vs en-GB) be modeled?
- Is a separate `TranslationContext` for pure key-value access worth splitting?
