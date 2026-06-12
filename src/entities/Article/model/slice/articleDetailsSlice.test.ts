import { articleDetailsReducer } from './articleDetailsSlice';
import { AtricleDetailsSchema } from '../types/articleDetailsSchema';
import { ArticleType } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

describe('articleDetailsSlice', () => {
  // async
  test('test article details service pending', () => {
    const state: DeepPartial<AtricleDetailsSchema> = {
      isLoading: false,
      error: 'error',
    };

    expect(articleDetailsReducer(
      state as AtricleDetailsSchema,
      fetchArticleById.pending('', '1'),
    )).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('test article details service fulfilled', () => {
    const data = {
      id: '1',
      user: { id: '1', username: 'admin' },
      title: 'title',
      subtitle: 'subtitle',
      img: 'img',
      views: 1022,
      createdAt: '26.02.2022',
      type: [ArticleType.IT],
      blocks: [],
    };

    const state: DeepPartial<AtricleDetailsSchema> = {
      isLoading: true,
    };

    expect(articleDetailsReducer(
      state as AtricleDetailsSchema,
      fetchArticleById.fulfilled(data, '', '1'),
    )).toEqual({
      isLoading: false,
      data,
    });
  });

  test('test article details service rejected', () => {
    const state: DeepPartial<AtricleDetailsSchema> = {
      isLoading: true,
    };

    expect(articleDetailsReducer(
      state as AtricleDetailsSchema,
      fetchArticleById.rejected(null, '', '1', 'error'),
    )).toEqual({
      isLoading: false,
      error: 'error',
    });
  });
});
