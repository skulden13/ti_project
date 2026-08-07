import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from '../../model/types/article';
import { ArticleListFilters } from './ArticleListFilters';

export default {
  title: 'enteties/Article/ArticleListFilters',
  component: ArticleListFilters,
} as ComponentMeta<typeof ArticleListFilters>;

const Template: ComponentStory<typeof ArticleListFilters> = () => <ArticleListFilters view={ArticleView.PLATE} onChangeView={() => {}} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
