import { classNames } from 'shared/lib';

import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

const DEFAULT_SIZE = 100;

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, size } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size || DEFAULT_SIZE,
    height: size || DEFAULT_SIZE,
  }), [size]);

  return (
    <img
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
      alt=""
    />
  );
};
