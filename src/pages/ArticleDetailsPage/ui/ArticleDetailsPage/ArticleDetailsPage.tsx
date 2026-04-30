import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article');

  return (
    <div>
      <h1>{t('ArticleDetailsPage')}</h1>
    </div>
  );
});

export default ArticleDetailsPage;
