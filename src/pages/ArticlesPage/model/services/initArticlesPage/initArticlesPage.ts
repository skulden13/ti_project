import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import {
  getArticlePageInited,
} from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlePageInited(getState());

    if (!inited) {
      const order = searchParams.get('order') as SortOrder;
      const sort = searchParams.get('sort') as ArticleSortField;
      const search = searchParams.get('search');
      const type = searchParams.get('type') as ArticleType;

      if (order) {
        dispatch(articlesPageActions.setOrder(order));
      }
      if (sort) {
        dispatch(articlesPageActions.setSort(sort));
      }
      if (search) {
        dispatch(articlesPageActions.setSearch(search));
      }
      if (type) {
        dispatch(articlesPageActions.setArticleType(type));
      }
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);

export { initArticlesPage };
