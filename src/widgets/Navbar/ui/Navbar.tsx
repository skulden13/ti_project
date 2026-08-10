import { classNames } from 'shared/lib';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation(['translation', 'article']);
  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, className ? [className] : [])}>
        <div className={cls.links}>
          <HStack gap="16">
            <AppLink
              to={RoutePaths.article_create}
              theme={AppLinkTheme.SECONDARY}
              className={cls.link}
            >
              {t('article:NewPage')}
            </AppLink>
            <Dropdown
              className={cls.dropdown}
              trigger={<Avatar src={authData.avatar} size={30} />}
              items={[
                {
                  content: t('LogOut'),
                  onClick: handleLogout,
                },
              ]}
              direction="bottom right"
            />
          </HStack>
        </div>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, className ? [className] : [])}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onShowModal}
        >
          {t('LogIn')}
        </Button>
      </div>

      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
