# Architecture: Localization (i18n)

Astra provides a **React Context-based localization system** with runtime language switching and dictionary-based translations.

## Localization Structure

```
Localization System
├── LanguageProvider    # i18n context wrapper
├── useLanguage Hook    # Access translations
├── Translation Files  # Per-language files
└── Available Languages # Language config
```

## LanguageProvider Setup

Wrap your application with `LanguageProvider` at app root:

```typescript
import { LanguageProvider, useLanguage } from 'astra';

const translations = {
  en: {
    'app.title': 'My Application',
    'app.welcome': 'Welcome',
  },
  es: {
    'app.title': 'Mi Aplicación',
    'app.welcome': 'Bienvenido',
  },
};

const availableLanguages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

function App() {
  return (
    <LanguageProvider
      translations={translations}
      availableLanguages={availableLanguages}
      defaultLanguage="en"
    >
      <MainContent />
    </LanguageProvider>
  );
}
```

## useLanguage Hook

Use `useLanguage` hook to access translations:

```typescript
import { useLanguage } from 'astra';

function PageHeader() {
  const { currentLanguage, setCurrentLanguage, literal, availableLanguages } = useLanguage();

  return (
    <div>
      <h1>{literal['app.title']}</h1>
      <button onClick={() => setCurrentLanguage('es')}>
        {availableLanguages.find(l => l.code === currentLanguage)?.label}
      </button>
    </div>
  );
}
```

## Translation Key Patterns

### Naming Convention

```
{domain}.{page}.{element}

app.list.title        → 'Item List'
app.install.button    → 'Install'
app.settings.save     → 'Save Settings'
error.notFound        → 'Not Found'
```

### Translation Files Structure

```
src/
└── common/
    └── localization/
        ├── en.json     # English translations
        ├── es.json     # Spanish translations
        └── index.ts    # Translation exports
```

### Translation JSON Format

```json
{
  "app": {
    "title": "My Application",
    "welcome": "Welcome"
  },
  "common": {
    "save": "Save",
    "cancel": "Cancel",
    "confirm": "Confirm",
    "loading": "Loading...",
    "error": "Error"
  }
}
```

## Using Translations in Components

### DO: Use Translation Keys
```typescript
function AppHeader() {
  const { literal } = useLanguage();

  return (
    <Box>
      <Typography variant="h4">{literal['app.title']}</Typography>
      <Button>{literal['common.save']}</Button>
    </Box>
  );
}
```

### DON'T: Hardcode Strings
```typescript
function AppHeader() {
  return (
    <Box>
      <Typography variant="h4">My Application</Typography>
      <Button>Save</Button>
    </Box>
  );
}
```

## Language Switching

### Per-Component Language
```typescript
function LanguageSelector() {
  const { currentLanguage, setCurrentLanguage, availableLanguages } = useLanguage();

  return (
    <Select value={currentLanguage} onChange={(e) => setCurrentLanguage(e.target.value)}>
      {availableLanguages.map(lang => (
        <MenuItem key={lang.code} value={lang.code}>
          {lang.label}
        </MenuItem>
      ))}
    </Select>
  );
}
```

## Rules

- **Never hardcode strings** — always use translation keys
- **Use LanguageProvider** at app root
- **Use useLanguage hook** for translations
- **Follow key pattern**: `{domain}.{page}.{element}`
- **Support languages**: English (en), expandable

## Related

- [MVVM Pattern](mvvm-pattern.md)
- [State Management](state-management.md)
- [Theming](theming.md)
