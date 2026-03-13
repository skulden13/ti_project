import { render } from '@testing-library/react';
import { Suspense, ReactNode } from 'react';

export function renderWithSuspense(component: ReactNode) {
  return render(
    <Suspense fallback="">
      {component}
    </Suspense>,
  );
}
