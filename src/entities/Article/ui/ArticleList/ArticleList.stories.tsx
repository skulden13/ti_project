import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleList } from './ArticleList';

export default {
  title: 'enteties/ArticleList',
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

export const Primary = Template.bind({});
Primary.args = {};
