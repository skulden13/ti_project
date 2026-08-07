import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SortOrderEnum } from 'shared/types';
import { ArticleSortField } from '../..';
import { ArticleListSortSelector } from './ArticleListSortSelector';

export default {
  title: 'enteties/Article/ArticleListSortSelector',
  component: ArticleListSortSelector,
} as ComponentMeta<typeof ArticleListSortSelector>;

const Template: ComponentStory<typeof ArticleListSortSelector> = (args) => {
  const {
    sort,
    onChangeSort,
    order,
    onChangeOrder,
  } = args;

  return (
    <ArticleListSortSelector
      sort={sort}
      onChangeSort={onChangeSort}
      order={order}
      onChangeOrder={onChangeOrder}
    />
  );
};

export const Normal = Template.bind({});
Normal.args = {
  sort: ArticleSortField.CREATED,
  onChangeSort: () => {},
  order: SortOrderEnum.ASC,
  onChangeOrder: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
  sort: ArticleSortField.CREATED,
  onChangeSort: () => {},
  order: SortOrderEnum.ASC,
  onChangeOrder: () => {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
