import { configureStore } from '@reduxjs/toolkit';

import postSlice from './postSlice';

//reducer
const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});

export default store;
