import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib';

import { Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGORUND = 'background',
  BACKGORUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled = false,
    ...rest
  } = props;

  const mods: Mods = {
    [cls[theme]]: Boolean(theme),
    [cls.square]: Boolean(square),
    [cls[size]]: Boolean(size),
    [cls.disabled]: disabled,
  };

  const classes = className ? [className] : [];
  return (
    <button
      type="button"
      className={classNames(cls.button, mods, classes)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
});
