import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { ValidationProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData', () => {
  test('validate with no errors', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('validate without first and last name', async () => {
    const result = validateProfileData({
      ...data,
      firstname: '',
      lastname: '',
    });

    expect(result).toEqual([ValidationProfileError.INCORRECT_USER_DATA]);
  });

  test('validate incorrect age', async () => {
    const result = validateProfileData({
      ...data,
      age: 0,
    });

    expect(result).toEqual([ValidationProfileError.INCORRECT_AGE]);
  });

  test('validate age is NaN', async () => {
    const result = validateProfileData({
      ...data,
      age: NaN,
    });

    expect(result).toEqual([ValidationProfileError.INCORRECT_AGE]);
  });

  test('validate age is undefined', async () => {
    const result = validateProfileData({
      ...data,
      age: undefined,
    });

    expect(result).toEqual([ValidationProfileError.INCORRECT_AGE]);
  });

  test('validate incorrect country', async () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
    });

    expect(result).toEqual([ValidationProfileError.INCORRECT_COUNTRY]);
  });

  test('validate all incorrect', async () => {
    const result = validateProfileData({
      ...data,
      firstname: '',
      lastname: '',
      age: undefined,
      country: undefined,
    });

    expect(result).toEqual([
      ValidationProfileError.INCORRECT_USER_DATA,
      ValidationProfileError.INCORRECT_AGE,
      ValidationProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
