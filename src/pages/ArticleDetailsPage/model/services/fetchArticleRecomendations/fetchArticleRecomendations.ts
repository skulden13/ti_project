import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

const fetchArticleRecomendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  'articleDetailsPage/fetchArticleRecomendations',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4,
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

export { fetchArticleRecomendations };
