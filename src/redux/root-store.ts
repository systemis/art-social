import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootReducer, { RootState } from 'redux/root-reducer';


const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof rootStore.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default rootStore;