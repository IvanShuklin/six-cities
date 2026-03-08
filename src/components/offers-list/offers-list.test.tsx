import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import OffersList from './offers-list';
import { mockOffer } from '../../mocks';
import { createMockStore } from '../../utils/test-utils';

const store = createMockStore();

describe('OffersList component', () => {
  it('should render offers list', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <OffersList offers={[mockOffer]} className="offers" />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('offers-list')).toBeInTheDocument();
  });
});
