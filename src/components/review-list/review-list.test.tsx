import { screen } from '@testing-library/react';
import ReviewList from './review-list';
import { createMockComment } from '../../utils/mock-comment';
import { renderWithProviders } from '../../utils/test';

describe('ReviewList component', () => {
  it('should render review list', () => {
    renderWithProviders(
      <ReviewList comments={[createMockComment()]} />
    );

    expect(screen.getByText('Very nice place')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
  });
});
