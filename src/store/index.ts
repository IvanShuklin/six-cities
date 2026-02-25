import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import mainReducer from './main-slice';
import offerReducer from './offer-slice';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    main: mainReducer,
    offer: offerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
