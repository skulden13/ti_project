import { classNames } from 'shared/lib';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
    <div className={cls.links}>
      /
    </div>
  </div>
);
