import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AtricleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollPositionSchema } from 'features/ScrollPosition';
import { EditableProfileCardSchema } from 'features/editableProfileCard';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema,
  scrollPosition: ScrollPositionSchema,
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
  // Async
  loginForm?: LoginSchema,
  profile?: EditableProfileCardSchema,
  articlesPage?: ArticlesPageSchema,
  articleDetails?: AtricleDetailsSchema,
  articleDetailsPage?: ArticleDetailsPageSchema,
  addCommentForm?: AddCommentFormSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg,
  state: StateSchema,
}
