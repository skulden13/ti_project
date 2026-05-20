import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));

export default AddCommentFormAsync;
