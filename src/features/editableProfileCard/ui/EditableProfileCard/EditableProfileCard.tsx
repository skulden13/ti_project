import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ProfileCard } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { useInitialEffect }
  from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading }
  from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly }
  from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidationErrors }
  from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { fetchProfileData }
  from '../../model/services/fetchProfileData/fetchProfileData';
import { editableProfileCardActions, editableProfileCardReducer }
  from '../../model/slices/editableProfileCardSlice';
import { ValidationProfileError }
  from '../../model/types/editableProfileCardSchema';

const reducers: ReducersList = {
  profile: editableProfileCardReducer,
};

interface EditableProfileCardProps {
  id?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { id } = props;
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

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const changeFirstnameHandler = useCallback((value: string) => {
    dispatch(editableProfileCardActions.updateProfile({ firstname: value }));
  }, [dispatch]);
  const changeLastnameHandler = useCallback((value: string) => {
    dispatch(editableProfileCardActions.updateProfile({ lastname: value }));
  }, [dispatch]);
  const changeAgeHandler = useCallback((value: string) => {
    if (!/^\d*$/.test(value)) {
      return;
    }

    dispatch(editableProfileCardActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);
  const changeCurrencyHandler = useCallback((value: Currency) => {
    dispatch(editableProfileCardActions.updateProfile({ currency: value }));
  }, [dispatch]);
  const changeCountryHandler = useCallback((value: Country) => {
    dispatch(editableProfileCardActions.updateProfile({ country: value }));
  }, [dispatch]);
  const changeCityHandler = useCallback((value: string) => {
    dispatch(editableProfileCardActions.updateProfile({ city: value }));
  }, [dispatch]);
  const changeUsernameHandler = useCallback((value: string) => {
    dispatch(editableProfileCardActions.updateProfile({ username: value }));
  }, [dispatch]);
  const changeAvatarHandler = useCallback((value: string) => {
    dispatch(editableProfileCardActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
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
    </DynamicModuleLoader>
  );
});
