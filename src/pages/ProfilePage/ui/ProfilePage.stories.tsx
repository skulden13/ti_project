import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const profileState = {
  profile: {
    data: {
      firstname: 'Denis',
      lastname: 'Skulimovskiy',
      age: 25,
      currency: Currency.USD,
      country: Country.Georgia,
      city: 'Tbilisi',
      username: 'skulden13',
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
    isLoading: false,
    error: undefined,
    readOnly: true,
  },
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator(profileState)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(profileState)];
