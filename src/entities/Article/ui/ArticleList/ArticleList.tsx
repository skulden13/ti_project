import { memo } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';

import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.PLATE ? 9 : 3)
  .fill(0)
  .map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation();
  const {
    className, articles, isLoading, view = ArticleView.PLATE,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (item: Article) => (
    <ArticleListItem
      key={item.id}
      article={item}
      view={view}
      className={cls.card}
    />
  );

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  );
});
