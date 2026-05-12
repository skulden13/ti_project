import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { ArticleType } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const data = {
  id: '1',
  title: 'title',
  subtitle: 'subtitle',
  img: 'img',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  blocks: [],
};

describe('fetchArticleById', () => {
  test('successful fetch', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data }));
    const thunk = new TestAsyncThunk(fetchArticleById);
    const result = await thunk.callThunk('1');

    expect(mockedAxios.get).toHaveBeenCalledWith('/articles/1');
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('failed fetch', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(fetchArticleById);
    const result = await thunk.callThunk('1');

    expect(mockedAxios.get).toHaveBeenCalledWith('/articles/1');
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
