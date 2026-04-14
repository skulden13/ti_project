import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { counterActions } from '../model/slice/couterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {value}
      </h1>
      <Button
        onClick={increment}
        theme={ButtonTheme.OUTLINE}
        data-testid="increment-button"
      >
        {t('Increment')}
      </Button>
      <Button
        onClick={decrement}
        theme={ButtonTheme.OUTLINE}
        data-testid="decrement-button"
      >
        {t('Decrement')}
      </Button>
    </div>
  );
});
