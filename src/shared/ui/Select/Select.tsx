import { classNames } from 'shared/lib';

import {
  ChangeEvent, memo, SelectHTMLAttributes, useCallback, useMemo,
}
  from 'react';
import { Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string = string> {
  value: T;
  content: string;
}

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>,
  'value' | 'onChange' | 'readOnly'>;

interface SelectProps<T extends string = string> extends HTMLSelectProps {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const SelectComponent = <T extends string = string>(props: SelectProps<T>) => {
  const {
    className, label, options, value, onChange, readonly,
  } = props;

  const changeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  }, [onChange]);

  const optionList = useMemo(() => (
    options?.map((opt) => (
      <option
        key={opt.value}
        className={cls.option}
        value={opt.value}
      >
        {opt.content}
      </option>
    ))), [options]);

  const mods: Mods = {
    [cls.readonly]: readonly,
  };
  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && (<span className={cls.label}>{`${label}>`}</span>)}
      <select
        className={cls.select}
        value={value}
        onChange={changeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
};

export const Select = memo(SelectComponent) as typeof SelectComponent;
