import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: 'Monica', balance: 100000 }

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    deposit: (state, action) => {
      // Di sini seakan-akan langsung mengubah state,
      // Tapi sebenarnya tidak karena menggunakan Immer library
      // Untuk nama parameternya akan selalu menjadi payload
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

// Akan dibuatkan object action otomatis dari sini
export const { deposit, withdraw } = walletSlice.actions;

// Selector bisa dibuat di sini, atau dibuat di tempat akan dipanggil
// Agar lebih rapi dan reusable, dibuat di sini saja
export const selectBalance = state => state.wallet.balance;
export const selectUser = state => state.wallet.user;

export default walletSlice.reducer;
