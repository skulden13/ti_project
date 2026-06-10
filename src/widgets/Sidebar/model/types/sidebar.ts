import { SVGProps, VFC } from 'react';

export interface SidebarItemType {
  path: string;
  text: string;
  ns: string;
  icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
