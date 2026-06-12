import { ArticleDetails } from 'entities/Article';
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
import { addCommentForArticle }
  from '../../model/services/addCommentForArticle/addCommentForArticle';
import { articleDetailsCommentsReducer, getArticleComments }
  from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId }
  from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
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

      <CommentList
        isLoading={isLoading}
        comments={comments}
        onSendComment={sendCommentHandler}
      />
    </>
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
