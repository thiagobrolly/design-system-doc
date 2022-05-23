import React from 'react';
import { render, screen } from '@testing-library/react';

import { Accordion } from '.';

describe('<Accordion />', () => {
  it('should render the heading', () => {
    render(<Accordion />);

    expect(
      screen.getByRole('heading', { name: /Accordion/i }),
    ).toBeInTheDocument();
  });
});
