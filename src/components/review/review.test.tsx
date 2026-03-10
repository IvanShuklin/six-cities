import { screen } from '@testing-library/react';
import Review from './review';
import { AuthorizationStatus } from '../../const/const';
import { createMockComment } from '../../utils/mock-comment';
import { renderWithProviders } from '../../utils/test';

describe('Review component', () => {
  it('should render reviews list', () => {
    renderWithProviders(
      <Review
        authorizationStatus={AuthorizationStatus.NoAuth}
        comments={[createMockComment()]}
      />
    );

    expect(screen.getByText('Very nice place')).toBeInTheDocument();
  });

  it('should render review form for authorized user', () => {
    renderWithProviders(
      <Review
        authorizationStatus={AuthorizationStatus.Auth}
        comments={[createMockComment()]}
      />
    );

    expect(screen.getByText('Your review')).toBeInTheDocument();
  });
});
