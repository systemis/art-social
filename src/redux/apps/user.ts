import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch} from "redux/root-store";
import {getNetworkProvider, getStorageProvider} from "providers";
import {UserEntity} from "entity/user.entity";

/** @dev Init providers */
const networkProvider = getNetworkProvider();
const storageProvider = getStorageProvider();

/**
 * @dev The function to produce registation user with API.
 * @type {createAsyncThunk}
 */
export const getProfile = 
  async () => {
    try {
      const response = await networkProvider.requestWithCredentials<UserEntity>("/user/profile", {
        method: "GET",
      });
      return response;
    } catch (e: any) {
      const error = JSON.parse(e?.message as string);
      throw new Error(error?.data?.data?.error_description);
    }
  }


