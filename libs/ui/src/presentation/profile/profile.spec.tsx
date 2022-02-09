import { render } from '@testing-library/react';
import { Profile } from '.';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Profile />);
    expect(baseElement).toBeTruthy();
  });
});
