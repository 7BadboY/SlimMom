import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const backendOpts = {
  loadPath: `./translate/{{lng}}/{{ns}}.json`
}
i18n.use(LanguageDetector)
  .init({
    debug: process.env.NODE_ENV === 'development',
    lng: 'ru-RU',
    resources: {
      'ru-RU': {
        'translation': {
          intro: 'Hello my name is'
        }
      }
    },
    fallbackLng: 'ru',
    load: 'languageOnly',
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });

export default i18n;

