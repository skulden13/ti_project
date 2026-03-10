import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib';
import { FC } from 'react';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, theme, ...rest } = props;

  let classes = className ? [className] : [];
  classes = theme ? classes.concat([theme]) : classes;

  return (
    <button
      className={classNames(cls.Button, {}, classes)}
      {...rest}
    >
      {children}
    </button>
  );
};