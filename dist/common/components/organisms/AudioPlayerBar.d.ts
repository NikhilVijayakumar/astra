import { default as React } from 'react';
interface AudioPlayerBarProps {
    title: string;
    category: string;
    duration: string;
    coverUrl: string;
    audioUrl: string;
    isPlaying: boolean;
    onTogglePlay: () => void;
}
export declare const AudioPlayerBar: React.FC<AudioPlayerBarProps>;
export {};
