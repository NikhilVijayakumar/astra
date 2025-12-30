import { Meta, StoryObj } from '@storybook/react';
import { default as ErrorState } from './ErrorState';
/**
 * The `meta` object configures the story's metadata, including its title in the
 * Storybook sidebar, the component it documents, and settings for autodocs.
 */
declare const meta: Meta<typeof ErrorState>;
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * ### Default Error
 * This story demonstrates the `ErrorState` component in its default state,
 * without a `message` prop. It automatically falls back to the `unknown_message`
 * literal provided by the `LanguageProvider`.
 */
export declare const Default: Story;
/**
 * ### With Custom Message
 * This story shows the component displaying a specific error message passed
 * via the `message` prop. This is useful for providing context-specific feedback
* to the user, such as API error responses.
 */
export declare const WithCustomMessage: Story;
/**
 * ### With a Very Long Message
 * This story tests how the component handles a very long error message.
 * The `Alert` component from MUI should handle text wrapping gracefully,
 * ensuring the layout remains intact even with extensive content.
 */
export declare const WithLongMessage: Story;
