import { ApiService, ServerResponse } from 'astra';
import type { ApiResponse } from './models';

// Initialize the API Service with the base URL
// In a real app, 'internal_server_error' would come from a config or constant
const api = new ApiService('https://rickandmortyapi.com/api', {
  internal_server_error: 'Server unavailable. Please try again later.'
});

export const CharacterRepo = {
  /**
   * Fetches the list of characters.
   * Dictionary style return type from API is standardized by Astra's ServerResponse
   */
  getCharacters: (): Promise<ServerResponse<ApiResponse>> => {
    return api.get<ApiResponse>('character');
  }
};
