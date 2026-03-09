import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import OffersList from './offers-list';
import { mockOffer } from '../../mocks';
import { renderWithProviders } from '../../utils/test-utils';

describe('OffersList component', () => {
  it('should render offers list', () => {
    renderWithProviders(
      <MemoryRouter>
        <OffersList offers={[mockOffer]} className="offers" />
      </MemoryRouter>
    );

    expect(screen.getByTestId('offers-list')).toBeInTheDocument();
  });
});
