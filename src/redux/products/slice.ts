import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface RequestState {
  firstPage?: boolean;
  loading?: boolean;
  error?: string | null;
  errCode?: string | number | undefined;
  contexts?:
  | {
    [key: string]: any;
  }
  | undefined;
}

interface InitialState {
    products: {
        product: any;
  }
  [actionTypePrefix: string]: RequestState | any;
}

const initialState: InitialState = {
  products: {
    product: undefined,
  },
};

// Slice
const apps = createSlice({
  name: "apps",
  initialState,
  reducers: {
    storeUserProfile(state, {payload}: PayloadAction<{profile: any}>) {
        const {profile} = payload;
        state.user.profile = profile;
    }
  },
});

export const {storeUserProfile} = apps.actions;

export default apps.reducer;
