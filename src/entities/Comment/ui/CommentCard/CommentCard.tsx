import { memo } from 'react';
import { classNames } from 'shared/lib';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const { user } = comment;

  let header;
  let text;
  if (isLoading) {
    header = (
      <>
        <Skeleton width={30} height={30} border="50%" />
        <Skeleton className={cls.username} width={100} height={16} />
      </>
    );
    text = <Skeleton width="100%" height={50} />;
  } else {
    header = (
      <>
        {user.avatar ? <Avatar size={30} src={user.avatar} /> : null}
        <Text className={cls.username} title={user.username} />
      </>
    );
    text = <Text text={comment.text} />;
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePaths.profile}${user.id}`} className={cls.header}>
        {header}
      </AppLink>
      {text}
    </div>
  );
});
