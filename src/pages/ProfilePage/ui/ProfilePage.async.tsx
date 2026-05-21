import React, { memo } from 'react';

const ProfilePageAsync = React.lazy(() => import('./ProfilePage'));

export default memo(ProfilePageAsync);
