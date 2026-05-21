import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));

export default AddCommentFormAsync;
