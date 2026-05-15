import { memo } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { t } = useTranslation('comment');
  const { className, comments, isLoading } = props;

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      <Text className={cls.title} title={t('Comments')} />
      {comments?.length
        ? comments?.map((comment) => (
          <CommentCard key={comment.text} comment={comment} isLoading={isLoading} />
        ))
        : <Text text={t('CommentsNotFound')} />}
    </div>
  );
});
