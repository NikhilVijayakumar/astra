<!-- generated-by: gsd-doc-writer -->

# Translation Patterns

Guidelines for organizing translations and accessing localized strings in Astra.

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
