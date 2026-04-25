import { Profile, ValidationProfileError } from '../../model/types/profile';

export const validateProfileData = (profile?: Profile): ValidationProfileError[] => {
  if (!profile) {
    return [ValidationProfileError.NO_DATA];
  }

  const {
    firstname, lastname, age, country,
  } = profile;
  const errors: ValidationProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidationProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidationProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidationProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
