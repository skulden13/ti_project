import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  console.log('cls', cls);
console.log('cls.Navbar', cls.Navbar);

  return (
    <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
      <ThemeSwitcher />
      
      <div className={cls.links}>
        <AppLink
          to="/"
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
          >
            Main
          </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
        >
          About
        </AppLink>
      </div>
    </div>
  )
}
