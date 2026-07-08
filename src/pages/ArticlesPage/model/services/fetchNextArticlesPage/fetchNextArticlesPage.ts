import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNum,
} from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlePageHasMore(getState());
    const page = getArticlePageNum(getState());
    const isLoading = getArticlePageIsLoading(getState());

    if (hasMore && !isLoading) {
      const nextPage = page + 1;
      dispatch(articlesPageActions.setPage(nextPage));
      dispatch(fetchArticlesList({ page: nextPage }));
    }
  },
);

export { fetchNextArticlesPage };
