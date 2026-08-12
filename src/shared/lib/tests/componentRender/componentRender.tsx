import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode, Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = '/', initialState = {}, asyncReducers } = options;
  return render(
    <MemoryRouter
      initialEntries={[route]}
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <Suspense fallback="">
          {component}
        </Suspense>
      </StoreProvider>
    </MemoryRouter>,
  );
}
