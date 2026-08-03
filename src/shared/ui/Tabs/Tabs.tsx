import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib';

import { Card, CardTheme } from 'entities/Card/ui/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string = string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string = string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (value: T) => void;
}

export const TabsComponent = <T extends string = string>(props: TabsProps<T>) => {
  const {
    className, tabs, value, onTabClick,
  } = props;

  const clickHandler = useCallback((tabValue: T) => () => {
    onTabClick(tabValue);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandler(tab.value)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

export const Tabs = memo(TabsComponent) as typeof TabsComponent;
