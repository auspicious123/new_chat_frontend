import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileData {
  id: number;
  name: string;
  email: string;
  phone: string;
  register_type: string;
  company_name?: string;
  company_address?: string;
  email_verified_at: string;
  phone_verified_at: string;
  created_at: string;
  updated_at: string;
  google_id: string;
  facebook_id: string;
  twitter_id: string;
  apple_id: string;
  wallet_id: string;
  referral_code: string;
  referral_by: string;
  account_status: string;
  google2fa_secret: string;
}

interface ProfileDataState {
  profileData: ProfileData | null;
}

const initialState: ProfileDataState = {
  profileData: null,
};

const profileDataUploadSlice = createSlice({
  name: "profileData",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<ProfileData>) => {
      state.profileData = action.payload;
    },
  },
});

export const { setProfileData } = profileDataUploadSlice.actions;

export default profileDataUploadSlice.reducer;
