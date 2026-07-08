import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;

const getArticlePageError = (state: StateSchema) => state.articlesPage?.error;

const getArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.PLATE;

const getArticlePageNum = (state: StateSchema) => state.articlesPage?.page || 1;

const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;

const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;

export {
  getArticlePageIsLoading,
  getArticlePageError,
  getArticlePageView,
  getArticlePageNum,
  getArticlePageLimit,
  getArticlePageHasMore,
};
