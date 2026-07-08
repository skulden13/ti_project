import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation('notFound');
  return (
    <Page className={classNames(cls.NotFoundPage, {}, className ? [className] : [])}>
      <h1>{t('NotFound')}</h1>
    </Page>
  );
});

export default NotFoundPage;
