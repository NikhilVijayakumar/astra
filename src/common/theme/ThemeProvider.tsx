// src/common/theme/ThemeProvider.tsx
import { useState, useMemo} from 'react';
import { ThemeContext } from './themeContext';
import { ThemeProviderProps } from './themeData';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';



export function ThemeProvider({ children, lightTheme, darkTheme }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useState(() => {  
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

 
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode, lightTheme, darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
