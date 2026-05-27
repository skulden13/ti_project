import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();
  const editHandler = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);
  const cancelHandler = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const saveHandler = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, className ? [className] : [])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div className={cls.buttons}>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              className={cls.buttons}
              onClick={editHandler}
            >
              {t('Edit')}
            </Button>
          ) : (
            <div>
              <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.button}
                onClick={saveHandler}
              >
                {t('Save')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                className={cls.button}
                onClick={cancelHandler}
              >
                {t('Cancel')}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
