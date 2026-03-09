import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from './logo';
import { renderWithProviders } from '../../utils/test-utils';

describe('Logo component', () => {
  it('should render logo image', () => {
    renderWithProviders(
      <MemoryRouter>
        <Logo
          classNameLink="logo-link"
          classNameImage="logo-img"
          width={100}
          height={50}
        />
      </MemoryRouter>
    );

    expect(screen.getByAltText('6 cities logo')).toBeInTheDocument();
  });
});
