import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('classNames', () => {
  test('simple render', () => {
    // eslint-disable-next-line
    render(<Button>Test</Button>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('render with "theme" param', () => {
    // eslint-disable-next-line
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);

    expect(screen.getByText('Test')).toHaveClass('clear');
    // screen.debug();
  });
});
