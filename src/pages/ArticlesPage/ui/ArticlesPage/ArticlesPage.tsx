import { ArticleList } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect }
  from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView }
  from '../../model/selectors/articlePageSelectors';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(() => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <h1>{t('ArticlesPage')}</h1>
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
          // error={error}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
