//src\common\repo\AppState.ts
import { HttpStatusCode } from '../repo/HttpStatusCode';

export enum StateType {
  INIT = 0,
  LOADING = 1,
  COMPLETED = 2,
}

// Synthetic status codes for internal state management — not HTTP codes.
export enum StateCode {
  IDLE = 1000,
}

export interface AppState<T> {
  state: StateType;
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode | StateCode;
  statusMessage: string;
  data: T | null;
}
