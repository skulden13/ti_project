import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '250px',
      }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (<ListBox {...args} />);

const commonArgs = {
  label: 'Language',
  options: [
    { value: 'UA', content: 'Ukraininan' },
    { value: 'GE', content: 'Georgian' },
  ],
  value: 'UA',
};

export const Primary = Template.bind({});
Primary.args = {
  ...commonArgs,
};

export const DirectionTopLeft = Template.bind({});
DirectionTopLeft.args = {
  ...commonArgs,
  direction: 'top left',
};

export const DirectionTopRight = Template.bind({});
DirectionTopRight.args = {
  ...commonArgs,
  direction: 'top right',
};

export const DirectionBottomLeft = Template.bind({});
DirectionBottomLeft.args = {
  ...commonArgs,
  direction: 'bottom left',
};

export const DirectionBottomRight = Template.bind({});
DirectionBottomRight.args = {
  ...commonArgs,
  direction: 'bottom right',
};
