import { SVGProps, VFC } from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import i18n from 'shared/config/i18n/i18n';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePaths.main,
    text: i18n.t('Main', { ns: 'main' }),
    icon: MainIcon,
  },
  {
    path: RoutePaths.about,
    text: i18n.t('About', { ns: 'about' }),
    icon: AboutIcon,
  },
  {
    path: RoutePaths.profile,
    text: i18n.t('Profile', { ns: 'profile' }),
    icon: ProfileIcon,
  },
];
