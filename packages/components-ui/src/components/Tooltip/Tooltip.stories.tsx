import { Story, Meta } from '@storybook/react/types-6-0';
import { Tooltip, TooltipProps } from '.';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    trigger: { type: 'string' },
    children: { type: 'string' },
  },
} as Meta;

export const Default: Story<TooltipProps> = (args) => <Tooltip {...args} />;

Default.args = {
  trigger: 'Click here',
  children: 'content',
  position: 'left',
};
