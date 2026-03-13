import { screen, fireEvent } from '@testing-library/react';
import { renderWithSuspense } from 'shared/lib/tests/renderWithSuspense';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('simple render', () => {
    renderWithSuspense(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithSuspense(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
