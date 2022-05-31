import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Modal, ModalProps } from '.';
import { Button } from '../..';

export default {
  title: 'Popover/Modal',
  component: Modal,
  argTypes: {},
  args: {
    shouldCloseOnOverlayClick: false,
    shouldCloseOnEscClick: true,
    viewCloseButton: false,
    scrollBarDisabled: true,
    children: 'Modal',
    title: 'Title',
  },
} as Meta;

// export const Dafault: Story<ModalProps> = (args) => <Modal {...args} />;

export const Template: Story<ModalProps> = (args) => {
  // const [isOpen, setOpen] = useState(args.isOpen);
  const [, updateArgs] = useArgs();

  return (
    <>
      <Button
        variant="secondary"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={(isOpen: any) => updateArgs({ isOpen })}
      >
        Abrir Modal
      </Button>

      <Modal {...args} onRequestClose={(isOpen) => updateArgs({ isOpen })}>
        {args.children}
      </Modal>
    </>
  );
};

// Dafault.args = {
//   isOpen: true,
// };

Template.args = {
  isOpen: false,
  viewCloseButton: true,
};
