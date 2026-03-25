import { FC } from 'react';
import { AlertColor } from '@mui/material';
export interface NotificationProps {
    open: boolean;
    message: string;
    severity?: AlertColor;
    onClose: () => void;
    autoHideDuration?: number;
}
export declare const Notification: FC<NotificationProps>;
