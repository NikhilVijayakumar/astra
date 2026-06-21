import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { IpcService } from './IpcService';
import { ServerResponse } from './ServerResponse';
import { HttpStatusCode } from './HttpStatusCode';

function createMockElectronAPI() {
  let listeners: Map<string, Array<(data: unknown) => void>> = new Map();

  return {
    invoke: vi.fn(),
    send: vi.fn(),
    receive: vi.fn((channel: string, callback: (data: unknown) => void) => {
      if (!listeners.has(channel)) {
        listeners.set(channel, []);
      }
      listeners.get(channel)!.push(callback);
      return () => {
        const callbacks = listeners.get(channel);
        if (callbacks) {
          const idx = callbacks.indexOf(callback);
          if (idx >= 0) callbacks.splice(idx, 1);
        }
      };
    }),
    _emit: (channel: string, data: unknown) => {
      listeners.get(channel)?.forEach((cb) => cb(data));
    },
    _clear: () => {
      listeners.clear();
    },
  };
}

describe('IpcService', () => {
  let ipcService: IpcService;
  let mockElectronAPI: ReturnType<typeof createMockElectronAPI>;

  beforeEach(() => {
    mockElectronAPI = createMockElectronAPI();
    (window as any).electronAPI = mockElectronAPI;
    ipcService = new IpcService();
  });

  afterEach(() => {
    mockElectronAPI._clear();
    delete (window as any).electronAPI;
  });

  describe('invoke', () => {
    it('should return success response when IPC handler resolves', async () => {
      const mockData = { id: 1, name: 'Test' };
      mockElectronAPI.invoke.mockResolvedValue(mockData);

      const result = await ipcService.invoke('tasks:get', { id: 1 });

      expect(mockElectronAPI.invoke).toHaveBeenCalledWith('tasks:get', { id: 1 });
      expect(result).toBeInstanceOf(ServerResponse);
      expect(result.isSuccess).toBe(true);
      expect(result.isError).toBe(false);
      expect(result.data).toEqual(mockData);
      expect(result.status).toBe(HttpStatusCode.SUCCESS);
    });

    it('should pass through ServerResponse from IPC handler', async () => {
      const serverError = ServerResponse.error({
        status: HttpStatusCode.NOT_FOUND,
        statusMessage: 'Task not found',
      });
      mockElectronAPI.invoke.mockResolvedValue(serverError);

      const result = await ipcService.invoke('tasks:get', { id: 999 });

      expect(result).toBe(serverError);
      expect(result.isError).toBe(true);
      expect(result.status).toBe(HttpStatusCode.NOT_FOUND);
    });

    it('should return error response when IPC handler throws', async () => {
      const error = new Error('Handler crashed');
      mockElectronAPI.invoke.mockRejectedValue(error);

      const result = await ipcService.invoke('tasks:list');

      expect(result.isSuccess).toBe(false);
      expect(result.isError).toBe(true);
      expect(result.status).toBe(HttpStatusCode.INTERNAL_SERVER_ERROR);
      expect(result.statusMessage).toBe('Handler crashed');
    });

    it('should return error when window.electronAPI is unavailable', async () => {
      delete (window as any).electronAPI;

      const result = await ipcService.invoke('tasks:list');

      expect(result.isSuccess).toBe(false);
      expect(result.isError).toBe(true);
      expect(result.status).toBe(HttpStatusCode.INTERNAL_SERVER_ERROR);
      expect(result.statusMessage).toBe('Electron API not available');
    });

    it('should call onError callback when invoke fails', async () => {
      const onError = vi.fn();
      const serviceWithCallback = new IpcService({ onError });
      const error = new Error('IPC error');
      mockElectronAPI.invoke.mockRejectedValue(error);

      await serviceWithCallback.invoke('tasks:list');

      expect(onError).toHaveBeenCalledOnce();
      expect(onError).toHaveBeenCalledWith(error);
    });

    it('should handle non-Error thrown values', async () => {
      mockElectronAPI.invoke.mockRejectedValue('string error');

      const result = await ipcService.invoke('tasks:list');

      expect(result.isError).toBe(true);
      expect(result.statusMessage).toBe('IPC invoke failed');
    });
  });

  describe('send', () => {
    it('should send message via window.electronAPI.send', () => {
      ipcService.send('tasks:notify', { count: 5 });

      expect(mockElectronAPI.send).toHaveBeenCalledWith('tasks:notify', { count: 5 });
    });

    it('should not throw when window.electronAPI is unavailable', () => {
      delete (window as any).electronAPI;

      expect(() => ipcService.send('tasks:notify')).not.toThrow();
    });

    it('should silently discard when send throws', () => {
      mockElectronAPI.send.mockImplementation(() => {
        throw new Error('Send failed');
      });

      expect(() => ipcService.send('tasks:notify')).not.toThrow();
    });
  });

  describe('receive', () => {
    it('should register listener and return unsubscribe function', () => {
      const callback = vi.fn();
      const unsubscribe = ipcService.receive('progress:update', callback);

      expect(mockElectronAPI.receive).toHaveBeenCalledWith('progress:update', expect.any(Function));
      expect(unsubscribe).toBeTypeOf('function');
    });

    it('should deliver push data to callback', () => {
      const callback = vi.fn();
      ipcService.receive('progress:update', callback);

      mockElectronAPI._emit('progress:update', { percent: 50 });

      expect(callback).toHaveBeenCalledWith({ percent: 50 });
    });

    it('should stop delivering after unsubscribe', () => {
      const callback = vi.fn();
      const unsubscribe = ipcService.receive('progress:update', callback);

      unsubscribe();
      mockElectronAPI._emit('progress:update', { percent: 100 });

      expect(callback).not.toHaveBeenCalled();
    });

    it('should return no-op unsubscribe when window.electronAPI is unavailable', () => {
      delete (window as any).electronAPI;

      const callback = vi.fn();
      const unsubscribe = ipcService.receive('progress:update', callback);

      expect(unsubscribe).toBeTypeOf('function');
      expect(() => unsubscribe()).not.toThrow();
    });
  });

  describe('platform', () => {
    it('should identify as ELECTRON platform', () => {
      expect(ipcService.platform).toBe('ELECTRON');
    });
  });
});
