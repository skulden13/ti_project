import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
  TextTheme, Text, TextAlign, TextSize,
} from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';

import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  error?: string;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.PLATE ? 9 : 3)
  .fill(0)
  .map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation('article');
  const {
    className, articles, isLoading, view = ArticleView.PLATE, error, target,
  } = props;

  const renderArticle = (item: Article) => (
    <ArticleListItem
      key={item.id}
      article={item}
      view={view}
      className={cls.card}
      target={target}
    />
  );

  let content = (
    <>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </>
  );

  if (error) {
    content = (
      <Text
        className={cls.heading}
        theme={TextTheme.ERROR}
        title={t('ErrorHeadingArticleList')}
        align={TextAlign.CENTER}
      />
    );
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      {!isLoading && !articles.length
        ? <Text title={t('ArticlesNotFound')} size={TextSize.L} />
        : content}
    </div>
  );
});
