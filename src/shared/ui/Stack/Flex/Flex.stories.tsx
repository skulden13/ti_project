import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';
import cls from './Flex.stories.module.scss';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args} className={cls.flex} />
);

const children = (
  <>
    <div style={{ height: '32px' }}>first</div>
    <div style={{ height: '32px' }}>second</div>
    <div style={{ height: '32px' }}>third</div>
    <div style={{ height: '32px' }}>forth</div>
  </>
);

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
  children,
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  direction: 'row',
  gap: '4',
  children,
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  direction: 'row',
  gap: '8',
  children,
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  direction: 'row',
  gap: '16',
  children,
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  direction: 'row',
  gap: '32',
  children,
};

export const RowAlignCenter = Template.bind({});
RowAlignCenter.args = {
  direction: 'row',
  align: 'center',
  children,
};

export const RowAlignCenterJustifyBetween = Template.bind({});
RowAlignCenterJustifyBetween.args = {
  direction: 'row',
  justify: 'between',
  align: 'center',
  children,
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children,
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  direction: 'column',
  gap: '16',
  children,
};

export const ColumnAlignCenterJustifyBetween = Template.bind({});
ColumnAlignCenterJustifyBetween.args = {
  direction: 'column',
  justify: 'between',
  align: 'center',
  children,
};
