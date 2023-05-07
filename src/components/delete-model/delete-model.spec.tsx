import { render } from '@testing-library/react';

import DeleteModel from './delete-model';

describe('DeleteModel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeleteModel />);
    expect(baseElement).toBeTruthy();
  });
});
