import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPanelPageAsync = memo(() => {
  const { t } = useTranslation('admin');

  return (
    <Page>
      <h1>{t('AdminPage')}</h1>
    </Page>
  );
});

export default AdminPanelPageAsync;
