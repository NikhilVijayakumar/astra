//src\common\repo\AppState.ts
import { HttpStatusCode } from '../repo/HttpStatusCode';

export enum StateType {
  INIT = 0,
  LOADING = 1,
  COMPLETED = 2,
}

export interface AppState<T> {
  state: StateType;
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode;
  statusMessage: string;
  data: T | null;
}
