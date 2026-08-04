import { memo } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';

import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames('', {}, [className])}>
      <h1
        className={cls.heading}
      >
        {isEdit ? t('EditPage') : t('NewPage')}
      </h1>
    </Page>
  );
});

export default ArticleEditPage;
