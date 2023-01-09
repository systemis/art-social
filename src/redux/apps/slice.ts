import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./auth";
import {getStorageProvider} from "providers";

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
  [actionTypePrefix: string]: RequestState | any;
}

const initialState: InitialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const storageProvider = getStorageProvider();
const userToken = storageProvider.getItem('access_token')
  ? storageProvider.getItem('access_token')
  : null

// Slice
const apps = createSlice({
  name: "apps",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload
    },
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    // register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
      state.loading = false
      state.success = true // registration successful
    })
    builder.addCase(registerUser.rejected, (state, {payload}) => {
      state.loading = false
      state.error = payload
    })
  }
});

export const {setUserInfo, logout} = apps.actions;

export default apps.reducer;

export const selectCurrentToken = (state: any) => state.apps.userToken
