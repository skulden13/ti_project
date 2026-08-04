import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const { id } = useParams<{ id: string }>();

  const handleBackBtnClick = useCallback(
    () => {
      navigate(RoutePaths.articles);
    },
    [navigate],
  );

  const handleEditBtnClick = useCallback(
    () => {
      if (id) {
        navigate(generatePath(RoutePaths.article_edit, { id }));
      }
    },
    [id, navigate],
  );

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={handleBackBtnClick}
        className={cls.backBtn}
      >
        {t('Back')}
      </Button>
      {canEdit && (
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={handleEditBtnClick}
          className={cls.editBtn}
        >
          {t('Edit')}
        </Button>
      )}
    </div>
  );
});
