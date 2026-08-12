import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationList } from '../..';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationList(4);

  if (error || !articles) {
    return null;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text
        title={t('Recommendations')}
      />
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        target="_blank"
      />
    </VStack>
  );
});
