import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
  title: 'enteties/CommentList',
  component: CommentList,
  argTypes: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // readonly: true,
  // data: {
  // },
};

// export const WithError = Template.bind({});
// WithError.args = {
//   error: 'ALARM!',
// };

// export const WithLoading = Template.bind({});
// WithLoading.args = {
//   isLoading: true,
// };
