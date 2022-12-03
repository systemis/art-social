import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

interface InitialState {
  messages: {
    error?: string | string[];
    success?: string;
  };
  menu: {
    height: number;
    isShowMobileMenu?: boolean;
  };
}

const initialState: InitialState = {
  messages: {
    error: undefined,
    success: undefined,
  },
  menu: {
    height: 0,
    isShowMobileMenu: false,
  },
};

// Slice
const ui = createSlice({
  name: "uis",
  initialState,
  reducers: {
    notify(
      state,
      {
        payload,
      }: PayloadAction<{ type?: "error" | "success"; message: string }>
    ) {
      const { type = "success", message } = payload;
      state.messages[type] = message;
    },
    setMenuHeight(state, { payload }: PayloadAction<{ height: number }>) {
      const { height } = payload;
      state.menu.height = height;
    },
    showMobileMenu(state, { payload }: PayloadAction<{ value: boolean }>) {
      const { value } = payload;
      state.menu.isShowMobileMenu = value;
    },
  },
});

export const {notify, setMenuHeight, showMobileMenu} = ui.actions;

export default ui.reducer;