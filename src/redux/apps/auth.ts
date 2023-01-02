import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch} from "redux/root-store";
import {RegisterDto, LoginDto} from "dto";
import {getNetworkProvider, getStorageProvider} from "providers";
import {LoginEntity} from "entity/login.entity";

/** @dev Init providers */
const networkProvider = getNetworkProvider();
const storageProvider = getStorageProvider();

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
  async (loginDto, {rejectWithValue}) => {
    try {
      const response = await networkProvider.request<LoginEntity>("/auth/login", {
        method: "POST",
        data: loginDto
      });
      
      /**
       * @dev Stroage credentails.
       */
      storageProvider.setItem("access_token", response?.access_token);
      storageProvider.setItem("id_token", response?.id_token);
    } catch (e: any) {
      const error = JSON.parse(e?.message as string);
      return rejectWithValue({errMsg: error?.data?.data?.error_description});
    }
  }
);


/**
 * @dev The function to produce authenticating user by credential with API.
 * @type {createAsyncThunk}
 */
export const logout = createAsyncThunk<
  {accessUrl: string},
  LoginDto,
  {dispatch: AppDispatch}
>(
  "file/upload",
  async (loginDto, {rejectWithValue}) => {
    try {
      const response = await networkProvider.request<LoginEntity>("/auth/login", {
        method: "POST",
        data: loginDto
      });
      
      /**
       * @dev Stroage credentails.
       */
      storageProvider.removeItem("access_token");
      storageProvider.removeItem("id_token");
    } catch (e: any) {
      const error = JSON.parse(e?.message as string);
      return rejectWithValue({errMsg: error?.data?.data?.error_description});
    }
  }
);
