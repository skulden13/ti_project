import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const profileData = {
  firstname: 'First',
  lastname: 'Last',
  age: 22,
  currency: Currency.EUR,
  country: Country.Ukraine,
  city: 'Myko',
  username: 'admin',
  avatar: AvatarImg,
};

const profileState = {
  profile: {
    // data: profileData,
    form: profileData,
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

// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
// import { Country } from 'entities/Country';
// import { Currency } from 'entities/Currency';
// import { ProfileCard } from './ProfileCard';
// import AvatarImg from 'shared/assets/tests/storybook.jpeg';

// export default {
//   title: 'enteties/ProfileCard',
//   component: ProfileCard,
//   argTypes: {},
// } as ComponentMeta<typeof ProfileCard>;

// const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   data: {
//     firstname: 'First',
//     lastname: 'Last',
//     age: 22,
//     currency: Currency.EUR,
//     country: Country.Ukraine,
//     city: 'Myko',
//     username: 'admin',
//     avatar: AvatarImg,
//   },
// };
// // Primary.decorators = [StoreDecorator({
// //   loginForm: { username: '23', password: '1232' },
// // })];

// export const WithError = Template.bind({});
// WithError.args = {
//   error: 'ALARM!',
// };
// // WithError.decorators = [StoreDecorator({
// //   loginForm: { username: '23', password: '1232', error: 'Some error' },
// // })];

// export const WithLoading = Template.bind({});
// WithLoading.args = {
//   isLoading: true,
// };
// // WithLoading.decorators = [StoreDecorator({
// //   loginForm: { isLoading: true },
// // })];
