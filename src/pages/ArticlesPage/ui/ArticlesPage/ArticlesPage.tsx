import { ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = memo(() => {
  const { t } = useTranslation('article');

  return (
    <div>
      <h1>{t('ArticlesPage')}</h1>
      <ArticleList
        view={ArticleView.EXPANDED}
        articles={[]}
      />
    </div>
  );
});

export default ArticlesPage;
