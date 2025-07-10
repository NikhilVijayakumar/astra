import { HttpStatusCode } from './HttpStatusCode';
export type ResponseSucess<T> = {
    status: HttpStatusCode;
    statusMessage: string;
    data: T;
};
export type ResponseError = {
    status: HttpStatusCode;
    statusMessage: string;
};
