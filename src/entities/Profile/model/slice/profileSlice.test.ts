import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { updateProfileData } from 'entities/Profile/services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidationProfileError } from '../types/profile';

const data = {
  firstname: 'First',
  lastname: 'Last',
  age: 22,
  currency: Currency.EUR,
  country: Country.Ukraine,
  city: 'Myko',
  username: 'admin',
  avatar: AvatarImg,
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(false),
    )).toEqual({ readonly: false });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: '' },
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      data,
      form: data,
      readonly: true,
      error: undefined,
      validationErrors: undefined,
    });
  });

  test('test update profile', () => {
    const username = 'new_test_name';
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { ...data },
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username }),
    )).toEqual({
      data,
      form: { ...data, username },
    });
  });

  // async
  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validationErrors: [ValidationProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validationErrors: undefined,
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      form: data,
      data,
      readonly: true,
      validationErrors: undefined,
    });
  });
});
