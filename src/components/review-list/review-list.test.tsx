import { render, screen } from '@testing-library/react';
import ReviewList from './review-list';
import { mockComment } from '../../mocks';

describe('ReviewList component', () => {
  it('should render comments', () => {
    render(<ReviewList comments={[mockComment]} />);

    expect(screen.getByText('Very nice place')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
  });
});
