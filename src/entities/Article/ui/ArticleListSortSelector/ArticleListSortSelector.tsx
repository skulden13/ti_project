import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';

import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder, SortOrderEnum } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';
import cls from './ArticleListSortSelector.module.scss';

interface ArticleListSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  onChangeSort: (v: ArticleSortField) => void;
  order: SortOrder;
  onChangeOrder: (v: SortOrder) => void;
}

export const ArticleListSortSelector = memo((props: ArticleListSortSelectorProps) => {
  const {
    className, sort, onChangeSort, order, onChangeOrder,
  } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: SortOrderEnum.ASC,
        content: t('Asc'),
      },
      {
        value: SortOrderEnum.DESC,
        content: t('Desc'),
      }],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('CreatedAt'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('Title'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('Views'),
      }],
    [t],
  );

  return (
    <div className={classNames(cls.ArticleListSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t('SortBy')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        options={orderOptions}
        label={t('By')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
