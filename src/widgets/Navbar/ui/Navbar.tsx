import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t: t1 } = useTranslation('main');
  const { t: t2 } = useTranslation('about');

  return (
    <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
      <div className={cls.links}>
        <AppLink
          to="/"
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          {t1('Main')}
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
        >
          {t2('About')}
        </AppLink>
      </div>
    </div>
  );
};
