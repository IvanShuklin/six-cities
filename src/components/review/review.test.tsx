import { screen } from '@testing-library/react';
import Review from './review';
import { AuthorizationStatus } from '../../const/const';
import { mockComment } from '../../mocks';
import { renderWithHistory } from '../../utils/test';

describe('Review component', () => {
  it('should render reviews list', () => {
    renderWithHistory(
      <Review
        authorizationStatus={AuthorizationStatus.NoAuth}
        comments={[mockComment]}
      />
    );

    expect(screen.getByText('Very nice place')).toBeInTheDocument();
  });

  it('should render review form for authorized user', () => {
    renderWithHistory(
      <Review
        authorizationStatus={AuthorizationStatus.Auth}
        comments={[mockComment]}
      />
    );

    expect(screen.getByText('Your review')).toBeInTheDocument();
  });
});
