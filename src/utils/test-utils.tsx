import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
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

export function renderWithProviders(
  component: ReactElement,
  store = createMockStore()
): RenderResult {
  return render(
    <Provider store={store}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </Provider>
  );
}
