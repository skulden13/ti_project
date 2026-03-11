import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  console.log('cls', cls);
  console.log('cls.Navbar', cls.Navbar);
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
      <div className={cls.links}>
        <AppLink
          to="/"
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Main')}
        </AppLink>
        <AppLink
          // eslint-disable-next-line
          to="/about"
          theme={AppLinkTheme.SECONDARY}
        >
          {t('About')}
        </AppLink>
      </div>
    </div>
  );
};
