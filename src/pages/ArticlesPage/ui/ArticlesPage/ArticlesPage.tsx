import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect }
  from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { articlesPageActions, articlesPageReducer, getArticles }
  from '../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView }
  from '../../model/selectors/articlePageSelectors';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(() => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView) || ArticleView.PLATE;

  const handleChangeView = useCallback(
    (v: ArticleView) => {
      dispatch(articlesPageActions.setView(v));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <header className={cls.header}>
          <h1>{t('ArticlesPage')}</h1>
          <ArticleViewSelector view={view} onViewClick={handleChangeView} />
        </header>
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
