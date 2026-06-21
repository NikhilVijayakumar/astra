// src/common/state/AppState.ts
import { HttpStatusCode } from './HttpStatusCode';
export { StateCode } from './StateCode';

export enum StateType {
  INIT = 0,
  LOADING = 1,
  COMPLETED = 2,
}

export interface AppState<T> {
  state: StateType;
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode | StateCode;
  statusMessage: string;
  data: T | null;
}
