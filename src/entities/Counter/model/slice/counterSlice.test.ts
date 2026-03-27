import { counterActions, counterReducer } from './couterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  test('should decrement work', () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state, counterActions.decrement()),
    ).toEqual({ value: 9 });
  });

  test('should increment work', () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state, counterActions.increment()),
    ).toEqual({ value: 11 });
  });

  test('should work with empty state', () => {
    expect(
      counterReducer(undefined, counterActions.increment()),
    ).toEqual({ value: 1 });
  });
});
