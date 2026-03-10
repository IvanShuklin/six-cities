import { render, RenderResult } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryHistory, createMemoryHistory } from 'history';
import { ReactElement } from 'react';
import HistoryRouter from '../components/history-route/history-route';
import { createComponentWithStore } from './test-store';
import { createMockState } from './mock-state';
import { State } from '../types/main-state';

type RenderWithHistoryOptions = {
  history?: MemoryHistory;
};

export function renderWithHistory(
  component: ReactElement,
  { history }: RenderWithHistoryOptions = {}
): RenderResult {
  const memoryHistory = history ?? createMemoryHistory();

  return render(
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
}

type RenderWithProvidersOptions = {
  initialState?: State;
  history?: MemoryHistory;
};

export function renderWithProviders(
  component: ReactElement,
  { initialState = createMockState(), history }: RenderWithProvidersOptions = {}
) {
  const { withStoreComponent, mockStore, mockAxiosAdapter } =
    createComponentWithStore(component, initialState);

  const renderResult = renderWithHistory(withStoreComponent, { history });

  return {
    ...renderResult,
    store: mockStore,
    mockAxiosAdapter,
  };
}
