import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ApiService } from './ApiService';
import { ServerResponse } from './ServerResponse';
import { HttpStatusCode } from './HttpStatusCode';
import axios from 'axios';

// Mock axios
vi.mock('axios');

describe('ApiService', () => {
  const baseUrl = 'https://api.example.com';
  const literal = { internal_server_error: 'Something went wrong' };
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService(baseUrl, literal);
    vi.clearAllMocks();
  });

  describe('get', () => {
    it('should return success response when axios request succeeds', async () => {
      const mockData = { id: 1, name: 'Test' };
      const mockResponse = {
        status: 200,
        statusText: 'OK',
        data: mockData,
      };
      
      (axios as any).mockResolvedValue(mockResponse);

      const result = await apiService.get('test');

      expect(axios).toHaveBeenCalledWith(expect.objectContaining({
        url: `${baseUrl}/test`,
        method: 'GET',
      }));

      expect(result).toBeInstanceOf(ServerResponse);
      expect(result.isSuccess).toBe(true);
      expect(result.isError).toBe(false);
      expect(result.data).toEqual(mockData);
      expect(result.status).toBe(200);
    });

    it('should return error response when axios request fails', async () => {
      const mockError = {
        isAxiosError: true,
        message: 'Network Error',
        response: {
          status: 404,
        },
      };
      
      (axios as any).mockRejectedValue(mockError);
      (axios.isAxiosError as any).mockReturnValue(true);

      const result = await apiService.get('test');

      expect(result.isSuccess).toBe(false);
      expect(result.isError).toBe(true);
      expect(result.status).toBe(404);
      expect(result.statusMessage).toBe('Network Error');
    });

    it('should return INTERNET_ERROR (status 0) when no response (network failure)', async () => {
      const networkError = {
        isAxiosError: true,
        message: 'Network Error',
        response: undefined,
      };

      (axios as any).mockRejectedValue(networkError);
      (axios.isAxiosError as any).mockReturnValue(true);

      const result = await apiService.get('test');

      expect(result.isSuccess).toBe(false);
      expect(result.isError).toBe(true);
      expect(result.status).toBe(HttpStatusCode.INTERNET_ERROR);
    });

    it('should handle unknwon errors gracefully', async () => {
        const unknownError = new Error('Unknown error');
        (axios as any).mockRejectedValue(unknownError);
        (axios.isAxiosError as any).mockReturnValue(false);

        const result = await apiService.get('test');

        expect(result.isSuccess).toBe(false);
        expect(result.isError).toBe(true);
        expect(result.status).toBe(HttpStatusCode.INTERNAL_SERVER_ERROR);
        expect(result.statusMessage).toBe(literal.internal_server_error);
    });

    it('should call onError callback when request fails', async () => {
      const onError = vi.fn();
      const serviceWithCallback = new ApiService(baseUrl, literal, { onError });
      const mockError = { isAxiosError: true, message: 'Network Error', response: { status: 500 } };
      (axios as any).mockRejectedValue(mockError);
      (axios.isAxiosError as any).mockReturnValue(true);

      await serviceWithCallback.get('test');

      expect(onError).toHaveBeenCalledOnce();
      expect(onError).toHaveBeenCalledWith(mockError);
    });

    it('should not invoke onError when no options provided', async () => {
      const mockError = { isAxiosError: true, message: 'Network Error', response: { status: 500 } };
      (axios as any).mockRejectedValue(mockError);
      (axios.isAxiosError as any).mockReturnValue(true);

      await expect(apiService.get('test')).resolves.toBeInstanceOf(ServerResponse);
    });
  });

  describe('post', () => {
      it('should send data correctly in post request', async () => {
          const payload = { name: 'New Item' };
          const mockResponse = { status: 201, statusText: 'Created', data: { id: 2, ...payload } };
          (axios as any).mockResolvedValue(mockResponse);

          const result = await apiService.post('items', payload);

          expect(axios).toHaveBeenCalledWith(expect.objectContaining({
              url: `${baseUrl}/items`,
              method: 'POST',
              data: payload,
          }));
          expect(result.isSuccess).toBe(true);
      });
  });

  describe('put', () => {
    it('should send data correctly in put request', async () => {
        const payload = { name: 'Updated Ifem' };
        const mockResponse = { status: 200, statusText: 'OK', data: { id: 1, ...payload } };
        (axios as any).mockResolvedValue(mockResponse);

        const result = await apiService.put('items/1', payload);

        expect(axios).toHaveBeenCalledWith(expect.objectContaining({
            url: `${baseUrl}/items/1`,
            method: 'PUT',
            data: payload,
        }));
        expect(result.isSuccess).toBe(true);
    });
  });

  describe('delete', () => {
      it('should send delete request correctly', async () => {
          const mockResponse = { status: 204, statusText: 'No Content', data: null };
          (axios as any).mockResolvedValue(mockResponse);

          const result = await apiService.delete('items/1');

          expect(axios).toHaveBeenCalledWith(expect.objectContaining({
              url: `${baseUrl}/items/1`,
              method: 'DELETE',
          }));
          expect(result.isSuccess).toBe(true);
      });
  });
});
