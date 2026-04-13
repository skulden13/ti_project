import React from 'react';

// const ProfilePageAsync = React.lazy(() => import('./ProflePage'));

const ProfilePageAsync = React.lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));

export default ProfilePageAsync;
