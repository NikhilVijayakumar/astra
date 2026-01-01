import { ServerResponse } from 'astra';
import { SettingsData } from '../../../common/types/domain';

const SETTINGS_KEY = 'app_settings';

export class SettingsRepo {
  async getSettings(): Promise<ServerResponse<SettingsData>> {
    try {
      const stored = localStorage.getItem(SETTINGS_KEY);
      const settings: SettingsData = stored
        ? JSON.parse(stored)
        : {
            theme: 'light',
            language: 'en',
            notifications: true,
          };

      return ServerResponse.success({
        status: 200,
        statusMessage: 'Settings loaded',
        data: settings,
      });
    } catch (error) {
      return ServerResponse.error({
        status: 500,
        statusMessage: 'Failed to load settings',
      });
    }
  }

  async saveSettings(settings: SettingsData): Promise<ServerResponse<SettingsData>> {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      return ServerResponse.success({
        status: 200,
        statusMessage: 'Settings saved',
        data: settings,
      });
    } catch (error) {
      return ServerResponse.error({
        status: 500,
        statusMessage: 'Failed to save settings',
      });
    }
  }
}
