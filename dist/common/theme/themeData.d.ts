import { ReactNode } from 'react';
import { Theme } from '@mui/material/styles';
export type ThemeContextValue = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};
export type ThemeProviderProps = {
    children: ReactNode;
    lightTheme: Theme;
    darkTheme: Theme;
};
