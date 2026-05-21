import React, { memo } from 'react';

const ArticleDetailsPageAsync = React.lazy(() => import('./ArticleDetailsPage'));

export default memo(ArticleDetailsPageAsync);
