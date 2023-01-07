import { getNetworkProvider, getStorageProvider } from "providers";
import { UserEntity } from "entity/user.entity";
import { UpdateUserDto, ChangeUserPasswordDto } from "dto";

/** @dev Init providers */
const networkProvider = getNetworkProvider();

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

/**
 * @dev The function to produce registation user with API.
 * @type {createAsyncThunk}
 */
export const updateProfile =
  async (payload: UpdateUserDto) => {
    try {
      const response = await networkProvider.requestWithCredentials<UserEntity>("/user/profile", {
        method: "PATCH",
        data: payload,
      });
      return response;
    } catch (e: any) {
      const error = JSON.parse(e?.message as string);
      throw new Error(error?.data?.data?.error_description);
    }
  }


/**
* @dev The function to produce registation user with API.
* @type {createAsyncThunk}
*/
export const updatePassword =
  async (payload: ChangeUserPasswordDto) => {
    try {
      const response = await networkProvider.requestWithCredentials<UserEntity>("/user/password", {
        method: "PATCH",
        data: payload,
      });
      return response;
    } catch (e: any) {
      const error = JSON.parse(e?.message as string);
      throw new Error(error?.data?.data?.error_description);
    }
  }


