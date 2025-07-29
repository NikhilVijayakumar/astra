import type { Preview } from '@storybook/react';
import { LanguageProvider } from '../src/common/localization/LanguageProvider';
import { getTranslation, availableLanguages } from './storybook-locales';

const preview: Preview = {
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'es', title: 'Español' },
        ],
        showName: true,
      },
    },
  },

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story, context) => {
      
     const locale = context?.globals?.locale || 'en';
    
      const translations = getTranslation(locale); 
       console.log('[Storybook translations]', translations);
      return (
        <LanguageProvider
          translations={translations}
          availableLanguages={availableLanguages}
          defaultLanguage={locale}
        >
          <Story />
        </LanguageProvider>
      );
    },
  ],
};

export default preview;
