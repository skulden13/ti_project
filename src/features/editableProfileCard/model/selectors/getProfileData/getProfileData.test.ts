import { StateSchema } from 'app/providers/StoreProvider';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

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

describe('getProfileData', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: profileData,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
