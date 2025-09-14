
import { configureStore } from '@reduxjs/toolkit';
import { someAction } from './defaultSlice'
import authReducer from './authSlice';
import toastReducer from "./toastSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: {
    someReducer: someAction,
    auth: authReducer,
    toast: toastReducer,
    loading: loadingReducer,
  },
});
