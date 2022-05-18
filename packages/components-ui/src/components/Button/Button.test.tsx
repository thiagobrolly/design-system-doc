import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  it('should render a white label by default', () => {
    render(<Button label="Click" />);
    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      backgroundColor: '#fff',
    });
  });
});
