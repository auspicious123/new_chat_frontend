
//src/redux/store.tsx
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import setProfileData from "@/redux/slices/profileDataSlice";
import setWalletData from "@/redux/slices/walletDataSlice";
import chatReducer from "@/redux/slices/chatSlice";

const rootReducer = combineReducers({
  setProfileData: setProfileData,
  setWalletData: setWalletData,
  chat: chatReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
