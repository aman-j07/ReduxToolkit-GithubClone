import { configureStore } from '@reduxjs/toolkit';
import GithubCloneReducer from '../features/GithubClone/GithubCloneSlice'

export const store = configureStore({
  reducer: {
    GithubCloneReducer,
  },
});
