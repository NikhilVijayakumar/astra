import { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useLanguage } from 'astra';

interface DashboardHeaderProps {
  onRefresh: () => void;
}

// Stateless component - receives props only
export const DashboardHeader: FC<DashboardHeaderProps> = ({ onRefresh }) => {
  const { literal } = useLanguage();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
      }}
    >
      <Typography variant="h4" component="h1">
        {literal['dashboard.title'] || 'Dashboard'}
      </Typography>
      <Button
        variant="contained"
        startIcon={<RefreshIcon />}
        onClick={onRefresh}
      >
        {literal['dashboard.refresh'] || 'Refresh'}
      </Button>
    </Box>
  );
};
