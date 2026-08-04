import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';

import { ArticleSortField, ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
} from 'pages/ArticlesPage/model/selectors/articlePageSelectors';
import { useSelector } from 'react-redux';
import { SortOrder } from 'shared/types';
import { Input } from 'shared/ui/Input/Input';
import { Card } from 'entities/Card/ui/Card';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList }
  from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleType } from 'entities/Article/model/types/article';
import cls from './ArticleListFilters.module.scss';
import { ArticleListSortSelector } from '../ArticleListSortSelector/ArticleListSortSelector';
import { ArticleTypeTabs } from '../ArticleTypeTabs/ArticleTypeTabs';

interface ArticleListFiltersProps {
  className?: string;
  view: ArticleView;
  onChangeView: (v: ArticleView) => void;
}

export const ArticleListFilters = memo((props: ArticleListFiltersProps) => {
  const { className, view, onChangeView } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const sort = useSelector(getArticlePageSort);
  const order = useSelector(getArticlePageOrder);
  const search = useSelector(getArticlePageSearch);
  const articleType = useSelector(getArticlePageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeSort = useCallback((v: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(v));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeOrder = useCallback((v: SortOrder) => {
    dispatch(articlesPageActions.setOrder(v));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((v: string) => {
    dispatch(articlesPageActions.setSearch(v));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const onChangeArticleType = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setArticleType(value));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(cls.ArticleListFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleListSortSelector
          sort={sort}
          onChangeSort={onChangeSort}
          order={order}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t('Search')}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        value={articleType}
        onTabClick={onChangeArticleType}
      />
    </div>
  );
});
