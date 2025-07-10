import { ResponseSucess, ResponseError } from './APITypes';
import { HttpStatusCode } from './HttpStatusCode';
export default class ServerResponse<T> {
    isError: boolean;
    isSuccess: boolean;
    status: HttpStatusCode;
    statusMessage: String;
    data?: T;
    private constructor();
    private static getSucessInstance;
    private static getErrorInstance;
    static success<T>(success: ResponseSucess<T>): ServerResponse<T>;
    static error<T>(error: ResponseError): ServerResponse<T>;
}
