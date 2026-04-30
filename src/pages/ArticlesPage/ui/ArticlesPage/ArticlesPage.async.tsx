import React, { memo } from 'react';

// const ArticlesPageAsync = React.lazy(() => import('./ArticlesPage'));

const ArticlesPageAsync = React.lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));

export default memo(ArticlesPageAsync);
