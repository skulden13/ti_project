import { classNames } from 'shared/lib';

import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from 'entities/Currency/model/types/currency';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation();
  const {
    className, value, onChange, readonly,
  } = props;

  const changeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      options={options}
      label={t('Currency')}
      value={value}
      onChange={changeHandler}
      readonly={readonly}
    />
  );
});
