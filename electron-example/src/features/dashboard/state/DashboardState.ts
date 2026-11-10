import { AppState } from 'astra';
import { DashboardData } from '../../../common/types/domain';

// Dashboard state extends AppState with DashboardData
export type DashboardState = AppState<DashboardData>;
