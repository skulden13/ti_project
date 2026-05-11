import { classNames } from 'shared/lib';

import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';
import { Button } from '../Button/Button';

interface CodeProps {
  className?: string;
  children: ReactNode;
}

export const Code = memo((props: CodeProps) => {
  const { className, children } = props;
  const { t } = useTranslation('article');

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn}>{t('Copy')}</Button>
      <code>
        {children}
      </code>
    </pre>
  );
});
