import { render } from '@testing-library/react';

import ExpandSidebarItem from './expand-sidebar-item';

describe('ExpandSidebarItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpandSidebarItem />);
    expect(baseElement).toBeTruthy();
  });
});
