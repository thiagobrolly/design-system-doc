import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion } from '.';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

export const Default: Story = () => <Accordion />;
