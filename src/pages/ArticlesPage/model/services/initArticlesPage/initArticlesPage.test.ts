import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage', () => {
  test('initialized successfully', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });
    await thunk.callThunk(new URLSearchParams('?page=1'));

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });

  test('do not initialized twice', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });
    await thunk.callThunk(new URLSearchParams('?page=1'));

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
