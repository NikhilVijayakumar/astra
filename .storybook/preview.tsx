import type { Preview } from '@storybook/react';
import { LanguageProvider } from '../src/common/localization/LanguageProvider';
import { getTranslation, availableLanguages } from './storybook-locales';
import { ThemeProvider } from '../src/common/theme/ThemeProvider';
import { lightTheme, darkTheme } from './themes/appTheme'; 

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
     theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', left: '🌞' },
          { value: 'dark', title: 'Dark', left: '🌚' },
        ],
        dynamicTitle: true,
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
      const theme = context.globals.theme;
      return (
        <ThemeProvider
          lightTheme={lightTheme}
          darkTheme={darkTheme}
          forceTheme={theme}
        >
          <Story />
        </ThemeProvider>
      );
    },
    (Story, context) => {
      
     const locale = context?.globals?.locale || 'en';    
      const translations = getTranslation(locale); 
     
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
