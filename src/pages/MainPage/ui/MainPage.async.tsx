import React, { memo } from 'react';

const MainPageAsync = React.lazy(() => import('./MainPage'));

export default memo(MainPageAsync);
