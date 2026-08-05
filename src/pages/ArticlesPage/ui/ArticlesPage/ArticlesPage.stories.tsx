import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from 'shared/fixtures/storybook/article';
import {
  Article, ArticleSortField, ArticleType, ArticleView,
} from 'entities/Article';
import { SortOrderEnum } from 'shared/types';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import ArticlesPage from './ArticlesPage';

const articles = new Array(9)
  .fill(0)
  .map((_, index) => ({ ...article, id: `${index + 1}` } as Article));

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  decorators: [
    StoreDecorator({
      articlesPage: {
        ids: articles.map((article) => article.id),
        entities: articles.reduce((acc, article) => {
          acc[article.id] = article;
          return acc;
        }, {} as Record<string, Article>),
        isLoading: false,
        error: undefined,
        view: ArticleView.PLATE,
        page: 1,
        hasMore: false,
        _inited: true,
        limit: 9,
        sort: ArticleSortField.CREATED,
        search: '',
        order: SortOrderEnum.ASC,
        articleTуpe: ArticleType.ALL,
      },
    }, {
      articlesPage: articlesPageReducer,
    }),
  ],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
