import { classNames } from 'shared/lib';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t: t1 } = useTranslation('main');
  const { t: t2 } = useTranslation('about');

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={
        classNames(
          cls.sidebar,
          { [cls.collapsed]: collapsed },
          className ? [className] : [],
        )
      }
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGORUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <div className={cls.item}>
          <AppLink
            to={RoutePaths.main}
            theme={AppLinkTheme.SECONDARY}
            className={cls.link}
          >
            <MainIcon className={cls.icon} />
            <span className={cls.text}>
              {t1('Main')}
            </span>
          </AppLink>
        </div>
        <div className={cls.item}>
          <AppLink
            to={RoutePaths.about}
            theme={AppLinkTheme.SECONDARY}
            className={cls.link}
          >
            <AboutIcon className={cls.icon} />
            <span className={cls.text}>
              {t2('About')}
            </span>
          </AppLink>
        </div>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
