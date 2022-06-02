import styled, { keyframes } from 'styled-components';
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from '@radix-ui/react-accordion';
import { theme } from '@paylivre/styles';
import { PlOutlineArrowDown } from '@paylivre/icons';
import { AccordionProps } from '.';

const open = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;

const close = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

export const ChevronDownIcon = styled(PlOutlineArrowDown)`
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);

  [data-state='open'] & {
    transform: rotate(180deg);
  }
`;

export const AccordionWrapper = styled(Root)<AccordionProps>`
  border-radius: 2px;
  width: ${({ width }) => width || '30rem'};
  background: #fff;
`;

export const AccordionItem = styled(Item)`
  //overflow: hidden;

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${theme.color.primary};
  }
`;

export const AccordionHeader = styled(Header)`
  all: unset;
  display: flex;
`;

export const AccordionTrigger = styled(Trigger)`
  all: unset;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;

  &:hover {
    background: ${theme.color.gray_500};
  }
`;

export const AccordionContent = styled(Content)`
  overflow: hidden;
  background-color: aliceblue;

  &[data-state='open'] {
    animation: ${open} 300ms ease-out forwards;
  }
  &[data-state='closed'] {
    animation: ${close} 300ms ease-out forwards;
  }
`;

export const ContentHeader = styled.div`
  padding: 15px 20px;
`;
