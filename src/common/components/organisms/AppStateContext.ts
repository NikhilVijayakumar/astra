import { FC, createContext } from 'react';

export interface AppStateComponents {
  Loading?: FC;
  Error?: FC<{ message?: string }>;
  Empty?: FC;
}

export const AppStateContext = createContext<AppStateComponents>({});
export const AppStateProvider = AppStateContext.Provider;
