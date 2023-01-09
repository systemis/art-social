import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch} from "redux/root-store";
import axios from "axios";

export const uploadFile = createAsyncThunk<
  {accessUrl: string},
  {type: string; fileName: string; file: File; endpoint?: string},
  {dispatch: AppDispatch}
>(
  "file/upload",
  async ({file}, {rejectWithValue}) => {
    try {
      const formData = new FormData();
      formData.append('image', file)
      const res = await axios.post("https://afternoon-gorge-11599.herokuapp.com/api/image", formData);
      return res.data.data;
    } catch (e) {
      return rejectWithValue({errMsg: "Can not upload file!"});
    }
  }
);

export interface UploadResponse {
  fileName: string;
  fileType: string;
  accessUrl: string;
}
