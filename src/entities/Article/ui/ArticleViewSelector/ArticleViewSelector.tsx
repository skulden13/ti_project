import { memo } from 'react';
import { classNames } from 'shared/lib';

import { ArticleView } from 'entities/Article/model/types/article';

import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TileIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.PLATE,
    icon: TileIcon,
  },
  {
    view: ArticleView.EXPANDED,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const handleClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={handleClick(viewType.view)}
          className={classNames(cls.button, { [cls.isActive]: viewType.view === view }, [])}
        >
          <Icon Svg={viewType.icon} />
        </Button>
      ))}
    </div>
  );
});
