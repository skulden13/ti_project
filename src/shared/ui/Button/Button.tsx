import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
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

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className, children, theme, square, size, disabled, ...rest
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: true,
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
};
