import { AxiosRequestConfig } from 'axios';
import { default as ServerResponse } from './ServerResponse';
export declare class ApiService {
    private baseUrl;
    private literal;
    constructor(baseUrl: string, literal: Record<string, string>);
    private request;
    get<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ServerResponse<T>>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ServerResponse<T>>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>>;
}
