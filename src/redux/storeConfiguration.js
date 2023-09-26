import { configureStore } from '@reduxjs/toolkit';
import activity from './slices/activitySlice';

const store = configureStore({
  reducer: { activity },
});
export default store;
