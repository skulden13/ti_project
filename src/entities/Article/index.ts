import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { Article, ArticleView } from './model/types/article';
import { AtricleDetailsSchema } from './model/types/articleDetailsSchema';
import { getArticleDetailsData } from './model/selectors/articleDetails';
import { ArticleList } from './ui/ArticleList/ArticleList';

export {
  ArticleDetails,
  ArticleList,
  Article,
  ArticleView,
  AtricleDetailsSchema,
  getArticleDetailsData,
};
