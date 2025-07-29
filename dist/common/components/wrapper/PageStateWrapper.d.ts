import { AppState } from '../../state/AppState';
interface PageStateWrapperProps<T> {
    appState: AppState<T>;
    children: React.ReactNode;
}
export declare function PageStateWrapper<T>({ appState, children }: PageStateWrapperProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
