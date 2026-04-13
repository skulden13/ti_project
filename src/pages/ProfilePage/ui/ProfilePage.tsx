import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
    <div>
      <h1>{t('ProfilePage')}</h1>
      <p>{t('ProfilePage')}</p>
    </div>
  );
};

export default ProfilePage;
