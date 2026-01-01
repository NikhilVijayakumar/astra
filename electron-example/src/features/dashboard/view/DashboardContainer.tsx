import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import { AppStateHandler } from 'astra';
import { useDashboardViewModel } from '../viewmodel/useDashboardViewModel';
import { DashboardHeader } from './DashboardHeader';
import { DashboardStats } from './DashboardStats';
import { DashboardState } from '../state/DashboardState';

// Stateful container component - manages state via ViewModel
export const DashboardContainer: FC = () => {
  const { state, loadDashboard, refresh } = useDashboardViewModel();

  useEffect(() => {
    loadDashboard();
  }, []);

  const DashboardSuccess: FC<{ appState: DashboardState }> = ({ appState }) => (
    <DashboardStats data={appState.data!} />
  );

  return (
    <Box sx={{ p: 3 }}>
      <DashboardHeader onRefresh={refresh} />
      
      {/* Use AppStateHandler from astra to handle loading/error/empty/success states */}
      <AppStateHandler
        appState={state}
        SuccessComponent={DashboardSuccess}
      />
    </Box>
  );
};
