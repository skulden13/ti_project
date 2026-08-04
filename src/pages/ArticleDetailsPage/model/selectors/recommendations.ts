import { StateSchema } from 'app/providers/StoreProvider';

const getArticleRecommendationsIsLoading = (state: StateSchema) => (
  state.articleDetailsPage?.recommendations?.isLoading
);

const getArticleRecommendationsIsError = (state: StateSchema) => (
  state.articleDetailsPage?.recommendations?.error
);

export {
  getArticleRecommendationsIsLoading,
  getArticleRecommendationsIsError,
};
