import { ComponentStory, ComponentMeta, DecoratorFn } from '@storybook/react';

import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { CommentCard } from './CommentCard';

export default {
  title: 'enteties/Comment/CommentCard',
  component: CommentCard,
  argTypes: {},
  parameters: {
    loki: {
      chromeSelector: '.CommentCardStory',
    },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <div className="CommentCardStory" style={{ minWidth: 300, minHeight: 1 }}>
    <CommentCard {...args} />
  </div>
);

const StaticAnimationsDecorator: DecoratorFn = (Story) => (
  <div className="static-animations">
    <style>
      {'.static-animations *::before { animation: none !important; }'}
    </style>
    <Story />
  </div>
);

const comment = {
  id: '1',
  text: 'some comment',
  user: {
    id: '2',
    username: 'admin',
    avatar: AvatarImg,
  },
};

export const Primary = Template.bind({});
Primary.args = {
  comment,
};

export const Empty = Template.bind({});
Empty.args = {
  comment: undefined,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  comment,
  isLoading: true,
};
WithLoading.decorators = [StaticAnimationsDecorator];
