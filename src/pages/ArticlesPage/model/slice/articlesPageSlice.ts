import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  Article, ArticleType, ArticleView, ArticleSortField,
} from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { SortOrder, SortOrderEnum } from 'shared/types';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.PLATE,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 5,
    sort: ArticleSortField.CREATED,
    search: '',
    order: SortOrderEnum.ASC,
    articleTуpe: ArticleType.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setArticleType: (state, action: PayloadAction<ArticleType>) => {
      state.articleTуpe = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.EXPANDED ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
        state.hasMore = action.payload.length >= state.limit;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
export { getArticles };
