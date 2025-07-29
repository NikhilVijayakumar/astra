import type { LanguageDefinition } from '../src/common/localization/LanguageContext';
import { TranslationMap } from '../src/common/localization/LanguageProvider';
import en from './locale/en.json';
import es from './locale/es.json';

export const availableLanguages: LanguageDefinition[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

// Only load the one needed — avoid exporting a full translations map
export function getTranslation(locale: string):TranslationMap {
  switch (locale) {
    case 'es':
      return  {
  es: es
}
    case 'en':    
      return  {
  en: en
}
     default:
      return  {
  en: en
}
  }
}
