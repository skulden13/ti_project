import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from 'shared/fixtures/storybook/article';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    router: {
      route: '/articles/1',
      path: '/articles/:id',
    },
    loki: {
      chromeSelector: '.ArticleDetailsPageStory',
      disableAutomaticViewportHeight: true,
    },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => (
  <div className="ArticleDetailsPageStory">
    <ArticleDetailsPage />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  articleDetails: {
    data: article,
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  })];
