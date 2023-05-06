import { render } from '@testing-library/react';

import FilterTag from './filter-tag';

describe('FilterTag', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilterTag />);
    expect(baseElement).toBeTruthy();
  });
});
