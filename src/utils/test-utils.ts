import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../store/main-slice';
import offerReducer from '../store/offer-slice';
import authReducer from '../store/auth-slice';
import favoritesReducer from '../store/favorites-slice';

export function createMockStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      offer: offerReducer,
      main: mainReducer,
      favorites: favoritesReducer,
    },
  });
}
