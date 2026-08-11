import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import {
  editableProfileCardActions,
  editableProfileCardReducer,
} from './editableProfileCardSlice';
import {
  EditableProfileCardSchema,
  ValidationProfileError,
} from '../types/editableProfileCardSchema';

const data = {
  id: '1',
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
    const state: DeepPartial<EditableProfileCardSchema> = { readonly: true };

    expect(editableProfileCardReducer(
      state as EditableProfileCardSchema,
      editableProfileCardActions.setReadonly(false),
    )).toEqual({ readonly: false });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      data,
      form: { username: '' },
    };

    expect(editableProfileCardReducer(
      state as EditableProfileCardSchema,
      editableProfileCardActions.cancelEdit(),
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
    const state: DeepPartial<EditableProfileCardSchema> = {
      data,
      form: { ...data },
    };

    expect(editableProfileCardReducer(
      state as EditableProfileCardSchema,
      editableProfileCardActions.updateProfile({ username }),
    )).toEqual({
      data,
      form: { ...data, username },
    });
  });

  // async
  test('test update profile service pending', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: false,
      validationErrors: [ValidationProfileError.SERVER_ERROR],
    };

    expect(editableProfileCardReducer(
      state as EditableProfileCardSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validationErrors: undefined,
    });
  });

  test('test update profile service rejected', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: true,
    };

    expect(editableProfileCardReducer(
      state as EditableProfileCardSchema,
      updateProfileData.rejected(
        null,
        '',
        undefined,
        [ValidationProfileError.SERVER_ERROR],
      ),
    )).toEqual({
      isLoading: false,
      validationErrors: [ValidationProfileError.SERVER_ERROR],
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: true,
    };

    expect(editableProfileCardReducer(
      state as EditableProfileCardSchema,
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
