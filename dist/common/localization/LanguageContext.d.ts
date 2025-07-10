export type LanguageDefinition = {
    code: string;
    label: string;
};
export type LanguageContextValue = {
    currentLanguage: string;
    setCurrentLanguage: (language: string) => void;
    literal: Record<string, string>;
    availableLanguages: LanguageDefinition[];
};
export declare const LanguageContext: import('react').Context<LanguageContextValue | undefined>;
export declare function useLanguage(): LanguageContextValue;
