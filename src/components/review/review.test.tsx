import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Review from './review';
import { AuthorizationStatus } from '../../const/const';
import { mockComment } from '../../mocks';
import { createMockStore } from '../../utils/test-utils';

const store = createMockStore();

describe('Review component', () => {
  it('should render reviews list', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Review
            authorizationStatus={AuthorizationStatus.NoAuth}
            comments={[mockComment]}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Very nice place')).toBeInTheDocument();
  });

  it('should render review form for authorized user', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Review
            authorizationStatus={AuthorizationStatus.Auth}
            comments={[mockComment]}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Your review')).toBeInTheDocument();
  });
});
