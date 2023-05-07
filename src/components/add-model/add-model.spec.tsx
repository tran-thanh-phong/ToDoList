import { render } from '@testing-library/react';

import AddModel from './add-model';

describe('AddModel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddModel />);
    expect(baseElement).toBeTruthy();
  });
});
