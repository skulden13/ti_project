import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';

import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationList } from 'features/articleRecommendationList';

import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  const content = !id ? t('ArticleNotFound') : (
    <VStack gap="16" max>
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id} />

      <ArticleRecommendationList />

      <ArticleDetailsComments id={id} />
    </VStack>
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames('', {}, [className])}>
        {content}
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
