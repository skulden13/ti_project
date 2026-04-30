import { SVGProps, VFC } from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  ns: string;
  icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePaths.main,
    text: 'Main',
    ns: 'main',
    icon: MainIcon,
  },
  {
    path: RoutePaths.about,
    text: 'About',
    ns: 'about',
    icon: AboutIcon,
  },
  {
    path: RoutePaths.profile,
    text: 'Profile',
    ns: 'profile',
    icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePaths.articles,
    text: 'ArticlesPage',
    ns: 'article',
    icon: ArticleIcon,
    authOnly: true,
  },
];
