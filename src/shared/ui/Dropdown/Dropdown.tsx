import { Menu } from '@headlessui/react';

import { classNames } from 'shared/lib';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection, mapDirectionClass } from 'shared/lib/direction';
import cls from './Dropdown.module.scss';

interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
  const {
    className, items, trigger, direction = 'bottom left',
  } = props;
  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.button}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
        {items.map((item) => (
          <Menu.Item
            as={Fragment}
            disabled={item.disabled}
          >
            {({ active }) => (
              <button
                type="button"
                onClick={item.onClick}
                className={classNames(cls.menuItem, { [cls.active]: active }, [])}
              >
                {item.content}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
