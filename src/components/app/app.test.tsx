import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Fragment } from 'react';

import App from './app';
import { renderWithHistory } from '../../utils/test';
import { createComponentWithStore } from '../../utils/test-store';
import { createMockState } from '../../utils/mock-state';
import { AuthorizationStatus } from '../../const/const';

describe('Application routing', () => {
  it('should render MainPage when user navigates to "/"', () => {
    const history = createMemoryHistory();
    history.push('/');

    const state = createMockState();

    const { withStoreComponent } = createComponentWithStore(
      <App RouterComponent={Fragment} />,
      state
    );

    renderWithHistory(withStoreComponent, { history });

    expect(screen.getByText('Cities')).toBeInTheDocument();
  });

  it('should render LoginPage when user navigates to "/login"', () => {
    const history = createMemoryHistory();
    history.push('/login');

    const state = createMockState();
    state.auth.authorizationStatus = AuthorizationStatus.NoAuth;

    const { withStoreComponent } = createComponentWithStore(
      <App RouterComponent={Fragment} />,
      state
    );

    renderWithHistory(withStoreComponent, { history });

    expect(
      screen.getByRole('heading', { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it('should render NotFoundPage for unknown route', () => {
    const history = createMemoryHistory();
    history.push('/unknown');

    const state = createMockState();

    const { withStoreComponent } = createComponentWithStore(
      <App RouterComponent={Fragment} />,
      state
    );

    renderWithHistory(withStoreComponent, { history });

    expect(
      screen.getByRole('heading', { name: /404/i })
    ).toBeInTheDocument();
  });
});
