import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView, ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrderEnum } from 'shared/types';

const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;

const getArticlePageError = (state: StateSchema) => state.articlesPage?.error;

const getArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.PLATE;

const getArticlePageNum = (state: StateSchema) => state.articlesPage?.page || 1;

const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;

const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;

const getArticlePageInited = (state: StateSchema) => state.articlesPage?._inited;

const getArticlePageOrder = (state: StateSchema) => state.articlesPage?.order
  ?? SortOrderEnum.ASC;

const getArticlePageSort = (state: StateSchema) => state.articlesPage?.sort
  ?? ArticleSortField.CREATED;

const getArticlePageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';

const getArticlePageType = (state: StateSchema) => state.articlesPage?.articleTуpe
  ?? ArticleType.ALL;

export {
  getArticlePageIsLoading,
  getArticlePageError,
  getArticlePageView,
  getArticlePageNum,
  getArticlePageLimit,
  getArticlePageHasMore,
  getArticlePageInited,
  getArticlePageOrder,
  getArticlePageSort,
  getArticlePageSearch,
  getArticlePageType,
};
