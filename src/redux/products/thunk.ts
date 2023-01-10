import {getNetworkProvider, getStorageProvider} from "providers";
import {createAsyncThunk} from "@reduxjs/toolkit";

const networkProvider = getNetworkProvider();
const storageProvider = getStorageProvider();

export const fetchProducts = createAsyncThunk(
  "product/get",
  async () => {
    try {
      const response = await networkProvider.request("/products", {
        method: "GET",
      });
      return response
    } catch (e) {
      console.log('error: ', e)
    }
  }
);

export const fetchProductsByUser = createAsyncThunk(
  "user/products",
  async (userId: string) => {
    try {
      const response = await networkProvider.request("/products", {
        method: "GET",
        params: {userId}
      });
      return response
    } catch (e) {
      console.log('error: ', e)
    }
  }
)

// export const addProduct = networkProvider.request("/product", {
//     method: "POST",
//   });
// export const updateProduct = networkProvider.request("/product/:id", {
//     method: "PATCH"
//   });
// export const deleteProduct = networkProvider.request("/product/:id", {
//     method: "DELETE"
//   });
