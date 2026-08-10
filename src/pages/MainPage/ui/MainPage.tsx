import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      <h1>{t('MainPage', { ns: 'main' })}</h1>
    </Page>
  );
});

export default MainPage;
