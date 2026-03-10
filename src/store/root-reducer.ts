import { combineReducers } from '@reduxjs/toolkit';

import mainReducer from './main-slice';
import offerReducer from './offer-slice';
import authReducer from './auth-slice';
import favoritesReducer from './favorites-slice';

const rootReducer = combineReducers({
  main: mainReducer,
  offer: offerReducer,
  auth: authReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
