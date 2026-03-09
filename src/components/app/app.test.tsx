import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';
import { renderWithHistory } from '../../utils/test';

describe('Application routing', () => {
  it('should render MainPage when user navigates to "/"', () => {
    renderWithHistory(
      <App RouterComponent={(props) =>
        <MemoryRouter initialEntries={['/']} {...props} />}
      />
    );

    expect(screen.getByText('Cities')).toBeInTheDocument();
  });

  it('should render LoginPage when user navigates to "/login"', () => {
    renderWithHistory(
      <App RouterComponent={(props) =>
        <MemoryRouter initialEntries={['/login']} {...props} />}
      />
    );

    expect(
      screen.getByRole('heading', { name: 'Sign in' })
    ).toBeInTheDocument();
  });

  it('should render NotFoundPage for unknown route', () => {
    renderWithHistory(
      <App RouterComponent={(props) =>
        <MemoryRouter initialEntries={['/some-unknown-route']} {...props} />}
      />
    );

    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
  });
});
