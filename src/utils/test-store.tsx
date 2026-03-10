import { Provider } from 'react-redux';
import { configureMockStore, MockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { State } from '../types/main-state';
import { ReactElement } from 'react';

type ComponentWithStore = {
  withStoreComponent: ReactElement;
  mockStore: MockStore<State>;
  mockAxiosAdapter: MockAdapter;
};

export function createComponentWithStore(
  component: ReactElement,
  initialState: State
): ComponentWithStore {

  const api = createAPI();
  const mockAxiosAdapter = new MockAdapter(api);

  const middleware = [thunk.withExtraArgument(api)];
  const mockStoreCreator = configureMockStore<State, Action<string>>(middleware);

  const mockStore = mockStoreCreator(initialState);

  return {
    withStoreComponent: (
      <Provider store={mockStore}>
        {component}
      </Provider>
    ),
    mockStore,
    mockAxiosAdapter,
  };
}
