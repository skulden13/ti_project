import { render } from '@testing-library/react';
import { ReactNode, Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
  route?: string;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = '/' } = options;
  return render(
    <MemoryRouter
      initialEntries={[route]}
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Suspense fallback="">
        {component}
      </Suspense>
    </MemoryRouter>,
  );
}
