import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticleRecomendations }
  from '../services/fetchArticleRecomendations/fetchArticleRecomendations';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchArticleRecomendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecomendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecomendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
export const { actions: articleDetailsRecommendationsActions } = articleDetailsRecommendationsSlice;
export { getArticleRecommendations };
