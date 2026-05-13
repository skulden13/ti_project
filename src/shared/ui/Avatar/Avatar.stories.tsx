import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    loki: {
      chromeSelector: '.AvatarStory',
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <div className="AvatarStory">
    <Avatar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarImg,
};
