import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import App from './app';
import { createMockStore } from '../../utils/test-utils';

describe('Application routing', () => {
  it('should render MainPage when user navigates to "/"', () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <HelmetProvider>
          <App
            RouterComponent={(props) => <MemoryRouter initialEntries={['/']} {...props} />}
          />
        </HelmetProvider>
      </Provider>
    );

    expect(screen.getByText('Cities')).toBeInTheDocument();
  });

  it('should render LoginPage when user navigates to "/login"', () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <HelmetProvider>
          <App RouterComponent={(props) => <MemoryRouter initialEntries={['/']} {...props} />} />
        </HelmetProvider>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should render NotFoundPage for unknown route', () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <HelmetProvider>
          <App
            RouterComponent={(props) =>
              <MemoryRouter initialEntries={['/some-unknown-route']} {...props} />}
          />
        </HelmetProvider>
      </Provider>
    );

    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
  });
});
