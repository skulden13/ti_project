import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const ClearTheme = Template.bind({});
ClearTheme.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};

export const OutlineTheme = Template.bind({});
OutlineTheme.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineThemeSizeL = Template.bind({});
OutlineThemeSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGORUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGORUND_INVERTED,
};

export const OutlineDarkTheme = Template.bind({});
OutlineDarkTheme.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlineDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGORUND_INVERTED,
  square: true,
  size: ButtonSize.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ButtonTheme.BACKGORUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGORUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};
