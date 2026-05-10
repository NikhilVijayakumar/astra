<!-- generated-by: gsd-doc-writer -->

# LanguageProvider

The `LanguageProvider` component wraps your React application and provides i18n context to all descendant components.

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
