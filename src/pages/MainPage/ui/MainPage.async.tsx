import React from 'react';

// const MainPageAsync = React.lazy(() => import('./MainPage'));

const MainPageAsync = React.lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));

export default MainPageAsync;
