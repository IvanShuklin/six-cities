import { screen } from '@testing-library/react';
import PrivateRoute from './private-route';
import { renderWithProviders } from '../../utils/test';
import { AuthorizationStatus, AppRoute } from '../../const/const';
import { createMockState } from '../../utils/mock-state';
import { Route, Routes } from 'react-router-dom';

describe('PrivateRoute', () => {
  it('should render children when user is authorized', () => {
    const state = createMockState();
    state.auth.authorizationStatus = AuthorizationStatus.Auth;

    renderWithProviders(
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <PrivateRoute>
              <span>Private content</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      { initialState: state }
    );

    expect(screen.getByText('Private content')).toBeInTheDocument();
  });

  it('should redirect to login when user is not authorized', () => {
    const state = createMockState();
    state.auth.authorizationStatus = AuthorizationStatus.NoAuth;

    renderWithProviders(
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <PrivateRoute>
              <span>Private content</span>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<span>Login page</span>} />
      </Routes>,
      { initialState: state }
    );

    expect(screen.getByText('Login page')).toBeInTheDocument();
    expect(screen.queryByText('Private content')).not.toBeInTheDocument();
  });
});
