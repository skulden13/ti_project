import { Article } from './article';

export interface AtricleDetailsSchema {
  isLoading?: boolean;
  error?: string;
  data?: Article;
}
