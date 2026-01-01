import { useMemo } from 'react';
import { ApiService, useLanguage } from 'astra';

// Create a shared API client instance
// Using JSONPlaceholder as a mock API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Hook to get an API client instance with localization support
 * @returns ApiService instance configured with current language literals
 */
export const useApiClient = (): ApiService => {
  const { literal } = useLanguage();
  
  return useMemo(() => {
    return new ApiService(BASE_URL, literal);
  }, [literal]);
};

// You can add custom headers or interceptors here if needed
