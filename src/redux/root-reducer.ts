import {combineReducers} from '@reduxjs/toolkit';
import ui from 'redux/ui/slice'

const appReducer = combineReducers({
  ui,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;