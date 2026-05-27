import { ComponentStory, ComponentMeta, DecoratorFn } from '@storybook/react';

import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { CommentList } from './CommentList';

export default {
  title: 'enteties/Comment/CommentList',
  component: CommentList,
  argTypes: {},
  parameters: {
    loki: {
      chromeSelector: '.CommentListStory',
    },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <div className="CommentListStory">
    <CommentList {...args} />
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

const comments = [
  {
    id: '1',
    text: 'some comment',
    user: {
      id: '2',
      username: 'admin',
      avatar: AvatarImg,
    },
  },
  {
    id: '2',
    text: 'another comment',
    user: {
      id: '2',
      username: 'admin',
      avatar: AvatarImg,
    },
  },
];

export const Primary = Template.bind({});
Primary.args = {
  comments,
};

export const Empty = Template.bind({});
Empty.args = {
  comments: [],
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  comments,
  isLoading: true,
};
WithLoading.decorators = [StaticAnimationsDecorator];
