import { FC, ReactElement, ReactNode, useContext } from "react";
import { AppState, StateType } from "../../state/AppState";
import { HttpStatusCode } from "../../repo/HttpStatusCode";
import { AppStateContext } from "./AppStateContext";

export interface AppStateHandlerProps<T, S extends AppState<T> = AppState<T>> {
  appState: S;
  SuccessComponent?: FC<{ appState: S }>;
  emptyCondition?: (data: T) => boolean;
  errorMessage?: string;
  children?: ReactNode;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
  emptyComponent?: ReactNode;
}

const AppStateHandler = <T, S extends AppState<T>>({
  appState,
  SuccessComponent,
  children,
  emptyCondition,
  errorMessage,
  loadingComponent,
  errorComponent,
  emptyComponent,
}: AppStateHandlerProps<T, S>): ReactElement | null => {
  const { Loading, Error: ErrorComp, Empty } = useContext(AppStateContext);
  const { state, isError, isSuccess, data, status } = appState;

  if (state === StateType.LOADING) {
    if (loadingComponent !== undefined) return <>{loadingComponent}</>;
    if (Loading) return <Loading />;
    return null;
  }

  if (isError || status === HttpStatusCode.INTERNET_ERROR) {
    if (errorComponent !== undefined) return <>{errorComponent}</>;
    if (ErrorComp) return <ErrorComp message={errorMessage} />;
    return null;
  }

  if (isSuccess && data !== null) {
    if (emptyCondition?.(data)) {
      if (emptyComponent !== undefined) return <>{emptyComponent}</>;
      if (Empty) return <Empty />;
      return null;
    }
    if (children) return <>{children}</>;
    if (SuccessComponent) return <SuccessComponent appState={appState} />;
  }

  if (emptyComponent !== undefined) return <>{emptyComponent}</>;
  if (Empty) return <Empty />;
  return null;
};

export default AppStateHandler;
