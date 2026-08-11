import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CommentList } from 'entities/Comment';
import { addCommentForArticle }
  from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments }
  from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId }
  from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string,
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  const sendCommentHandler = useCallback((text: string) => {
    if (text) {
      dispatch(addCommentForArticle(text));
    }
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <div className={classNames('', {}, [className])}>
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
        onSendComment={sendCommentHandler}
      />
    </div>
  );
});
