import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { AppDispatch } from "redux/root-store";

export const uploadFile = createAsyncThunk<
  { accessUrl: string },
  { type: string; fileName: string; file: File; endpoint?: string },
  { dispatch: AppDispatch }
>(
  "file/upload",
  async ({ type, fileName, file, endpoint }, { rejectWithValue }) => {
    try {
      const apiKey = "6d207e02198a847aa98d0a2a901485a5";

      const formData = new FormData();
      formData.append('key', apiKey)
      formData.append('action', 'upload')
      formData.append('source', file)

      const res = await fetch("https://freeimage.host/api/1/upload", {
        // API Endpoint
        method: "POST", // HTTP Method
        body: formData, // Data to be sent
        mode: 'no-cors'
      })

      const {url: accessUrl} = res;
      console.log('res: ', res)
      console.log('url: ', accessUrl)
      return {accessUrl};
    } catch (e) {
      return rejectWithValue({ errMsg: "Can not upload file!" });
    }
  }
);
