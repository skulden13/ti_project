import { StateSchema } from 'app/providers/StoreProvider';

const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;

const getArticlePageError = (state: StateSchema) => state.articlesPage?.error;

const getArticlePageView = (state: StateSchema) => state.articlesPage?.view;

export {
  getArticlePageIsLoading,
  getArticlePageError,
  getArticlePageView,
};
