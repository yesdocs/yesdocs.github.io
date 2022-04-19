import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../features/job/JobSlice';

export const store = configureStore({
  reducer: {
    job: jobReducer,
  },
});
