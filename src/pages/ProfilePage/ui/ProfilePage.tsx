import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <h1>{t('ProfilePage')}</h1>
        <p>{t('ProfilePage')}</p>
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
