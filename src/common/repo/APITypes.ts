//src/common/repo/APITypes.ts
import { HttpStatusCode } from '../state/HttpStatusCode';

export type ResponseSuccess<T> = {
  status: HttpStatusCode;
  statusMessage: string;
  data: T;
};

export type ResponseError = {
  status: HttpStatusCode;
  statusMessage: string;
};
