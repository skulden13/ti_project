import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

const data = {
  page: 2,
  ids: [],
  entities: {},
  limit: 5,
};

describe('fetchNextArticlesPage', () => {
  test('successful fetch', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ...data,
        isLoading: false,
        hasMore: true,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });

  test('stop fetching on the scroll end', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ...data,
        isLoading: false,
        hasMore: false, // no data
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('do not fetch while loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ...data,
        isLoading: true,
        hasMore: true,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
