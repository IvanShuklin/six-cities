import { render, RenderResult } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryHistory, createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ReactElement } from 'react';

import HistoryRouter from '../components/history-route/history-route';
import rootReducer from '../store/root-reducer';
import { RootState } from '../store';

type ExtendedRenderOptions = {
  history?: MemoryHistory;
  initialState?: Partial<RootState>;
};

export function renderWithHistory(
  component: ReactElement,
  { history, initialState }: ExtendedRenderOptions = {}
): RenderResult {
  const memoryHistory = history ?? createMemoryHistory();

  const mockStore = configureStore({
    reducer: rootReducer,
    preloadedState: initialState as RootState
  });

  return render(
    <Provider store={mockStore}>
      <HistoryRouter history={memoryHistory}>
        <HelmetProvider>
          {component}
        </HelmetProvider>
      </HistoryRouter>
    </Provider>
  );
}
