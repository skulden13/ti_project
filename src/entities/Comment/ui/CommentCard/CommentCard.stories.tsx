import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
  title: 'enteties/CommentCard',
  component: CommentCard,
  argTypes: {},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

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
