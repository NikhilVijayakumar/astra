<!-- generated-by: gsd-doc-writer -->

# useLanguage Hook

The `useLanguage` hook provides access to the i18n context. It must be used within a `LanguageProvider`.

## Overview

`useLanguage` is the primary hook for accessing localization state. It returns the active language code, a setter to change the language, the current translation dictionary, and the list of available languages. It must be called within a `LanguageProvider`.

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

## Responsibilities

- Provide typed access to the localization context
- Return the current translation dictionary for use in JSX
- Expose `setCurrentLanguage` for runtime language switching
- Surface metadata about available languages to UI components

## Non-Responsibilities

- Does not fetch or load translations
- Does not cache or memoize dictionary lookups
- Does not provide pluralization or interpolation helpers
- Does not wrap or transform rendered output

## Edge Cases

- **Missing context:** If `useLanguage` is called outside `LanguageProvider`, it throws a descriptive error — catch this at the app boundary
- **Empty literal dictionary:** `literal` returns an empty `Record<string, string>` during initial load; components must handle missing keys gracefully
- **Invalid language code:** `setCurrentLanguage` does not validate its argument — passing an unsupported code results in a no-op from the provider
- **Concurrent language switches:** Rapid calls to `setCurrentLanguage` may cause multiple re-renders; the last call wins

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| **Context accessor** | The hook calls `useContext(LanguageContext)` and asserts the context exists |
| **Guard clause** | If context is missing the hook throws a descriptive error |
| **Destructured values** | All four return fields are plain values — no lazy getters or proxies |

## States

- **Bound**: Hook called inside `LanguageProvider` — returns valid `LanguageContextValue` with translations
- **Unbound**: Hook called outside `LanguageProvider` — throws descriptive error
- **Switching**: Consumer calls `setCurrentLanguage` — parent provider re-renders; hook returns updated values
- **Empty dictionary**: Active language has no translations — `literal` is an empty object

## Inputs/Outputs

| Input | Output |
|-------|--------|
| (none — no parameters) | `LanguageContextValue`: `{ currentLanguage, setCurrentLanguage, literal, availableLanguages }` |

## Error Conditions

- **Called outside provider**: Throws `Error: useLanguage must be used within a AstraLanguageProvider`
- **Missing translation key**: `literal["key"]` returns `undefined` — component must supply fallback
- **Invalid language set**: `setCurrentLanguage("xx")` accepted but yields empty `literal` — no validation on setter
- **Rapid re-renders**: Consecutive `setCurrentLanguage` calls may cause multiple re-renders before settling

## Future Enhancements

- `useTranslation(namespace)` hook for scoped access to feature-specific keys
- Memoized `t(key)` function to reduce object lookups in hot render paths
- Typed translation key autocompletion via TypeScript template literals
- `withTranslation` HOC for class component compatibility

## Open Questions

- Should `literal` be a Proxy-based lazy getter instead of a plain object?
- How should translation key changes trigger re-renders only for the affected subtree?
- Is a `formatMessage` helper with variable interpolation needed in the hook return?
