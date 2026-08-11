import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import {
  EditableProfileCard,
  EditableProfilePageHeader,
} from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TextTheme, Text } from 'shared/ui/Text/Text';

const ProfilePage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Text text={t('ProfileNotFound')} theme={TextTheme.ERROR} />;
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
});

export default ProfilePage;
