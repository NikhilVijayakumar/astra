import { AppState } from 'astra';
import { SettingsData } from '../../../common/types/domain';

// Settings state extends AppState with SettingsData
export interface SettingsState extends AppState<SettingsData> {}
