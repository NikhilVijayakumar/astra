import { 
  ThemeProvider, 
  LanguageProvider 
} from 'astra';
import { createTheme, CssBaseline } from '@mui/material';
import { CharacterList } from './view/CharacterList';
import { translations, availableLanguages } from './localization/translations';

// --- Theme Setup ---
const lightTheme = createTheme({
  palette: { 
    mode: 'light', 
    primary: { main: '#00b0c8' }, // Rick and Morty Blue
    secondary: { main: '#a9cf54' } // Rick and Morty Green
  },
});

const darkTheme = createTheme({
  palette: { 
    mode: 'dark', 
    primary: { main: '#00b0c8' },
    secondary: { main: '#a9cf54' }
  },
});

// --- Main App Wrapper ---
function App() {
  return (
    <LanguageProvider 
      translations={translations} 
      availableLanguages={availableLanguages}
      defaultLanguage="en"
    >
      <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
        <CssBaseline /> {/* Normalize CSS */}
        <CharacterList />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
