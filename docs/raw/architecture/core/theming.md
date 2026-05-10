# Architecture: Theming

Rita follows **Astra's theming system** based on Material UI with custom tokens.

## Theme Structure

```
Theme System
├── ThemeProvider      # MUI theme wrapper
├── Light Theme      # Light mode tokens
├── Dark Theme      # Dark mode tokens
└── ThemeTokens    # Custom design tokens
```

## ThemeProvider Setup

Wrap Rita with `ThemeProvider` at app root:

```typescript
import { ThemeProvider, ThemeToggle } from 'astra';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: { mode: 'light' },
  // Custom tokens
  tokens: {
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
  },
});

const darkTheme = createTheme({
  palette: { mode: 'dark' },
  tokens: {
    primary: { main: '#90caf9' },
    secondary: { main: '#ce93d8' },
  },
});

export function RitaApp() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <ThemeToggle /> {/* Light/Dark toggle button */}
      <MainContent />
    </ThemeProvider>
  );
}
```

## Design Tokens

Rita uses **Astra's design tokens** from `src/theme/tokens/`:

| Token | Usage | Source |
|-------|-------|--------|
| `primary` | Main brand color | `src/theme/tokens/colors.ts` |
| `background.light` | Light mode background | `src/theme/tokens/colors.ts` |
| `background.dark` | Dark mode background | `src/theme/tokens/colors.ts` |
| `error` | Error states | `src/theme/tokens/colors.ts` |
| `success` | Success states | `src/theme/tokens/colors.ts` |

Never hardcode colors — always import from `astra`:

```typescript
import { colors, spacing, typography } from 'astra';
```

### Using Theme in Components

```typescript
import { useTheme } from 'astra';

function MyComponent() {
  const theme = useTheme(); // Returns MUI theme object

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
      }}
    >
      Hello
    </Box>
  );
}
```

## Theme Toggle

Use `ThemeToggle` component for light/dark switching:

```typescript
import { ThemeToggle } from 'astra';

// In any Rita screen:
function AppHeader() {
  return (
    <AppBar>
      <Toolbar>
        <Typography>Rita</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <ThemeToggle /> {/* Automatic light/dark toggle */}
      </Toolbar>
    </AppBar>
  );
}
```

## Custom Theme Extensions

Rita extends Astra theme with Rita-specific tokens:

```typescript
import { createTheme } from '@mui/material/styles';
import { colors, spacing, typography } from 'astra';

const ritaTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: { main: colors.primary },
    background: {
      default: colors.background.light,
      paper: colors.paperLight,
    },
  },
});
```

## Rita Theme Structure

Rita's theme uses Astra tokens:

```
src/
├── common/
│   └── theme/
│       ├── lightTheme.ts     # Uses Astra tokens
│       ├── darkTheme.ts    # Uses Astra tokens
│       └── index.ts      # Theme exports
├── theme/
│   └── tokens/          # Astra design tokens
│       ├── colors.ts
│       ├── spacing.ts
│       └── typography.ts
└── main.tsx              # ThemeProvider wrapper
```

## Using Tokens in Rita Components

### DO: Use Theme Tokens
```typescript
// ✅ Correct - use theme tokens
<Box sx={{ backgroundColor: 'primary.main' }}>
  Content
</Box>
```

### DON'T: Hardcode Colors
```typescript
// ❌ Wrong - hardcoded color
<Box sx={{ backgroundColor: '#1976d2' }}>
  Content
</Box>
```

## Rules

- **Never hardcode colors** — always use theme tokens
- **Use ThemeProvider** at app root
- **Use useTheme hook** for theme access
- **Include ThemeToggle** in headers/toolbars
- **Support both** light and dark modes

## Related

- [MVVM Pattern](mvvm-pattern.md)
- [State Management](state-management.md)
- [Localization](localization.md)