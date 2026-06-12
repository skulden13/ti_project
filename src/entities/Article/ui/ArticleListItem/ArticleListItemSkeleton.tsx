import { memo } from 'react';
import { classNames } from 'shared/lib';

import { Card } from 'entities/Card/ui/Card';

import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view,
  } = props;

  if (view === ArticleView.EXPANDED) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <header className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={80} height={16} className={cls.date} />
          </header>
          <Skeleton width={250} height={24} className={cls.title} />

          <Skeleton height={200} className={cls.image} />

          <footer className={cls.footer}>
            <Skeleton width={200} height={36} />
          </footer>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.image} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} />
      </Card>
    </div>
  );
});
