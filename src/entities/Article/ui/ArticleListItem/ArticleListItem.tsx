import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'entities/Card/ui/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { t } = useTranslation('article');
  const {
    className,
    article,
    view,
  } = props;
  const [_, bindHover] = useHover();

  const navigate = useNavigate();
  const handleOpenArticle = useCallback(
    () => {
      navigate(RoutePaths.article_details + article.id);
    },
    [navigate, article],
  );

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.EXPANDED) {
    const textBlock = article.blocks.find(
      (b) => b.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <header className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </header>
          <Text title={article.title} className={cls.title} />
          {types}

          <img src={article.img} className={cls.image} alt={article.title} />

          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}

          <footer className={cls.footer}>
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={handleOpenArticle}
            >
              {t('ReadMore')}
            </Button>
            {views}
          </footer>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      {...bindHover}
    >
      <Card onClick={handleOpenArticle}>
        <div className={cls.imageWrapper}>
          <img src={article.img} className={cls.image} alt={article.title} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
});
