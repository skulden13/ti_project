import { StateSchema } from 'app/providers/StoreProvider';

const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;

const getArticleCommentsIsError = (state: StateSchema) => state.articleDetailsComments?.error;

export {
  getArticleCommentsIsLoading,
  getArticleCommentsIsError,
};
