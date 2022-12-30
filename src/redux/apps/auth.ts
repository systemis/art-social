import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch} from "redux/root-store";
import { RegisterDto, LoginDto } from "../../dto";
import { getNetworkProvider } from "../../providers";

/** @dev Init providers */
const networkProvider = getNetworkProvider();

/**
 * @dev The function to produce registation user with API.
 * @type {createAsyncThunk}
 */
export const register = createAsyncThunk<
  {accessUrl: string},
  RegisterDto,
  {dispatch: AppDispatch}
>(
  "file/upload",
  async (registerDto, {rejectWithValue}) => {
    try {
      await networkProvider.request("/auth/register", {
        method: "POST",
        data: registerDto
      });
    } catch (e) {
      return rejectWithValue({errMsg: "Register user failed"});
    }
  }
);


/**
 * @dev The function to produce authenticating user by credential with API.
 * @type {createAsyncThunk}
 */
export const login = createAsyncThunk<
  {accessUrl: string},
  LoginDto,
  {dispatch: AppDispatch}
>(
  "file/upload",
  async (registerDto, {rejectWithValue}) => {
    try {
      await networkProvider.request("/auth/login", {
        method: "POST",
        data: registerDto
      });
    } catch (e) {
      return rejectWithValue({errMsg: "Register user failed"});
    }
  }
);
