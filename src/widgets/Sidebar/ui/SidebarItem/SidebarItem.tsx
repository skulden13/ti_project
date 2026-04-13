import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { path, icon: Icon, text } = item;
  return (
    <div className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [])}>
      <AppLink
        to={path}
        theme={AppLinkTheme.SECONDARY}
        className={cls.link}
      >
        <Icon className={cls.icon} />
        <span className={cls.text}>
          {text}
        </span>
      </AppLink>
    </div>
  );
};
