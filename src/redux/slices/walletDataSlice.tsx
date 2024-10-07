import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletData {
  coin: any;
  balance: any;
}

interface WalletDataState {
  walletData: WalletData[];
}

const initialState: WalletDataState = {
  walletData: [],
};

const walletDataUploadSlice = createSlice({
  name: "walletData",
  initialState,
  reducers: {
    setWalletData: (state, action: PayloadAction<WalletData[]>) => {
      state.walletData = action.payload;
    },
    addWalletData: (state, action: PayloadAction<WalletData>) => {
      state.walletData.push(action.payload);
    },
    clearWalletData: (state) => {
      state.walletData = [];
    },
  },
});

export const { setWalletData } = walletDataUploadSlice.actions;

export default walletDataUploadSlice.reducer;
