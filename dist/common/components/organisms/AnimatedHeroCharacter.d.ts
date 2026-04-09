import { MotionValue } from 'framer-motion';
interface Props {
    char: string;
    title?: string;
    subtitle?: string;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    index: number;
    zIndex: number;
    t: (key: string) => string;
}
export declare const AnimatedHeroCharacter: ({ char, title, subtitle, mouseX, mouseY, index, zIndex, t }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
