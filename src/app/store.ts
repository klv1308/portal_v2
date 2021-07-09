import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rolSlice from '../features/rol/rolSlice';
import verifySlice from '../features/verify/verifySlice';
import conveymapSlice from '../features/conveymap/conveymapSlice';
import authSlice from '../auth/authSlice';

export const store = configureStore({
  reducer: {
    authSlice,
    rolSlice,
    verifySlice,
    conveymapSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


