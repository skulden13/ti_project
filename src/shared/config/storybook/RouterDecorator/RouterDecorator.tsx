import { Story, StoryContext } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export const RouterDecorator = (story: () => Story, context: StoryContext) => {
  const { parameters } = context;
  const route = parameters?.router?.route || '/';
  const path = parameters?.router?.path;

  return (
    <MemoryRouter initialEntries={[route]}>
      {path ? (
        <Routes>
          <Route path={path} element={story()} />
        </Routes>
      ) : story()}
    </MemoryRouter>
  );
};
