import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/couterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
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
      {/* eslint-disable i18next/no-literal-string */}
      <h1>
        Value =
        {' '}
        {value}
      </h1>
      <Button onClick={increment} theme={ButtonTheme.OUTLINE}>
        increment
      </Button>
      <Button onClick={decrement} theme={ButtonTheme.OUTLINE}>
        decrement
      </Button>
      {/* eslint-enable */}
    </div>
  );
};
