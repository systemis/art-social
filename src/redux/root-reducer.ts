import { combineReducers } from "@reduxjs/toolkit";
import ui from "redux/ui/slice";
import apps from "redux/apps/slice";
import projects from "redux/projects/slice";
import products from "redux/products/slice";

const appReducer = combineReducers({
  ui,
  apps,
  projects,
  products,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
