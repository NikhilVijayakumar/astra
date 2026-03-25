# Localization (i18n)

Localization in Astra is implemented with a context provider and hook under src/common/localization.

## Source Modules

- LanguageProvider.tsx
- LanguageContext.ts
- LanguageComponent.tsx (LanguageSelector)

## LanguageProvider Contract

```ts
type TranslationMap = {
  [languageCode: string]: Record<string, string>;
};

type LanguageProviderProps = {
  children: ReactNode;
  translations: TranslationMap;
  availableLanguages: LanguageDefinition[];
  defaultLanguage?: string; // default: 'en'
};
```

Runtime behavior:
- Initializes currentLanguage from defaultLanguage.
- Initializes literal from translations[defaultLanguage] or {}.
- Updates literal when currentLanguage changes.

## useLanguage Hook Contract

```ts
type LanguageContextValue = {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
  literal: Record<string, string>;
  availableLanguages: LanguageDefinition[];
};
```

If used outside LanguageProvider, useLanguage throws an error.

## LanguageDefinition

```ts
type LanguageDefinition = {
  code: string;
  label: string;
};
```

## Client Integration Standard

```tsx
import { LanguageProvider } from 'astra';
import en from './localization/en.json';
import es from './localization/es.json';

const translations = { en, es };
const availableLanguages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Espanol' },
];

export function AppRoot() {
  return (
    <LanguageProvider
      translations={translations}
      availableLanguages={availableLanguages}
      defaultLanguage="en"
    >
      <App />
    </LanguageProvider>
  );
}
```

## Translation Key Strategy

Astra expects Record<string, string> per language.

Recommended key pattern:
- app.title
- nav.settings
- users.empty
- error.network

Keep keys stable across all language files.

## LanguageSelector Component

LanguageSelector is provided in src/common/localization/LanguageComponent.tsx.

Behavior:
- Uses useLanguage.
- Renders current language label.
- Shows menu for availableLanguages.
- Calls setCurrentLanguage on selection.

## Integration with Repository Layer

ApiService constructor accepts literal map.

Pattern:

1. Get literal from useLanguage.
2. Build/get ApiService with that literal.
3. Build feature repositories from ApiService.

Note on caching behavior:
- getApiService caches by baseUrl.
- If language changes but baseUrl is unchanged, existing cached instance may continue using original literal.
- If strict per-language API messages are required, account for this in client strategy.

## Required Status Literal Keys

For status and fallback messages, include:
- success_message
- created_message
- bad_request_message
- unauthorized_message
- not_found_message
- internal_server_error
- internet_error
- idle_message
- unknown_message

## Standards Checklist

1. LanguageProvider at app root.
2. Same key set across all language files.
3. No hardcoded user-visible strings in ViewModel/repository code paths.
4. Use literal values for error and empty-state text where needed.
5. Use LanguageSelector or equivalent UI to switch languages.

## Related Docs

- Repository_Layer.md
- MVVM_Clean_Architecture.md

