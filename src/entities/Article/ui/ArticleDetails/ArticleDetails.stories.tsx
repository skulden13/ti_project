import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from 'shared/fixtures/storybook/article';
import { ArticleDetails } from './ArticleDetails';

export default {
  title: 'enteties/Article/ArticleDetails',
  component: ArticleDetails,
  parameters: {
    loki: {
      chromeSelector: '.ArticleDetailsStory',
      disableAutomaticViewportHeight: true,
    },
  },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
  <div className="ArticleDetailsStory">
    <ArticleDetails {...args} id="1" />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  articleDetails: {
    data: article,
  },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  articleDetails: {
    isLoading: true,
  },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
  articleDetails: {
    error: 'error!!',
  },
})];
