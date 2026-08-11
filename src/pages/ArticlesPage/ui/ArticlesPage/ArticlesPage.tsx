import { ArticleView, ArticleListFilters } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles }
  from '../../model/slice/articlesPageSlice';
import {
  getArticlePageView,
}
  from '../../model/selectors/articlePageSelectors';
import cls from './ArticlesPage.module.scss';
import { fetchNextArticlesPage }
  from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(() => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlePageView) || ArticleView.PLATE;
  const [searchParams] = useSearchParams();
  const handleChangeView = useCallback(
    (v: ArticleView) => { dispatch(articlesPageActions.setView(v)); },
    [dispatch],
  );

  const loadNextHandler = useCallback(
    () => { dispatch(fetchNextArticlesPage()); },
    [dispatch],
  );

  useInitialEffect(() => { dispatch(initArticlesPage(searchParams)); });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={loadNextHandler}>
        <header className={cls.header}>
          <h1>{t('Articles')}</h1>
          <ArticleListFilters
            view={view}
            onChangeView={handleChangeView}
          />
        </header>

        <ArticleInfiniteList view={view} />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
