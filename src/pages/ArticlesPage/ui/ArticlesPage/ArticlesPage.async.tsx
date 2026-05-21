import React, { memo } from 'react';

const ArticlesPageAsync = React.lazy(() => import('./ArticlesPage'));

export default memo(ArticlesPageAsync);
