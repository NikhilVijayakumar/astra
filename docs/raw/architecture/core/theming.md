# Architecture: Theming

Astra provides a **MUI-based theming system** with light/dark mode support and custom design tokens.

## Theme Structure

```
Theme System
├── ThemeProvider      # MUI theme wrapper
├── Light Theme        # Light mode tokens
├── Dark Theme         # Dark mode tokens
└── ThemeTokens        # Custom design tokens
```

## ThemeProvider Setup

Wrap your application with `ThemeProvider` at app root:

```typescript
import { ThemeProvider, ThemeToggle } from 'astra';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: { mode: 'light' },
});

const darkTheme = createTheme({
  palette: { mode: 'dark' },
});

function App() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <ThemeToggle />
      <MainContent />
    </ThemeProvider>
  );
}
```

## Design Tokens

Astra provides design tokens from `src/theme/tokens/`:

| Token | Usage | Source |
|-------|-------|--------|
| `primary` | Main brand color | `src/theme/tokens/colors.ts` |
| `background.light` | Light mode background | `src/theme/tokens/colors.ts` |
| `background.dark` | Dark mode background | `src/theme/tokens/colors.ts` |
| `error` | Error states | `src/theme/tokens/colors.ts` |
| `success` | Success states | `src/theme/tokens/colors.ts` |

Never hardcode colors — always import from `astra`:

```typescript
import { spacing, typography } from 'astra';
```

### Using Theme in Components

```typescript
import { useTheme } from 'astra';

function MyComponent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
      }}
    >
      Content
    </Box>
  );
}
```

## Theme Toggle

Use `ThemeToggle` component for light/dark switching:

```typescript
import { ThemeToggle } from 'astra';

function AppHeader() {
  return (
    <AppBar>
      <Toolbar>
        <Typography>Application</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
```

## Custom Theme Extensions

Extend Astra theme with application-specific tokens:

```typescript
import { createTheme } from '@mui/material/styles';
import { spacing, typography } from 'astra';

const appTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: { main: '#1976d2' },
    background: {
      default: '#F5F5F7',
      paper: '#FFFFFF',
    },
  },
});
```

## Using Tokens in Components

### DO: Use Theme Tokens
```typescript
<Box sx={{ backgroundColor: 'primary.main' }}>
  Content
</Box>
```

### DON'T: Hardcode Colors
```typescript
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
