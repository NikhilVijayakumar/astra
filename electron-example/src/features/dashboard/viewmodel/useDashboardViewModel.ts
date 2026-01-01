import { useDataState } from 'astra';
import { useApiClient } from '../../../common/repo/ApiClient';
import { DashboardRepo } from '../repo/DashboardRepo';
import { DashboardData } from '../../../common/types/domain';

export const useDashboardViewModel = () => {
  // Get the localized API client
  const apiClient = useApiClient();
  const dashboardRepo = new DashboardRepo(apiClient);

  // Use the useDataState hook from astra
  const [state, execute] = useDataState<DashboardData>();

  const loadDashboard = async () => {
    await execute(() => dashboardRepo.getDashboardStats());
  };

  const refresh = () => {
    loadDashboard();
  };

  return {
    state,
    loadDashboard,
    refresh,
  };
};
