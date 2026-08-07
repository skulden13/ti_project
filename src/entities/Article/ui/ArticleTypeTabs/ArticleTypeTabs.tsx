import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../..';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onTabClick: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { t } = useTranslation('article');
  const { className, value, onTabClick } = props;

  const tabs = useMemo<TabItem<ArticleType>[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('AtricleTypeAll'),
    },
    {
      value: ArticleType.IT,
      content: t('AtricleTypeIT'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('AtricleTypeScience'),
    },
    {
      value: ArticleType.ECONOMY,
      content: t('AtricleTypeEconomy'),
    },
  ], [t]);

  return (
    <Tabs<ArticleType>
      className={className}
      tabs={tabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
});
