import { AppState } from '../state/AppState';
import { ServerResponse } from '../repo/ServerResponse';
export declare function useDataState<T>(customInitialState?: Partial<AppState<T>>, options?: {
    unexpectedErrorMessage?: string;
}): readonly [AppState<T>, (apiCall: () => Promise<ServerResponse<T>>) => Promise<void>, import('react').Dispatch<import('react').SetStateAction<AppState<T>>>];
