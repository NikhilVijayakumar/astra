import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useDataState } from './useDataState';
import { StateType } from '../state/AppState';
import { ServerResponse } from '../repo/ServerResponse';
import { HttpStatusCode } from '../repo/HttpStatusCode';

describe('useDataState', () => {
  it('should initialize with default state', () => {
    const { result } = renderHook(() => useDataState());
    
    expect(result.current[0]).toEqual({
      state: StateType.INIT,
      isError: false,
      isSuccess: false,
      status: HttpStatusCode.IDLE,
      statusMessage: '',
      data: null,
    });
  });

  it('should initialize with custom state', () => {
      const customState = { isSuccess: true, data: { id: 1 } };
      const { result } = renderHook(() => useDataState(customState as any));

      expect(result.current[0]).toEqual(expect.objectContaining(customState));
  });

  it('should handle successful execution', async () => {
    const { result } = renderHook(() => useDataState<{ id: number }>());
    const mockData = { id: 123 };
    const mockResponse = ServerResponse.success({
      status: HttpStatusCode.OK,
      statusMessage: 'OK',
      data: mockData,
    });

    const mockApiCall = vi.fn().mockResolvedValue(mockResponse);

    await act(async () => {
      await result.current[1](mockApiCall);
    });

    expect(result.current[0]).toEqual({
      state: StateType.COMPLETED,
      isSuccess: true,
      isError: false,
      status: HttpStatusCode.OK,
      statusMessage: 'OK',
      data: mockData,
    });
  });

  it('should handle failed execution', async () => {
      const { result } = renderHook(() => useDataState());
      const mockResponse = ServerResponse.error({
          status: HttpStatusCode.NOT_FOUND,
          statusMessage: 'Not Found',
      });

      const mockApiCall = vi.fn().mockResolvedValue(mockResponse);

      await act(async () => {
          await result.current[1](mockApiCall);
      });

      expect(result.current[0]).toEqual({
          state: StateType.COMPLETED,
          isSuccess: false,
          isError: true,
          status: HttpStatusCode.NOT_FOUND,
          statusMessage: 'Not Found',
          data: null,
      });
  });

  it('should handle execution exceptions', async () => {
      const { result } = renderHook(() => useDataState());
      const mockApiCall = vi.fn().mockRejectedValue(new Error('Crash'));

      await act(async () => {
          await result.current[1](mockApiCall);
      });

      expect(result.current[0]).toEqual({
          state: StateType.COMPLETED,
          isSuccess: false,
          isError: true,
          status: HttpStatusCode.INTERNAL_SERVER_ERROR,
          statusMessage: 'An unexpected error occurred.',
          data: null,
      });
  });

  it('should transition to LOADING state during execution', async () => {
      const { result } = renderHook(() => useDataState());
      
      // Create a promise that we can control
      let resolvePromise: (value: any) => void;
      const delayedPromise = new Promise((resolve) => {
          resolvePromise = resolve;
      });
      const mockApiCall = vi.fn().mockReturnValue(delayedPromise);

      // Start execution but don't await the result inside act yet, 
      // or rather, await the triggering of the function but the promise is pending
      let executePromise: Promise<void>;
      act(() => {
           executePromise = result.current[1](mockApiCall);
      });

      // Assert LOADING state
      expect(result.current[0].state).toBe(StateType.LOADING);

      // Finish up
      const mockResponse = ServerResponse.success({
          status: 200,
          statusMessage: 'OK',
          data: 'done'
      });
      
      await act(async () => {
          resolvePromise!(mockResponse);
          await executePromise!;
      });

      expect(result.current[0].state).toBe(StateType.COMPLETED);
  });
});
