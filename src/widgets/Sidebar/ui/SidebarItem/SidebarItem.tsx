import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const {
    path, icon, text, ns,
  } = item;
  const isAuth = useSelector(getUserAuthData);
  const { t } = useTranslation(ns);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <div className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [])}>
      <AppLink
        to={path}
        theme={AppLinkTheme.SECONDARY}
        className={cls.link}
      >
        <Icon Svg={icon} className={cls.icon} />
        <span className={cls.text}>
          {t(text)}
        </span>
      </AppLink>
    </div>
  );
});
