import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en/translation.json';
import vi from './assets/locales/vi/translation.json';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: '.', // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
