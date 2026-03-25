import { ThemeOptions } from '@mui/material/styles';
export declare const lightTheme: import('@mui/material').Theme;
export declare const darkTheme: import('@mui/material').Theme;
/**
 * Creates custom light and dark themes by merging base Astra tokens with client overrides.
 *
 * @param lightOverrides - MUI ThemeOptions to override in light mode.
 * @param darkOverrides - MUI ThemeOptions to override in dark mode.
 * @returns { lightTheme, darkTheme } to be passed to ThemeProvider.
 */
export declare const createAstraTheme: (lightOverrides?: ThemeOptions, darkOverrides?: ThemeOptions) => {
    lightTheme: import('@mui/material').Theme;
    darkTheme: import('@mui/material').Theme;
};
