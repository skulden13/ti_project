import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('AboutPage')}</h1>
      <Counter />
    </div>
  );
});

export default AboutPage;
