import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

describe('<Card/>', () => {
  it('should render a card with color and text', () => {
    const size = { width: 100, height: 200 };
    const { getByText } = render(<Card text="Hello World" color="yellow" size={size} />);
    expect(getByText('Hello World')).toMatchSnapshot();
  });
});
