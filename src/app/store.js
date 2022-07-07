import { configureStore } from '@reduxjs/toolkit';

import walletSlice from '../reducers/walletSlice';
import { colorAPI } from '../services/colorAPI';

const store = configureStore({
  reducer: {
    wallet: walletSlice,
    [colorAPI.reducerPath]: colorAPI.reducer
  },
  // Menambahkan middleware untuk caching, invalidation, polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(colorAPI.middleware),
});

export default store;
