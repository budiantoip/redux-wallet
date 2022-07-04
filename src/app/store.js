import { configure } from '@testing-library/react';

import walletSlice from '../reducers/walletSlice';

const store = configure({
    reducer: {
      wallet: walletSlice
    }
});

export default store;