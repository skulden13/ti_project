import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export { createReduxStore };
