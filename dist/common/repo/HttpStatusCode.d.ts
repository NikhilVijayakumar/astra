export declare enum HttpStatusCode {
    SUCCESS = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    INTERNET_ERROR = 0,
    IDLE = 1000
}
export declare function getStatusMessage(status: HttpStatusCode, literal: Record<string, string>): string;
