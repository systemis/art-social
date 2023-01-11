import { getNetworkProvider, getStorageProvider } from "providers";
import { createAsyncThunk } from "@reduxjs/toolkit";

const networkProvider = getNetworkProvider();
const storageProvider = getStorageProvider();
const id_token = storageProvider.getItem("id_token");

export const fetchProjects = createAsyncThunk("project/get", async () => {
  try {
    const response = await networkProvider.request("/projects", {
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log("error: ", e);
  }
});

export const fetchProjectsByUser = createAsyncThunk(
  "user/projects",
  async (userId: string) => {
    try {
      const response = await networkProvider.request("/projects", {
        method: "GET",
        params: { userId },
      });
      return response;
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
