import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { ValidationProfileError } from 'entities/Profile/model/types/profile';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData', () => {
  test('successful fetch', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data }));
    const thunk = new TestAsyncThunk(fetchProfileData);
    const result = await thunk.callThunk();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('failed fetch', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ error: ValidationProfileError.SERVER_ERROR }));
    const thunk = new TestAsyncThunk(fetchProfileData);
    const result = await thunk.callThunk();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(ValidationProfileError.SERVER_ERROR);
  });
});
