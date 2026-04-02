import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title test',
  text: 'text lorem ipsum',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title test',
  text: 'text lorem ipsum',
  theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Title test',
  text: 'text lorem ipsum',
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  title: 'Title only test',
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  text: 'text only',
};

// Dark theme
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title test',
  text: 'text lorem ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleOnlyDark = Template.bind({});
TitleOnlyDark.args = {
  title: 'Title only test',
};
TitleOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextOnlyDark = Template.bind({});
TextOnlyDark.args = {
  text: 'text only',
};
TextOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];
