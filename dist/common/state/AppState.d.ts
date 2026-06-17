import { HttpStatusCode } from '../repo/HttpStatusCode';
export declare enum StateType {
    INIT = 0,
    LOADING = 1,
    COMPLETED = 2
}
export declare enum StateCode {
    IDLE = 1000
}
export interface AppState<T> {
    state: StateType;
    isError: boolean;
    isSuccess: boolean;
    status: HttpStatusCode | StateCode;
    statusMessage: string;
    data: T | null;
}
