import { StateSchema } from 'app/providers/StoreProvider';

const getArticleCommentsIsLoading = (state: StateSchema) => (
  state.articleDetailsPage?.comments?.isLoading
);

const getArticleCommentsIsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;

export {
  getArticleCommentsIsLoading,
  getArticleCommentsIsError,
};
