import { useEffect } from 'react';
import { useDataState, useLanguage, useTheme } from 'astra';
import { CharacterRepo } from '../repo/CharacterRepo';
import type { ApiResponse } from '../repo/models';

export const useCharacterViewModel = () => {
  // 1. Data State (Model)
  const [dataState, execute] = useDataState<ApiResponse>();
  
  // 2. Localization & Theme
  const { literal, setCurrentLanguage, currentLanguage } = useLanguage();
  const { toggleDarkMode, darkMode } = useTheme();

  // 3. Logic / Interactors
  const loadCharacters = () => {
    execute(() => CharacterRepo.getCharacters());
  };

  const handleRefresh = () => {
    loadCharacters();
  };

  const handleLangSwitch = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en');
  };

  const str = (key: string) => literal[key] || key;

  // 4. Lifecycle
  useEffect(() => {
    loadCharacters();
  }, []);

  return {
    state: {
      dataState,
      darkMode,
      currentLanguage,
    },
    actions: {
      handleRefresh,
      handleLangSwitch,
      toggleDarkMode,
    },
    ui: {
      str,
    }
  };
};
