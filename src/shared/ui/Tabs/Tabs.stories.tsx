import { ComponentStory, ComponentMeta, DecoratorFn } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

const StaticAnimationsDecorator: DecoratorFn = (Story) => (
  <div className="static-animations">
    <style>
      {'.static-animations *::before { animation: none !important; }'}
    </style>
    <Story />
  </div>
);

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    loki: {
      chromeSelector: '.TabsStory',
    },
  },
  decorators: [
    StaticAnimationsDecorator,
    (Story) => (
      <div style={{ padding: 24, background: '#eee' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const { tabs, value, onTabClick } = args;

  return (
    <div className="TabsStory">
      <Tabs
        tabs={tabs}
        value={value}
        onTabClick={onTabClick}
      />
    </div>
  );
};

const args = {
  tabs: [
    {
      value: 'tab 1',
      content: 'tab 1',
    },
    {
      value: 'tab 2',
      content: 'tab 2',
    },
    {
      value: 'tab 3',
      content: 'tab 3',
    },
  ],
  value: 'tab 2',
  onTabClick: action('onTabClick'),
};

export const Primary = Template.bind({});
Primary.args = args;

export const PrimaryDark = Template.bind({});
PrimaryDark.args = args;
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
