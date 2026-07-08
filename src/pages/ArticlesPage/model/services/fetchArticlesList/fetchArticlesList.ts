import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../../selectors/articlePageSelectors';

interface FetchArticleListProps {
  page?: number;
}

const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const { page } = props;
    const limit = getArticlePageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
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
