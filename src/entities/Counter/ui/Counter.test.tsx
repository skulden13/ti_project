import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('simple render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('test increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const toggleBtn = screen.getByTestId('increment-button');
    expect(screen.getByTestId('value-title')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('test decrement', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const toggleBtn = screen.getByTestId('decrement-button');
    expect(screen.getByTestId('value-title')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
