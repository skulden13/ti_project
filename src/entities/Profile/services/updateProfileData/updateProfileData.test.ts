import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { ValidationProfileError } from 'entities/Profile/model/types/profile';
import { updateProfileData } from './updateProfileData';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

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

describe('updateProfileData', () => {
  test('successful update', async () => {
    mockedAxios.put.mockReturnValue(Promise.resolve({ data }));
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    const result = await thunk.callThunk();

    expect(mockedAxios.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('server error', async () => {
    mockedAxios.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    const result = await thunk.callThunk();

    expect(mockedAxios.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidationProfileError.SERVER_ERROR]);
  });

  test('validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data,
          firstname: '',
        },
      },
    });
    const result = await thunk.callThunk();

    // Request to API wasn't sent because of Validation Error
    expect(mockedAxios.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidationProfileError.INCORRECT_USER_DATA]);
  });
});
