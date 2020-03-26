import React from 'react';
import { render } from '@testing-library/react';
import Card from '..';

describe('<Card/>', () => {
  it('should render a card with color and text', () => {
    const { container } = render(<Card text="Hello World" color="yellow" labels="label" status="status" points="2" selected={false} />);
    expect(container).toMatchSnapshot();
  });
});
