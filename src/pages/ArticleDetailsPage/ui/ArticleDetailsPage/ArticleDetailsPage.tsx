import { ArticleDetails, ArticleList } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { addCommentForArticle }
  from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments }
  from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId }
  from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleRecommendations }
  from '../../model/slice/articleDetailsRecommendationsSlice';
import { getArticleRecommendationsIsLoading }
  from '../../model/selectors/recommendations';
import { fetchArticleRecomendations }
  from '../../model/services/fetchArticleRecomendations/fetchArticleRecomendations';
import { articleDetailsPageReducer } from '../../model/slice';

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
  const navigate = useNavigate();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecomendations());
  });

  const sendCommentHandler = useCallback((text: string) => {
    if (text) {
      dispatch(addCommentForArticle(text));
    }
  }, [dispatch]);

  const handleBackBtnClick = useCallback(
    () => {
      navigate(RoutePaths.articles);
    },
    [navigate],
  );

  const content = !id ? t('ArticleNotFound') : (
    <>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={handleBackBtnClick}
        className={cls.backBtn}
      >
        {t('Back')}
      </Button>

      <ArticleDetails id={id} />

      <Text className={cls.title} title={t('Recommendations')} />
      <ArticleList
        className={cls.recommendations}
        articles={recommendations}
        isLoading={recommendationsIsLoading}
        // eslint-disable-next-line i18next/no-literal-string
        target="_blank"
      />

      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
        onSendComment={sendCommentHandler}
      />
    </>
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {content}
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
