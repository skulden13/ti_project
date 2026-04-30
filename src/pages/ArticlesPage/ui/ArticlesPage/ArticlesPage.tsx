import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = memo(() => {
  const { t } = useTranslation('article');

  return (
    <div>
      <h1>{t('ArticlesPage')}</h1>
    </div>
  );
});

export default ArticlesPage;
