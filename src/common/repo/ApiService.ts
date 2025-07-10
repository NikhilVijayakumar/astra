//src/common/repo/ApiService.ts
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import {ServerResponse} from './ServerResponse';
import { HttpStatusCode } from './HttpStatusCode';
import { ResponseSucess, ResponseError } from './APITypes';

enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}



export class ApiService {
   private baseUrl: string;
  private literal: Record<string, string>;

   constructor(baseUrl: string, literal: Record<string, string>) {
     this.baseUrl = baseUrl;
    this.literal = literal;
   }



  private async request<T>(
    config: AxiosRequestConfig
  ): Promise<ServerResponse<T>> {
    try {
      const response: AxiosResponse<T> = await axios(config);
      const responseSucess: ResponseSucess<T> = {
        status: response.status,
        statusMessage: response.statusText,
        data: response.data,
      };
      return ServerResponse.success<T>(responseSucess);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;
        const status =
          axiosError.response?.status || HttpStatusCode.INTERNAL_SERVER_ERROR;
        const message =
          axiosError.message || this.literal['internal_server_error'];
        const responseError: ResponseError = {
          status: status,
          statusMessage: message,
        };
        return ServerResponse.error<T>(responseError);
      } else {
        return ServerResponse.error<T>({
          status: HttpStatusCode.INTERNAL_SERVER_ERROR,
          statusMessage: this.literal['internal_server_error'],
        });
      }
    }
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ServerResponse<T>> {
    return this.request<T>({
      ...config,
      url: `${this.baseUrl}/${url}`,
      method: HTTPMethod.GET,
    });
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ServerResponse<T>> {
    return this.request<T>({
      ...config,
      url: `${this.baseUrl}/${url}`,
      method: HTTPMethod.POST,
      data,
    });
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ServerResponse<T>> {
    return this.request<T>({
      ...config,
      url: `${this.baseUrl}/${url}`,
      method: HTTPMethod.PUT,
      data,
    });
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ServerResponse<T>> {
    return this.request<T>({
      ...config,
      url: `${this.baseUrl}/${url}`,
      method: HTTPMethod.DELETE,
    });
  }
}


