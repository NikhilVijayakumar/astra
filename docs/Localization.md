# Localization (i18n)

Astra provides a lightweight, Context-based localization solution. It is designed to be simple and fully typed, allowing instant switching of languages and managing translation strings (literals).

## Components

### 1. LanguageProvider (`src/common/localization/LanguageProvider.tsx`)

This is the main wrapper component that manages the localization state.

#### Props
| Prop | Type | Description |
|Args|---|---|
| `children` | `ReactNode` | The app content. |
| `translations` | `TranslationMap` | An object containing all translation strings. |
| `availableLanguages` | `LanguageDefinition[]` | List of supported languages (code & label). |
| `defaultLanguage` | `string` | (Optional) Initial language code. Defaults to 'en'. |

#### State Management
- Maintains `currentLanguage` state.
- Updates the `literal` object (the current dictionary) whenever the language changes.

---

### 2. Context & Hooks (`src/common/localization/LanguageContext.ts`)

#### `useLanguage()` Hook
Returns the context value:
```typescript
const { 
  currentLanguage,    // e.g., 'en'
  setCurrentLanguage, // function to change language
  literal,            // object containing key-value strings
  availableLanguages  // list of options for UI selectors
} = useLanguage();
```

#### `LanguageDefinition`
```typescript
type LanguageDefinition = {
  code: string;  // 'en', 'es', 'fr'
  label: string; // 'English', 'Español', 'Français'
}
```

## Usage Guide

1.  **Define Translations**:
    ```typescript
    const translations = {
      en: { welcome: "Welcome", logout: "Logout" },
      es: { welcome: "Bienvenido", logout: "Cerrar sesión" }
    };
    ```

2.  **Wrap Application**:
    ```tsx
    <LanguageProvider translations={translations} availableLanguages={languages}>
      <App />
    </LanguageProvider>
    ```

3.  **Consume in Component**:
    ```tsx
    const { literal, setCurrentLanguage } = useLanguage();
    
    return (
      <div>
        <h1>{literal['welcome']}</h1>
        <button onClick={() => setCurrentLanguage('es')}>ES</button>
      </div>
    );
    ```

## Integration with ApiService
The `literal` object is often passed to the `ApiService` constructor. This ensures that generic error messages (like "Network Error") are also localized based on the user's selected language.
