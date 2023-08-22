'use client';

import { configureStore } from "@reduxjs/toolkit";
import { shazamCoreApi } from "./services/shazamCore";

// import playerReducer from './reducers/PlayerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    // player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;