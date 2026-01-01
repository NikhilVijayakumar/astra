import { useState } from 'react';
import { useDataState } from 'astra';
import { useApiClient } from '../../../common/repo/ApiClient';
import { UsersRepo } from '../repo/UsersRepo';
import { User } from '../../../common/types/domain';

export const useUsersViewModel = () => {
  // Get the localized API client
  const apiClient = useApiClient(); 
  // Dependency Injection: Pass the configured ApiService instance
  const usersRepo = new UsersRepo(apiClient);

  const [state, execute] = useDataState<User[]>();
  const [searchQuery, setSearchQuery] = useState('');

  const loadUsers = async () => {
    await execute(() => usersRepo.getUsers());
  };

  // Filter users based on search query
  const getFilteredUsers = (): User[] => {
    if (!state.isSuccess || !state.data) {
      return [];
    }

    if (!searchQuery) {
      return state.data;
    }

    const query = searchQuery.toLowerCase();
    return state.data.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
  };

  return {
    state,
    searchQuery,
    setSearchQuery,
    loadUsers,
    filteredUsers: getFilteredUsers(),
  };
};
