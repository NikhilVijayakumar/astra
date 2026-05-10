<!-- generated-by: gsd-doc-writer -->

# useLanguage Hook

The `useLanguage` hook provides access to the i18n context. It must be used within a `LanguageProvider`.

## Import

```ts
import { useLanguage } from "@astra/localization";
```

## Return Value

```ts
interface LanguageContextValue {
  currentLanguage: string; // Active language code
  setCurrentLanguage: (lang: string) => void; // Switch language
  literal: Record<string, string>; // Current translation keys
  availableLanguages: LanguageDefinition[]; // Available languages
}
```

## Usage

```tsx
const MyComponent = () => {
  const { currentLanguage, setCurrentLanguage, literal, availableLanguages } =
    useLanguage();

  return (
    <div>
      <h1>{literal["title"]}</h1>
      <p>Current: {currentLanguage}</p>
      <select onChange={(e) => setCurrentLanguage(e.target.value)}>
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};
```

## Error Handling

Throws an error if used outside `LanguageProvider`:

```
Error: useLanguage must be used within a AstraLanguageProvider
```

## Combined with LanguageSelector

```tsx
import { LanguageSelector } from "@astra/localization";

// LanguageSelector automatically uses useLanguage internally
// Just drop it into your header/nav
<header>
  <LanguageSelector />
</header>;
```
