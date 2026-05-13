import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { createElement, Fragment } from 'react';

const freezeAnimations = `
        *, *::before, *::after {
          animation: none !important;
          transition: none !important;
          caret-color: transparent !important;
        }
      `;

export const StyleDecorator = (story: () => Story) => createElement(
  Fragment,
  {},
  createElement('style', {}, freezeAnimations),
  story(),
);
