// src/common/hooks/useDataState.ts
import { useState, useEffect, useRef } from 'react';
import { AppState, StateType, StateCode } from '../state/AppState';
import { ServerResponse } from '../repo/ServerResponse';
import { HttpStatusCode } from '../state/HttpStatusCode';


const getInitialState = <T>(): AppState<T> => ({
  state: StateType.INIT,
  isError: false,
  isSuccess: false,
  status: StateCode.IDLE,
  statusMessage: '',
  data: null,
});


export function useDataState<T>(
  customInitialState: Partial<AppState<T>> = {},
  options?: { unexpectedErrorMessage?: string }
) {
  const [appState, setAppState] = useState<AppState<T>>({
    ...getInitialState<T>(),
    ...customInitialState,
  });

  const mountedRef = useRef(true);
  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  const execute = async (
    apiCall: () => Promise<ServerResponse<T>>
  ) => {
    setAppState((prev) => ({ ...prev, state: StateType.LOADING }));

    try {
      const response = await apiCall();
      if (!mountedRef.current) return;

      setAppState((prev) => ({
        ...prev,
        state: StateType.COMPLETED,
        isError: response.isError,
        isSuccess: response.isSuccess,
        status: response.status,
        statusMessage: response.statusMessage,
        data: response.data ?? null,
      }));
    } catch (error) {
      if (!mountedRef.current) return;

      setAppState((prev) => ({
        ...prev,
        state: StateType.COMPLETED,
        isError: true,
        isSuccess: false,
        status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        statusMessage: options?.unexpectedErrorMessage ?? '',
        data: null,
      }));
    }
  };

  return [appState, execute, setAppState] as const;
}