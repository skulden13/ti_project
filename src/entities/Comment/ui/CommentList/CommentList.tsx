import { memo, Suspense } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
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

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      <Text title={t('Comments')} />

      <Suspense fallback="">
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>

      {comments?.length
        ? comments?.map((comment) => (
          <CommentCard key={comment.text} comment={comment} isLoading={isLoading} />
        ))
        : <Text text={t('CommentsNotFound')} />}
    </VStack>
  );
});
