import { ArticleDetails } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';

import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationList } from 'features/articleRecommendationList';
import { addCommentForArticle }
  from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments }
  from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId }
  from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const sendCommentHandler = useCallback((text: string) => {
    if (text) {
      dispatch(addCommentForArticle(text));
    }
  }, [dispatch]);

  const content = !id ? t('ArticleNotFound') : (
    <VStack gap="16" max>
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id} />

      <ArticleRecommendationList />

      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
        onSendComment={sendCommentHandler}
      />
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
