import {
  Listbox as HListbox,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib';
import { DropdownDirection, mapDirectionClass } from 'shared/lib/direction';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';

export interface ListBoxItem<T extends string = string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string = string> {
  className?: string;
  label?: string;
  options?: ListBoxItem[];
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
}

export function ListBox(props: ListBoxProps) {
  const {
    className, label, options, value, defaultValue, onChange, readonly, direction = 'bottom left',
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && (
        <span className={classNames(cls.label, { [cls.readonly]: readonly }, [])}>
          {`${label}>`}
        </span>
      )}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, { [cls.readonly]: readonly }, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button className={cls.trigger}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {options?.map((option) => (

            <HListbox.Option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li className={
                  classNames(
                    cls.option,
                    {
                      [cls.active]: active,
                      [cls.selected]: selected,
                      [cls.disabled]: option.disabled,
                    },
                  )
                }
                >
                  {selected}
                  {option.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}
