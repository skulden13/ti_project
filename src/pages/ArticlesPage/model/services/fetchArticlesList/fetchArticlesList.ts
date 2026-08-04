import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
} from '../../selectors/articlePageSelectors';

interface FetchArticleListProps {
  replace?: boolean;
}

const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const page = getArticlePageNum(getState());
    const limit = getArticlePageLimit(getState());
    const sort = getArticlePageSort(getState());
    const order = getArticlePageOrder(getState());
    const search = getArticlePageSearch(getState());
    const articleType = getArticlePageType(getState());

    try {
      addQueryParams({
        sort,
        order,
        search,
        type: articleType,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
          type: articleType === ArticleType.ALL ? undefined : articleType,
        },
      });

      if (!response.data) {
        throw new Error('Server error');
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);

export { fetchArticlesList };
