import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ENDPOINT } from "constants/endpoints";
import React from "react";
import { AppDispatch } from "redux/root-store";
import { v4 as uuidv4 } from "uuid";
import { storage } from "config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const uploadFile = createAsyncThunk<
  { accessUrl: string },
  { type: string; fileName: string; file: File; endpoint?: string },
  { dispatch: AppDispatch }
>(
  "file/upload",
  async ({ type, fileName, file, endpoint }, { rejectWithValue }) => {
    try {
      const idImg: string = uuidv4();

      const storageRef = ref(storage, `/uploads/images/${idImg}${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          ); // update progress
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
          });
        }
      );

      const postParams = {
        fileName: fileName,
        fileType: type,
        accessUrl: `${endpoint}/${idImg}${fileName}`,
      };

      const res = await axios.post(
        "http://127.0.0.1:8000/api/image/",
        postParams
      );

      return res.data.data.accessUrl;
    } catch (e) {
      return rejectWithValue({ errMsg: "Can not upload file!" });
    }
  }
);
