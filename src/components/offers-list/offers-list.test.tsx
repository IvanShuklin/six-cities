import { screen } from '@testing-library/react';
import OffersList from './offers-list';
import { createMockOffer } from '../../utils/mock-offer';
import { renderWithProviders } from '../../utils/test';

describe('OffersList component', () => {
  it('should render offers list', () => {
    renderWithProviders(
      <OffersList
        offers={[createMockOffer()]}
        className="offers"
      />
    );

    expect(screen.getByText('Beautiful apartment')).toBeInTheDocument();
  });
});
