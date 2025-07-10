//src/common/repo/apiServiceFactory.ts
import { ApiService } from './ApiService'; 

const apiServiceCache = new Map<string, ApiService>();


export const getApiService = (
  baseUrl: string,
  literal: Record<string, string>
): ApiService => {    
  if (apiServiceCache.has(baseUrl)) {
    return apiServiceCache.get(baseUrl)!;
  }
  const newInstance = new ApiService(baseUrl, literal);
  apiServiceCache.set(baseUrl, newInstance);
  return newInstance;
};