import { FC } from 'react';
/**
 * Defines the props for the ErrorState component.
 */
interface ErrorStateProps {
    /**
     * The optional error message to display.
     * If not provided, the component will use a default message
     * from the localization context.
     */
    message?: string;
}
/**
 * `ErrorState` is a reusable UI component that shows a prominent error message.
 *
 * It uses Material-UI's `Alert` component with `severity="error"` to ensure a
 * consistent and accessible presentation of errors. It displays a custom `message`
 * from props or falls back to a generic, localized error message from `useLanguage()`.
 *
 * ⚠️ Note: If both the `message` prop and the localized `unknown_message` are
 * unavailable, the alert box will be rendered without any text content.
 *
 * @component
 * @param {ErrorStateProps} props - The props for the component.
 * @returns {React.ReactElement} A React element containing the styled error alert.
 *
 * @example
 * // Displaying a specific error message
 * <ErrorState message="Network connection failed. Please try again." />
 *
 * @example
 * // Displaying a generic, localized error
 * <ErrorState />
 */
declare const ErrorState: FC<ErrorStateProps>;
export default ErrorState;
