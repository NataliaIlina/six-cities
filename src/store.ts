import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import api from './api';

const middleware = getDefaultMiddleware({
  thunk: {
    extraArgument: api,
  },
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;

export default store;
