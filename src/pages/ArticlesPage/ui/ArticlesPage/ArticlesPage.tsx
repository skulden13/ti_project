import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect }
  from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { articlesPageActions, articlesPageReducer, getArticles }
  from '../../model/slice/articlesPageSlice';
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
}
  from '../../model/selectors/articlePageSelectors';
import cls from './ArticlesPage.module.scss';
import { fetchNextArticlesPage }
  from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

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
    (v: ArticleView) => { dispatch(articlesPageActions.setView(v)); },
    [dispatch],
  );

  const loadNextHandler = useCallback(
    () => { dispatch(fetchNextArticlesPage()); },
    [dispatch],
  );

  useInitialEffect(() => { dispatch(initArticlesPage()); });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={loadNextHandler}>
        <header className={cls.header}>
          <h1>{t('ArticlesPage')}</h1>
          <ArticleViewSelector view={view} onViewClick={handleChangeView} />
        </header>
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
          error={error}
        />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
