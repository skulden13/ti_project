import { BugButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <h1>{t('MainPage')}</h1>
      <p>{t('MainPage')}</p>
      <BugButton />
    </Page>
  );
});

export default MainPage;
