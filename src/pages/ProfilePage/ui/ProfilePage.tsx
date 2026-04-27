import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidationErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import {
  memo, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ValidationProfileError } from 'entities/Profile/model/types/profile';
import { ProjectTypeEnum } from 'shared/types/project';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validationErrors = useSelector(getProfileValidationErrors);

  const validationErrorsTranslations = {
    [ValidationProfileError.INCORRECT_USER_DATA]: t('ProfileValidationIncorrectUserData'),
    [ValidationProfileError.INCORRECT_AGE]: t('ProfileValidationIncorrectAge'),
    [ValidationProfileError.INCORRECT_COUNTRY]: t('ProfileValidationIncorrectCountry'),
    [ValidationProfileError.NO_DATA]: t('ProfileValidationNoData'),
    [ValidationProfileError.SERVER_ERROR]: t('ProfileValidationServerError'),
  };

  useEffect(() => {
    if (!formData || __PROJECT__ !== ProjectTypeEnum.STORYBOOK) {
      dispatch(fetchProfileData());
    }
  }, [dispatch, formData]);

  const changeFirstnameHandler = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ firstname: value }));
  }, [dispatch]);
  const changeLastnameHandler = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, [dispatch]);
  const changeAgeHandler = useCallback((value: string) => {
    if (!/^\d*$/.test(value)) {
      return;
    }

    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);
  const changeCurrencyHandler = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);
  const changeCountryHandler = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);
  const changeCityHandler = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);
  const changeUsernameHandler = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);
  const changeAvatarHandler = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ProfilePageHeader />

        {validationErrors?.length && validationErrors.map((err) => (
          <Text key={err} theme={TextTheme.ERROR} text={validationErrorsTranslations[err]} />
        ))}

        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={changeFirstnameHandler}
          onChangeLastname={changeLastnameHandler}
          onChangeAge={changeAgeHandler}
          onChangeCurrency={changeCurrencyHandler}
          onChangeCountry={changeCountryHandler}
          onChangeCity={changeCityHandler}
          onChangeUsername={changeUsernameHandler}
          onChangeAvatar={changeAvatarHandler}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
