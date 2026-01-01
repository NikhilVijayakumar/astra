import { useDataState } from 'astra';
import { SettingsState } from '../state/SettingsState';
import { SettingsRepo } from '../repo/SettingsRepo';
import { SettingsData } from '../../../common/types/domain';

export const useSettingsViewModel = () => {
  // Instantiate Repo (singleton-like or local, here local is fine as it's stateless wrapper around localStorage)
  const settingsRepo = new SettingsRepo();
  const [state, execute] = useDataState<SettingsData>();

  // Load settings
  const loadSettings = async () => {
    await execute(() => settingsRepo.getSettings());
  };

  // Save settings
  const saveSettings = async (newSettings: SettingsData) => {
      // Optimistic updat or standard wait?
      // Let's use execute to handle loading/error states for save too
      await execute(() => settingsRepo.saveSettings(newSettings));
  };

  // Update individual setting
  const updateSetting = async <K extends keyof SettingsData>(
    key: K,
    value: SettingsData[K]
  ) => {
    if (state.isSuccess && state.data) {
      const newSettings = { ...state.data, [key]: value };
      await saveSettings(newSettings);
    }
  };

  return {
    state: state as SettingsState,
    loadSettings,
    saveSettings,
    updateSetting,
  };
};
