import { FC } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useLanguage } from 'astra';
import { DashboardData } from '../../../common/types/domain';

interface DashboardStatsProps {
  data: DashboardData;
}

// Stateless component - receives data via props
export const DashboardStats: FC<DashboardStatsProps> = ({ data }) => {
  const { literal } = useLanguage();

  const stats = [
    {
      title: literal['dashboard.totalUsers'] || 'Total Users',
      value: data.totalUsers,
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: '#1976d2',
    },
    {
      title: literal['dashboard.activeUsers'] || 'Active Users',
      value: data.activeUsers,
      icon: <PersonIcon sx={{ fontSize: 40 }} />,
      color: '#2e7d32',
    },
    {
      title: literal['dashboard.revenue'] || 'Revenue',
      value: `$${data.revenue.toLocaleString()}`,
      icon: <AttachMoneyIcon sx={{ fontSize: 40 }} />,
      color: '#ed6c02',
    },
    {
      title: literal['dashboard.growth'] || 'Growth',
      value: `${data.growth}%`,
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      color: '#9c27b0',
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
      {stats.map((stat, index) => (
        <Box key={index} sx={{ flex: '1 1 200px', minWidth: '200px' }}>
          <Card elevation={3}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    {stat.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {stat.value}
                  </Typography>
                </Box>
                <Box sx={{ color: stat.color }}>{stat.icon}</Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};
