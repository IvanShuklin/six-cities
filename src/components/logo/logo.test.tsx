import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from './logo';

describe('Logo component', () => {
  it('should render logo image', () => {
    render(
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
