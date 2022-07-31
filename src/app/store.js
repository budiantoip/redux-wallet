import { configureStore } from '@reduxjs/toolkit';

import walletSlice from '../reducers/walletSlice';
import { colorApi } from '../services/colorApi';

const store = configureStore({
  reducer: {
    wallet: walletSlice,
    [colorApi.reducerPath]: colorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(colorApi.middleware),
});

export default store;