import { FC, useEffect } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { AppStateHandler, useLanguage, AppState } from 'astra';
import { useUsersViewModel } from '../viewmodel/useUsersViewModel';
import { UserList } from './UserList';
import { User } from '../../../common/types/domain';

// Stateful container component - manages state via ViewModel
// Stateful container component - manages state via ViewModel
export const UsersContainer: FC = () => {
  const { literal } = useLanguage();
  const { state, searchQuery, setSearchQuery, loadUsers, filteredUsers } = useUsersViewModel();

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        {literal['users.title'] || 'Users'}
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder={literal['users.search'] || 'Search users...'}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 3 }}
      />

      {/* Use AppStateHandler with children pattern */}
      <AppStateHandler<User[], AppState<User[]>>
        appState={state}
        emptyCondition={(data: User[]) => data.length === 0}
        errorMessage={literal['common.error'] || 'An error occurred'}
      >
         <UserList users={filteredUsers} />
      </AppStateHandler>
    </Box>
  );
};
