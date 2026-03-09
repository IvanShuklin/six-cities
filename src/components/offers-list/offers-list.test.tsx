import { screen } from '@testing-library/react';
import OffersList from './offers-list';
import { mockOffer } from '../../mocks';
import { renderWithHistory } from '../../utils/test';

describe('OffersList component', () => {
  it('should render offers list', () => {
    renderWithHistory(<OffersList offers={[mockOffer]} className="offers" />);

    expect(screen.getByTestId('offers-list')).toBeInTheDocument();
  });
});
