import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidationErrors } from './getProfileValidationErrors';
import { ValidationProfileError } from '../../types/profile';

const errors = [ValidationProfileError.SERVER_ERROR, ValidationProfileError.INCORRECT_AGE];

describe('getProfileValidationErrors', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validationErrors: errors,
      },
    };
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(errors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
  });
});
