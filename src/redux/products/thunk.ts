import { getNetworkProvider, getStorageProvider } from "providers";
import { createAsyncThunk } from "@reduxjs/toolkit";

const networkProvider = getNetworkProvider();
const storageProvider = getStorageProvider();
const id_token = storageProvider.getItem("id_token");

export const fetchProducts = createAsyncThunk("product/get", async () => {
  try {
    const response = await networkProvider.request("/products", {
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log("error: ", e);
  }
});

export const fetchProductsByUser = createAsyncThunk(
  "user/products",
  async (userId: string) => {
    try {
      const response = await networkProvider.request("/products", {
        method: "GET",
        params: { userId },
      });
      return response;
    } catch (e) {
      console.log("error: ", e);
    }
  }
);

export const fetchLikedProductsByUser = createAsyncThunk(
  "user/liked-products",
  async (userId: string) => {
    try {
      const response = await networkProvider.request("/products/liked", {
        method: "GET",
        params: { userId },
      });
      return response;
    } catch (e) {
      console.log("error: ", e);
    }
  }
);

export const reactToProduct = createAsyncThunk(
  "product/react",
  async (id: string) => {
    try {
      const response = await networkProvider.requestWithCredentials(
        `/product/react/${id}`,
        {
          method: "PATCH",
          data: { id_token },
        }
      );
      console.log(response);
    } catch (e) {
      console.log("error: ", e);
    }
  }
);

// export const addProduct = networkProvider.request("/product", {
//     method: "POST",
//   });
// export const updateProduct = networkProvider.request("/product/:id", {
//     method: "PATCH"
//   });
// export const deleteProduct = networkProvider.request("/product/:id", {
//     method: "DELETE"
//   });
