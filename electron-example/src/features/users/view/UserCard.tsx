import { FC } from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { User } from '../../../common/types/domain';

interface UserCardProps {
  user: User;
}

// Stateless component - displays individual user
export const UserCard: FC<UserCardProps> = ({ user }) => {

  return (
    <Card elevation={2} sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <PersonIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Box>
            <Typography variant="h6" component="div">
              {user.name}
            </Typography>
            <Chip
              label={user.role}
              size="small"
              color={user.role === 'Admin' ? 'error' : 'default'}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
