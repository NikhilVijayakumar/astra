import { ThemeProviderProps } from './themeData';
type ControllableThemeProviderProps = ThemeProviderProps & {
    /** Optional prop to externally control the theme mode, for Storybook integration */
    forceTheme?: 'light' | 'dark';
};
export declare function ThemeProvider({ children, lightTheme, darkTheme, forceTheme, }: ControllableThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
