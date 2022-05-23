import styled from 'styled-components';
import { theme } from '@brolly-ui/styles';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export interface TooltipProps {
  colorContent?: string;
}

export const Trigger = styled(TooltipPrimitive.Trigger)`
  border: 0;
  width: fit-content;
  background: none;
  cursor: pointer;
`;

export const Content = styled(TooltipPrimitive.Content)<TooltipProps>`
  border-radius: ${theme.border.radius.small};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ colorContent }) => colorContent || theme.color.white};
  padding: 10px;
`;

export const Arrow = styled(TooltipPrimitive.Arrow)<TooltipProps>`
  fill: ${({ colorContent }) => colorContent || theme.color.white};
`;
