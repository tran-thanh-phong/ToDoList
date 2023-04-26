import { render } from '@testing-library/react';

import AddTask from './add-task';

describe('AddTask', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddTask />);
    expect(baseElement).toBeTruthy();
  });
});
