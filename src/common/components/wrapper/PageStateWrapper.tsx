// src/common/components/PageStateWrapper.tsx

import { AppState, StateType } from '../../state/AppState';
import LoadingSpinner from './LoadingSpinner';
import ErrorDisplay from './ErrorDisplay';
import EmptyState from './EmptyState';

interface PageStateWrapperProps<T> {
  appState: AppState<T>;
  children: React.ReactNode;
}

export function PageStateWrapper<T>({ appState, children }: PageStateWrapperProps<T>) {
  switch (appState.state) {
    case StateType.LOADING:
    case StateType.INIT:
      return <LoadingSpinner />;

    case StateType.COMPLETED:
      if (appState.isError) {
        return <ErrorDisplay message={appState.statusMessage} />;
      }
      // Check for empty data (e.g., an empty array)
      if (!appState.data || (Array.isArray(appState.data) && appState.data.length === 0)) {
        return <EmptyState />;
      }
      // If everything is fine, render the actual content
      return <>{children}</>;
      
    default:
      return null;
  }
}