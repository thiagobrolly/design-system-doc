import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Template: Story<ButtonProps> = (args) => <Button {...args} />;
Template.args = {
  label: 'Click',
  themeColor: '#fff',
};
