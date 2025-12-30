import { FC } from 'react';
/**
 * `LoadingState` is a standardized component used to indicate that content
 * is being loaded or an operation is in progress.
 *
 * It displays a circular progress indicator (spinner) along with a text message.
 * The message is fetched from the localization context (`literal.loading_message`).
 * If the localized message is not available, it gracefully falls back to the
 * default text "Loading...". This component takes no props and is designed
 * to be used as a placeholder while waiting for asynchronous operations to complete.
 *
 * @component
 * @returns {React.ReactElement} A React element containing the spinner and loading text.
 *
 * @example
 * // Used as a placeholder while data is being fetched.
 * if (isLoading) {
 * return <LoadingState />;
 * }
 * return <MyComponent data={data} />;
 */
declare const LoadingState: FC;
export default LoadingState;
