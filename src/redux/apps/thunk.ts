import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ENDPOINT } from "constants/endpoints";
import React from "react";
import { AppDispatch } from "redux/root-store";

export const uploadFile = createAsyncThunk<
  { accessUrl: string },
  { type: string; fileName: string; file: File; endpoint?: string },
  { dispatch: AppDispatch }
>('file/upload', async ({ type, fileName, file, endpoint }, {rejectWithValue}) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("medicalFormFile", file);
    formData.append("category", type);

    const res = await axios.post(
      endpoint ? endpoint : ENDPOINT.FILE_UPLOAD,
      formData
    );
    const { url: accessUrl } = res.data.data;

    return { accessUrl };
  } catch (e) {
    return rejectWithValue({errMsg: 'Can not upload file!'})
  }
});
