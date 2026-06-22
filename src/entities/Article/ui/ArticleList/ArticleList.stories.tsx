import { ComponentMeta, ComponentStory } from '@storybook/react';
import { article } from 'shared/fixtures/storybook/article';
import { ArticleList } from './ArticleList';
import { Article, ArticleView } from '../../model/types/article';

export default {
  title: 'enteties/Article/ArticleList',
  component: ArticleList,
  parameters: {
    loki: {
      chromeSelector: '.ArticleListStory',
      disableAutomaticViewportHeight: true,
    },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <div className="ArticleListStory">
    <ArticleList {...args} />
  </div>
);

const articles = new Array(7).fill(0)
  .map((_, index) => ({ ...article, id: `${index + 1}` } as Article));

export const Plate = Template.bind({});
Plate.args = {
  articles,
  view: ArticleView.PLATE,
};

export const PlateIsLoading = Template.bind({});
PlateIsLoading.args = {
  articles: [],
  isLoading: true,
  view: ArticleView.PLATE,
};

export const Expanded = Template.bind({});
Expanded.args = {
  articles,
  view: ArticleView.EXPANDED,
};

export const ExpandedIsLoading = Template.bind({});
ExpandedIsLoading.args = {
  articles: [],
  isLoading: true,
  view: ArticleView.EXPANDED,
};
