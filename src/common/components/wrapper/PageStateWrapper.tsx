// src/common/components/PageStateWrapper.tsx
import { AppState} from '../../state/AppState';
//import { AppState, StateType } from '../../state/AppState';
// import LoadingSpinner from './LoadingSpinner';
// import ErrorDisplay from './ErrorDisplay';
//import EmptyState from './EmptyState';
//import { Box, Typography } from '@mui/material';
interface PageStateWrapperProps<T> {
  appState: AppState<T>;
  children: React.ReactNode;
}

export function PageStateWrapper<T>({ appState, children }: PageStateWrapperProps<T>) {
   console.log('PageStateWrapper inside');
    if(children)
  console.log('PageStateWrapper children');
 if(appState)
  console.log('PageStateWrapper appState');
    return  (
    <div></div>
  );
  // switch (appState.state) {
  //       case StateType.LOADING:    
  //       console.log('PageStateWrapper LOADING');
  //     return <LoadingSpinner />;         
  //   case StateType.INIT:
  //      console.log('PageStateWrapper INIT');
  //     return <LoadingSpinner />;

  //   case StateType.COMPLETED:
  //      console.log('PageStateWrapper COMPLETED');
  //     if (appState.isError) {
  //        console.log('PageStateWrapper isError');
  //       return <ErrorDisplay message={appState.statusMessage} />;
  //     }
  //     // Check for empty data (e.g., an empty array)
  //     if (!appState.data || (Array.isArray(appState.data) && appState.data.length === 0)) {
  //       console.log('PageStateWrapper EmptyState');
  //       return <EmptyState />;
  //     }
  //     if(children)
  //      console.log('PageStateWrapper children');
  //     return <EmptyState />;
      
  //   default:
  //     console.log('PageStateWrapper default null');
  //     return <EmptyState />;
  // }
}