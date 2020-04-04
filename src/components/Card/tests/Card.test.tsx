import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Card from '..';

describe('<Card/>', () => {
  it('should render a card with color and text', () => {
    const { container } = render(<Card itemId="123-321" selected={false} />);
    expect(container).toMatchSnapshot();
  });
});
