import { Meta, StoryObj } from '@storybook/react';
import { default as LoadingState } from './LoadingState';
/**
 * The `meta` object configures the story's metadata, including its title,
 * the component it documents, and settings for autodocs.
 */
declare const meta: Meta<typeof LoadingState>;
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * ### Default Loading State
 * This is the standard appearance of the `LoadingState` component. It uses
 * the `loading_message` from the localization context.
 */
export declare const Default: Story;
