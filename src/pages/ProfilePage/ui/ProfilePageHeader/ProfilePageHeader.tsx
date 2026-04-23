import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
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
      {readonly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.buttons}
          onClick={editHandler}
        >
          {t('Edit')}
        </Button>
      ) : (
        <div className={cls.buttons}>
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
  );
};
