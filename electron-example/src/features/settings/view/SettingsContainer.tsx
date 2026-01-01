import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import { useLanguage, useTheme as useAstraTheme, AppStateHandler } from 'astra';
import { SettingsState } from '../state/SettingsState';
import { SettingsData } from '../../../common/types/domain';
import { useSettingsViewModel } from '../viewmodel/useSettingsViewModel';
import { ThemeSettings } from './ThemeSettings';
import { LanguageSettings } from './LanguageSettings';

// Stateful container component - manages settings state
export const SettingsContainer: FC = () => {
  const { literal, setCurrentLanguage } = useLanguage();
  const { toggleDarkMode } = useAstraTheme();
  const { state, loadSettings, updateSetting } = useSettingsViewModel();

  useEffect(() => {
    loadSettings();
  }, []);

  const handleThemeChange = (theme: 'light' | 'dark') => {
    updateSetting('theme', theme);
    // Toggle the actual theme in the app
    toggleDarkMode();
  };

  const handleLanguageChange = (language: string) => {
    updateSetting('language', language);
    // Change the actual language in the app
    setCurrentLanguage(language);
  };

  return (
      <AppStateHandler<SettingsData, SettingsState>
        appState={state}
        errorMessage={literal['common.error'] || 'An error occurred'}
      >
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Box sx={{ flex: '1 1 300px' }}>
            <ThemeSettings
              theme={state.data?.theme ?? 'light'}
              onThemeChange={handleThemeChange}
            />
          </Box>
          <Box sx={{ flex: '1 1 300px' }}>
            <LanguageSettings
              language={state.data?.language ?? 'en'}
              onLanguageChange={handleLanguageChange}
            />
          </Box>
        </Box>
      </AppStateHandler>
  );
};
