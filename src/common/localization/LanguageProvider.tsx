//src\common\localization\LanguageProvider.tsx
import { useState, useMemo, ReactNode } from 'react';
import { LanguageContext, LanguageDefinition } from './LanguageContext';

type TranslationMap = {
  [key: string]: Record<string, string>;
};

interface LanguageProviderProps {
  children: ReactNode;
  translations: TranslationMap;
  availableLanguages: LanguageDefinition[];
  defaultLanguage?: string;
}

export function LanguageProvider({
  children,
  translations,
  availableLanguages,
  defaultLanguage = 'en',
}: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

  const literal = useMemo(
    () => translations[currentLanguage] || {},
    [currentLanguage, translations]
  );

  const contextValue = {
    currentLanguage,
    setCurrentLanguage,
    literal,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
