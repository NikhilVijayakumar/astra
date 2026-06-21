export type Platform = 'WEB' | 'ELECTRON';

export interface ITransportService {
  readonly platform: Platform;
  onError?: (error: unknown) => void;
}
