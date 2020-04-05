import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Ticket from '..';

describe('<Ticket/>', () => {
  it('should render a Ticket with color and text', () => {
    const { container } = render(<Ticket itemId="123-321" selected={false} />);
    expect(container).toMatchSnapshot();
  });
});
