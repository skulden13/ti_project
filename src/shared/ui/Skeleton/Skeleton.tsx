import { classNames } from 'shared/lib';

import { CSSProperties, memo, useMemo } from 'react';
import { Mods } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border,
  } = props;
  const mods: Mods = {};

  const styles: CSSProperties = useMemo(() => ({
    width,
    height,
    borderRadius: border,
  }), [width, height, border]);

  return (
    <div
      className={classNames(cls.Skeleton, mods, className ? [className] : [])}
      style={styles}
    />
  );
});
