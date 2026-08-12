import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { editableProfileCardActions } from '../../model/slices/editableProfileCardSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfilePageHeaderProps {
  className?: string;
}

export const EditableProfilePageHeader = ({ className }: EditableProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();
  const editHandler = useCallback(() => {
    dispatch(editableProfileCardActions.setReadonly(false));
  }, [dispatch]);
  const cancelHandler = useCallback(() => {
    dispatch(editableProfileCardActions.cancelEdit());
  }, [dispatch]);
  const saveHandler = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between" className={classNames('', {}, className ? [className] : [])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={editHandler}
              data-testid="EditableProfilePageHeader.EditButton"
            >
              {t('Edit')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={saveHandler}
                data-testid="EditableProfilePageHeader.SaveButton"
              >
                {t('Save')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={cancelHandler}
                data-testid="EditableProfilePageHeader.CancelButton"
              >
                {t('Cancel')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
};
