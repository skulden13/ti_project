import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

// eslint-ignore-next-line
Object.defineProperty(global, '__IS_DEV__', {
  value: true,
  writable: true,
});
Object.defineProperty(global, '__API__', {
  value: true,
  writable: true,
});

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: () => Promise.resolve(),
      language: 'en',
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));
