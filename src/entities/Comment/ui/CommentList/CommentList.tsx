import { memo } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
  onSendComment: (text: string) => void;
}

export const CommentList = memo((props: CommentListProps) => {
  const { t } = useTranslation('comment');
  const {
    className, comments, isLoading, onSendComment,
  } = props;

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      <Text className={cls.title} title={t('Comments')} />

      <AddCommentForm onSendComment={onSendComment} />

      {comments?.length
        ? comments?.map((comment) => (
          <CommentCard key={comment.text} comment={comment} isLoading={isLoading} />
        ))
        : <Text text={t('CommentsNotFound')} />}
    </div>
  );
});
