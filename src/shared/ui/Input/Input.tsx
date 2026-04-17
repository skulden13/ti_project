import { classNames } from 'shared/lib';

import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...rest
  } = props;

  // Extra: focus & caret
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const focusHandler = () => { setIsFocused(true); };
  const blurHandler = () => { setIsFocused(false); };
  const selectHandler = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);
  // end

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  return (
    <div className={classNames(cls.InputContainer, {}, className ? [className] : [])}>
      {placeholder && (<div className={cls.Placeholder}>{placeholder}</div>)}
      <div className={cls.CaretWrapper}>
        <input
          ref={ref}
          className={cls.Input}
          value={value}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onSelect={selectHandler}
          type={type}
          {...rest}
        />
        {isFocused && (<span className={cls.Caret} style={{ left: `${caretPosition * 9}px` }} />)}
      </div>
    </div>
  );
});
