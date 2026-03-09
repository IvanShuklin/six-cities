import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';
import { renderWithProviders } from '../../utils/test-utils';

describe('Application routing', () => {
  it('should render MainPage when user navigates to "/"', () => {
    renderWithProviders(
      <App RouterComponent={(props) =>
        <MemoryRouter initialEntries={['/']} {...props} />}
      />
    );

    expect(screen.getByText('Cities')).toBeInTheDocument();
  });

  it('should render LoginPage when user navigates to "/login"', () => {
    renderWithProviders(
      <App RouterComponent={(props) =>
        <MemoryRouter initialEntries={['/login']} {...props} />}
      />
    );

    expect(
      screen.getByRole('heading', { name: 'Sign in' })
    ).toBeInTheDocument();
  });

  it('should render NotFoundPage for unknown route', () => {
    renderWithProviders(
      <App RouterComponent={(props) =>
        <MemoryRouter initialEntries={['/some-unknown-route']} {...props} />}
      />
    );

    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
  });
});
