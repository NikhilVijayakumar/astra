// Astra public API — see docs/raw/architecture/core/api-surface.md

// MVVM hook
export { useDataState } from './common/hooks/useDataState';

// State contract
export type { AppState } from './common/state/AppState';
export { StateType, StateCode } from './common/state/AppState';

// Conditional rendering
export { default as AppStateHandler } from './common/components/organisms/AppStateHandler';
export type { AppStateHandlerProps } from './common/components/organisms/AppStateHandler';
export { AppStateProvider, AppStateContext } from './common/components/organisms/AppStateContext';
export type { AppStateComponents } from './common/components/organisms/AppStateContext';

// Repository layer — WEB
export { ApiService } from './common/repo/ApiService';
export { getApiService } from './common/repo/apiServiceFactory';
export { HttpStatusCode, getStatusMessage } from './common/repo/HttpStatusCode';
export { ServerResponse } from './common/repo/ServerResponse';

// Repository layer — ELECTRON
export { IpcService } from './common/repo/IpcService';

// Transport interface
export type { ITransportService, Platform } from './common/repo/types';
