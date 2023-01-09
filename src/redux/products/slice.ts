import {createSlice} from "@reduxjs/toolkit";
import {fetchProducts} from "./thunk";

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
    products: {
        product: any;
  }
  [actionTypePrefix: string]: RequestState | any;
}

const initialState: InitialState = {
  products: {
    product: undefined,
  },
};

// Slice
const apps = createSlice({
  name: "apps",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, {payload}) => {
      state.success = true
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
  }
});

// eslint-disable-next-line no-empty-pattern
export const {} = apps.actions;

export default apps.reducer;
