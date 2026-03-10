import { screen } from '@testing-library/react';
import Logo from './logo';
import { renderWithHistory } from '../../utils/test';

describe('Logo component', () => {
  it('should render logo image', () => {
    renderWithHistory(
      <Logo
        classNameLink="logo-link"
        classNameImage="logo-img"
        width={100}
        height={50}
      />
    );

    expect(screen.getByAltText('6 cities logo')).toBeInTheDocument();
  });
});
