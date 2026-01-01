import { FC } from 'react';
import { Box } from '@mui/material';
import { User } from '../../../common/types/domain';
import { UserCard } from './UserCard';

interface UserListProps {
  users: User[];
}

// Stateless component - renders list of users
export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
      {users.map((user) => (
        <Box key={user.id} sx={{ flex: '1 1 300px', minWidth: '300px' }}>
          <UserCard user={user} />
        </Box>
      ))}
    </Box>
  );
};
