import { ServerResponse } from './ServerResponse';
import { HttpStatusCode } from '../state/HttpStatusCode';
import { ITransportService, Platform } from './types';
import { ResponseError } from './APITypes';

interface ElectronAPI {
  invoke(channel: string, ...args: unknown[]): Promise<unknown>;
  send(channel: string, ...args: unknown[]): void;
  receive(channel: string, callback: (data: unknown) => void): () => void;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}

export class IpcService implements ITransportService {
  readonly platform: Platform = 'ELECTRON';
  onError?: (error: unknown) => void;

  constructor(options?: { onError?: (error: unknown) => void }) {
    this.onError = options?.onError;
  }

  async invoke<T>(
    channel: string,
    ...args: unknown[]
  ): Promise<ServerResponse<T>> {
    try {
      if (!window.electronAPI?.invoke) {
        return ServerResponse.error<T>({
          status: HttpStatusCode.INTERNAL_SERVER_ERROR,
          statusMessage: 'Electron API not available',
        });
      }

      const result = await window.electronAPI.invoke(channel, ...args);

      if (result instanceof ServerResponse) {
        return result;
      }

      return ServerResponse.success<T>({
        status: HttpStatusCode.SUCCESS,
        statusMessage: '',
        data: result as T,
      });
    } catch (error) {
      this.onError?.(error);
      const message =
        error instanceof Error ? error.message : 'IPC invoke failed';
      const responseError: ResponseError = {
        status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        statusMessage: message,
      };
      return ServerResponse.error<T>(responseError);
    }
  }

  send(channel: string, ...args: unknown[]): void {
    try {
      window.electronAPI?.send(channel, ...args);
    } catch {
      // silently discarded — fire-and-forget has no response path
    }
  }

  receive<T>(
    channel: string,
    callback: (data: T) => void,
  ): () => void {
    if (!window.electronAPI?.receive) {
      return () => {};
    }

    const wrappedCallback = (data: unknown) => {
      callback(data as T);
    };

    const unsubscribe = window.electronAPI.receive(channel, wrappedCallback);
    return unsubscribe;
  }
}
