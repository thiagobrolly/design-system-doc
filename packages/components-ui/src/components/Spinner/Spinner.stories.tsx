import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spinner, SpinnerProps } from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  args: {
    size: 50,
    margin: '',
    marginTop: '',
    marginBottom: '',
    marginLeft: '',
    marginRight: '',
  },
} as Meta<SpinnerProps>;

export const Default: Story<SpinnerProps> = (args) => <Spinner {...args} />;
