interface TimelineNodeProps {
    phase: string;
    title: string;
    description: string;
    category: string;
    status: string;
    tags?: string[];
    alignRight?: boolean;
    t: (key: string, params?: Record<string, string | number>) => string;
}
export declare const TimelineNode: ({ phase, title, description, category, status, tags, alignRight, t, }: TimelineNodeProps) => import("react/jsx-runtime").JSX.Element;
export {};
