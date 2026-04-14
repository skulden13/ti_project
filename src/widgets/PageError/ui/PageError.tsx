import { classNames } from 'shared/lib';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { memo } from 'react';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div
      className={classNames(cls.PageError, {}, className ? [className] : [])}
    >
      <p>{t('ErrorHappened')}</p>
      <Button onClick={reloadPage}>{t('ErrorPageRefresh')}</Button>
    </div>
  );
});
