import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AboutPage = memo(() => {
  const { t } = useTranslation('about');

  return (
    <Page>
      <h1>{t('AboutPage')}</h1>
      <Counter />
    </Page>
  );
});

export default AboutPage;
