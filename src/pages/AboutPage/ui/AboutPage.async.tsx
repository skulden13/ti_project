import React from 'react';

const AboutPageAsync = React.lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));

export default AboutPageAsync;
