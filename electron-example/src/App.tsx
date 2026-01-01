import { FC } from 'react';
import { ThemeProvider, LanguageProvider } from 'astra';
import { createTheme } from '@mui/material/styles';
import { MainLayout } from './layout/MainLayout';
import enTranslations from './localization/en.json';
import esTranslations from './localization/es.json';

// Create light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <LanguageProvider
        translations={{
          en: enTranslations,
          es: esTranslations,
        }}
        availableLanguages={[
          { code: 'en', label: 'English' },
          { code: 'es', label: 'Español' },
        ]}
        defaultLanguage="en"
      >
        <MainLayout />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
