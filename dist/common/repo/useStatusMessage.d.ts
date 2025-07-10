import { HttpStatusCode } from './HttpStatusCode';
declare const useStatusMessage: (status: HttpStatusCode, literal: Record<string, string>) => string;
export default useStatusMessage;
