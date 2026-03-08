import { render } from '@testing-library/react';
import Spinner from './spinner';

describe('Spinner component', () => {
  it('should render spinner', () => {
    const { container } = render(<Spinner />);

    expect(container.querySelector('.spinner')).toBeInTheDocument();
  });

  it('should render fullscreen spinner', () => {
    const { container } = render(<Spinner fullPage />);

    expect(
      container.querySelector('.spinner--fullscreen')
    ).toBeInTheDocument();
  });
});
