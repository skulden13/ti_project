import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation('notFound');
  return (
    <div className={classNames(cls.NotFoundPage, {}, className ? [className] : [])}>
      <h1>{t('NotFound')}</h1>
    </div>
  );
};

export default NotFoundPage;
