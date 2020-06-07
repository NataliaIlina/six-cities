import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { useDispatch as useReduxDispatch } from 'react-redux';
import api from './api';
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';

const middleware = getDefaultMiddleware({
  thunk: {
    extraArgument: api,
  },
  serializableCheck: false,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;

export const useDispatch = () => useReduxDispatch<TAppDispatch>();
export const useSelector: TypedUseSelectorHook<TRootState> = useReduxSelector;

export default store;
