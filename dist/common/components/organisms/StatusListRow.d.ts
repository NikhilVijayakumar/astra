import { FC } from 'react';
import { StatusDotTone } from '../atoms/StatusDot';
export interface StatusListRowProps {
    domain: string;
    statusLine: string;
    health: StatusDotTone;
    showDivider?: boolean;
}
export declare const StatusListRow: FC<StatusListRowProps>;
