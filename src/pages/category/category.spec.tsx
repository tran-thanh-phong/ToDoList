import { render } from '@testing-library/react';

import Category from './category';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Category />);
    expect(baseElement).toBeTruthy();
  });
});
