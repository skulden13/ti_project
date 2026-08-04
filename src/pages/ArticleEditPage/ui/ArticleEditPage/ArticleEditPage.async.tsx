import React, { memo } from 'react';

const ArticleEditPageAsync = React.lazy(() => import('./ArticleEditPage'));

export default memo(ArticleEditPageAsync);
