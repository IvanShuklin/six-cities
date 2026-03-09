import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Review from './review';
import { AuthorizationStatus } from '../../const/const';
import { mockComment } from '../../mocks';
import { renderWithProviders, createMockStore } from '../../utils/test-utils';

describe('Review component', () => {
  it('should render reviews list', () => {
    const store = createMockStore();

    renderWithProviders(
      <MemoryRouter>
        <Review
          authorizationStatus={AuthorizationStatus.NoAuth}
          comments={[mockComment]}
        />
      </MemoryRouter>,
      store
    );

    expect(screen.getByText('Very nice place')).toBeInTheDocument();
  });

  it('should render review form for authorized user', () => {
    const store = createMockStore();

    renderWithProviders(
      <MemoryRouter>
        <Review
          authorizationStatus={AuthorizationStatus.Auth}
          comments={[mockComment]}
        />
      </MemoryRouter>,
      store
    );

    expect(screen.getByText('Your review')).toBeInTheDocument();
  });
});
