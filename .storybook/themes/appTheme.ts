import { createTheme } from '@mui/material/styles';
import colors from './colors';

const basePalette = {
  primary: {
    main: colors.light.primary,
  },
  secondary: {
    main: colors.light.secondary,
  },
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...basePalette,
    background: {
      default: colors.light.background,
      paper: colors.light.surface,
    },
    text: {
      primary: colors.light.text,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...basePalette,
    background: {
      default: colors.dark.background,
      paper: colors.dark.surface,
    },
    text: {
      primary: colors.dark.text,
    },
  },
});

export { lightTheme, darkTheme };
