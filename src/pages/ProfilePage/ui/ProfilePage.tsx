import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import {
  EditableProfileCard,
} from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const ProfilePage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Text text={t('ProfileNotFound')} theme={TextTheme.ERROR} />;
  }

  return (
    <Page>
      <VStack gap="16" max>
        <ProfilePageHeader />

        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
