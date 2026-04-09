import { default as React } from 'react';
interface PlayableMediaCardProps {
    title: string;
    artist?: string;
    category: string;
    duration: string;
    coverUrl: string;
    isPlaying: boolean;
    onPlay: () => void;
    t: (key: string) => string;
}
export declare const PlayableMediaCard: React.FC<PlayableMediaCardProps>;
export {};
