import { FC, ReactElement, ReactNode } from 'react';
import { AppState } from '../../state/AppState';
/**
 * Defines the props for the AppStateHandler component.
 * @template T The type of the data managed by the AppState.
 * @template S The specific type of the AppState, extending the base AppState<T>.
 */
export interface AppStateHandlerProps<T, S extends AppState<T> = AppState<T>> {
    /**
     * The application state object that determines which UI state to render.
     */
    appState: S;
    /**
     * The component to render when the appState is in a success state and not empty.
     * It receives the entire appState object as a prop.
     */
    SuccessComponent?: FC<{
        appState: S;
    }>;
    /**
     * An optional function that receives the success data and returns `true` if the state
     * should be considered "empty". For example, for an array, this could be `(data) => data.length === 0`.
     * If not provided, no empty check is performed.
     */
    emptyCondition?: (data: T) => boolean;
    /**
     * An optional custom error message to pass to the `ErrorState` component.
     * If not provided, `ErrorState` will use its default localized message.
     */
    errorMessage?: string;
    /**
     * Optional children to act as the Success component.
     */
    children?: ReactNode;
}
/**
 * `AppStateHandler` is a generic state-management component that abstracts the
 * common pattern of rendering different UI based on the current application state
 * (loading, success, error, or empty).
 *
 * It acts as a controller, inspecting the `appState` object and rendering the
 * appropriate child component (`LoadingState`, `ErrorState`, `EmptyState`, or the
 * provided `SuccessComponent`). This greatly reduces boilerplate conditional
 * rendering logic in feature components.
 *
 * @component
 * @template T The type of the data managed by the AppState.
 * @template S The specific type of the AppState, extending the base AppState<T>.
 * @param {AppStateHandlerProps<T, S>} props The props for the component.
 * @returns {React.ReactElement} The React element corresponding to the current app state.
 *
 * @example
 * // In a component that fetches a list of users:
 * const { userListState } = useUserListViewModel();
 * return (
 * <AppStateHandler
 * appState={userListState}
 * SuccessComponent={UserListComponent}
 * emptyCondition={(data) => data.length === 0}
 * errorMessage="Failed to load users."
 * />
 * );
 */
declare const AppStateHandler: <T, S extends AppState<T>>({ appState, SuccessComponent, children, emptyCondition, errorMessage, }: AppStateHandlerProps<T, S> & {
    children?: ReactNode;
}) => ReactElement;
export default AppStateHandler;
