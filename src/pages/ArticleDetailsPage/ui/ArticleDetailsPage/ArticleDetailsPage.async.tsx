import React, { memo } from 'react';

// const ArticleDetailsPageAsync = React.lazy(() => import('./ArticleDetailsPage'));

const ArticleDetailsPageAsync = React.lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));

export default memo(ArticleDetailsPageAsync);
