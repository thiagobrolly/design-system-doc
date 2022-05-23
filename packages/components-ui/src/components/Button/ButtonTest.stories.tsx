import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    disabled: false,
    fullWidth: false,
    linkStyle: false,
    children: 'Click',
    appearance: 'secondary',
    size: 'medium',
    type: 'button',
    margin: '',
    marginTop: '',
    marginBottom: '',
    marginLeft: '',
    marginRight: '',
  },
  argTypes: {
    as: { type: 'symbol' },
    children: {
      type: 'string',
    },
  },
} as Meta;

export const All: Story<ButtonProps> = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background:
        'linear-gradient(90deg, rgba(33,90,255,1) 20%, rgba(0,151,255,1) 60%)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }}
  >
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button appearance="primary" margin="1rem">
        primary
      </Button>
      <Button appearance="secondary" margin="1rem">
        secondary
      </Button>
      <Button appearance="outline" margin="1rem">
        outline
      </Button>
      <Button appearance="approve" margin="1rem">
        approve
      </Button>
      <Button appearance="cancel" margin="1rem">
        cancel
      </Button>
    </div>

    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button appearance="primary" disabled margin="1rem">
        primary
      </Button>
      <Button appearance="secondary" disabled margin="1rem">
        secondary
      </Button>
      <Button appearance="outline" disabled margin="1rem">
        outline
      </Button>
      <Button appearance="approve" disabled margin="1rem">
        approve
      </Button>
      <Button appearance="cancel" disabled margin="1rem">
        cancel
      </Button>
    </div>
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button appearance="primary" isLoading margin="1rem">
        primary
      </Button>
      <Button appearance="secondary" isLoading margin="1rem">
        secondary
      </Button>
      <Button appearance="outline" isLoading margin="1rem">
        outline
      </Button>
      <Button appearance="approve" isLoading margin="1rem">
        approve
      </Button>
      <Button appearance="cancel" isLoading margin="1rem">
        cancel
      </Button>
    </div>
  </div>
);

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />;
Primary.args = {
  children: 'Primary',
  appearance: 'primary',
};

// export const Secondary: Story<ButtonProps> = (args) => <Button {...args} />;
// Secondary.args = {
//   children: 'Secondary',
//   appearance: 'secondary',
// };

// export const Outline: Story<ButtonProps> = (args) => <Button {...args} />;
// Outline.args = {
//   children: 'Outline',
//   appearance: 'outline',
// };

// export const Approve: Story<ButtonProps> = (args) => <Button {...args} />;
// Approve.args = {
//   children: 'Approve',
//   appearance: 'approve',
// };

// export const Cancel: Story<ButtonProps> = (args) => <Button {...args} />;
// Cancel.args = {
//   children: 'Cancel',
//   appearance: 'cancel',
// };

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />;
asLink.args = {
  children: 'Link',
  as: 'a',
  href: '#',
};

asLink.argTypes = {
  as: { type: 'string' },
};

// export const LinkChildren: Story<ButtonProps> = (args) => (
//   <Button {...args}>
//     <a href="/">Link</a>
//   </Button>
// );
// LinkChildren.args = {
//   appearance: 'secondary',
//   // linkStyle: true,
// };
