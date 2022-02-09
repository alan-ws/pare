import { render } from '@testing-library/react';
import { Home } from '.';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });
});
