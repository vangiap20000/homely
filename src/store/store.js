
import { configureStore } from '@reduxjs/toolkit';
import { someAction } from './defaultSlice'

export const store = configureStore({
  reducer: {
     someReducer: someAction,
  },
});
