import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "./thunk";

interface RequestState {
  firstPage?: boolean;
  loading?: boolean;
  error?: string | null;
  errCode?: string | number | undefined;
  contexts?:
    | {
        [key: string]: any;
      }
    | undefined;
}

interface InitialState {
  projects: {
    project: any;
  };
  [actionTypePrefix: string]: RequestState | any;
}

const initialState: InitialState = {
  projects: {
    project: undefined,
  },
};

// Slice
const projects = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, { payload }) => {
      state.success = true;
    });
    // builder.addCase(addProduct.fulfilled, (state, {payload}) => {
    //   state.success = true
    // });
    // builder.addCase(updateProduct.fulfilled, (state, {payload}) => {
    //   state.success = true
    // });
    // builder.addCase(deleteProduct.fulfilled, (state, {payload, meta}) => {
    //   state.success = true
    // });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = projects.actions;

export default projects.reducer;
