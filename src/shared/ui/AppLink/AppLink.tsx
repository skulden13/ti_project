import { classNames } from 'shared/lib';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    to,
    children,
    ...rest
  } = props;

  return (
    <Link
      className={classNames(
        '',
        {},
        className ? [className, cls[theme]] : [cls[theme]],
      )}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
};
