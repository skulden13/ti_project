import { memo } from 'react';

import { useSelector } from 'react-redux';
import { ArticleList, ArticleView } from 'entities/Article';
import {
  getArticlePageError,
  getArticlePageIsLoading,
} from '../../model/selectors/articlePageSelectors';
import { getArticles } from '../../model/slice/articlesPageSlice';

interface ArticleInfiniteListProps {
  className?: string;
  view: ArticleView;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className, view } = props;

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);

  return (
    <ArticleList
      className={className}
      articles={articles}
      view={view}
      isLoading={isLoading}
      error={error}
    />
  );
});
