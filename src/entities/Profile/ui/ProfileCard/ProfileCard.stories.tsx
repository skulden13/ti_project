import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'enteties/ProfileCard',
  component: ProfileCard,
  argTypes: {},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    firstname: 'First',
    lastname: 'Last',
    age: 22,
    currency: Currency.EUR,
    country: Country.Ukraine,
    city: 'Myko',
    username: 'admin',
    avatar: AvatarImg,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'ALARM!',
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  isLoading: true,
};
