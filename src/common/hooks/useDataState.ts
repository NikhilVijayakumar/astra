// src/common/hooks/useApiState.ts
import { useState } from 'react';
import { AppState, StateType } from '../state/AppState';
import {ServerResponse} from '../repo/ServerResponse';
import { HttpStatusCode } from '../repo/HttpStatusCode';


const getInitialState = <T>(): AppState<T> => ({
  state: StateType.INIT,
  isError: false,
  isSuccess: false,
  status: HttpStatusCode.IDLE,
  statusMessage: '',
  data: null,
});


export function useDataState<T>(customInitialState: Partial<AppState<T>> = {}) {
  const [appState, setAppState] = useState<AppState<T>>({
    ...getInitialState<T>(),
    ...customInitialState,
  });


  const execute = async (
    apiCall: () => Promise<ServerResponse<T>>
  ) => {    
    setAppState((prev) => ({ ...prev, state: StateType.LOADING }));

    try {   
      const response = await apiCall();
     
      setAppState((prev) => ({
        ...prev,
        state: StateType.COMPLETED,
        isError: response.isError,
        isSuccess: response.isSuccess,
        status: response.status,
        statusMessage: response.statusMessage as string,
        data: response.data || null,
      }));
    } catch (error) {     
      setAppState((prev) => ({
        ...prev,
        state: StateType.COMPLETED,
        isError: true,
        status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        statusMessage: 'An unexpected error occurred.',
        data: null,
      }));
    }
  };

  return [appState, execute, setAppState] as const;
}