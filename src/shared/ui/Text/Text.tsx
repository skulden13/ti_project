import { classNames } from 'shared/lib';

import { memo } from 'react';
import { Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY,
  } = props;
  const mods: Mods = {
    [cls[theme]]: true,
  };
  return (
    <div className={classNames('', mods, className ? [className] : [])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
