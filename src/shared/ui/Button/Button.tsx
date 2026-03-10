import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className, children, theme, ...rest
  } = props;

  let classes = className ? [className] : [];
  classes = theme ? classes.concat([theme]) : classes;

  return (
    <button
      type="button"
      className={classNames(cls.button, {}, classes)}
      {...rest}
    >
      {children}
    </button>
  );
};
