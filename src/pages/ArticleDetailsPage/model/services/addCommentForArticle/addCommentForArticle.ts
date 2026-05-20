import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const {
      dispatch, extra, rejectWithValue, getState,
    } = thunkAPI;

    const state = getState();
    const userId = getUserAuthData(state)?.id;
    const articleId = getArticleDetailsData(state)?.id;

    if (!userId || !text || !articleId) {
      return rejectWithValue(i18n.t('AddCommentNoData'));
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        text,
        articleId,
        userId,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(articleId));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(i18n.t('AddCommentError'));
    }
  },
);

export { addCommentForArticle };
