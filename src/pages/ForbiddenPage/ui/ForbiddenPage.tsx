import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation('forbidden');
  return (
    <Page className={classNames('', {}, className ? [className] : [])}>
      <h1>{t('ForbiddenPage')}</h1>
    </Page>
  );
});

export default ForbiddenPage;
