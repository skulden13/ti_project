import { ComponentMeta, ComponentStory } from '@storybook/react';
import { article } from 'shared/fixtures/storybook/article';
import { ArticleView } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

export default {
  title: 'enteties/Article/ArticleListItem',
  component: ArticleListItem,
  parameters: {
    loki: {
      chromeSelector: '.ArticleListItemStory',
      disableAutomaticViewportHeight: true,
    },
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <div className="ArticleListItemStory">
    <ArticleListItem {...args} />
  </div>
);

export const Plate = Template.bind({});
Plate.args = {
  article,
  view: ArticleView.PLATE,
};

export const Expanded = Template.bind({});
Expanded.args = {
  article,
  view: ArticleView.EXPANDED,
};
