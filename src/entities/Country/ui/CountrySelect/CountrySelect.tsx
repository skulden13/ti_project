import { classNames } from 'shared/lib';

import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country/model/types/country';
import { memo, useCallback } from 'react';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Georgia, content: Country.Georgia },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.UnitedStates, content: Country.UnitedStates },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation();
  const {
    className, value, onChange, readonly,
  } = props;

  const changeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      options={options}
      label={t('Country')}
      value={value}
      onChange={changeHandler}
      readonly={readonly}
    />
  );
});
