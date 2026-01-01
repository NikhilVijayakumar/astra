import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { useLanguage } from 'astra';
import { DashboardContainer } from '../features/dashboard/view/DashboardContainer';
import { UsersContainer } from '../features/users/view/UsersContainer';
import { SettingsContainer } from '../features/settings/view/SettingsContainer';

export const MainLayout: FC = () => {
  const { literal } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState<'dashboard' | 'users' | 'settings'>('dashboard');

  const renderFeature = () => {
    switch (selectedFeature) {
      case 'dashboard':
        return <DashboardContainer />;
      case 'users':
        return <UsersContainer />;
      case 'settings':
        return <SettingsContainer />;
      default:
        return <DashboardContainer />;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Simple header */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', gap: 2 }}>
        <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          {literal['app.title'] || 'Electron MVVM Example'}
        </Box>
        <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
          <Box
            component="button"
            onClick={() => setSelectedFeature('dashboard')}
            sx={{
              px: 2,
              py: 1,
              border: 'none',
              background: selectedFeature === 'dashboard' ? 'primary.main' : 'transparent',
              color: selectedFeature === 'dashboard' ? 'white' : 'text.primary',
              cursor: 'pointer',
              borderRadius: 1,
            }}
          >
            {literal['navigation.dashboard'] || 'Dashboard'}
          </Box>
          <Box
            component="button"
            onClick={() => setSelectedFeature('users')}
            sx={{
              px: 2,
              py: 1,
              border: 'none',
              background: selectedFeature === 'users' ? 'primary.main' : 'transparent',
              color: selectedFeature === 'users' ? 'white' : 'text.primary',
              cursor: 'pointer',
              borderRadius: 1,
            }}
          >
            {literal['navigation.users'] || 'Users'}
          </Box>
          <Box
            component="button"
            onClick={() => setSelectedFeature('settings')}
            sx={{
              px: 2,
              py: 1,
              border: 'none',
              background: selectedFeature === 'settings' ? 'primary.main' : 'transparent',
              color: selectedFeature === 'settings' ? 'white' : 'text.primary',
              cursor: 'pointer',
              borderRadius: 1,
            }}
          >
            {literal['navigation.settings'] || 'Settings'}
          </Box>
        </Box>
      </Box>

      {/* Main content */}
      <Box sx={{ flex: 1 }}>
        {renderFeature()}
      </Box>
    </Box>
  );
};
