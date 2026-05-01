import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  const content = !id ? t('ArticleNotFound') : <ArticleDetails id={id} />;

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {content}
    </div>
  );
});

export default ArticleDetailsPage;
