import {
  AnyAction,
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { scrollPositionReducers } from 'features/ScrollPosition';
import { ReduxStoreWithManager, StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollPosition: scrollPositionReducers,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArgument: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
  }) as ReduxStoreWithManager;

  store.reducerManager = reducerManager;

  return store;
}

type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>;

export { createReduxStore, AppDispatch };
