import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'enteties/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  parameters: {
    loki: {
      chromeSelector: '.ArticleViewSelectorStory',
      disableAutomaticViewportHeight: true,
    },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
  <div className="ArticleViewSelectorStory">
    <ArticleViewSelector {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  view: ArticleView.PLATE,
};
