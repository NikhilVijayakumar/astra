import { ReactNode } from 'react';
import { LanguageDefinition } from './LanguageContext';
type TranslationMap = {
    [key: string]: Record<string, string>;
};
interface LanguageProviderProps {
    children: ReactNode;
    translations: TranslationMap;
    availableLanguages: LanguageDefinition[];
    defaultLanguage?: string;
}
export declare function LanguageProvider({ children, translations, availableLanguages, defaultLanguage, }: LanguageProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
